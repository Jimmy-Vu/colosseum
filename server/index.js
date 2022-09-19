require('dotenv/config');
const util = require('util');
const express = require('express');
const db = require('./db');
const multer = require('multer');
const { storage } = require('./cloudinary');
const upload = multer({ storage }).single('image');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const jsonMiddleware = express.json();

const app = express();
app.use(staticMiddleware);

app.get('/api/gyms', (req, res, next) => {
  const sql = `
  select *
      from "gyms"
  `;

  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/gyms/:gymId', (req, res, next) => {
  const gymId = parseInt(req.params.gymId, 10);
  if (!gymId) {
    throw new ClientError(400, 'gradeId must be a postive integer');
  }
  const sql = `
  select *
      from "gyms"
      where "gymId" = $1
  `;
  const params = [gymId];

  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, 'gradeId cannot be found');
      }
      return res.json(result.rows[0]);
      })
    .catch(err => next(err));
});

// Mounting middleware for express app to be able to parse json requests
app.use(jsonMiddleware);
// Post route for dev database
app.post('/api/gyms/dev', (req, res, next) => {
  const { name, address, type, imageURL } = req.body;
  if (!name || !address || !type || !imageURL) {
    throw new ClientError(400, 'Please provide a name, address, type(s), and an image');
    console.error('Missing name, address, type, and/or image');
  }

  const sql = `
  insert into "gyms" (
    "name",
    "address",
    "type",
    "imageURL"
    ) values ($1, $2, $3, $4)
  returning "gymId", "name", "address", "type", "imageURL"
  `;

  const params = [name, address, type, imageURL];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.post('/api/gyms', upload, (req, res, next) => {
  const { name, address } = req.body;
  const imageURL = req.file.path;
  console.log(req.body.type);
  const parsedType = JSON.parse(req.body.type);
  const typeArray = [];
  for (let i in parsedType) {
    if (parsedType[i] === true) {
      typeArray.push(i);
    }
  }

  const sql = `
  insert into "gyms" (
    "name",
    "address",
    "type",
    "imageURL"
    ) values ($1, $2, $3, $4)
  returning "gymId", "name", "address", "type", "imageURL"
  `;

  const params = [name, address, typeArray, imageURL];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Express listening on port ${process.env.PORT}`);
})
