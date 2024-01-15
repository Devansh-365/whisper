import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/posts";
import Modal from "./components/modal";
import { Input } from "./components/input";
import { FaGoogle } from "react-icons/fa";
import Footer from "./components/footer";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div className="mx-auto flex max-h-screen min-h-screen w-full max-w-xl flex-col px-4 md:p-0">
      <header className="flex flex-col justify-center items-center">
        <h1 className="w-full pt-6 text-center text-4xl font-grotesk font-bold text-[#0a2b34]">
          Whisper
        </h1>
        <p className="mt-2 text-sm px-4 text-center text-[#0a2b34]/90 font-medium">
          A platform where users can share their thoughts, ideas, or stories
          that they wouldn't feel comfortable sharing elsewhere
        </p>
        <div className="flex gap-2 items-center mt-3 mx-auto">
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-md"
            onClick={() => setLoginOpen(true)}
          >
            Sign Up
          </button>
          <p className="text-gray-600 text-sm font-grotesk ">OR</p>
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-md"
            onClick={() => setRegisterOpen(true)}
          >
            Register
          </button>
        </div>
        <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
          <div className="text-center w-80">
            {/* <Trash size={56} className="mx-auto text-red-500" /> */}
            <div className="mx-auto my-4 w-48">
              <h3 className="text-2xl font-grotesk font-black text-[#0a2b34]">
                Login
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {/* <Input label="Username" placeholder="Devansh" /> */}
              <Input
                label="Email"
                placeholder="devansh@email.com"
                type="email"
              />
              <Input label="Password" placeholder="*********" type="password" />
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="px-3 py-2 rounded-md bg-blue-500 text-white w-full"
                onClick={() => setLoginOpen(false)}
              >
                Login
              </button>
              <p className="text-gray-600 text-sm font-grotesk ">OR</p>
              <button
                className="flex items-center justify-center px-3 py-2 rounded-md bg-blue-500 text-white w-full"
                onClick={() => setLoginOpen(false)}
              >
                <FaGoogle className="mr-2" />
                Login with Google
              </button>
            </div>
          </div>
        </Modal>
        <Modal open={registerOpen} onClose={() => setRegisterOpen(false)}>
          <div className="text-center w-80">
            {/* <Trash size={56} className="mx-auto text-red-500" /> */}
            <div className="mx-auto my-4 w-48">
              <h3 className="text-2xl font-grotesk font-black text-[#0a2b34]">
                Register
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              <Input label="Username" placeholder="Devansh" />
              <Input
                label="Email"
                placeholder="devansh@email.com"
                type="email"
              />
              <Input label="Password" placeholder="*********" type="password" />
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="px-3 py-2 rounded-md bg-blue-500 text-white w-full"
                onClick={() => setRegisterOpen(false)}
              >
                Register
              </button>
              <p className="text-gray-600 text-sm font-grotesk ">OR</p>
              <button
                className="flex items-center justify-center px-3 py-2 rounded-md bg-blue-500 text-white w-full"
                onClick={() => setRegisterOpen(false)}
              >
                <FaGoogle className="mr-2" />
                Register with Google
              </button>
            </div>
          </div>
        </Modal>
      </header>
      <main className="scrollbar mt-4 w-full flex-1 overflow-y-scroll scroll-smooth">
        <Posts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
