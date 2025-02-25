console.log('test');

// const allH1 = document.getElementsByTagName('h1');
// console.log(allH1)

document.getElementById('click-btn')
.addEventListener('click', function(){
    console.log('click')
    const ChangeTitle = document.getElementById('title')
    // console.log(ChangeTitle)
    ChangeTitle.innerText = 'bijoiy debos';
})


const allTag = document.getElementsByClassName('name');
console.log(allTag)


document.getElementById('scnd-click')
.addEventListener('click', function(){
    // console.log('hello ')
    document.getElementById('name').style.color = 'red'
  
})
const infom = document.getElementById('info').innerText;
console.log(infom)

const input = document.getElementById('input-type').value;
console.log(input)



// next   

const container =document.getElementById('container')
const p = document.createElement('p')
p.innerText = 'hello tamnnaa';
container.appendChild(p)
