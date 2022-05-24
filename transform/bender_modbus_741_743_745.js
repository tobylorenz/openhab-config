(function(s) {
    var i = parseInt(s)
    var result = "";
    result += String.fromCharCode((i>>24) & 0xff)
    result += String.fromCharCode((i>>16) & 0xff)
    result += String.fromCharCode((i>> 8) & 0xff)
    result += String.fromCharCode((i>> 0) & 0xff)
    return result;
})(input)
