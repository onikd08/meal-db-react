import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {
  const categories = useLoaderData();
  return (
    <section className="mt-10 grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {categories?.categories?.map((category) => (
        <Category key={category.idCategory} category={category}></Category>
      ))}
    </section>
  );
};

export default Categories;
