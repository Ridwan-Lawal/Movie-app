function SearchForm() {
  return (
    <form className="w-full flex items-start gap-6 ">
      <img src="/src/assets/icon-search.svg" alt="" />

      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="bg-inherit placeholder:text-gray-600 placeholder:text-2xl w-full outline-none focus:border-b border-slate-600 transition-all duration-500 pb-4 text-white text-[22px]"
      />
    </form>
  );
}

export default SearchForm;
