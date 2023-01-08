import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente';
import Index, { loader as clientesLoader } from './pages/Index';
import EditarCliente, { loader as editarClienteLoader, action as EditarClienteAction } from './pages/EditarCliente';

import { action as eliminarClienteAction } from './components/Cliente';

import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';

import './index.css'

const router = createBrowserRouter(
[
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [ 
      {
        index: true,
        element: <Index />,
        loader: clientesLoader
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: EditarClienteAction
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
