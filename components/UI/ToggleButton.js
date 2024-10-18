export const ToggleButton = ({ label, isActive, onClick }) => {
    return (
        <span className={`px-3 py-1 rounded-md cursor-pointer ${isActive ? "bg-white text-black" : ""}`} onClick={onClick}>{label}</span>
    )
}