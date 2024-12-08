"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/ui/theme-switch";
import { Logo } from "@/src/components/icons";
import { Button } from "@nextui-org/button";
import { logout } from "@/src/services/AuthServices";
import { useUser } from "@/src/context/user.context";
import { Avatar } from "@nextui-org/avatar";
import { usePathname, useRouter } from "next/navigation";
import { ProtectedRoutes } from "@/src/app/protectedRoutes";

export const Navbar = () => {
  const { user, setIsLoading: userLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    if (ProtectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
    userLoading(true);
  };
  return (
    <NextUINavbar className="max-w-screen-lg mx-auto" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">FoundX</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* PC View */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        {user?.email ? (
          <NavbarItem className="hidden sm:flex gap-2">
            <Button onClick={() => handleLogout()}>Logout</Button>
          </NavbarItem>
        ) : (
          ""
        )}
        {user?.email && (
          <NavbarItem className="hidden sm:flex gap-2">
            <Link href="/dashboard">
              <Avatar src={user?.profilePhoto} />
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      {/* Mobile View */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <Link href="/dashboard">
          <Avatar src={user?.profilePhoto} />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className=" mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
