const axios = require('axios');
const { trains, routes } = require('../data/trains');
const config = require('../config/config');

//Generates random GPS data for a given route.
const generateGpsData = (route) => {
  const index = Math.floor(Math.random() * route.length);
  const { lat, lon } = route[index];
  const speed = Math.floor(Math.random() * 80) + 20; // Speed between 20 and 100 km/h
  return { latitude: lat, longitude: lon, speed};
};

//Sends GPS data for a specific train to the backend API.
const sendGpsData = async (train, gpsData) => {
  try {
    const response = await axios.post(`${config.backendApiUrl}/location`, {
      trainId: train.trainId,
      latitude: gpsData.latitude,
      longitude: gpsData.longitude,
      speed: gpsData.speed,
    });
    console.log(`Data sent for ${train.trainName}: ${response.status}`);
  } catch (error) {
    console.error(`Failed to send data for ${train.trainName}: ${error.message}`);
  }
};

//Starts the simulation of GPS data generation and transmission.
const startSimulation = () => {
  setInterval(() => {
    trains.forEach(train => {
      const route = routes[train.routeId];
      const gpsData = generateGpsData(route);
      sendGpsData(train, gpsData);
    });
  }, config.intervalMs);
};

module.exports = { startSimulation };
