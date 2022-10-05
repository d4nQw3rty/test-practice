
 class Operation {
    //This function will count the chars of a string.

    static stringCounter(string) {
        if (string.length > 0 && string.length <= 10) {
            return string.length;       
    }}

    //This function will reverse a string.

    static stringReverse(string) {
        if (string.length > 0 && string.length <= 10) {
            return string.split('').reverse().join('');      
        }
    }

    //This function will capitalize the first letter of a string.
    static stringCapitalize(string) {
        if (string.length > 0 && string.length <= 10) {
            return string.charAt(0).toUpperCase() + string.slice(1);      
        }
    }
}
module.exports = Operation;

// Language: javascript