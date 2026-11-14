// let customerList = [
//     {
//         name: "John Doe",
//         address: "123 Main St",
//         phone: "555-1234",
//         item: "Widget A"[

//         ]
//     },
//     {
//         name: "Jane Smith",
//         email: "jane@example.com",
//         address: "456 Elm St",

//     }

// ]

// console.log(customerList);

// let customerList = [];
// function btnAddCustoemrOnAction() {
//     let name = document.getElementById("txtName").value;
//     let address = document.getElementById("txtAddress").value;
//     let phone = document.getElementById("txtPhone").value;
//     let email = document.getElementById("txtEmail").value;

//     console.log(name, address, phone, email);

//     let customer = {
//         name: name,
//         address: address,
//         phone: phone,
//         email: email
//     }
//     console.log(customer);
//     customerList.push(customer);
//     console.log(customerList);
//     btnLoadTableOnAction();
// }

// function btnLoadTableOnAction() {
//     let tblCustomer = document.getElementById("tblCustomer");

//     let body = "";
//     for (let i = 0; i < customerList.length; i++) {
//         body += `<tr>
//                     <td>${customerList[i].name}</td>
//                     <td>${customerList[i].address}</td>
//                     <td>${customerList[i].phone}</td>
//                     <td>${customerList[i].email}</td>
//                 </tr>`;
//     }
//     tblCustomer.innerHTML = body;



// }


// let studentList = [
//     {
//         name: "kamal kumar",
//         age: 20,
//     },
//     {
//         name: "sita devi",
//         age:22
//     },
//     {
//         name: "ram kumar",
//         age: 21
//     }
// ]

// console.log(studentList[2].name);

3.

// let y = Math.floor(Math.random() * 10) + 1;
// console.log(y);

// function btnSubmitGuessOnAction() {
//     let userGuess = document.getElementById("txtGuess").value

//     if (userGuess == y) {
//         Swal.fire({
//             title: "Congratulations!",
//             width: 600,
//             padding: "3em",
//             color: "#716add",
//             background: "#fff url('https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cTVudG8xenVwZTJ3MW53dXd4MHF4ZjFueGhhcGZhaHh1cXFqajV2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3q2Z6S6n38zjPswo/giphy.gif')",
//             backdrop: `
//     rgba(0,0,123,0.4)
//     url("/images/nyan-cat.gif")
//     left top
//     no-repeat
//   `
//         });
//     } else if (userGuess > y) {
//         guess++;
//         alert("Your guess is too high! Try again.");
//     } else {
//         guess++;
//         alert("Your guess is too low! Try again.");
//     }

// }



//-------------------------------------------Constants----------------------------------------------

4.
//   let custoemr = ["saman", "kamal", "sita", "ram"];
//   console.log(custoemr);
//   console.log(custoemr);



5.
//------------------------------------------arrylist------------------------------------------------

5.1
//-----------------------------------push and reverse methods---------------------------------------

const customerList = [];

customerList.push(1);
customerList.push(2);
customerList.push(3);
customerList.push(4);
customerList.push(5);


console.log(customerList);
customerList.reverse();
console.log(customerList);


6.
//-----------------------------------------Filter method---------------------------------------------

// const productList = [
//     { name: "bun", inStock: true, price: 10 },
//     { name: "bread", inStock: false, price: 20 },
//     { name: "cake", inStock: true, price: 30 },
//     { name: "cookie", inStock: true, price: 40 },
//     { name: "donut", inStock: false, price: 50 }

// ]

// let inStockProductList = productList.filter(function (product) {
//     return productFilter(product);

// }

// );
// function productFilter(product) {
//     return product.inStock === true;
// }

// console.log(inStockProductList);


// const leterList = ["a", "b", "c", "d", "e", "f", "g"]
// console.log(leterList);

// leterList.sort();
// console.log(leterList);


7.

//----------------------------------------Map Method---------------------------------------------------


// const  salaryList = [100, 200, 300, 400, 500];
// cosole.log(salaryList);

// let newSalaryList = salaryList.map (salary=> salary * 2);
// console.log(newSalaryList);



7.

//------------------------------------------find Method------------------------------------------------

// const studentList = [
//     { name: "kamal", age: 20 },
//     { name: "nuwan", age: 22 }, 
//     { name: "Bob", age: 21 }

// ]

// let student = studentList.find(student => student.name === "Jane");
// console.log(student);








