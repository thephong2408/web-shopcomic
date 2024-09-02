import { global } from "styled-jsx/css";
export default function Styles({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
