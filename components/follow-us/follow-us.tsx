import CustomLink from "@/custom/link";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa6";

const className = "hover:text-rose-600 transition-all duration-300";
export default function FollowUs() {
  return (
    <section className="flex w-full items-center gap-2 justify-end text-slate-200">
      <small>FOLLOW US</small>
      <CustomLink href={"/"} className={className}>
        <FaInstagram />
      </CustomLink>
      <CustomLink href={"/"} className={className}>
        <FaFacebook />
      </CustomLink>
      <CustomLink href={"/"} className={className}>
        <FaYoutube />
      </CustomLink>
      <CustomLink href={"/"} className={className}>
        <FaTelegram />
      </CustomLink>
    </section>
  );
}
