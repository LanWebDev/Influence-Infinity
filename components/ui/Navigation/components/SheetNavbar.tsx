"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navigation } from "@/constants/constants";

const SheetNavbar = ({ setOpen }: any) => {
  const router = useRouter(); // Correctly imported from next/navigation

  const handleNavigation = (e: any, url: string) => {
    setOpen(false);

    if (url.startsWith("#")) {
      e.preventDefault();

      setTimeout(() => {
        const elementId = url.slice(1);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          router.replace(url, { scroll: false }); // Avoid full-page reload
        }
      }, 300); // Adjust this delay to match your sheet's close animation duration
    }
  };

  return (
    <ul className="space-y-10 px-4 py-10">
      {navigation.map((item) => (
        <li key={item.id}>
          <Link
            href={item.url}
            passHref
            onClick={(e) => handleNavigation(e, item.url)}
            className="font-body text-xl text-text font-bold cursor-pointer"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SheetNavbar;
