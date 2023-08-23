/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
const numberOfEmployeesWhoMetTarget = (hours, target) => {
    let count = hours.filter((hour) => {return hour >= target}).length
    return count
};