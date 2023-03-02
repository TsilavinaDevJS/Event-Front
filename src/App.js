import { Box, ThemeProvider } from "@mui/material";
import { RenderRoutes, ROUTES } from "./config/routes";
import "./App.css";
import React from "react";
import { UidContext } from "./config/AppContext";
import axios from "axios";
import { theme } from "./config/theme";

function App() {
  const [uid, setUid] = React.useState(null);
  React.useEffect(() => {
    let value = window.localStorage.uid;
    if (value) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/getUserConnect/${value}`)
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <ThemeProvider theme={theme}>
        <RenderRoutes routes={ROUTES} />
      </ThemeProvider>
    </UidContext.Provider>
  );
}

export default App;
