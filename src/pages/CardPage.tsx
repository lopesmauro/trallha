import { useParams } from "react-router-dom"
import { useBoardContext } from "../utils/useBoardContext"
import styles from "../styles/boardPage.module.css"


export const CardPage = () => {
    const params = useParams()
    const { state, dispatch } = useBoardContext()
    const { cardId, boardId, columnId } = params
    const board = state.boards.find((b) => b.id === boardId)
    const columns = board?.columns.find((c) => c.id == columnId)
    const card = columns?.cards.find((c) => c.id == cardId) 

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Card: {card?.title}</h1>
            </div>
        </div>

    )
}