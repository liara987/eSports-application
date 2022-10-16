import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAddBanner() {
  return (
    <div className="pt-1 bg-gradient-color rounded-lg self-stretch mt-8 overflow-hidden">
      <div className="bg-[#2a2634] px-4 py-3 sm:px-8 sm:py-6 flex justify-between flex-col items-center sm:flex-row">
        <div>
          <strong className="pb-4 sm:pb-0 text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="pb-4 sm:pb-0 text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="mt-2 sm:mt-5 py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
