import { createSlice } from '@reduxjs/toolkit';

export const initSlice = createSlice({
   name: 'init',
   initialState: {
      gameStarted: false,
      player: {
         name: null,
         sprite: null,
         skills: [
            "icone1",
            "icone2",
            "icone3"
         ],
         stats: null,
         statsBis: {
            hpMax: null,
            manaMax: null,
            mana: null
         },
         selected: false
      },
      opponent: {
         name: null,
         sprite: null,
         skills: [
            "icone1",
            "icone2",
            "icone3"
         ],
         stats: null,
         statsBis: {
            hpMax: null,
            manaMax: null,
            mana: null
         },
         selected: false
      }
   },
   reducers: {
      choosePlayer: (state, action) => {
         let random = Math.floor(Math.random() * 151) + 1;
         state.player.name = action.payload[random].name.fr;
         state.player.sprite = action.payload[random].sprites.regular;
         state.player.stats = action.payload[random].stats;
         state.player.statsBis.hpMax = action.payload[random].stats.hp;
         state.player.statsBis.manaMax = 10;
         state.player.statsBis.mana = 10;
         state.player.selected = true;
      },
      chooseOpponent: (state, action) => {
         let random = Math.floor(Math.random() * 151) + 1;
         state.opponent.name = action.payload[random].name.fr;
         state.opponent.sprite = action.payload[random].sprites.regular;
         state.opponent.stats = action.payload[random].stats;
         state.opponent.statsBis.hpMax = action.payload[random].stats.hp;
         state.opponent.statsBis.manaMax = 10;
         state.opponent.statsBis.mana = 10;
         state.opponent.selected = true;
      },
   },
});

export const { choosePlayer, chooseOpponent } = initSlice.actions;
export default initSlice.reducer;
