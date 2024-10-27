//keys

// const computer={
//     brand:'apple',
//     price:40000,
//     processor:'intel',
//     hdd:'512gb'
// }


// const keys = Object.keys(computer);
// console.log(keys);





//values
// const computer={
//     brand:'apple',
//     price:40000,
//     processor:'intel',
//     hdd:'512gb'
// }


// const values=Object.values(computer);
// console.log(values);



//nested object
// const college={
//     name:'vnc',
//     class:['10','11','12'],
//     events:['science fair','bijoy dibos','21 feb'],
//     unique:{
//         color:'blue',
//         result:{
//             gpa:5,
//             merit:'top'
//         }
//     }
// }

// console.log(college.unique.color);
// console.log(college.unique.result.merit);

// college.events[1]='cumilla kar';
// console.log(college.events[1])




//if we want to delete any option then we use it

const college={
    name:'vnc',
    class:['10','11','12'],
    events:['science fair','bijoy dibos','21 feb'],
    unique:{
        color:'blue',
        result:{
            gpa:5,
            merit:'top'
        }
    }
}
delete college.class;
console.log(college);

