
# Observaciones

Brenda, felicitaciones por su trabajo. Tu TP se ve muy bien, y el funcionamiento es correcto. Se nota el avance desde el TP1 hasta aca en el maquetado y la estructura general. 

A nivel JS, la dependencia del modelo de Ada es catastrófica. Hay funciones que están prácticamente copiadas, y en muchas ocasiones mal resueltas, ya que el modelo de Ada no resuelve siempre las cosas de la mejor manera. Hay ordenes que das que no tienen sentido para tu TP, nombres de variables que no creo que sirvan para tu estructura, y muchas maneras de resolver las cosas que siento que no aportan nada a tu aprendizaje. Para futuros trabajos prefiero realmente que no resuelvas las cosas - lo que me da la oportunidad de contarte como hacerlo - a que copies ordenes y luego yo no pueda saber si es algo que entendiste o no. Entiendo perfectamente usar el modelo como consulta, para confirmar cosas, pero en este caso la dependencia es tan grande que realmente no tengo manera de saber cuanto aprendiste. 

## Estructura correcta de documento HTML

Te dejé varios comentarios en el archivo. La estructura general es correcta, pero tenes mal el lenguaje del documento (esto tiene un impacto altisimo) e importás incorrectamente las tipografias de google fonts (estas usando el import para CSS en html). 

## Respeta el diseño dado

Cumplido en general. Los aside no ocupan el 100% del alto de la pantalla y no se ven bien. Consultame si no sabes como resolver eso. 

## Respeta el funcionamiento

En general, cumplido. 
- Cuando selecciono "fondo transparente", no se pone el fondo transparente, sino negro. 
- El select de "aclarar, oscurecer", etc, el color de fondo no funciona. 
Consultame si tenés dudas de como resolver esto. 

## Responsive funciona correctamente

No funciona tu responsive para celulares, y eso es por un mal entendimiento de cómo funciona la cascada en CSS con los media queries. 

Tus media queries estan ordenadas asi: 

```css
@media (max-width: 576px) {
    ...
}

@media (max-width: 768px) {
    ...
}

@media (max-width: 992px) {
    ...
}
```

Ahi estas diciendo literalmente "cuando la pantalla sea mas chica que 576, se van a aplicar los siguientes estilos". Luego, "cuando la pantalla sea mas chica que 768, se van a aplicar los siguientes estilos" y finalmente "cuando la pantalla sea mas chica que 992, se van a aplicar los siguientes estilos". Ahora bien: si yo veo tu pagina desde un celular que mide 450px, **estas tres ordenes se estan cumpliendo a la vez**. Y en la cascada de CSS, si hay mas de una orden a aplicar, **se aplica la ultima**. De esa manera, en celulares terminamos viendo los estilos para pantallas hasta 992px.

Notá que al cambiar el orden de estas media queries, ya tu pagina mejora un montón. No queda bien, pero mejora. Te pido que te aboques a mejorar el responsive, ya que es realmente muy importante. 

## Buena estructura de proyecto

No entiendo que hace la carpeta "2do portfolio librerias". No deberia estar en la entrega. 

## Código bien indentado

Cumplido. 

## Comentarios que permiten mejorar la legibilidad del código

Impecables. 

## Uso correcto de etiquetas semánticas

Cumplido. 

## Buenos nombres de clases

No cumplido. Usás muchisimo camelCase en tus nombres de clase, y elementos html ("tituloH3"). Otros nombres que es imposible saber lo que son ("div-opc") Cuando los nombres de clase tienen mas de una palabra, las separamos con-guiones. Reservamos el camelCase (separarConMayusculas) para javascript. 

Las etiquetas HTML no son buenos descriptores **en sentido funcional** de un elemento. Un h3 no refleja lo que hace especificamente ese h3 en tu pagina: ser el titulo del aside. 

## Buenos nombres de funciones y variables

Cumplido a medias, te deje algunos comentarios. 

## Reutilización de estilos

Cumplido. 

## Funciones pequeñas

Cumplido, aunque te dejé un par de comentarios para mejorarlo aún más. 

## Accesibilidad

Cumplido a medias. Tu pagina es aceptable a nivel accesibilidad, pero hay muchisimo para mejorar. 
- Los label del formulario deben o bien rodear al elemento, o bien tener el atributo "for". Eso es asi para que el lector de pantalla pueda identificar a que elemento se esta describiendo. En tu caso el lector no sabe para que elemento es cada label. 
- Esto tambien impacta en la usabilidad. Cuando el label rodea al elemento, el click en el label es un click en el elemento. Esto ayuda por ejemplo a usuarios con dificultades motrices: es dificil hacer click en un checkbox chiquitito, pero mas facil hacer click en el label. Eso no ocurre en tu pagina. 
- Ojo al cambio de color a negro en el boton de descarga modo oscuro. No se cumple el requisito de contraste en los colores. 
- A tu imagen principal, la del meme, le falta el alt. Como va a saber el usuario de lector de pantalla que alli es donde se edita el meme?

## Commits con mensajes adecuados

No cumplido. Muy poquitos commits, con poca descripcion de lo que haces en cada uno. Tambien falta el README y el favicon. 

# Nota final: 7

