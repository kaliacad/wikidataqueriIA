import Markdown from "react-markdown";

export default function Ai({ text }) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <aside className="flex-1 border-t border-[#eee]">
      <div className="flex-grow p-2">
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              />
            </div>
          </div>
          <div className="chat-bubble text-sm">{text}</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://cdn-icons-png.flaticon.com/512/786/786153.png"
              />
            </div>
          </div>
          <div className="chat-bubble text-sm">
            <Markdown>{text}</Markdown>
          </div>
        </div>
      </div>
      <div className=" h-[30px] justify-self-end">
        <form
          onSubmit={handleSubmit}
          value=""
          className="flex justify-between h-[100%] border-slate-300 border-2 border-solid  rounded-full "
        >
          <input
            type="text"
            placeholder="Ecrivez votre question"
            className="flex-grow  rounded-full pl-3 text-sm"
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
