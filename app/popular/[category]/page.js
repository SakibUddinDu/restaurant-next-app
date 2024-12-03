import RecipesCategories from "@/components/RecipesCategories";
import RecipesHeader from "@/components/RecipesHeader";
import categories from "@/data/categories.json";
import recipes from "@/data/recipes.json";

export const metadata = {
  title: "Recipes - Explore Categories",
  description: "Discover recipes by category and explore delicious dishes.",
};

export default function Page({ params: { category } }) {
  // Find the category details for the current recipe
  const categoryItem = categories.find((c) => c.name === category);

  // Filter recipes for the given category
  const recipesCategories = categoryItem
    ? recipes.filter((r) => r.category_id === categoryItem.id)
    : [];

  return (
    <>
      {categoryItem ? (
        <>
          <RecipesHeader
            categoryItem={categoryItem}
            recipesCategories={recipesCategories}
          />
          <RecipesCategories recipesCategories={recipesCategories} />
        </>
      ) : (
        <p className="text-xl font-semibold text-red-500">
          Category not found. Please check the URL or explore other categories.
        </p>
      )}
    </>
  );
}

// import RecipesCategories from "@/components/RecipesCategories";
// import RecipesHeader from "@/components/RecipesHeader";
// import categories from "@/data/categories.json";
// import recipes from "@/data/recipes.json";
// export default function page({ params }) {
//   // Find the category details for the current recipe
//   const categoryItem = categories.find((c) => c.name === params.category);
//   const recipesCategories = recipes.filter(
//     (r) => r.category_id === categoryItem?.id
//   );

//   return (
//     <>
//       <RecipesHeader
//         categoryItem={categoryItem}
//         recipesCategories={recipesCategories}
//       />
//       <RecipesCategories recipesCategories={recipesCategories} />
//     </>
//   );
// }
