import {
    faFileLines,
    faGear,
    faList,
    faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons"
import { SidebarButton } from "."

export default function Sidebar() {
    return (
        <div className="bg-green flex h-screen flex-col justify-between p-[15px_10px]">
            <div className="flex flex-col">
                <SidebarButton icon={faScrewdriverWrench} />
                <SidebarButton icon={faList} />
            </div>
            <div className="flex flex-col">
                <SidebarButton icon={faFileLines} />
                <SidebarButton icon={faGear} />
            </div>
        </div>
    )
}
