import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Input } from "../input";
import Modal from "../modal";
import { register } from "../../api/users";

export default function RegisterModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: any;
}) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const data = await register(form);
    if (data.email) {
      setOpen(false);
      setForm({
        username: "",
        email: "",
        password: "",
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

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className="text-center w-80">
        <div className="mx-auto my-4 w-48">
          <h3 className="text-2xl font-grotesk font-black text-[#0a2b34]">
            Register
          </h3>
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-3">
            <Input
              name="username"
              label="Username"
              placeholder="Devansh"
              onChange={onChange}
            />
            <Input
              name="email"
              label="Email"
              placeholder="devansh@email.com"
              type="email"
              onChange={onChange}
            />
            <Input
              name="password"
              label="Password"
              placeholder="*********"
              type="password"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <button
              type="submit"
              className="px-3 py-2 rounded-md bg-blue-500 text-white w-full"
            >
              Register
            </button>
            <p className="text-gray-600 text-sm font-grotesk ">OR</p>
            <button
              className="flex items-center justify-center px-3 py-2 rounded-md bg-blue-500 text-white w-full"
              onClick={() => setOpen(false)}
            >
              <FaGoogle className="mr-2" />
              Register with Google
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
