"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

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
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "/"},
        {
          name: "Services",          id: "/services"},
        {
          name: "Products",          id: "/products"},
        {
          name: "Prices",          id: "/#pricing"},
        {
          name: "Franchise",          id: "/franchise"},
        {
          name: "Blog", id: "/blog" },
        {
          name: "Contact",          id: "/#contact"}
      ]}
      brandName="Doc Barnet Grooming Salon"
      button={{
        text: "BOOK NOW",        href: bookingUrl}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars"}}
      title="Experience Our Full Range of Premium Grooming Services"
      description="From precision gents haircuts and elegant ladies styling to expert beard grooming and rejuvenating facial treatments, discover unparalleled quality and care at Doc Barnet Grooming Salon."
      buttons={[
        {
          text: "BOOK NOW",          href: bookingUrl},
        {
          text: "VIEW SERVICES",          href: "#services"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1778093237434-05qgab2c.jpg"
      imageAlt="Doc Barnet Luxury Salon"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "THE DOC BARNET EXPERIENCE"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/barber-applying-cream-clients-beard_107420-94778.jpg",          alt: "Barber at work"},
      ]}
      buttons={[
        {
          text: "DISCOVER MORE",          href: "#services"},
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
        {
          title: "Gents Haircuts",          description: "Precision styling tailored to your unique look.",          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-fashionable-modern-male-grey-t-shirt_613910-532.jpg",          imageAlt: "Gents Haircut"},
        {
          title: "Ladies Styling",          description: "Wash, cut, and blow dry services for sophisticated style.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/tmp/hairstyle-holding-hair-drayer-1779125588683-ef4b646b.png",          imageAlt: "Ladies Styling"},
        {
          title: "Beard & Facial",          description: "Expert beard shaping, hot towel shaves, and facial treatments.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779125338765-fdbqo198.jpg",          imageAlt: "Facial treatment"},
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
        {
          id: "p1",          badge: "Most Popular",          price: "£19.99",          subtitle: "Premium Haircut & Styling",          buttons: [
            {
              text: "Book Now",              href: bookingUrl},
          ],
          features: [
            "Consultation",            "Precision Cut",            "Style Advice",            "Finish"],
        },
        {
          id: "p2",          badge: "Essential",          price: "£45",          subtitle: "Cut, Wash & Blow Dry",          buttons: [
            {
              text: "Book Now",              href: bookingUrl},
          ],
          features: [
            "Head Massage",            "Professional Cut",            "Styling"],
        },
        {
          id: "p3",          badge: "Luxury",          price: "£85",          subtitle: "Balayage & Treatment",          buttons: [
            {
              text: "Book Now",              href: bookingUrl},
          ],
          features: [
            "Consultation",            "Expert Colour",            "Treatment",            "Finish"],
        },
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
        {
          id: "g1",          name: "Classic Fade",          brand: "Styling",          price: "Transformation",          rating: 5,
          reviewCount: "2024",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-male-who-himself-shaving-while-sitting-barber-chair-hairdressing-salon_613910-18649.jpg"},
        {
          id: "g2",          name: "Balayage",          brand: "Colour",          price: "Transformation",          rating: 5,
          reviewCount: "2024",          imageSrc: "http://img.b2bpic.net/free-photo/woman-wears-grey-hair-wig_633478-1316.jpg"},
        {
          id: "g3",          name: "Salon Interior",          brand: "Style",          price: "Luxury Space",          rating: 5,
          reviewCount: "2024",          imageSrc: "http://img.b2bpic.net/free-photo/professional-hairdresser-sitting-barber-chair-waiting-customer_613910-3902.jpg"},
        {
          id: "g4",          name: "Lighting Design",          brand: "Design",          price: "Atmosphere",          rating: 5,
          reviewCount: "2024",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-barber-s-instruments-shop_23-2149186524.jpg"},
        {
          id: "g5",          name: "Tools",          brand: "Precision",          price: "Detail",          rating: 5,
          reviewCount: "2024",          imageSrc: "http://img.b2bpic.net/free-photo/model-career-kit-still-life-top-view_23-2150217977.jpg"},
        {
          id: "g6",          name: "Blow Dry",          brand: "Styling",          price: "Treatment",          rating: 5,
          reviewCount: "2024",          imageSrc: "http://img.b2bpic.net/free-photo/woman-drying-hair-hairsalon_1157-27184.jpg"},
      ]}
      title="OUR WORK"
      description="Visual highlights from our salon floor."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah H.",          role: "Client",          company: "Local Resident",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9659.jpg"},
        {
          id: "2",          name: "David L.",          role: "Client",          company: "Businessman",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-woman-posing-fashionable-outfit_23-2149021828.jpg"},
        {
          id: "3",          name: "Emily B.",          role: "Client",          company: "Frequent Visitor",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/professional-barber-working-with-client-hairdressing-salon-styling-beard-with-trimmer_613910-18291.jpg"},
        {
          id: "4",          name: "John D.",          role: "Client",          company: "Styling Enthusiast",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-barbershop-with-classic-styling_618663-34.jpg"},
        {
          id: "5",          name: "Clara R.",          role: "Client",          company: "New Guest",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/two-businessman-discussing-their-chart-coffee-shop_1150-6422.jpg"},
      ]}
      kpiItems={[
        {
          value: "17+",          label: "Years Experience"},
        {
          value: "5000+",          label: "Happy Clients"},
        {
          value: "100%",          label: "Satisfaction Rate"},
      ]}
      title="WHAT OUR CLIENTS SAY"
      description="We pride ourselves on the highest standards of service and style."
    />
  </div>

  <div id="offer" data-section="offer">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
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
        {
          id: "f1",          title: "Opening Hours",          content: "Mon-Sat: 9am - 7pm | Sun: 10am - 4pm"},
        {
          id: "f2",          title: "Appointments",          content: "01452 224220 / 07495 044457"},
        {
          id: "f3",          title: "Location",          content: "Gloucester Quays Designer Outlet"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/hairdressing-equipment-white-background_23-2147711627.jpg"
      mediaAnimation="slide-up"
      title="VISIT US"
      description="Unit 67, Gloucester Quays Designer Outlet, Gloucester GL1 5SH"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1778094604107-kwe3q62f.jpg?_wi=1"
      logoText="DOC BARNET"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Gents Hair",              href: "/services"},
            {
              label: "Ladies Cut",              href: "/services"},
            {
              label: "Beard Grooming",              href: "/services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "/#about"},
            {
              label: "Contact",              href: "/#contact"},
            {
              label: "Book Now",              href: bookingUrl},
            {
              label: "Products",              href: "/products"},
            {
              label: "Blog",              href: "/blog"},
            {
              label: "Franchise",              href: "/franchise"},
          ],
        },
        {
          title: "Social",          items: [
            {
              label: "Instagram",              href: "https://www.instagram.com/docbarnet?igsh=MWMwdHBnamFibXc3Yw%3D%3D&utm_source=qr"},
            {
              label: "Facebook",              href: "#"},
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}