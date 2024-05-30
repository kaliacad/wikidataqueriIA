import { useState, useEffect } from "react";
import Ai from "./components/Ai";
import Query from "./components/Query";
import Resultat from "./components/Resultat";
import Split from "react-split";
import Footer from "./components/Footer";
import getGPT from "./api/getGPT";

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setInput("");
    console.log(input);
    setMessage([
      ...message,
      { user: "me", msg: `${input}` },
      { user: "ai", msg: `${text}` },
    ]);
  };

  useEffect(() => {
    async function loadAPI() {
      try {
        const resp = await getGPT(input);
        // const resp = await getSPARQL(`${input} en sparql, dans le code utilise seulement wdt: et wd:`);
        setText(resp);
      } catch (err) {
        console.log({ message: err.stack });
      }
    }
    loadAPI();
  }, []);

  return (
    <main role="main" className="h-screen max-h-full w-[100%] flex flex-col">
      <div className="flex-1 h-[100%]">
        <Split
          className="split"
          sizes={[50, 50]}
          minSize={600}
          expandToMin={true}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
        >
          <div className="flex flex-col">
            <Ai
              text={text}
              handleSubmit={handleSubmit}
              message={message}
              input={input}
              handleChange={handleChange}
            />
            <Query text={text} />
          </div>
          <Resultat />
        </Split>
      </div>
      <Footer />
    </main>
  );
}

export default App;
