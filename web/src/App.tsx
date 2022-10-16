import "./styles/main.css";

import { useEffect, useState } from "react";
import logoImg from "./assets/Logo.svg";
import { CreateAddBanner } from "./components/CreateAddBanner";
import { GameBanner } from "./components/GameBanner";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdModal } from "./components/CreateAddModal";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    axios("http://localhost:3333/games/").then((response) => {
      setGames(response.data[0]);
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

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
      <div className="grid grid-cols-6 gap-6 mt-16 relative rounded-lg">
        <div className="relative w-[100vw] rounded-lg max-w-[1344px]">
          <Slider {...settings}>
            {games.map((game) => {
              return (
                <div className="h-80" key={game.id}>
                  <GameBanner
                    title={game.title}
                    bannerUrl={game.bannerUrl}
                    adsCount={game._count.ads}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <Dialog.Root>
        <CreateAddBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
