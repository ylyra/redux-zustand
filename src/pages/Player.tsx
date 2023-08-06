import { MessageCircle } from 'lucide-react'

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex max-w-[1100px] flex-col space-y-6 w-full px-6">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col space-y-1">
            <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
            <span className="text-sm text-zinc-400">Módulo "Desvendando o Redux"</span>
          </div>

          <button className='flex items-center space-x-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-600 duration-200'>
            <MessageCircle className='w-4 h-4' />
            Deiar feedback
          </button>
        </div>

        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow'>
          <div className='flex-1'>
            video
          </div>
          <aside className='w-full min-w-[300px] max-w-[320px] border-l border-zinc-800 bg-zinc-900 h-[600px]'>

          </aside>
        </main>
      </div>
    </div>
  )
}