function ListItem({todo, onChecked, onDelete}) {
    return (<><li key={todo.id}>
        <input type="checkbox" checked={todo.checked} onChange={() => onChecked(todo.id)} />
        {todo.id} /{todo.text}<button onClick={() => onDelete(todo.id)}>삭제</button>
    </li></>);
}

export default ListItem;