import { compareAsc } from 'date-fns';
function dates(date){ 
  const dates = [
  ]
  dates.push(new Date(date));
  let currentDate = dates.sort(compareAsc);
  let splitDates = ""+currentDate;
  return splitDates.split(" ").slice(0,3).join(" ")
}
export{dates}
