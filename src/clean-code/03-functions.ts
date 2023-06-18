(() => {

    // función para obtener información de una película por Id

    // function getAllMovies( movieId: string ) {
    //     console.log({ movieId });
    // }
    function getMovieById( Id: string ) {
        console.log({ Id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    
    // function getAllMovieActors( id: string ) {
    //     console.log({ id });
    // }
    function getInfoMovieCast( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getBioActorById( Id: string ) {
        console.log({ Id });
    }
    
    // Crear una película
        // function movie(title: string, description: string, rating: number, cast: string[] ) {
        //     console.log({ title, description, rating, cast });
        // }
    interface Movie{
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }
    
    function movie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }
//Funcion horrible... a cambiar
/*     const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        return result;
    } */

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    
        if ( isDead ) {
            return 1500;
        }

        if ( isSeparated ) {
            result = 2500;
        } else {
            if ( isRetired ) {
                result = 3000;
            } else {
                result = 4000; 
            }
        }
        
        
        return result;
    }


})();