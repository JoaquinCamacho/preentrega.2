import ItemList from "./ItemList"
import "./itemlistcontainer.css"

const ItemListContainer = ({products}) => {


  return (
    <div className="item-list-container">
          <ItemList  products= {products}/>
    </div>
  )
}

export default ItemListContainer