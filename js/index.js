function validacion() {
    event.preventDefault();
    
    const fields = ['ID', 'nombre', 'apellido', 'telefono', 'habitacion', 'RH', 'fecha', 'fecha1'];
    for (let field of fields) {
        const input = document.getElementById(field);
        if (input.value.trim() === '') {
            alert(`El campo ${field} no puede estar vacío`);
            return false;
        }
    }
    return true;
}