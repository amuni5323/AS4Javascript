

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 === 0) {
            return true;
        } else if (year % 100 === 0) {
            return false;
        }
        return true;
    } else {
        return false;
    }
}
let year = 2024;
console.log(year + " is a leap year: " + isLeapYear(year));
