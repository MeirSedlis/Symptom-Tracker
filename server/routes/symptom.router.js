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

  router.get('/:id', rejectUnauthenticated, (req, res) => {
    //gets all active symptoms for the currently logged in user
   console.log('req.user', req.user)
   const sqlValues= [req.user.id]
   const sqlQuery = `
    SELECT * FROM "symptoms"
    JOIN "user_symptom" on symptom_id = symptoms.id
     WHERE user_id = $1 AND active = TRUE;
   `
   pool.query(sqlQuery, sqlValues)
     .then((dbRes) => {
       res.send(dbRes.rows);
     })
     .catch((dbErr) => {
       console.log('ERROR in GET /api/symptom/:id', dbErr);
       res.sendStatus(500);
     })
 });

/**
 * POST log a symptom to the DB
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body)
  const sqlValues=[req.body.intensity, req.body.id]
  const sqlQuery = `
    INSERT INTO "symptom_log"
      ("intensity", "user_symptom_id")
    VALUES
      ($1, $2)  
  `
  pool.query(sqlQuery, sqlValues)
  .then((dbRes)=>{
    res.sendStatus(201)
  })
  .catch((dbErr)=>{
    res.sendStatus500
  })
});

module.exports = router;
