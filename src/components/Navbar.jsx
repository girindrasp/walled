import NavItems from "./NavItems";
import walledlogo from "../assets/Vector.png"

const menu = [
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "Transfer",
    link: "/transfer",
  },
  {
    title: "Top Up",
    link: "/topup",
  },
  {
    title: "Sign Out",
    link: "/signout",
  },
];

function Navbar() {
  return(
  <nav className="flex items-center w-screen justify-between bg-white py-4 px-8">
    <img src={walledlogo} />
    <div className="flex gap-x-8">
      <NavItems menu={menu} />
    </div>
  </nav>
  );
}

export default Navbar;
