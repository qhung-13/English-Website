import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header /> {/* Always appear*/}
            <main>{children}</main> {/* Change depending on each page */}
            <Footer />
        </>
    );
}

export default Layout;