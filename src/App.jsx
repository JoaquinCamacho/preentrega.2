import NavBar from './assets/Components/NavBar/NavBar'
import ItemListContainer from './assets/Components/ItemListContainer.jsx/ItemListContainer'
import ItemDetailContainer from './assets/Components/ItemDetailContainer/ItemDetailContainer'

import './App.css'



function App() {


  return (
    <div className='container-app'>
    <NavBar />
    <ItemListContainer />
    <ItemDetailContainer/>
    </div>
  )
}

export default App
