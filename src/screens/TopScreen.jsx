import Split from 'react-split';
import Ai from '../component/Ai';
import Query from '../component/Query';
import '../css/topscreen.css';


export default function TopScreen() {
   return (
      <main className='h-[70%] flex justify-between'>
         <Split className='split h-[100%] w-[100%]'>
            <Ai />
            <Query />
         </Split>
      </main>
   );
}