// console.log('Hello, World')


// function test(event){
    //     event.preventDefault()
    //     console.log('test')
    // }
    // addBtn.addEventListener('click', test)
    
    // const addBtn = document.querySelector('#addBtn')
    
    
    function addMovie(event){
        event.preventDefault()
        let inputField = document.querySelector('#inputMovie');
        let movie = document.createElement('li');
        let movieTitle= document.createElement('span');
        const ul = document.querySelector('ul');
        movieTitle.textContent = inputField.value;    
        
        
        movie.appendChild(movieTitle);
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'X'
        deleteBtn.addEventListener('click', deleteMovie)
        movie.appendChild(deleteBtn)
        
        ul.appendChild(movie);
        inputField.value = '';
}

function deleteMovie(event){
    event.target.parentNode.remove();
}

document.querySelector('form').addEventListener('submit', addMovie)


function crossOffMovie(e){
    e.target.toggle('checked')
    if(e.target.classList.contains('checked')){
        MessageChannel.textContent = e.target.textContent + 'watched!'
    } else {
        MessageChannel.textContent = e.target.textContent + 'un-watched!'
    }
    revealMessage();
}

function revealMessage(){
    MessageChannel.classList.remove('hide')
    setTimeout(() => {
        MessageChannel.classList.add('hide')
    })
}