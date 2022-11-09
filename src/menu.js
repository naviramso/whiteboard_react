import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Menu() {
  return (
    <div className="menu-container">
      <Button icon="pen" dropdown="dropdown" />
      <Button icon="eraser" />
      <Button icon="minus" />
      <Button icon="image" />
      <Button icon="t" />
      <Button icon="shapes" />
      <Button icon="save" />
      <Button icon="trash" />
    </div>
  );
}

function Button(props) {
  return (
    <>
      <button className={"button-menu " + props.color}>
        <FontAwesomeIcon icon={props.icon} size="xl" />
      </button>
    </>
  );
}

function Dropdown(props) {
  return (
    <div className="dropdown-content">
      <Button color="" />
      <Button color="" />
      <Button color="" />
      <Button color="" />
      <Button color="" />
      <Button color="" />
    </div>
  );
}
