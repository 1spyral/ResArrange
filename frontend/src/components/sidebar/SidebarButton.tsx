import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconProp } from "@fortawesome/fontawesome-svg-core"

export default function SidebarButton({ icon }: { icon: IconProp }) {
    return (
        <button className="text-button-text hover:bg-green-dark m-[5px_0] cursor-pointer rounded-md border-none p-[10px]">
            <FontAwesomeIcon size="xl" className="p-0" icon={icon} />
        </button>
    )
}
