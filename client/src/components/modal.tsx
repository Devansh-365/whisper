import { IoMdClose } from "react-icons/io";

export default function Modal({ open, onClose, children }: any) {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors z-[1000]
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1.5 rounded-lg text-white bg-red-500 hover:bg-red-500/80"
        >
          <IoMdClose />
        </button>
        {children}
      </div>
    </div>
  );
}
