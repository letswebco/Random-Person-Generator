let emailElement = document.getElementById("email")
let nameElement = document.getElementById("name")
let lastElement = document.getElementById("last")
let phoneElement = document.getElementById("phone")
let picElement = document.getElementById("pic")


async function getCountry(){
    const APIUrl =`https://randomuser.me/api/`
    const response = await fetch(APIUrl)
    const data = await response.json()
    const fullInfo = { 
        email:"",
        name:"",
        last:"",
        phone:"",
        pic:""
    }
    for (i in data.results){

        console.log(i)
        for (j in data.results[i]){
            console.log(j, data.results[i][j])
            
            
            if (j=="email"){
               fullInfo.email=data.results[i][j]
            }
            if (j=="name"){
                fullInfo.name=data.results[i][j]["first"]
                fullInfo.last=data.results[i][j]["last"]
             }
             if (j=="phone"){
                fullInfo.phone=data.results[i][j]
             }
             if (j=="picture"){
                fullInfo.pic=data.results[i][j]["large"]
             }
             

        }    
    }

    emailElement.textContent = fullInfo.email
    nameElement.textContent = fullInfo.name
    lastElement.textContent = fullInfo.last
    phoneElement.textContent = fullInfo.phone
    picElement.src = fullInfo.pic


console.log(fullInfo)
}

setInterval(() => {
    getCountry()
}, 5000);



    // let letsweb = {firstName:"giorgi", lastName:"babunashvili"}
    
    // console.log (letsweb["firstName"])