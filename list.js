document.querySelector('#push').onclick = function(){
    if (document.querySelector('#addToList').value.length === 0) {
        alert("Please fill out this field.")
    } else {
        document.querySelector('#toBuyList').innerHTML 
        +=` 
        <div class="inputs">
         <span id="name">
          ${document.querySelector('#addToList').value}
          </span>
         <button class="delete">
         <i class="fas fa-minus-circle"></i>
         </button>
         </div>
        `;

        let addedValue = document.querySelectorAll(".delete");
        for (let i=0; i<addedValue.length; i++) {
            addedValue[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let inputList = document.querySelectorAll(".inputs");
        for (let i=0; i<inputList.length; i++) {
            inputList[i].onclick = function(){
                this.classList.toggle('done');
            }
        }

        document.querySelector("#addToList").value = "";
    }
}