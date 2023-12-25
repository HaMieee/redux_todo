import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addName, delName, updateName } from "./redux/action";

function App() {
  const getName = useSelector((state) => state.nameList);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [nameId, setNameId] = useState(null);
  const handleAdd = () => {
    dispatch(
      addName({
        id: uuidv4(),
        name: name,
      })
    );
    setName("");
  };
  const handleDelete = (id) => {
    dispatch(
      delName({
        id: id,
      })
    );
    setName("");
  };
  const handleEdit = (id) => {
    setNameId(id);
    const editName = getName.find((item) => item.id === id);
    if (editName) {
      setName(editName.name);
    }
  };
  const handleSave = () => {
    if (nameId !== null) {
      const update = getName.map((item) =>
        item.id === nameId ? { ...item, name } : item
      );
      dispatch(updateName(update));
      setNameId(null);
      setName("");
    }
  };

  return (
    <div>
      <h1>BẢNG SINH VIÊN</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {nameId !== null ? (
        <button onClick={handleSave} style={{margin: "5px", background:"green"}}>Save</button>
      ) : (
        <button onClick={handleAdd} style={{margin: "5px", background:"green"}}>ADD</button>
      )}

      <ul>+
        
        {getName.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => handleDelete(item.id)} style={{margin: "5px", background:"green"}}>Delete</button>
            <button onClick={() => handleEdit(item.id)} style={{margin: "5px", background:"green"}}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
