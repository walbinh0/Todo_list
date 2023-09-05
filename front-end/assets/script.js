//let array = []

function addItem() {
    let list = document.getElementById('list')
    let input = document.getElementById('input').value

    let div = document.createElement('div')
    let x = document.createElement('input')
    let checkbox = document.createElement('input')
    let li = document.createElement('li')

    checkbox.type = "checkbox";
    x.type = "button";
    x.value = 'X'

    checkbox.classList.add('checkbox');
    li.classList.add('item');
    x.classList.add('deleteItem')

    //array.push(input).value
    li.innerHTML = input

    x.innerHTML = 'X'

    list.appendChild(div)
    div.appendChild(x)
    div.appendChild(checkbox)
    div.appendChild(li)

    x.addEventListener("click", deleteItem);
    function deleteItem() {
        //array.splice
        li.parentNode.removeChild(li)
        x.parentNode.removeChild(x)
        checkbox.parentNode.removeChild(checkbox)
    }

    //console.log(array)

}

function clearInput() {
    document.getElementById('input').value = " "
}


