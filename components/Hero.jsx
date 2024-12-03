import categories from "@/data/categories.json";
import Link from "next/link";

export default function Hero({ heroItem }) {
  const { title, description, thumbnail, category_id } = heroItem;
  const category = categories.find((category) => category.id === category_id);
  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={`/assets/thumbs/${thumbnail}`}
            alt={title}
            className="w-full h-[450px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <Link
            href={`/${category.name}/${title}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}
