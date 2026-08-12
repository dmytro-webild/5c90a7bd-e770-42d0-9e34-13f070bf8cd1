"use client";

import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import TestimonialDetailedCardsHighlight from '@/components/sections/testimonial/TestimonialDetailedCardsHighlight';

export default function LandingPage() {
  const bookingUrl = "https://tinyurl.com/2kr8jy37";

  return (
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
        <HeroBillboardScroll
          title="Experience Our Full Range of Premium Grooming Services"
          description="From precision gentlemen's haircuts and elegant ladies' styling to expert beard grooming and rejuvenating facial treatments, discover unparalleled quality and care at Doc Barnet Grooming Salon."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1778093237434-05qgab2c.jpg"
          textAnimation="fade"
        />
      </div>

      <div id="trust-badges" data-section="trust-badges">
        <SocialProofMarquee
          title="Trusted by Our Community"
          description="Recognized excellence in our local community."
          names={["Award Winning Salon", "Local Business of the Year", "Highly Recommended on Google", "Top Rated Stylists", "Community Favorite"]}
          textAnimation="fade"
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialDetailedCardsHighlight
          title="Google Reviews"
          titleHighlight="Top Rated"
          description="See what our customers have to say about their experience."
          testimonials={[
            { title: "Best experience", quote: "Amazing haircut and friendly staff!", name: "Sarah H.", role: "Local Resident", imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9659.jpg" },
            { title: "Highly recommended", quote: "Top tier service and quality cuts.", name: "David L.", role: "Businessman", imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-woman-posing-fashionable-outfit_23-2149021828.jpg" }
          ]}
          textAnimation="slide-up"
        />
      </div>

      <div id="offer" data-section="offer">
        <ContactCenter
          title="20% OFF YOUR FIRST VISIT"
          description="TUESDAY ONLY CODE: DOCBARNET20"
          buttonText="Get Offer"
          inputPlaceholder="Enter email address"
          textAnimation="fade-blur"
        />
      </div>

      <div id="contact" data-section="contact">
        <FaqSplitMedia
          title="VISIT US"
          description="Unit 67, Gloucester Quays Designer Outlet, Gloucester GL1 5SH"
          items={[
            { question: "Opening Hours", answer: "Mon-Sat: 9am - 7pm | Sun: 10am - 4pm" },
            { question: "Appointments", answer: "01452 224220 / 07495 044457" },
            { question: "Location", answer: "Gloucester Quays Designer Outlet" },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/hairdressing-equipment-white-background_23-2147711627.jpg"
          textAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMinimal
          brand="DOC BARNET"
          copyright="© 2024 Doc Barnet. All rights reserved."
          socialLinks={[{ icon: "Instagram", href: "#" }, { icon: "Facebook", href: "#" }]}
        />
      </div>
    </ReactLenis>
  );
}