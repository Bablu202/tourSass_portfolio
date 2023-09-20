import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";

export default function AuthProvider({ setToken }) {
  let navigate = useNavigate();
  const [GoogleUser, setGoogleUser] = useState();

  async function loginWithGoogle() {
    const { user } = await supabase.auth.signInWithOAuth({
      provider: "google",

      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (user) {
      setToken(user);
      setGoogleUser(user);
      console.log(user);
      navigate("/homepage");
    }
  }

  console.log(GoogleUser);
  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div>
      <div>AuthProvider</div>
      <button onClick={loginWithGoogle}>Google</button>
      {setToken && <button onClick={handleLogout}>out</button>}
    </div>
  );
}
