import Card from "./ui/Card";

export default function Button() {
  return (
    <div className="p-4 w-screen bg-none flex items-center justify-center">
      <Card titulo="Meus carros" descricao="toyota" />
      <Card titulo="Meus carros" descricao="jillux" />
    </div>
  );
}
