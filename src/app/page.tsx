"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialDetailedCardsHighlight from '@/components/sections/testimonial/TestimonialDetailedCardsHighlight';
import { Star } from "lucide-react";

export default function LandingPage() {
  const bookingUrl = "https://tinyurl.com/2kr8jy37";

  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarFloatingLogo
      navItems={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Products", href: "/products" },
        { name: "Prices", href: "/#pricing" },
        { name: "Franchise", href: "/franchise" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/#contact" }
      ]}
      logoImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1778094604107-kwe3q62f.jpg"
      ctaButton={{ text: "BOOK NOW", href: bookingUrl }}
    />
  </div>

  <div id="hero" data-section="hero">
      <div className="w-content-width mx-auto flex justify-center py-6">
        <div className="flex items-center gap-2 bg-background-accent/10 px-4 py-2 rounded-full border border-accent/20">
            <div className="flex text-accent">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-sm font-semibold text-foreground">Rated Excellent on Google</span>
        </div>
      </div>
      <HeroBillboardScroll
      background={{ variant: "gradient-bars" }}
      title="Experience Our Full Range of Premium Grooming Services"
      description="From precision gentlemen's haircuts and elegant ladies' styling to expert beard grooming and rejuvenating facial treatments, discover unparalleled quality and care at Doc Barnet Grooming Salon."
      buttons={[
        { text: "BOOK NOW", href: bookingUrl },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1778093237434-05qgab2c.jpg"
      imageAlt="Doc Barnet Luxury Salon"
    />
  </div>

  <div id="trust-badges" data-section="trust-badges">
    <SocialProofMarquee
      title="Trusted by Our Community"
      names={["Award Winning Salon", "Local Business of the Year", "Highly Recommended on Google", "Top Rated Stylists", "Community Favorite"]
      }
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "THE DOC BARNET EXPERIENCE" },
        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779126300405-salon-interior-doc-barnet.jpg", alt: "Doc Barnet Salon Interior" },
      ]}
      buttons={[
        { text: "DISCOVER MORE", href: "#services" },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      features={[
        { title: "Gents Haircuts", description: "Precision styling tailored to your unique look.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779126450123-gents-fade.jpg", imageAlt: "Precision Gents Haircut" },
        { title: "Ladies Styling", description: "Wash, cut, and blow dry services for sophisticated style.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779126520456-ladies-blowdry.jpg", imageAlt: "Professional Ladies Styling" },
        { title: "Beard & Facial", description: "Expert beard shaping, hot towel shaves, and facial treatments.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779126610789-beard-trim.jpg", imageAlt: "Expert Beard Treatment" },
      ]}
      title="PREMIUM SERVICES"
      description="Comprehensive grooming and hair solutions for gentlemen and ladies."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "p1", badge: "Most Popular", price: "£19.99", subtitle: "Premium Haircut & Styling", buttons: [{ text: "Book Now", href: bookingUrl }], features: ["Consultation", "Precision Cut", "Style Advice", "Finish"] },
        { id: "p2", badge: "Essential", price: "£45", subtitle: "Cut, Wash & Blow Dry", buttons: [{ text: "Book Now", href: bookingUrl }], features: ["Head Massage", "Professional Cut", "Styling"] },
        { id: "p3", badge: "Luxury", price: "£85", subtitle: "Balayage & Treatment", buttons: [{ text: "Book Now", href: bookingUrl }], features: ["Consultation", "Expert Colour", "Treatment", "Finish"] },
      ]}
      title="PRICE LIST"
      description="Transparent pricing for world-class grooming."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "g1", name: "Classic Fade", brand: "MEN", price: "Transformation", rating: 5, reviewCount: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779126800111-client-work-1.jpg" },
        { id: "g2", name: "Balayage", brand: "COLOUR", price: "Transformation", rating: 5, reviewCount: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779126850222-client-work-2.jpg" },
        { id: "g3", name: "Signature Styling", brand: "WOMEN", price: "Transformation", rating: 5, reviewCount: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779126900333-client-work-3.jpg" },
        { id: "g4", name: "Transformation", brand: "TRANSFORMATIONS", price: "Transformation", rating: 5, reviewCount: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779126950444-client-work-4.jpg" },
        { id: "g5", name: "Sharp Detail", brand: "MEN", price: "Transformation", rating: 5, reviewCount: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779127000555-client-work-5.jpg" },
        { id: "g6", name: "Style Revive", brand: "WOMEN", price: "Transformation", rating: 5, reviewCount: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779127050666-client-work-6.jpg" },
      ]}
      title="THE DOC BARNET LOOK"
      description="Real cuts. Real colour. Real transformations."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialDetailedCardsHighlight
      title="Google Reviews"
      titleHighlight="Top Rated"
      description="See what our customers have to say about their experience."
      testimonials={[
        { title: "Best experience", quote: "Amazing haircut and friendly staff!", name: "Sarah H.", role: "Local Resident", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779127200777-client-testimonial-1.jpg" },
        { title: "Highly recommended", quote: "Top tier service and quality cuts.", name: "David L.", role: "Businessman", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779127250888-client-testimonial-2.jpg" }
      ]}
      />
  </div>

  <div id="offer" data-section="offer">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      tag="LIMITED OFFER"
      title="20% OFF YOUR FIRST VISIT"
      description="TUSDAY ONLY CODE: DOCBARNET20 "
    />
  </div>

  <div id="contact" data-section="contact">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Opening Hours", content: "Mon-Sat: 9am - 7pm | Sun: 10am - 4pm" },
        { id: "f2", title: "Appointments", content: "01452 224220 / 07495 044457" },
        { id: "f3", title: "Location", content: "Gloucester Quays Designer Outlet" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779127500999-salon-exterior.jpg"
      mediaAnimation="slide-up"
      title="VISIT US"
      description="Unit 67, Gloucester Quays Designer Outlet, Gloucester GL1 5SH"
      faqsAnimation="slide-up"
    />
    <div className="w-content-width mx-auto py-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.650058869106!2d-2.253018824177209!3d51.85303869007421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871032a9e3381a7%3A0x67586616428c467a!2sGloucester%20Quays%20Designer%20Outlet!5e0!3m2!1sen!2suk!4v1716382023545!5m2!1sen!2suk" width="100%" height="450" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>

  <div id="footer" data-section="footer">
      <FooterMinimal
      brand="DOC BARNET"
      copyright="© 2024 Doc Barnet. All rights reserved."
      socialLinks={[{ icon: "Instagram", href: "#" }, { icon: "Facebook", href: "#" }]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}