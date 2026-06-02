import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { User, Internship, Hackathon, Assessment } from './models.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/internship_hq';

app.use(cors());
app.use(express.json());

// Basic connection error handling
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected');
    // Seed data if empty
    const count = await Internship.countDocuments();
    if (count === 0) {
      await seedDatabase();
    }
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/internships', async (req, res) => {
  const data = await Internship.find();
  res.json(data);
});

app.post('/api/internships', async (req, res) => {
  const newInternship = new Internship(req.body);
  await newInternship.save();
  res.status(201).json(newInternship);
});

app.get('/api/hackathons', async (req, res) => {
  const data = await Hackathon.find();
  res.json(data);
});

app.post('/api/hackathons', async (req, res) => {
  const newHackathon = new Hackathon(req.body);
  await newHackathon.save();
  res.status(201).json(newHackathon);
});

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

async function seedDatabase() {
  await Internship.insertMany([
    { title: 'Machine Learning Intern', company: 'TechFlow', code: 'TF', location: 'San Francisco, CA', tags: ['Python', 'PyTorch', 'Remote'], stipend: '$3,200/mo', closes: '5 Days', applicants: 210, verified: true },
    { title: 'Frontend Engineer', company: 'Stripe', code: 'STR', location: 'Remote', tags: ['React', 'Tailwind', 'TypeScript'], stipend: '$3,500/mo', closes: '3 Days', applicants: 156, verified: true }
  ]);
  await Hackathon.insertMany([
    { title: 'Global AI Hackathon', organizer: 'OpenAI', date: 'Oct 28 - Nov 2', prizePool: '$50,000', participants: 4200, tags: ['AI', 'LLMs'] },
    { title: 'Fintech Build Sprint', organizer: 'Stripe', date: 'Nov 15', prizePool: '$20,000', participants: 1500, tags: ['Fintech', 'Payments'] }
  ]);
  console.log('Database seeded successfully');
}
