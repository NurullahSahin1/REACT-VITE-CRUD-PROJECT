const FormatDate = (dateStr) => {
  const date = dateStr.split("/");
  return date[0] + " / " + date[1];
};
export default FormatDate;
