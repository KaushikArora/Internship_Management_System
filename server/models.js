import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role: { type: String, enum: ['student', 'employer', 'admin'], default: 'student' },
  university: String,
  major: String,
  year: String,
  gpa: String,
  location: String,
  github: String,
  profileStrength: Number,
  xp: Number,
  rank: Number,
  streak: Number,
  verified: Boolean,
});

const InternshipSchema = new mongoose.Schema({
  title: String,
  company: String,
  code: String,
  location: String,
  tags: [String],
  stipend: String,
  closes: String,
  applicants: Number,
  verified: Boolean,
});

const HackathonSchema = new mongoose.Schema({
  title: String,
  organizer: String,
  date: String,
  prizePool: String,
  participants: Number,
  tags: [String],
  image: String,
});

const AssessmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  timerMinutes: Number,
  starterCode: String,
  testCases: [{
    description: String,
    expectedOutput: String,
    expectedContent: String // basic code scanning string check for MVP
  }]
});

export const User = mongoose.model('User', UserSchema);
export const Internship = mongoose.model('Internship', InternshipSchema);
export const Hackathon = mongoose.model('Hackathon', HackathonSchema);
export const Assessment = mongoose.model('Assessment', AssessmentSchema);
