import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <header className="header">
            <div className="header-inner">
                <Link href="/">
                    <img src="/logo.png" alt="Логотип" className="logo" />
                </Link>
            </div>
        </header>

        <main style={{ flex: 1 }}>
            <div className="container">
                {children}
            </div>
        </main>

        <footer className="footer">
            <div className="footer-inner">
                <span>EventHub © 2025</span>
                <a
                    href="https://www.instagram.com/yung_di.ego/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                >
                    <img src="/instagram.png" alt="icon" />
                </a>
            </div>
        </footer>
        </body>
        </html>
    );
}
