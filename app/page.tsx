import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import LeftSide from "@/src/components/LeftSide";
import MainContent from "@/src/components/MainContent";
import RightSide from "@/src/components/RightSide";
import Particlesbg from "@/src/components/Particlesbg";

export default function Home() {
  return (
    <main className="h-screen w-screen relative">
      <div className="w-full h-full absolute z-10 ">
        <Navbar />
        <MainContent />
      </div>

      <div className="fixed z-0 ">
        <Particlesbg />
      </div>
    </main>
  );
}
