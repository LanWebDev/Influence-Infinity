"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navigation } from "@/constants/constants";
import { motion } from "framer-motion";

const SheetNavbar = ({ setOpen }: any) => {
  const router = useRouter();

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
        <motion.li
          key={item.id}
          initial={{ opacity: 0, x: "-30%" }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: item.id * 0.1 }}
        >
          <Link
            href={item.url}
            passHref
            onClick={(e) => handleNavigation(e, item.url)}
            className="font-body text-xl text-text font-bold cursor-pointer hover:text-text/80"
          >
            {item.title}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default SheetNavbar;
