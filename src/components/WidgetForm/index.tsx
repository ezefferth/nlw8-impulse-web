

import bugUrl from '../../assets/Bug.svg';
import ideaUrl from '../../assets/Idea.svg';
import otherUrl from '../../assets/Other.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { CloseButton } from '../CloseButton';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';


//obj que contem todos as imagens do feedback
export const feedbackTypes = {
  bug: {
    title: 'Problema',
    image: {
      source: bugUrl,
      alt: 'image de um inseto'
    }
  },
  idea: {
    title: 'Ideia',
    image: {
      source: ideaUrl,
      alt: 'imagem de uma lâmpada'
    }
  },
  other: {
    title: 'Outro',
    image: {
      source: otherUrl,
      alt: 'imagem de um balão de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;




export function WidgetForm() {

  //qnd user clicar em voltar no FeedbackContentStep
  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    /*w-[calc()] faz calc da largura que deve ser o widget, e o md-w-auto e qnd for midian ser automatico  */
    < div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto" >

      {!feedbackType ? (
        //envia como props a funcao set
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        //e pelas propriedades eh passado o tipo de feedback ele escolheu
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      {/* cor neutra 400 */}
      <footer className="text-xs text-neutral-400">{/* underline eh a linha, e o underline offset eh o espacamento da linha abaixo*/}
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div >
  )
}