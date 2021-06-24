import './App.scss';
import CardsWrapper from './components/CardsWrapper';
import Navbar from './components/Navbar';
import ToastWrapper from './components/Toast/ToastWrapper';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardsWrapper />
      <ToastWrapper />
    </div>
  );
}

export default App;
