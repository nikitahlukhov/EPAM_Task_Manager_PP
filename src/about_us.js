export default function aboutUs () {
    //contacts

    const contacts = document.querySelectorAll('.contacts_nav');
    const contacts_page = document.querySelector('.contacts')


    for(let i = 0; i < contacts.length; i++){
        contacts[i].addEventListener('mousedown', ()=>{
            let arr = document.querySelectorAll('main > *');
                for (let i=0; i<arr.length; i++){
                    arr[i].style.display = 'none'; 
                }
            contacts_page.style.display = 'flex';
        })
    }



    //founders

    const founders = document.querySelectorAll('.founders_nav');
    const founders_page = document.querySelector('.founders')

    for(let i = 0; i < founders.length; i++){
        founders[i].addEventListener('mousedown', ()=>{
            let arr = document.querySelectorAll('main > *');
                for (let i=0; i<arr.length; i++){
                    arr[i].style.display = 'none'; 
                }
                founders_page.style.display = 'flex';
        })
    }

    const history = document.querySelectorAll('.history_nav');
    const history_page = document.querySelector('.history')

    for(let i = 0; i < history.length; i++){
        history[i].addEventListener('mousedown', ()=>{
            let arr = document.querySelectorAll('main > *');
                for (let i=0; i<arr.length; i++){
                    arr[i].style.display = 'none'; 
                }
                history_page.style.display = 'flex';
        })
    }
}