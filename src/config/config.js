require('dotenv').config();

module.exports = {
  backendApiUrl: process.env.BACKEND_API_URL || 'http://localhost:4000/api/v1',
  intervalMs: parseInt(process.env.INTERVAL_MS, 10) || 60000
};

