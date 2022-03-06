export function logExecutionTime() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        //override orinal behavior
        descriptor.value = function (...args: any[]) {
            const t1 = performance.now();

            const result = originalMethod.apply(this, args);

            const t2 = performance.now();
            console.log(`${propertyKey}, execution time: ${(t2 - t1) / 1000}`);
        };

        return descriptor;
    }
}