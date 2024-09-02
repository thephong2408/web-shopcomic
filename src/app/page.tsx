import Image from "next/image";
import Swiper1 from "./components/Swiper";
import Layout1 from "./layout/Layout1";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Layout1>
        <Swiper1 />
      </Layout1>
    </main>
  );
}
