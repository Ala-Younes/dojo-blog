const Navbar = () => {
  return (
    <nav className="flex py-4 justify-between items-center border-b-[0.1rem] border-b-secondary ">
      <h1 className="text-2xl text-secondary font-bold">The Dojo Blog</h1>
      <div className="flex gap-6 ">
        <a
          className="hover:text-secondary transition-all duration-300"
          href="/"
        >
          Home
        </a>
        <a
          className="hover:text-secondary transition-a ll duration-300"
          href="/create"
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
