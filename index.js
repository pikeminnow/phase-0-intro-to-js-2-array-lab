// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.splice([cats.length],1,name);
}

function destructivelyPrependCat(name){
    return cats.splice(0,0,name);
}

function destructivelyRemoveLastCat(){
    return cats.splice([cats.length-1],1);
}

function destructivelyRemoveFirstCat(){
    return cats.splice(0,1);
}

function appendCat(name){
    const allCats = [...cats,name];
    return allCats;
}

function prependCat(name){
    const allCats = [name,...cats];
    return allCats;
}

function removeLastCat(){
    return cats.slice(0,[cats.length-1]);
}

function removeFirstCat(){
    return cats.slice(1,[cats.length]);
}