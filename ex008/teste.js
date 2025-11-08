// alert("Olá, Mundo! JavaScript")

// const res1 = new Promise((resolve, reject) =>{
//         let s = 8
//         if(s == 8){
//             setTimeout(() =>{
//                 resolve(s);
//             }, 5000);
//         }else{
//             reject("Falha na Promise 1");
//         }
// })

// const res2 = new Promise((resolve, reject) =>{
//         let s = 10;
//         if(s === 10){
//             setTimeout(() =>{
//                 resolve(s);
//             }, 1000);
//         }else{
//             reject("Falha na Promise 2")
//         }
//     })

// const res3 = new Promise(function(resolve, reject){
//         let s = 20;
//         if(s === 20){
//             setTimeout(() =>{
//                 resolve(s);
//             }, 500);
//         }else{
//             reject("Falha na Promise 3")
//         }
//     })

// const res4 = new Promise((resolve, reject) =>{
//         let s = 18
//         if(s === 18){
//             setTimeout(() =>{
//                 resolve(s);
//             }, 100);
//         }else{
//             reject("Falha na Promise 4");
//         }
//     })

// Promise.all([res1, res2, res3, res4]).then((res) =>{
//     console.log("Tudo certo: " + res)
// }).catch((erro) =>{
//     console.log("ERRO: " + erro);
// })

// Promise.race([res1, res2, res3, res4]).then((res) =>{
//     console.log("Primeiro valor a resolver: " + res);
// }).catch((erro) =>{
//     console.log("ERRO: " + erro);
// })

const cincoMil = () =>{
    return new Promise((resolve, reject) =>{
        let s = 8
        if(s == 8){
            setTimeout(() =>{
                resolve(s);
            }, 5000);
        }else{
            reject("Falha na Promise 1");
        }
    })
}

const mil = () =>{
    return new Promise((resolve, reject) =>{
        let s = 10
        if(s === 10){
            setTimeout(() =>{
                resolve(s);
            }, 1000);
        }else{
            reject("Falha na Promise 2");
        }
    })
}

const quinhentos = () =>{
    return new Promise((resolve, reject) =>{
        let s = 15
        if(s === 15){
            setTimeout(() =>{
                resolve(s);
            }, 500);
        }else{
            reject("Falha na Promise 3");
        }
    })
}

const cem = () =>{
    return new Promise((resolve, reject) =>{
        let s = 20
        if(s === 20){
            setTimeout(() =>{
                resolve(s);
            }, 100);
        }else{
            reject("Falha na Promise 4");
        }
    })
}

const resolvedoraDePromisesAssincronas = async () =>{
    let res1 = await cincoMil();
    console.log("Resultado 1: " + res1);
    let res2 = await mil();
    console.log("Resultado 2: " + res2);
    let res3 = await quinhentos();
    console.log("Resultado 3: " + res3);
    let res4 = await cem();
    console.log("Resultado 4: " + res4);
    console.log(`Resultado: ${res1} ${res2} ${res3} ${res4}`);
}

resolvedoraDePromisesAssincronas();

function soma(x, y){
    return new Promise((resolve, reject) =>{
        let res = x + y;
        if(res == 10){
            resolve("O resultado da soma é " + res);
        }else{
            reject("Falha na Soma");
        }
    })
}

function produto(x, y){
    return new Promise((resolve, reject) =>{
        let res = x * y
        if(res == 20){
            resolve("O resultado do produto é " + res);
        }else{
            reject("Falha no produto");
        }
    })
}

async function calcular(callback, x, y){
    try{
        let res = await callback(x, y);
        console.log("Tudo certo: " + res);   
    }catch(erro){
        console.log("ERRO: " + erro);
    }
}

calcular(produto, 3, 5);
calcular(soma, 4, 6);
console.log("Testando apensas...");