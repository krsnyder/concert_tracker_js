function ListGroup() {
  const items = ["New York", "San Fran", "Seattle", "London"];

  return (
    <>
      <h1>Cities</h1>
      {items.length === 0 && <p>No Cities</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            onClick={() => console.log(`${item}`)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
