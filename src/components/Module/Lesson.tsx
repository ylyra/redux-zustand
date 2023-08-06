import { Video } from 'lucide-react'

interface Props {
  title: string
  duration: string
}

export function Lesson({ duration, title }: Props) {
  return (
    <button className="flex items-center space-x-3 text-sm text-zinc-400">
      <Video className="h-4 w-4 text-zinc-500" />
      <span>{title}</span>
      <span className="!ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
