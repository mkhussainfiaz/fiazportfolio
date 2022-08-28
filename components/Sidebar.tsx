import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiSocialGithubCircular } from "react-icons/ti";
import { MdDownload, MdOutlineMail, MdOutlineAddIcCall, MdOutlineLocationOn } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      <Image
        src="/images/user.jpg"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="200px"
        width="200px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="mt-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Fiaz</span> Hussain
      </h3>
      <p className="text-2xl">
        Web Developer
      </p>

      {/* Resume */}
      <div
        className="py-1 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <a
          href="https://drive.google.com/file/d/1_KWapfKirfKKyzQ5l2c-NRArGqyKkSEo/view?usp=sharing"
          download="https://drive.google.com/file/d/1_KWapfKirfKKyzQ5l2c-NRArGqyKkSEo/view?usp=sharing"
          target="_blank"
          className="flex items-center justify-center"
        >
          <MdDownload className="w-6 h-6" />
          <span className="ml-5">Download Resume</span>
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <h3 className="text-xl font-medium tracking-wider">
          CONTACT
        </h3>
        <div className="flex items-center mt-5">
          <MdOutlineAddIcCall className="mx-5" /> <span>+92 308 1179486 </span>
        </div>

        <div className="flex items-center mt-5">
          <MdOutlineMail className="mx-5" /> <span>mlkhussainfiaz@gmail.com </span>
        </div>

        <div className="flex items-center mt-5">
          <MdOutlineLocationOn className="mx-5" /> <span>Lahore, Punjab, Pakistan </span>
        </div>
      </div>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.linkedin.com/in/mlkhussainfiaz/" target="_blank">
          <TiSocialLinkedinCircular className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://twitter.com/mlkhussainfiaz" target="_blank" >
          <TiSocialTwitterCircular className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/mkhussainfiaz/" target="_blank">
          <TiSocialGithubCircular className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Languages */}
      <div
        className="py-4 mt-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <h3 className="text-xl font-medium tracking-wider">
          LANGUAGES
        </h3>
        <div className="flex justify-between  mt-5 mx-5">
          <p>English</p>
          <p>Native</p>
        </div>

        <div className="flex justify-between  mt-5 mx-5">
          <p>Urdu</p>
          <p>Native</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
