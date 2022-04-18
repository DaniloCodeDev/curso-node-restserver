
const { response, request  } = require('express');

//http://localhost:8081/api/usuarios?q=hola&nombre=walter&apikey=123456
const usuariosGet = (req = request, res = response) => {   

    //const query = req.query
    //const { q, nombre = 'No Nombre', apikey } = req.query //si no ponen en param nombre por default le ponemos un valor
    const { q, nombre, apikey } = req.query
    
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
        //query
    });
}

const usuariosPost = (req, res = response) => {  
    
    //const body =  req.body;
    const { nombre, edad } =  req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
        //body
    })
}
//http://localhost:8081/api/usuarios/10
const usuariosPut = (req, res = response) => {    
    
    //const id = req.params.id;
    const { id } = req.params;
    
    res.json({
        msg: 'put API - controlador',
        id
    })
}

const usuariosPatch = (req, res = response) => {            
    res.json({
        msg: 'patch API - controlador'
    })
}

const usuariosDelete = (req, res = response) => {            
    res.json({
        msg: 'delete API - controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}