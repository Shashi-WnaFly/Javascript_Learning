// const body = document.body;
const body = document.querySelector('body');
const color = document.querySelectorAll('.button');

color.forEach(function (item) {
    item.addEventListener('click', function (e) {
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'salmon'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'aquamarine'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'cornflowerblue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'paleturquoise'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'olivedrab'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'lawngreen'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'cadetblue'){
            body.style.backgroundColor = e.target.id;
        }
    });
});

