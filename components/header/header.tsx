import Navigation from "./navigation";
import Button from "@/custom/button";
import IconMovie from "./icon-movie";
export default function Header() {
  return (
    <header className="w-full text-gray-50   min-h-12 mx-auto flex justify-between items-center px-2 uppercase py-5">
      <div className="flex items-center gap-12">
        <IconMovie />
        <Navigation />
      </div>
      <div className="flex  gap-4">
        <Button className="bg-rose-600 w-max h-max px-3 py-1 rounded-md text-white hover:bg-rose-500">
          Sing up
        </Button>
        <Button className="bg-transparent py-1 px-3 border rounded-md">
          Login
        </Button>
      </div>
    </header>
  );
}
