require('dotenv/config');
const pg = require('pg');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});
const cities = require('./cities');
const { descriptors, nouns, types } = require('./nameSeeds');

const sample = array => array[Math.floor(Math.random() * array.length)];
const seedData = async () => {
  for (let i = 0; i < 50; i++) {
    const random = Math.floor(Math.random() * 1000);

    fetch('http://localhost:3001/api/gyms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${sample(descriptors)} ${sample(nouns)}`,
        address: `${cities[random].city}, ${cities[random].state}`,
        type: `${sample(types)}`
      })
    })
      .catch(err => console.error('Looks bad!!!', err));
  }
}

seedData();
