import Image from "next/image"

const TimeChanger = () =>{

    return(
        <div className="w-full flex justify-center ">
        <div className="time-changer flex mt-2">
            <Image className="hover:cursor-pointer"src="/images/Arrow_left.svg" alt="arrow-left" height="70" width="70" />
           <h2 className="self-center pl-4 pr-4">22 March</h2>
            
            <Image className="hover:cursor-pointer"src="/images/Arrow_right.svg" alt="arrow-left" height="70" width="70" />
        </div>
        </div>
    )
}

export default TimeChanger