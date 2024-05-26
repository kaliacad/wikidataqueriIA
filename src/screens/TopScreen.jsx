// import { useEffect } from "react";
// import Split from "react-split";
// import Ai from "../components/Ai";
// import Query from "../components/Query";
// import { useState } from "react";

// export default function TopScreen() {
//   const [text, setText] = useState("");
//   useEffect(() => {
//     async function loadAPI() {
//       const resp = await runAPI(
//         "je vais les femmes politiciennes en RDC donnez moi le code SPARQL en commentaire"
//       );
//       setText(resp);
//     }
//     loadAPI();
//   }, []);
//   console.log(text);
//   return (
//     <main className="h-[70%] flex justify-between">
//       <Split className="split h-[100%] w-[100%]">
//         <Ai text={text} />
//         <Query text={text} />
//       </Split>
//     </main>
//   );
// }
