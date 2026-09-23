export function aleatorio(lista) {         //incluir aula 3
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}