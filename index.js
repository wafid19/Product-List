let pName = document.getElementById('pname');
let mC = document.getElementById('mc');
let year = document.getElementById('year');
let btn = document.querySelector('.btn');
let productList = document.getElementById('pList');


btn.addEventListener('click', function (e) {
    e.preventDefault();
    // e.target.
    if (pName.value == "" || mC.value == "" || year.value == "") {
        alert("The fields are mandatory")
    }else {
        let newRow = document.createElement('tr');

        let newProduct = document.createElement('th');
        newProduct.innerHTML = pName.value;
        pName.value="";
        newRow.appendChild(newProduct);


        let newMC = document.createElement('th');
        newMC.innerHTML = mC.value;
        mC.value="";
        newRow.appendChild(newMC);
        

        let newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        year.value="";
        newRow.appendChild(newYear);

        let deleteBtn = document.createElement('button'); 
        deleteBtn.innerHTML='Delete';
        deleteBtn.className = 'deBtn btn-warning btn-block mt-2 mr-2'
        newRow.appendChild(deleteBtn);
          
        deleteBtn.addEventListener('click', function(){
            productList.removeChild(newRow);
         })


        productList.appendChild(newRow);
    }

    
})