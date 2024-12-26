import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Layout1({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="w-full">
      <body className="">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
