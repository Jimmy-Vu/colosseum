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
const authorizationMiddleware = require('./authorizationMiddleware');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

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
  const { name, address, type, imageURL, description } = req.body;
  if (!name || !address || !type || !imageURL) {
    throw new ClientError(400, 'Please provide a name, address, type(s), and an image');
    console.error('Missing name, address, type, and/or image');
  }

  const sql = `
  insert into "gyms" (
    "name",
    "address",
    "type",
    "imageURL",
    "description"
    ) values ($1, $2, $3, $4, $5)
  returning "gymId", "name", "address", "type", "imageURL", "description"
  `;

  const params = [name, address, type, imageURL, description];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});
// Post route for production database
app.post('/api/gyms', upload, (req, res, next) => {
  const { name, address, type, description } = req.body;
  const imageURL = req.file.path;
  if (!name || !address || !type || !imageURL || !description) {
    throw new ClientError(400, 'Please provide a name, address, type(s), and an image');
    console.error('Missing name, address, type, and/or image');
  }

  const parsedType = JSON.parse(type);
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
    "imageURL",
    "description"
    ) values ($1, $2, $3, $4, $5)
  returning "gymId", "name", "address", "type", "imageURL", "description"
  `;

  const params = [name, address, typeArray, imageURL, description];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

// PATCH route for updating listing
app.patch('/api/gyms/:gymId', upload, (req, res, next) => {
  const { name, address, type, description } = req.body;
  const gymId = parseInt(req.params.gymId, 10);
  let { imageURL } = req.body;
  if (!imageURL && req.file) {
    imageURL = req.file.path;
  }

  if (!gymId || !name || !address || !type) {
    throw new ClientError(401, 'Please provide a name, address, type(s), and an image');
    console.error('Missing name, address, type, and/or image');
  }
  const parsedType = JSON.parse(type);
  const typeArray = [];
  for (let i in parsedType) {
    if (parsedType[i] === true) {
      typeArray.push(i);
    }
  }

  console.log('gymId', gymId);
  console.log('name', name);
  let sql = '';
  let params = [];
  if (!imageURL) {
    sql = `
      update "gyms"
        set "name" = $2,
            "address" = $3,
            "type" = $4,
            "description" = $5
        where "gymId" = $1
        returning "gymId", "name", "address", "type", "description"
    `;
    params = [gymId, name, address, typeArray, description];
  } else {
    sql = `
      update "gyms"
        set "name" = $2,
            "address" = $3,
            "type" = $4,
            "imageURL" = $5,
            "description" = $6
        where "gymId" = $1
        returning "gymId", "name", "address", "type", "imageURL", "description"
    `;
    params = [gymId, name, address, typeArray, imageURL, description];
  }
  db.query(sql, params)
    .then(result => {
      console.log(result.rows[0]);
      res.status(200).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.delete('/api/gyms/:gymId', (req, res, next) => {
  const gymId = req.params.gymId;
  const sql = `
    delete from "gyms"
      where "gymId" = $1
  `;
  const params = [gymId];

  db.query(sql, params)
    .then(result => {
      res.sendStatus(204);
    })
    .catch(err => next(err));
});

//Routes for user authentications
app.post('/api/users/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  argon2
    .hash(password)
    .then(hashedPassword => {
      const params = [username, hashedPassword];
      const sql = `
      insert into "users"
      ("username", "hashedPassword")
      values ($1, $2)
      returning "userId", "username"
    `;
      db.query(sql, params)
        .then(result => {
          const newCredentials = result.rows[0];
          res.status(201).json(newCredentials);
        })
        .catch(err => next(err))
    })
})

app.post('/api/users/sign-in', (req, res, next) => {
  const { username, password } = req.body;
  argon2
    .hash(password)
    .then(hashedPassword => {
      const params = [username];
      const sql = `
      select *
        from "users"
        where "username" = $1
    `;
      db.query(sql, params)
        .then(result => {
          const { hashedPassword, userId } = result.rows[0];
          argon2
            .verify(hashedPassword, password)
            .then(isMatching => {
              if (!isMatching) {
                throw new ClientError(401, 'invalid login');
              }
              const payload = {
                userId: userId,
                username: username
              }
              const token = jwt.sign(payload, process.env.TOKEN_SECRET);
              res.status(200).json({ "token": token, "user": payload });
            })
            .catch(err => next(err));
        })
        .catch(err => next(err))
    })
})

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Express listening on port ${process.env.PORT}`);
})
