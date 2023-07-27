/* eslint-disable prettier/prettier */

import { createSlice } from "@reduxjs/toolkit";
import { IAction, IState } from "../models/votation.model";


const initialState:IState = {
    status: 'idle',
    skills: [
        {
          id: 0,
          value: "Frontend",
          count: 0,
        },
        {
          id: 1,
          value: "Backend",
          count: 0,
        },
        {
          id: 2,
          value: "Devops",
          count: 0,
        },
        {
          id: 3,
          value: "Database",
          count: 0,
        },
      ],
}


export const votationSlice = createSlice({

    name: 'votation',
    initialState,
    reducers: {
        //* Por qué necesito el action: En el action viene: EL ID DEL SKILL QUE QUIERO VOTAR 
        voteSkill: (state,action) => {
                //* Redux Toolkit allows us to write "mutating" logic in reducers. It
                //* doesn't actually mutate the state because it uses the Immer library,
                //* which detects changes to a "draft state" and produces a brand new
                //* immutable state based off those changes
            state.skills.forEach(element => {
                if(element.id === action.payload) element.count++ ///* "MODIFYING STATE (OLDSTATE)"
            });
        }, 
        clearVotes: (state) => {
            state.skills.forEach(element => {
                element.count = 0  //* "MODIFYING STATE (OLDSTATE)"
            });
        },
        clearOneVote: (state,action) => {
          state.skills.forEach(element => {
            if(element.id === action.payload) element.count=0 ///* "MODIFYING STATE (OLDSTATE)"
          });
        },
        //LIMPIAR UNO
        // asdadsas: sdadsasd
        // asd
    }


    
})

export const { voteSkill,clearVotes,clearOneVote } = votationSlice.actions //*MAPEAR ACTION AND REDUCER

export const selectVote = (state:any)=> state.votation.value


const votationReduce = votationSlice.reducer

export { votationReduce }
