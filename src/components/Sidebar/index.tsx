import check from '../../assets/check.svg'
import arrow from '../../assets/arrow.svg'
import pen from '../../assets/pen.svg'
import star from '../../assets/star.svg'
import circle from '../../assets/circle.svg'

import { Accordion } from '../Accordion'

const data = [
  {
    title: 'Today Task',
    icon: star,
  },
  {
    title: 'Custom Tasks',
    icon: pen,
    actionIcon: arrow,
    subMenus: [
      { title: 'Market List', path: '/market-list', icon: circle },
      { title: 'Grocery List', path: '/grocery-list', icon: circle },
    ],
  },
]

export function Sidebar() {
  return (
    <aside className="flex flex-col text-white w-80 h-svh pt-9 px-8 bg-[#1A202E]">
      <div className="flex items-center gap-3 pb-7">
        <img src={check} />
        <span>To-Do List</span>
      </div>

      {data.map((item) => (
        <Accordion
          title={item.title}
          icon={item.icon}
          actionIcon={item.actionIcon}
          subMenus={item.subMenus}
        />
      ))}
    </aside>
  )
}
