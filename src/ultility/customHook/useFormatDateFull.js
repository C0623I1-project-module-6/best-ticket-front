export const useFormatDateFull = (data) => {
  let date = new Date(data)
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return "Ngày " + day + " tháng " + month + " năm " + year + " " + " lúc " + hour + ":" + minute
}
