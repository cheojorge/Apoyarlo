import PersonalCards from './Component/PersonCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonalCards firstName = {"Jane"} lastName= {"Doe"} age={45} hairColor={"Black"}/>
      <PersonalCards firstName = {"John"} lastName= {"Smith"} age={88} hairColor={"Brown"}/>
      <PersonalCards firstName = {"Millard"} lastName= {"Fillmore"} age={50} hairColor={"Brown"}/>
      <PersonalCards firstName = {"Maria"} lastName= {"Smith"} age={62} hairColor={"Brown"}/>
      
    </div>
  );
}

export default App;
