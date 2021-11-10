import React from 'react';
import AddItemForm from '../AddItemForm/AddItemForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../Item/Item';

function ShelfPage() {
  const dispatch = useDispatch();

  const shelf = useSelector((store) => store.shelf);

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' });
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      {shelf.map((item) => (
        <Item key={item.id} item={item} />
      ))}

      <p>All of the available items can be seen here.</p>
      {/* //add item to the shelf. KD */}
      <AddItemForm/>
    </div>
  );
}

export default ShelfPage;
