import { StudentData } from "../database";
import TBodyGroupName from "./TBodyGroupName";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function StudentTable() {
  const classOne = StudentData.filter((data) => data.class === "one");
  const classTwo = StudentData.filter((data) => data.class === "two");
  const classThree = StudentData.filter((data) => data.class === "three");
  return (
    <table className="w-full">
      <TableHead />
      <tbody>
        <TBodyGroupName group="Class One" />
        {classOne.map((student) => (
          <TableRow
            key={student.id}
            id={student.id}
            name={student.name}
            percentage={student.percentage}
            scores={student.scores}
            stdClass={student.class}
          />
        ))}

        <TBodyGroupName group="Class Two" />
        {classTwo.map((student) => (
          <TableRow
            key={student.id}
            id={student.id}
            name={student.name}
            percentage={student.percentage}
            scores={student.scores}
            stdClass={student.class}
          />
        ))}

        <TBodyGroupName group="Class Three" />
        {classThree.map((student) => (
          <TableRow
            key={student.id}
            id={student.id}
            name={student.name}
            percentage={student.percentage}
            scores={student.scores}
            stdClass={student.class}
          />
        ))}
      </tbody>
    </table>
  );
}
