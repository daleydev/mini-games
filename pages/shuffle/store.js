import create from 'zustand'

const useSuffleStore = create(set => ({
  items: [],
  add: (item) => set(state => ({ items: [...state.items, item] })),
}))

export default useSuffleStore