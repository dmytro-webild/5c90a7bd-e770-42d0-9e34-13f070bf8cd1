"use client";

import ReactLenis from "lenis/react";
import { Star } from "lucide-react";
import NavbarInline from "@/components/ui/NavbarInline";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import AboutParallax from "@/components/sections/about/AboutParallax";
import FeaturesAlternatingSplit from "@/components/sections/features/FeaturesAlternatingSplit";
import PricingSimpleCards from "@/components/sections/pricing/PricingSimpleCards";
import ProductQuantityCards from "@/components/sections/product/ProductQuantityCards";
import TestimonialDetailedCards from "@/components/sections/testimonial/TestimonialDetailedCards";
import ContactSplitEmail from "@/components/sections/contact/ContactSplitEmail";
import FaqSimpleHighlight from "@/components/sections/faq/FaqSimpleHighlight";
import FooterBrand from "@/components/sections/footer/FooterBrand";

export default function LandingPage() {
  return (
    <ReactLenis root>
      <NavbarInline
        logo="DOC BARNET"
        navItems={[
          { name: "Home", href: "/" },
          { name: "Services", href: "#services" },
          { name: "Pricing", href: "#pricing" },
          { name: "Contact", href: "#contact" }
        ]}
        ctaButton={{ text: "Book Now", href: "#contact" }}
      />
      <div id="hero">
        <HeroBillboard
          tag="Welcome to Excellence"
          title="Experience Our Full Range of Premium Grooming Services"
          description="From precision haircuts to expert beard grooming and rejuvenating treatments."
          primaryButton={{ text: "Book Now", href: "#contact" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1778093237434-05qgab2c.jpg"
          textAnimation="slide-up"
        />
      </div>
      <div id="about">
        <AboutParallax
          tag="Our Story"
          title="The Doc Barnet Experience"
          description="We combine traditional barbering with modern styling techniques for a bespoke grooming experience."
          frontImageSrc="http://img.b2bpic.net/free-photo/barber-applying-cream-clients-beard_107420-94778.jpg"
          textAnimation="slide-up"
        />
      </div>
      <div id="services">
        <FeaturesAlternatingSplit
          tag="What We Do"
          title="Our Services"
          description="Expert care tailored to your unique style."
          items={[
            { title: "Gents Grooming", description: "Precision haircuts, fades, and beard detailing.", imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-fashionable-modern-male-grey-t-shirt_613910-532.jpg" },
            { title: "Ladies Styling", description: "Bespoke cuts, blow dries, and restyles.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/tmp/hairstyle-holding-hair-drayer-1779125588683-ef4b646b.png" }
          ]}
          textAnimation="slide-up"
        />
      </div>
      <div id="pricing">
        <PricingSimpleCards
          tag="Price List"
          title="Our Services & Pricing"
          description="Transparent pricing for our most popular treatments."
          plans={[
            { tag: "Gents", price: "£20", description: "Haircuts & Beard", features: ["Precision Cut", "Beard Detail", "Hot Towel"] },
            { tag: "Ladies", price: "£35", description: "Styling & Care", features: ["Wash", "Blow Dry", "Treatment"] }
          ]}
          textAnimation="slide-up"
        />
      </div>
      <div id="gallery">
        <ProductQuantityCards
          tag="Gallery"
          title="Recent Work"
          description="See our latest transformations and signature looks."
          products={[
            { name: "Classic Fade", price: "£20", imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-male-who-himself-shaving-while-sitting-barber-chair-hairdressing-salon_613910-18649.jpg" },
            { name: "Modern Cut", price: "£35", imageSrc: "http://img.b2bpic.net/free-photo/woman-drying-hair-hairsalon_1157-27184.jpg" },
            { name: "Signature Styling", price: "£45", imageSrc: "http://img.b2bpic.net/free-photo/woman-wears-grey-hair-wig_633478-1316.jpg" }
          ]}
          textAnimation="slide-up"
        />
      </div>
      <div id="reviews">
        <TestimonialDetailedCards
          tag="Reviews"
          title="Client Testimonials"
          description="What our satisfied customers have to say."
          testimonials={[
            { title: "Excellent Service", quote: "Amazing haircut and friendly staff!", name: "Sarah H.", role: "Local Resident", imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-woman-posing-fashionable-outfit_23-2149021828.jpg" }
          ]}
          textAnimation="slide-up"
        />
      </div>
      <div id="offer">
        <ContactSplitEmail
          tag="Limited Time"
          title="20% OFF YOUR FIRST VISIT"
          description="Sign up to receive our exclusive newsletter and discount codes."
          inputPlaceholder="Enter your email"
          buttonText="Get 20% Off"
        />
      </div>
      <div id="contact">
        <FaqSimpleHighlight
          tag="Visit Us"
          title="Common Questions"
          titleHighlight="Frequently Asked"
          description="Get the answers you need about our services and location."
          items={[
            { question: "Where are you located?", answer: "Unit 67, Gloucester Quays Designer Outlet, Gloucester GL1 5SH" },
            { question: "What are your hours?", answer: "Mon-Sat: 9am - 7pm, Sun: 10am - 4pm" }
          ]}
        />
      </div>
      <FooterBrand
        brand="DOC BARNET"
        columns={[
          { items: [{ label: "Instagram" }, { label: "Facebook" }, { label: "Privacy Policy" }] }
        ]}
      />
    </ReactLenis>
  );
}