
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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
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
app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});


// logout endpoint`
app.post('/logout', (req, res) => {

  res.json({ message: 'Logout successful' });
  });

  app.get('/api/check-authentication', (req, res) => {
    try {
      const token = req.headers.authorization;
  
      if (!token) {
        return res.status(401).json({ message: 'No token provided' });
      }
  
      // Verify the token
      jwt.verify(token, "RANDOM-TOKEN", (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Invalid token' });
        }
  
        // Token is valid
        const { userId, userEmail } = decoded;
        res.json({ isLoggedIn: true, userId, userEmail });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error checking authentication' });
    }
  });


// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});