"use client";

import Areautil from "../componentes/Areautil";
import { useState } from "react";

export default function Clientes() {
  const [mostraModal, setMostraModal] = useState(false);
  const [concluiu, setConcluiu] = useState(false);

  const clique = () => {
    setMostraModal(!mostraModal);
  };

  const concluido = () => {
    setMostraModal(!mostraModal);
    setConcluiu(true);
    setTimeout(() => {
      setConcluiu(false);
    }, 10000);
  };

  return (
    <Areautil titulo="Clientes">
      <p>Tela de Clientes</p>

      <div className="w-full flex justify-end">
        <input
          type="button"
          value="Novo Cliente"
          onClick={clique}
          className="px-4 py-2 rounded-md shadow-sm bg-red-500 text-white font-semibold cursor-pointer"
        />
      </div>

      {mostraModal && (
        <div className="absolute inset-0 z-10 w-screen h-screen bg-black/50 flex items-center justify-center">
          <div className="h-[25vh] rounded-lg shadow-md flex flex-col gap-2 p-4 bg-white">
            <h1>Titulo do card</h1>

            <div className="w-full">
              <input
                type="text"
                placeholder="Nome do Cliente"
                className="px-4 py-2 rounded-md shadow-sm outline-2 outline-red-500 text-black font-semibold cursor-pointer"
              />
            </div>

            <div className="flex w-full">
              <input
                type="button"
                value="Fechar"
                onClick={clique}
                className="px-4 py-2 rounded-md shadow-sm bg-red-500 text-white font-semibold cursor-pointer"
              />
              <input
                type="button"
                value="Concluir"
                onClick={concluido}
                className="px-4 py-2 rounded-md shadow-sm bg-green-500 text-black font-semibold cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {concluiu && (
        <div className="absolute inset-0 w-screen h-screen z-10 flex justify-end p-8">
          <div className="bg-gray-300 text-black p-4 h-fit flex gap-8 rounded-xl">
            <h1>Item enviado com sucesso!</h1>
            <input
              type="button"
              value="X"
              className="rounded-full bg-gray-700 text-white w-8"
            />
          </div>
        </div>
      )}
    </Areautil>
  );
}
