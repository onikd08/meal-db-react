import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {
  const categories = useLoaderData();
  return categories ? (
    <section className="mt-10 grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {categories?.categories?.map((category) => (
        <Category key={category.idCategory} category={category}></Category>
      ))}
    </section>
  ) : (
    <h1>Hello World</h1>
  );
};

export default Categories;
