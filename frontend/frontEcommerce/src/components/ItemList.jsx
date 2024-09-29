import {Item} from './Item';
import '../App.css' 
import '../index.css' 

export const ItemList = ({items}) => {
    return(
        <div className="cardsContainer Container">
            {items.map((item) => <Item item={item} key={item._id}/>)}
        </div>
    )
}