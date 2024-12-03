import Category from "@/components/Category";
import categories from "@/data/categories.json";

export const metadata = {
  title: "Categories - Recipe App",
  description:
    "Explore various recipe categories and find your favorite dishes.",
};

export default function Page() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-12">Categories</h1>
      <div
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        aria-label="Recipe Categories"
      >
        {categories.map((category) => (
          <Category key={category.id} category={...category} />
        ))}
      </div>
    </>
  );
}

// import Category from "@/components/Category";
// import categories from "@/data/categories.json";
// export default function page() {
//   return (
//     <>
//       <h1 className="text-5xl font-bold mb-12">Categories</h1>
//       <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
//         {categories.map((category) => (
//           <Category key={category.id} category={category} />
//         ))}
//       </div>
//     </>
//   );
// }
