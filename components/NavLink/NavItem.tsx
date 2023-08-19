import Link from 'next/link';

interface NavItemProps {
  text: string;
  href: string;
  active?: boolean;
}

const NavItem = ({ text, href, active }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={`text-base text-dark py-2 mx-8 flex group-hover:text-primary ${
        active ? 'text-primary' : ''
      }`}
    >
      {text}
    </Link>
  );
};

export default NavItem;
