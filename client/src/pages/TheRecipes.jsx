import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import Carrousel from "../components/Carrousel";
import "../styles/therecipes.css";

export default function TheRecipes() {
  const { entrees, plats, desserts } = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const difficulties = ["Facile", "Intermédiaire", "Difficile"];

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (
        searchTerm ||
        selectedCategory !== "all" ||
        selectedDifficulty !== "all"
      ) {
        setIsSearching(true);
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/recipes/search`,
            {
              params: {
                search: searchTerm,
                category: selectedCategory,
                difficulty: selectedDifficulty,
              },
            }
          );
          setSearchResults(response.data);
        } catch (error) {
          console.error("Error fetching search results:", error);
          setSearchResults([]);
        }
      } else {
        setIsSearching(false);
        setSearchResults([]);
      }
    };

    const debounceTimer = setTimeout(fetchSearchResults, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const renderSearchResults = () => {
    const isSingleRecipe = searchResults.length === 1;

    const handleImageClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <div
        className={`search-results ${isSingleRecipe ? "single-recipe" : ""}`}
      >
        {searchResults.map((recipe) => (
          <Link
            to={`/recipes-instruction/${recipe.id}`}
            key={recipe.id}
            className={`recipe-card ${isSingleRecipe ? "single-recipe" : ""}`}
          >
            <button onClick={handleImageClick} type="button">
              <img
                src={`${import.meta.env.VITE_API_URL}/${recipe.image_url}`}
                alt={recipe.title}
              />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <br />
              <p>Catégorie: {recipe.category_name}</p>
              <p>Difficulté: {recipe.difficulty_name}</p>
            </button>
          </Link>
        ))}
      </div>
    );
  };

  const renderCarrousels = () => (
    <>
      <section>
        <h2>LES ENTREES</h2>
        <Carrousel category={entrees} />
      </section>
      <section>
        <h2>LES PLATS</h2>
        <Carrousel category={plats} />
      </section>
      <section>
        <h2>LES DESSERTS</h2>
        <Carrousel category={desserts} />
      </section>
    </>
  );

  return (
    <div>
      <div className="search-filters">
        <input
          type="text"
          placeholder="Rechercher une recette..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">Toutes les catégories</option>
          <option value="entrees">Entrées</option>
          <option value="plats">Plats</option>
          <option value="desserts">Desserts</option>
        </select>
        <select value={selectedDifficulty} onChange={handleDifficultyChange}>
          <option value="all">Toutes les difficultés</option>
          {difficulties.map((difficulty) => (
            <option key={difficulty} value={difficulty.toLowerCase()}>
              {difficulty}
            </option>
          ))}
        </select>
      </div>

      {isSearching ? renderSearchResults() : renderCarrousels()}
    </div>
  );
}
