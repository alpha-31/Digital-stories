require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB:', err));
    
mongoose.set('strictQuery', true);
// Routes
app.use('/api/users', require('./routes/usersRoute'));
app.use('/api/comments', require('./routes/commentsRoute'));
app.use('/api/stories', require('./routes/storiesRoute'));


const PORT = process.env.PORT || 5020;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
