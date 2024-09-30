import { useState } from 'react'

interface AccordionProps {
  title: string
  icon: string
  actionIcon?: string
  subMenus?: Array<{ title: string; path: string; icon: string }>
}

export function Accordion({
  title,
  icon,
  actionIcon,
  subMenus,
}: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)

  return (
    <div className="border-t-[0.1px] border-white py-7">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center w-full gap-2 px-1"
      >
        <img src={icon} />
        <span className="text-2xl">{title}</span>
        <span className="ml-auto transition-all duration-300 ease-in-out">
          {accordionOpen ? (
            <img className="rotate-90" src={actionIcon} />
          ) : (
            <img src={actionIcon} />
          )}
        </span>
      </button>
      <div
        className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out
          ${accordionOpen ? 'flex opacity-100' : 'hidden opacity-0'}
          `}
      >
        <div className="flex flex-col w-full  mt-2 gap-2">
          {subMenus?.map((item) => {
            return (
              <a
                href={item.path}
                className="flex gap-2 py-3 pl-6 hover:bg-[#121620]"
              >
                <img src={item.icon} />
                {item.title}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
