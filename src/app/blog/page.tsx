"use client";

import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterMedia from '@/components/sections/footer/FooterMedia';

const bookingUrl = "https://tinyurl.com/2kr8jy37";

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

    const navItems = [
      { name: "Home", id: "/" },
      { name: "Services", id: "/services" },
      { name: "Products", id: "/products" },
      { name: "Prices", id: "/#pricing" },
      { name: "Franchise", id: "/franchise" },
      { name: "Blog", id: "/blog" },
      { name: "Contact", id: "/#contact" },
    ];

    const footerColumns = [
      {
        title: "Services",        items: [
          { label: "Gents Hair", href: "/services" },
          { label: "Ladies Cut", href: "/services" },
          { label: "Beard Grooming", href: "/services" },
        ],
      },
      {
        title: "Company",        items: [
          { label: "About Us", href: "/#about" },
          { label: "Contact", href: "/#contact" },
          { label: "Book Now", href: bookingUrl },
          { label: "Products", href: "/products" },
          { label: "Blog", href: "/blog" },
          { label: "Franchise", href: "/franchise" },
        ],
      },
      {
        title: "Social",        items: [
          { label: "Instagram", href: "https://www.instagram.com/docbarnet?igsh=MWMwdHBnamFibXc3Yw%3D%3D&utm_source=qr" },
          { label: "Facebook", href: "#" },
          { label: "Privacy Policy", href: "#" },
        ],
      },
    ];

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

                    <NavbarLayoutFloatingOverlay navItems={navItems}
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

                        <FooterMedia imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1778094604107-kwe3q62f.jpg?_wi=1"
      logoText="DOC BARNET"
      columns={footerColumns} />
                    </div>
            </ReactLenis>
        </ThemeProvider>
    );
}