import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react";
import logoImg from "./assets/Logo.svg";

function App() {
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
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Legue of legends
            </strong>
            <span className="text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Legue of legends
            </strong>
            <span className="text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Legue of legends
            </strong>
            <span className="text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Legue of legends
            </strong>
            <span className="text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Legue of legends
            </strong>
            <span className="text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Legue of legends
            </strong>
            <span className="text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-gradient-color rounded-lg self-stretch mt-8 overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
