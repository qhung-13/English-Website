import Header from "./Header"

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header /> {/* Always appear*/}
            <main>{children}</main> {/* Change depending on each page */}
        </>
    );
}

export default Layout;