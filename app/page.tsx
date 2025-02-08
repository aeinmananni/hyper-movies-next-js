import { Header } from "@/components/header";
import { Search } from "@/components/search";
import { FollowUs } from "@/components/follow-us";
import { Slider } from "@/components/slider";

export default function Home() {
  return (
    <div className="w-2/3  h-full flex flex-col gap-6 mx-auto ">
      <Header />
      <Search />
      <FollowUs />
      <Slider />
    </div>
  );
}
