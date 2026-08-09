export const saveEvent = (event) => {
  const data = JSON.parse(localStorage.getItem("meetingReports") || "{}");

  if (!data[event.meetingId]) {
    data[event.meetingId] = [];
  }

  data[event.meetingId].push(event);

  localStorage.setItem("meetingReports", JSON.stringify(data));
};

export const getReport = (meetingId) => {
  const data = JSON.parse(localStorage.getItem("meetingReports") || "{}");
  return data[meetingId] || [];
};
