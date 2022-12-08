export const getContainerCommande=()=>{
    const container = localStorage.getItem("container")?JSON.parse(localStorage.getItem("container")):{};
    return container;
}
export const setContainerCommande=(container)=>{
    localStorage.setItem("container",JSON.stringify(container));
   
}
export const getData=()=>{
    const data = localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):{};
    return data;
}
export const setData=(data)=>{
    localStorage.setItem("data",JSON.stringify(data));
   
}