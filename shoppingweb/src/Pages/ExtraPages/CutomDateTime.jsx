import { useState } from "react";
import { NavLink } from "react-router-dom";

const CustomDateTime = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const prevMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
    );
  };
  const nextMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)
    );
  };
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const handleDateClick = (day) => {
    setSelectedDate(day);
  };
  const renderDays = () => {
    const daysInMonth = getDaysInMonth(
      currentMonth.getFullYear(),
      currentMonth.getMonth()
    );
    const firstDayOfWeek = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();
    const days = [];
    // Render empty cells for previous month's days
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`prev-${i}`} className="day empty"></div>);
    }
    // Render cells for current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = selectedDate === i;
      const dayClassName = isSelected ? "day selected" : "day";
      days.push(
        <div
          key={`curr-${i}`}
          className={dayClassName}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div>
      <div className="container-fluid p-0">
        <div className="position-relative">
          <div className="container d-flex flex-column flex-md-row justify-content-evenly">
            <div className="mt-5  h-100 d-flex flex-column align-items-center">
              <h5 className="mb-3 fw-bolder justify-content-between">
                Choose A Date
              </h5>
              <div className="calendar">
                <div className="header">
                  <button
                    id="previous"
                    className="date-btn"
                    onClick={prevMonth}
                  >
                    &#8249;
                  </button>
                  <div className="current-month">
                    {currentMonth.toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <button id="next" className="date-btn" onClick={nextMonth}>
                    &#8250;
                  </button>
                </div>
                <div className="weekdays">
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                </div>
                <div className="days">{renderDays()}</div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <h5 className="mb-4 fw-bolder">Pick a Time</h5>
              <div className="d-flex py-5  flex-column justify-content-center">
                <div className="d-flex flex-wrap justify-content-between">
                  <NavLink
                    to="/six"
                    className="time-bg text-dark text-decoration-none hov py-2 rounded-3 px-5"
                  >
                    09.15
                  </NavLink>
                  <NavLink
                    to="/six"
                    className="time-bg text-dark text-decoration-none hov px-5 rounded-3 py-2"
                  >
                    09:30
                  </NavLink>
                </div>
                <div className="d-flex mt-4 flex-wrap justify-content-between">
                  <NavLink
                    to="/six"
                    className="time-bg text-dark text-decoration-none hov py-2 rounded-3 px-5"
                  >
                    10:30
                  </NavLink>
                  <NavLink
                    to="/six"
                    className="time-bg text-dark text-decoration-none hov px-5 rounded-3 py-2"
                  >
                    11:00
                  </NavLink>
                </div>
                <div className="d-flex mt-4 flex-wrap justify-content-between">
                  <NavLink
                    to="/six"
                    className="time-bg text-dark text-decoration-none hov py-2 rounded-3 px-5"
                  >
                    11:30
                  </NavLink>
                  <NavLink
                    to="/six"
                    className="time-bg text-dark text-decoration-none hov px-5 rounded-3 py-2"
                  >
                    02:00
                  </NavLink>
                </div>
                <div className="mt-4">
                  <span>All Times are in Eastern Time - US & Canada</span>
                </div>
              </div>
            </div>
          </div>
          <section id="footer" className="mt-5">
            <hr className="opacity-100" />
            <div className="container-fluid  ps-0">
              <div className="row align-items-center justify-content-between">
                <div className="col-2 back-btn px-2 py-1 d-flex align-items-center rounded-2">
                  <div className="position-absolute desktop-left primary-bg rounded  py-1">
                    <a
                      href="./chooseDate.html"
                      className="d-flex px-3 text-dark text-decoration-none  align-items-center justify-content-center"
                    >
                      <img
                        src="back 1.png"
                        alt="back-logo"
                        className="img-fluid"
                      />
                      <span className="ms-2  fw-bold">Back</span>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-7 f-text  pt-2 fw-bold text-center  align-items-center d-flex justify-content-center">
                  <p className="text-center">
                    Copyright © 2022 Shosmile Orthodontics. All rights reserved.
                  </p>
                </div>
                <div className="col-md-2 col-lg-1 col-12 m-0 p-0 d-flex justify-content-center mb-0 align-items-center justify-content-md-end gap-3 gap-md-3 mt-2 mt-md-0">
                  <a href="https://www.facebook.com/">
                    <i className="fa-brands fa-facebook fa  text-dark"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram text-dark fa "></i>
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fa-brands fa-twitter text-dark fa "></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fa-brands fa-linkedin text-dark fa "></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CustomDateTime;
