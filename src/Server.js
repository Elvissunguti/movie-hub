const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();




const mongoURI = 'mongodb+srv://MovieHub:MovieHub@cluster0.jtynzmk.mongodb.net/MovieHubDb?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err){
        console.log(err);
        return
    }

    const db = client.db('MovieHubDb');
    const user = db.collection("user");
});
 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
    },
     email: {
        type: String,
        required: true,
        unique: true,
     },
     password: {
        type: String,
        required: true,
        
     },
})

const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Login/Login.jsx")
});




app.post("/signup", async ( req, res) => {
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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });