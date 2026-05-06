"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import ContactText from '@/components/sections/contact/ContactText';

export default function LandingPage() {
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
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "services" },
        { name: "Prices", id: "pricing" },
        { name: "Book", id: "booking" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="DOC BARNET"
      button={{ text: "BOOK NOW", href: "#booking" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      title="NOW OPEN AT GLOUCESTER QUAYS"
      description="Premium Grooming. Expert Styling. Experience the pinnacle of grooming excellence."
      testimonials={[
        { name: "James R.", handle: "@jamesr", testimonial: "Best haircut I've had in years.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portriat-beautiful-business-woman-standing_23-2148317282.jpg" },
        { name: "Sophie M.", handle: "@sophiem", testimonial: "Amazing Balayage treatment.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/attractive-woman-dark-wall_329181-7280.jpg" }
      ]}
      buttons={[{ text: "BOOK NOW", href: "#booking" }, { text: "VIEW PRICES", href: "#pricing" }]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-details-hairdresser-salon_23-2149205856.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[{ type: "text", content: "THE DOC BARNET EXPERIENCE" }, { type: "image", src: "http://img.b2bpic.net/free-photo/barber-applying-cream-clients-beard_107420-94778.jpg" }]}
      buttons={[{ text: "DISCOVER MORE", href: "#services" }]}
    />
  </div>

  <div id="booking" data-section="booking">
      <ContactText
      text="Ready to look your best? Book your appointment online with Fresha."
      buttons={[{ text: "Book with Fresha", href: "https://www.fresha.com" }]}
      background={{ variant: "gradient-bars" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      features={[
        { title: "Gents Haircuts", description: "Precision styling.", imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-fashionable-modern-male-grey-t-shirt_613910-532.jpg" },
        { title: "Ladies Styling", description: "Wash, cut, and blow dry.", imageSrc: "http://img.b2bpic.net/free-photo/woman-with-hairdryer-hairbrush_1385-2900.jpg" }
      ]}
      title="PREMIUM SERVICES"
      description="Comprehensive grooming solutions."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "p1", badge: "Most Popular", price: "£35", subtitle: "Premium Haircut", buttons: [{ text: "Book", href: "#booking" }], features: ["Consultation", "Precision Cut"] }
      ]}
      title="PRICE LIST"
      description="Transparent pricing."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/minimalist-background_23-2151967093.jpg"
      logoText="DOC BARNET"
      columns={[{ title: "Services", items: [{ label: "Book Now", href: "#booking" }] }]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}