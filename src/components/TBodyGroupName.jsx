// eslint-disable-next-line react/prop-types
export default function TBodyGroupName({ group: group_name }) {
  return (
    <tr className="bg-white/5">
      <td className="p-5 text-sm md:text-xl" colSpan="4">
        {group_name}
      </td>
    </tr>
  );
}
