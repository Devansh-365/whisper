import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-4 flex w-full items-center justify-between border-t border-gray6 py-4">
      <p>
        Built by{" "}
        <a
          href="https://twitter.com/devansh_0718"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors duration-200 ease-in"
        >
          Devansh Tiwari
        </a>
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Devansh-365/whisper"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors duration-200 ease-in"
        >
          <FaGithub size={22} />
          <p className="sr-only">Github</p>
        </a>
      </div>
    </footer>
  );
}
