const Banner = () => {
  return (
    <div className="bg_b">
      <p className="text-center text-5xl font-bold py-20">
        I Grow By Helping People In Need
      </p>
      <div className="mx-Auto flex justify-center my-12">
        <input
          className="p-3 my-10 rounded-l-lg border border-gray-400"
          type="text"
          placeholder="Search here . . ."
        />
        <button
          className="p-3 my-10 rounded-r-lg bg-red-600 text-white font-medium hover:bg-red-700"
          type="submit">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
