"use client";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function HeroSection() {
  return (
    <div className="p-4 w-screen gap-2 bg-none flex items-center justify-center">
      <Card
        titulo="Meus perfis"
        descricao="Confira todos os seus perfis abaixo"
      >
        <h4>Eu sou um componente filho do card 1</h4>
        <Button
          name="Ver mais"
          style="light"
          click={() => {
            alert("Redirecionando para meus perfis");
          }}
        />
      </Card>
      <Card
        titulo="Meus carros"
        descricao="Confira todos os seus carros abaixo"
      >
        <h4>Eu sou um componente filho do card 2</h4>
        <Button
          name="Ver mais"
          style="light"
          click={() => {
            alert("Redirecionando para meus carros");
          }}
        />
      </Card>
    </div>
  );
}
