const Loading = () => {
  return (
    <>
      <section className="p-4 flex items-center justify-between flex-wrap">
        <div className="font-semibold text-xl h-7 animate-pulse bg-slate-50 w-[200px] rounded-md" />

        <div className="flex items-center space-x-6 flex-wrap ">
          <div className="flex w-full items-center space-x-2 justify-between  space-y-2 md:space-y-0">
            <div className="w-[200px] h-7 rounded-lg animate-pulse bg-slate-50" />
            <div className="w-[200px] h-7 rounded-lg animate-pulse bg-slate-50" />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 px-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-6 ">
        {new Array(8).fill(1).map((_, i: number) => (
          <div
            key={i}
            className="group shadow-sm rounded-md flex items-center w-full flex-col min-h-[556px] "
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 bg-slate-50 animate-pulse" />

            <div className="px-4 py-2 flex-1 flex flex-col w-full">
              <div className="flex items-center space-x-2">
                {new Array(5).fill('').map((_, idx: number) => (
                  <span
                    className="block h-5 w-5 bg-slate-50 rounded-sm"
                    key={idx}
                  />
                ))}

                <div className="text-sm ml-5 font-semibold w-10 animate-pulse bg-slate-50 h-6" />
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-sm font-bold w-12 animate-pulse" />
              </div>
              <div className="mt-2 text-base rounded-lg w-full animate-pulse h-5 bg-slate-50" />
              <div className="mt-2 text-base rounded-lg w-1/2 animate-pulse h-5 bg-slate-50" />
              <div className="mt-2 text-base rounded-lg w-1/3 animate-pulse h-5 bg-slate-50" />

              <div className="flex-1" />

              <div className="flex items-center justify-between pt-4">
                <div className="w-1/3 h-5 animate-pulse bg-slate-50" />

                <div className="h-8 w-24 animate-pulse bg-slate-50 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Loading;
