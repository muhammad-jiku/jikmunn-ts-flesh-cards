import { config } from 'dotenv';
config();
import mongoose, { ConnectOptions } from 'mongoose';

const uri = `${process.env.DB_URI}`;
const options: ConnectOptions = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
};

export const connectToDB = async () => {
  await mongoose
    .connect(uri, options)
    .then((data) => {
      console.log('DB connected!!');
      // console.log(`Mongodb connected with server: ${data?.connection?.host}`);
    })
    .catch((err) => {
      // console.log(err);
      console.log('Something Went Wrong!');
    });
};
