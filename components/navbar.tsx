import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import { auth } from "@/auth";

const Navbar = async () => {
  const categories = await getCategories();
  const session = await auth();

  return (
    <div className="border-b bg-[#666666]">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions userName={session?.user?.name} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
