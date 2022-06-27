import create from 'zustand'


const defaultItem = {
    id: -1,
    content: "",
    hide: true,
}

const useSuffleStore = create((set) => ({
    items: [],
    newItem: defaultItem,
    addItem: (item) => set(state => ({ items: [...state.items, item] })),
    removeItem: (itemId) => set(state => {
        state.items.splice(state.items.findIndex(item => item.id === itemId), 1)

        return { items: [...state.items] }
    }),
    initNewItem: () => set(_ => ({ newItem: defaultItem })),
    editNewItem: (content) => set(state => ({ newItem: { ...state.newItem, content }}))
}))

export default useSuffleStore