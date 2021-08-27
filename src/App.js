import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TrendingNow from './components/TrendingNow';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <TrendingNow/>
      <MyFooter/>
    </div>
  
  )};


export default App;
