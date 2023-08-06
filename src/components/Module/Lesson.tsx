import { PlayCircle, Video } from 'lucide-react'

interface Props {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay: () => void
}

export function Lesson({ duration, title, onPlay, isCurrent = false }: Props) {
  return (
    <button
      data-active={isCurrent}
      disabled={isCurrent}
      className="group flex items-center space-x-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 data-[active=false]:hover:text-zinc-100"
      onClick={onPlay}
    >
      {isCurrent ? (
        <PlayCircle className="h-4 w-4 text-emerald-400" />
      ) : (
        <Video className="h-4 w-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="!ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
