import { useSuffleStore, SuffleStore } from "./store"
import { v4 as uuidv4 } from 'uuid'

function ShuffleGame() {
    // states
    const items = useSuffleStore((state: SuffleStore) => state.items)
    const newItem = useSuffleStore((state: SuffleStore) => state.newItem)
    
    // actions
    const initNewItem = useSuffleStore((state: SuffleStore) => state.initNewItem)
    const addItem = useSuffleStore((state: SuffleStore) => state.addItem)
    const editNewItem = useSuffleStore((state:SuffleStore) => state.editNewItem)
    const removeItem = useSuffleStore((state:SuffleStore) => state.removeItem)

    console.log(newItem);
    console.log(items);

    const addItemToList = () => {
        if (!newItem.content) return

        addItem({
            ...newItem,
            id: uuidv4()
        })
        initNewItem()
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">List your items</h1>

            <div>
                <div>
                    <span>Content: </span>
                    <input value={newItem?.content} onChange={(e) => editNewItem(e.target.value)}/>
                    <button onClick={addItemToList}>Add</button>
                </div>

                {
                    items.map((item: any, index: number) => {
                        return (
                            <div key={item.id}>
                                {index + 1}
                                {item.content}
                                <button onClick={() => removeItem(item.id)}>remove</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
  
export default ShuffleGame