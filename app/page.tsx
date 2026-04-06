import MenuBar from "@/components/MenuBar";
import User from "@/components/User";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <User/>
        {/* <MenuBar/> */}

    </div>
  );
}
