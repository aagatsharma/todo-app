function NavBar({ login, setlogin }) {
  const showlogin = () => {
    setlogin(!login);
  };

  function setHome() {
    setlogin();
  }

  return (
    <div className="flex items-center justify-between bg-blue-400 p-5 text-xl border-b-[1px]">
      <div className="font-semibold text-3xl cursor-pointer" onClick={setHome}>
        TODO APP
      </div>

      <div>Hello, Guest</div>

      {login ? (
        <button className="btn" onClick={setHome}>
          Home
        </button>
      ) : (
        <button className="btn" onClick={showlogin}>
          Login
        </button>
      )}
    </div>
  );
}

export default NavBar;
