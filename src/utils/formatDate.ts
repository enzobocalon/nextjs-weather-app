const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export const formatDate = (currentDate: string, shouldShowTomorrow = false) => {
  const date = new Date(currentDate);

  const weekDay = days[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();

  if (shouldShowTomorrow) {
    const tomorrow = new Date().getDate() + 1;

    if (date.getDate() === tomorrow) {
      return 'Tomorrow'
    }
  }

  return `${weekDay}, ${day} ${month}`
};
