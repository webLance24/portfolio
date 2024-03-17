import logo from "../../public/img/weblance-logo.png";
import instagram from "../../public/img/social/instagram-white.png";
import facebook from "../../public/img/social/facebook-white.png";
import linkedin from "../../public/img/social/linkedin-white.png";
import github from "../../public/img/social/github-white.png";
import copyright from "../../public/img/copyright.png";

function Footer() {
  return (
    <>
      <div className="bg-[#151515] px-[12px] pt-[60px] pb-[30px] flex justify-center items-center flex-col">
        <img className="w-[65px]" src={logo} alt="" />
        <p className="text-[#D9E5F0]">Georgia, Batumi</p>
        <div className="mt-[15px]">
          <p className="text-[#D9E5F0] mr-auto font-light">
            <span className="font-bold">Phone:</span> +995 577 22 48 31
          </p>
          <p className="text-[#D9E5F0] font-light">
            <span className="font-bold">Email:</span> weblance17@gmail.com
          </p>
        </div>
        {/* here is footer logo images */}
        <div className="flex justify-center items-center gap-[5px] mt-[15px]">
          {/* instagram section */}
          <div>
            <a href="https://www.instagram.com/weblance17/">
              <div className="w-[36px] h-[36px] bg-[#292929] rounded-[5px] flex justify-center items-center hover:bg-[#FFC451] cursor-pointer">
                <img className="w-[22px] h-[22px]" src={instagram} alt="" />
              </div>
            </a>
          </div>
          {/* facebook section */}
          <div>
            <a href="https://www.facebook.com/profile.php?id=61556147382634">
              <div className="w-[36px] h-[36px] bg-[#292929] rounded-[5px] flex justify-center items-center hover:bg-[#FFC451] cursor-pointer">
                <img className="w-[22px] h-[22px]" src={facebook} alt="" />
              </div>
            </a>
          </div>
          {/* linkedin section */}
          <div>
            <a href="https://www.linkedin.com/in/web-lance-74496a2b4/">
              <div className="w-[36px] h-[36px] bg-[#292929] rounded-[5px] flex justify-center items-center hover:bg-[#FFC451] cursor-pointer">
                <img className="w-[22px] h-[22px]" src={linkedin} alt="" />
              </div>
            </a>
          </div>
          {/* github section */}
          <div>
            <a href="https://github.com/webLance24">
              <div className="w-[36px] h-[36px] bg-[#292929] rounded-[5px] flex justify-center items-center hover:bg-[#FFC451] cursor-pointer">
                <img className="w-[22px] h-[22px]" src={github} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* copyright divs */}
      <div className="bg-[black] w-[100%] px-[12px] py-[30px] flex justify-center items-center flex-col">
        <div className="flex justify-center items-center gap-[3px]">
          <img className="w-[15px] h-[15px]" src={copyright} alt="" />
          <p className="text-[white] text-[14px] font-light tracking-widest">
            Copyright wL All Right Reserved
          </p>
        </div>
        <p className="text-[white] text-[14px] font-light tracking-widest pt-[10px]">
          Designed by <span className="text-[#FFC451]">webLance</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
