import {
  List,
  Typography,
  Box,
  Pagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailItem from "../DetailItem/DetailItem.jsx";
import { useParams, useHistory } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
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
  
  const itemsPerPage = 7;
  const [page, setPage] = useState(1);
  const [noOfPages] = useState(Math.ceil(details.length / itemsPerPage));

  const handleChange = (event, value) => {
    setPage(value);
  };

  //format detail data for Chart.js
  const data = details.map((detail) => {
    return detail.intensity;
  });
  const labels = details.map((detail) => {
    return DateTime.fromISO(detail.inserted_at).toLocaleString(
      DateTime.DATE_SHORT
    );
  });

  const detailData = {
    labels: labels.reverse(),
    datasets: [
      {
        label: "Intensity",
        data: data.reverse(),
      },
    ],
  };


  // console.log("dateData", dateData);
  // console.log("data", intensityData);
  console.log("details", details);
  console.log("params: ", params);

  return (
    <>
      <Typography sx={[{pt: 2}, {textTransform: 'capitalize'}]} color="primary.dark" align="center" variant="h5">
        Symptom Details: {details[0].symptom}
      </Typography>

      <List>
        {details
        .slice((page-1)* itemsPerPage, page * itemsPerPage )
        .map((log) => {
          return <DetailItem key={log.id} log={log} />;
        })}
      </List>
      <Box display="flex" justifyContent="center">
      <Pagination
        count={noOfPages}
        page={page}
        onChange={handleChange}
        defaultPage={1}
        showFirstButton
        showLastButton
      />
      </Box>
      <Line data={detailData} />
    </>
  );
}

export default SymptomDetail;
