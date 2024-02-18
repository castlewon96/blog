import './App.css';

function App() {

let post = '김포 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <h3 style={{fontSize : '16px'}}>Blog</h3>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
