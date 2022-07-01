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

    const handleKeyDown = (event: any) => {
        console.log('User pressed: ', event.key);
    
        if (event.key === 'Enter') {
            addItemToList()
        }
    };

    return (
        <div>
            <div className="w-8/12 mx-auto">
                <div className="text-3xl text-center m-6">
                    Items { `(${items.length})` }
                </div>

                <div className="flex align-middle mb-6 justify-center">
                    <input 
                        className="border border-slate-300 rounded-md mx-4 shadow-sm px-6 py-2 w-full max-w-sm"
                        placeholder="Type something and add to the list..."
                        onKeyDown={handleKeyDown}
                        value={newItem?.content} 
                        onChange={(e) => editNewItem(e.target.value)}
                    />
                    <button className="mr-4" onClick={addItemToList}>Add</button>
                    <button onClick={addItemToList}>Reset</button>
                </div>

                <div className="flex flex-col justify-center ">
                    {
                        items.map((item: any, index: number) => {
                            return (
                                <div 
                                    key={item.id}
                                    className="border rounded-xl flex align-middle max-w-lg p-6 mb-6 w-full mx-auto"
                                >
                                    <div className="flex justify-center align-middle mr-5">{index + 1}</div>
                                    <div className="w-full">{item.content}</div>
                                    <button onClick={() => removeItem(item.id)}>remove</button>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex justify-center">
                    <button 
                        type="button" 
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Start
                    </button>
                </div>
            </div>
        </div>
    )
}
  
export default ShuffleGame