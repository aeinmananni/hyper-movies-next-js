import Link from "@/custom/link";
export default function Navigation() {
  return (
    <nav className="">
      <div className="flex gap-4">
        <Link href={""}>Movies</Link>
        <Link href={""}>TV Shows</Link>
        <Link href={""}>People</Link>
        <Link href={""}>more</Link>
      </div>
    </nav>
  );
}
