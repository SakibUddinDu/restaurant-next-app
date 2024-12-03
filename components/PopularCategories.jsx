import Link from "next/link";
import PopularCategory from "./PopularCategory";

export default function PopularCategories({ popularCategories }) {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="/categories" className="text-orange-500">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {popularCategories.map((category) => (
          <PopularCategory key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
