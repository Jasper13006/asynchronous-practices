const somethingWillHapped = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            console.log("Hey dude!");
            resolve("Hey!");
        } else {
            reject("Whoops!");
        }
    });
};
somethingWillHapped()
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

const somethingWillHapped2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Hey!");
            }, 2000);
        } else {
            const error = new Error("Whooop!");
            reject(error);
        }
    });
};

somethingWillHapped2()
    .then((response) => console.log(response))
    .catch((err) => console.error(err));


Promise.all([somethingWillHapped(),somethingWillHapped2()])
.then(response=>{
    console.log("Array", response)
})
.catch(err => console.error(err))