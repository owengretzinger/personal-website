import { FaHome } from "react-icons/fa";
import TextLink, { TextLinkWithIcon } from "./textLink";



export default function HomeButtonAfterDivider() {
    return (<>
        <div className="relative bg-white p-4 w-full">
            <div className="py-2">
                <div className="flex-grow border border-grey my-4"></div>
            </div>
            <TextLinkWithIcon text="Home" href="/" icon={"home"} target="_self" />
        </div>
    </>)
}