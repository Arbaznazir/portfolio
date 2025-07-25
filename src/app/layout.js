import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Arbaz Nazir | Power BI Developer & Data Engineer",
  description:
    "Arbaz Nazir's portfolio - Power BI Developer and Data Engineer skilled in data modeling, visualization, DAX, SQL, and business intelligence solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Suppress Grammarly on this site */}
        <Script id="disable-grammarly" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              // Disable Grammarly
              if (typeof window !== 'undefined') {
                const observer = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName.startsWith('data-gr')) {
                      const target = mutation.target;
                      if (target.hasAttribute(mutation.attributeName)) {
                        target.removeAttribute(mutation.attributeName);
                      }
                    }
                  });
                });
                
                observer.observe(document.body, {
                  attributes: true,
                  subtree: true,
                  attributeFilter: ['data-gr-c-s-loaded', 'data-new-gr-c-s-check-loaded', 'data-gramm']
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
