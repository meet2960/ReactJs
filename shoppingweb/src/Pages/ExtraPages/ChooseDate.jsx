import React from "react";
import { useState } from "react";

const ChooseDate = () => {
  const getDate = sessionStorage.getItem("selectedDate");
  //   console.log("Selected Date", getDate);

  const handleDivClick = (divData) => {
    const div = document.createElement("div");
    div.innerHTML = divData;
    const text = div.textContent || div.innerText;
    sessionStorage.setItem("selectTime", text);
  };
  const getFormData = JSON.parse(sessionStorage.getItem("formData"));

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  //   console.log("Current Month", currentMonth);
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
    console.log("Selected Date", day);
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    sessionStorage.setItem("selectedDate", selectedDate.toDateString());
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
      const dayClassName = isSelected ? "selected" : "";

      days.push(
        <div
          key={`curr-${i}`}
          className={`day${dayClassName}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  console.log("Year is", getDate.substring(0, 3));
  const day = ("Year is", getDate.substring(0, 3));
  return (
    <div>
      <section id="choose-Date">
        <div className="container d-flex flex-column flex-md-row justify-content-evenly">
          <div className="mt-5  h-100 d-flex flex-column align-items-center">
            <h5 className="mb-3 fw-bolder justify-content-between">
              Choose A Date
            </h5>
            <div className="calendar">
              <div className="header">
                <button
                  id="previous"
                  type="button"
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
                <button
                  id="next"
                  type="button"
                  className="date-btn"
                  onClick={nextMonth}
                >
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
              <div className="days" id="calender">
                {renderDays()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseDate;
