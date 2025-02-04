import ContactForm from "@/app/contact/page"
import Hero from "@/components/Hero";
import Product from "@/app/products/page";

export default async function Home() {
  
  return (
   <>
   <div className="p-8">
      <Hero/>
      <Product/>
      <ContactForm/>
      
    </div>
   </>
  );
}
