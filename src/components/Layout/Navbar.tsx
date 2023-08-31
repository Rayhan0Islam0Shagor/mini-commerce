import Link from 'next/link';
import CartNavLink from '../CartNavLink';

const Navbar = () => {
  return (
    <div className="w-full px-4 py-6 border-b flex items-center justify-between">
      <Link href="/" className="uppercase font-bold text-lg">
        MINI Commerce
      </Link>

      <CartNavLink />
    </div>
  );
};

export default Navbar;
