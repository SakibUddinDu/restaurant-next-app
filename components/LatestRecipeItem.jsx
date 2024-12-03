import categories from "@/data/categories.json";
import Link from "next/link";

export default function LatestRecipeItem({ recipe }) {
  const { title, rating, thumbnail, description, category_id } = recipe;

  const category = categories.find((category) => category.id === category_id);
  return (
    <Link href={`/${category.name}/${title}`}>
      <div>
        <img
          src={`/assets/thumbs/${thumbnail}`}
          alt={`${title}`}
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
