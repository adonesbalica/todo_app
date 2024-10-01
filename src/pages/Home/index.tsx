import { Sidebar } from '../../components/Sidebar'
import { TaskList } from '../../components/TaskList'

const data = {
  taskTitleList: 'Market List',
  tasks: [
    {
      title: 'Bananas',
    },
    {
      title: 'Chocolate',
    },
    {
      title: 'Rice and Beans',
    },
    {
      title: 'Beer',
    },
  ],
}

export function Home() {
  return (
    <div className="flex bg-[#E5E5E5]">
      <Sidebar />
      <TaskList taskTitleList={data.taskTitleList} tasks={data.tasks} />
    </div>
  )
}
