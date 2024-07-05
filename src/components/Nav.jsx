import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const Nav = () => {
  return (
    <>
      <Navbar className="bg-white" position="static">
        <NavbarBrand>
          <p className="font-bold text-inherit">Myntra</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/bag">
              Bags
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/shoe" color="foreground">
              Shoes
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/watch">
              Watches
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Mycart</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Nav;
