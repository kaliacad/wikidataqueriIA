import { useState, useEffect } from "react";
import Header from "./Header";

export default function Resultat() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // vous pouvez prendre le text et le passe ici pour renvoyer les resultat
    const sparqlQuery = `
      SELECT ?person ?personLabel ?positionLabel WHERE {
        ?person wdt:P31 wd:Q5;        # Is a human
                wdt:P21 wd:Q6581072;  # Is female
                wdt:P106 wd:Q82955;   # Is a politician
                wdt:P27 wd:Q974.      # Nationality is Democratic Republic of the Congo
        OPTIONAL { ?person wdt:P39 ?position. }
        SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
      }
      ORDER BY ?personLabel
    `;

    const endpointUrl = "https://query.wikidata.org/sparql";
    const fullUrl = endpointUrl + "?query=" + encodeURIComponent(sparqlQuery);
    const headers = { Accept: "application/sparql-results+json" };

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
          <div className="h-[83vh] overflow-scroll">
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
