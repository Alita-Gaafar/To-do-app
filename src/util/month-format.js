export function monthFormat(month) {
  const RealMonth = month + 1;

  if (RealMonth < 10) {
    return `0${RealMonth}`;
  }

  return RealMonth;
}
