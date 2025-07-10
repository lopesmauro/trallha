import { State, Action } from '../types'

export function boardReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_BOARD':
      return {
        ...state,
        boards: [...state.boards, {
          id: crypto.randomUUID(),
          title: action.title,
          columns: []
        }]
      }

    case 'ADD_COLUMN':
      return {
        ...state,
        boards: state.boards.map(board =>
          board.id === action.boardId
            ? {
              ...board,
              columns: [...board.columns, {
                id: crypto.randomUUID(),
                title: action.columnTitle,
                cards: []
              }]
            }
            : board
        )
      }

    case 'ADD_CARD':
      return {
        ...state,
        boards: state.boards.map(board =>
          board.id === action.boardId
            ? {
              ...board,
              columns: board.columns.map(column =>
                column.id === action.columnId
                  ? {
                    ...column,
                    cards: [...column.cards, {
                      ...action.card,
                      id: crypto.randomUUID(),
                      createdAt: new Date().toISOString(),
                    }]
                  }
                  : column
              )
            }
            : board
        )
      }

    default:
      return state
  }
}
