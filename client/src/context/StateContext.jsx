import { createContext } from "react";


export const StateContext = createContext()

export const StateProvider = ({initialState, reducer, children})