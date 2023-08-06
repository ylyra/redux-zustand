import { useCurrentLesson } from '../../store'

export function Header() {
  const { currentLesson, currentModule } = useCurrentLesson()

  return (
    <div className="flex flex-col space-y-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo &quot;{currentModule.title}&quot;
      </span>
    </div>
  )
}
