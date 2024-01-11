import myimg from "./sprite.png"

const Test = ()=>{
    console.log(myimg)
    return <div>
        <div className="w-[10rem] h-[10rem] border m-2" style={{
            background: `url(${myimg})`,
            backgroundSize:"2800%",
            backgroundPosition:"100% 97%",
            clipPath:'polygon( 20% 0% , 0% 20% , 30% 50% , 0% 80% , 20% 100% , 50% 70% , 80% 100% , 100% 80% , 70% 50% , 100% 20% , 80% 0% , 50% 30% )'
        }} />
    </div>
}
export default Test