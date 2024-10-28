const mobile={
    brand:'samsumg',
    price:130000,
    color:'black',
    camera:'120mp'
}



//for of :array
//for in :object
for(const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}


// const keys=Object.keys(mobile);
// console.log(keys);


// for(const key of keys){
//     console.log(key,':',mobile[key])
// }