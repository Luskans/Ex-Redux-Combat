import { useSelector } from 'react-redux';
import './PokemonCard.css';
import { Skeleton } from '@chakra-ui/react';
import ProgressBar from './ProgressBar';
import attackIcon from '../assets/attack_icon.png';
import magicIcon from '../assets/magic_icon.png';
import defenseIcon from '../assets/defense_icon.png';

export default function PokemonCard({ pokemon }) {

   return (
      <div className="card">
         <Skeleton isLoaded={pokemon.selected} height="20px" width="230px" endColor='orange.300'>
            {pokemon.name}
         </Skeleton>
         <div className="card-middle">
            <Skeleton isLoaded={pokemon.selected} height="170px" width="170px" borderRadius="10px" endColor='orange.300'>
               <img src={pokemon.sprite} alt={`The ${pokemon.name} pokemon`} />
            </Skeleton>
            <div className="card-skills">
               <Skeleton isLoaded={pokemon.selected} height="50px" width="50px" borderRadius="5px" endColor='orange.300'>
                  <button><img src={attackIcon} alt="Icone d'attaque" /></button>
               </Skeleton>
               <Skeleton isLoaded={pokemon.selected} height="50px" width="50px" borderRadius="5px" endColor='orange.300'>
                  <button><img src={magicIcon} alt="Icone d'attaque" /></button>
               </Skeleton>
               <Skeleton isLoaded={pokemon.selected} height="50px" width="50px" borderRadius="5px" endColor='orange.300'>
                  <button><img src={defenseIcon} alt="Icone d'attaque" /></button>
               </Skeleton>
            </div>
         </div>
         <Skeleton isLoaded={pokemon.selected} height="10px" width="230px" borderRadius="5px" endColor='orange.300'>
            <ProgressBar type="health" pokemon={pokemon} />
         </Skeleton>
         <Skeleton isLoaded={pokemon.selected} height="10px" width="230px" borderRadius="5px" endColor='orange.300'>
            <ProgressBar type="mana" pokemon={pokemon} />
         </Skeleton>
      </div>
   );
}
