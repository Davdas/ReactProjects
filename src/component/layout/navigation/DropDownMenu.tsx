import navItems from "./nav-items.json";

interface DropDownMenuProps {
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDownMenu = ({ setDropDown }: DropDownMenuProps) => {
  return (
    <>
      <div
        className="bg-slate-200 w-[150px] text-center cursor-pointer font-semibold absolute top-[4.8rem] translate-x-16 rounded-md"
        onMouseEnter={() => setDropDown(true)}
        onMouseLeave={() => setDropDown(false)}
      >
        <div className="bg-slate-200 w-4 h-4 rotate-45 absolute top-[-5px] left-2" />
        <ul className="text-blue-800">
          {navItems.map((item) =>
            item.sub
              ? item.sub.map((ele) => {
                  return (
                    <div className="">
                      <ul>
                        <li
                          key={ele.nome}
                          className="py-4 hover:text-white bold rounded-md"
                        >
                          {ele.nome}
                        </li>
                      </ul>
                    </div>
                  );
                })
              : ""
          )}
        </ul>
      </div>
    </>
  );
};

export default DropDownMenu;
