import { useParams } from "react-router-dom"
import { useBoardContext } from "../utils/useBoardContext"
import styles from "../styles/boardsListPage.module.css"

export const BoardPage = () => {
    const { state, dispatch } = useBoardContext()
    const { boardId } = useParams()
    const board = state.boards.find((b) => b.id === boardId)

    const handleAddColumn = (): void => {
        const title = prompt("Digite o nome da nova coluna:")
        if (board?.id && title)
            dispatch({ type: "ADD_COLUMN", boardId: board?.id, columnTitle: title })
    }

    const handleAddCard = (columnId: string): void => {
        const title = prompt("Digite o nome do novo card:")
        const validTitle = title ? true : false
        if (!validTitle) return

        const description = prompt("Digite a descrição do card:")
        const validDescription = description ? true : false
        if (!validDescription) return

        const status = prompt("Digite o status: TODO, IN_PROGESS ou COMPLETE")
        const validStatus = status === "TODO" || status === "IN_PROGRESS" || status === "COMPLETE"
        if (!validStatus) return

        if (board?.id && title && description && validStatus) {
            dispatch({
                type: "ADD_CARD", boardId: board.id, columnId: columnId, card: {
                    title: title,
                    description: description,
                    status: status,
                }
            })
        }
    }

    const getStatusClass = (status: string) => {
        if (status === "TODO") return styles.borderTodo
        if (status === "IN_PROGRESS") return styles.borderInProgress
        if (status === "COMPLETE") return styles.borderComplete
    }


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Board: {board?.title}</h1>
                <button onClick={handleAddColumn} className={styles.button}>
                    + Nova coluna
                </button>
            </div>

            {board?.columns.length === 0 ? (
                <p className={styles.emptyMessage}>Nenhuma coluna criada ainda.</p>
            ) : (
                <div className={styles.grid}>
                    {board?.columns.map((column) => (
                        <div key={column.id} className={styles.card}>
                            <h2 className={styles.cardTitle}>{column.title}</h2>
                            {column.cards.map((card) => (
                                <div key={card.id}>
                                    <p className={getStatusClass(card.status)}>
                                        {card.title}
                                    </p>
                                </div>
                            ))
                            }
                            <button onClick={() => handleAddCard(column.id)} className={styles.button}>
                                + Novo Card
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
