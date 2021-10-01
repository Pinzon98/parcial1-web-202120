const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');
const getinfo = (info) => `
    <th>${info.id}</th>
    <td>${info.primerJugador}</td>
    <td>${info.segundoJugador}</td>`;

enterButton.addEventListener('click', (event) => {
    const tbody = document.getElementById('body-table');
    const res = getresults(input.value).then(function(res) { if(res.length == 0){alert("No Match found")} res.forEach(info => {
        const fila = document.createElement('tr');
        fila.innerHTML = getinfo(info);
        tbody.appendChild(fila);
    })})
    event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
    const resp = await fetch(`api?input=${heightRef}`);
    const data = await resp.json();
    console.log('data from back', data.resultado);
    return data.resultado;
    //printValues(data);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}