import Image from "next/image"

export default function Ingredient(){
    return (<div className="ingredient-box bg-primary-color w-80 absolute">
        <div className="flex">
            <h2>Ingredient</h2>
            <Image  src="images/plus.svg" alt="plus-sign" width="20" height="20"/> 
        </div>
    </div>)
}