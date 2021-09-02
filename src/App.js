import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';

import Home from './components/Home';
import WatchItAgain from './components/WatchItAgain';
import MyFooter from './components/MyFooter';


function App() {
  return (
    <div className="App">
      <MyNav/>
      <Home  title="Matrix"/>
      <Home  title="star wars"/>
      <Home  title="harry potter"/>

     {/* <WatchItAgain/> */}
     <MyFooter/>


      
    </div>
  
  )};


export default App;
