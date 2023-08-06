import { useAppSelector, useCurrentLesson } from '../../store'

export function Header() {
  const { currentLesson, currentModule } = useCurrentLesson()
  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  if (!currentLesson || !currentModule || isCourseLoading)
    return <h1 className="text-2xl font-bold">Carregando</h1>

  return (
    <div className="flex flex-col space-y-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo &quot;{currentModule?.title}&quot;
      </span>
    </div>
  )
}
