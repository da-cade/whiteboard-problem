
const str1 = "asldgkjaasfbgnajsnkasjsflgioas"
const str2 = "pogiwqovbaskjnqpooelkjkavsg"

function stringChecker(givenStr){
  const bangStr = "bang"
  let holder = ""
  for (let i = 0; i < givenStr.length; i++) {
    const char = givenStr[i];
    if(char == bangStr[holder.length]){
      holder += char
    }
    if(holder.length == 3 && char == "g"){
      return i
    }
  }
}

function quickDraw(string1, string2){
  if(stringChecker(string1) > stringChecker(string2)){
    return "string two wins"
  }else{
    return "string one wins"
  }
}