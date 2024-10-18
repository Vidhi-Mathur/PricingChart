import { BadgePercent, Dot } from 'lucide-react'
import { ListItem } from "./ListItem"

export const Column = ({ heading, subheading, tagline, points, ending, buttonTxt, booster = false, badge = false, badgeTxt = ["", ""] }) => {
return (
    <div className={`flex flex-col justify-between space-y-4 ${!booster ? "text-gray-500" : "bg-gradient-to-b from-blue-600 to-blue-950 text-white"} p-6 rounded-lg`}>
        <div>
            <div className="flex justify-between items-center mb-3">
                <h3 className={`text-xl font-extrabold ${!booster ? "text-black" : "text-white"}`}>{heading}</h3>
                {badge && badgeTxt[1] && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {badgeTxt[1]}
                    </span>
                )}
            </div>
            <div>
                <h2 className={`text-3xl font-extrabold mb-1 ${!booster ? "text-black" : "text-white"}`}>
                    {subheading}
                </h2>
                <div className="flex items-center">
                    {badge && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md flex items-center">
                            <BadgePercent className="w-4 h-4 mr-1" />{badgeTxt[0]}
                        </span>
                    )}
                    <p className={`${badge ? 'line-through font-bold text-xl' : 'text-sm'}`}>{tagline}</p>
                </div>
            </div>
            <ul className={`space-y-2 mt-5 ${!booster ? "text-gray-500" : "text-white"}`}>
                {points.map((point, index) => (
                    <ListItem key={index} light={booster}>{point}</ListItem>
                ))}
            </ul>
        </div>
        <div className="mt-auto pt-6">
            <hr className={`mb-6 border-${booster ? 'white' : 'gray-300'} border-t`} />
            <div>
                <ul className={`mt-10 space-y-2 text-sm ${booster ? "text-white" : "text-gray-500"}`}>
                    {ending.map((point, index) => (
                        <p key={index} className="text-sm flex"><Dot /> {point}</p>
                    ))}
                </ul>
                <button className={`w-full font-bold py-2 rounded-md transition-colors mt-4 ${!booster ? 'bg-blue-700 text-white hover:bg-blue-950' : 'bg-white text-blue-700 hover:bg-slate-300'}`}>
                    {buttonTxt}
                </button>
            </div>
        </div>
    </div>
    )
}