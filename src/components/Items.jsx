
import { Item } from "./Item"
export const Items =({fn,allItems})=>{
    return(
        <div className='d-flex flex-wrap'>
            {allItems.map((currentItem,index) => 
            <Item fn={fn} key={index} item={currentItem}/>)}
        </div>
    )
}