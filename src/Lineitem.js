import React from 'react'
import { BsTrash3Fill } from 'react-icons/bs';


const Lineitem = ( {item ,handeleCheck ,handelDelete} ) => {
  return (
    <li className='item' > 
        <input type="checkbox"
        onChange={()=> handeleCheck(item.id)}
        checked={item.checked}
        />

        <label
        style={(item.checked)? {textDecoration:'line-through'}: null}
        onDoubleClick={()=> handeleCheck(item.id)}
        >{item.item}</label>

        <BsTrash3Fill
        onClick={()=> handelDelete(item.id)}
        role='button'
        tabIndex='0'
        aria-label={`Delete ${item.item}`}
        />
    </li>
  )
}

export default Lineitem