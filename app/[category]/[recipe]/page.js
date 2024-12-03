import Article from "@/components/Article";
import MightLikeRecipes from "@/components/MightLikeRecipes";
import categories from "@/data/categories.json";
import recipes from "@/data/recipes.json";
import removeEncodedSpaces from "@/utils/removeEncodedSpace";

export async function generateMetadata({ params: { recipe } }) {
  const title = removeEncodedSpaces(recipe);
  const recipeItem = recipes.find((r) => r.title === title);

  if (!recipeItem) {
    return {
      title: "Recipe Not Found",
      description: "The recipe you are looking for does not exist.",
    };
  }

  return {
    title: `${recipeItem.title} - Recipe Details`,
    description:
      recipeItem.description || "Find out how to make this delicious recipe!",
    keywords: recipeItem.keywords?.join(", ") || "recipes, food, cooking",
  };
}

export default function RecipeDetails({ params: { category, recipe } }) {
  const title = removeEncodedSpaces(recipe);
  const recipeItem = recipes.find((r) => r.title === title);

  const categoryItem = categories.find((c) => c.name === category);

  const mightLikeRecipes = recipes
    .filter((r) => r.category_id === categoryItem?.id && r.title !== title)
    .sort((a, b) => b.rating?.rating_count - a.rating?.rating_count)
    .slice(0, 4);

  console.log("mr", mightLikeRecipes?.length);

  return (
    <>
      {recipeItem ? (
        <Article recipeItem={recipeItem} />
      ) : (
        <p>Recipe not found</p>
      )}
      {mightLikeRecipes?.length > 0 && (
        <MightLikeRecipes mightLikeRecipes={mightLikeRecipes} />
      )}
    </>
  );
}

// import Article from "@/components/Article";
// import MightLikeRecipes from "@/components/MightLikeRecipes";
// import categories from "@/data/categories.json";
// import recipes from "@/data/recipes.json";
// import removeEncodedSpaces from "@/utils/removeEncodedSpace";

// export default function RecipeDetails({ params }) {
//   const { category, recipe } = params;
//   const title = removeEncodedSpaces(recipe);
//   const recipeItem = recipes.find((recipe) => recipe.title === title);

//   // Find the category details for the current recipe
//   const categoryItem = categories.find((c) => c.name === category);

//   // Find related recipes in the same category
//   const mightLikedRecipes = recipes
//     .filter((r) => r.category_id === categoryItem?.id && r.title !== title)
//     .sort((a, b) => b.rating.rating_count - a.rating.rating_count)
//     .slice(0, 4);

//   return (
//     <>
//       <Article recipeItem={recipeItem} />
//       <MightLikeRecipes mightLikedRecipes={mightLikedRecipes} />
//     </>
//   );
// }
