import { Header } from "@/components/header";
import { Search } from "@/components/search";
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <Header />
      <Search />
    </div>
  );
}
