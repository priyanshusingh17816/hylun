import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
}

export default function CategoryCard({
  title,
  image,
}: CategoryCardProps) {
  return (
    <div className="group relative h-[280px] overflow-hidden rounded-[24px] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
      />

      {/* Luxury Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90" />

      {/* Content */}

      <div className="absolute bottom-6 left-6">

        <h3 className="hero-title text-[32px] leading-none text-white">
          {title}
        </h3>

        <p className="mt-2 flex items-center gap-2 text-sm font-medium tracking-[0.18em] text-white/70 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
          Shop Now
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </p>

      </div>

    </div>
  );
}