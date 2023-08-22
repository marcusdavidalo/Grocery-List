import React from 'react'
import Lineitem from './Lineitem';


const ItemList = ( {items, handeleCheck ,handelDelete } ) => {
  return (
    <ul>
        {items.map((item)=>(
           <Lineitem 
                key={item.id}
                item={item}
                handelDelete={handelDelete}
                handeleCheck={handeleCheck}
           />
        ))}
    </ul>
  )
}

export default ItemList;