import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import BookList from './pages/BookList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} />
    </Routes>
  )
}

export default App;
