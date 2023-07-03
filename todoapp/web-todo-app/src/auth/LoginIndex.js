import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import Main from "../components/Main";
import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  Typography,
} from "@mui/material";
import { auth } from "./firebase";
import { Google } from "@mui/icons-material";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useAuth } from "./Auth";

const REDIRECT_PAGE = () => {
  return (
    <>
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
};

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: REDIRECT_PAGE,
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

export default function Home() {
  const { authUser, isLoading } = useAuth();
  const [login, setLogin] = useState(false);

  //const router = Router();

  useEffect(() => {
    if (!isLoading && authUser) {
      return REDIRECT_PAGE;
      //router.push("/main");
    }
  }, []);
  return isLoading && !isLoading && !authUser ? (
    <CircularProgress
      color="inherit"
      sx={{ marginLeft: "50%", marginTop: "25%" }}
    />
  ) : (
    <div>
      <title>Expense Tracker</title>

      <main>
        <Container>
          <Typography variant="h1">TOdos!</Typography>
          <Typography variant="h2">Add, view, edit, and delete</Typography>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setLogin(true)}
            >
              Login / Register
            </Button>
            <Dialog open={login} onClose={() => setLogin(false)}>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={auth}
              ></StyledFirebaseAuth>
            </Dialog>
          </div>
        </Container>
      </main>
    </div>
  );
}
