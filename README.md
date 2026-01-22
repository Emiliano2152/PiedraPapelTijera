# Piedra, Papel o Tijeras

---

## Paso 1: Configurar la estructura del proyecto

1. Crea un nuevo **repositorio Git** para tu proyecto.
2. Crea un **documento HTML en blanco** con una etiqueta `<script>`.
3. Comprueba que JavaScript esté vinculado correctamente:
   - Escribe `console.log("Hello World")` en JavaScript.
   - Abre la página web y verifica que **"Hello World"** aparezca en la consola del navegador.

4. Se recomienda enlazar un **archivo JavaScript externo** desde la etiqueta `<script>` para mantener el HTML limpio y organizado.

> **Nota:** No es necesario escribir código adicional en el archivo HTML. Este juego se juega completamente desde la **consola**.

---

## Paso 2: Lógica para obtener la elección de la computadora

Jugarás contra la computadora. Debes escribir una función que devuelva aleatoriamente **"piedra"**, **"papel"** o **"tijeras"**.

- Crea una función llamada `getComputerChoice`.
- Implementa la lógica para que devuelva **una** de las opciones válidas de forma aleatoria.
- **Sugerencia:** `Math.random()` devuelve un número mayor o igual a 0 y menor que 1. Úsalo para seleccionar condicionalmente una opción.
- **Nota:** No es obligatorio usar arrays para este paso.
- Prueba la función con `console.log` antes de continuar.

---

## Paso 3: Lógica para obtener la elección humana

El juego será jugado por una persona. Debes escribir una función que tome la entrada del usuario y la devuelva.

- Crea una función llamada `getHumanChoice`.
- Haz que devuelva una opción válida según lo que ingrese el usuario.
- **Sugerencia:** utiliza `prompt()` para obtener la entrada.
- Asume que el usuario siempre ingresará una opción válida.
- Prueba el valor devuelto usando `console.log`.

---

## Paso 4: Variables de puntuación

El juego registrará la puntuación de ambos jugadores.

- Declara dos variables globales:
  - `humanScore`
  - `computerScore`

- Inicialízalas con el valor **0**.

---

## Paso 5: Jugar una sola ronda

El juego se ejecuta ronda por ronda. Debes escribir una función que:

- Tome las elecciones del humano y de la computadora.
- Determine el ganador.
- Actualice la puntuación.
- Muestre el resultado por consola.

### Requisitos

- Crea una función llamada `playRound`.
- Define dos parámetros:
  - `humanChoice`
  - `computerChoice`

- Haz que `humanChoice` **no distinga entre mayúsculas y minúsculas**.
- Muestra un mensaje descriptivo del resultado, por ejemplo:
  - `"¡Pierdes! El papel le gana a la piedra"`

- Incrementa `humanScore` o `computerScore` según corresponda.

### Código de ejemplo

```js
function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
```

---

## Paso 6: Jugar el juego completo

El juego completo consta de **5 rondas**.

- Crea una función llamada `playGame`.
- Mueve `playRound` y las variables de puntuación dentro de `playGame`.
- Ejecuta **5 rondas** llamando a `playRound` cinco veces.

### Consejos

- Al asignar una llamada de función a una variable, se guarda el **valor de retorno**, no la función.
- Para obtener nuevas elecciones en cada ronda, debes **volver a llamar** a las funciones de elección.
- Puedes refactorizar funciones o crear funciones auxiliares si lo necesitas.
- Si conoces los bucles, puedes utilizarlos. Si no, no te preocupes: se verán en la siguiente lección.
