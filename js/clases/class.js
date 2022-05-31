class Banco{
    constructor(id,nombre,monto)
    {
        this.id = id
        this.nombre = nombre
        this.monto = monto
    }
}
const banco1 = new Banco(1, "Galicia", 10.000)
const banco2 = new Banco(2, "Macro", 15.000)
const banco3 = new Banco(3,"Nacion", 0)

const bancos = [banco1,banco2,banco3];

