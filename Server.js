
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB Atlas
mongoose.connect(
  'mongodb://Elvis:elvis@ac-fttkyf7-shard-00-00.jtynzmk.mongodb.net:27017,ac-fttkyf7-shard-00-01.jtynzmk.mongodb.net:27017,ac-fttkyf7-shard-00-02.jtynzmk.mongodb.net:27017/database?ssl=true&replicaSet=atlas-hbjmuw-shard-0&authSource=admin&retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log('Connected to MongoDB Atlas!');
}).catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

// User model
const User = mongoose.model('User', {
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});


// Sign-up endpoint
app.post("/signup", async (req, res) => {
  try {
    const { firstName, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      firstName,
      email,
      password: hashedPassword
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  try{
    const user = await User.findOne({ email })

    if(!user) {
      return res.json({ message: "Authentication failed"});
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.json({ message : "incorrect password" })
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      'secret_key' // secret key
    );

    return res.json({ token })



  } catch(error){
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
});



// logout endpoint`
app.post('/logout', (req, res) => {
  const redirectUrl = "/";
  return res.json({ message : "Logout Successful", redirectUrl})
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});