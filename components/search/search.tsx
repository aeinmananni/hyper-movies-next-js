import Input from "@/custom/input";
import { FaSearch } from "react-icons/fa";
export default function Search() {
  return (
    <div className=" w-2/3 mx-auto">
      <Input
        icon={<FaSearch />}
        placeholder="Search for movies,TV Show or celebrity that you are looking for"
        className="bg-slate-700 outline-none text-slate-200 text-sm ring-4 ring-slate-900 placeholder:text-sm placeholder:text-slate-500"
      />
    </div>
  );
}
