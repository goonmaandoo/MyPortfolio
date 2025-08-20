import './App.css'
import { HashRouter, Routes } from "react-router-dom";
import MainPage from './pages/mainPage';
import Header from './components/header';

function App() {
  return (
    <HashRouter>
      <Header />
      <MainPage />
      <Routes>
      </Routes>
    </HashRouter>
  )
}

export default App
