import React, { Children, createContext, useContext, useReducer } from "react"
import { Action, State } from "../types"
import { boardReducer } from "../utils/boardReducer"

const initialState: State = {
    boards: []
}

const BoardContext = createContext<{ state: State, dispatch: React.Dispatch<Action> }>({ state: initialState, dispatch: () => null })

export function BoardProvider({children}: {children: React.ReactNode}) {
    const [state, dispatch] = useReducer(boardReducer, initialState)
    return (
        <BoardContext.Provider value={{state, dispatch}}>
            {children}
        </BoardContext.Provider>
    )
}

export const usBBoardContext = () => useContext(BoardContext)