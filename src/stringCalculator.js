let Add = (stringNumber)=>{
  if (stringNumber == "") return 0
  let delimiters = stringNumber.replace(/^(\/;.*\n)/, ' ')
  let numbers = delimiters.split(/[\n,;%#@!]/);
  let results = 0;
  for (let i=0; i<numbers.length; i++){
        results += parseInt(numbers[i]);
        if (results < 0) throw new Error("Negative numbers not allowed"+ stringNumber);           
  }
 return results;
}