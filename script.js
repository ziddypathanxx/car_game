
let speed = 0;

document.getElementById('meter').onchange = () => {
    let input = document.getElementById('meter').value;
    console.log(input)
    if(input == 0){
        console.log('if working')
        document.getElementsByClassName('tyre')[0].style.animation = ``;
        document.getElementsByClassName('tyre')[1].style.animation = ``;
        document.getElementsByClassName('road')[0].style.animation = ``;
        document.getElementsByClassName('sky')[0].style.animation = ``;
    }else{
    document.getElementsByClassName('tyre')[0].style.animation = `run ${1/input}s linear infinite`;
    document.getElementsByClassName('sky')[0].style.animation = `skymove linear ${10/input}s infinite`;
    document.getElementsByClassName('tyre')[1].style.animation = `run ${1/input}s linear infinite`;
    document.getElementsByClassName('road')[0].style.animation = `track ${17/input}s linear infinite`;
    document.getElementById('speed').innerHTML = `Speed : ${input}`;
    }
    document.getElementById('speed').innerHTML = `Speed : ${input}`;
}
