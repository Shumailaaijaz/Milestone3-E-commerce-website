import ContactForm from "@/app/contact/page"
import Hero from "@/components/Hero";
import Prodect from "@/app/products/page";
import Category from "@/app/category/page"

export default async function Home() {
  
  return (
   <>
   <div className="p-8">
      <Hero/>
      <Prodect/>
      <ContactForm/>
      <Category/>
    </div>
   </>
  );
}
