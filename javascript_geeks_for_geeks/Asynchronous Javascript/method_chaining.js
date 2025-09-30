function payment(holtelId){
    return new Promise((resolve) => resolve("payment successful"));
}

let hotel = bookHotel(hotelName);

hotel
    .then((holtelId)=>{
        console.log({holtelId});
        return holtelId;
    }) //1
    .catch((err)=> console.log(err))
    .then(function(hotelId){
        return payment(hotelId);
    })//2
    .catch((err)=>console.log(err))
    .then((reponse)=>console.log(reponse))//3
    .catch((error)=> console.log(error.message));
    