let loadData = () => {
    return new Promise((resolved, rejected) => {
        let num = Math.random();
        if(num <= 0.5){
            resolved(num);
        }
        else{
            rejected(num);
        }
    })
}

loadData()
.then(data => console.log("resolved data", data))
.catch(err => console.log("rejected data", err))