export const parseRequestUrl = ()=>{
    const address = document.location.hash.slice(1);
    const queryString = document.location.hash.slice(1).split("?").length===2
    ? document.location.hash.slice(1).split('?')[1]: '';
    const url = address.toLowerCase() || '/';
    const r = url.split('/');
    const q = queryString.split('=');
    return {
        ressource:r[0],
        id:r[1],
        verb:r[2],
        name:q[0],
        value:q[1]
    } ;
   
}