// import { auth } from "../config/firebase-config";
// import { useState } from "react";

// import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export default function Auth({ login, setlogin }) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function auth() {
  //   login ? signin : signout;
  // }

  // async function signin() {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //     setlogin(!login);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // async function signout() {
  //   try {
  //     await signOut(auth);
  //     setlogin(!login);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  // console.log(auth.currentUser.email);

  return (
    <>
      <div className="p-6 flex flex-col items-center gap-6 bg-sky-200/70 w-1/3 m-auto mt-10">
        <input
          type="email"
          placeholder="Email"
          className="input"
          onChange={
            (e) => {}
            // setEmail(e.target.value)
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          onChange={(e) => {
            // setPassword(e.target.value);
          }}
        />

        <button className="btn" onClick={() => {}}>
          {login ? "Login" : "Logout"}
        </button>
      </div>
    </>
  );
}
