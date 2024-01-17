import React, { useContext, useState } from "react";
import "./App.css";
import Posts from "./components/posts";
import Footer from "./components/footer";
import RegisterModal from "./components/modals/register-modal";
import LoginModal from "./components/modals/login-modal";
import { logout } from "./api/users";
import { AuthContext } from "./components/auth-provider";
import { Input } from "./components/input";
import { createPost } from "./api/posts";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [form, setForm] = useState({
    content: "",
  });

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const data = await createPost(form);
    if (data?.status === 200) {
      setForm({
        content: "",
      });
      window.location.reload();
    }
  };

  const onChange = (event: any) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="mx-auto flex max-h-screen min-h-screen w-full max-w-xl flex-col px-4 md:p-0">
      <header className="flex flex-col justify-center items-center">
        <h1 className="w-full pt-6 text-center text-2xl md:text-4xl font-grotesk font-bold text-[#0a2b34]">
          Whisper
        </h1>
        <p className="mt-0.5 md:mt-2 text-xs md:text-sm px-4 text-center text-[#0a2b34]/90 font-medium">
          A platform where users can share their thoughts, ideas, or stories
          that they wouldn't feel comfortable sharing elsewhere
        </p>
        {!isAuthenticated ? (
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
          <div className="flex flex-col gap-1 items-center mt-3 mx-auto">
            <form
              onSubmit={onSubmit}
              className="flex gap-1 items-center mt-3 mx-auto"
            >
              <Input
                name="content"
                placeholder="Share thoughts, ideas or stories"
                onChange={onChange}
                className="md:min-w-64"
              />
              <button
                className="bg-blue-500 text-white px-3 py-1.5 rounded-md"
                type="submit"
              >
                Submit
              </button>
            </form>
            <button
              className="underline underline-offset-2 transition-colors duration-200 ease-in text-sm"
              onClick={async () => {
                await logout();
                window.location.reload();
              }}
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
