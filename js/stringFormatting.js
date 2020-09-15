function formatES6toES5(str, dict)
{
    var indexOfStart = str.indexOf('{');
    var indexOfEnd = str.indexOf('}');
    var stringToConvert = str.substring(indexOfStart + 1 , indexOfEnd);
    var value = dict[stringToConvert];
    if (!value)
    {
        throw "Cannot convert " + stringToConvert + " because its not appear in the dictionary!";
    }
    var stringToReplace = str.substring(indexOfStart, indexOfEnd +1);
    str = str.replace(stringToReplace, value);
    return str;

}

var dict = {'number': 6};
var toConvert = "Mamas {number} Empire";
var replaced = formatES6toES5(toConvert, dict);
console.log(replaced);
toConvert = "Mamas {stam} Empire";
replaced = formatES6toES5(toConvert, dict);
console.log(replaced);