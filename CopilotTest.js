// takes in a comment describing a function and returns the implementation of the function as a string
function makeImplementation(comment){
    var result = "";
    var lines = comment.split("\n");
    var indent = "";
    for(var i = 0; i < lines.length; i++){
        if(lines[i].trim() == ""){
            continue;
        }
        if(lines[i].indexOf("@") == 0){
            indent = lines[i].substring(1, lines[i].length);
            continue;
        }
        if(lines[i].indexOf("@end") == 0){
            indent = "";
            continue;
        }
        result += indent + lines[i] + "\n";
    }
    return result;
}