
import Header from './Header';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import { useState } from 'react';
import './index.css';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoopinglist')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  
  const setAndSaveItems = (newItems) =>{
    setItems(newItems);
    localStorage.setItem('shoopinglist', JSON.stringify(newItems));
  }
  
const addItem = (item) =>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem ={ id, checked: false, item};
  const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
}
const handeleCheck = (id) =>{
  const listItems = items.map((item) => item.id === id ? {...item, 
  checked: !item.checked} : item);
  setAndSaveItems(listItems);
}

const handelDelete = (id)=>{
    const listItems = items.filter((item)=> item.id !== id);
    setAndSaveItems(listItems);
}
const handelSubmit = (e) =>{
  e.preventDefault();
  if (!newItem) return;
  //ADD item
  addItem(newItem);
  setNewItem('');
};




   
  return (
        <div className="App">
        <Header title='Grocery List'/>
        <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handelSubmit={handelSubmit}
        />
        <SearchItem
        search={search}
        setSearch={setSearch}
        />
          <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handelDelete={handelDelete}
          handeleCheck={handeleCheck}
          />
        <Footer length={items.length} />
        </div>
  );
}

export default App;
