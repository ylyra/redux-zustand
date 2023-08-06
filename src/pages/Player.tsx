import { MessageCircle } from 'lucide-react'
import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Module } from '../components/Module'
import { Video } from '../components/Video'
import { useAppDispatch, useAppSelector, useCurrentLesson } from '../store'
import { loadCourse } from '../store/slices/player'

export function Player() {
  const dispatch = useAppDispatch()
  const { currentLesson } = useCurrentLesson()
  const modules = useAppSelector((state) => state.player.course?.modules)

  useEffect(() => {
    if (!currentLesson) return

    document.title = `Assistindo ${currentLesson.title}`
  }, [currentLesson, currentLesson?.title])

  useEffect(() => {
    dispatch(loadCourse())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-full max-w-[1100px] flex-col space-y-6 px-6">
        <div className="flex flex-wrap items-center justify-between">
          <Header />

          <button className="flex items-center space-x-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" />
            <span>Deixar feedback</span>
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 pr-80 shadow">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="absolute bottom-0 right-0 top-0 w-80 divide-y-2 divide-zinc-900 overflow-y-auto border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {modules?.map((module, index) => (
              <Module
                title={module.title}
                lessonsAmount={module.lessons.length}
                moduleIndex={index}
                key={`module-${module.id}`}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  )
}
