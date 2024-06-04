export default function Header({ onClick }) {
  return (
    <header className="bg-[#eee] h-[50px] flex justify-between items-center text-slate-700 pr-3">
      <button
        onClick={onClick}
        className="bg-[#506efa] px-24 h-10 font-bold text-white"
      >
        RUN
      </button>
      <h1 className="text-3xl font-semibold">Wikidata Query AI</h1>
    </header>
  );
}
