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
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Seus Quadros</h1>
                <button
                    onClick={handleAddBoard}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
                >
                    + Novo Board
                </button>
            </div>

            {state.boards.length === 0 ? (
                <p className="text-gray-500 text-center">Nenhum board criado ainda.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {state.boards.map((board) => (
                        <div
                            key={board.id}
                            className="bg-white shadow-md hover:shadow-lg border border-gray-200 rounded-lg p-5 transition cursor-pointer"
                        >
                            <h2 className="text-xl font-semibold text-gray-700 mb-1">
                                <a href={`/board/${board.id}`}>{board.title}</a>
                            </h2>
                            <p className="text-sm text-gray-500">
                                {board.columns.length} coluna{board.columns.length !== 1 && "s"}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
