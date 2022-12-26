import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import calendar from "dayjs/plugin/calendar";

import "dayjs/locale/fr";

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(calendar);

export const FORMATS = {
  DMY: "DD MMM YYYY",
  DMY_HYPHEN: "DD-MM-YYYY",
  YMD_HYPHEN: "YYYY-MM-DD",
  DATE_SLASHED: "DD/MM/YYYY",
  DATETIME_SLASHED: "DD/MM/YYYY HH:mm",
  DEFAULT: "L LT",
  DEFAULT_BREAK: "L\nLT",
  API: "YYYY-MM-DD[T]HH:mm:ssZ",
  API_SPACED: "YYYY-MM-DD HH:mm:ss",
  DMY_WORD: "DD,MMMM YYYY [at] h:mm A",
};
export function formatDate(date, format?) {
  return dayjs(date).format(format || FORMATS.DEFAULT);
}
/* Use this if the Date format returned by the API is not properly formed into FORMATS.API format */
export function toISO8601(dateStr: string, fromFormat) {
  return dayjs(dateStr, fromFormat);
}

export function fromNow(date) {
  return dayjs(date).fromNow();
}

export function fromNowFromUtc(date) {
  return dayjs.utc(date, FORMATS.API_SPACED).fromNow();
}

export function substractDate(date, intervel, unit, format) {
  return dayjs(date)
    .subtract(intervel, unit)
    .format(format || FORMATS.DEFAULT);
}

export function addDate(date, interval, unit, format) {
  return dayjs(date)
    .add(interval, unit)
    .format(format || FORMATS.DEFAULT);
}
