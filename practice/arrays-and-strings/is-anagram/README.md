# Is Anagram

Tu reto es implementar una función que determine si dos strings son anagramas entre sí.

> Dos strings son anagramas si tienen exactamente las mismas letras, con la misma cantidad, sin importar el orden.

## Ejemplos

- `listen` y `silent` son anagramas porque tienen las mismas letras en la misma cantidad.
- `hello` y `world` no son anagramas porque no tienen las mismas letras.
- `aabbcc` y `abcabc` son anagramas porque tienen las mismas letras en la misma cantidad.
- `add` y `aad` no son anagramas porque tienen diferentes cantidades de letras.

## Instrucciones

Ya tienes todo lo necesario para resolver el ejercicio. Sólo debes implementar la función `isAnagram` en el archivo `src/is-anagram.js`.

Importante: No modifiques el nombre de la función ni su firma.

Sólo debes implementar la función:

```js
export function isAnagram(str1, str2) {
  // Tu código aquí
}
```

## Parámetros

- `str1` (string): Primera palabra.
- `str2` (string): Segunda palabra.

## Rango de valores

- `str1.length` y `str2.length`: mínimo 0 y máximo 10⁵ caracteres.
- Ambos strings solo contienen letras del alfabeto inglés en minúscula (`a-z`).
- No contienen espacios ni caracteres especiales.

## 📤 Retorno

- `true` si ambos strings son anagramas.
- `false` en caso contrario.

## Ejemplos de uso:

```js
isAnagram('listen', 'silent'); // true
isAnagram('hello', 'world'); // false
```

## Cómo probar tu solución

Haz click en la pestaña `Tests` (arriba en CodeSandbox) o corre el comando:

```bash
npm test
```

Si todo está correcto, verás que los tests pasan ✅.

## Tips

- ¿Puedes pensar en una solución que no implique ordenar los strings incluso si usas funciones nativas de JavaScript?
- ¿Puedes pensar en una solución que no implique bucles anidados?
- Una solución eficiente debería tener una **complejidad temporal de O(n)**, donde `n` es la longitud de los strings.

## Pistas

- Puedes usar un hash map para contar la cantidad de letras en cada string.
