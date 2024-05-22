import Split from 'react-split';
import './index.css';


function ComA (){
   return (
      <div style={{
         background: 'blue',
         height: '200px'
      }}>
         <h1>jdjdjdjjd</h1>
      </div>
   )
}

function ComB (){
   return (
      <div style={{
         background: 'blue',
         height: '200px'
      }}>
         <h1>jdjdjdjjd</h1>
      </div>
   )
}

export default function Demo () {
   return (
      <Split className='split'>
         <ComA />
         <ComB />
      </Split>
   )
}