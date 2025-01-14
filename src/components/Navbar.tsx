const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/vite.svg" className="h-8" alt="Vite logo" />
          <img src="/src/assets/react.svg" className="h-8" alt="React logo" />
        </div>
        <h1 className="text-xl font-bold">Vite + React</h1>
      </div>
    </nav>
  );
};

export default Navbar;
