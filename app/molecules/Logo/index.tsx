import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      id="logo"
      className="text-asphalt w-fit cursor-pointer overflow-hidden"
    >
      <h1 className="font-outfit group flex items-baseline text-3xl font-semibold sm:text-3xl lg:text-2xl lg:text-3xl xl:text-4xl">
        m
        <span className="w-0 opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100">
          arked
        </span>
        <div className="ml-0.5 flex h-2 w-2 shrink-0 rounded-full bg-amber-500"></div>
      </h1>
    </Link>
  );
};

export default Logo;
