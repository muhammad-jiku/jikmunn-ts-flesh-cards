import { connectToDB } from './utils/connectToDB';
import { app } from './app';

const port = process.env.PORT || 5000;

// Connecting to database
connectToDB();

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
