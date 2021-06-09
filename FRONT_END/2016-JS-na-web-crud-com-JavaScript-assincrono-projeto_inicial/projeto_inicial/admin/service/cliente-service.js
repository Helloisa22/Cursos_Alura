//Entra em contato com a API e transforma o arquivo txt em um DOM para ser lido pelo JS
const listaCliente = () =>{
    return fetch(`http://localhost:3000/profile`)
    .then(reposta => {
        return reposta.json();
    })
}

const criaCliente = (nome, email) =>{
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta =>{
        return resposta.body
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE'
    })
}

const detalhaCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(reposta => {
        return reposta.json();
    })
}

const atualizaCliente = (id, nome, email) =>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(reposta => {
        return reposta.json()
    })
}

export const clienteService = {
    listaCliente,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}