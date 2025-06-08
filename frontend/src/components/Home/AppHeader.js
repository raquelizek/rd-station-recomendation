import Logo from "./Logo";

function AppHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex items-center">
        <Logo />
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#1CBFDA] to-black bg-clip-text text-transparent">
            RD Station Intelligence
          </h1>
          <p className="text-sm text-gray-500">
            Recomendador inteligente de produtos
          </p>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;