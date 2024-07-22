import React from "react";
import { Link } from "react-router-dom";
import Navdata from "./Navdata";

export default function Header() {
  return (
    <>
      <nav className="w-full flex flex-col ">
        <div id="top-header" className="mx-auto my-[5px]">
          <h4 className="uppercase text-[#052324] font-mono w-[221px] text-2xl">
            Movies
          </h4>
        </div>
        <div className="w-[768px] mx-auto flex mt-5 " id="bottom-header">
          {Navdata?.map((element) => {
            return (
              <React.Fragment key={element.name}>
                <Link
                  className="mx-[21px] font-extralight flex justify-center items-center text-black"
                  to={element.href}
                >
                  {element.name}
                </Link>
              </React.Fragment>
            );
          })}
          <button
            className="font-mono mx-[21px] text-white bg-[#2B2B2B] p-[14px_16px] text-[12px] font-bold tracking-wider uppercase"
            children={"Register"}
          />
        </div>
      </nav>
    </>
  );
}
