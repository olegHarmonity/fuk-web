import React, { useState, useRef } from "react";
import "./dodavanje-odeljenja.css";

//const departmentsList = [{ id: 1, name: "Racunovodstvo" }];

export default function DodavanjeOdeljenja() {
  const [departments, setDepartments] = useState([]);
  const inputRef = useRef(null);

  const handleAddDepartmentToList = () => {
    setDepartments((departments) => {
      return [
        ...departments,
        {
          id: departments.length ? departments[departments.length - 1].id + 1 : 1,
          name: "",
          typing: true,
          positions: [],
          odseci: [],
        },
      ];
    });
  };

  const handleConfirmAddDepartment = (id) => {
    setDepartments((dep) => {
      const newDepartments = dep.map((department) => {
        if (department.id === id) {
          const { typing, ...rest } = department;
          return { ...rest };
        }
        return department;
      });

      return [...newDepartments];
    });
  };

  const handleDeleteDepartment = (id) => {
    setDepartments((dep) => {
      const filteredDepartments = dep.filter((department) => department.id !== id);
      return [...filteredDepartments];
    });
  };

  const handleChangeDepartmentName = (e, id) => {
    setDepartments((dep) => {
      const newDepartments = dep.map((department) => {
        if (department.id === id) {
          return { ...department, name: e.target.value };
        }
        return department;
      });
      return [...newDepartments];
    });
  };

  const handleSetEdit = (id) => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setDepartments((dep) => {
      const newDepartments = dep.map((department) => {
        if (department.id === id) {
          return { ...department, typing: true };
        }
        return department;
      });
      return [...newDepartments];
    });
  };

  //handling positions to department

  const handleAddPositionToDepartment = (id) => {
    setDepartments((departments) => {
      const newDepartments = departments.map((department) => {
        if (department.id === id) {
          if (department.positions.length) {
            return {
              ...department,
              positions: [
                ...department.positions,
                { id: department.positions[department.positions.length - 1].id + 1, name: "", typing: true },
              ],
            };
          } else {
            return {
              ...department,
              positions: [{ id: 1, name: "", typing: true }],
            };
          }
        }
        return department;
      });
      return [...newDepartments];
    });
  };

  const handleChangeAddPositionToDepartment = (e, depId, posId) => {
    setDepartments((dep) => {
      const newDepartments = dep.map((department) => {
        if (department.id === depId) {
          const newPositions = department.positions.map((position) => {
            if (position.id === posId) {
              return { ...position, name: e.target.value };
            }
            return position;
          });
          return { ...department, positions: [...newPositions] };
        }
        return department;
      });
      return [...newDepartments];
    });
  };

  const handleAddConfirmPositionToDepartment = (depId, posId) => {
    setDepartments((dep) => {
      const newDepartments = dep.map((department) => {
        if (department.id === depId) {
          const newPositions = department.positions.map((position) => {
            if (position.id === posId) {
              const { typing, ...rest } = position;
              return rest;
            }
            return position;
          });
          return { ...department, positions: [...newPositions] };
        }
        return department;
      });
      return [...newDepartments];
    });
  };

  const handleSetEditDepartmentPosition = (depId, posId) => {
    setDepartments((dep) => {
      const newDepartments = dep.map((department) => {
        if (department.id === depId) {
          const newPositions = department.positions.map((position) => {
            if (position.id === posId) {
              return { ...position, typing: true };
            }
            return position;
          });
          return { ...department, positions: [...newPositions] };
        }
        return department;
      });
      return [...newDepartments];
    });
  };

  const handleDeletePositionFromDepartment = (depId, posId) => {
    setDepartments((dep) => {
      const newDepartments = dep.map((department) => {
        if (department.id === depId) {
          const filteredPositions = department.positions.filter((position) => {
            return position.id !== posId;
          });
          return { ...department, positions: [...filteredPositions] };
        }
        return department;
      });
      return [...newDepartments];
    });
  };

  const handleAddOdsek = (departmentId) => {
    setDepartments((dep) => {
      const newDepartments = dep.map((department) => {
        if (departmentId === department.id) {
          if (department?.odseci.length) {
            const newOdsek = {
              id: department.odseci[department.odseci.length - 1].id + 1,
              name: "",
              positions: [],
              services: [],
              typing: true,
            };
            return { ...department, odseci: [...department.odseci, newOdsek] };
          } else {
            const newOdsek = { id: 1, name: "", typing: true, positions: [], services: [] };
            return { ...department, odseci: [newOdsek] };
          }
        }
        return department;
      });
      return [...newDepartments];
    });
  };

  const handleChangeOdsekName = (e, depId, odsId) => {
    setDepartments((departments) => {
      const newDepartments = departments.map((department) => {
        if (department.id === depId) {
          const newOdseci = department.odseci.map((odsek) => {
            if (odsek.id === odsId) {
              return { ...odsek, name: e.target.value };
            }
            return odsek;
          });
          return { ...department, odseci: newOdseci };
        }
        return department;
      });

      return [...newDepartments];
    });
  };

  const handleConfirmAddOdsek = (depId, odsId) => {
    setDepartments((departments) => {
      const newDepartments = departments.map((department) => {
        if (department.id === depId) {
          const newOdseci = department.odseci.map((odsek) => {
            if (odsek.id === odsId) {
              const { typing, ...rest } = odsek;
              return { ...rest };
            } else {
              return odsek;
            }
          });

          return { ...department, odseci: newOdseci };
        }
        return department;
      });

      return [...newDepartments];
    });
  };

  const handleSetEditOdsek = (depId, odsId) => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setDepartments((departments) => {
      const newDepartments = departments.map((department) => {
        if (department.id === depId) {
          const newOdseci = department.odseci.map((odsek) => {
            if (odsek.id === odsId) {
              return { ...odsek, typing: true };
            }
            return odsek;
          });
          return { ...department, odseci: newOdseci };
        }
        return department;
      });
      return [...newDepartments];
    });
  };

  const handleDeleteOdsek = (depId, odsId) => {
    setDepartments((departments) => {
      const newDepartments = departments.map((department) => {
        if (department.id === depId) {
          if (department.odseci.length === 1) {
            const { odseci, ...rest } = department;
            return { ...department, odseci: [] };
          } else {
            const filteredOdseci = department.odseci.filter((odsek) => odsek.id !== odsId);
            return { ...department, odseci: filteredOdseci };
          }
        }
        return department;
      });

      return [...newDepartments];
    });
  };

  //add services

  const handleAddService = (depId, odsId) => {
    setDepartments((dep) => {
      const newDepartments = dep.map((department) => {
        if (depId === department.id) {
          const newOdseci = department.odseci.map((odsek) => {
            if (odsId === odsek.id) {
              if (odsek?.services.length) {
                const newService = { id: odsek.services[odsek.services.length - 1].id + 1, name: "", typing: true };
                return { ...odsek, services: [...odsek.services, newService] };
              } else {
                const newService = { id: 1, name: "", typing: true };
                return { ...odsek, services: [newService] };
              }
            }
            return odsek;
          });
          return { ...department, odseci: newOdseci };
        }
        return department;
      });
      return [...newDepartments];
    });
  };

  const handleChangeServiceName = (e, depId, odsId, servId) => {
    setDepartments((departments) => {
      const newDepartments = departments.map((department) => {
        if (department.id === depId) {
          const newOdseci = department.odseci.map((odsek) => {
            if (odsek.id === odsId) {
              const newServices = odsek.services.map((service) => {
                if (service.id === servId) {
                  return { ...service, name: e.target.value };
                }
                return service;
              });
              return { ...odsek, services: newServices };
            }
            return odsek;
          });
          return { ...department, odseci: newOdseci };
        }
        return department;
      });

      return [...newDepartments];
    });
  };

  const handleConfirmAddService = (depId, odsId, servId) => {
    setDepartments((departments) => {
      const newDepartments = departments.map((department) => {
        if (department.id === depId) {
          const newOdseci = department.odseci.map((odsek) => {
            if (odsek.id === odsId) {
              const newServices = odsek.services.map((service) => {
                if (service.id === servId) {
                  const { typing, ...rest } = service;
                  return rest;
                }
                return service;
              });

              return { ...odsek, services: newServices };
            } else {
              return odsek;
            }
          });

          return { ...department, odseci: newOdseci };
        }
        return department;
      });

      return [...newDepartments];
    });
  };

  const handleAddPositionToList = (depId, odsId) => {
    setDepartments((departments) => {
      const newDepartments = departments.map((department) => {
        if (department.id === depId) {
          const newOdseci = department.odseci.map((odsek) => {
            if (odsek.id === odsId) {
              if (odsek.positions.length) {
                const newPosition = {
                  id: odsek.positions[odsek.positions.length - 1].id + 1,
                  name: "",
                  typing: true,
                };
                return { ...odsek, positions: [...odsek.positions, newPosition] };
              } else {
                const newPosition = { id: 1, name: "", typing: true };

                return { ...odsek, positions: [newPosition] };
              }
            }
            return odsek;
          });
          return { ...department, odseci: newOdseci };
        }
        return department;
      });

      return [...newDepartments];
    });
  };

  const handleChangePositionName = (e, depId, odsId, posId) => {
    setDepartments((departments) => {
      const newDepartments = departments.map((department) => {
        if (department.id === depId) {
          const newOdseci = department.odseci.map((odsek) => {
            if (odsek.id === odsId) {
              const newPositions = odsek.positions.map((position) => {
                if (position.id === posId) {
                  return { ...position, name: e.target.value };
                }
                return position;
              });
              return { ...odsek, positions: newPositions };
            }
            return odsek;
          });
          return { ...department, odseci: newOdseci };
        }
        return department;
      });

      return [...newDepartments];
    });
  };

  const handleAddConfirmPosition = (depId, odsId, posId) => {
    setDepartments((departments) => {
      const newDepartments = departments.map((department) => {
        if (department.id === depId) {
          const newOdseci = department.odseci.map((odsek) => {
            if (odsek.id === odsId) {
              const newPositions = odsek.positions.map((position) => {
                if (position.id === posId) {
                  const { typing, ...rest } = position;
                  return rest;
                }
                return position;
              });

              return { ...odsek, positions: newPositions };
            } else {
              return odsek;
            }
          });

          return { ...department, odseci: newOdseci };
        }
        return department;
      });

      return [...newDepartments];
    });
  };

  const handleSetEditPosition = (depId, odsId, posId) => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setDepartments((departments) => {
      const newDepartments = departments.map((department) => {
        if (department.id === depId) {
          const newOdseci = department.odseci.map((odsek) => {
            if (odsek.id === odsId) {
              const newPositions = odsek.positions.map((position) => {
                if (position.id === posId) {
                  return { ...position, typing: true };
                }
                return position;
              });
              return { ...odsek, positions: newPositions };
            }
            return odsek;
          });
          return { ...department, odseci: newOdseci };
        }
        return department;
      });
      return [...newDepartments];
    });
  };

  const handleDeletePosition = (depId, odsId, posId) => {
    setDepartments((departments) => {
      const newDepartments = departments.map((department) => {
        if (department.id === depId) {
          const newOdseci = department.odseci.map((odsek) => {
            if (odsek.id === odsId) {
              if (odsek.positions.length === 1) {
                const { positions, ...rest } = odsek;
                return rest;
              } else {
                const filteredPositions = odsek.positions.filter((position) => position.id !== posId);
                return { ...odsek, positions: filteredPositions };
              }
            }
            return odsek;
          });
          return { ...department, odseci: newOdseci };
        }
        return department;
      });

      return [...newDepartments];
    });
  };

  return (
    <div className="list-wrapper">
      {departments && (
        <ul className="strukcture-list">
          {departments.map((department) => {
            return (
              <li className="" key={department.id}>
                <div className="organization-wrapper">
                  <div className="input-wrapper">
                    <img className="department-icon" src="/images/departmenticon.png" />
                    <input
                      ref={inputRef}
                      autoFocus
                      readOnly={!department.typing}
                      type="text"
                      className="department-title-input"
                      value={department.name}
                      onChange={(e) => handleChangeDepartmentName(e, department.id)}
                    ></input>

                    <div className="edit-department-buttons-block">
                      {department?.typing && department.name && (
                        <button onClick={() => handleConfirmAddDepartment(department.id)}>
                          <img src="/images/check1.jpg" />
                        </button>
                      )}
                      {!department?.typing && department.name && (
                        <button onClick={() => handleSetEdit(department.id)}>
                          <img src="/images/edit.png" />
                        </button>
                      )}
                      <button onClick={() => handleDeleteDepartment(department.id)}>
                        <img src="/images/trash.png" />
                      </button>
                    </div>
                  </div>
                  {department?.positions?.length > 0 && (
                    <ul className="positions-list">
                      {department.positions.map((position) => {
                        return (
                          <li className="add-to-list-input-wrapper" key={position.id}>
                            <input
                              ref={inputRef}
                              autoFocus
                              readOnly={!position.typing}
                              type="text"
                              className="add-to-list-input"
                              value={position.name}
                              onChange={(e) => handleChangeAddPositionToDepartment(e, department.id, position.id)}
                            ></input>

                            <div className="edit-buttons-block">
                              {position?.typing && position.name && (
                                <button
                                  onClick={() => handleAddConfirmPositionToDepartment(department.id, position.id)}
                                >
                                  <img src="/images/check1.jpg" />
                                </button>
                              )}
                              {!position?.typing && position.name && (
                                <button onClick={() => handleSetEditDepartmentPosition(department.id, position.id)}>
                                  <img src="/images/edit.png" />
                                </button>
                              )}
                              <button onClick={() => handleDeletePositionFromDepartment(department.id, position.id)}>
                                <img src="/images/trash.png" />
                              </button>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {!department.typing && (
                    <button
                      className="add-position-button"
                      onClick={() => handleAddPositionToDepartment(department.id)}
                      // disabled={
                      //   odsek?.positions?.length && odsek.positions.some((pos) => pos.typing === true)
                      // }
                    >
                      <span>
                        <img className="plus-circle-icon" src="/images/pluscircle.png" />
                      </span>
                      <span>Dodajte radno mesto</span>
                    </button>
                  )}
                </div>
                <div className="add-to-list-block">
                  {department?.odseci?.length > 0 && (
                    <>
                      <ul className="odseci-list">
                        {department.odseci.map((odsek) => {
                          return (
                            <li key={odsek.id}>
                              <div className="input-wrapper">
                                <img className="department-icon" src="/images/odsekicon.png" />
                                <input
                                  ref={inputRef}
                                  autoFocus
                                  readOnly={!odsek?.typing}
                                  type="text"
                                  className="odsek-title-input"
                                  value={odsek?.name}
                                  onChange={(e) => handleChangeOdsekName(e, department.id, odsek.id)}
                                ></input>

                                <div className="edit-department-buttons-block">
                                  {odsek?.typing && odsek?.name && (
                                    <button onClick={() => handleConfirmAddOdsek(department.id, odsek.id)}>
                                      <img src="/images/check1.jpg" />
                                    </button>
                                  )}
                                  {!odsek?.typing && odsek?.name && (
                                    <button onClick={() => handleSetEditOdsek(department.id, odsek.id)}>
                                      <img src="/images/edit.png" />
                                    </button>
                                  )}
                                  <button onClick={() => handleDeleteOdsek(department.id, odsek.id)}>
                                    <img src="/images/trash.png" />
                                  </button>
                                </div>
                              </div>
                              {odsek?.positions?.length > 0 && (
                                <ul className="strukcture-list">
                                  {odsek?.positions.map((position) => {
                                    return (
                                      <li key={position.id}>
                                        <div className="input-wrapper">
                                          <input
                                            ref={inputRef}
                                            autoFocus
                                            type="text"
                                            className="add-to-list-input"
                                            value={position?.name}
                                            onChange={(e) =>
                                              handleChangePositionName(e, department.id, odsek.id, position.id)
                                            }
                                          ></input>
                                          <div className="edit-department-buttons-block">
                                            {position?.typing && position.name && (
                                              <button
                                                onClick={() =>
                                                  handleAddConfirmPosition(department.id, odsek.id, position.id)
                                                }
                                              >
                                                <img src="/images/check1.jpg" />
                                              </button>
                                            )}
                                            {!position?.typing && position.name && (
                                              <button
                                                onClick={() =>
                                                  handleSetEditPosition(department.id, odsek.id, position.id)
                                                }
                                              >
                                                <img src="/images/edit.png" />
                                              </button>
                                            )}
                                            <button
                                              onClick={() => handleDeletePosition(department.id, odsek.id, position.id)}
                                            >
                                              <img src="/images/trash.png" />
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                              {!odsek.typing && (
                                <button
                                  className="add-position-button"
                                  onClick={() => handleAddPositionToList(department.id, odsek.id)}
                                  disabled={
                                    odsek?.positions?.length && odsek.positions.some((pos) => pos.typing === true)
                                  }
                                >
                                  <span>
                                    <img className="plus-circle-icon" src="/images/pluscircle.png" />
                                  </span>
                                  <span>Dodajte radno mesto</span>
                                </button>
                              )}
                              {odsek?.services && (
                                <ul className="services-list">
                                  {odsek.services.map((service) => {
                                    return (
                                      <li key={service.id}>
                                        <div className="input-wrapper">
                                          <input
                                            ref={inputRef}
                                            autoFocus
                                            type="text"
                                            className="add-to-list-input"
                                            value={service?.name}
                                            onChange={(e) =>
                                              handleChangeServiceName(e, department.id, odsek.id, service.id)
                                            }
                                          ></input>
                                          <div className="edit-department-buttons-block">
                                            {service?.typing && service.name && (
                                              <button
                                                onClick={() =>
                                                  handleConfirmAddService(department.id, odsek.id, service.id)
                                                }
                                              >
                                                <img src="/images/check1.jpg" />
                                              </button>
                                            )}
                                            {!service?.typing && service.name && (
                                              <button
                                              // onClick={() =>
                                              //   handleSet(department.id, odsek.id, position.id)
                                              // }
                                              >
                                                <img src="/images/edit.png" />
                                              </button>
                                            )}
                                            <button
                                            //onClick={() => handleDeletePosition(department.id, odsek.id, position.id)}
                                            >
                                              <img src="/images/trash.png" />
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                              {!odsek.typing && (
                                <button
                                  className="add-service-button"
                                  onClick={() => handleAddService(department.id, odsek.id)}
                                  // disabled={
                                  //   odsek?.positions?.length && odsek.positions.some((pos) => pos.typing === true)
                                  // }
                                >
                                  + Dodajte sluzbu
                                </button>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}

                  {!department?.typing && (
                    <button
                      className="add-odsek-button"
                      onClick={() => handleAddOdsek(department.id)}
                      disabled={departments?.length && departments.some((pos) => pos.typing === true)}
                    >
                      + Dodajte odsek
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="add-to-list-block">
        <button
          className="add-department-button"
          onClick={handleAddDepartmentToList}
          disabled={departments?.length && departments.some((pos) => pos.typing === true)}
        >
          + Dodajte Odeljenje
        </button>
      </div>
    </div>
  );
}
