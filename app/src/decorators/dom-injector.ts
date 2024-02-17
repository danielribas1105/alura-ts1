export function domInjector(seletor: string){
    return function(target: any, propertyKey: string){

        console.log(`Modificado ${target.constructor.name} para ${propertyKey}`);
        let elemento:HTMLElement; //undefined
        const getter = function(){
            if(!elemento){
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`Buscando elem Dom ${seletor} para injeção ${propertyKey}`);
            }
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            {get: getter}
        );
    } 
}