import './reset.css';
import './App.css';

function App() {

let post = '김포 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <h1><a href='javscript:;' style={{fontSize : '16px', fontWeight : 'bold' , color : '#fff'}}>Blog</a></h1>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
