import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { choosePlayer, chooseOpponent } from '../features/initSlice';

export default function StartButton() {
  const data = useSelector((state) => state.data.data);
  const pokemon = useSelector((state) => state.init.player);
  const dispatch = useDispatch();
  const getPokemon = () => {
    dispatch(choosePlayer(data));
    console.log(pokemon);
  };
  return (
    <Button colorScheme='orange' color='rgb(25, 25, 25)' onClick={getPokemon}>Get a random pokemon</Button>
  )
}
