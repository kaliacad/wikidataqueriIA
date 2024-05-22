import Ai from './component/Ai'
import Query from './component/Query'
import Resultat from './component/Resultat'

function App() {
  return (
    <>
      <div className=' h-[100vh] bg-gray-400'>
        <main className='h-[70%] flex justify-between'>
          <Ai />
          <Query />
        </main>
        <main>
          <Resultat />
        </main>
      </div>
    </>
  )
}

export default App
