# Diretório de elementos que podem ser compostos
O Nuxt 3 usa o composables/diretório para importar automaticamente seus elementos que podem ser compostos do Vue para seu aplicativo usando importações automáticas !
Nos bastidores, o Nuxt gera automaticamente o arquivo .nuxt/imports.d.tspara declarar os tipos.
Esteja ciente de que você deve executar nuxi prepareou para permitir que o Nuxt gere os tipos nuxi dev. nuxi buildSe você criar um elemento que pode ser composto sem ter o servidor de desenvolvimento em execução, o TypeScript gerará um erro, comoCannot find name 'useBar'.
Uso


Método 1: usando exportação nomeada
```ts
composables/useFoo.ts
export const useFoo = () => {
  return useState('foo', () => 'bar')
}
```

Método 2: usando a exportação padrão
composables/use-foo.ts ou composables/useFoo.ts
```ts
// It will be available as useFoo() (camelCase of file name without extension)
export default function () {
  return useState('foo', () => 'bar')
}
````

Uso: agora você pode usar elementos que podem ser compostos importados automaticamente em .jse arquivos.ts.vue

```html
<template>
  <div>
    {{ foo }}
  </div>
</template>
<script setup>
const foo = useFoo()
</script>
```