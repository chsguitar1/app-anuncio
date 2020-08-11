export class LoginModel {
    email: string
    senha: string
    status?: boolean

    constructor(option:{
        email: string
        senha: string
        status?: boolean 
    }){
        this.email = option.email
        this.senha = option.senha
        this.status = option.status
    }

}
