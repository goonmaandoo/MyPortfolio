import './App.css'
import { BrowserRouter, Routes } from "react-router-dom";
import MainPage from './pages/mainPage';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainPage />
      <Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default App
