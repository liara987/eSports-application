interface GamesBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export function GameBanner(props: GamesBannerProps){
  return(
      <a className="relative rounded-lg overflow-hidden" href="">
        <img className="h-full" src={props.bannerUrl} alt={props.title} />
        <div className="w-full pt-16 pb-4 px-4 bg-gradient-box absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">
            {props.title}
          </strong>
          <span className="text-zinc-300 block">{props.adsCount} anúncio(s)</span>
        </div>
      </a>
  )
}