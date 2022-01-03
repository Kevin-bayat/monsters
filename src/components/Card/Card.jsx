import "./Card.css";
export const Card = ({ item, search }) => {
  return (
    <div className="card">
      <img alt="monsters" src={`https://robohash.org/${item.id}?set=set2`} />
      <h2>{item.name}</h2>
      <p>{item.email}</p>
    </div>
  );
};
