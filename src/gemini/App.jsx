import { useEffect, useState } from "react";
import { generateText } from "./index";
import Markdown from 'react-markdown'



export default function App() {
   const [mk, setMK] = useState('');
   useEffect(() => {
      async function loadAPI() {
         try {
            const resp = await generateText();
            setMK(resp);
         } catch (error) {
            console.log({ 'message': error.stack })
         }
      }
      loadAPI();
   }, []);
   console.log(mk);
   return (
      <Markdown>
         {mk}
      </Markdown>
   );
}