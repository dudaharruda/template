import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ac83ec',
      dark: '#c899d0',
    },
    secondary: {
      main: '#ba68c8',
    },
    warning: {
      main: '#ffee58',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    error: {
      main: '#fd5145',
    },
    info: {
      main: '#d648d6',
    },
    success: {
      main: '#8ad456',
      contrastText: '#000000',
    },
    text: {
      hint: '#000000',
      disabled: '#ffffff',
      secondary: '#000000',
      primary: '#000000',
    },
    divider: '#ffffff',
    background: {
      default: '#e1bee7',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <RouterProvider router={router} />
  </ThemeProvider>
);
