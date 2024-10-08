import Link from "next/link";
import { ModeToggle } from "../theme-toggle-buttom";
import { buttonVariants } from "./button";

function Navbar() {
    return (
        <nav className="flex justify-between">
            <Link href="/"> Crud Actions</Link>

            <div className="flex gap-x-2 items-center">
                <Link href="/new" className={buttonVariants({variant: "secondary"})}>
                    create task
                    </Link>
                <ModeToggle />
            </div>
        </nav>
    );
}

export default Navbar;
