import { MessageCircle } from 'lucide-react'
import { Header } from '../components/Header'
import { Module } from '../components/Module'
import { Video } from '../components/Video'

export function Player() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-full max-w-[1100px] flex-col space-y-6 px-6">
        <div className="flex flex-wrap items-center justify-between">
          <Header />

          <button className="flex items-center space-x-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" />
            Deiar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 pr-80 shadow">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="absolute bottom-0 right-0 top-0 w-80 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <Module
              title="Desvendando o Redux"
              lessonsAmount={10}
              moduleIndex={0}
            />
            <Module
              title="Desvendando o Redux"
              lessonsAmount={10}
              moduleIndex={1}
            />
            <Module
              title="Desvendando o Redux"
              lessonsAmount={10}
              moduleIndex={2}
            />
            <Module
              title="Desvendando o Redux"
              lessonsAmount={10}
              moduleIndex={3}
            />
            <Module
              title="Desvendando o Redux"
              lessonsAmount={10}
              moduleIndex={4}
            />
          </aside>
        </main>
      </div>
    </div>
  )
}
