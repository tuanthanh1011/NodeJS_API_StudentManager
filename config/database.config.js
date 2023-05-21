const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/StudentManager', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connect successfully');
  } catch (err) {
    console.log('Connect failed:', err);
  }
}

module.exports = { connect };
