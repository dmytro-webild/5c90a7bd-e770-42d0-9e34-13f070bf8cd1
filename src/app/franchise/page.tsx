"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function FranchisePage() {
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
                    name: "Home",                    id: "/"},
                {
                    name: "Services",                    id: "/services"},
                {
                    name: "Prices",                    id: "/#pricing"},
                {
                    name: "Franchise",                    id: "/franchise"},
                {
                    name: "Contact",                    id: "/#contact"},
              
                    { name: "Blog", id: "/blog" },
            ]}
            brandName="Doc Barnet Grooming Salon"
            button={{
                text: "BOOK NOW",                href: bookingUrl}}
            />
        </div>

        <div id="franchise-contact" data-section="franchise-contact">
            <ContactSplitForm
                useInvertedBackground={false}
                title="Franchise Opportunities"
                description="Interested in joining the Doc Barnet family? We are expanding and seeking passionate individuals to join our brand. Contact us today to learn more about our franchise model and how you can become a part of our success story.\n\nDoc Barnet Management:\n📞 07867777688\n📧 operations@docbarnet.uk"
                inputs={[
                    { name: "name", type: "text", placeholder: "Your Name", required: true },
                    { name: "email", type: "email", placeholder: "Your Email", required: true },
                    { name: "phone", type: "tel", placeholder: "Your Phone Number" },
                    { name: "company", type: "text", placeholder: "Your Company (Optional)" }
                ]}
                textarea={{
                    name: "message",                    placeholder: "Your Message",                    rows: 5
                }}
                imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1779820625891-kmygfm29.jpg"
                mediaAnimation="slide-up"
                buttonText="Send Enquiry"
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterMedia
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1778094604107-kwe3q62f.jpg?_wi=1"
            logoText="DOC BARNET"
            columns={[
                {
                    title: "Services",                    items: [
                        {
                            label: "Gents Hair",                            href: "/services"},
                        {
                            label: "Ladies Cut",                            href: "/services"},
                        {
                            label: "Beard Grooming",                            href: "/services"},
                    ],
                },
                {
                    title: "Company",                    items: [
                        {
                            label: "About Us",                            href: "/#about"},
                        {
                            label: "Contact",                            href: "/#contact"},
                        {
                            label: "Book Now",                            href: bookingUrl},
                        {
                            label: "Blog",                            href: "/blog"},
                        {
                            label: "Franchise",                            href: "/franchise"},
                    ],
                },
                {
                    title: "Social",                    items: [
                        {
                            label: "Instagram",                            href: "https://www.instagram.com/docbarnet?igsh=MWMwdHBnamFibXc3Yw%3D%3D&utm_source=qr"},
                        {
                            label: "Facebook",                            href: "#"},
                        {
                            label: "Privacy Policy",                            href: "#"},
                    ],
                },
            ]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}