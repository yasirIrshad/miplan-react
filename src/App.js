import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './config/router';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
