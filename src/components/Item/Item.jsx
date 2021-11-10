function Item({ item }) {
  return (
    <div>
      <img src={item.image_url} alt="" />
      <p>{item.description}</p>
    </div>
  );
}

export default Item;
