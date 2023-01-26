import { Box } from "@mui/material";
// import { theme } from "./config/theme";
import { RenderRoutes, ROUTES } from "./config/routes";
import "./App.css";
// import { useDispatch } from "react-redux";
// import { useContext, useEffect } from "react";
// import { getUser } from "./action/user.actions";
// import { UidContext } from "./config/AppContext";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (uid) dispatch(getUser(uid));
  // }, [uid]);
  return (
    // <UidContext.Provider value={uid}>
    // <ThemeProvider theme={theme}>
    <Box>
      <RenderRoutes routes={ROUTES} />
    </Box>
    // </ThemeProvider>
    // </UidContext.Provider>
  );
}

export default App;
