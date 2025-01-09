'use client';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";

const ModeToggle = () => {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex items-center justify-center p-2 border rounded-sm">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 trasition-all dark:-rotate-90 dark:scale-0 " />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-0 trasition-all dark:-rotate-0 dark:scale-100 " />
                    <span className="sr-only">Toggle theme</span>
                </div>

            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default ModeToggle