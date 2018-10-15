var newItemCounter = 1;
var ourList = document.getElementById("our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");

/*for (i = 0; i < listItems.length;  i++){
	// listItems[i].innerHTML = "Hello world. ";
	listItems[i].addEventListener("click", activateItem);
}*/
ourList.addEventListener("click", activateItem);

function activateItem(e){
	//alert("click");
	/*ourHeadline.innerHTML = this.innerHTML;
		//remueve fondo del que no se selecciona
		for (var i = 0 ; i < listItems.length; i++) {
			listItems[i].classList.remove("active");
		};
		//añade fondo al que se selecciona
		this.classList.add("active");*/

	if (e.target.nodeName == "LI") {// soluciona problema de seleccion de los nuevos elementos que se crean, selecciona todos los hijos de la list
		ourHeadline.innerHTML = e.target.innerHTML;
		//remueve fondo del que no se selecciona
		for (var i = 0 ; i < e.target.parentNode.children.length; i++) {
			e.target.parentNode.children[i].classList.remove("active");
		};
		//añade fondo al que se selecciona
		e.target.classList.add("active");
	};
	
}

ourButton.addEventListener("click", createNewItem);

function createNewItem(){
	ourList.innerHTML += "<li>Something New "+ newItemCounter +"</li>"; // += agrega algo nuevo AL FINAL de lo que ya existe
	newItemCounter ++;
}