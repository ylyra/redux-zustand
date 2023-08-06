import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store'
import { play } from '../../store/slices/player'
import { Lesson } from './Lesson'

interface Props {
  title: string
  lessonsAmount: number
  moduleIndex: number
}

export function Module({ lessonsAmount, title, moduleIndex }: Props) {
  const lessons = useAppSelector(
    (state) => state.player.course.modules[moduleIndex].lessons,
  )
  const dispatch = useDispatch()

  return (
    <Collapsible.Root>
      <Collapsible.Trigger className="group flex w-full items-center  space-x-3 bg-zinc-800 p-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </span>

        <span className="flex flex-col space-y-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{lessonsAmount} aulas</span>
        </span>

        <ChevronDown className="!ml-auto h-5 w-5 text-zinc-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col space-y-4 p-6">
          {lessons.map((lesson, lessonIndex) => (
            <Lesson
              key={`lesson-${lesson.id}`}
              title={lesson.title}
              duration={lesson.duration}
              onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
            />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
