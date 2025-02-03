// count number vowels in string
function countVowels(str)
{
     let count =0;
     let vowels = "aeiouAEIOU";
     for (let i = 0; i < str.length; i++) 
    {
        if (vowels.includes(str[i]))
        {
            count++;    
        }       
    }   
    return count;
}
console.log(countVowels("aeiou"));

// 3 Extract the first word of sentence
function getfirstword(sentence)
{
    let firstword = "";
    for (let i = 0; i < sentence.length; i++)
    {
        if (sentence[i]===" ") break;
        firstword+=sentence[i];                     
              
    }
    return firstword;
}
console.log(getfirstword("cold war started"));
// Replace All Spaces in string with hypens
function replaceSpace(str)
{
    let result = "";
    for (let i = 0; i < str.length; i++)
    {
        result+= str[i] === " "? "-" : str[i]; 
              
    }   
    return result; 
}
console.log(replaceSpace(" hello here i am "));
// ##############################################
// 5 split string into array of words
function splitintowords(sentence)
{
let words = [];
let currentword = "";
for (let i = 0; i < sentence.length; i++)
{
    if (sentence[i]===" ")
    {
        words.push(currentword);
        currentword = "";    
    }    
    else
    {
        currentword += sentence[i];
    }
}
if (currentword) words.push(currentword);
return words;
}
console.log(splitintowords("This is js"));
 // ##############################################
// 6 convert first letter to uppercase 
function capitalizewords(str)
{
    let result = "";
    let capitalizenext = true;
    
    for (let i = 0; i < str.length; i++)
    {
        if (str[i] === " ")
        {
            result+= " ";
            capitalizenext = true;    
        }    
        else if (capitalizenext)
        {
            result += str[i].toUpperCase(); 
            capitalizenext = false;
            
        }
        else 
        {
            result+= str[i];
        }
    }
    return result;
}
console.log(capitalizewords("hello u r cute"));
 // ##############################################
// remove non-alpha numeric characters
function removenonalpha(str)
{
    let result = "";
    for (let i = 0; i < str.length; i++) 
    {
        if ((str[i]>="a" && str[i]<="z") ||(str[i]>="A" && str[i]<="Z") || (str[i]>="0" && str[i]<="9"))
        {
            result += str[i];    
        }
    }    
    return result;
}
console.log(removenonalpha("hello ,i .am $ind 123"));
 // ##############################################
// string starts and end with same char
function startendsame(str)
{
    if (str.length ===0) return false;
    return str[0] === str[str.length-1];     
}
console.log(startendsame("radars"));
