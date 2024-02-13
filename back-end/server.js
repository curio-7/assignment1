const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3000;


const connectDb = async () => {
    await mongoose.connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB Server is connected");
};

const mongooseDisconnect = async () => {
    await mongoose.disconnect();
    console.log("MongoDB connection is disconnected");
};


async function startServer() {
    await connectDb();

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();

module.exports = {
    connectDb,
    mongooseDisconnect,
};
