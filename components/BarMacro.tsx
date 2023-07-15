import Image from "next/image";

interface BarMacroProps {
    image: string;
    macro: string;
    calories: string;
    customClass?: string;
}

export default function BarMacro({image,macro,  calories, customClass} :BarMacroProps){
    return(
        <li className={`flex gap-4 ${customClass}`}>
            <Image className="object-contain" src={image} alt={macro} width="70" height="70"/>
            <p className="m-auto mb-[20px]">{calories}</p>
        </li>
    )
}