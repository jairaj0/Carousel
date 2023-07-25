import "./App.scss";
import {Carousel, Item} from "./Carousel/Carousel";


function App() {
  const items = ['https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'];
  return (
    <div className="app">
      <h1>Carousel Using React</h1>
      <div className="c_box">
      <Carousel>
        {items.map((value , i) => <Item key={i} ><img src={value} alt="pic" /></Item>)}
      </Carousel>
      </div>
    </div>
  );
}

export default App;
