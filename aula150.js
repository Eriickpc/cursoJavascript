import { Cxmsg } from "./cxmsg.js";

// const callbackOk=()=>{};
const callbackNaoOk=()=>{
    const conf={
        cor:"#800",
        tipo:"ok",
        textos:null,
    }
    Cxmsg.mostrar(conf,"Erro","Usuário ou senha incorretos");
};

const configLogin=()=>{
        cor="#048",
        img="logo",
        endpoint="https://api-curso.mrsuubpc2.repl.co"
};
Login.login(null,callbackNaoOk,configLogin);