import { useParams } from "react-router-dom"
import { useBoardContext } from "../utils/useBoardContext"
import styles from "../styles/boardPage.module.css"
import { useState } from "react"
import type { Status } from "../types"


export const CardPage = () => {
    const params = useParams()
    const { state, dispatch } = useBoardContext()
    const { cardId, boardId, columnId } = params
    const board = state.boards.find((b) => b.id === boardId)
    const columns = board?.columns.find((c) => c.id == columnId)
    const card = columns?.cards.find((c) => c.id == cardId)
    const [ title, setTitle ] = useState(card?.title || "")
    const [ description, setDescription ] = useState(card?.description || "")
    const [ status, setStatus ] = useState<Status>(card?.status || "TODO")

    const handleUpdateCard = () => {
        if (title.trim() === "" || description.trim() === "" || !status) {
            alert("Por favor, preencha todos os campos.")
            return
        }
        if (description.length > 500) {
            alert("A descrição não pode exceder 500 caracteres.")
            return
        }

        dispatch(
            {
                type: "UPDATE_CARD",
                boardId: boardId || "",
                columnId: columnId || "",
                cardId: cardId || "",
                updatedCard: {
                    title,
                    description,
                    status
                }
            }
        )
        alert("Card atualizado com sucesso!")
    }
 
    return (
        <div className={styles.fullBackground}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Card: {card?.title}</h1>
                    <a href={`/board/${boardId}`} className={styles.button}>
                        Voltar
                    </a>
                </div>

                {!card ? (
                    <p className={styles.emptyMessage}>Card não encontrado.</p>
                ) : (
                    <form className={styles.cardForm} onSubmit={(event) => event.preventDefault()}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="title">Título</label>
                            <input
                                className={styles.formInput}
                                id="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="description">Descrição</label>
                            <textarea
                                className={styles.formTextarea}
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="status">Status</label>
                            <select
                                className={styles.formSelect}
                                name="status"
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value as Status)}
                            >
                                <option value="TODO">TODO</option>
                                <option value="IN_PROGRESS">IN_PROGRESS</option>
                                <option value="COMPLETE">COMPLETE</option>
                            </select>
                        </div>

                        <button className={styles.button} type="submit" onClick={handleUpdateCard}>
                            Atualizar Card
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}
