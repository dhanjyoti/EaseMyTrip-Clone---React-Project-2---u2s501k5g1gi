const Input = ({name, icon, value, onChange, placeholder, type, required, disabled})=>{
    return <div className="px-3 rounded-br-sm border border-gray flex flex-row items-center">
        <input name={name} disabled={disabled} className="py-2 pr-1 bg-transparent outline-none flex-1 disabled:text-white/30" required={required} type={type} value={value} onChange={onChange} placeholder={placeholder}/>
        {icon}
    </div>
}

export default Input