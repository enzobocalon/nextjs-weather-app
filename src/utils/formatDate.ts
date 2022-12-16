const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export const formatDate = (currentDate: string) => {
  const date = new Date(currentDate);

  const weekDay = days[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${weekDay}, ${day} ${month}`
};
