import moment from "moment";
const formatDate = (timeObj) => {
  let date = `${timeObj.getFullYear()}-${
    timeObj.getMonth() + 1
  }-${timeObj.getDate()}`;
  let time = `${timeObj.getHours()}:${timeObj.getMinutes()}-${timeObj.getSeconds()}`;
  return `${date} ${time}`;
};

const generateDate = () => {
  let gapExpire = Math.floor(Math.random() * 29) + 1;
  let today = new Date();
  let expireDay = moment(today).add(gapExpire, "d").toDate();
  return {
    today: formatDate(today),
    expireDay: formatDate(expireDay),
  };
};

export default generateDate;
