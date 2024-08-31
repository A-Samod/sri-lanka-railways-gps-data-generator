# Sri Lanka Railways GPS Data Generator

*This Node.js application simulates GPS data for 10 trains operating on 3 routes in Sri Lanka. It generates and transmits GPS data at one-minute intervals to the [`sri-lanka-railways-location-api`](https://github.com/A-Samod/sri-lanka-railways-location-api), enabling real-time location tracking.*

## Features

- Simulate real-time GPS data for 10 trains across 3 major routes in Sri Lanka.
- Transmit GPS data to the backend API at one-minute intervals.
- Configurable transmission interval through environment variables.
  
## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (for train data storage)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/sri-lanka-railways-gps-data-generator.git
   ```
   ```bash
   cd sri-lanka-railways-gps-data-generator
   ```
   
2. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables:**
   ```bash
   BACKEND_API_URL=http://localhost:5000/api/v1
   ```
   ```bash
   INTERVAL_MS=60000  # Interval for GPS data transmission (in milliseconds)
   ```
    ```bash
   MONGO_URI=mongodb://localhost:27017/railways  # Connection string for MongoDB
    ```
5. **Start the application:**
   ```bash
   npm start
   ```

## Configuration
- *BACKEND_API_URL*: The URL of the backend API where GPS data is transmitted.
- *INTERVAL_MS*: The interval (in milliseconds) at which GPS data is generated and transmitted. Default is 60000 ms (1 minute).
- *MONGO_URI*: The connection string for the MongoDB database that stores train data.
