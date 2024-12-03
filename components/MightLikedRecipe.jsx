import categories from "@/data/categories.json";
import Link from "next/link";

export default function MightLikedRecipe({ recipe }) {
  const { title, thumbnail, category_id } = recipe;
  const category = categories.find((category) => category.id === category_id);
  return (
    <Link href={`/${category.name}/${title}`}>
      <div>
        <img
          src={`/assets/thumbs/${thumbnail}`}
          alt={title}
          className="w-full h-60 object-cover rounded-lg mb-2"
        />
        <h3 className="font-semibold">{title}</h3>
      </div>
    </Link>
  );
}
