import { useRef, useState } from "react";
import Nav from "./components/Nav";
import Insert from "./components/Insert";
import Items from "./components/Items";

function App() {
  
  const lastId = useRef(4);

  const [todos, setTodos] = useState([
    {id: 1, text: "할일 1", checked: true},
    {id: 2, text: "할일 2", checked: false},
    {id: 3, text: "할일 3", checked: false}
  ]);

  const onInsert = (e) => {
    e.preventDefault();
    // 1. 내가 입력한 걸 어떻게 가져오지?
    console.log(e.target.text.value)

    // 2. 가져온 입력 값을 배열에 어떻게 추가하지?

    // setTodos(todos.concat({text: e.target.text.value}))
    setTodos([...todos, {id: lastId.current, text: e.target.text.value, checked: false}])
    lastId.current++;
    console.log(todos)
  }

  const onDelete = (id) => {
    const deleteTodos = todos.filter(todo => todo.id != id)
    setTodos(deleteTodos)
  }

  const onChecked = (id) => {
    const checkedTodos = todos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo)
    setTodos(checkedTodos)
  }

  return (
    <div className="App">
      <Nav headerName="오늘할일2입니다"/>
      <Insert onInsert={onInsert}/>
      <Items todos={todos} onChecked={onChecked} onDelete={onDelete} />
    </div>
  );
}

export default App;