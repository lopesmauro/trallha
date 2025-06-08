import { useContext } from "react"
import { BoardContext } from "../contexts/BoardContext"

export const useBoardContext = () => useContext(BoardContext)
