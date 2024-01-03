import { useParams } from "react-router-dom";
import getYearDetails from "../utils/getYearDetails";
import { Col, Table } from "react-bootstrap";

const YearDetails = () => {
  const { calendarYear } = useParams();
  const yearParameter = calendarYear ? parseInt(calendarYear) : 0;
  const yearDetails = getYearDetails(yearParameter, true);

  return (
    <>
      <Col className="text-center align-middle">
        <h4>{calendarYear} year</h4>
      </Col>
      <Col className="text-center align-middle">
        <h4>Non working days: {yearDetails.nonWorkingDays}</h4>
      </Col>
      <Col className="text-center align-middle">
        <h4>Overlapped holidays: {yearDetails.overlappedHolidays}</h4>
      </Col>

      <Table striped bordered hover
      style={{margin: "2rem auto", tableLayout: "fixed"}}>
        <thead>
          <tr>
          <th className="text-center" style={{ width: '50%' }}>Holiday name</th>
          <th className="text-center" style={{ width: '50%' }}>Holiday date</th>
          </tr>
        </thead>
        <tbody>
          {yearDetails.yearHolidays &&
            yearDetails.yearHolidays.map((holiday) => (
              <tr key={holiday.getName()}>
                <td
                  className={`${
                    holiday.getDate().getDay() !== 0 &&
                    holiday.getDate().getDay() !== 6
                      ? 'working-holiday'
                      : 'non-working-holiday'
                  } text-center align-middle`}
                >{holiday.getName()}</td>
                <td className="text-center align-middle">{holiday.getShortDate()}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default YearDetails;
