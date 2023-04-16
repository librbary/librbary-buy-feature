import React from 'react'
import useMediaQuery from "../hooks/useMediaQuery";

const Figures = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <>
      {isAboveMediumScreens && (
        <div className="h-[150px] w-screen bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <div>
                <h1 className="basis-3/5  font-montserrat text-3xl font-bold">10K+ Active Readers</h1>
              </div>
              
              <div>
                <h1 className="basis-3/5 font-montserrat text-3xl font-bold">5+ Open Libraries</h1>
              </div>
             
              <div>
                <h1 className="basis-3/5 font-montserrat text-3xl font-bold">10+ Locations</h1>
              </div>
              <div>
                <h1 className="basis-3/5 font-montserrat text-3xl font-bold">20+ Sellers</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Figures