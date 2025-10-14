"use client";
//import { KeyObject } from "crypto";
import { error } from "console";

interface IButton {
  name: string;
  style: "dark" | "light" | "error" | "outline" | "success";
  click: () => void;
}

export default function Button({ name, style, click }: IButton) {
  const styles = {
    dark: "bg-blue-700 hover:bg-blue-800 text-white",
    light: "bg-blue-300 hover:bg-blue-400 text-black",
    error: "bg-red-300 hover:bg-red-400 text-black",
    outline: "bg-none outline-2 outline-black",
    success: "bg-green-300 hover:bg-green-400 text-black",
  };
  const choseStyle = styles[style];
  return (
    <input
      type="button"
      value={name}
      onClick={click}
      className={`p-2 px-8 rounded-md font-semibold cursor-pointer ${choseStyle}`}
    />
  );
}

/* Template String
  Uma string concatena valores JS

  Ex:
  var nome = "gabriel"
  var string = `meu nome é ${nome}`

  console.log("meu nome é gabriel")

  className={blablabla}
*/
