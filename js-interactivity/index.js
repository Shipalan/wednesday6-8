// console.log('Hello, World')


// function test(event){
    //     event.preventDefault()
    //     console.log('test')
    // }
    // addBtn.addEventListener('click', test)
    
    // const addBtn = document.querySelector('#addBtn')
    
    
    function addMovie(event){                                               //creating the function addMovie
        event.preventDefault()
        let inputField = document.querySelector('#inputMovie');             //setting the variable inputfield to look at the html input 
        let movie = document.createElement('li');                           //creating the list for the movies
        let movieTitle= document.createElement('span');                     //creating a span for the user input to be added to
        const ul = document.querySelector('ul');                            //telling the .js where to find the UL
        movieTitle.textContent = inputField.value;                          //assigning the value from the user to the Span
        
        
        movie.appendChild(movieTitle);                                      //adding the span to the list
        let deleteBtn = document.createElement('button')                    //creating the delete button
        deleteBtn.textContent = 'X'                                         //Assigning the text in the button to 'X'
        deleteBtn.addEventListener('click', deleteMovie)                    //tell the button what to do when it is clicked
        movie.appendChild(deleteBtn)                                        //adding the delete button the list with the movie title
        
        ul.appendChild(movie);                                              //handing the movie list to the un ordered list
        inputField.value = '';                                              //setting the input field back to blank
}

function deleteMovie(event){                                                //creating the delete movie function
    event.target.parentNode.remove();                                       //targeting the parent folder (LI) and removing it
}

document.querySelector('form').addEventListener('submit', addMovie)         //telling .js to watch for a form being submitted and pointing it to the addMovie function


function crossOffMovie(e){                                                  //
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