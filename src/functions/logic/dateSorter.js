import { compareAsc } from 'date-fns';
function dates(date){ 
  const dates = [
  ]
  dates.push(new Date(date));
  let currentDate = dates.sort(compareAsc);
  return currentDate;
}
export{dates}
