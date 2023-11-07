import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await res.json();
      setMeals(data.meals);
    };
    loadData();
  }, [searchTerm]);
  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      ></SearchBar>

      {meals && meals.length > 0 ? (
        <section className="grid grid-cols-4 gap-4 mt-10">
          {meals.map((meal) => (
            <Card meal={meal} key={meal.idMeal}></Card>
          ))}
        </section>
      ) : (
        <h1 className="text-center mt-10">No Meals Found</h1>
      )}
    </div>
  );
};

export default Home;
