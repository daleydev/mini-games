import useSuffleStore from "./store"

function ShuffleGame() {
    const items = useSuffleStore((state: any) => state.items);
    console.log(items);
    return <div>About</div>
}
  
export default ShuffleGame