import logo from './logo.svg';
import './App.css';
import OscarDetails from './arrays/arraysDetails';
import ProductDetails from './arrays/arraysMethods';
import Mobiles from './Components/MobileList';
import './Components/MobileList.css';


function App() {
  return (
    <div className="App">
      {/* <OscarDetails/> */}
      {/* <ProductDetails/> */}
      <Mobiles />
    </div>
  );
}

export default App;
