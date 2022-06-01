import { List, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailItem from "../DetailItem/DetailItem.jsx";
import { useParams, useHistory } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"
import { DateTime } from "luxon";

function SymptomDetail() {
  const params = useParams();
  const detailID = params.id;

  useEffect(() => {
    dispatch({
      type: "FETCH_DETAILS",
      payload: detailID,
    });
  }, [detailID]);

  const dispatch = useDispatch();

  const details = useSelector((store) => store.detail);

  //format detail data for Chart.js
  const data = details.map((detail) => {
    return detail.intensity;
  });
  const labels = details.map((detail) => {
    return DateTime.fromISO(detail.inserted_at);
  });


  const detailData= {
    labels: labels.reverse(),
    datasets: [
      {
        label: "Intensity",
        data: data,
      },
    ],
  };

  // console.log("dateData", dateData);
  // console.log("data", intensityData);
  console.log("details", details);
  console.log("params: ", params);

  return (
    <>
      <Typography align="center" variant="h6">
        Symptom Details
      </Typography>
      <List>
        {details.map((log) => {
          return <DetailItem key={log.id} log={log} />;
        })}
      </List>
      <Line data={detailData} />
    </>
  );
}

export default SymptomDetail;
