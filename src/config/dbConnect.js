import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jdeveloperanalyst:jon123@node-express.kcfgmvu.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
