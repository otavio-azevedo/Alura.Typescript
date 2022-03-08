export function inspect() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);

            /*
            console.log(`--- Method ${propertyKey}`);
            console.log(`---- params ${JSON.stringify(args)}`);
            console.log(`---- return: ${JSON.stringify(result)}`);
            */

            return result;
        }

        return descriptor;
    }
}