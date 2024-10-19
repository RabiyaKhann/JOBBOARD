const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  employeeSize: { type: Number, required: true },
  emailVerified: { type: Boolean, default: false },
  mobileVerified: { type: Boolean, default: false },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
