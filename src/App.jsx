import Ai from './components/Ai';
import Query from './components/Query';
import Resultat from './components/Resultat';
import Split from 'react-split';
import Footer from './components/Footer';



function App() {
  return (
    <main role='main' className='h-screen w-[100%] flex flex-col'>
      <div className='flex-1 h-[100%]'>
        <Split className="split">
          <div>
            <Query text={'something new about programming'} />
            <Ai text={'something new about programming'} />
          </div>
          <Resultat />
        </Split>
      </div>
      <Footer />
    </main>
  );
}

export default App;
