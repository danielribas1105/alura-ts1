export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificado ${target.constructor.name} para ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando elem Dom ${seletor} para injeção ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map