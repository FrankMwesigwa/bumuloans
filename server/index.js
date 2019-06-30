import express from 'express';
import dotenv from 'dotenv';
import connectDB from './configs/db';
import users from './users/routes';
import auth from './auth/routes';
import books from './books/routes';

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use('/users', users);
app.use('/account', auth);
app.use('/books', books);

const port = process.env.PORT || 9005;

app.listen(port, () => console.log(`Server started on port ${port}`));