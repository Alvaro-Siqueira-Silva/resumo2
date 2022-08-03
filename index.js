const express = require('express')

const app = express()

app.set('views','./')

app.listen(3050,()=>{
    console.log("servidor local em http://localhost:3050")
})

const mongoose = require('mongoose')

const conexao = ()=>{
mongoose.connect('mongodb+srv://userresumo:0123456789@ac1tri.aganv.mongodb.net/databaseresumo?retryWrites=true&w=majority')
}

const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina:String
})

const alunos = mongoose.model('alunos',modelo)

app.get('/',async(req,res)=>{
    conexao()
    const resultado = await alunos.find()
    console.log(resultado)
    //res.send('funcionando')
res.render('index.ejs',{resultado})
})