var word = prompt("Enter a word")

var l = 0, r = word.length - 1;
var flag = false;

while(l < r){
    if(word[l] != word[r]){
        flag = true;
        break;
    }
    l++;
    r--;
}

if(flag == true){
    console.log("Not Palindrome")
}
else {
    console.log("Palindrome")
}