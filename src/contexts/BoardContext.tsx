import React, { createContext, useEffect, useReducer } from "react"
import { Action, State } from "../types"
import { boardReducer } from "../utils/boardReducer"
import { initialState } from "../data/initialState"
import { saveBorderState } from "../utils/saveBorderState"
import { getInitialState } from "../utils/getInitialState"

export const BoardContext = createContext<{ state: State, dispatch: React.Dispatch<Action> }>(
    {
        state: initialState,
        dispatch: () => null 
    }
)

type BoardProviderProps = {
    children: React.ReactNode 
}

export function BoardProvider({ children }: BoardProviderProps) {
    const [state, dispatch] = useReducer(boardReducer, getInitialState())

    useEffect(() => {
        saveBorderState(state)
    }, [state])

    return (
        <BoardContext.Provider value={{ state, dispatch }}>
            {children}
        </BoardContext.Provider>
    )
}
