import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  name: string;
  href: string;
}

const NavLink = ({ name, href }: Props) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className="text-black font-semibold">{name}</a>
    </Link>
  );
};

export default NavLink;
