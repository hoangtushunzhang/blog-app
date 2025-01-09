import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavMenuItems } from "@/constants"
import NavMenuItem from "./NavMenuItem"

const NavbarMenu = () => {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    {NavMenuItems.map((item) => (
                        <NavMenuItem key={item.value} href={item.href} label={item.label} />
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default NavbarMenu