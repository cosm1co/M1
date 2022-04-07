'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
this.right = null,
this.left = null;
this.value = value;
}

BinarySearchTree.prototype.insert = function(value){
if(value > this.value){ //pregunto si value es mayor que mi raíz(this.value)- a la derecha si es mayor
    if(this.right) this.right.insert(value);//si la rama NO ESTÁ VACÍA --> RECURSIVIDAD
    else this.right = new BinarySearchTree(value)// si está VACÍA --> agrego Nuevo Árbol.
} else { //si no se cumple la primera condición entra en este else IZQUIERDA
    if(this.left) this.left.insert(value);//si la rama izq NO ESTÁ VACÍA --> recursividad
    else this.left = new BinarySearchTree(value);// si está VACÍA --> agrego Nuevo Árbol.
}
}
BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) return true;// si encuentra el valor devuelve true
  if(value > this.value){ //si value es mayor a this.value se va a la derecha
    return !!this.right && this.right.contains(value); //si this.right es false no hace recursividad y termina de buscar
  }
  return !!this.left && this.left.contains(value)// si value es mejor que this.value pasa a esta linea
  // if(this.value === arg) return true;//si arg es igual this.value
  // if(arg > this.value){// si arg es mayor this.value
  //   if(!this.right) return false;// si no hay nada en la derecha retorna falso.
  //   else return this.right.contains(arg)//
  // }else{ 
    //   if(!this.left) return false;
    //   else return this.left.contains(arg)// retorna la posición en la derecha con recursividad y el mismo dato 
    // }
  }
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
// Pre-order --> root - izq - der
// In-order --> izq - root - der
// Post-order --> izq - der - root
if(order === 'pre-order'){
  cb(this.value);
  if(this.left !== null) this.left.depthFirstForEach(cb, order);
  if(this.right !== null) this.right.depthFirstForEach(cb, order);
 } else if(order === 'post-order'){
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  } else {
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    cb(this.value)
    if(this.right !== null) this.right.depthFirstForEach(cb, orrder);
  }

}
BinarySearchTree.prototype.breadthFirstForEach = function(cb, array=[]){
  if(this.left){
    array.push(this.left)
  }
  if(this.right){
    array.push(this.right);
  }
  cb(this.value);

  if(array.length > 0){
    array.shift().breadthFirstForEach(cb, array);
  }
};
BinarySearchTree.prototype.size = function(){
if (!this.right && !this.left) return 1;
if (!this.right) return 1 + this.left.size();
if (!this.left) return 1 + this.right.size();
return 1 + this.left.size() + this.right.size();
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
