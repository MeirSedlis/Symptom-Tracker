const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
 router.get('/:id', rejectUnauthenticated, (req, res) => {
    //gets logs for the selected symptom
   const sqlValues = [req.params.id]
   const sqlQuery = `
   SELECT * from "symptom_log"
   WHERE user_symptom_id = $1;
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
