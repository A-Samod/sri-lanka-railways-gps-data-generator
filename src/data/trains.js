const trains = [
    { trainId: "T001", trainName: "Udarata Menike", routeId: "R001" },
    { trainId: "T002", trainName: "Podi Menike", routeId: "R001" },
    { trainId: "T003", trainName: "Sri Lanka Railways Express", routeId: "R001" },
    { trainId: "T004", trainName: "Ruhunu Kumari", routeId: "R002" },
    { trainId: "T005", trainName: "Galu Kumari", routeId: "R002" },
    { trainId: "T006", trainName: "Dakshina Lanka", routeId: "R002" },
    { trainId: "T007", trainName: "Yarl Devi", routeId: "R003" },
    { trainId: "T008", trainName: "Intercity Express", routeId: "R003" },
    { trainId: "T009", trainName: "Uttara Devi", routeId: "R003" },
    { trainId: "T010", trainName: "Northern Express", routeId: "R003" }
  ];
  
  const routes = {
    R001: [
      { lat: 6.9271, lon: 79.8612 }, // Colombo Fort
      { lat: 7.2906, lon: 80.6337 }, // Kandy
      { lat: 6.9497, lon: 80.7891 }  // Nanu Oya
    ],
    R002: [
      { lat: 6.9271, lon: 79.8612 }, // Colombo Fort
      { lat: 6.4213, lon: 81.0067 }, // Matara
      { lat: 6.0412, lon: 80.7934 }  // Beliatta
    ],
    R003: [
      { lat: 6.9271, lon: 79.8612 }, // Colombo Fort
      { lat: 8.5786, lon: 81.2333 }, // Anuradhapura
      { lat: 9.6615, lon: 80.0255 }  // Jaffna
    ]
  };
  
  module.exports = { trains, routes };
  