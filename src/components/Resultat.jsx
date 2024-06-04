import { useState } from "react";
import Header from "./Header";
import Element from "./Element";

export default function Resultat({ text }) {
  const [data, setData] = useState([]);
  console.log(data);

  const onClick = () => {
    const endpointUrl = "https://query.wikidata.org/sparql";
    const fullUrl = endpointUrl + "?query=" + encodeURIComponent(text);
    const headers = { Accept: "application/sparql-results+json", origin: "*" };

    fetch(fullUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        setData(data.results.bindings);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  };

  return (
    <aside className="h-[100%] flex flex-col">
      <Header onClick={onClick} />
      <div className="">
        {data && (
          <div className=" h-[83vh] overflow-scroll">
            <ul className=" px-4 py-4">
              {data.map((item, index) => (
                <Element key={index} item={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}
