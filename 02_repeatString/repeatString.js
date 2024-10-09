const repeatString = function(string, num) {
    //Initializing the result
    let result = ''

    //If num is negative than we return an error
    if (num < 0) {
        return "ERROR"
    }

    //Repeat the string num number of times
    for (i = 0 ; i < num; i++) {
        result += string;
    }

    // Returning the final result
    return result;
};




// Do not edit below this line
module.exports = repeatString;
