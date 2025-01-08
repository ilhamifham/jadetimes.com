const TodayDate = ({ className }: { className: string }) => {
  function getTodayDate() {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
  return <div className={className}>{getTodayDate()}</div>;
};

export default TodayDate;
