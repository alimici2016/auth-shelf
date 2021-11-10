const express = require('express');
const { resetWarningCache } = require('prop-types');
const { useReducer } = require('react');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  res.sendStatus(200); // For testing only, can be removed
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
  console.log('comparing to item user id', req.params.user_id)
  if (req.user.id === req.params.user_id) {//We create a conditional that only allows users to delete things that they created?
    let id = req.params.id //This our way of identifying the variable 'id' sent along with the route.
    let queryText = `
  DELETE FROM "item"
  WHERE id = $1;`;
    //queryText is sql text that we want to transfer over to pool.
    let values = [id]

    //Package the queryText and the id to have pool interact with the database for us 
    //and execute the intended goal which in this case is to delete the data at id
    pool.query(queryText, values)
      .then(results => {
        res.sendStatus(204)//if completed then we get a '204' which is thumbs up 
      }).catch(err => {
        console.log(err)
        res.sendStatus(500)//if failed we get a '500'
      })
  } else {
    res.sendStatus(403)
  }
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
