import { useContext } from "react";
import { MyContext } from "./Context";

function Hamburger() {
  const context = useContext(MyContext);
  const { menu, setMenu, selected, setSelected }: any = context;

  return (
    <>
      {menu && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-70"
            onClick={() => {
              setMenu(!menu);
            }}
          ></div>
          <div className="pl-[8px] pr-[13px] pt-[8px] pb-[36px] flex absolute right-0 z-10 flex-row-reverse">
            <div className="bg-[#FFFFFF] rounded-[10px] h-[590px] w-[350px]">
              <div className="pt-[10px]">
                <div
                  className="px-[15px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                  onClick={() => setSelected("Home")}
                  style={
                    selected === "Home" ? { backgroundColor: "#FFC451" } : {}
                  }
                >
                  <p className="text-[17px]">Home</p>
                </div>
                <div
                  className="px-[15px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                  onClick={() => setSelected("About")}
                  style={
                    selected === "About" ? { backgroundColor: "#FFC451" } : {}
                  }
                >
                  <p className="text-[17px]">About</p>
                </div>
                <div
                  className="px-[15px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                  onClick={() => setSelected("Services")}
                  style={
                    selected === "Services"
                      ? { backgroundColor: "#FFC451" }
                      : {}
                  }
                >
                  <p className="text-[17px]">Services</p>
                </div>
                <div
                  className="px-[15px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                  onClick={() => setSelected("Projects")}
                  style={
                    selected === "Projects"
                      ? { backgroundColor: "#FFC451" }
                      : {}
                  }
                >
                  <p className="text-[17px]">Projects</p>
                </div>
                <div
                  className="px-[15px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                  onClick={() => setSelected("Team")}
                  style={
                    selected === "Team" ? { backgroundColor: "#FFC451" } : {}
                  }
                >
                  <p className="text-[17px]">Team</p>
                </div>
                <div
                  className="px-[15px] py-[20px] hover:bg-[#FFC451] duration-300 ease-in-out font-normal h-[42px] flex items-center cursor-pointer"
                  onClick={() => setSelected("Contact")}
                  style={
                    selected === "Contact" ? { backgroundColor: "#FFC451" } : {}
                  }
                >
                  <p className="text-[17px]">Contact</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Hamburger;