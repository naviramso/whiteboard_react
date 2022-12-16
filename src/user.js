import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { context } from "./app";
import "./user.css";

export function User() {
  let users = useContext(context)[17];
  const [menuUsers, setUsers] = useState(false);
  const [usu, setUsu] = useState();
  useEffect(() => {
    if (users !== undefined) {
      console.log(users);
      setUsu( users.map((res) => {
        console.log(res.usuario);
        return (
          <div className="ficha" key={1}>
            <span>
              <FontAwesomeIcon icon="user" />
            </span>
            <span className="span">{res.usuario}</span>
            <button className="admin">Admin</button>
            <button className="admin">Disconnect</button>
          </div>
        );
      }));
    }
  }, [users]);

  return (
    <div>
        
      <button
        className="button-user"
        onClick={() => {
          setUsers(!menuUsers);
        }}
      >
        <FontAwesomeIcon icon={"users"} />
      </button>
      {menuUsers ? (
        <div className="container3">
            <h3>Conectados</h3>
          <button
            className="button-user"
            onClick={() => {
              setUsers(!menuUsers);
            }}
          >
            <FontAwesomeIcon icon={"users"} />
          </button>

          {usu}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
