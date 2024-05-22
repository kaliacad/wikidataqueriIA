import Ai from './component/Ai'
import Query from './component/Query'
import Resultat from './component/Resultat';
import Split from 'react-split'


function ComposantA() {
  return <h1>composant A</h1>
}

function ComposantB() {
  return (
    <div className=' h-[100vh] bg-gray-400'>
      <main className='h-[70%] flex justify-between'>
        <Ai />
        <Query />
      </main>
      <main>
        <Resultat />
      </main>
    </div>

  )
}
function App() {
  return (
    <Split
    sizes={[25, 75]}
    minSize={100}
    expandToMin={false}
    gutterSize={10}
    gutterAlign="center"
    snapOffset={30}
    dragInterval={1}
    direction="horizontal"
    cursor="col-resize"
    >
      <ComposantA />
      <ComposantB />
    </Split>
  )
}

export default App
