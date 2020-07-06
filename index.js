
async function getData() {
const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log("response= ",response1);

const data = await response1.json();
console.log("Data = ",data);

}



async function postData() {
    const response1 = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'test',
          body: 'faisal',
          userId: 22
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
    console.log("response= ",response1);
    
    const data = await response1.json();
    console.log("Data = ",data);
    
    }
    
    
//for debugging you can use Postman 
getData();
postData();