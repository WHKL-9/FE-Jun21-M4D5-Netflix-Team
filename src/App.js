import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TrendingNow from './components/TrendingNow';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import WatchItAgain from './components/WatchItAgain';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <TrendingNow/>
      <WatchItAgain/>

      <MyFooter/>
    </div>
  
  )};


export default App;
