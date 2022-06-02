const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get("/:id", rejectUnauthenticated, (req, res) => {
  //gets logs for the selected symptom
  const sqlValues = [req.params.id];
  const sqlQuery = `
   SELECT * from "symptom_log"
   WHERE user_symptom_id = $1
   ORDER BY inserted_at DESC;
   `;
  pool
    .query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log("ERROR in GET /api/symptom", dbErr);
      res.sendStatus(500);
    });
});

/**
 * POST route template
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
    console.log('error POST api/detail', dbErr)
    res.sendStatus(500)
  })
});

//update intensity
router.put("/:id", (req, res) => {
  console.log('in put!!!!!!!!!!', req.body);
  const sqlQuery = `UPDATE "symptom_log"
	SET
		intensity = $1
	WHERE
		id = $2;`;
  const sqlValues = [req.body.itemToEdit.newIntensity, req.params.id];
  pool
    .query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.log("update db error", dbErr);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  const sqlValues = [req.params.id];
  const sqlQuery = `DELETE FROM "symptom_log" 
	WHERE id=$1`;
  pool
    .query(sqlQuery, sqlValues)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error deleting symptom log", err);
      res.sendStatus(500);
    });
});

module.exports = router;
