const moment = require("moment");

export function formatDate(date, format = "DD-MM-YYYY") {
    if (!date) return "";
    return moment(date).format(format);
}