import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      id="logo"
      className="w-fit cursor-pointer overflow-hidden text-asphalt"
    >
      <h1 className="group flex items-baseline font-outfit text-3xl font-semibold sm:text-3xl lg:text-3xl xl:text-4xl">
        m
        <span className="w-full opacity-100 transition-all duration-300 group-hover:w-0 group-hover:opacity-0">
          arked
        </span>
        <div className="ml-0.5 flex h-2 w-2 shrink-0 rounded-full bg-amber-500"></div>
      </h1>
    </Link>
  );
};

export default Logo;
