import { app } from "./app";
import mongoose from 'mongoose';

const PORT = 3000;
const HOSTNAME = "http://localhost";

mongoose.connect('mongodb://boticario:boticario@boticario-mongodb:27017', () => {
  console.log('Database connected');
});

app.listen(PORT, () => {
  console.log(`Server live on: ${HOSTNAME}:${PORT}`);
});
