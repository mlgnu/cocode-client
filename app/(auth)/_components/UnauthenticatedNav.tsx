"use client";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Help",
    href: "/help",
  },
];

export function UnAuthunticatedNav() {

  const pathname = usePathname()

  const mappedRoutes = routes.map(route => (
    <NavigationMenuItem key={route.href}>
      <Link href={route.href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname == route.href} >
          {route.name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  ));

  return (
    <div className="flex justify-center p-2 border-b-[1px] border-primary-foreground">
  <NavigationMenu className="flex justi">
    <NavigationMenuList>
    {mappedRoutes}
    </NavigationMenuList>
  </NavigationMenu>
  </div>
  )
}
