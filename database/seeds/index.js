require('dotenv/config');
const pg = require('pg');
const { createApi } = require('unsplash-js');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_TOKEN
});

const cities = require('./cities');
const { descriptors, nouns, types } = require('./nameSeeds');

const sample = array => array[Math.floor(Math.random() * array.length)];
const seedData = async () => {
  for (let i = 0; i < 48; i++) {
    let image = '';
    const random = Math.floor(Math.random() * 1000);

    unsplash.photos.getRandom({
      collectionIds: ['AZyVw2W8P1E']
    })
      .then(result => {
        if (result.errors) {
          console.error('Unsplash result error:', result.errors[0])
        } else {
          image = result.response.urls.regular;
          fetch('https://colosseum.fly.dev/api/gyms', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: `${sample(descriptors)} ${sample(nouns)}`,
              address: `${cities[random].city}, ${cities[random].state}`,
              type: `${sample(types)}`,
              imageURL: `${image}`
            })
          })
            .then(response => console.log(response.json()))
            .then(data => console.log('Success', data))
            .catch(err => console.error('Fetch error:', err));
        }
      })
      .catch(err => console.log('Unsplash Error:', err));
  }
}

seedData();
