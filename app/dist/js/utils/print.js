export function customPrint(...objs) {
    for (let obj of objs) {
        console.log(obj.forText());
    }
}
