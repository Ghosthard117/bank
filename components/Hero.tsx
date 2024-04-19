import Newsletter from "./Newsletter";
import Numbers from "./Numbers";
import SectionImage from "./SectionImage";

export default function Hero() {
  return (
    <section
      id='hero'
      className='container mx-auto grid grid-cols-1 lg:grid-cols-3 w-full gap-10'
    >
      <section className="flex-1">
        <Newsletter />
      </section>
      <section className="flex-1">
        <SectionImage />
      </section>
      <section className="flex-1">
        <Numbers />
      </section>
    </section>
  )
}