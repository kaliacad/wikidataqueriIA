/* eslint-disable react/prop-types */
export default function Query({ text }) {
  const query = text.replace("```sparql", "").replace("```", "");
  return (
    <div className="flex-1 border-b border-[#eee]">
      <iframe
        className=""
        src={`https://query.wikidata.org/#${encodeURIComponent(query)}`}
        style={{ width: "100%", "max-width": "100%", height: "100%" }}
        frameBorder="0"
      ></iframe>
    </div>
  );
}