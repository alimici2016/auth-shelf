import { useDispatch } from 'react-redux';
import { useState } from 'react';
//import for functionality

function AddItemForm() {

    //initialize dispatch 
    const dispatch = useDispatch();

    //hold new item in state
    const [newItem, setNewItem] = useState({
        description: '',
        image_url: '',
    });
    //will set local state to inputs passed in 
    const handlePropertyChange =(event, property) => {
        console.log('event happened', event);
        setNewItem({...newItem, [property]: event.target.value})
    };

    //function to send new item to the saga, then to the reducer
    const addNewItem = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        console.log(`clicked, added a new item`);
    };

    //ADD AN ITEM FORM 

    return (<>
        <form onSubmit={addNewItem}>
            <input
                placeholder="description"
                type="text"
                value={newItem.description}
                onChange={(event) => handlePropertyChange(event, 'description')}
            /> 
            <input
                placeholder="image_url"
                type="text"
                value={newItem.image_url}
                onChange={(event) => handlePropertyChange(event, 'image_url')}
            />
            <button
            type="submit">Add New Item!</button>

        </form>

    </>
    )
}
export default AddItemForm;