import { ChatTeardropDots } from "phosphor-react";


import { Popover } from '@headlessui/react'

export function Widget() {


  return (
    <Popover className="absolute bottom-4 right-5">

      <Popover.Panel>
        some Text
      </Popover.Panel>
      <Popover.Button
        // group vai indicar que todo button eh do tipo group 
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />

        {/* overflow hidden faz com que tudo que sobrepoe seja escondido /// transition-all realiza transicao de todo elemento 
        /// ease linear eh a transicao linear, do inicio do hover e fim, no padrao demora mais no final*/}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>

  )
}