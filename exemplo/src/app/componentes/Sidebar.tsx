"use client";
import { useRouter } from "next/navigation";
import { Gauge, UserPen, ClipboardPlus, LogOut } from "lucide-react"; //Icones

import Image from "next/image"; // É quem sobe as imagens.

const estilosdoicone = {
  size: 24,
  color: "#ea2a2a",
  strokeWidth: 2,
};

const linkImagem =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Toyota_Logo.svg";

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className="w-[15vw] h-screen bg-gray-100 flex flex-col items-center justify-around">
      <div className="flex flex-col items-center gap-2">
        <Image src={linkImagem} alt="logo" width={100} height={50} />
        <p>Área do Vendedor</p>
      </div>

      <div className="flex flex-col gap-2">
        <span
          onClick={() => {
            router.push("/dashboard");
          }}
          className="flex gap-2 px-4 py-2 hover:bg-gray-300 rounded-xl p-2 w-full cursor-pointer justify-start items-center"
        >
          <Gauge
            size={estilosdoicone.size}
            color={estilosdoicone.color}
            strokeWidth={estilosdoicone.strokeWidth}
          />
          <p>Dashboard</p>
        </span>
        <span
          onClick={() => {
            router.push("/clientes");
          }}
          className="flex gap-2 px-4 py-2 hover:bg-gray-300 rounded-xl p-2 w-full cursor-pointer justify-start items-center"
        >
          <UserPen
            size={estilosdoicone.size}
            color={estilosdoicone.color}
            strokeWidth={estilosdoicone.strokeWidth}
          />
          <p>Clientes</p>
        </span>
        <span
          onClick={() => {
            router.push("/pedidos");
          }}
          className="flex gap-2 px-4 py-2 hover:bg-gray-300 rounded-xl p-2 w-full cursor-pointer justify-start items-center"
        >
          <ClipboardPlus
            size={estilosdoicone.size}
            color={estilosdoicone.color}
            strokeWidth={estilosdoicone.strokeWidth}
          />
          <p>Pedidos</p>
        </span>
      </div>

      <div>
        <span className="flex gap-2 px-4 py-2 hover:bg-gray-300 rounded-xl p-2 w-full cursor-pointer justify-start items-center">
          <LogOut
            size={estilosdoicone.size}
            color={estilosdoicone.color}
            strokeWidth={estilosdoicone.strokeWidth}
          />
          <p>Logout</p>
        </span>
      </div>
    </div>
  );
}
