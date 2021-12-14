function App() {
const [items, setItems] = React.useState([]);

React.useEffect(()=> {
fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => (res.ok ? res.json() : []))
    .then((tartalom) => {
        setItems(tartalom)
}); 
}, []);

return (
<div className="container">
    <div className="row m-5 border p-5">
    <ListaKomponens elemek={items} />
    </div> 
</div>);
}

function ListaKomponens({elemek}){
  return (
  <ul>     
  {elemek.map((elem => (
          <li className="list-group-item">
            {elem.body}
          </li>
    ))}
  </ul>
  );
}
ReactDOM.render(
    React.createElement(App),
    document.getElementById('app-container'),
)