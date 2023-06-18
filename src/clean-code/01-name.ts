(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flag: false },
        { id: 2, flag: false },
        { id: 3, flag: true },
        { id: 4, flag: false },
        { id: 5, flag: false },
        { id: 7, flag: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flag );

    //Incorrecto
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Correcto
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const todayIs = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const fileCountInDirectory = 33;
    
    // primer nombre - first name
    const userFirstName = 'Fernando';
    
    // primer apellido - last name
    const userSurname = 'Herrera';

    // días desde la última modificación - days since modification
    const elapsedDaysFromUpdate = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const classMaxPerStudent = 6;


})();
