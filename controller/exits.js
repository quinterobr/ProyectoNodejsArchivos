
function convert(data) {
    return {
        code: "1010",
        status: "200",
        data: data
    };
}

function converterror(data) {
    return {
        code: "1010",
        status: "404",
        data: data
    }
}
module.exports = {
    convert,
    converterror
}