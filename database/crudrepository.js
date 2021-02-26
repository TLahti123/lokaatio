let counter = 0;

let db = [
  { id: counter++, latitude: 80, longitude: 80 }, // 0
  { id: counter++, latitude: 80, longitude: 80 }, // 1
  { id: counter++, latitude: 80, longitude: 80 }, // 2
];

const funkkareita = {
  findAll: () => db,
  findById: (id) => db.find((item) => item.id === id),
  deleteById: (id) => {
    let newDB = db.filter((item) => item.id !== id);
    if (newDB.length === db.length) {
      return false;
    } else {
      db = newDB;
      return true;
    }
  },
  save: (location) => {
    location.id = counter++;
    db.push(location);
    return location;
  },
};

module.exports = funkkareita;
