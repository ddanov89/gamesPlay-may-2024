import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";

function App() {
  return (
    <>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/games" element={<GameList />} />
                <Route path="/game/create" element={<GameCreate />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
