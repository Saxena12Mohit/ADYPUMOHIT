import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <>
        <Navbar Home="ADYPU" />
        <div className="container my-3">
        <Textbox/>
        </div>
    </>
  );
}

export default App;
