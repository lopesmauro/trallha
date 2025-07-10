import styles from "../styles/boardsListPage.module.css"
import { useBoardContext } from "../utils/useBoardContext"

export const BoardListPage = () => {
  const { state, dispatch } = useBoardContext()

  const handleAddBoard = () => {
    const title = prompt("Digite o nome do novo board:")
    if (title) {
      dispatch({ type: "ADD_BOARD", title })
    }
  }
 
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Seus Quadros</h1>
        <button onClick={handleAddBoard} className={styles.button}>
          + Novo Board
        </button>
      </div>

      {state.boards.length === 0 ? (
        <p className={styles.emptyMessage}>Nenhum board criado ainda.</p>
      ) : (
        <div className={styles.grid}>
          {state.boards.map((board) => (
            <div key={board.id} className={styles.card}>
              <h2 className={styles.cardTitle}>
                <a href={`/board/${board.id}`}>{board.title}</a>
              </h2>
              <p className={styles.cardInfo}>
                {board.columns.length} coluna{board.columns.length !== 1 && "s"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
