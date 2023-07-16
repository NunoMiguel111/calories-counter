import Image from "next/image"
import BarMacro from "./BarMacro"

export default function CalBar() {
    return (
        <header className="flex w-full justify-between bg-cal-bar h-[80px] p-2 text-white ">
            <div className="flex">
                <Image src="/images/user.svg" alt="profile pic" width="60" height="60" />
                <p>Name</p>
            </div>
            <ul className="flex gap-5">
                
                <BarMacro image="/images/carbs.png" macro="carbs" calories="calories"/> 
                <BarMacro image="/images/protein.png" macro="protein" calories="calories"/> 
                <BarMacro image="/images/fats.png" macro="fats" calories="calories"/> 
                <BarMacro  customClass="border-l-2 border-black pl-20" image="/images/target.png" macro="target" calories="calories"/>
            </ul>
            <Image src="/images/Sign_in_squre.svg" alt="logout" width="50" height="50" />
        </header>
    )
}