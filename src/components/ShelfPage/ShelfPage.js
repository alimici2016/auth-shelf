import React from 'react';
import AddItemForm from '../AddItemForm/AddItemForm';

function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {/* //add item to the shelf. KD */}
      <AddItemForm/>
    </div>
  );
}

export default ShelfPage;
