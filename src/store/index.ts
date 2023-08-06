import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { player } from './slices/player'

export const store = configureStore({
  reducer: {
    player,
  },
})

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player

    const currentModule = state.player.course?.modules[currentModuleIndex]

    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return {
      currentLesson,
      currentModule,
    }
  })
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
