import { twMerge } from "tailwind-merge";

type NavLinkProps = {
  text: string;
  href?: string;
  active?: string;
  onClick?: () => void;
};

const NavLink = ({ text, onClick }: NavLinkProps) => {
  return (
    <li
      onClick={onClick}
      className={twMerge(
        "group w-full cursor-pointer py-3 text-end font-oswald text-xl uppercase text-asphalt lg:w-fit lg:py-5 lg:text-4xl dark:text-white",
      )}
    >
      {text}
      <span
        className={twMerge(
          "transitional-all mt-2 hidden h-1 w-0 bg-amber-500 duration-300 ease-in-out group-hover:w-full lg:block",
        )}
      ></span>
    </li>
  );
};

export default NavLink;
