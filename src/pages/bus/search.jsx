import Select from "@oshq/react-select";

const Search = ({ options, onChange, value, valueRender, placeholder, className="" }) => {
  return (
    <Select
    searchable
    placeholder={<span className="text-xl font-bold text-black/40">{placeholder}</span>}
    className={() => {
      const custom =
        "min-h-[60px] bg-white text-xl basis-full text-black w-full p-4 font-sans min-w-[50px] outline-none " + className;
      return {
        default: `${custom} `,
        focus: ``,
        disabled: `${custom} text-black/25`,
      };
    }}
    menuClass="rounded-none bg-white shadow-md -mt-2 border"
    animation={null}
    suffixRender={()=><div></div>}
    options={options}
    onChange={onChange}
    value={value}
  />
  );
};

export default Search;
