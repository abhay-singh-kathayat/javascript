//date formaate durection
const formateDurection = ms =>{
    if(ms<0) ms = -ms
    const time = {
        day:Math.floor(ms/86400000),
        hour:Math.floor(ms/3600000)%24,
        minutes:Math.floor(ms/60000)%60,
        second:Math.floor(ms/1000)%60,
        millisecond:Math.floor(ms)%1000
    };

    // return Object.entries(time).filter(val=>val[1]!==0)
    // .map(([key,val])=>`${val} ${key}${val!==1 ?'s':''}`)
    // .join(', ')


    //22 hours, 58 minutess, 54 seconds, 234 milliseconds

    // for (const [key, value] of Object.entries(time)) {
    //     if(value!==0){
    //      console.log((`${key}${value}`).toString().split(',').join(', '))
    //     }
    //   }


    //using foreach Loop
    // Object.entries(time).forEach(([key,value])=>{
    //     if(value!=0){
    //      console.log(`${value}${key}`);
    //     }
    // })
};



formateDurection(82734234);


//sleep function in JavaScript
const sleepSync = (ms) =>{
  const end = new Date().getTime()+ms;
  while(new Date().getTime()<end){
   // console.log("I love You")
  }
}


const printNumber = () =>{
    //console.log(1);
    sleepSync(1000);
    //console.log(2);
   // console.log(3);
}

printNumber();
// console.log(printNumber)

//Number of seconds to ISO format

const formatSeconds = s => {
    const [hour, minute, second, sign] =
      s > 0
        ? [s / 3600, (s / 60) % 60, s % 60, '']
        : [-s / 3600, (-s / 60) % 60, -s % 60, '-'];
  
    return (
      sign +
      [hour, minute, second]
        .map(v => `${Math.floor(v)}`.padStart(2, '0'))
        .join(':')
    );
  };

// console.log(formatSeconds(1000))



//generate date between two dates
const dateRangeGenerator = function* (start, end, step = 1) {
    let d = start;
    while (d < end) {
      yield new Date(d);
      d.setDate(d.getDate() + step);
    }
  };

  //console.log([...dateRangeGenerator(new Date('2021-06-01'), new Date('2099-06-04'))]);



  //Ios formate Timezone
  const toISOStringWithTimezone = date => {
    const tzOffset = -date.getTimezoneOffset();
    const diff = tzOffset >= 0 ? '+' : '-';
    const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
    return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      diff + pad(tzOffset / 60) +
      ':' + pad(tzOffset % 60);
  };
  toISOStringWithTimezone(new Date()); // '2020-10-06T20:43:33-04:00'



  //Count weekdays between two dates
  const countWeekDaysBetween = (startDate, endDate) =>
  Array
    .from({ length: (endDate - startDate) / (1000 * 3600 * 24) })
    .reduce(count => {
      if (startDate.getDay() % 6 !== 0) count++;
      startDate = new Date(startDate.setDate(startDate.getDate() + 1));
      return count;
    }, 0);

  console.log(countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 06, 2020')))


  //check date is valid
  const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());



  //getWeek day in date
  const addWeekDays = (startDate, count) =>
  Array.from({ length: count }).reduce(date => {
    date = new Date(date.setDate(date.getDate() + 1));
    if (date.getDay() % 6 === 0)
      date = new Date(date.setDate(date.getDate() + (date.getDay() / 6 + 1)));
    return date;
  }, startDate);

addWeekDays(new Date('Oct 09, 2020'), 5); // 'Oct 16, 2020'
addWeekDays(new Date('Oct 12, 2020'), 5); // 'Oct 19, 2020'


//colon time from date
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);



//get timediffrence
const quarterOfYear = (date = new Date()) => [
    Math.ceil((date.getMonth() + 1) / 3),
    date.getFullYear()
  ];
  
  quarterOfYear(new Date('07/10/2018')); // [ 3, 2018 ]
  quarterOfYear(); // [ 4, 2020 ]



  //max 
  const maxDate = (...dates) => new Date(Math.max(...dates));
const dates = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)


];
maxDate(...dates); // 2018-03-11T22:00:00.000Z


//get week of year

const weekOfYear = date => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    startOfYear.setDate(startOfYear.getDate() + (startOfYear.getDay() % 7));
    return Math.round((date - startOfYear) / (7 * 24 * 3600 * 1000));
  };
  weekOfYear(new Date('2021-06-18')); // 23



  //day name
  const dayName = (date, locale) =>
  date.toLocaleDateString(locale, { weekday: 'long' });
dayName(new Date()); // 'Saturday'
dayName(new Date('09/23/2020'), 'de-DE'); // 'Samstag'


//diffrence in months
const getMonthsDiffBetweenDates = (dateInitial, dateFinal) =>
  Math.max(
    (dateFinal.getFullYear() - dateInitial.getFullYear()) * 12 +
      dateFinal.getMonth() -
      dateInitial.getMonth(),
    0
  );
getMonthsDiffBetweenDates(new Date('2017-12-13'), new Date('2018-04-29')); 



//last date in month
const lastDateOfMonth = (date = new Date()) => {
    let d = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return d.toISOString().split('T')[0];
  };
  lastDateOfMonth(new Date('2015-08-11')); // '2015-08-30'


//get suffix
const getMeridiemSuffixOfInteger = num =>
  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
    ? 12 + 'pm'
    : num < 12
    ? (num % 12) + 'am'
    : (num % 12) + 'pm';
getMeridiemSuffixOfInteger(0); // '12am'
getMeridiemSuffixOfInteger(11); // '11am'
getMeridiemSuffixOfInteger(13); // '1pm'
getMeridiemSuffixOfInteger(25); // '1pm'





 