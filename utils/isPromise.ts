export default function isPromise(value:any):boolean{

    return Boolean(value && typeof value.then === "function");

}