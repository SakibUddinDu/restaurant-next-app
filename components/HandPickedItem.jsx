export default function HandPickedItem({ item }) {
  const { title, thumbnail } = item;
  return (
    <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
      <img
        src={`/assets/thumbs/${thumbnail}`}
        alt="Sushi Combos"
        className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <a href="" className="text-orange-300 hover:underline">
          View Collection
        </a>
      </div>
    </div>
  );
}
