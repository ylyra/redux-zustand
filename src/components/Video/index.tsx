import Player from 'react-player'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store'
import { next } from '../../store/slices/player'

export function Video() {
  const dispatch = useDispatch()
  const lesson = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return currentLesson
  })

  const handlePlayNext = () => {
    dispatch(next())
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      <Player
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
        onEnded={handlePlayNext}
        playing
      />
    </div>
  )
}
