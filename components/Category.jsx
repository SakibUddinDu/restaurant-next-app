import Link from "next/link";

export default function Category({ category }) {
  const { name, image } = category;
  return (
    <Link href={`popular/${name}`}>
      <div className="text-center">
        <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
          <img
            src={`/assets/${image}`}
            alt={name}
            className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
    </Link>
  );
}
