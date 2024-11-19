import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch"
import { Categories } from "../components/Categories/Categories";
import { StoriesHeader } from "../components/StoriesHeader/StoriesHeader";

export const StoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [icelandicCategoryNames, setIcelandicCategoryNames] = useState([]);
  const { data, isLoading, error } = useFetch("http://localhost:8080/");

  console.log(data);

  useEffect(() => {
    const storyCategories = [];
    if (data) {
      storyCategories.push(data[0], data[1], data[4], data[5]);
    }
    setCategories(storyCategories);
  }, [data])

  useEffect(() => {
    const icelandicNamesArray = [...categories];
    console.log("Icelandic", icelandicNamesArray);

    const categoryObjects = icelandicNamesArray.reduce((acc, item, index) => {
      acc[`category_${index}`] = item;
      return acc;
    }, {});
    
    categoryObjects.category_0 = "Álfar og huldufólk";
    categoryObjects.category_1 = "Draugar";
    categoryObjects.category_2 = "Tröll";
    categoryObjects.category_3 = "Helgisögur";

    const icelandicCategories = Object.values(categoryObjects);

    setIcelandicCategoryNames(icelandicCategories);
  }, [categories])
  
  return (
    <div>
      <StoriesHeader />
      {icelandicCategoryNames.length > 0 && !isLoading && !error ? <Categories data={icelandicCategoryNames}/> : null}
    </div>
  )
}