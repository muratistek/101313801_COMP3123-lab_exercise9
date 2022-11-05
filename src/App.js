import logo from './logo.svg';
import './App.css';
import Student from './Student';
import College from './College';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab Exercise</h2>
        <Student studId="101313801" studName="Murat Istek" />
        <College college="George Brown College" city="Toronto" province="ON" />
      </header>
    </div>
  );
}

export default App;
