function blur()
{
    document.getElementsByTagName('body').style.filter="blur(10px)" 
}
const modalDiv = document.getElementById('md')
function open2() {
	modalDiv.style.display = "block"
}
function close2()
{
    	modalDiv.style.display = "none"
}
const input = document.getElementById('inp');
const button = document.getElementById('btn')
const mainDiv= document.getElementById('results')
button.addEventListener('click', fetchData)
button.addEventListener('click', open2)             
function fetchData ()
{
    const searchTerm = input.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        .then(function (res)
        {
          return res.json()
        })
        .then(function (data)
        {
            console.log(data)
            overallData(data)
        })
        .catch(function (err)
        {
        console.log("my errors"+err)
        })
    
}

function overallData (val)
{
    console.log(val);
    mainDiv.textContent=" "
    const name = document.createElement('h1')
    const img = document.createElement('img')
    const height = document.createElement('p')
    const Weight = document.createElement("p")
    const abil = document.createElement("p")
    name.textContent = val.name;
    height.textContent ="Height: "+ val.height;
    Weight.textContent = "Weight: " +val.weight;
    img.src = val.sprites.front_shiny
    img.alt = val.name;
    img.classList.add('img')
    abil.textContent=val.abilities[0].ability.name
    mainDiv.append(img,name,height,Weight,abil)
}