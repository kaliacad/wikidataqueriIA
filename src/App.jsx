import { useState, useEffect } from 'react';
import Ai from './components/Ai';
import Query from './components/Query';
import Resultat from './components/Resultat';
import Split from 'react-split';
import Footer from './components/Footer';
import getSPARQL from './api/getSPARQL';


function App() {
  const [text, setText] = useState('');
  useEffect(() => {
    async function loadAPI() {
      try {
        const resp = await getSPARQL('je vais les femmes politiciennes en RDC donnez moi le code SPARQL en commentaire');
        setText(resp);
      } catch (err) {
        console.log({ message: err.stack });
      }
    }
    loadAPI();
  }, [])
  return (
    <main role='main' className='h-screen w-[100%] flex flex-col'>
      <div className='flex-1 h-[100%]'>
        <Split className="split">
          <div className='flex flex-col'>
            <Query text={text} />
            <Ai text={'je vais les femmes politiciennes en RDC donnez moi le code SPARQL en commentaire'} />
          </div>
          <Resultat />
        </Split>
      </div>
      <Footer />
    </main>
  );
}

export default App;
