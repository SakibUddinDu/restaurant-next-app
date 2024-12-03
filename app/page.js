import DeliciousToInbox from "@/components/DeliciousToInbox";
import HandPickedCollection from "@/components/HandPickedCollection";
import Hero from "@/components/Hero";
import LatestRecipes from "@/components/LatestRecipes";
import PopularCategories from "@/components/PopularCategories";
import SuperDelicious from "@/components/SuperDelicious";
import categories from "@/data/categories.json";
import recipes from "@/data/recipes.json";

export default function Home() {
  const superDeliciousRecipes = recipes
    .sort((a, b) => b.rating.rating_count - a.rating.rating_count)
    .slice(0, 3);

  const getPopularCategories = () => {
    const categoryCounts = {};
    recipes.forEach((recipe) => {
      const categoryId = recipe.category_id;

      categoryCounts[categoryId] = (categoryCounts[categoryId] || 0) + 1;
    });

    const popularCategories = categories
      .map((category) => ({
        ...category,
        count: categoryCounts[category.id] || 0,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
    return popularCategories;
  };
  const popularCategories = getPopularCategories();

  const handPickedCollections = recipes.slice(3, 5);
  const latestRecipes = recipes
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
    .slice(0, 4);

  return (
    <>
      <Hero heroItem={recipes[5]} />
      <SuperDelicious superDeliciousRecipes={superDeliciousRecipes} />
      <PopularCategories popularCategories={popularCategories} />
      <DeliciousToInbox />
      <HandPickedCollection handPickedCollections={handPickedCollections} />
      <LatestRecipes latestRecipes={latestRecipes} />
    </>
  );
}
