"use client";

//Hooks
import { useState } from "react";

//Components
export default function Login() {
  //Hook fica dentro de component
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loginData, setLoginData] = useState({
    usuario: "",
    senha: "",
  });

  //   const atualizaValor = (e: any, inputName: string) => {
  //     if (inputName === "email") {
  //       setEmail(e.target.value);
  //     } else {
  //       setSenha(e.target.value);
  //     }

  const atualizaValor = (e: any, inputName: string) => {
    if (inputName === "email") {
      setLoginData({
        usuario: e.target.value,
        senha: loginData.senha,
      });
    } else {
      setLoginData({
        usuario: loginData.usuario,
        senha: e.target.value,
      });
    }

    //console.log(e.target.value);
  };
  const entrar = () => {
    console.log(loginData);
  };
  return (
    <div className="w-[35vw] bg-gray-200 gap-8 flex flex-col p-8 rounded-lg shadow-xl">
      <h1 className="text-center text-3xl font-semibold">
        Bem vindo ao FrontEnd
      </h1>
      <p className=" text-center">
        Faça seu login e acesse os nossos conteúdos exclusivos para membros
      </p>

      <div id="loginInputs" className="w-ful flex flex-col gap-8 px-8">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">Email</h3>
          <input
            value={loginData.usuario}
            onChange={(e) => {
              atualizaValor(e, "email");
            }}
            type="email"
            placeholder="email@myemail.com"
            className="w-full p-2 rounded-lg text-blue-500 outline-blue-500 bg-white border-1 border-gray-200 font-semibold"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">Senha</h3>
          <input
            value={loginData.senha}
            onChange={(e) => {
              atualizaValor(e, "senha");
            }}
            type="password"
            placeholder="******"
            className="w-full p-2 rounded-lg text-blue-500 outline-blue-500 bg-white border-1 border-gray-200 font-semibold"
          />
        </div>

        <div className="flex flex-col gap-2 items-center w-full" id="botoes">
          <input
            type="submit"
            value="Enter"
            onClick={entrar}
            className="w-full p-2 rounded-lg bg-blue-400 text-white cursor-pointer font-semibold hover:bg-blue-500 transition-ease-in duration-200"
          />
          <p>
            Esqueceu a senha?{" "}
            <a href="#" className="hover:text-blue-500 hover:underline">
              Clique aqui{" "}
            </a>
            para recuperar a senha.
          </p>
        </div>
      </div>
    </div>
  );
}
