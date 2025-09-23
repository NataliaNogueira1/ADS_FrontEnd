export default function Login() {
  return (
    <div className="w-[35vw] h-[80vh] bg-gray-200 gap-[5vh] flex flex-col p-8 rounded-lg shadow-xl">
      <h1 className="text-3xl font-semibold">Bem-vindo ao Front-End</h1>
      <p>Faça seu login e acesse os nossos conteúdos exclusivos para membros</p>

      <div id="loginInputs" className="w-full flex flex-col gap-8 px-8">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">E-mail</h3>
          <input
            type="email"
            placeholder="email@myemail.com"
            className="w-full p-2 rounded-lg text-blue-500 outline-blue-500 bg-white border-1 border-gray-200 font-semibold"
          />
        </div>
        <div>
          <h3>Senha</h3>
          <input
            type="password"
            placeholder="********"
            className="w-full p-2 rounded-lg text-blue-500 outline-blue-500 bg-white border-1 border-gray-200 font-semibold"
          />
        </div>
      </div>

      <div id="botoes" className="flex flex-col gap-2 px-8">
        <input
          type="submit"
          value="entrar"
          className="p-2 rounded-lg bg-blue-400 text-white cursor-pointer font-semibold hover:bg-blue-500 transition-ease-in duration-200"
        />
        <p>
          Esqueceu sua senha?{" "}
          <a href="#" className="hover:text-blue-500">
            Clique aqui
          </a>{" "}
          para recuperar.
        </p>
      </div>
    </div>
  );
}
