import { useState } from "react";
import Header from "./Header";
import Element from "./Element";

export default function Resultat({ text }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const items = 15;
  console.log(data);

  const onClick = () => {
    const endpointUrl = "https://query.wikidata.org/sparql";
    const fullUrl = endpointUrl + "?query=" + encodeURIComponent(text);
    const headers = { Accept: "application/sparql-results+json", origin: "*" };

    fetch(fullUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        setData(data.results.bindings);
        setPage(1);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  };

  const handleClickNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleClickPrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const start = (page - 1) * items;
  const res = data.slice(start, start + items);

  return (
    <aside className="h-[100%] flex flex-col">
      <Header onClick={onClick} />
      <div className="">
        {data.length > 0 && (
          <div className="h-[89vh] overflow-scroll">
            <ul className="px-4 py-4">
              {res.map((item, index) => (
                <Element key={index} item={item} />
              ))}
            </ul>
            <div className="flex justify-between px-4 mt-4">
              <button
                onClick={handleClickPrev}
                disabled={page === 1}
                className="bg-[#506efa] text-white px-3 py-1 rounded-md"
              >
                Previous
              </button>
              <button
                onClick={handleClickNext}
                disabled={start + items >= data.length}
                className="bg-[#506efa] text-white px-3 py-1 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
