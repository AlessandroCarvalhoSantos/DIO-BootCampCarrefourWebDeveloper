function getAdmins(Map){

    let Admins = [];
    for([key,value] of Map){
        if(value === "Admin"){
            Admins.push(key);
        }
    }

    return Admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios))