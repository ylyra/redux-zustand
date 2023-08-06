import Player from 'react-player'
import { useAppDispatch, useCurrentLesson } from '../../store'
import { next } from '../../store/slices/player'

export function Video() {
  const dispatch = useAppDispatch()
  const { currentLesson } = useCurrentLesson()

  const handlePlayNext = () => {
    dispatch(next())
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      <Player
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        onEnded={handlePlayNext}
        playing
        light
      />
    </div>
  )
}
