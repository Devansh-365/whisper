import React, { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/posts";
import Footer from "./components/footer";
import RegisterModal from "./components/modals/register-modal";
import LoginModal from "./components/modals/login-modal";
import { authStatus, logout } from "./api/users";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [isLoggedInState, setIsLoggedInState] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const loggedIn = await authStatus();
      setIsLoggedInState(loggedIn);
    };

    checkUser();
  }, []);

  return (
    <div className="mx-auto flex max-h-screen min-h-screen w-full max-w-xl flex-col px-4 md:p-0">
      <header className="flex flex-col justify-center items-center">
        <h1 className="w-full pt-6 text-center text-4xl font-grotesk font-bold text-[#0a2b34]">
          Whisper {isLoggedInState && <span>sdsd</span>}
        </h1>
        <p className="mt-2 text-sm px-4 text-center text-[#0a2b34]/90 font-medium">
          A platform where users can share their thoughts, ideas, or stories
          that they wouldn't feel comfortable sharing elsewhere
        </p>
        {!isLoggedInState ? (
          <div className="flex gap-2 items-center mt-3 mx-auto">
            <button
              className="bg-blue-500 text-white px-3 py-2 rounded-md"
              onClick={() => setLoginOpen(true)}
            >
              Login
            </button>
            <p className="text-gray-600 text-sm font-grotesk ">OR</p>
            <button
              className="bg-blue-500 text-white px-3 py-2 rounded-md"
              onClick={() => setRegisterOpen(true)}
            >
              Register
            </button>
          </div>
        ) : (
          <div className="flex gap-2 items-center mt-3 mx-auto">
            <button
              className="bg-blue-500 text-white px-3 py-2 rounded-md"
              onClick={async () => await logout()}
            >
              Logout
            </button>
          </div>
        )}
        <LoginModal open={loginOpen} setOpen={setLoginOpen} />
        <RegisterModal open={registerOpen} setOpen={setRegisterOpen} />
      </header>
      <main className="scrollbar mt-4 w-full flex-1 overflow-y-scroll scroll-smooth">
        <Posts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
