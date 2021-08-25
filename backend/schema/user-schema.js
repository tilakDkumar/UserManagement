const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Users = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "sr.dev"],
  },
  phone: {
    type: Number,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  start_date: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "disabled", "deleted"],
  },
  about: {
    type: String,
    required: true,
  },
  created_date: Date,
  updated_date: Date,
});

const User = mongoose.model("user", Users);
module.exports = { User };
