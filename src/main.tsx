import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BoardListPage } from './pages/BoardsListPage'
import { Redirect } from './components/redirect'
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
          <Route path="board/:boardId" element={<BoardPage />}>
            <Route path="card/:cardId" element={<CardPage />} />
          </Route>
          <Route path='/redirect' element={<Redirect />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BoardProvider>
  </StrictMode>
)
