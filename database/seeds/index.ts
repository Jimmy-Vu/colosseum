require('dotenv/config');
const pg = require('pg');
const { createApi } = require('unsplash-js');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_TOKEN
});
const environment = process.argv[2];
console.log('environment:', environment);
let fetchURL = '';
if (environment === 'dev') {
  fetchURL = 'http://localhost:3001/api/gyms/dev';
} else {
  fetchURL = 'https://colosseum.fly.dev/api/gyms/dev'
}

const cities = require('./cities');
const { descriptors, nouns, types } = require('./nameSeeds');

const sample = (array: []) => array[Math.floor(Math.random() * array.length)];
const seedData = async () => {
  for (let i = 0; i < 1; i++) {
    let image = '';
    const random = Math.floor(Math.random() * 1000);

    unsplash.photos.getRandom({
      collectionIds: ['AZyVw2W8P1E']
    })
      .then((result: {
        errors: [0]; response: { urls: { regular: string } } }) => {
        if (result.errors) {
          console.error('Unsplash result error:', result.errors[0])
        } else {
          image = result.response.urls.regular;
          fetch(fetchURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: `${sample(descriptors)} ${sample(nouns)}`,
              address: `${cities[random].city}, ${cities[random].state}`,
              type: `${sample(types)}`,
              imageURL: `${image}`,
              description: ''
            })
          })
            .then(response => console.log(response.json()))
            .then(data => console.log('Fetch Seed Request Sent'))
            .catch(err => console.error('Fetch error:', err));
        }
      })
      .catch((err: Error) => console.log('Unsplash Error:', err));
  }
}

seedData();
