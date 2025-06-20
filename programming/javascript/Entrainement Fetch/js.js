const body = document.querySelector('body')

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        console.log(data.info.pages)
        console.log(data.info.next)

        for(let index = 1; index <= data.info.pages;index++)
        {
            fetch(`https://rickandmortyapi.com/api/character?page=${index}`)
                .then(response => response.json())
                .then (data => {
                    data.results.forEach(element => {
                    console.log(data.results);

                    const createDiv = document.createElement('div')
                    body.appendChild(createDiv)
                    
                    const createPara=document.createElement('p')
                    createPara.textContent=element.name
                    createDiv.appendChild(createPara)

                    const createImg=document.createElement('img')
                    createImg.src=element.image
                    createDiv.appendChild(createImg)

                     });
                } )
        }
    })



    /*
fetch('https://rickandmortyapi.com/api')
    .then(response => response.json())
    .then (data => {
        data.results.array.forEach(element => {
            console.log(element.image)
        });
        console.log(data.results);

        const createDiv = document.createElement('div')
        body.appendChild(createDiv)
        const createPara=document.createElement('p')
        createPara.textContent=element.name
        createDiv.appendChild(createPara)

        const createImg=document.createElement('img')
        createImg.src=element.image
        createDiv.appendChild(createImg)
    }
    )*/




/*fetch("https://trouve-mot.fr/api/random/10")
    .then((reponce) => {
        return reponce.text();
    })
    .then((html) => { 
        document.body.innerHTML = html
    });

   


    .then(res =>{ return res.json()})

    .then(data =>{ 
        data.forEach(user => {
            const markup =  `<li>${user.name}</li>`;
        document.querySelector('ul').insertAdjacentHTML('beforeend')
    });
    })

*/