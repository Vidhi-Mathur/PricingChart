import { CircleCheck } from "lucide-react"

export const ListItem = ({ children, light = false }) => {
    return (
        <li className={`flex items-start space-x-2 ${light ? "text-white" : "text-gray-500"}`}>
            <CircleCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>{children}</span>
        </li>
    )
}


