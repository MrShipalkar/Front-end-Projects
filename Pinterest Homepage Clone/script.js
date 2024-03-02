// creating data 
 data = [ 
        {name:"Web Design", image:"https://imgs.search.brave.com/mjookaKIHdswtBl4c4RmdcTeiMqrf9fll5BmsAjSrLM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzEyLzk5LzQ1/LzM2MF9GXzIxMjk5/NDU5MV9GOE1uSUp1/TkRFeEc5UHJTWE9F/VzI2T1RsWlo1TjNO/VC5qcGc"},
        {name:"Rose", image:"https://imgs.search.brave.com/5O20V2Tl1Cmy8PhsgHl3fc3tJGqmOT2pUP5VeMhYE20/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAw/NTUxNzgxLTAwMS9w/aG90by9yZWQtcm9z/ZS1jbG9zZS11cC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VnE5VGZEUzY1R3RD/NmZ5R3JXNmFFcHg4/a04xNFB2MGRGOVpD/UXhXc3pSND0"},
        {name:"Quate", image:"https://imgs.search.brave.com/o3EdkyMfocYg_MkhVjmIqizYIcOjrUtjBsF5dqdAzKM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDM0ODc5NDUtMTM5/YTk3ZjM4N2Q1P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRaOGZIQnBZ/M1IxY21WOFpXNThN/SHg4TUh4OGZEQT0.jpeg"},
        {name:"bubble", image:"https://imgs.search.brave.com/XZQJQhZTek13k_CV2JK7Xb2hm-2da-6A7F9VG48eRp4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZlLzk1/LzY5LzZlOTU2OTQ4/MjhlYWUwYzI1NWM0/N2MzMGIxN2NiY2E3/LmpwZw"},
        {name:"fruits", image:"https://imgs.search.brave.com/MDNLl7vfkeb8Ukc1VZGK15bwAQZxX66wJE8KT-8XUtk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kaWZm/ZXJlbnQtMTc5NDY5/NTcuanBn"},
        {name:"earth", image:"https://imgs.search.brave.com/oR0CPH_-YYz7QBiSSLMsJIMxvm2U6XcsTFgdSkn_iF0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/OC8xMC8wMi8xMC93/b3JsZC0xNTgyMzQ3/XzY0MC5qcGc"},
        {name:"Clock",image:"https://imgs.search.brave.com/Chki_CAHQmdkZCw2mUtMvJMNLqax2lalPff5wIO9AP0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/NDUwMzIwL3Bob3Rv/L2lzb2xhdGVkLXNo/b3Qtb2YtMi1vY2xv/Y2stY2xvY2stZmFj/ZS1vbi13aGl0ZS1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1y/Q3FyLUlGRE16bnRy/MWYtdER0QkdMdW5v/aE5tNE1KYnB1NzlS/ZTVRRmFFPQ"},
        {name:"program", image:"https://imgs.search.brave.com/r2dlYKnChbgTxx02rNovUR-ZOAS_BnlzxXXzWCMTAMg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdmLzZi/L2YxLzdmNmJmMWY1/NDNmMTcyZGFjNjJl/NDY4MzZkNTI4MWRl/LmpwZw"},
        {name:"bikes", image:"https://imgs.search.brave.com/aBxbvM0ixtNQw_csSCai86oOK-0fUEokek6ejg62V24/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njg3NzI1ODU0MDct/OTM2MWY5YmYzYTg3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4bGVI/QnNiM0psTFdabFpX/UjhObng4ZkdWdWZE/QjhmSHg4ZkE9PQ"},
        {name:"android", image:"https://imgs.search.brave.com/muRowqz7gulvqp03XTKmT6rRpSKXVrDtWXWZOx4mRII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzLzli/L2FkLzQzOWJhZGM5/ZWY5MWIyMjNiN2Jm/YzkyNmJhYTU3Mzgy/LmpwZw"},
        {name:"Google pixel",image:"https://imgs.search.brave.com/74NK1k_c15_YCEMz399pWZ3adMw4kWkq7lSFe25Ika0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFtMDloRWhud0wu/anBn"},
        {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

function showcards() {
    var clutter = " ";
    data.forEach(function(obj){
        clutter += `<div class="box">
        <img class="box" src="${obj.image}" alt="image">
                    </div>`;
    }
    )
    document.querySelector(".content").innerHTML = clutter;
}
showcards();

// function searchfunction(){
//     var input = document.querySelector("#searchinput");
//     input.addEventListener("input", function (){
//         const filteredarray = data.filter(obj => obj.name.toLowerCase().startWith(input.value));
//         var clutter ="";
//         filteredarray.forEach(function (obj) {
//             clutter +=`<div>
//             <h3>"${obj.name}"</h3>
//             </div>`
//         })
//         document.querySelector(".searchinput").innerHTML="clutter";
//     })
// }
// searchfunction()