import { parse } from 'date-fns';
import moment from 'moment-timezone';

export const convertArray = (inputArray) => {
  const resultObject = {};

  inputArray.forEach((item) => {
    const include = item[0] !== 'yes';
    const date = item[1];
    const time = item[2];

    if (include) {
      if (!resultObject[date]) {
        resultObject[date] = { date, time: [time] };
      } else {
        resultObject[date].time.push(time);
      }
    }
  });

  const resultArray = Object.values(resultObject);

  return resultArray;
};

export const getRow = (rawSchedule, targetDate, targetTime) => {
  const foundIndex = rawSchedule.findIndex((item) => {
    const date = item[1];
    const time = item[2];
    return date === targetDate && time === targetTime;
  });

  return foundIndex;
};

export const convertTime = (time, day, sourceTimeZone, timeZone) => {
  const [startTime, endTime] = time.split('-');

  const sourceStartDateTimeString = `${day} ${startTime}`;
  const sourceEndDateTimeString = `${day} ${endTime}`;

  const sourceStartMoment = moment.tz(sourceStartDateTimeString, 'DD.MM.YYYY HH:mm', sourceTimeZone);
  const sourceEndMoment = moment.tz(sourceEndDateTimeString, 'DD.MM.YYYY HH:mm', sourceTimeZone);

  const targetStartMoment = sourceStartMoment.clone().tz(timeZone);
  const targetEndMoment = sourceEndMoment.clone().tz(timeZone);

  return [
    targetStartMoment.format('DD.MM.YYYY'),
    `${targetStartMoment.format('HH:mm')}-${targetEndMoment.format('HH:mm')}`,
  ];
};

export const getAvailableTime = (schedule) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const currentDateTime = new Date(new Date().toLocaleString('en-US', { timeZone: timeZone }));
  currentDateTime.setHours(0, 0, 0, 0);
  const futureDays = schedule.filter((day) => parse(day.date, 'dd.MM.yyyy', new Date()) >= currentDateTime);

  const availableTime = futureDays.map((day) => {
    const targetDate = parse(day.date, 'dd.MM.yyyy', new Date());
    if (targetDate.getTime() === currentDateTime.getTime()) {
      const options = { timeZone: timeZone, hour12: false, hour: 'numeric' };
      let currentHour = Number(new Date().toLocaleString('en-US', options));
      if (currentHour === 24) {
        currentHour = 0;
      }
      const availableTime = day.time.filter((time) => Number(time.slice(0, 2)) > currentHour);

      return { date: day.date, time: availableTime };
    }
    return day;
  });

  const finalSchedule = availableTime.filter((day) => day.time.length !== 0);

  return finalSchedule;
};
