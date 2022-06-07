let arr = [34, 21, 1, 10, 6]
document.write("Default array: " + arr)

//sorting array of numbers, comparing their unicode value passing a and b 
arr.sort(function(a, b){
    return a - b    
})
let a = arr[0] + arr[1]
document.write("<br>Ascending order: " + arr)
//Sum lowest values
document.write("<br>Sum of lowest items: " + a + "<br><br>")

//Array of names, and their age
var persons = [
    { nome: "Gustavo", value : 40},
    { nome: "Carlos", value : 32},
    { nome: "Anderson", value : 27},
    { nome: "Darlene", value : 20}
]

//Show array on HTML (short Arrays)
document.write("Unordered Array: " + persons[0].nome+", " + persons[1].nome + ", " + persons[2].nome)

//Show Array in HTML with function (Useful for large Arrays)
let personsNameString = []
 function stringNames (){
     let i = 0
     while(i < persons.length){
        personsNameString.push(" " + persons[i].nome)
        i++
    } return personsNameString 
}
document.write("<br>Unordered array via function: " + stringNames())

//Sorting by ascending age
persons.sort(function(a, b){
    return a.value - b.value
})
document.write("<br> Sort by ascending age: ")
for(let i = 0; i < persons.length - 1; i++){
    document.write(persons[i].nome + ", ") //Gets a extra comma problem, the fixed way it's below
} 

//Sorting by names
document.write("<br>Sort by name: ")

//Function to sort by Name, returns ordered array
function sortByName () {
persons.sort(function(a, b){
    const nameA = a.nome.toUpperCase();
    const nameB = b.nome.toUpperCase();
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB){
        return 1
    } 
    return 0 //names must by equals
}) ;{
    return persons
    }
}

//Shows the name sortered array
let sortedName = []
for(let i = 0; i < sortByName().length; i++){
    sortedName.push(sortByName()[i].nome) //pushes to array with space before, the commas will be add automatically
} if (i = sortByName()){       //checks if all items was sent to the array, if does, write it
    document.write(sortedName.join(", ")) // Join fix the comma
}




