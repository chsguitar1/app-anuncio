export class RegisterModel {
    email: string
    nome?:string
    endereco?:string
    cnpj?:string
    atividade?:string

    constructor(options:{
        email: string
        nome:string
        endereco:string
        cnpj:string
        atividade:string
    }){
        this.email = options.email
        this.nome = options.nome
        this.endereco = options.endereco
        this.cnpj = options.cnpj
        this.atividade = options.atividade
    }
}
