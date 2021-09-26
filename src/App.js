import './App.css';
import Descript from './component/Descript/Descript';
import Districts from './component/Districts/Districts';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      {/* this is header section  */}
      <Header></Header>

      {/* this is description section  */}
      <Descript></Descript>

      {/* this is all districts section  */}
      <Districts></Districts>

      {/* this is footer section  */}
      <Footer></Footer>
    </div>
  );
}

export default App;

