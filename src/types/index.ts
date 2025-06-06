export interface Card {
  id: string
  title: string
  description: string
  createdAt: string
  dueDate?: string
  labels?: string[]
  assignees?: string[]
  status: Status
}

export interface Column {
    id: string,
    title: string
    cards: Card[]
}

export interface Board {
    id: string,
    title: string,
    columns: Column[]
}

export type Status = 'TODO' | 'IN_PROGRESS' | 'COMPLETE'

export type State = {
    boards: Board[]
}

export type Action =
  | { type: 'ADD_BOARD'; title: string }
  | { type: 'ADD_COLUMN'; boardId: string; columnTitle: string }
  | { type: 'ADD_CARD'; boardId: string; columnId: string; card: Omit<Card, 'id' | 'createdAt'> }

