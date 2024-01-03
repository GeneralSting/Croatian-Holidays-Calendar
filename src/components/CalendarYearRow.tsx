import { Link } from "react-router-dom";
import getYearDetails from "../utils/getYearDetails";
import { Button } from "react-bootstrap";

const CalendarYearRow: React.FC<{ year: number }> = ({ year }) => {
  const yearDetails = getYearDetails(year);

  return (
    <>
      <tr>
        <td className="text-center align-middle">{year}</td>
        <td className="text-center align-middle">
          {yearDetails.nonWorkingDays}
        </td>
        <td className="text-center align-middle">{yearDetails.overlappedHolidays}</td>
        <td className="text-center align-middle">
          <Link
            to={year.toString()}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button variant="secondary">Details</Button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default CalendarYearRow;
