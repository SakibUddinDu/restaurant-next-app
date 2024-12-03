import Link from "next/link";

export default function PopularCategory({ category }) {
  const { image, name } = category;
  return (
    <Link href={`popular/${name}`}>
      <div className="cursor-pointer text-center group">
        <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
          <img
            src={`/assets/${image}`}
            alt="Breakfast"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <p className="transition-transform duration-300 group-hover:scale-105">
          {name}
        </p>
      </div>
    </Link>
  );
}
