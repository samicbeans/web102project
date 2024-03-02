import './App.css';
import AnimalsMenu from './components/AnimalsMenu'
const App = () => {

  return (
    <div className="App">
      <h1>Endangered Species</h1>
      <h2>Welcome! Learn about species that are under the threat of extinction and efforts that have been made to help conserve them.</h2>
      <AnimalsMenu></AnimalsMenu>
    </div>
  )
}

export default App