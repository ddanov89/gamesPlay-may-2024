import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";

function App() {
  return (
    <AuthContextProvider>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/games/:gameId/details" element={<GameDetails />} />
            <Route path="/games/create" element={<GameCreate />} />
          </Routes>
        </main>
      </div>
    </AuthContextProvider>
  );
}

export default App;
