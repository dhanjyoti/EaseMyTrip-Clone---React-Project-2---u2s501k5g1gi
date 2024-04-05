import PlaneIcon from "../../images/searchlist/planeicon.svg"
import IconSearch from "../../images/searchlist/icon-search.svg"
import { useCallback, useEffect, useRef, useState } from "react"

const SearchItem = ({ place, airport, country, onClick }) => {
    return <div onClick={onClick} className="flex flex-row p-3 py-2 gap-3 border border-gray-200 hover:bg-gray-100 cursor-pointer select-none">
        <div className="self-center"><img src={PlaneIcon} /></div>
        <div>
            <div className="font-bold">{place}</div>
            <div className="text-sm font-thin">{airport}</div>
        </div>
        <div className="self-end text-sm font-thin">{country}</div>
    </div>
}

const SearchList = ({ placeholder, items, onClick, open, onClose, parent}) => {
    const [search, setSearch]=useState("")
    const [filteredItems, setFilteredItems]=useState([])
    const [firstTime, setFirstTime]=useState(true)

    useEffect(()=>{
        console.log(!!search, items);
        if(!!search){
            setFilteredItems(items?.filter((item)=>
        item.place.toLowerCase().includes(search.toLowerCase()) 
        || item.airport.toLowerCase().includes(search.toLowerCase()) 
        || item.country.toLowerCase().includes(search.toLowerCase())))
        }else{
            setFilteredItems([...items] || [])
        }
    },[items, search])

    useEffect(()=>{
        const x = (e)=>{
            if(!e.target.parentNode.classList.contains(parent) && !firstTime){
                onClose?.()
            }
        }
        setFirstTime(false)
        document.addEventListener("click",x)
        return ()=>[
            document.removeEventListener('click', x)
        ]
    },[open])

    return open && <div>
        <div className="max-w-[500px] shadow-md border border-gray-100 bg-white" onClick={(e)=>e.stopPropagation()}>
        <div className="flex flex-row items-center px-2">
            <span>
                <img src={IconSearch} />
            </span>
            <input value={search} onChange={({target})=>{
                setSearch(target.value)
            }} placeholder={placeholder} className="px-3 py-2 outline-none placeholder:text-sm placeholder:text-black/30" />
        </div>
        <div className="flex flex-col max-h-[250px] overflow-auto">
        <div className="text-sm font-bold p-1.5 bg-sky-50">Top cities</div>
            {filteredItems?.map((item) => <SearchItem key={item.place} {...item} onClick={()=>{
                onClick?.(item)
                onClose?.()
            }}/>)}
        </div>
    </div>
    </div>
}

export default SearchList