import CalendarYears from "../pages/CalendarYears";
import PageNotFound from "../pages/PageNotFound";
import YearDetails from "../pages/YearDetails";
import { AppRoute } from "../types/AppRoute";

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <CalendarYears />,
  },
  {
    path: '/:calendarYear',
    element: <YearDetails />
  }, 
  {
    path: '*',
    element: <PageNotFound />
  }
];

export default appRoutes;