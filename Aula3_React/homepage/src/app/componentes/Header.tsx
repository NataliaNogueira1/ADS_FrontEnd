"use client";
import Button from "@/app/componentes/ui/Button";

export default function Header() {
  return (
    <div className="w-screen h-[10vh] border-b-2 border-gray-200 flex items-center justify-around">
      <div className="flex gap-3">
        <h1>MyLogo</h1>
        <h2 className="font-bold">FrontEND</h2>
      </div>

      <div className="flex gap-3">
        <p className="cursor-pointer">Sobre</p>
        <p className="cursor-pointer">Produtos</p>
        <p className="cursor-pointer">Onde estamos</p>
        <p className="cursor-pointer">Contato</p>
      </div>
      <Button
        name="Login"
        style="dark"
        click={() => {
          alert("Login feito com sucesso!");
        }}
      />
    </div>
  );
}
