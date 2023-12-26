import React, { useEffect, useState } from 'react';
import { format, startOfWeek, endOfWeek, addDays, parse } from 'date-fns';
import './Calendar.scss';

const Calendar = ({ callTime, selectedDay, setSelectedDay, selectedTime, setSelectedTime }) => {
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(parse(callTime[0].date, 'dd.MM.yyyy', new Date()));

  useEffect(() => {
    const start = startOfWeek(currentDate, { weekStartsOn: 1 });
    const end = endOfWeek(currentDate, { weekStartsOn: 1 });

    const weekDays = [];
    let day = start;

    while (day <= end) {
      weekDays.push(day);
      day = addDays(day, 1);
    }

    setDays(weekDays);
  }, [currentDate]);

  const goToPreviousWeek = () => {
    const previousWeekEndDate = endOfWeek(addDays(currentDate, -7), { weekStartsOn: 1 });
    if (previousWeekEndDate < new Date().setHours(0, 0, 0, 0)) {
      return;
    }
    setCurrentDate(addDays(currentDate, -7));
  };

  const goToNextWeek = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  const findCallTime = (day) => callTime.find((callDay) => callDay.date === day.toLocaleDateString());

  const handleDayClick = (day) => {
    if (day >= new Date().setHours(0, 0, 0, 0) && findCallTime(day)) {
      setSelectedDay(day.toLocaleDateString());
      setSelectedTime(findCallTime(day).time[0]);
      setCurrentDate(day);
    }
  };

  const handleTimeClick = (time, day) => {
    if (day >= new Date().setHours(0, 0, 0, 0)) {
      setSelectedDay(day.toLocaleDateString());
      setSelectedTime(time);
    }
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <svg
          onClick={goToPreviousWeek}
          className={`calendar__arrow ${
            endOfWeek(addDays(currentDate, -7), { weekStartsOn: 1 }) < new Date().setHours(0, 0, 0, 0)
              ? 'calendar__arrow_unactive'
              : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0677 13.6561C10.7402 13.9705 10.2229 13.9705 9.89539 13.6561L4 7.99653L9.89538 2.337C10.2229 2.02259 10.7402 2.02259 11.0677 2.337C11.4147 2.67011 11.4147 3.22505 11.0677 3.55815L6.44434 7.99653L11.0677 12.4349C11.4147 12.768 11.4147 13.3229 11.0677 13.6561Z"
            fill="#284657"
          />
        </svg>
        <span className="calendar__period">
          {days.length !== 0 &&
            `${format(days[0], 'd')}-${format(days[6], 'd')} ${
              format(days[0], 'MMMM') === format(days[6], 'MMMM')
                ? format(days[0], 'MMMM').toLowerCase().slice(0, 3)
                : `${format(days[0], 'MMMM').toLowerCase().slice(0, 3)} / ${format(days[6], 'MMMM')
                    .toLowerCase()
                    .slice(0, 3)}`
            }`}
        </span>
        <svg
          onClick={goToNextWeek}
          className="calendar__arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.93232 13.6561C5.25984 13.9705 5.7771 13.9705 6.10461 13.6561L12 7.99653L6.10462 2.337C5.7771 2.02259 5.25984 2.02259 4.93232 2.337C4.58533 2.67011 4.58533 3.22505 4.93232 3.55815L9.55566 7.99653L4.93232 12.4349C4.58533 12.768 4.58533 13.3229 4.93232 13.6561Z"
            fill="#284657"
          />
        </svg>
      </div>
      <div className="calendar__days">
        {days.map((day, index) => (
          <div className="calendar__block" key={index}>
            <div
              className={`calendar__day ${index === 5 || index === 6 ? 'calendar__day_weekend' : ''} ${
                selectedDay === day.toLocaleDateString() ? 'calendar__day_selected' : ''
              } ${findCallTime(day) ? '' : 'calendar__day_unavailable'}`}
              onClick={() => handleDayClick(day)}
            >
              <span className="calendar__week-day">{format(day, 'EEE')}</span>
              <span className="calendar__day-number">{format(day, 'd')}</span>
            </div>
            <div className="calendar__times">
              {findCallTime(day) ? (
                findCallTime(day).time.map((time, index) => (
                  <div
                    key={index}
                    onClick={() => handleTimeClick(time, day)}
                    className={`calendar__time ${
                      selectedTime === time && day.toLocaleDateString() === selectedDay ? 'calendar__time_selected' : ''
                    }`}
                  >
                    {time}
                  </div>
                ))
              ) : (
                <div className="calendar__time calendar__time_empty">no time</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
