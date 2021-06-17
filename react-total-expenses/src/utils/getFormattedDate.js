import moment from 'moment';

const getFormattedDate = (dateString, format = "DD/MM/YYYY") => {
  moment.updateLocale(moment.locale());
  return moment(dateString).format(format);
}

export default getFormattedDate;
