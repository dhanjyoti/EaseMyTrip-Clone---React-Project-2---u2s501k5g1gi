const HeaderItem = ({ children, header }) => {
  return (
    <div className="flex flex-col rounded overflow-hidden shadow-lg">
      <div
        className="h-[50px] flex flex-row items-center px-3"
        style={{
          background: "linear-gradient(90deg, #c7dffe 0%, #d8f2ff 100%)",
        }}
      >
        {header}
      </div>
      {children}
    </div>
  );
};

export default HeaderItem
