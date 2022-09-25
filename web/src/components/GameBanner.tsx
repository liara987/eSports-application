import "../styles/main.css";
export interface GameBannerProps {
  id: string;
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export function GameBanner({ id, bannerUrl, title, adsCount }: GameBannerProps) {
  return (
      <a key={id} className="relative rounded-lg overflow-hidden keen-slider__slide" href="#">
          <img src={bannerUrl} alt={title} />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white'>{title}</strong>
              <span className='text-sm text-zinc-300 block'>{adsCount} anúncio(s)</span>
          </div>
      </a>
  )
}