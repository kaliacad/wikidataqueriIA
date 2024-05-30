import { useState } from "react";
import Markdown from "react-markdown";

export default function Ai({ handleSubmit, message, input, handleChange }) {
  return (
    <aside className=" flex-1 border-t border-[#eee]">
      <div className="h-[45vh] p-2 overflow-scroll ">
        {message.map((itm, index) => (
          <Message key={index} texte={itm} />
        ))}
      </div>

      <div className=" h-[30px] justify-self-end">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between h-[100%] border-slate-300 border-2 border-solid  rounded-full "
        >
          <input
            type="text"
            placeholder="Ecrivez votre question"
            className="flex-grow  rounded-l-full pl-3 text-sm bg-white"
            value={input}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-slate-800 text-white w-[3.5rem] cursor-pointer hover:bg-slate-700 border-2 border-solid rounded-r-full text-sm"
          >
            send
          </button>
        </form>
      </div>
    </aside>
  );
}

const Message = ({ texte }) => {
  return (
    <div
      className={`${texte.user == "ai" ? " chat chat-start" : "chat chat-end"}`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={`${
              texte.user == "ai"
                ? "https://cdn-icons-png.flaticon.com/512/786/786153.png"
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }`}
          />
        </div>
      </div>
      <div
        className={`${
          texte.user == "me"
            ? "chat-bubble text-sm"
            : "bg-slate-300 text-black  chat-bubble text-sm"
        }`}
      >
        <Markdown>{texte.msg}</Markdown>
      </div>
    </div>
  );
};
