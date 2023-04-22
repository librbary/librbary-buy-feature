import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import NewArrivals from "./NewArrivals";

const MainContainer = () => {
  const [{ cartShow }] = useStateValue();

  useEffect(() => {}, [cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />

      <NewArrivals />

      <MenuContainer />

      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
