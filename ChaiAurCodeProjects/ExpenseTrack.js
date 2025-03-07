document.addEventListener("DOMContentLoaded" , ()=>{
    const expense = document.getElementById("ExpenseName");
    const AmountArea = document.getElementById("Amount");
    const SubmitBtn = document.getElementById("Submit");
    const ItemList = document.getElementById("Expense-list");
    const TotalCost = document.getElementById("Total-Cost");

    let Expenses = JSON.parse(localStorage.getItem("Expenses")) || []; //To add Expenses in the array
    let totalAmt = 0;

    // Function to show the items in Itemlist when page is reloaded
    function AddToTheList(){
        for( let i = 0 ; i < Expenses.length ; i++){
            let li = document.createElement("li");
            li.innerHTML = `${Expenses[i].name}  : $ ${Expenses[i].Amount}<button class="Del-btn" id="${Expenses[i].id}"}>Delete</button>`;

            li.classList.add("List-item");
            ItemList.appendChild(li);
            totalAmt += parseFloat(Expenses[i].Amount);
        }
        TotalCost.innerText = `$ ${totalAmt}`;
    }

    AddToTheList();

    // Function to add a task in Itmelist when submit btn is clicked
    SubmitBtn.addEventListener("click" , (e)=>{
        if(expense.value && AmountArea.value){
            let newExpense = {
                id : Date.now(),
                name : expense.value,
                Amount : AmountArea.value,
            }
            Expenses.push(newExpense);
            savetoLocale();
        
            let li = document.createElement("li");
            li.innerHTML = `${expense.value}  : $ ${AmountArea.value}
                <button class="Del-btn" id="${newExpense.id}"> Delete</button> `;

            li.classList.add("List-item");
            ItemList.appendChild(li);
            totalAmt += parseFloat(newExpense.Amount);
            TotalCost.innerText =`$ ${totalAmt.toFixed(2)}`
           
        }
        expense.value = "";
        AmountArea.value = "";
    }); 

    // Add eventListener to the whole itemList to delete an item
    ItemList.addEventListener("click" ,(e)=>{
        if(e.target.tagName === "BUTTON"){
            console.log("button is clicked");
            removeItem(e.target);
            
        }
    })

    // Function to remove a item from the localeStorage as well as itemList
    function removeItem(item){
        Expenses = Expenses.filter(Exp => Exp.id != item.id);
        ItemList.removeChild(item.parentElement);
        totalAmt = Expenses.reduce((sum , expense)=> (sum + expense.Amount) , 0)
        console.log(totalAmt);
        TotalCost.innerText = `$ ${totalAmt}`
        savetoLocale();
    }
      
    // Function to save Expense to LocalStorage
    function savetoLocale(){
        localStorage.setItem("Expenses" , JSON.stringify(Expenses));
    }
});