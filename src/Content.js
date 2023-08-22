import React from 'react'
import ItemList from './ItemList'


const Content = ({items, handeleCheck ,handelDelete }) => {
  return (
    <main>
        {items.length ? (
            <ItemList
                    items={items}
                    handelDelete={handelDelete}
                    handeleCheck={handeleCheck}
            />
        ):(
            <p style={{marginTop: '2rem'}}>Your List Is Empty.</p>
        )}
    </main>
  )
}

export default Content