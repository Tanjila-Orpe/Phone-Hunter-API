// const func = async() =>{
//     const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
// }
const func = () =>{
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => console.log(data))
}
func();