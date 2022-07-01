import create from 'zustand'

interface ShuffleItem {
    id: string
    content: string
    hide: boolean
}

export interface SuffleStore {
    items: ShuffleItem[]
    newItem: ShuffleItem
    addItem: (item: ShuffleItem) => void
    removeItem: (itemId: string) => void
    initNewItem: () => void
    editNewItem: (content: string) => void
}

const defaultItem: ShuffleItem = {
    id: "",
    content: "",
    hide: true,
}

export const useSuffleStore = create<SuffleStore>((set) => ({
    items: [],
    newItem: defaultItem,
    addItem: (item: ShuffleItem) => set(state => ({ items: [...state.items, item] })),
    removeItem: (itemId: string) => set(state => {
        state.items.splice(state.items.findIndex(item => item.id === itemId), 1)

        return { items: [...state.items] }
    }),
    initNewItem: () => set(() => ({ newItem: defaultItem })),
    editNewItem: (content: string) => set(state => ({ newItem: { ...state.newItem, content }}))
}))

// export default useSuffleStore