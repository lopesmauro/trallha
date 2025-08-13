import './styles/global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BoardListPage } from './pages/BoardsListPage'
import { NotFound } from './components/notFound'
import { BoardPage } from './pages/BoardPage'
import { CardPage } from './pages/CardPage'
import { BoardProvider } from './contexts/BoardContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BoardProvider>
      <BrowserRouter>
        <Routes>
          <Route path="board" element={<BoardListPage />} />
          <Route path="board/:boardId" element={<BoardPage />} />
          <Route path="board/:boardId/:columnId/:cardId" element={<CardPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BoardProvider>
  </StrictMode>
)
