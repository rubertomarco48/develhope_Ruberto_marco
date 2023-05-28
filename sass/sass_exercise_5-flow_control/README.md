
Add a new section to the layout as the picture displays. 
The boxes are squares of 45px per side (to be converted into rem) and their alignment is performed with flex rules.
The background color, the color, and the font-size can be handled using the flow control (@for, @if, etc...) and the darken and lighten methods (the numbers have a multiplier equal to 5) 
In particular, you need to create the classes .fs-1rem, .fs-2rem e .fs-3rem using @each
The added colors are black and white only


**Suggerimento (da inserire a parte e quindi da rimuovere dal readme)**
@for $var from 1 to 20 {
...
@if $var == 10 {
...


    }
}

Aggiungi una nuova sezione al layout mentre viene visualizzata l'immagine.
I riquadri sono quadrati di 45px per lato (da convertire in rem) e il loro allineamento è eseguito con regole flex.
Il colore di sfondo, il colore e la dimensione del carattere possono essere gestiti utilizzando il controllo di flusso (@for, @if, ecc...) e i metodi di scurimento e schiarimento (i numeri hanno un moltiplicatore pari a 5)
In particolare, è necessario creare le classi .fs-1rem, .fs-2rem e .fs-3rem utilizzando @each
I colori aggiunti sono solo bianco e nero