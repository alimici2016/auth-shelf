import { useDispatch } from "react-redux";

function Item({ item }) {

  const dispatch = useDispatch();


  const handleDelete = () => {
    dispatch({type: 'DELETE_ITEM', payload: item})
  }


  return (
    <div>
      <img src={item.image_url} alt="" />
      <p>{item.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Item;
