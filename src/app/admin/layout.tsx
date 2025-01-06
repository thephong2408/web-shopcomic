import Styles from "../components/Styles";
import HeaderAdmin from "../components/headerAdmin";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {" "}
      <Styles>
        <div className="flex min-h-screen">
          <HeaderAdmin />
          <div className="flex-1 max-h-screen overflow-y-auto"> {children}</div>
        </div>
      </Styles>
    </div>
  );
}
