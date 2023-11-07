import { useLoaderData } from "react-router-dom";
import Area from "../Area/Area";

const Areas = () => {
  const data = useLoaderData();
  const areas = data.meals;
  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto">
      {areas.map((area, idx) => (
        <Area key={idx} area={area.strArea}></Area>
      ))}
    </div>
  );
};

export default Areas;
