import Image from "next/image";
import REVA from "../public/REVA.png";

const classes = {
    container: "flex justify-between items-center p-8",
    logo: "h-11 w-auto",
}

export default function Navbar() {
    return (
        <nav className={classes.container}>
            <Image className={classes.logo} src={REVA} alt="" />

        </nav>
    )
}