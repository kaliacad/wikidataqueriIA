import { textContext, useState } from "../contexts/textContext";


export default function textProvider({ children }) {
   const [sparqlText, setSPARQLText] = useState('');
   return (
      <textContext.Provider value={{ sparqlText, setSPARQLText }}>
         {children}
      </textContext.Provider>
   );
}