import { useSelector } from 'react-redux';
import { Progress } from '@chakra-ui/react';

// export default function ProgressBar({ faType, bgType, barName }) {
//    const data = useSelector((state) => state.data.data);

//    return (
//       <div className="progress md-progress">
//          <div
//             className="progress-bar"
//             style={{ width: (data[0].stats.hp * 100) / pvMax + '%' }}
//             aria-valuenow={pv}
//             aria-valuemin="0"
//             aria-valuemax={pvMax}
//             role="progressbar"
//          >
//             <i className={` fas ${faType} ${bgType} icon-text`}>
//                {' '}
//                {pv} {barName}{' '}
//             </i>
//          </div>
//       </div>
//    );
// }

export default function ProgressBar({ type, pokemon }) {

   return (
      <>
         {pokemon.stats && type === 'health' ? (
            <Progress
               hasStripe
               isAnimated
               colorScheme="red"
               max={pokemon.statsBis.hpMax}
               value={pokemon.stats.hp}
            />
         ) : (
            <Progress
               hasStripe
               isAnimated
               max={pokemon.statsBis.manaMax}
               value={pokemon.statsBis.mana} 
            />
         )}
      </>
   );
}
