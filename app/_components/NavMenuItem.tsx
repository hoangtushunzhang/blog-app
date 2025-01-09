import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

interface NavMenuItemsProps {
    label: string;
    href: string;
}


const NavMenuItems = ({ label, href }: NavMenuItemsProps) => {
    return (
        <NavigationMenuItem>
            <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink  className={navigationMenuTriggerStyle()}>
                    {label}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    )
}

export default NavMenuItems