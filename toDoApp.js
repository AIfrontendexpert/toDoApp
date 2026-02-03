//1. Vytvoříme pole objektů

const myToDo = [{
    text: "Vynést koš",
    completion: false,
},{
    text: "Uklidit",
    completion: false,
},{
    text: "Utřít prach",
    completion: false,
},{
    text: "Vysát",
    completion: true,
},{
    text: "Uvařit",
    completion: true,
}];


//Kolik úkolů ještě zbývá udělat

/*const toDo_left = myToDo.filter(function(one_toDo){
    return one_toDo.completion === false
})

const new_paragraph = document.createElement("p")

new_paragraph.textContent = `Počet zbývajících úkolů: ${toDo_left.length}` 
document.querySelector("main").appendChild(new_paragraph)*/

//2 Vypsat všech 5 úkolů a vypsat na stránce


myToDo.forEach(one_element => {
    const text = one_element.text

const new_paragraph_3 = document.createElement("p")

new_paragraph_3.textContent = `${text}`
document.querySelector("#results").appendChild(new_paragraph_3)

})

//3 vypsat jednotlivé úkoly, které nebyly splněny

const new_paragraph_3 = document.createElement("p")
document.querySelector("main").appendChild(new_paragraph_3)

new_paragraph_3.textContent = "Všechny nesplněné úkoly"
new_paragraph_3.style.fontWeight = "bold"                   /* SPÍŠE TO ŘEŠIT V SOUBORU CSS*/


myToDo.forEach(one_element => {
    const incompletion = one_element.completion
        if (incompletion === false) {
            const new_paragraph_4 = document.createElement("p")
            document.querySelector("main").appendChild(new_paragraph_4)
            new_paragraph_4.textContent = `${one_element.text}`
        }
})

/*****
 * Filtrování
 *****/

//Pro ukládání textu z políčka (placeholder="Hledaný text")
const filters = {
    searchingText: ""     // SEM CHCI UKLÁDAT TEN TEXT, KTERÝ SE BUDE ZAPISOVAT DO POLÍČKA

}

// Obecná filtrovací funkce............do ourToDos půjde celý ten OBJEKT myToDo, který napíšeme do funkce, kterou voláme v rámci Načítáme text z políčka: renderToDos(myToDo.filters)
const renderToDos = (ourToDos, weSearching) =>{
    const ourResults = ourToDos.filter((oneToDo) => {
        return oneToDo.text.toLowerCase().includes(weSearching.searchingText.toLowerCase()) 
    })
    
    document.querySelector("#toDo_left").innerHTML = ""  

    const toDo_left = ourResults.filter((one_toDo)=>{   //Vytvořím si proměnou do které chci ukládat nesplněné úkoly s false
    return one_toDo.completion === false
    })
   
    const paragraph = document.createElement("p")
    paragraph.textContent = `Ještě zbývá udělat tento počet úkolů: ${toDo_left.length}`
    document.querySelector("#toDo_left").appendChild(paragraph)

    //Vypisování úkolů do stránky
    document.querySelector("#results").innerHTML = ""

    ourResults.forEach((oneResult) => {
        const paragraph_5 = document.createElement("p")
        paragraph_5.textContent = oneResult.text
        document.querySelector("#results").appendChild(paragraph_5)
        })
    }


//Načítáme text z políčka
const searchText = document.querySelector("#search-text") //Výběr id v html, na které se to má navázat
searchText.addEventListener("input", (event)=> {          //Připnutí naslouchače "input" na id="search-text", které se ukládá do proměné searchText     
    filters.searchingText = event.target.value            // Hodnotu event.target.value (najdu jí na webu pod touto cestou) tímto budu ukládat do filters.searchingText. filters.searchingText budu naplňovat hodnotou z políčka


    //Tady budeme volat filtrovací funkci
    renderToDos(myToDo,filters)
})