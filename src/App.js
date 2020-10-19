import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';

function App() {
  const APP_ID = "f9d108d9";
  const APP_KEY = "177dcc1d92e72da75ab3a94123d684a0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");

  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <Header />
      <form className="search-form" onSubmit={onSubmit}>
        <input type="text" className="search-bar" value={search} onChange={onChange} />
        <button className="search-button" type="Submit">Search</button>
      </form>
      <div className="recipes-class">
        {recipes.map((item) => (
          <Recipe title={item.recipe.label}
            calories={item.recipe.calories}
            image={item.recipe.image}
            ingredients={item.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
