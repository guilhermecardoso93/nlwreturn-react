import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg'
import ideiaImageUrl from '../assets/ideia.svg'
import outroImageUrl from '../assets/outro.svg'


const feedbackTypes = {
  BUG:{
    title:'Problema',
    image:{
      source: '',
      alt:'Relatar Bug'
    }
  },
  IDEIA:{
    title:'Ideia'
  },
  OTHER:{
    title:'Outro'
  },
}


export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        <button></button>
      </div>
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a href="https://rocketseat.com.br" target="_blank" className="underline underline-offset-2">
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
