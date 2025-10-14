"use client";
//regra de negócio
interface ICard {
  titulo: string;
  descricao: string;
  children?: React.ReactNode;
}

export default function Card({ titulo, descricao, children }: ICard) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg w-[30vw] h-[50vh]">
      <h1>{titulo}</h1>
      <p>{descricao}</p>
      {children}
    </div>
  );
}
