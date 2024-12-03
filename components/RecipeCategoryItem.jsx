export default function RecipeCategoryItem({ recipe }) {
  const { title, thumbnail } = recipe;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={`/assets/thumbs/${thumbnail}`}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
      </div>
    </div>
  );
}
