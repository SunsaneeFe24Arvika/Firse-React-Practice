import FavoriteList from "./components/FavoriteList"

function App() {
  let favList = "Min favorite Aktiviteter";

  return (
    <div className="app">
      <h1>{ favList }</h1>
      <FavoriteList />
    </div>  
  )
}

export default App
