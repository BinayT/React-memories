import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: 'true' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: 'true' }));
app.use(cors());

import { MONGO_URI } from './config.js';
import postRoutes from './routes/posts.js';

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(PORT, console.log('Server running on port  ' + PORT)))
  .catch((err) => {
    console.log(err.message);
  });

mongoose.set('useFindAndModify', false);
