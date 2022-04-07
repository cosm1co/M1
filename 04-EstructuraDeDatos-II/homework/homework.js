'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
this.head = null;
}

function Node(value){
this.value = value;
this.next = null;
}

  LinkedList.prototype.add = function(x){
    let newNode = new Node(x) // creamos un nuevo objeto de la clase Node 
    let current = this.head // asignamos por referencia a la cabeza de la lista
    if(!current){ // preguntamos si existe this.head
      this.head = newNode;// asignamos a this.head = newNode
      return newNode 
    }
    while (current.next){ //iteramos sobre la lista. Cuando current.nex es null, corta el while
      current = current.next;
    }
     return current.next = newNode; //asignamos current. next a node
  }

  // LinkedList{this.head = {this.value = 10; this.next = {this.value = 20; this.next = null}}; this._length = 2}

  LinkedList.prototype.remove = function (){
    let current = this.head // asignamos a current this.head
    if(!current){ // lista vacía
      return null;
    }
    if(!current.next){ //
      let guardado = this.head.value; //guardamos el valor del elemento eliminado
      this.head = null; //borramos el nodo asignandole a this.head ---> null
      return guardado; //devolvemos el elemento eliminado
    }
    while(current.next.next){
      current = current.next;
    }
    let guardado = current.next.value;
    current.next = null;
    return guardado;
  }
//                                        c       cn      cnn
//                         1      2       3       4       null 
//                                               
  
LinkedList.prototype.search = function(arg){
  let current = this.head;
  while(current){
    if(current.value === arg) return current.value
    if(typeof arg === 'function'){
      if(arg(current.value)) return current.value
    }
    current = current.next;
  }
  return null;
}
//  if(this.head === null){ //si this.head es igual a null
//    return null; //devuelve null porque esta vacía la lista
//  }
//  let current = this.head;//1 o mas nodos- creamos variable auxiliar current
//  while(current){ // 
//    if(current.value === parametro){ // si parametro es un valor normal, retornamos el valor
//      return current.value
//    }else if(typeof(parametro) === 'function'){ //Si parametro es una function
//      if(parametro(current.value)){ //busco el argumento que tiene esta funcion
//        return current.value;
//      }
//    }
//    current = current.next;
// }
// return null;//devuelve null porque no encontró el parametro
// }
  
//                                                c
//                         1      2       3       4                        
// current.next.value !== value

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.bucket = [];
}

HashTable.prototype.hash = function(key){
  let sum = 0;
  for(let i = 0; i < key.length; i++){
    sum = sum + key.charCodeAt(i)
  }
  return sum % this.numBuckets
}
// key =  3   80   5   7   = 95
//                     i
HashTable.prototype.set = function(key, value){
  if(typeof key !== 'string') throw new TypeError;
  let posicion = this.hash(key)
  if(!this.bucket[posicion]){
    this.bucket[posicion] = {}
  }
  this.bucket[posicion][key] = value; 
}

HashTable.prototype.get = function(key){
  let posicion = this.hash(key);
  return this.bucket[posicion][key];
}

HashTable.prototype.hasKey = function(key){
  let posicion = this.hash(key);
  return this.bucket[posicion].hasOwnProperty(key)
}





























// HashTable.prototype.hash = function (key){
// // esta funcion hasheadora deberia sumar los key code de las letras de la palabra,
//     // y hacer el mod de ese numero por el numero de buckets .
//     let sum = 0
//     for(let i = 0; i < key.length; i++){
//       sum += key.chartCodeAt(i)
//     }
//     return sum % this.numBuckets;
// }

// HashTable.prototype.set = function(key, value) {
//   if(typeof key !== 'string'){
//     throw new TypeError, ('Keys must be strings')
//   }
//   let i = this.hash(key)
//   if(!this.bucket[i]){
//     this.bucket[i] = {}
//   }
//   this.bucket[i][key] = value;
// }

// HashTable.prototype.get = function(key) {
//   let i = this.hash(key);
//   return this.bucket[i] ? this.bucket[i][key] : undefined 
// }

// HashTable.prototype.hasKey = function(key) {
//   var i = this.hash(key)
//   return this.bucket[i].hasOwnProperty(key) 
// }


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
