

function getTodo(number){
    fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
        .then(response => { 
            return response.json()
        })
        .then(json => console.log(json))
}

// getTodo(7);

function createTodo(){
    
    let myTodo = {
        userId: 1,
        title: 'I still need to clean my fridge!',
        completed: false
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(myTodo)
    };

    fetch('https://jsonplaceholder.typicode.com/todos/', requestOptions)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => console.log(data));
}

createTodo();