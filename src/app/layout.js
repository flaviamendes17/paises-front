import "./globals.css";

export const metadata = {
    title: "Países",
    description: "Projeto que lista países",
    icons: {
        icon: "/icons/mundo.png", 
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <link rel="icon" href="/icons/mundo.png" type="image/png" />
            </head>
            <body>{children}</body>
        </html>
    );
}
