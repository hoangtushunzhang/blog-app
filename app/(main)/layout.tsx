import Footer from "../_components/Footer";
import Header from "../_components/Header";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div>
                <Header />
                <div className="mt-10 px-10 md:px-28 lg:px-44">{children}</div>
                <div className="px-10 my-20 md:px-28 lg:px-44">
                    <Footer />
                </div>
            </div>
        </div>
    );
}