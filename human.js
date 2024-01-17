const button = document.getElementById("btn")
button.addEventListener('click',fetchData)
function fetchData()
{
    fetch('https://randomuser.me/api')
    .then(function(res){ return res.json()})
    .then(function(data)
    {
        console.log(data)
        overallData(data.results)
    })
}
function overallData(val)
{
    console.log(val[0])
    const mainDiv = document.getElementById('results')
      mainDiv.textContent=" "
       const img= document.createElement('img')
        const name = document.createElement('h1')
        const gen = document.createElement('p')
        const time = document.createElement('p')
        const dob = document.createElement('p')
       const phno = document.createElement('p')
     gen.textContent = val[0].gender
       name.textContent = val[0].name.title+" "+val[0].name.first+" "+val[0].name.last
       img.src = val[0].picture.large
     img.alt = val[0].name.first
    //     if (val[0].timezone && val[0].timezone.offset && val[0].timezone.description) {
    //         time.textContent = val[0].timezone.offset+" "+val[0].timezone.description;
    //    } else {
    //        // Handle the case where timezone or offset is not available
    //         time.textContent = "Timezone offset not available";
    //     }
        dob.textContent = val[0].dob.age
        phno.textContent = val[0].phone
         img.style.height="150px";
         img.style.width="150px";
        mainDiv.append(img,name,gen,dob,phno) 
}
