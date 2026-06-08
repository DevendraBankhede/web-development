const App = () => {
  return (
    <>
      <div className="bg-[url('/commonBG.avif')] bg-cover h-screen w-full flex justify-center items-center">
        <div className="w-2xs mx-auto border p-20 bg-white/70 rounded-2xl flex flex-col justify-center items-center">
          <p className="text-green-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            culpa consequatur pariatur fuga tempora quam facilis, laboriosam
            corporis facere consequuntur vero aperiam aspernatur doloribus
            magnam nam blanditiis commodi ab! Rerum!
          </p>

          <button className="bg-blue-500 px-5 py-2 mt-3 mx-5 rounded text-white hover:bg-blue-700 active:bg-amber-500">
            submit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;