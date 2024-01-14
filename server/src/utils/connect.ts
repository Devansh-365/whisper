import mongoose from "mongoose";

async function connect() {
  const dbUri = process.env.DbUri;
  try {
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch (error) {
    console.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
