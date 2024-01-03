import { Button, Table } from "react-bootstrap";
import CalendarYearRow from "./CalendarYearRow";
import { useState } from "react";
import getCurrentYear from "../utils/getCurrentYear";

const CalendarTable = () => {
  const [showYears, setShowYears] = useState<number>(5);

  const handleNextYears = () => {
    setShowYears(showYears + 5);
  };

const yearRows = [];
  for (let i = 0; i < showYears; i++) {
    const year = getCurrentYear() + i;
    yearRows.push(<CalendarYearRow key={year} year={year} />);
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">Year</th>
            <th className="text-center">Non-working days</th>
            <th className="text-center">Overlapped holidays</th>
            <th className="text-center">Details</th>
          </tr>
        </thead>
        <tbody>{yearRows}</tbody>
      </Table>

      <Button variant="primary" style={{maxWidth: "90%", margin: "auto", marginBottom: "1rem"}} onClick={handleNextYears}>
        Next 5 years
      </Button>
    </>
  );
};

export default CalendarTable;
