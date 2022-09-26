import "./styles/main.css";

import { useEffect, useState } from "react";
import logoImg from "./assets/Logo.svg";
import { CreateAddBanner } from "./components/CreateAddBanner";
import { GameBanner } from "./components/GameBanner";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdModal } from './components/CreateAddModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games/")
      .then((response) => response.json())
      .then((data) => {
        setGames(data[0]);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-gradient-color text-transparent bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAddBanner />

        <CreateAdModal/>
      </Dialog.Root>
    </div>
  );
}

export default App;
