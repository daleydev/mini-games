import { useEffect } from "react";
import useSuffleStore from "./store"
import { uuid } from 'uuidv4'

function ShuffleGame() {
    const items = useSuffleStore((state: any) => state.items)
    const newItem = useSuffleStore((state: any) => state.newItem)
    console.log(newItem);
    console.log(items);
    const initNewItem = useSuffleStore((state: any) => state.initNewItem)
    const addItem = useSuffleStore((state: any) => state.addItem)
    const editNewItem = useSuffleStore((state:any) => state.editNewItem)
    const removeItem = useSuffleStore((state:any) => state.removeItem)

    const addItemToList = () => {
        addItem({
            ...newItem,
            id: uuid()
        })
        initNewItem()
    }

    useEffect(() => {
        initNewItem()
    }, [])

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