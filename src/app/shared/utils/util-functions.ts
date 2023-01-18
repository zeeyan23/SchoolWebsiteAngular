export function intToString(value) {
    if (new String(value).length > 3) {
        var suffixes = ["", "K", "M", "B", "T"];
        var suffixNum = Math.floor(("" + value).length / 3);
        var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
        if (shortValue % 1 != 0) {
            var shortNum = shortValue.toFixed(1);
        }
        // return shortValue.toFixed(2) + suffixes[suffixNum];
        return (Math.round((shortValue + Number.EPSILON) * 100)/100)  + suffixes[suffixNum];
    } else
        return value;
}