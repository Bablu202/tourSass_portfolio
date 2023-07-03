import React, { useState } from "react";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import Main from "../components/Main";
export default function SignInPage() {
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <div>
        {user ? (
          <>
            <button onClick={handleLogOut}>LogOut</button>
            <h3>Hi there! {user.displayName}</h3>
            <img src={user.photoURL} alt="dp" />
            <Main />
          </>
        ) : (
          <>
            <button onClick={handleGoogleSignIn}>Google-SignIn</button>
          </>
        )}
      </div>
    </div>
  );
}
