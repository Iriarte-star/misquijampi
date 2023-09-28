import {CgBee} from "react-icons/cg";
const Footer = () => {
  return (
    <div className="max-w-[1140px] w-full py-8 m-auto border-t-4">
      <div className="flex items-center m-auto justify-center">
        <CgBee size={30} className="mr-2 text-yellow-300"/>
        <h1 className="text-xl font-bold text-white" >MiskiJampi</h1>
      </div>
    </div>
  );
};

export default Footer;