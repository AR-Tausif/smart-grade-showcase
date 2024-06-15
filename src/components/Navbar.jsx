import LWSLogo from "../assets/lws-logo-en.svg";
export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center p-4 gap-x-6">
        <div className="">
          <img src={LWSLogo} alt="Learn With Sumit Logo" />
        </div>
        <button className="px-5 py-2 bg-[#172227] rounded-[44px]">
          Get Admission
        </button>
      </div>
    </nav>
  );
}
