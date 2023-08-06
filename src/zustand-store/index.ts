import { create } from 'zustand'

export const useStore = create((set, get) => {
  return {
    course: null,
    currentModuleIndex: 0,
    currentLessonIndex: 0,
    isLoading: false,
  }
})
