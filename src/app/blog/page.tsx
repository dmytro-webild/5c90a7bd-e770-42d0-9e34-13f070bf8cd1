"use client";

import ReactLenis from "lenis/react";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterMedia from '@/components/sections/footer/FooterMedia';

const footerColumns: FooterColumn[] = [
    {
        title: "Product",
        items: [
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "FAQ", href: "/faq" },
        ],
    },
    {
        title: "Company",
        items: [
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Careers", href: "/careers" },
        ],
    },
    {
        title: "Resources",
        items: [
            { label: "Documentation", href: "/docs" },
            { label: "Support", href: "/support" },
            { label: "Contact", href: "/contact" },
        ],
    },
];

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

    return (
        <ThemeProvider defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold">
            <ReactLenis root>
                <div id="nav" data-section="nav">

                    <NavbarLayoutFloatingOverlay navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "Prices",          id: "pricing"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Doc Barnet Grooming Salon"
      button={{
        text: "BOOK NOW",        href: bookingUrl}} />
                </div>

                    {isLoading ? (
                        <div className="w-content-width mx-auto py-20 text-center">
                            <p className="text-foreground">Loading posts...</p>
                        </div>
                    ) : (
                        <div id="blog" data-section="blog">
                            <BlogCardOne
                                blogs={posts}
                                title="Latest Articles"
                                description="Stay updated with our latest insights"
                                textboxLayout="default"
                                useInvertedBackground={false}
                                carouselMode="buttons"
                                animationType="slide-up"
                            />
                        </div>
                    )}

                    <div id="footer" data-section="footer">

                        <FooterMedia imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1778094604107-kwe3q62f.jpg"
      logoText="DOC BARNET"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Gents Hair",              href: "#services"},
            {
              label: "Ladies Cut",              href: "#services"},
            {
              label: "Beard Grooming",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Book Now",              href: bookingUrl},
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
      ]} />
                    </div>
            </ReactLenis>
        </ThemeProvider>
    );
}

