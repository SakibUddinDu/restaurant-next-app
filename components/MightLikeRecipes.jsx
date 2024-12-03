import MightLikedRecipe from "./MightLikedRecipe";

export default function MightLikeRecipes({ mightLikeRecipes }) {
  console.log("mightLikedRecipes", mightLikeRecipes);
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">You might also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {mightLikeRecipes?.map((recipe) => (
          <MightLikedRecipe key={recipe.title} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
