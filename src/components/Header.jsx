export default function Header() {
  return (
    <header className="bg-[#eee] h-[50px] flex justify-between items-center text-slate-700 pr-3">
      <button className="bg-slate-700 text-white px-24 h-10 font-bold hover:text-slate-400">
        RUN
      </button>
      <h1 className="text-3xl font-semibold">Wikidata Query AI</h1>
    </header>
  );
}
