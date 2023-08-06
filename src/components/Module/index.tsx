import { ChevronDown } from 'lucide-react'
import { Lesson } from './Lesson'

interface Props {
  title: string
  lessonsAmount: number
  moduleIndex: number
}

export function Module({ lessonsAmount, title, moduleIndex }: Props) {
  return (
    <div>
      <button className="flex w-full items-center space-x-3  bg-zinc-800 p-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </span>

        <span className="flex flex-col space-y-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{lessonsAmount} aulas</span>
        </span>

        <ChevronDown className="!ml-auto h-5 w-5 text-zinc-400" />
      </button>

      <nav className="relative flex flex-col space-y-4 p-6">
        <Lesson title="Fundamentos do Redux" duration="09:13" />
        <Lesson title="Fundamentos do Redux" duration="09:13" />
        <Lesson title="Fundamentos do Redux" duration="09:13" />
      </nav>
    </div>
  )
}
