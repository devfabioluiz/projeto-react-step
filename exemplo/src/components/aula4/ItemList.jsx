const ItemList = () => {
  const items = ["React", "Vue", "Angular", "Java", "C#"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
