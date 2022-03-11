export function logExecutionTime() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, execution time: ${(t2 - t1) / 1000}`);
            return result;
        };
        return descriptor;
    };
}
//# sourceMappingURL=log-execution-time.js.map