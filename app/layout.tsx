// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google"; // Example font, adjust if needed
import Script from "next/script";
import Header from "@/components/Header"; // Assuming path is correct
import Footer from "@/components/Footer"; // Assuming path is correct
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS globally
import "@/public/styles/_fw.css"; // Adjust path if needed (likely '../public/styles/...' or setup alias)
import "@/public/styles/main.css"; // Adjust path if needed (likely '../public/styles/...' or setup alias)
import GoogleAnalytics from "@/components/_silabs/GoogleAnalytics";

// --- Environment Variables ---
// Note: NEXT_PUBLIC_ variables are available client-side, others are server-side only
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_APP_GA_TRACKING_ID;
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "SiloCityPages"; // Provide default
const APP_DESC = process.env.NEXT_PUBLIC_APP_DESC || "Default description"; // Provide default
const APP_KEYWORDS = process.env.NEXT_PUBLIC_APP_KEYWORDS || "default, keywords"; // Provide default

// --- Metadata ---
// Define static metadata for the entire application
export const metadata: Metadata = {
    // Recommended to use the template feature for page-specific titles
    title: {
        default: APP_NAME,
        template: `%s | ${APP_NAME}`, // Example: "About | SiloCityPages"
    },
    description: APP_DESC,
    keywords: APP_KEYWORDS?.split(",").map((k) => k.trim()), // Convert string to array
    // Add other metadata fields as needed (e.g., openGraph, twitter)
    manifest: "/manifest.json", // Ensure manifest is in /public
};

// --- Viewport ---
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    // themeColor: "#ffffff", // Optional: Add theme color
};

// Optional: Setup a font (example using Inter)
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {GA_TRACKING_ID && <GoogleAnalytics gaId={GA_TRACKING_ID} />}

            <body className={inter.className}> {/* Apply font className if using next/font */}
                {/* Header and Footer are now part of the layout, wrapping all pages */}
                <div className="main-container"> {/* Keep your wrapper div if needed */}
                    <Header />
                    <main> {/* Use <main> tag for semantic content area */}
                        {children} {/* Page content will be rendered here */}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}