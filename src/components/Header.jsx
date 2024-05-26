export default function Header() {
   const color = 'bg-slate-700'
   return (
      <header className="bg-[#eee] h-[50px] flex justify-between items-center text-slate-700 pr-3">
         <button className="bg-slate-700 text-white px-24 h-10 font-bold">RUN</button>
         <h1 className="text-3xl font-semibold">Wikidata Queri AI</h1>
      </header>
   );
}