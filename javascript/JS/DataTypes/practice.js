const color = ['red','blue','red','green'];
// const colorString = color.join()
// console.log(colorString)

// const colorRed = colorString.match(/red/g)
// console.log(colorRed.length ,typeof color);

const uniqueColor = []

const object = []

color.forEach((x)=>{
    let count = 1;
    if(uniqueColor.includes(x) == true){
        uniqueColor.push(x);
        count++;
    }

    object.push([uniqueColor,count])
    

})

console.log(object)