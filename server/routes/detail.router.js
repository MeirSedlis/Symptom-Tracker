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
router.post("/", (req, res) => {
  // POST route code here
});

//update intensity !!!!! FINISH HIM!!!!!!!!!!
router.put("/:id", (req, res) => {
  console.log(req.body);
  const sqlQuery = ``;
  const sqlValues = [];
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
