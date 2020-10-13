day = 3;
month = "Aug";
year = 2013;

step1 = year % 100;
step2 = parseInt(step1 / 4);
step3 = step2 + step1;
if (month == "Jan") {
    step5 = day + step1;
} else {
    switch (month) {
        case "Feb":
            step4 = 3; break;
        case "Mar":
            step4 = 3; break;
        case "Apr":
            step4 = 6; break;
        case "May":
            step4 = 1; break;
        case "Jun":
            step4 = 4; break;
        case "Jul":
            step4 = 6; break;
        case "Aug":
            step4 = 2; break;
        case "Sep":
            step4 = 5; break;
        case "Oct":
            step4 = 0; break;
        case "Nov":
            step4 = 3; break;
        case "Dec":
            step4 = 5; break;
    }
    step6 = step4 + step3;
    step7 = step6 + day;
}
step8 = (typeof step5 !== 'undefined') ? step5 : step7;

console.log(step7);