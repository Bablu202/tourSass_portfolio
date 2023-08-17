import React, { useState } from "react";
import supabase from "../supabase/SupaBaseConfig";
import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";

import { useNavigate } from "react-router-dom";
export default function Login() {
  const [oUser, setOUser] = useState(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const signInWithOAuth = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    console.log(oUser?.email);
    if (user) {
      setOUser(user);
      localStorage.setItem("userData", oUser);
      console.log(55);
      navigate("/create");
    }

    if (error) {
      console.log(error);
    }

    console.log("userData");
  };
  async function signOut() {
    await supabase.auth.signOut();
    setOUser(null);
    console.log(88);
  }
  return (
    <div>
      <div className="App-header">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    </div>
  );
}
//https://dev.to/dabit3/10-minute-tutorial-full-stack-github-authentication-with-supabase-react-3c6b
