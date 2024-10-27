const sentence = 'i want to learn web dev.';

// let reverse = ''
// for(const letter of sentence){
//     // console.log(letter);
//     reverse = letter + reverse;
// }
// console.log(reverse);

// let rev=''
// for(let i = 0; i<sentence.length;i++){
    
//      const letter = sentence[i]; 
//     rev = letter + rev;
    
// }
// console.log(rev)



        //   most easy
/**
 * 1.const reversed = sentence; then console.log(reversed)
 * 
 * 2.const reversed = sentence.split(''); then console.log(reversed)
 * 
 * 3.const reversed = sentence.split('').reverse(); then console.log(reversed)
 * 
 * 4.const reversed = sentence.split('').reverse().join(' '); then console.log(reversed)
 */



const reversed = sentence.split('').reverse().join(' ');
console.log(reversed);