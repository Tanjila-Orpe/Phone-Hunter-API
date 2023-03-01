// const func = async() =>{
//     const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
// }
const func = (phone) =>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}
const body = document.getElementById('container');
const displayPhone = (display) =>{
    body.innerHTML = '';
    display.forEach(item => {
        console.log(item);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="${item.image}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>`
        body.appendChild(div);
    });
    document.getElementById('btn-search').addEventListener('click',() =>{
        const searchPhone = document.getElementById('input').value;
        console.log(searchPhone);
        func(searchPhone);
    })
}
func();