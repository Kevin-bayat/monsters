import { Card } from "../Card/Card";
import "./CardList.css";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((item) => (
        <Card item={item} key={item.id} search={props.searchField} />
      ))}
    </div>
  );
};
