const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
// this is actually /api/shelf
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log(`in /api/shelf`);
  let queryText = `SELECT * FROM "item";`;

  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows); // response.rows contains all the items
    })
    .catch((error) => {
      console.log(`There was an error with the /api/shelf GET:`, error);
      res.sendStatus(500); // there was an error
    });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  console.log('Req.body', req.body);

  const queryText = `
  INSERT INTO item ("description", "image_url")
  VALUES ($1, $2);
  `;
  pool.query(queryText)
    .then(result => {
      console.log('results', result.rows);
      res.sendStatus(201);
    })
    .catch(error => {
      console.log('error in query', error);
      res.sendStatus(500);
    })
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
