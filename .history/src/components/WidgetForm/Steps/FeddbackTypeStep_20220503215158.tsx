import { useState } from "react";
import bugImageUrl from "../../assets/bug.svg";
import ideiaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto"
    }
  },
  IDEIA: {
    title: "Ideia",
    image: {
      source: ideiaImageUrl,
      alt: "Imagem de uma lâmpada"
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de balão de pensamento"
    }
  }
};

type FeedbackType = keyof typeof feedbackTypes;


export function FeddbackTypeStep(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return(
    <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center  gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                type="button"
                onClick={() => setFeedbackType(key as FeedbackType)}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
  )
}