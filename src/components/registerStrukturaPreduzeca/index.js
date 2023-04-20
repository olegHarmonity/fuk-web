import React, { useState, useRef } from "react";
import "./register-srtuktura-preduzeca.css";
import DodavanjeOdeljenja from "../dodavanjeOdeljenja";

export default function RegisterStrukturaPreduzeca() {
  const [positions, setPositions] = useState([{ id: 1, name: "direktor" }]);
  const inputRef = useRef(null);

  const handleAddPositionToList = () => {
    setPositions((positions) => [...positions, { id: positions.length + 1, name: "", typing: true }]);
  };

  const handleConfirmAddPosition = (id) => {
    setPositions((pos) => {
      const newPositions = pos.map((position) => {
        if (position.id === id) {
          const { typing, ...rest } = position;
          return { ...rest };
        }
        return position;
      });

      return [...newPositions];
    });
  };

  const handleDeletePosition = (id) => {
    setPositions((pos) => {
      const filteredPositions = pos.filter((position) => position.id !== id);
      return [...filteredPositions];
    });
  };

  const handleChangePositionName = (e, id) => {
    setPositions((pos) => {
      const newPositions = pos.map((position) => {
        if (position.id === id) {
          return { ...position, name: e.target.value };
        }
        return position;
      });
      return [...newPositions];
    });
  };

  const handleSetEdit = (id) => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setPositions((pos) => {
      const newPositions = pos.map((position) => {
        if (position.id === id) {
          return { ...position, typing: true };
        }
        return position;
      });
      return [...newPositions];
    });
  };

  return (
    <div className="page">
      <div className="page-title">Struktura preduzeca</div>
      <p className="startpage-description">
        Molimo vas da ne ulazite u proces registracije bez pomoći stručnog lica. Naš tim Vam stoji na raspolaganju.
      </p>
      <section className="page-main flex-start">
        <div className="list-wrapper">
          <h3 className="list-title">Uprava</h3>
          {positions && (
            <ul className="positions-list">
              {positions.map((position) => {
                return (
                  <li className="add-to-list-input-wrapper" key={position.id}>
                    <input
                      ref={inputRef}
                      autoFocus
                      readOnly={!position.typing}
                      type="text"
                      className="add-to-list-input"
                      value={position.name}
                      onChange={(e) => handleChangePositionName(e, position.id)}
                    ></input>

                    <div className="edit-buttons-block">
                      {position?.typing && position.name && (
                        <button onClick={() => handleConfirmAddPosition(position.id)}>
                          <img src="/images/check1.jpg" />
                        </button>
                      )}
                      {!position?.typing && position.name && (
                        <button onClick={() => handleSetEdit(position.id)}>
                          <img src="/images/edit.png" />
                        </button>
                      )}
                      <button onClick={() => handleDeletePosition(position.id)}>
                        <img src="/images/trash.png" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="add-to-list-block">
            <button
              className="add-list-button"
              onClick={handleAddPositionToList}
              disabled={positions.length && positions.some((pos) => pos.typing === true)}
            >
              +Dodajte radno mesto
            </button>
          </div>
        </div>
        <DodavanjeOdeljenja />
      </section>
    </div>
  );
}
