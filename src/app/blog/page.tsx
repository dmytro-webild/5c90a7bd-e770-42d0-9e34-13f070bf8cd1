"use client";

import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import FooterSimple from '@/components/sections/footer/FooterSimple';

const bookingUrl = "https://tinyurl.com/2kr8jy37";

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

    const navItems = [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Products", href: "/products" },
      { name: "Prices", href: "/#pricing" },
      { name: "Franchise", href: "/franchise" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/#contact" },
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
                    <NavbarFloatingLogo navItems={navItems}
                        logoImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DMGxfgFdRWLXzYqe2HfYt6JE4x/uploaded-1778094604107-kwe3q62f.jpg" 
                        ctaButton={{ text: "BOOK NOW", href: bookingUrl }} />
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
                        <FooterSimple
                          brand="DOC BARNET"
                          columns={footerColumns}
                          copyright="© 2024 Doc Barnet. All rights reserved."
                          links={[]}
                        />
                    </div>
            </ReactLenis>
        </ThemeProvider>
    );
}