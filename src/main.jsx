import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Produtos from './pages/Produtos.jsx'
import Sobre from './pages/Sobre.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App será o layout base
    errorElement: <h1>404 · Não encontrado</h1>,
    children: [
      { index: true, element: <Home /> }, // Home será a página principal quando o caminho for '/'
      { path: 'home', element: <Home /> }, // Você pode manter '/home' se quiser um caminho explícito também
      { path: 'produtos', element: <Produtos /> },
      { path: 'sobre', element: <Sobre /> },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);