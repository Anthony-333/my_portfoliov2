import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import LeftSide from "@/src/components/LeftSide";
import MainContent from "@/src/components/MainContent";
import RightSide from "@/src/components/RightSide";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-between">
        <LeftSide />
        <MainContent />
        <RightSide />
      </div>
    </main>
  );
}
