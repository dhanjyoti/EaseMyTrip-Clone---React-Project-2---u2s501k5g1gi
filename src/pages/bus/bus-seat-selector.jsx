import { useState } from "react";
import Dialog from "../../components/dialog/Dialog"
import BusSeatIcon from "./bus-seat";
import classNames from "classnames";


function divideArray(array, parts) {
    var result = [];
    for (var i = 0; i < parts; i++) {
        var startIndex = Math.floor(i * array.length / parts);
        var endIndex = Math.floor((i + 1) * array.length / parts);
        result.push(array.slice(startIndex, endIndex));
    }
    return result; 
}

const BusSeatSelector = ({ open, setOpen, busDetail }) => {

    // Numbers from 1 to 49
    var numbersArray = Array.from({ length: busDetail?.seats || 49 }, (_, i) => i + 1);

    // Divide into 4 arrays
    var dividedArrays = divideArray(numbersArray, 4);

    const [selectedSeats, setSelectedSeats] = useState([])

    const removeSeat = (seat)=>{
        if(selectedSeats.includes(seat)){
            setSelectedSeats(selectedSeats.filter((ss) => ss !== seat))
        }
    }
    return <Dialog open={open} openChange={setOpen} title={"Bus seats"} content={
        <div className="flex flex-row">
            <div className="flex flex-col gap-1 p-4 border border-[#d3e4f5] bg-[whitesmoke]">
                {dividedArrays.map((bs, i) => <div key={i + "main-row"} className={classNames("flex flex-row justify-end gap-3", i === 2 ? "pt-6" : "")}>
                    {bs.map((bss, j) => <button key={"seat" + bss} onClick={() => {
                        if (selectedSeats.includes(bss)) {
                            removeSeat(bss)
                        } else {
                            if(selectedSeats.length < 6){
                                setSelectedSeats(prev => [...prev, bss])
                            }
                        }
                    }} className="relative flex justify-center items-center"><BusSeatIcon color={selectedSeats.includes(bss) ? "green" : "black"} size={32} /><span className="absolute text-[9px]">{bss}</span></button>)}
                </div>)}
            </div>
            <div className=" w-[200px] pl-5">
                Selected seats
                <div className="flex flex-row flex-wrap gap-3">
                    {selectedSeats.map((ss) => <div key={"ss" + ss} className="text-[10px] rounded border border-gray-200 bg-yellow-100 text-black/70 px-2 py-1 relative">{ss} (ST) <button onClick={()=>removeSeat(ss)} className="text-[8px] flex items-center justify-center rounded-full text-white bg-black absolute right-0 top-0 w-3 h-w-3 -mr-[6px] -mt-[6px]">X</button></div>)}
                </div>
                <div className="py-[10px] px-2">
                    <div></div>
                    <p className="text-[#737373] text-[10px] text-right">(Including All Taxes)</p>
                </div>
            </div>
        </div>
    } />
}

export default BusSeatSelector

