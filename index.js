const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// adjustedTitles=[]
// for (const title of tutorials) {
//   adjustedTitles.push(title);
// }
// const titleCased =()=> 
//   {
//     adjustedTitles=[]
//     for for (const title of tutorials)
//   return title.case()
//   }


// title) => 
//   fortitle in tutorials){

//   }
//   return tutorials
// }
// const titleCased = map(tutorials, function (title) {
//   return Object.assign({}, title, { accessLevel: "admin" });
// });

const titleCased = () => {
  return tutorials.map(title => {
    let words=title.split(' ')
    let capitalizedWords=words.map(word =>word.charAt(0).toUpperCase()+ word.slice(1))
    let result = capitalizedWords.join(' ')
    return result
    }
  )
}
