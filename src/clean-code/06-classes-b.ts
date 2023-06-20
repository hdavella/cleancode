(()=>{

// CON PRINCIPIO DE RESPONSABILIDAD UNICA

        type Gender = 'M'|'F';

        interface PersonProperties{
            birthdate: Date;
            gender   : Gender;
            name     : string;
        }

        class Person{
            public birthdate: Date;
            public gender   : Gender;
            public name     : string;

            constructor( {name, gender, birthdate}: PersonProperties){

                this.birthdate= birthdate;
                this.gender   = gender;
                this.name     = name;
            }
        }

        class User extends Person{

            public lastAccess: Date;

            constructor(
                public email: string,
                public role: string,
                
                name: string,
                gender: Gender,
                birthdate: Date
            ){
                super(name, gender, birthdate);
                this.lastAccess = new Date;
            }

            checkCredentials(){
                return true;
            }
        }

        class UserSettings extends User{
            constructor(
                public workingDirectory: string,
                public lastOpenFolder: string,
                email: string,
                role: string,
                name: string,
                gender: Gender,
                birthdate: Date
            ){
                super(role, email, name, gender, birthdate);
            }
        }

        const newUserSettings = new UserSettings('/home/hdavella', '/hdavella', 'hdavella@gmail', 'admin', 'Hernan', 'M', new Date('1978-04-27'));
        console.warn({newUserSettings});

})();