import trash from '../../assets/trash.svg'

interface TaskListProp {
  taskTitleList: string
  tasks: Array<{ title: string }>
}

export function TaskList({ taskTitleList, tasks }: TaskListProp) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between bg-white p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <h1 className="text-black text-[2rem] font-bold">{taskTitleList}</h1>
        <button className="bg-[#1A202E] p-3 rounded text-white hover:cursor-pointer">
          Add a New Task
        </button>
      </div>
      <div className="p-10">
        <ul className="flex flex-col mx-auto my-0 max-w-3xl justify-center gap-4 text-xl text-black font-bold">
          {tasks.map((item) => (
            <li className="flex items-center bg-white rounded	p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <label className="flex flex-1 items-center" htmlFor="task1">
                <input
                  className="mr-6 h-8 w-8"
                  type="checkbox"
                  id={item.title}
                  value={item.title}
                />
                {item.title}
              </label>
              <button className="">
                <img src={trash} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
