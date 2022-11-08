import NavLink from "./NavLink";

const links = [
  {
    name: "Adam Pap.",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between py-3">
      {links.map((l) => (
        <NavLink href={l.href} name={l.name} />
      ))}
    </div>
  );
};

export default Navbar;
