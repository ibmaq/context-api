"use client";
import Image from "next/image";
import { useContext } from "react";
import { StoreContext, useGlobalState } from "../contexts/Store";

// export default const ComponentA = () => {
export default function ComponentA() {
  const userData = useContext(StoreContext);
  const { state, dispatch } = useGlobalState();
  console.log("🚀 ~ file: ComponentA.js:10 ~ ComponentA ~ state:", state);
  return (
    <div className="flex justify-center w-full items-center h-screen bg-black">
      <button
        className="border p-2 rounded-md hover:bg-white hover:text-black transition-all ease-in-out duration-300 text-white"
        onClick={() => {
          console.log("hit");
          dispatch({
            type: "SET_User",
            payload: parseInt(23),
          });
          dispatch({
            type: "set_name",
            payload: "John",
          });
        }}
      >
        Click To Get the Response
      </button>
    </div>
  );
}
