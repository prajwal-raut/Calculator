const number  = (e) =>{
    document.querySelector("input").value += e;
}

const allClear = () => {
    document.querySelector("input").value = ""
}

const answer = () => {
    let input = document.querySelector("input").value;
    document.querySelector("input").value = eval(input);
}
