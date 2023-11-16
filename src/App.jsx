import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/actions';
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import SkeletonCard from './components/SkeletonCard';
import Loader from './components/Loader';
import StartButton from './components/StartButton';

export default function App() {
   const dispatch = useDispatch();
   const data = useSelector((state) => state.data.data);
   const loading = useSelector((state) => state.data.loading);
   const error = useSelector((state) => state.data.error);
   const player = useSelector((state) => state.init.player);
   const opponent = useSelector((state) => state.init.opponent);

   useEffect(() => {
      dispatch(fetchData());
   }, [dispatch]);

   if (loading) {
      return <div className="loading"><Loader /></div>;
   }

   if (error) {
      return <p>Error: {error}</p>;
   }

   return (
      <>
         {data && (
            <>
               <Header />
               <div className="main">
                  <StartButton />
                  <div className="cards">
                     <PokemonCard pokemon={player} />
                     <p>VS</p>
                     <PokemonCard pokemon={opponent} />
                  </div>
               </div>
            </>
         )}
      </>
   );
   return (
      <>
         {data && (
            <>
               <Header />
               <div className="main">
                  {(init.player === null) ? <SkeletonCard /> : <PokemonCard status="player" />}
                  <p>VS</p>
                  {(init.opponent === null) ? <SkeletonCard /> : <PokemonCard status="opponent" />}
               </div>
            </>
         )}
      </>
   );
}
