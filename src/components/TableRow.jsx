import AvatarImg from "../assets/avatar.png";
import GithubImg from "../assets/github.png";
import ProfileImg from "../assets/profile-pic.png";
export default function TableRow(props) {
  // eslint-disable-next-line react/prop-types
  const { id, name, scores, percentage, stdClass } = props;
  let avatar = AvatarImg;
  if (stdClass === "two") {
    avatar = ProfileImg;
  } else if (stdClass === "three") {
    avatar = GithubImg;
  }

  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{id}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={avatar}
            width="32"
            height="32"
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{scores}</td>
      <td className="p-5 text-sm md:text-xl text-center">{percentage}</td>
    </tr>
  );
}
