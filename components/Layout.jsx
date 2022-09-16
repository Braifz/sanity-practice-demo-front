import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="flex justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
