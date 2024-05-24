/* eslint-disable react/prop-types */
export default function Query({ text }) {
  const query = text.replace("```sparql", "").replace("```", "");
  return (
    <div className="w-[80%] bg-slate-50">
      <iframe
        className=""
        src={`https://query.wikidata.org/#${encodeURIComponent(query)}`}
        style={{ width: "100%", "max-width": "100%", height: "100%" }}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
