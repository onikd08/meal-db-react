import { useDataLoader } from "../../hooks/useDataLoader";
import Category from "../Category/Category";

const Categories = () => {
  const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const [categories] = useDataLoader(URL);

  return (
    <section className="mt-10 grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {categories?.categories?.map((category) => (
        <Category key={category.idCategory} category={category}></Category>
      ))}
    </section>
  );
};

export default Categories;
