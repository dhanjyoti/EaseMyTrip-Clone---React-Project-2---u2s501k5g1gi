import { useEffect, useState } from "react"
import RadioGroup from "../radio/Radio"

const Wheel = ({ defaultValue, onChange }) => {
    const [value, setValue] = useState(defaultValue)
    return <div className="rounded border border-gray-200 flex flex-row w-fit">
        <button className="outline-none border-r border-gray-200 px-2.5 py-1" onClick={() => {
            setValue((prev) => {
                let x = prev
                if (prev > 0) {
                    x = prev - 1
                }
                onChange?.(x)
                return x
            })
        }}>-</button>
        <div className="flex items-center justify-center px-2.5 font-mono min-w-[40px]">{value}</div>
        <button className="outline-none border-l border-gray-200 px-2.5" onClick={() => {
            setValue((prev) => {
                let x = prev + 1
                onChange?.(x)
                return x
            })

        }}>+</button>
    </div>
}

const TravallerClass = ({open, onChange}) => {
    const [totalTraveller, setTotalTraveller]=useState(1)
    const [adults, setAdults]=useState(1)
    const [childs, setChilds]=useState(0)
    const [infants, setInfants]=useState(0)
    const [classT, setClassT]=useState('economy')
    const cls = [
        {
            label:"Economy",
            value:"economy"
        },
        {
            label:"Prem.Economy",
            value:"prem-economy"
        },
        {
            label:"Business",
            value:"business"
        },
        {
            label:"First",
            value:"first"
        },
    ]

    useEffect(()=>{
        onChange?.({adults, childs, infants, class:classT})
    },[adults, infants, childs, classT])
    return open && <div onClick={(e)=>e.stopPropagation()} className="bg-white p-2 flex flex-col absolute w-[250px] divide-y-2 gap-3 z-10 shadow-xl">
        <div className="flex flex-col gap-4">
            <div className="flex flex-row">
                <div className="flex flex-col flex-1">
                    <span className="font-bold text-sm">Adults</span>
                    <span className="text-sm">(12+ Years)</span>
                </div>
                <div className="flex-1">
                    <Wheel defaultValue={1} onChange={(e)=>{
                        if(e === 0){
                            setAdults(1)
                        }else{
                            setAdults(e)
                        }
                    }}/>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col flex-1">
                    <span className="font-bold text-sm">Children</span>
                    <span className="text-sm">(2-12 Years)</span>
                </div>
                <div className="flex-1">
                    <Wheel defaultValue={0} onChange={(e)=>setChilds(e)}/>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col flex-1">
                    <span className="font-bold text-sm">Infant</span>
                    <span className="text-sm">(0-2 Years)</span>
                </div>
                <div className="flex-1">
                    <Wheel defaultValue={0} onChange={(e)=>setInfants(e)}/>
                </div>
            </div>
        </div>
        <div className="pt-3">
            <RadioGroup defaultValue={classT} items={cls} onChange={setClassT}/>
        </div>
    </div>
}

export default TravallerClass