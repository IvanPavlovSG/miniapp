function getInputs(input1, input2) {
    let a3 = input1 * 3 + input2 * 2
    console.log(a3)
    end.innerText = a3;
}


let end = document.getElementById("Num");

document.querySelector('button').onclick = Click;

function Click () {
    let inp1 = document.querySelector('.inp1').value;
    let inp2 = document.querySelector('.inp2').value;
    let a1 = getInputs(inp1, inp2);

}