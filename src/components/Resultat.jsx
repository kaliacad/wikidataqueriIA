import { useState, useEffect, useContext } from "react";
import { TextContext } from "../contexts/textContext";
import Header from "./Header";

export default function Resultat() {
  const { sparqlText } = useContext(TextContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpointUrl = "https://query.wikidata.org/sparql";
    const fullUrl = endpointUrl + "?query=" + encodeURIComponent(sparqlText);
    const headers = { Accept: "application/sparql-results+json", origin: "*" };

    fetch(fullUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        setData(data.results.bindings);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <aside className="h-[100%] flex flex-col">
      <Header />
      <div className="">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="h-[87vh] overflow-scroll">
            <ul className="px-4 py-4">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="bg-slate-700  mb-2 px-1 py-2 text-white"
                >
                  <p>{item.personLabel.value}</p>
                  <p>
                    {item.positionLabel
                      ? item.positionLabel.value
                      : "No position specified"}
                  </p>
                  <p>{item.person.value}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}
