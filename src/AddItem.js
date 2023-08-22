import React from 'react';
import { TiPlus } from 'react-icons/ti';
import { useRef } from 'react';


const AddItem = ( {newItem, setNewItem, handelSubmit} ) => {
    const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handelSubmit}>
        <label htmlFor="addItem">Add Item</label>
            <input 
            autoFocus 
            ref={inputRef}
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />
            <button
             type='submit'
             aria-label='Add Item'
             onClick={() => inputRef.current.focus()}
            >
                <TiPlus/>
            </button>
    </form>
  )
}

export default AddItem