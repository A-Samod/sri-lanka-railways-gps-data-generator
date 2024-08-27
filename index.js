const { startSimulation } = require('./src/services/gpsGeneratorService');
const connectDB = require('./src/config/db');

// Connect to MongoDB
connectDB();

console.log("Starting GPS data simulation...");
startSimulation();
