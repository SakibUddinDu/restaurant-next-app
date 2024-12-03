import RecipeCategoryItem from "./RecipeCategoryItem";

export default function RecipesCategories({ recipesCategories }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {recipesCategories.map((rc) => (
        <RecipeCategoryItem key={rc.title} recipe={rc} />
      ))}
    </div>
  );
}
