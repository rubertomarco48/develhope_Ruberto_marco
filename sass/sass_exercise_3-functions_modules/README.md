
Modify the exercise 2 code about mixin by creating a module for all declared variables.
Then, create a module with a function. This function should accept a number as parameter and return the value converted into rem. 1rem is equal to 16px
This function should be applied in the main stylesheet, so that the only sizing unit is rem.

**Suggestion:**

@function rem(...
@return calc(...
}

@use "functions" as f;
...

Modifica il codice dell'esercizio 2 sul mixin creando un modulo per tutte le variabili dichiarate. Quindi, crea un modulo con una funzione. Questa funzione dovrebbe accettare un numero come parametro e restituire il valore convertito in rem. 1rem è uguale a 16px Questa funzione dovrebbe essere applicata nel foglio di stile principale, in modo che l'unica unità di misura sia rem.