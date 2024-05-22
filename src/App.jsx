import Ai from './component/Ai';
import Query from './component/Query';
import Resultat from './component/Resultat';
import Split from 'react-split';
import TopScreen from './screens/TopScreen';
// import './css/verticalsplit.css';

const splitStyle = {
  /* VERTICAL SPLIT CODE */
  flexDirection: 'column',
  backgroundColor: '#eee',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=')`,
  cursor: "row-resize",
}


function App() {
  return (
    <>
      <div className='split h-[100vh] bg-gray-400'>
        <Split 
        className='h-[100%] w-[100%]' direction='vertical' style={splitStyle}>
          <TopScreen />
          <Resultat />
        </Split>
      </div>
    </>
  )
}

export default App
