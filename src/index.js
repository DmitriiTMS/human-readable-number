module.exports = function toReadable (number) {

    const arrNumberMin = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const arrNumberMax = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const numberHundred = "hundred";
    let num = String(number).padStart(3, "0");
    let result = "";
    if (+(num[0]) > 0) {
        result += `${arrNumberMin[+(num[0])]} ${numberHundred}`;
    }
    if (+(num[1]) !== 0) {
        if (+(num[1]) === 1) {
            return (result += ` ${arrNumberMin[+(num.slice(1))]}`).trim();
        } else {
            result += ` ${arrNumberMax[+(num[1]) - 1]}`;
        }
    }
    if (+(num[2]) > 0) {
        result += ` ${arrNumberMin[+(num[2])]}`;
    }
    if (number === 0) {
        return `${arrNumberMin[0]}`;
    }

    return result.trim();
}
