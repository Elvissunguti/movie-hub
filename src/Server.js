const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const cors = require('cors');
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const app = express();






mongoose.connect(process.env.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err){
        console.log(err);
        return
    }

    const db = client.db('MovieHubDb');
    const user = db.collection("user");
});
 
const User = mongoose.model('User', {
    username: {
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



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Login/Login.jsx")
});




app.post("/login", async ( req, res) => {
    try{
        const { firstName, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser){
            return res.status(409).json({ message: "User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            firstName,
            email,
            password: hashedPassword,
        });

        await user.save()

        res.status(201).json({ message: "User created successfully"});
    } catch (error){
        console.log(error);
        res.status(500).json({ message: "Server error"});
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });