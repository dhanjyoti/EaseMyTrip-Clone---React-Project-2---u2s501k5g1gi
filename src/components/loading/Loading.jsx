import LoadingIcon from "./LoadingIcon";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="flex flex-col gap-3 items-center justify-center p-4 px-10 bg-white rounded shadow-lg">
        <span className="flex animate-spin">
          <LoadingIcon size={32} />
        </span>
        <span className="text-xs">Loading</span>
      </div>
    </div>
  );
};

export default Loading;
