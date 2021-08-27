import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';

import TrendingNow from './components/TrendingNow';
import WatchItAgain from './components/WatchItAgain';
import MyFooter from './components/MyFooter';


function App() {
  return (
    <div className="App">
      <MyNav/>
      <TrendingNow/>

      <WatchItAgain/>
     {/*<MyFooter/>*/} 


      
    </div>
  
  )};


export default App;
