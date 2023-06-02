class Login{
    static logado=false;
    static matLogado=null;
    static nomeLogado=null;
    static acessoLogado=null;
    static estilocss=null;
    static callbackOk=null
    static callbackNaoOk=null
    static config={
        cor:null, //048
        img:null,
        endpoint:null //https://api-curso.mrsuubpc2.repl.co
    }

    static login=(callbackOk,callbackNaoOk,config)=>{   
        this.config=config;
        this.callbackOk=()=>{callbackOk()};
        this.callbackNaoOk=()=>{callbackNaoOk()};
        this.estilocss=
            ".fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.75);box-sizing: border-box;}"+
            ".baseLogin{display: flex;justify-content: center;align-items: stretch;width: 50%;box-sizing: inherit;}"+
            ".elementosLogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 40%;background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+
            ".logoLogin{display: flex;justify-content: center;align-items: center;flex-direction: column;width: 50%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}"+
            ".logoLogin img{width:100%;box-sizing: inherit;}"+
            ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px;box-sizing: inherit;}"+
            ".campoLogin label{font-size: 18px;}"+
            ".campoLogin input{padding: 5px;background-color: #fff;border: 1px solid #000;border-radius: 5px;}"+
            ".botoesLogin{display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit;}"+
            `.botoesLogin button{cursor: pointer;background-color:#${this.config.cor};color: #fff;border-radius: 5px;padding: 10px;width: 100px;box-sizing: inherit;}`
            
            const importEstilo=document.createElement("style");
            importEstilo.setAttribute("id","id_estiloLogin");
            importEstilo.setAttribute("rel","stylesheet");
            importEstilo.setAttribute("stylesheet","text/css");
            importEstilo.innerHTML=this.estilocss;
            document.head.appendChild(importEstilo);

            const fundoLogin=document.createElement("div");
            fundoLogin.setAttribute("id","fundoLogin");
            fundoLogin.setAttribute("class","fundoLogin");
            document.body.prepend(fundoLogin)

            const baseLogin=document.createElement("div");
            baseLogin.setAttribute("id","baseLogin");
            baseLogin.setAttribute("class","baseLogin");
            fundoLogin.appendChild(baseLogin);

            const elementosLogin=document.createElement("div");
            elementosLogin.setAttribute("id","elementosLogin");
            elementosLogin.setAttribute("class","elementosLogin");
            baseLogin.appendChild(elementosLogin);

            const campoLoginUsername=document.createElement("div");
            campoLoginUsername.setAttribute("id","campoLoginUsername")
            campoLoginUsername.setAttribute("class","campoLogin");
            elementosLogin.appendChild(campoLoginUsername);

            const labelUsername=document.createElement('label');
            labelUsername.setAttribute("id","labelUsername");
            labelUsername.innerHTML="Usuario";
            campoLoginUsername.appendChild(labelUsername);

            const inputUsername=document.createElement('input');
            inputUsername.setAttribute("type","text");
            inputUsername.setAttribute("id","f_usuario");
            inputUsername.setAttribute("name","f_usuario");
            campoLoginUsername.appendChild(inputUsername);

            const campoLoginSenha=document.createElement("div");
            campoLoginSenha.setAttribute("id","campoLoginSenha")
            campoLoginSenha.setAttribute("class","campoLogin");
            elementosLogin.appendChild(campoLoginSenha);
            
            const labelSenha=document.createElement("label");
            labelSenha.setAttribute("id","labelSenha");
            labelSenha.innerHTML="Senha";
            campoLoginSenha.appendChild(labelSenha);

            const inputSenha=document.createElement("input");
            inputSenha.setAttribute("type","password");
            inputSenha.setAttribute("id","f_senha");
            inputSenha.setAttribute("name","f_senha");
            campoLoginSenha.appendChild(inputSenha);

            const botoesLogin=document.createElement("div");
            botoesLogin.setAttribute("class","botoesLogin");
            elementosLogin.appendChild(botoesLogin)

            const btn_login=document.createElement("button");
            btn_login.setAttribute("id","btn_login");
            btn_login.innerHTML="login";
            botoesLogin.appendChild(btn_login);
            btn_login.addEventListener('click',()=>{
                this.verificarLogin()
            })

            const btn_cancelar=document.createElement("button");
            btn_cancelar.setAttribute("id","btn_cancelar");
            btn_cancelar.innerHTML="Cancelar";
            botoesLogin.appendChild(btn_cancelar);
            btn_cancelar.addEventListener('click',()=>{
                this.fechar()
            })

            const logoLogin=document.createElement("div");
            logoLogin.setAttribute("id","logoLogin");
            logoLogin.setAttribute("class","logoLogin");
            baseLogin.append(logoLogin);

            const imgLogo=document.createElement("img");
            imgLogo.setAttribute("src",this.config.img);
            imgLogo.setAttribute("title","Curso");
            logoLogin.append(imgLogo);


    };

    static verificarLogin=()=>{
        const mat=document.getElementById("f_usuario").value;
        const pas=document.getElementById("f_senha").value;

        const endpoint=`${this.config.endpoint}/?matricula=${mat}&senha=${pas}`
        fetch(endpoint).then(res=>res.json()).then(res=>{
            if(res){
                sessionStorage.setItem("logado","true");
                sessionStorage.setItem("matLogado",mat);
                sessionStorage.setItem("nomeLogado",res.nome);
                sessionStorage.setItem("acessoLogado",res.acesso);
                this.callbackOk();
                this.fechar();
            }else{
                sessionStorage.setItem("logado","false");
                sessionStorage.setItem("matLogado","");
                sessionStorage.setItem("nomeLogado","");
                sessionStorage.setItem("acessoLogado","");
                this.callbackNaoOk()
                }   
            });

        // if(mat=="123" & pas=="321"){
        //     return true;
        // }else{
        //     return false;
        // }
    }

    static fechar=()=>{
        const fundoLogin=document.getElementById("fundoLogin");
        fundoLogin.remove()

        const id_estiloLogin=document.getElementById("id_estiloLogin");
        id_estiloLogin.remove();
    }
};

// export {Login};
