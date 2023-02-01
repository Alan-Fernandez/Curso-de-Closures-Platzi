function alcancia (){
    let contenido = 0;
    return function countCoins (dinero){
        contenido = contenido + dinero;
        return console.log(`$${contenido}`);
    }
};


const alan = alcancia();

alan(10)
alan(10)
alan(10)

function createPetList() {
    const petList = [];

    function exhibit(arg){
        for(let i=0; i< arg.length; i++){
            console.log(`${i}:${arg[i]}`);
        }
    }
    return function addAnimal(pets) {
        petList.push(pets);
        return exhibit(petList);
    }
}
  
const addPetsList = createPetList();


addPetsList('juan');
addPetsList('perro');
addPetsList('pedro');

