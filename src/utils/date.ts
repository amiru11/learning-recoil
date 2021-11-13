export const formatDate = (date: string, format?: string) => {
  const tempDate = new Date(date);
  const year = tempDate.getFullYear();
  const month = tempDate.getMonth() + 1;
  const day = tempDate.getDate();
  let newMonth = `${month}`;
  let newDay = `${day}`;

  if (month < 10) newMonth = `0${newMonth}`;
  if (day < 10) newDay = `0${newDay}`;

  const result = format
    ? `${year}${format}${newMonth}${newDay}`
    : `${year}년 ${newMonth}월${newDay}일`;

  return result;
};
