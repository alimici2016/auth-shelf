const express = require('express');
const { resetWarningCache } = require('prop-types');
const { useReducer } = require('react');
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
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  console.log('user is', req.user.id)

  console.log('comparing to item user id', req.params.id)
    let id = req.params.id //This our way of identifying the variable 'id' sent along with the route.
    let queryText = `
  DELETE FROM "item"
  WHERE id = $1 AND
  user_id = $2;`; 
    //queryText is sql text that we want to transfer over to pool.
    let values = [id, req.user.id]

    //Package the queryText and the id to have pool interact with the database for us 
    //and execute the intended goal which in this case is to delete the data at id
    pool.query(queryText, values)
      .then(results => {
        console.log('results is', results);
        if (results.rowCount === 0) { 
          //rowCount is a number that represents how many rows were found by query
          //We created a conditional that checks to see if rowCount is equal to 0 if 
          //it is we send back a forbidden (403)
          res.sendStatus(403)
        } else {
        res.sendStatus(204)//if completed then we get a '204' which is thumbs up 
      }}).catch(err => {
        console.log(err)
        res.sendStatus(500)//if failed we get a '500'
      })
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
