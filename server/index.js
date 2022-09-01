require('dotenv/config');
const express = require('express');
const db = require('./db');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const jsonMiddleware = express.json();

const app = express();
app.use(staticMiddleware);

app.get('/api/gyms', (req, res, next) => {
  const sql = `
  select "gymId",
         "name",
         "imageUrl",
         "shortDescription",
         "longDescription"
    from "gyms"
  `;
})

app.use(jsonMiddleware);

app.post('/api/gyms', (req, res, next) => {
  const { name, address, type } =  req.body;
  const sql = `
  insert into "gyms" (
    "name",
    "address",
    "type"
    ) values ($1, $2, $3)
  returning "gymId", "name", "address", "type"
  `;

  const params = [name, address, type];

  db.query(sql, params)
  .then(result => {
    res.status(201).json({message: 'Looks good'});
  })
  .catch(err => console.error('sucks', err));
});

app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
  console.log(`Express listening on port ${process.env.PORT}`);
})
