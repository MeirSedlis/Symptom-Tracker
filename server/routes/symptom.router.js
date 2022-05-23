const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
 router.get('/', rejectUnauthenticated, (req, res) => {
     //gets all symptoms
    console.log('req.user', req.user)
    const sqlQuery = `
      SELECT * FROM "symptoms";
    `
    pool.query(sqlQuery)
      .then((dbRes) => {
        res.send(dbRes.rows);
      })
      .catch((dbErr) => {
        console.log('ERROR in GET /api/symptom', dbErr);
        res.sendStatus(500);
      })
  });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
