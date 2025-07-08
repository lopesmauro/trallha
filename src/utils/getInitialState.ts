import { State } from "../types"
import { initialState } from "../data/initialState"

export const getInitialState = (): State => {
    const stored = localStorage.getItem("boardState")
    return stored ? JSON.parse(stored) : initialState
}