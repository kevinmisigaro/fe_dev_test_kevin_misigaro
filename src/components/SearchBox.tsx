const SearchBox = ({
  updateFn,
}: {
  updateFn: (e: any) => void;
}) => {
  return (
    <div className="flex items-center my-5 border w-96 border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        className="px-4 py-2 w-full focus:outline-none"
        placeholder="Search by title..."
        onChange={updateFn}
      />
    </div>
  );
};

export default SearchBox;
