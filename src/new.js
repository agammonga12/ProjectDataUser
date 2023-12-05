const datas=[
    {name:"Agam" ,Email:"Monga0092@gmail.com"},
    {name:"Amar" ,Email:"amar123@gmail.com"}
    ]
    
function getData(){
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
             output+= `${data.name}`;
        })
        console.log(output)
    },2000)
}

function createData(newData){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newData)
            let error=false;
            if(!error){
                resolve();
            }
            else{
                reject("Somthing went Wrong...!")
            }
        },3000)
    })
}
createData({name:"Tushar",Email:"kumarTushar@gmail.com"}).then(getData());
