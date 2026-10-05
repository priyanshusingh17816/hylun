import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-brand">
      <Container className="pt-8 pb-24">
        <div className="relative h-[88vh] min-h-[760px] overflow-hidden rounded-[56px] shadow-xl">

          {/* Hero Image */}

         <Image
           src="/herohome.jpg"
            alt="HYLUN Jewellery"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
        />

          {/* Luxury Overlays */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-black/10" />

          {/* CTA Buttons */}

          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4">

            <div className="rounded-full backdrop-blur-xl">
              <Button>
                Shop Collection
              </Button>
            </div>

            <div className="rounded-full backdrop-blur-xl">
              <Button variant="secondary">
                Explore
              </Button>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}