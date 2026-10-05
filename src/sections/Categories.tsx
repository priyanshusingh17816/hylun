import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CategoryCard from "@/components/cards/CategoryCard";

const categories = [
  {
    title: "Earrings",
    image: "/categories/earrings.jpg",
  },
  {
    title: "Necklaces",
    image: "/categories/necklaces.jpg",
  },
  {
    title: "Rings",
    image: "/categories/rings.jpg",
  },
  {
    title: "Bracelets",
    image: "/categories/bracelets.jpg",
  },
  {
    title: "Anklets",
    image: "/categories/anklets.jpg",
  },
  {
    title: "Sets",
    image: "/categories/sets.jpg",
  },
  {
    title: "Tote Bags",
    image: "/categories/totebags.jpg",
  },
  {
    title: "Socks",
    image: "/categories/socks.jpg",
  },
];

export default function Categories() {
  return (
    <section className="bg-brand py-24">
      <Container>

        {/* Heading Banner */}

        <div className="mb-20 rounded-[32px] bg-[#EEF2ED] py-14 px-8 shadow-sm">

          <SectionTitle
            title="Shop By Category"
            subtitle="Find the pieces that tell your story."
          />

        </div>

        {/* Categories Grid */}

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}