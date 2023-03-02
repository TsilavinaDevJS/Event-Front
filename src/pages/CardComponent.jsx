import * as React from "react";
import { Grid, Box, Stack, Pagination } from "@mui/material";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import "react-quill/dist/quill.snow.css";
import CardComponent from "../component/CardComponent/card";
import { ParameterPagination } from "../hooks";

export default function RecipeReviewCard() {
  const [progress, setProgress] = React.useState("block");
  const [Page, setPage] = React.useState(1);
  const [array, setArray] = React.useState([]);

  const handleChange = (e, value) => {
    setPage(value);
  };

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/getPost`)
      .then((res) => {
        if (res) {
          setProgress("none");
          setArray(ParameterPagination(res.data));
        }
      })
      .catch((err) => console.log(err));
  }, [array]);

  return (
    <>
      {" "}
      <Box
        sx={{
          display: progress,
          width: "100%",
          position: "absolute",
          top: "5rem",
        }}>
        <LinearProgress />
      </Box>
      <Grid container p={3}>
        {array[Page - 1]?.column?.map((List) => {
          return <CardComponent List={List} />;
        })}
      </Grid>
      <Box mt={"3rem"} sx={{ display: "grid", justifyContent: "center" }}>
        <Stack spacing={2}>
          <Pagination
            count={array?.length}
            page={Page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Box>
    </>
  );
}
