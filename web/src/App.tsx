import "./styles/main.css";

import { useEffect, useState } from "react";
import logoImg from "./assets/Logo.svg";
import { CreateAddBanner } from "./components/CreateAddBanner";
import { GameBanner } from "./components/GameBanner";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdModal } from "./components/CreateAddModal";
import axios from "axios";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    loop: true,
    slides: {
      perView: 4,
      spacing: 35,
    },
  })
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games/").then((response) => {
      setGames(response.data[0]);
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

      <div className="grid grid-cols-6 gap-6 mt-16 keen-slider" ref={ref}>
        {games.map((game) => {
          return (
            <div className="keen-slider__slide number-slide">
              <GameBanner
                key={game.id}
                title={game.title}
                bannerUrl={game.bannerUrl}
                adsCount={game._count.ads}
              />
            </div>
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAddBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
