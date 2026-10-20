// Leccion 8 — 180 preguntas alternativas
// Generadas con gemma4 el 2026-07-04 12:39
// Distribucion: 60/60/60 (1c/2c/3c)
window.LESSON_QUESTIONS_ALT = window.LESSON_QUESTIONS_ALT || {};
window.LESSON_QUESTIONS_ALT[8] = [
  {
    "q": "En términos de densidad conjunta $f(x,y)$, ¿cómo se calcula la función marginal para X?",
    "opts": [
      "$f_X(x) = \\int f(x,y) dy$",
      "$p_X(x) = \\sum_y p(x,y)$",
      "$f_Y(y) = \\int f(x,y) dx$",
      "$f(x,y) = f_X(x) \\cdot f_Y(y)$"
    ],
    "c": [
      0
    ],
    "exp": "La función marginal de X (para Variables Aleatorias Continuas o Discretas) se obtiene integrando o sumando la densidad conjunta $f(x,y)$ sobre todo el rango posible de Y. Por lo tanto, $f_X(x) = \\int f(x,y) dy$."
  },
  {
    "q": "Si X e Y son variables aleatorias discretas con función de masa conjunta $p(x,y)$, ¿cuál es la fórmula correcta para calcular $P(X=x|Y=y)$?",
    "opts": [
      "$\\frac{p(x,y)}{p_Y(y)}$",
      "$\\frac{p(x,y)}{\\sum_{x'} p(x',y)}$",
      "$p(x,y) \\cdot p_Y(y)$",
      "$p_X(x) / p(x,y)$"
    ],
    "c": [
      0
    ],
    "exp": "La probabilidad condicional se define como la razón de la probabilidad conjunta a la probabilidad del evento dado. $P(X=x|Y=y) = \\frac{p(x,y)}{p_Y(y)}$."
  },
  {
    "q": "Para que dos variables aleatorias X e Y sean estadísticamente independientes, ¿cuál debe cumplirse con su función de densidad conjunta $f(x,y)$?",
    "opts": [
      "$f(x,y) = f_X(x) \\cdot f_Y(y)$",
      "$E[X|Y] = E[X]$",
      "$Var[X|Y] = Var[X]$",
      "$f(x,y) > 0$ para todo $x, y$"
    ],
    "c": [
      0
    ],
    "exp": "La condición fundamental de independencia es que la conjunta debe ser igual al producto de las marginales: $f(x,y) = f_X(x) \\cdot f_Y(y)$."
  },
  {
    "q": "Dada una distribución conjunta de variables aleatorias X e Y, ¿cuál representa la Ley de Esperanzas Totales?",
    "opts": [
      "$E[X] = E[E[X|Y]]$",
      "$Var[X] = E[Var[X|Y]] + Var[E[X|Y]]$",
      "$E[XY] = E[X] E[Y]$",
      "$E[X+Y] = E[X] + E[Y] + E[XY]$"
    ],
    "c": [
      0
    ],
    "exp": "La Ley de Esperanzas Totales establece que la esperanza de X se puede calcular tomando la esperanza condicional de $E[X|Y]$ con respecto a Y: $E[X] = E[E[X|Y]]$."
  },
  {
    "q": "Si conocemos las distribuciones marginales y sabemos que el producto es constante, ¿qué nos indica esto sobre la relación entre X e Y?",
    "opts": [
      "Que son necesariamente independientes.",
      "$f(x,y) \\ge f_X(x) f_Y(y)$",
      "Que $E[XY] = E[X] E[Y]$ siempre se cumple.",
      "Ninguna de las anteriores."
    ],
    "c": [
      0
    ],
    "exp": "Aunque la condición $f(x,y) = k \\cdot f_X(x) f_Y(y)$ (donde $k$ es una constante) puede ser utilizada en ciertos contextos, el único criterio estadístico riguroso para declarar independencia a partir de las distribuciones es que $p(x,y) = p_X(x) p_Y(y)$ o $f(x,y) = f_X(x) f_Y(y)$. La opción [0] es la definición matemática estricta."
  },
  {
    "q": "Al calcular la varianza de X dado Y=y, el resultado obtenido será:",
    "opts": [
      "Una función que depende únicamente de $y$.",
      "Una constante.",
      "Un valor fijo, independientemente de $y$.",
      "La desviación estándar conjunta."
    ],
    "c": [
      0
    ],
    "exp": "Por definición, $Var[X|Y=y]$ es la varianza de X cuando Y está fijado en un valor específico $y$. Matemáticamente, esta expresión contiene el parámetro $y$, por lo que resulta en una función de $y$."
  },
  {
    "q": "Respecto a las propiedades de los momentos y esperanzas conjuntas, ¿qué afirmación es correcta?",
    "opts": [
      "$E[X+Y] = E[X] + E[Y]$ siempre.",
      "$Var[X] \\le E[X^2]$",
      "$Cov(X,Y) = 0 \\implies X, Y$ independientes.",
      "Si $E[XY] = E[X] E[Y]$, entonces $X, Y$ son independientes."
    ],
    "c": [
      0
    ],
    "exp": "La suma de variables aleatorias siempre tiene una esperanza igual a la suma de las esperanzas individuales, independientemente de su correlación. Las otras opciones no son necesariamente ciertas (ej: Cov=0 solo implica independencia si se cumplen condiciones adicionales)."
  },
  {
    "q": "Considerando la función de masa conjunta $p(x,y)$ para variables discretas X e Y, ¿cuál es la forma correcta de calcular la probabilidad de que $X=x$ y $Y=y$? ",
    "opts": [
      "$p(x, y)$",
      "$P(X \\le x, Y \\le y)$",
      "$p_{X|Y}(x, y)$",
      "$p_X(x) \\cdot p_Y(y)$"
    ],
    "c": [
      0
    ],
    "exp": "La función de masa conjunta, $p(x, y)$, define directamente la probabilidad de que X tome el valor x Y Y tome el valor y en una distribución discreta."
  },
  {
    "q": "Si conocemos la Función de Distribución Acumulada (FDA) conjunta, $F(x,y)$, ¿cómo se puede obtener la función de masa conjunta $p(x,y)$? ",
    "opts": [
      "$p(x, y) = F(x, y) - F(x-1, y) - F(x, y-1) + F(x-1, y-1)$",
      "$p(x, y) = \\lim_{h \\to 0} f(x,y) \\cdot h$",
      "$p(x, y) = p_X(x) \\cdot p_Y(y)$",
      "$p(x, y) = F(x+1, y+1) - F(x, y)$"
    ],
    "c": [
      0
    ],
    "exp": "La función de masa conjunta se obtiene mediante diferencias de la FDA acumulada: $p(x, y) = P(X=x, Y=y)$, que es el incremento en la probabilidad al pasar de $(x-1, y-1)$ a $(x, y)$."
  },
  {
    "q": "En el contexto de variables aleatorias continuas con función de densidad conjunta $f(x,y)$, ¿cuál representa correctamente la distribución marginal de Y? ",
    "opts": [
      "$f_Y(y) = \\int_{-\\infty}^{\\infty} f(x, y) dx$",
      "$f_Y(y) = \\sum_{x=-\\infty}^{\\infty} p(x, y)$",
      "$f_Y(y) = f(y) \\cdot c$ (donde $c$ es una constante)",
      "$p_Y(y) = F(y) - F(y-1)$"
    ],
    "c": [
      0
    ],
    "exp": "La función de densidad marginal de Y, $f_Y(y)$, se obtiene integrando la función conjunta sobre todo el rango posible de X: $f_Y(y) = \\int f(x, y) dx$."
  },
  {
    "q": "¿Qué condición debe cumplirse para que dos variables aleatorias continuas, X e Y, sean consideradas estadísticamente independientes? ",
    "opts": [
      "$f(x, y) = f_X(x) \\cdot f_Y(y)$ para todo $(x, y)$.",
      "La esperanza condicional de X dado Y es constante: $E[X|Y] = c$.",
      "$f_Y(y) = 0$ si $f_X(x) > 0$.",
      "Que sus distribuciones marginales sean uniformes."
    ],
    "c": [
      0
    ],
    "exp": "La condición fundamental de independencia es que la función de densidad conjunta debe ser el producto de las funciones de densidad marginales: $f(x, y) = f_X(x) \\cdot f_Y(y)$."
  },
  {
    "q": "¿Cuál es la fórmula para calcular la esperanza condicional de X dado Y=y, $E[X|Y=y]$? ",
    "opts": [
      "$E[X|Y=y] = \\int x \\cdot p(x|y) dx$",
      "$E[X|Y=y] = \\sum x \\cdot p(x|y)$",
      "$E[X|Y=y] = E[X]/p_Y(y)$",
      "$E[X|Y=y] = f(x, y)/f_Y(y)$"
    ],
    "c": [
      0
    ],
    "exp": "La esperanza condicional se calcula usando la distribución condicional. En el caso discreto: $E[X|Y=y] = \\sum x \\cdot p(x|y)$. En el caso continuo: $E[X|Y=y] = \\int x \\cdot f(x|y) dx$."
  },
  {
    "q": "Si sabemos que $Var(X)$ y $Var(Y)$ son independientes de sus valores respectivos, ¿qué podemos afirmar sobre la varianza total $Var(X)$ utilizando las leyes de esperanza? ",
    "opts": [
      "$Var(X) = E[Var(X|Y)] + Var(E[X|Y])$",
      "$Var(X) \\le E[Var(X|Y)]$",
      "$Cov(X, Y) = 0$ es una condición suficiente para la independencia.",
      "$E[X] = E[E[X|Y]]$ siempre."
    ],
    "c": [
      0
    ],
    "exp": "La Ley de Varianzas Totales establece que $Var(X) = E[Var(X|Y)] + Var(E[X|Y])$. Recordar que $Cov(X, Y)=0$ solo implica independencia si X y Y son normales."
  },
  {
    "q": "¿Qué representa la distribución condicional $p(x|y)$? ",
    "opts": [
      "La probabilidad de obtener el valor x cuando ya se sabe que Y es igual a y.",
      "$p(x|y) = p(x, y) / p_Y(y)$.",
      "$p(x|y)$ describe la relación inversa entre X e Y.",
      "$p(x|y)$ es siempre menor que $p(x, y)$."
    ],
    "c": [
      0
    ],
    "exp": "La distribución condicional $p(x|y)$ ajusta el espacio muestral de X al nuevo conocimiento de Y=y. Se calcula mediante la razón $p(x,y) / p_Y(y)$."
  },
  {
    "q": "¿Consideremos la relación entre independencia, covarianza y esperanza conjunta. ¿Cuáles son las afirmaciones correctas? ",
    "opts": [
      "$E[XY] = E[X]E[Y]$ si y solo si X e Y son independientes.",
      "Si X e Y son independientes, su covarianza es cero: $Cov(X, Y) = 0$.",
      "$Cov(X, Y) = 0$ implica independencia, excepto en variables normales.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "La condición $Cov(X, Y)=0$ es necesaria pero no suficiente para la independencia (a menos que se asuma normalidad). La igualdad $E[XY] = E[X]E[Y]$ es el test más directo de independencia."
  },
  {
    "q": "¿Qué es un distribucion conjunta? ",
    "opts": [
      "Una función que mapea pares $(x, y)$ a probabilidades o densidades.",
      "$p(x,y) = p_X(x) \\cdot p_Y(y)$ (siempre).",
      "$p(x,y) + p_X(x) > 1$.",
      "Solo se utiliza para variables discretas."
    ],
    "c": [
      0
    ],
    "exp": "La distribución conjunta define la probabilidad de que *ambos* eventos ocurran simultáneamente. Su formato puede ser masa (discreto) o densidad (continuo)."
  },
  {
    "q": "En el contexto de variables aleatorias bidimensionales (X, Y), ¿qué representa la Función de Distribución Acumulada Conjunta $F(x, y)$?",
    "opts": [
      "Es la probabilidad de que $X$ tome un valor menor o igual a $x$ Y $Y$ tome un valor menor o igual a $y$.",
      "Es la probabilidad de que X sea exactamente $x$.",
      "Solo se puede calcular si las variables son independientes.",
      "Representa el límite esperado del producto de las distribuciones marginales."
    ],
    "c": [
      0
    ],
    "exp": "La FDA conjunta, $F(x, y) = P(X \\le x, Y \\le y)$, describe la probabilidad acumulada simultánea de X e Y. Las otras opciones son incorrectas o se refieren a conceptos parciales/derivados."
  },
  {
    "q": "¿Cómo se calcula la función de densidad marginal $f_X(x)$ para variables continuas?",
    "opts": [
      "Integrando la densidad conjunta sobre todo el rango posible de $Y$, es decir, $\\int_{-\\infty}^{\\infty} f(x, y) dy$.",
      "Simplemente tomando la probabilidad en $P(X \\le x)$.",
      "Usando la fórmula condicional: $f_X(x) = f(x, y) / f_Y(y)$.",
      "Es igual a la densidad conjunta $f(x, y)$."
    ],
    "c": [
      0
    ],
    "exp": "Para obtener la distribución marginal de X (o Y), se debe integrar la función de densidad conjunta sobre todo el espacio del eje variable. En este caso, se integra respecto a Y: $f_X(x) = \\int f(x, y) dy$."
  },
  {
    "q": "¿Cuál es la condición fundamental para que dos variables aleatorias X e Y sean consideradas estadísticamente independientes?",
    "opts": [
      "La distribución conjunta debe ser igual al producto de sus distribuciones marginales: $p(x, y) = p_X(x) \\cdot p_Y(y)$ (o $f(x, y) = f_X(x) \\cdot f_Y(y)$).",
      "Sus distribuciones marginales deben ser normales.",
      "Deben tener la misma media ($\\mu_X = \\mu_Y$).",
      "Su función de covarianza debe ser cero."
    ],
    "c": [
      0
    ],
    "exp": "La condición más estricta y fundamental para la independencia es que la probabilidad (o densidad) conjunta sea el producto simple de las probabilidades (o densidades) marginales. Si $p(x,y) = p_X(x) p_Y(y)$, son independientes."
  },
  {
    "q": "¿Cómo se calcula formalmente la distribución condicional de X dado que Y = y?",
    "opts": [
      "Como una función de densidad: $f_{X|Y}(x|y) = \\frac{f(x, y)}{f_Y(y)}$ (si $f_Y(y) > 0$).",
      "Solo puede calcularse si la variable X es constante.",
      "Es siempre igual a la distribución marginal de X, sin importar el valor de $y$.",
      "Requiere un cálculo complejo mediante transformadas de Fourier."
    ],
    "c": [
      0
    ],
    "exp": "La definición estándar de densidad condicional es la razón entre la conjunta y la marginal del divisor: $f_{X|Y}(x|y) = \\frac{f(x, y)}{f_Y(y)}$."
  },
  {
    "q": "¿Qué propiedad se utiliza para calcular el valor esperado total de una variable aleatoria X en términos de Y?",
    "opts": [
      "La Ley de Esperanzas Totales: $E[X] = E[E[X|Y]]$.",
      "El cálculo debe realizarse mediante la integral doble sobre todas las regiones posibles. ",
      "Se requiere que X e Y sean uniformes para aplicar esta ley.",
      "Solo funciona si Y es una variable discreta."
    ],
    "c": [
      0
    ],
    "exp": "La Ley de Esperanzas Totales establece que el valor esperado de $X$ puede calcularse como el valor esperado de la esperanza condicional: $E[X] = E[E[X|Y]]$. Esto reduce un cálculo bidimensional a una secuencia de cálculos unidimensionales."
  },
  {
    "q": "Si la función de masa conjunta de dos variables aleatorias discretas $X$ e $Y$ es $p(x,y)$, ¿cuál representa correctamente la distribución marginal de $X$?",
    "opts": [
      "$\\sum_y p(x,y)$",
      "$p(x|y) \\cdot p_Y(y)$",
      "$p(x)/p(y)$",
      "$p(x,y)$"
    ],
    "c": [
      0
    ],
    "exp": "La distribución marginal de $X$, denotada $p_X(x)$, se obtiene sumando la función de masa conjunta sobre todos los posibles valores de $Y$. Matemáticamente: $p_X(x) = \\sum_y p(x,y)$."
  },
  {
    "q": "¿Cuál es el criterio fundamental para determinar si dos variables aleatorias continuas $X$ y $Y$ son estadísticamente independientes?",
    "opts": [
      "Si la función de densidad conjunta factoriza en sus marginales: $f(x,y) = f_X(x) \\cdot f_Y(y)$",
      "Si su media conjunta es cero ($E[XY]=0$)",
      "Si el valor esperado condicional de X dado Y es constante.",
      "Solo si sus distribuciones marginales son normales."
    ],
    "c": [
      0
    ],
    "exp": "La condición necesaria y suficiente para la independencia en variables continuas (o discretas) es que la función de densidad (o masa) conjunta sea el producto de las funciones de densidad (o masa) individuales: $f(x,y) = f_X(x) \\cdot f_Y(y)$."
  },
  {
    "q": "Dados un par $(X, Y)$ con una distribución conjunta $p(x,y)$, ¿cómo se calcula la probabilidad $P(X \\le x | Y=y)$?",
    "opts": [
      "$p(x,y) / p_Y(y)$",
      "$p(x,y)$",
      "$p_Y(y) / p(x,y)$",
      "$p_X(x) \\cdot p_Y(y)$"
    ],
    "c": [
      0
    ],
    "exp": "La probabilidad condicional se define como la razón de probabilidades. $P(X \\le x | Y=y) = P(X \\le x, Y \\le y) / P(Y \\le y)$. Si usamos PMFs o CDFs discretos, esto es $p(x,y) / p_Y(y)$."
  },
  {
    "q": "Si tenemos dos variables aleatorias $X$ e $Y$, ¿qué afirma la Ley de Esperanzas Totales (Law of Total Expectation)?",
    "opts": [
      "$E[X] = E[E[X|Y]]$",
      "$Var[X] = E[Var[X|Y]] + Var[E[X|Y]]$",
      "$E[XY] = E[X]E[Y]$",
      "La media de X es independiente del valor esperado de Y."
    ],
    "c": [
      0
    ],
    "exp": "Esta ley establece que el valor esperado de una variable $X$ puede calcularse tomando el valor esperado del valor esperado condicional. Es decir, $E[X] = E[E[X|Y]]$."
  },
  {
    "q": "¿Qué representa la Función de Distribución Acumulada (FDA) conjunta $F(x, y)$?",
    "opts": [
      "La probabilidad de que $X$ sea exactamente igual a $x$.",
      "$P(X > x \\text{ y } Y > y)$.",
      "$P(X \\le x \\text{ y } Y \\le y)$.",
      "$P(X = x) + P(Y = y)$."
    ],
    "c": [
      0
    ],
    "exp": "Por definición, $F(x, y) = P(X \\le x, Y \\le y)$, que es la probabilidad acumulada de ambos eventos simultáneamente. Las otras opciones representan probabilidades diferentes (margina, cola o suma incorrecta)."
  },
  {
    "q": "¿Cuándo se dice que dos variables aleatorias $(X, Y)$ son independientes?",
    "opts": [
      "Cuando sus distribuciones marginales tienen la misma media.",
      "Si $p(x, y) = p_X(x) \\cdot p_Y(y)$.",
      "Si $E[X | Y] = E[X]$ para todo valor de $y$.",
      "Solo si ambas son normales."
    ],
    "c": [
      0
    ],
    "exp": "Conceptualmente, la independencia se define matemáticamente por el producto de las densidades (o masas): $f(x, y) = f_X(x) \\cdot f_Y(y)$ o $p(x, y) = p_X(x) \\cdot p_Y(y)$. La igualdad de esperanzas condicionales es una *consecuencia* necesaria de la independencia."
  },
  {
    "q": "Si se conoce la distribución conjunta discreta $p(x, y)$, ¿cómo se calcula la distribución marginal de $X$, $p_X(x)$?",
    "opts": [
      "Sumando sobre todos los valores posibles de Y: $p_X(x) = \\sum_y p(x, y)$.",
      "Multiplicando por el valor esperado de $Y$.",
      "Calculándola a partir de la distribución conjunta de manera recursiva.",
      "Tomando solo el valor máximo de $p(x, y)$ en esa fila."
    ],
    "c": [
      0
    ],
    "exp": "Para obtener una marginal (la probabilidad de un evento sin importar el comportamiento de otra variable), se suman o integran sobre todas las posibles realizaciones de la variable que queremos 'ignorar'. En el caso discreto, $p_X(x) = \\sum_y p(x, y)$."
  },
  {
    "q": "¿Cuál es la principal utilidad de la distribución condicional $p(x|y)$?",
    "opts": [
      "Determinar si las variables son normales.",
      "Calcular cuán probable es $X$ dado que se ha observado el valor $y$ para $Y$.",
      "Estimar la relación lineal entre $X$ e $Y$.",
      "Verificar la independencia total."
    ],
    "c": [
      0
    ],
    "exp": "La distribución condicional modela cómo cambia nuestra creencia sobre una variable ($X$) cuando ya tenemos información precisa (un valor fijo) de otra variable ($Y$). Se calcula como $p(x|y) = p(x, y) / p_Y(y)$."
  },
  {
    "q": "¿Cómo se utiliza la Ley de Esperanzas Totales?",
    "opts": [
      "Para calcular el promedio global cuando las variables están correlacionadas.",
      "$E[X] = E[E[X|Y]]$",
      "Permite descomponer $E[X]$ en términos de condicionales y marginales.",
      "Es útil solo para distribuciones continuas."
    ],
    "c": [
      0
    ],
    "exp": "Esta ley es fundamental: la esperanza total de $X$ se obtiene calculando la esperanza de su valor esperado condicionado a otra variable, $Y$: $E[X] = E[E[X|Y]]$. Esto permite calcular el promedio general sin necesidad de conocer todas las probabilidades conjuntas."
  },
  {
    "q": "¿Qué representan los conceptos siguientes?",
    "opts": [
      "Marginal: Distribución individual. Condicional: Dependencia dada información.",
      "Marginal: Probabilidad conjunta de todo el vector.",
      "Condicional: Distribución sin condicionar por ninguna variable.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Son dos conceptos clave en estadística multivariable. La distribución marginal nos dice la probabilidad de un evento sin considerar a las otras variables; la condicional nos da la probabilidad *restringida* por el conocimiento de otro evento."
  },
  {
    "q": "En el contexto de variables aleatorias bidimensionales, ¿cuál es la forma correcta de calcular la distribución marginal de X, dada una Función de Densidad Conjunta $f(x,y)$?",
    "opts": [
      "$p_X(x) = \\sum_y f(x,y)$",
      "$f_X(x) = \\int f(x,y)dy$",
      "$f(x|y) = f(x,y) / f_Y(y)$",
      "$f_X(x) = \\frac{\\partial f(x,y)}{\\partial y}$"
    ],
    "c": [
      0
    ],
    "exp": "Para obtener la distribución marginal de X (continuo), se debe integrar la función de densidad conjunta $f(x,y)$ sobre todo el rango posible de Y: $f_X(x) = \\int f(x,y)dy$."
  },
  {
    "q": "¿Qué condición debe cumplirse para que dos variables aleatorias continuas X e Y sean estadísticamente independientes?",
    "opts": [
      "$f(x,y) = f_X(x) \\cdot f_Y(y)$",
      "$E[Y|X] = E[Y]$",
      "$Cov(X, Y) = 0$",
      "$f(x|y) = f(x)$"
    ],
    "c": [
      0
    ],
    "exp": "La condición necesaria y suficiente para la independencia es que su función de densidad conjunta se pueda factorizar en el producto de sus funciones marginales: $f(x,y) = f_X(x) \\cdot f_Y(y)$."
  },
  {
    "q": "Si sabemos que la Variable Aleatoria Y tiene una distribución uniforme sobre $[0, 1]$, y su función de densidad conjunta es $f(x,y) = c \\cdot e^{-|x|} \\cdot I_{[0,1]}(y)$, ¿cuál debe ser el valor de la constante $c$?",
    "opts": [
      "$c=1$",
      "$c=e$",
      "$c=2$",
      "$c=1/e$"
    ],
    "c": [
      0
    ],
    "exp": "Para que sea una PDF válida, $\\iint f(x,y)dxdy = 1$. Dado que la integral de $e^{-|x|} dx$ es 1 y la integral de $I_{[0,1]}(y)$ es 1, se debe tener $c=1$."
  },
  {
    "q": "¿Qué representa el valor $E[X | Y=y]$ en términos interpretativos?",
    "opts": [
      "El valor esperado (media) de X, asumiendo que Y toma un valor específico $y$",
      "La probabilidad acumulada de X dado Y",
      "El valor más probable de X si Y es fijo",
      "La desviación estándar combinada entre X e Y"
    ],
    "c": [
      0
    ],
    "exp": "$E[X | Y=y]$ representa la media o el valor promedio teórico que se espera obtener para la variable X, *condicionado* a que la variable Y haya tomado el valor específico $y$."
  },
  {
    "q": "¿Qué tipo de distribución debe utilizarse al calcular la esperanza de una función continua $g(X, Y)$, dada su Función de Densidad Conjunta $f(x,y)$?",
    "opts": [
      "Integral doble sobre todo el espacio muestral",
      "Producto de integrales simples marginales",
      "Esperanza condicional iterada",
      "Suma ponderada en el eje cartesiano"
    ],
    "c": [
      0
    ],
    "exp": "El cálculo del valor esperado de una función de dos variables continuas se realiza mediante la integral doble: $E[g(X, Y)] = \\iint g(x,y) f(x,y) dx dy$."
  },
  {
    "q": "¿Cuál es el primer paso conceptual para aplicar la Ley de Esperanzas Totales?",
    "opts": [
      "Definir una variable $Y$ que condicionará a otra $X$.",
      "Identificar la relación estocástica entre las variables.",
      "Calcular la varianza individual de ambas variables.",
      "Verificar que ambas variables sean discretas."
    ],
    "c": [
      0
    ],
    "exp": "La Ley de Esperanzas Totales (o esperancia total) requiere identificar una estructura jerárquica o un factor común, es decir, definir $E[X] = E[E[X|Y]]$. Por lo tanto, el paso clave es establecer la condición $Y$."
  },
  {
    "q": "Si $X$ e $Y$ son independientes, ¿qué relación debe existir entre sus funciones de densidad conjunta y marginales?",
    "opts": [
      "$f(x,y)$ debe poder factorizarse como $f_X(x) \\cdot f_Y(y)$",
      "La función conjunta debe ser constante",
      "El coeficiente de correlación $\\rho$ debe ser cero",
      "Los valores esperados deben ser iguales"
    ],
    "c": [
      0
    ],
    "exp": "La definición matemática de independencia es que la función de densidad conjunta se descompone en el producto de las funciones marginales: $f(x,y) = f_X(x) \\cdot f_Y(y)$."
  },
  {
    "q": "¿Cuál de los siguientes enunciados sobre la relación entre $\\text{Cov}(X, Y)=0$ e independencia es correcto?",
    "opts": [
      "Si son independientes, su covarianza debe ser cero.",
      "Si la covarianza es cero, las variables deben ser independientes.",
      "La independencia implica necesariamente que la covarianza sea cero.",
      "Ninguna de las afirmaciones es universalmente correcta sin más información."
    ],
    "c": [
      0
    ],
    "exp": "Es verdadero que la independencia $\\implies \\text{Cov}(X,Y)=0$. Sin embargo, lo inverso (covarianza cero $\\implies$ independencia) solo es cierto si se asumen distribuciones normales."
  },
  {
    "q": "¿Qué establece conceptualmente la Ley de Varianzas Totales?",
    "opts": [
      "Que permite descomponer la varianza total $Var(X)$ en componentes condicionales.",
      "Que la varianza total siempre debe ser menor que las varianzas individuales.",
      "Que requiere calcular primero el valor esperado condicionado de $X$ sobre $Y$.",
      "Que solo aplica si X e Y son discretas."
    ],
    "c": [
      0
    ],
    "exp": "La Ley de Varianzas Totales (o ley de varianza total) establece la descomposición: $Var(X) = E[Var(X|Y)] + Var(E[X|Y])$. Esto permite manejar la incertidumbre en dos niveles."
  },
  {
    "q": "¿Qué significa que el resultado de calcular $E[g(X, Y)|Z=z]$ sea una función?",
    "opts": [
      "Que su resultado puede ser una función de la variable $Z$.",
      "Que es un valor numérico fijo.",
      "Que depende exclusivamente del rango de X y Y.",
      "Que es siempre igual a $g(x,y)$."
    ],
    "c": [
      0
    ],
    "exp": "La esperanza condicional no produce un número único (salvo en casos triviales), sino que genera una *función* del valor dado ($z$) al que se condiciona."
  },
  {
    "q": "¿Cuál es la principal utilidad de las distribuciones marginales $f_X(x)$ y $f_Y(y)$?",
    "opts": [
      "Reducir el problema bidimensional a un análisis unidimensional.",
      "Determinar si existe dependencia lineal entre X e Y.",
      "Calcular probabilidades conjuntas usando únicamente valores individuales.",
      "Asumir que las variables están correlacionadas."
    ],
    "c": [
      0
    ],
    "exp": "Las marginales nos permiten 'ver' la distribución de cada variable por separado, eliminando el impacto estadístico del otro. Esto simplifica el análisis a un nivel unidimensional."
  },
  {
    "q": "¿Cómo se interpreta el concepto de 'independencia mutua' en un contexto de tres o más variables ($X_1, X_2, \\dots$)?",
    "opts": [
      "Que $f(x_1, x_2, \\dots) = f_{X_1}(x_1) \\cdot f_{X_2}(x_2) \\cdots$",
      "Que la covarianza de cualquier par es cero.",
      "Que el conocimiento del valor de una variable no afecta a la probabilidad de otra.",
      "Solo se puede verificar si las variables son normales."
    ],
    "c": [
      0
    ],
    "exp": "La independencia mutua requiere que la función conjunta pueda factorizarse completamente: $f(x_1, x_2, \\dots) = f_{X_1}(x_1) \\cdot f_{X_2}(x_2) \\cdots$."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre el cálculo de varianza total es incorrecta?",
    "opts": [
      "La varianza total siempre será mayor o igual a la varianza marginal de X: $Var(X) \\ge Var(X)$",
      "La Ley de Varianzas Totales requiere siempre que se calcule $E[Var(X|Y)]$ y $Var(E[X|Y])$",
      "Si $X$ e $Y$ son independientes, $Var(E[X|Y]) = 0$",
      "El cálculo es válido tanto si X e Y son discretas como si son continuas."
    ],
    "c": [
      0
    ],
    "exp": "La afirmación $Var(X) \\ge Var(X)$ es una tautología y no aporta información sobre la relación entre las varianzas. De hecho, la fórmula misma define $Var(X)$ en términos de condiciones."
  },
  {
    "q": "Si $X$ e $Y$ son variables aleatorias discretas y la función de masa conjunta es p(x,y), ¿cuál es la manera correcta de calcular la probabilidad marginal de que $X=x_0$?",
    "opts": [
      "$\\sum_y p(x_0, y)$",
      "$p(x_0) \\cdot p(y)$",
      "$f_X(x_0)$",
      "$P(Y | X=x_0)$"
    ],
    "c": [
      0
    ],
    "exp": "La probabilidad marginal de $X$ (o cualquier variable aleatoria discreta) se obtiene sumando la función de masa conjunta sobre todos los posibles valores de la otra variable, es decir, $\\sum_{y} p(x_0, y)$."
  },
  {
    "q": "¿Qué condición debe cumplirse para que dos variables aleatorias discretas $X$ e $Y$ sean estadísticamente independientes?",
    "opts": [
      "$p(x, y) = p_X(x) \\cdot p_Y(y)$",
      "$E[XY] = E[X]E[Y]$",
      "$p(x|y) = p(x)$",
      "$p(y|x) = p(y)$"
    ],
    "c": [
      0
    ],
    "exp": "La definición formal de independencia para variables discretas es que la probabilidad conjunta debe ser igual al producto de las probabilidades marginales: $p(x, y) = p_X(x) \\cdot p_Y(y)$. Si bien el segundo enunciado también suele implicar independencia, la primera es la condición definitoria más precisa."
  },
  {
    "q": "Dada una distribución de probabilidad conjunta discreta $p(x, y)$, ¿qué representa correctamente el cálculo $\\sum_{y} p(x_0, y)$?",
    "opts": [
      "La probabilidad marginal $P(X=x_0)$.",
      "La esperanza condicional $E[Y|X=x_0]$.",
      "La función de densidad conjunta continua.",
      "La varianza de $X$."
    ],
    "c": [
      0
    ],
    "exp": "Al sumar la masa conjunta sobre todos los valores posibles de $Y$ para un valor fijo $x_0$, se elimina la variable $Y$ y se obtiene únicamente la probabilidad marginal de $X=x_0$, es decir, $p_X(x_0)$."
  },
  {
    "q": "Considere dos variables aleatorias discretas, X e Y. Si $p(x,y) = p_X(x) \\cdot p_Y(y)$ para todos los pares $(x, y)$, ¿qué conclusión se puede sacar sobre la relación entre ellas?",
    "opts": [
      "Están relacionadas por una dependencia lineal fuerte.",
      "Son necesariamente gaussianas.",
      "Son estadísticamente independientes.",
      "Su distribución conjunta es siempre uniforme."
    ],
    "c": [
      0
    ],
    "exp": "La condición $p(x,y) = p_X(x) \\cdot p_Y(y)$ es la definición fundamental de independencia estadística. Si cumple esto, el conocimiento del valor de una variable no afecta la probabilidad de la otra."
  },
  {
    "q": "En el contexto de variables aleatorias bidimensionales (X, Y), ¿cuál de las siguientes afirmaciones describe correctamente la función de densidad marginal de X?",
    "opts": [
      "$f_X(x) = \\int_{-\\infty}^{\\infty} f(x,y)dy$",
      "$f_X(x) = \\sum_{y} p(x,y)$",
      "$f_X(x)$ solo depende del soporte de Y.",
      "Es igual a la función de densidad conjunta $f(x,y)$."
    ],
    "c": [
      0
    ],
    "exp": "La distribución marginal de X se obtiene integrando (o sumando si son discretas) la función conjunta sobre todo el espacio posible de Y. Matemáticamente: $f_X(x) = \\int f(x,y)dy$."
  },
  {
    "q": "Sea $E[Y|X=x]$ la esperanza condicional de Y dado X=x. ¿Cuál es la interpretación correcta de este valor?",
    "opts": [
      "Una función que describe el comportamiento esperado de Y, dado un valor específico de X.",
      "El valor más probable que puede tomar Y.",
      "La media ponderada de las probabilidades de Y en el espacio muestral completo.",
      "Solo tiene sentido si la relación entre X e Y es lineal."
    ],
    "c": [
      0
    ],
    "exp": "La esperanza condicional $E[Y|X=x]$ nos dice cuál es el 'mejor palpite' (el valor promedio esperado) para Y, si ya conocemos con certeza que X vale un número específico $x$. Es una función de la variable condicionante."
  },
  {
    "q": "En el contexto de variables aleatorias bidimensionales, ¿cuál es la definición correcta de una distribución conjunta $p(x, y)$?",
    "opts": [
      "Es la probabilidad de que X sea menor o igual a x Y dado que Y es mayor o igual a y.",
      "Describe el comportamiento simultáneo de las variables X e Y al considerar cada valor posible de forma independiente.",
      "Indica la suma de probabilidades de X en todos los posibles valores de Y, sin considerar su relación.",
      "Representa solo la probabilidad acumulada de ambas variables hasta $(x, y)$."
    ],
    "c": [
      0
    ],
    "exp": "La distribución conjunta $p(x,y)$ (o $f(x,y)$) es esencialmente una tabla o función que describe cómo las dos variables aleatorias, X e Y, pueden tomar valores simultáneamente. Los otros distractores confunden la definición con acumuladas, marginales o condicionadas."
  },
  {
    "q": "¿Qué condición debe cumplirse para afirmar que dos variables aleatorias discretas, X e Y, son independientes?",
    "opts": [
      "$p(x, y) = p_X(x) \\cdot p_Y(y)$ para todos los valores $x$ y $y$.",
      "$E[XY] = E[X]E[Y]$ siempre que la distribución sea normal.",
      "Que las distribuciones marginales sean iguales a una distribución uniforme.",
      "Que el valor esperado condicionado sea igual al esperado marginal, es decir, $E[X|Y]=E[X]$."
    ],
    "c": [
      0
    ],
    "exp": "La definición fundamental de independencia es que la probabilidad conjunta debe ser exactamente el producto de las probabilidades marginales: $p(x,y) = p_X(x) \\cdot p_Y(y)$. Si esto se cumple, cualquier otra relación (como $E[XY]=E[X]E[Y]$ o $E[X|Y]=E[X]$) también será cierta."
  },
  {
    "q": "En el contexto de dos variables aleatorias discretas (X y Y), ¿cómo se calcula la probabilidad conjunta $P(X=x, Y=y)$ si solo conocemos la Función de Distribución Acumulada (FDA) conjunta $F(x,y)$?",
    "opts": [
      "$p(x,y) = F(x,y) - F(x-1, y) - F(x, y-1) + F(x-1, y-1)$",
      "$p(x,y) = F(x+1, y+1) - F(x-1, y+1) - F(x+1, y-1) + F(x-1, y-1)$",
      "$p(x,y) = f_X(x) \\cdot f_Y(y)$",
      "$p(x,y) = P(X=x | Y=y)$"
    ],
    "c": [
      0
    ],
    "exp": "La función de masa conjunta $p(x,y)$, que es la probabilidad $P(X=x, Y=y)$, se obtiene mediante la diferencia finita de la FDA conjunta: $p(x,y) = F(x,y) - F(x-1, y) - F(x, y-1) + F(x-1, y-1)$. Esta es una propiedad fundamental del cálculo discreto."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones describe correctamente la relación entre la independencia de X e Y y sus distribuciones conjuntas?",
    "opts": [
      "$p(x,y) = p_X(x) \\cdot p_Y(y)$ es la condición necesaria y suficiente para que X e Y sean independientes.",
      "Si $p(x|y) = p(x)$ para todo $y$, entonces X e Y son independientes.",
      "$E[X] = E[Y]$ implica que X e Y son independientes.",
      "Si $p(x|y) = 0$, entonces X e Y deben ser independientes."
    ],
    "c": [
      0
    ],
    "exp": "La definición matemática de independencia para variables aleatorias discretas (o continuas) es que su distribución conjunta debe igualar el producto de sus distribuciones marginales: $p(x,y) = p_X(x) \\cdot p_Y(y)$. Esto implica que saber el valor de una variable no afecta la probabilidad de la otra."
  },
  {
    "q": "¿Cuál es la definición conceptual de las 'Distribuciones Marginales' en un contexto bidimensional?",
    "opts": [
      "Representan la probabilidad (o densidad) de una variable aleatoria sin considerar el valor específico de la otra.",
      "Describen cómo varía $X$ manteniendo constante $Y$.",
      "Son necesarias para calcular la esperanza condicional.",
      "Solo son aplicables cuando X e Y son independientes."
    ],
    "c": [
      0
    ],
    "exp": "Las distribuciones marginales, $p_X(x)$ o $f_X(x)$, nos dicen cuán probable es un valor específico de $X$ (o $Y$) observando únicamente esa variable. Se obtienen sumando (discreto) o integrando (continuo) la distribución conjunta sobre todo el rango de la otra variable."
  },
  {
    "q": "Si tenemos una función de densidad conjunta $f(x,y)$, ¿cuál es la forma correcta de calcular la marginal de $X$, $f_X(x)$?",
    "opts": [
      "$f_X(x) = \\int_{-\\infty}^{\\infty} |f(x,y)| dy$",
      "$f_X(x) = f(x|Y=0)$",
      "$f_X(x) = \\sum_{y} f(x,y) / c$",
      "$f_X(x) = f(x,y^2)$"
    ],
    "c": [
      0
    ],
    "exp": "Para una función de densidad conjunta (VAC), la marginal $f_X(x)$ se obtiene integrando la función sobre todo el dominio posible de la variable $Y$: $f_X(x) = \\int_{-\\infty}^{\\infty} f(x,y) dy$. Esto es análogo a sumar en el caso discreto."
  },
  {
    "q": "Respecto a la 'Esperanza Condicionada' $E[X|Y=y]$, ¿cuál de las siguientes afirmaciones es correcta?",
    "opts": [
      "Mide el promedio esperado de $X$ bajo el supuesto de que $Y$ ha tomado el valor específico $y$.",
      "Es siempre un valor constante, independientemente de $y$.",
      "Solo puede calcularse si X e Y son variables Gaussianas.",
      "Su cálculo requiere únicamente la distribución marginal de $Y$."
    ],
    "c": [
      0
    ],
    "exp": "La esperanza condicionada, $E[X|Y=y]$, es un concepto crucial que nos permite actualizar nuestro conocimiento sobre el valor esperado de $X$ una vez que se ha observado el valor específico $y$. Matemáticamente, es el promedio ponderado de $x$, usando la densidad/masa condicional $p(x|y)$."
  },
  {
    "q": "¿Cuál de los siguientes métodos permite calcular la varianza total $Var(X)$ utilizando una variable auxiliar $Y$?",
    "opts": [
      "Aplicando la fórmula: $Var(X) = E[Var(X|Y)] + Var(E[X|Y])$",
      "Solo si $Y$ es una variable uniforme.",
      "$Var(X) = Var(Y) \\cdot Cov(X, Y)$",
      "Debe calcularse directamente usando solo la distribución conjunta."
    ],
    "c": [
      0
    ],
    "exp": "La Ley de Varianzas Totales establece que la varianza total de $X$, considerando su dependencia de $Y$, es igual a: $Var(X) = E[Var(X|Y)] + Var(E[X|Y])$. Esta ley descompone la variabilidad en dos componentes: la variabilidad promedio dentro de los niveles de Y, más la variabilidad de esos promedios."
  },
  {
    "q": "Si se obtiene que la varianza total es mucho mayor que la varianza marginal $Var(X)$, ¿qué puede interpretarse?",
    "opts": [
      "Que el valor promedio $E[X|Y]$ varía fuertemente a medida que cambia $Y$.",
      "Que las variables X e Y son altamente independientes.",
      "Que la estructura de dependencia entre X y Y es muy débil.",
      "Que debe haber un error en los cálculos, ya que la varianza total siempre es igual a la marginal."
    ],
    "c": [
      0
    ],
    "exp": "Recordemos que $Var(X) = E[Var(X|Y)] + Var(E[X|Y])$. Si $Var(X)$ es mucho mayor que lo esperado de los componentes, o si el componente $Var(E[X|Y])$ (la variabilidad de las medias condicionales) es grande, significa que la relación entre X e Y introduce una gran fuente de variabilidad adicional a $X$, indicando una fuerte dependencia."
  },
  {
    "q": "En un contexto de Variables Aleatorias Continuas (VAC), si el cálculo marginal $f_X(x) = \\int f(x,y) dy$ resulta en una función constante, esto implica que:",
    "opts": [
      "Que $X$ sigue una distribución uniforme o de alguna forma simple con respecto a su dominio.",
      "Que X e Y son necesariamente independientes.",
      "Que la distribución conjunta es uniforme.",
      "Que el valor esperado de $X$ es cero."
    ],
    "c": [
      0
    ],
    "exp": "Si $f_X(x)$ es constante, significa que la probabilidad (o densidad) de X no depende de qué rango se considere para otros cálculos. Aunque esto podría sugerir uniformidad o simplicidad en la distribución marginal, el hecho por sí solo no implica independencia con Y; simplemente define su forma."
  },
  {
    "q": "¿Cuáles de las siguientes propiedades describen correctamente el cálculo de la Expectativa Condicional $E[X|Y]$?",
    "opts": [
      "Es una función que depende del valor de Y.",
      "$E[X|Y] = E[X]$, si y solo si X e Y son independientes.",
      "Se calcula como $E[XY]/E[Y]$ (solo en casos simples).",
      "$Var[X|Y] \\le Var[X]$ siempre."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La esperanza condicional $E[X|Y=y]$ es una función que depende del valor de $y$. Además, por definición, si dos variables X e Y son independientes, la condición no aporta información adicional, y por lo tanto, $E[X|Y] = E[X]$. El cálculo $E[XY]/E[Y]$ solo aplica a proporciones muy específicas."
  },
  {
    "q": "¿Cuáles de las siguientes afirmaciones sobre distribuciones conjuntas $(X, Y)$ son ciertas?",
    "opts": [
      "La distribución conjunta describe el comportamiento simultáneo de ambas variables.",
      "Las marginales se obtienen mediante la suma o integración sobre toda la otra variable.",
      "Si $f(x,y) = f_X(x) f_Y(y)$, X e Y deben estar correlacionadas positivamente.",
      "$P(X \\le x, Y \\le y)$ es la CDF conjunta."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La opción [0] define el concepto de distribución conjunta. La opción [1] describe cómo se calculan las marginales a partir de la conjunta. El hecho de que $f(x,y) = f_X(x) f_Y(y)$ implica independencia, no necesariamente correlación positiva."
  },
  {
    "q": "¿Qué condiciones son necesarias para aplicar correctamente la Ley de Varianzas Totales?",
    "opts": [
      "La variable aleatoria X debe tener una varianza finita.",
      "Se requiere que exista la esperanza condicional $E[Var[X|Y]]$",
      "El valor $y$ sobre el cual se calcula la varianza marginal debe ser constante.",
      "$Var[X] = E[Var[X|Y]] + Var[E[X|Y]]$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para usar la Ley de Varianzas Totales, primero X y Y deben tener varianzas finitas. La fórmula misma $Var[X] = E[Var[X|Y]] + Var[E[X|Y]]$ es una identidad que siempre se cumple si las esperanzas e integrales existen. Por lo tanto, la necesidad de existencia de ambas componentes (la esperanza y la varianza) es clave."
  },
  {
    "q": "¿Cuáles son los principales métodos para determinar el tipo de relación entre X e Y?",
    "opts": [
      "Calcular el Coeficiente de Correlación $\\rho(X,Y)$.",
      "Verificar si $f(x,y)$ factoriza como producto de marginales.",
      "Comparar la Covarianza $Cov(X,Y)$ con cero.",
      "Analizar gráficamente la nube de puntos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los dos métodos más rigurosos son: 1) Usar el Coeficiente de Correlación ($\\rho$) para medir la fuerza lineal. 2) Verificar si $f(x,y)$ se puede factorizar en $f_X(x) f_Y(y)$, que es la prueba matemática directa de independencia."
  },
  {
    "q": "¿Cuál es el propósito principal de calcular las distribuciones marginales? ",
    "opts": [
      "$Obtener las probabilidades de X o Y sin considerar su dependencia conjunta.",
      "$Verificar si la relación entre X e Y implica independencia estadística.",
      "Reducir la complejidad del sistema a una única variable.",
      "$Estimar los parámetros individuales de forma más precisa."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las marginales permiten estudiar el comportamiento individual ($p_X(x)$ y $p_Y(y)$) sin ser forzado a considerar la interacción conjunta. Esto es fundamental para entender las propiedades por separado."
  },
  {
    "q": "¿Qué podemos concluir respecto al cálculo de probabilidades cuando se trabaja con variables aleatorias continuas (VAC)? ",
    "opts": [
      "La probabilidad debe calcularse mediante una integral doble sobre el área definida.",
      "$P(a < X < b) = \\int_a^b f_X(x) dx$.",
      "$f_Y(y)$ representa la densidad de probabilidad en un punto específico, no un rango.",
      "$p(a < X < b) = F(b) - F(a)$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "En VAC: $P$ siempre requiere integración (área bajo la curva). La marginal es una integral sobre el otro eje. El error común es asumir que $f_Y(y)$ es una probabilidad puntual."
  },
  {
    "q": "¿Qué implica la Ley Total de Esperanzas? ",
    "opts": [
      "$E[X] = E[E[X|Y]]$",
      "$E[X] = E[X|Y]$ (siendo $E[X|Y]$ la esperanza condicional)",
      "$E[X] = \\sum_{y} y \\cdot p(y) / p_Y(y)$",
      "$E[X] = E[g(Y)]$ si g es lineal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Ley Total de Esperanzas establece que el valor esperado marginal de X se obtiene tomando el valor esperado del valor esperado condicionado a Y. $E[X] = E[E[X|Y]]$. Es una regla fundamental de la teoría de probabilidad."
  },
  {
    "q": "¿Cuándo es correcto utilizar la función de densidad conjunta $f(x,y)$ para calcular probabilidades? ",
    "opts": [
      "Siempre que X e Y sean variables continuas.",
      "$P((a_1 < X < b_1), (a_2 < Y < b_2)) = \\int_{a_1}^{b_1} \\int_{a_2}^{b_2} f(x,y) dy dx$.",
      "$f_X(x)$ es siempre igual a $f(x,y)$ en el límite.",
      "Solo cuando X e Y tienen distribución normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Cuando trabajamos con VAC, las probabilidades se calculan mediante la integración doble sobre el área delimitada. Esta integral es la definición fundamental de la probabilidad conjunta."
  },
  {
    "q": "¿Cuál es la relación más precisa entre distribuciones marginales y conjuntas? ",
    "opts": [
      "Las marginales son proyecciones o 'sumas/integrales' de la distribución conjunta sobre uno de los ejes.",
      "$p_X(x) = \\sum_{y} p(x, y)$ (discreto).",
      "$p(x,y) = p_X(x) \\cdot p_Y(y)$ implica que $p_X(x)$ es una función lineal de $p(x,y)$.",
      "Si se conoce la conjunta, se pueden calcular las marginales integrando/sumando sobre el eje restante."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La esencia de las marginales es que representan la 'vista' del sistema cuando ignoramos la variable. Esto se logra mediante sumas (discreto) o integrales (continuo)."
  },
  {
    "q": "¿Qué significa calcular $E[X|Y=y]$? ",
    "opts": [
      "El promedio de X si Y está fijo en el valor y.",
      "$E[X|Y=y]$ es una función que depende únicamente del parámetro $y$.",
      "$E[X|Y=y] = E[X]/y$.",
      "Implica necesariamente que la distribución conjunta sea uniforme."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La esperanza condicional significa recalcular el promedio de X bajo una condición específica (Y=y). El resultado es una función que mapea un valor de Y a un valor esperado para X."
  },
  {
    "q": "¿Qué propiedades describen la relación entre las distribuciones conjunta y marginal?",
    "opts": [
      "La FDA conjunta debe cumplir con el principio de monotonía (si $x_1 \\le x_2$ y $y_1 \\le y_2$, entonces $F(x_1, y_1) \\le F(x_2, y_2)$).",
      "Las distribuciones marginales son casos límite específicos de la distribución conjunta.",
      "Si las variables son independientes, sus funciones de densidad conjuntas deben ser lineales en los ejes X e Y.",
      "La FDA conjunta es simplemente el producto de las dos FDA marginales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las propiedades clave incluyen la monotonía (opción A) y que las distribuciones marginales se obtienen 'proyectando' o limitando la información conjunta (opción B). La independencia solo requiere $f(x,y)=f_X(x)f_Y(y)$."
  },
  {
    "q": "¿Bajo qué condiciones son válidas las fórmulas de varianza total?",
    "opts": [
      "La Ley de Varianzas Totales: $\\text{Var}[X] = E[\\text{Var}[X|Y]] + \\text{Var}[E[X|Y]]$.",
      "Siempre que exista la esperanza condicional $E[X|Y]$ y la varianza condicional $\\text{Var}[X|Y]$.",
      "Las variables X e Y deben ser Gaussianas (Normales).",
      "Solo se puede aplicar si las variables son completamente independientes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Ley de Varianzas Totales es una herramienta poderosa que descompone la varianza. Su aplicación requiere formalmente que exista $E[X|Y]$ y $\\text{Var}[X|Y]$, lo cual se garantiza conceptualmente por la ley misma (opción C) y su fórmula matemática (opción A). La normalidad o independencia no son requisitos estrictos para la *validez* de esta ley."
  },
  {
    "q": "¿Qué conceptos se consideran esenciales al analizar el comportamiento simultáneo de dos variables aleatorias?",
    "opts": [
      "La distribución conjunta $f(x,y)$ es la herramienta fundamental.",
      "Las distribuciones marginales $f_X(x)$ y $f_Y(y)$ permiten entender su variabilidad individual.",
      "El análisis de las correlaciones (como el coeficiente $\\rho$) nos indica su dependencia lineal.",
      "Estudiar solo los valores esperados no es suficiente, se necesita la matriz de covarianza."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para describir el comportamiento *simultáneo*, necesitamos la distribución conjunta (opción A). Sin embargo, para entender qué parte del sistema contribuye a $X$ y cuál a $Y$, también son crucial las marginales (opción B). La correlación es solo un indicador de dependencia lineal, no de toda la relación."
  },
  {
    "q": "¿Cuál es el proceso lógico correcto para determinar si dos variables X e Y son independientes?",
    "opts": [
      "Verificar si $p(x|y) = p_X(x)$ (es decir, si la distribución condicional es igual a la marginal).",
      "Calcular las funciones de densidad/masa conjunta y compararlas con el producto de sus marginales: $p(x,y) = p_X(x) \\cdot p_Y(y)$.",
      "Comprobar que el valor esperado de X sea cero y el de Y sea cero.",
      "Verificar si su coeficiente de covarianza es nulo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La prueba más rigurosa y directa de independencia (opción A) es que la distribución condicional debe ser igual a la marginal. Alternativamente, se puede comprobar el producto $p(x,y)=p_X(x) p_Y(y)$ (opción C). Simplemente tener una covarianza cero no garantiza la independencia si las distribuciones no son normales."
  },
  {
    "q": "¿Qué debe cumplirse para que exista y sea útil calcular la esperanza condicional $E[X|Y]$?",
    "opts": [
      "Debe estar definida como un valor esperado de X, pero ahora es una función de Y.",
      "Su resultado es esencialmente una 'mejor predicción' (ajuste) del valor de X dado el conocimiento exacto del valor de Y.",
      "Si su función $E[X|Y]$ resulta ser una constante, significa que X e Y son independientes.",
      "Siempre se calcula encontrando la pendiente de regresión entre X y Y."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Conceptual y matemáticamente (opción A), es el valor esperado de $X$ dado un valor fijo de $Y$. Su interpretación clave (opción B) es que representa la mejor predicción lineal o esperada de $X$ usando información de $Y$. Si el resultado fuera una constante, implicaría independencia."
  },
  {
    "q": "¿Qué implicación tiene que $E[Var[X|Y]] = Var[X]$?",
    "opts": [
      "Indica que el promedio de la variabilidad condicional es igual a la varianza total, lo cual es una propiedad de consistencia matemática.",
      "Sirve para calcular la esperanza total sin usar $E[X] = E[E[X|Y]]$.",
      "Implica que las variables son necesariamente independientes.",
      "Solo aplica si la variable Y tiene una distribución normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El hecho de que el promedio de las varianzas condicionales sea igual a la varianza total ($E[Var[X|Y]] = Var[X]$) es parte integral del cálculo de la Ley de Varianzas Totales. Esta propiedad garantiza la coherencia matemática y no implica necesariamente independencia, sino una relación estadística más profunda."
  },
  {
    "q": "¿Qué es correcto acerca del cálculo de esperanzas condicionadas?",
    "opts": [
      "Son funciones que dependen únicamente de los parámetros poblacionales.",
      "$E[X|Y=y] = \\sum_x x \\cdot p(x|y)$ (discreto).",
      "$E[X|Y=y]$ es un valor numérico constante, independientemente de $y$.",
      "Representan el mejor estimador lineal de $X$ dado $Y$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El valor esperado condicional es un *valor* que depende de $y$, no una constante, y su cálculo sigue la fórmula del valor esperado, pero usando las probabilidades condicionadas $p(x|y)$."
  },
  {
    "q": "¿Qué afirmaciones son correctas sobre la independencia de variables aleatorias?",
    "opts": [
      "Si $X$ e $Y$ son independientes, sus CDFs se factorizan: $F(x, y) = F_X(x) F_Y(y)$.",
      "Es una condición más fuerte que la no correlación ($Cov(X, Y)=0$) en general.",
      "La independencia implica que el promedio lineal sea cero.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Matemáticamente, si son independientes, sus CDFs (y PDFs/PMFs) se factorizan. Además, la independencia implica $Cov(X, Y) = 0$, pero lo inverso no siempre es cierto (solo para distribuciones normales), por lo que la condición de independencia es más fuerte."
  },
  {
    "q": "¿Cómo debe ser conceptualmente tratada la distribución de $X$ dado $Y=y$?",
    "opts": [
      "Es siempre una distribución marginal.",
      "Puede requerir un proceso de normalización (dividir por $f_Y(y)$).",
      "Su dominio solo depende del rango de Y.",
      "Solo aplica si las variables son discretas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La función condicionada $f(x|y) = f(x,y)/f_Y(y)$ es una distribución válida (pode ser marginal o condicional). Siempre requiere normalización para mantener la integral sobre el dominio de X igual a 1."
  },
  {
    "q": "¿Cuál es el método correcto para calcular la función de densidad conjunta continua $f(x, y)$ a partir de una distribución discreta?",
    "opts": [
      "La integración doble: $\\iint f(x,y) dx dy$",
      "El producto de las marginales: $p_X(x) \\cdot p_Y(y)$",
      "Se debe asumir que hay un límite superior/inferior.",
      "No es posible la conversión directa sin más información."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La función conjunta en el caso continuo es doble integral. Sin embargo, si las variables son *independientes* y conocemos sus distribuciones marginales (ya sea discreta o continua), su conjunta es simplemente el producto de las marginales: $f(x,y) = f_X(x) \\cdot f_Y(y)$. En general, no se puede convertir directamente una distribución totalmente discreta a una continua sin más datos."
  },
  {
    "q": "¿Qué afirmación describe correctamente la relación entre la esperanza condicional $E[Y|X]$ y las distribuciones marginales?",
    "opts": [
      "$E[Y|X=x]$ siempre es una constante.",
      "$E[Y|X=x]$ representa el mejor estimador lineal predictivo de $Y$ dado $X=x$.",
      "$E[Y|X=x]$ depende únicamente de la distribución marginal $p_Y(y)$.",
      "$E[Y|X]$ solo se calcula si $X$ e $Y$ son independientes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La esperanza condicional $E[Y|X=x]$ es una función que depende del valor de $x$, por lo tanto no puede ser constante. Representa el valor esperado de $Y$ dado $X$. Además, en muchos contextos estadísticos (regresión), se interpreta como el mejor estimador lineal predictivo de Y usando la información de X."
  },
  {
    "q": "¿Cuál es la manera más eficiente de calcular la varianza total $\\text{Var}(Y)$ usando la Ley de Varianzas Totales?",
    "opts": [
      "$\\text{Var}(Y) = E[\\text{Var}(Y|X)] + \\text{Var}(E[Y|X])$",
      "$E[Y^2] - (E[Y])^2$",
      "$E[\\text{Var}(Y|X)]$ o $\\text{Var}(E[Y|X])$ por separado.",
      "Solo es aplicable si $Y$ y $X$ son independientes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Ley de Varianzas Totales establece que $\\text{Var}(Y) = E[\\text{Var}(Y|X)] + \\text{Var}(E[Y|X])$. La segunda opción es la fórmula general para la varianza. No se puede calcular solo con una de las dos expectativas condicionadas."
  },
  {
    "q": "¿Qué propiedades son fundamentales al analizar el concepto de independencia entre $X$ e $Y$?",
    "opts": [
      "La igualdad conjunta $p(x, y) = p_X(x) \\cdot p_Y(y)$.",
      "$E[XY] = E[X]E[Y]$ (solo en variables normales).",
      "El hecho de que la esperanza condicional sea irrelevante.",
      "Que las distribuciones marginales deben ser uniformes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La condición necesaria y suficiente es $p(x, y) = p_X(x) \\cdot p_Y(y)$. Si bien $E[XY] = E[X]E[Y]$ es una consecuencia de la independencia (siempre que existan las esperanzas), no se cumple en general para otras variables. La restricción de normalidad o distribución uniforme hace incorrecta a la opción 3."
  },
  {
    "q": "En el contexto de variables aleatorias continuas, ¿qué representa $f_Y(y) = \\int f(x, y) dx$?",
    "opts": [
      "La densidad marginal de Y.",
      "La esperanza condicional de X dado Y=y.",
      "La probabilidad conjunta acumulada (FDA).",
      "La varianza total."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Se trata de la definición formal de la función de densidad marginal. Por un lado, $\\int f(x, y) dx$ es correcto. La segunda opción (la esperanza condicional $E[X|Y=y]$) se calcula como $\\int x \\cdot f(x|y) dx$, que a su vez es $\\int x \\frac{f(x,y)}{f_Y(y)} dx$. Aunque la fórmula dada no representa directamente el cálculo de la esperanza condicional, conceptualmente $E[X|Y=y]$ es un concepto clave derivado de las marginales y la conjunta."
  },
  {
    "q": "¿Cómo se interpreta correctamente la fórmula de la Ley de Esperanzas Totales?",
    "opts": [
      "$E[Y] = E[E[Y|X]]$",
      "$E[Y]$ es el promedio ponderado de $E[Y|X=x]$ sobre la distribución marginal $p_X(x)$.",
      "$E[Y]$ solo puede calcularse usando valores discretos.",
      "Es una propiedad que solo se cumple si $X$ e $Y$ son normales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La primera fórmula es la definición clave. La tercera opción describe precisamente el mecanismo: estamos ponderando los valores esperados de Y (los $E[Y|X=x]$) por la probabilidad de que ocurra ese valor $x$ ($p_X(x)$)."
  },
  {
    "q": "¿Cuál es la secuencia correcta para calcular la varianza condicional $\\text{Var}(Y|X)$?",
    "opts": [
      "Se usa la función de densidad conjunta $f(x,y)$.",
      "Requiere primero obtener la distribución condicional $f_{Y|X}(y|x) = f(x,y)/f_X(x)$.",
      "Implica calcular $\\text{Var}(Y)$ y $\\text{Var}(X)$ por separado.",
      "Solo se puede hacer si $X$ e $Y$ son discretas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para aplicar cualquier ley condicional (media o varianza), siempre es necesario contar con la función conjunta ($f(x,y)$) y obtener la distribución condicional ($\\left.f_{Y|X}(y|x)\\right)$. El cálculo de las marginales por sí solo no basta."
  },
  {
    "q": "¿Qué se puede afirmar sobre el significado estadístico de $p(x|y) = p(y|x)$?",
    "opts": [
      "Que la información que $X$ da sobre $Y$ es la misma que viceversa, en términos de probabilidad absoluta.",
      "$f_X(x) \\cdot f_Y(y)$ debe ser constante para todos los valores posibles.",
      "Que $X$ e $Y$ son necesariamente independientes.",
      "Implica que las variables tienen la misma distribución marginal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La igualdad $p(x|y) = p(y|x)$ significa que el impacto de conocer X dado Y es idéntico al impacto de conocer Y dado X. Esto no implica independencia (ej: dos variables con la misma pendiente en una regresión). La opción 3 es incorrecta porque esa condición solo se cumple si la conjunta $p(x,y)$ es constante, lo cual es demasiado restrictivo."
  },
  {
    "q": "Considere las variables aleatorias discretas X e Y. ¿Qué condiciones deben cumplirse para que se consideren independientes?",
    "opts": [
      "$p(x,y) = p_X(x) \\cdot p_Y(y)$",
      "$E[X|Y] = E[X]$",
      "La distribución conjunta debe ser uniforme.",
      "El cálculo de las marginales no afecta a la conjunta."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Dos variables son independientes si y solo si su función de masa conjunta es el producto de sus funciones de masa marginales ($p(x,y) = p_X(x) \\cdot p_Y(y)$). Además, la independencia implica que la esperanza condicionada debe ser igual a la esperanza no condicionada: $E[X|Y] = E[X]$. (Nota: El enunciado 'La distribución conjunta debe ser uniforme' es falso; solo se requiere el producto de marginales)."
  },
  {
    "q": "Respecto a las distribuciones condicionales, ¿qué afirmaciones son correctas?",
    "opts": [
      "$p(x|y) = p(x,y)/p_Y(y)$ siempre que $p_Y(y) > 0$.",
      "$f(x|y) = f(x,y)/f_Y(y)$ es la definición estándar en el caso continuo.",
      "Si las variables son independientes, $p(x|y) = p(x)$.",
      "La probabilidad condicional siempre debe ser menor o igual a 1."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las dos primeras opciones son la definición matemática de la distribución condicional (discreta y continua, respectivamente). La tercer punto es el caso límite más importante: si X e Y son independientes, $p(x|y) = p(x)$. El último punto es cierto por definición de probabilidad."
  },
  {
    "q": "En el cálculo de varianzas en variables bidimensionales (X, Y), ¿qué propiedades se deben recordar?",
    "opts": [
      "$\\text{Var}(Y) = E[Y^2] - (E[Y])^2$",
      "La Ley de Varianzas Totales establece $\\text{Var}(Y) = E[\\text{Var}(Y|X)] + \\text{Var}(E[Y|X])$.",
      "Si X e Y son independientes, $\\text{Var}(Y|X) = 0$.",
      "El cálculo se simplifica si usamos solo la varianza conjunta."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La primera opción es la fórmula estándar de la varianza. La segunda opción es la Ley de Varianzas Totales, que nos permite descomponer la varianza marginal en componentes esperados y variables. Si X e Y son independientes, $\\text{Var}(Y|X) = \\text{Var}(Y)$, no 0."
  },
  {
    "q": "Analizando el concepto de dependencia estadística (Lote 8), ¿qué características lo definen correctamente?",
    "opts": [
      "Una relación fuerte implica que la covarianza debe ser diferente de cero.",
      "La independencia es una condición más fuerte que simplemente $\\text{Cov}(X, Y) = 0$.",
      "Si $E[Y|X] = E[Y]$, entonces X e Y son independientes.",
      "Las variables deben tener distribuciones gaussianas para garantizar la independencia."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Es crucial distinguir: $\\text{Cov}(X, Y) = 0$ solo implica 'falta de correlación lineal', pero no garantiza la independencia (excepto si son gaussianas). La condición $E[Y|X] = E[Y]$ es un indicador fuerte, y combinado con la prueba formal de $p(x,y)$, puede demostrar independencia."
  },
  {
    "q": "Respecto a la relación entre independencia, covarianza y correlación, ¿qué afirmaciones son correctas?",
    "opts": [
      "Si $X$ e $Y$ son Gaussianos, entonces $\\text{Cov}(X, Y) = 0$ es suficiente para garantizar la independencia.",
      "La correlación ($\\rho$) mide la fuerza y dirección de la relación lineal entre variables.",
      "$\\text{Cov}(X, Y) = 0$ implica que X e Y están linealmente relacionados.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El primer punto solo indica ausencia de *correlación lineal*. El segundo punto es crucial: si los datos son Gaussianos (Normales), entonces $\\text{Cov}(X, Y) = 0$ implica independencia. La correlación ($\\rho$) sí mide la fuerza y dirección de la relación lineal."
  },
  {
    "q": "¿Cuáles son métodos válidos para obtener la distribución marginal de una variable aleatoria X a partir de su distribución conjunta p(x, y)?",
    "opts": [
      "Sumando sobre todos los posibles valores de Y: $p_X(x) = \\sum_{y} p(x,y)$.",
      "Integrando la densidad conjunta respecto a Y: $f_X(x) = \\int f(x,y) dy$.",
      "Multiplicando la función marginal de X por la constante 1.",
      "Restando la probabilidad conjunta de todos los valores posibles."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para variables discretas (PMF), se suman las probabilidades conjuntas sobre el eje Y. Para variables continuas (PDF), se integra la densidad conjunta respecto a Y. En ambos casos, el resultado es $p_X(x)$ o $f_X(x)$, respectivamente."
  },
  {
    "q": "¿Cuáles son las propiedades correctas al analizar el concepto de esperancia condicional $E[X|Y=y]$?",
    "opts": [
      "La esperanza condicionada es, en sí misma, una función (o variable) que depende del valor fijo $y$ de la segunda variable.",
      "Si X e Y son independientes, entonces $E[X|Y] = E[X]$.",
      "Si calcularmos $E[X|Y]$, obtenemos un nuevo resultado numérico constante sin importar el valor de Y.",
      "Su cálculo requiere necesariamente que X y Y tengan una distribución normal para poder aplicar la fórmula."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La esperanza condicionada es conceptualmente importante: el valor de $E[X|Y]$ no es un número fijo, sino una función (o variable) $\\mu(y)$ cuyo valor depende del parámetro $y$. La propiedad más relevante y generalizada es que la independencia implica que esta función degenera a la constante $E[X]$."
  },
  {
    "q": "¿Qué afirmaciones son ciertas al considerar el cálculo de probabilidades en un escenario discreto bidimensional (PMF)?",
    "opts": [
      "La suma total de todas las probabilidades conjuntas $\\sum_{x,y} p(x,y)$ debe ser igual a 1.",
      "$p_X(x) = \\sum_{y} p(x,y)$, y $p_Y(y) = \\sum_{x} p(x,y)$ son siempre correctas.",
      "Si se quiere calcular la probabilidad de que X tome un valor *diferente* a $x_0$, debe ser $\\sum_{y} p(x,y) - p(x_0, y)$.",
      "La suma de las marginales no es necesariamente igual a la conjunta."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El primer punto es el axioma de probabilidad. El segundo describe correctamente cómo calcularlas sumando sobre el eje opuesto. La tercera opción está incorrecta en su formulación; $P(X \neq x_0)$ se calcula como $\\sum_{x \neq x_0} p_X(x)$. Los conceptos son distintos y la última afirmación es tautológica (la joint contiene las marginales)."
  },
  {
    "q": "¿Cuál es el propósito principal de aplicar la 'Ley Total de Esperanzas'?",
    "opts": [
      "Estimar el valor esperado de una variable $E[X]$ utilizando una variable auxiliar $Y$, dividiéndolo en casos.",
      "$E[X] = E[E[X|Y]]$ es la fórmula que establece que el esperado total es el esperado del esperado condicional.",
      "Calcular varianzas sin necesidad de conocer las distribuciones individuales.",
      "Demuestra que las variables aleatorias deben ser Gaussianas para aplicar la ley."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Ley Total de Esperanzas nos permite calcular $E[X]$ si $X$ depende de otra variable $Y$. El principio es: el valor esperado total de $X$ es igual al valor esperado de su esperanza condicionada a $Y$: $E[X] = E[E[X|Y]]$. Esto es muy útil en la práctica estadística."
  },
  {
    "q": "Si se sabe que $X$ e $Y$ son independientes, ¿cuál de las siguientes relaciones debe cumplirse necesariamente?",
    "opts": [
      "La esperanza condicional debe ser: $E[X|Y] = E[X]$",
      "$p(x,y) = p_X(x) \\cdot p_Y(y)$",
      "La varianza conjunta es nula.",
      "Las distribuciones marginales deben tener la misma forma."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si X e Y son independientes, se cumplen dos condiciones clave: 1. La distribución conjunta es el producto de las marginales: $p(x,y) = p_X(x) \\cdot p_Y(y)$. 2. El valor esperado condicional de $X$ dado $Y=y$ debe ser simplemente la esperanza no condicionada: $E[X|Y] = E[X]$. (Esto es el caso discreto; en continuo, se usa $f(x|y) = f(x)$)."
  },
  {
    "q": "¿Cuál es el significado del término 'covarianza' $Cov(X, Y)$?",
    "opts": [
      "Mide cuán fuerte es la relación lineal entre X e Y.",
      "Indica si las variables tienden a moverse en la misma dirección o en direcciones opuestas.",
      "$Cov(X, Y) = 0$ implica necesariamente independencia.",
      "Solo puede calcularse usando el coeficiente de correlación."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La covarianza $Cov(X, Y)$ es una medida de asociación que indica la dirección y fuerza lineal conjunta. Un valor positivo significa que tienden a aumentar/disminuir juntos (misma dirección); un valor negativo, en direcciones opuestas. Sin embargo, $Cov(X, Y) = 0$ solo implica independencia si las variables son Gaussianas; pero generalmente solo indica 'ausencia de relación lineal', no necesariamente independencia."
  },
  {
    "q": "Considerando variables aleatorias discretas X e Y, si calculamos $p(x|y) = p(x,y)/p_Y(y)$, ¿qué propiedad debe cumplir esta distribución condicionada?",
    "opts": [
      "Su suma sobre todos los valores posibles de $x$ debe ser igual a 1.",
      "Si se fija un valor de $y$, estas probabilidades deben formar una PMF válida para $X$.",
      "Su valor debe depender exclusivamente de la marginal $p_X(x)$.",
      "Solo es aplicable si X e Y son independientes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Al fijar el parámetro $Y=y$, la distribución condicionada $p(x|y)$ debe servir como una función de masa de probabilidad (PMF) válida para $X$. Por lo tanto, la suma sobre todos los posibles valores de $x$ debe ser 1. Además, esto es una definición fundamental: se usa la razón entre conjunta y marginal."
  },
  {
    "q": "¿Qué afirmaciones son ciertas sobre las distribuciones marginales? (Considerando $p(x,y)$ como la función de masa conjunta)",
    "opts": [
      "La distribución marginal de X se obtiene sumando la probabilidad conjunta sobre todos los valores posibles de Y.",
      "Si la suma de todas las probabilidades marginales no es 1, hay un error de cálculo.",
      "Son esenciales para calcular la esperanza total en el eje de X.",
      "Pueden ser calculadas utilizando únicamente $p_X(x)$ sin necesidad de la distribución conjunta."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La distribución marginal p_X(x) se encuentra sumando sobre todos los valores posibles y: $p_X(x) = \\sum_{y} p(x,y)$. Además, la suma total de las probabilidades marginales (tanto para X como para Y) debe ser 1."
  },
  {
    "q": "¿Qué implica conceptualmente el concepto de 'Esperanza Condicionada', $E[X|Y=y]$?",
    "opts": [
      "Calcula la media de X asumiendo que Y ha tomado un valor específico $y$.",
      "Es una función matemática del parámetro $y$ que describe el comportamiento esperado de X dado ese valor.",
      "Siempre es igual a la esperanza marginal, $E[X]$.",
      "Solo se puede calcular si X y Y son variables discretas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Esperanza Condicionada nos permite 'restringir' nuestro espacio muestral. Nos dice: ¿cuál debería ser el valor promedio esperado de X *sabiendo* que Y fue $y$? Esto resulta en una función del parámetro $y$."
  },
  {
    "q": "¿Qué propiedades son verdaderas respecto al cálculo de la Esperanza Total (Law of Total Expectation)?",
    "opts": [
      "La esperanza de X se puede calcular como el esperado de su esperanza condicionada sobre Y: $E[X] = E[E[X|Y]]$.",
      "Es una herramienta fundamental que reduce un problema multidimensional a integraciones/sumatorias unidimensionales.",
      "Requiere que las variables X e Y estén siempre correlacionadas para ser aplicable.",
      "Siempre garantiza que el resultado sea más preciso que calcular $E[X]$ marginalmente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La ETE es un principio de cálculo de esperanzas: $E[X] = \\sum_y E[X|Y=y] p_Y(y)$. Reduce la complejidad al anidar expectativas. No requiere necesariamente correlación."
  },
  {
    "q": "¿Cuáles son las características clave que definen a una Variación Total (Law of Total Variance)?",
    "opts": [
      "Es un principio fundamental en estadística que relaciona tres componentes: varianza marginal, esperanza de varianzas condicionadas y varianza de esperanzas condicionadas.",
      "Permite descomponer el riesgo total en una componente de dispersión interna (condicionada) y una componente de cambio del promedio (variación del promedio).",
      "La varianza total es igual a la varianza marginal de X: $Var(X) = Var(E[X|Y])$.",
      "Requiere asumir la independencia entre X e Y para su aplicación correcta."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La fórmula es: $Var(X) = E[Var(X|Y)] + Var(E[X|Y])$. La opción 2 describe esta descomposición en riesgo. La opción 1 es incorrecta."
  },
  {
    "q": "¿Cómo se calcula la distribución de probabilidad conjunta discreta $p(x, y)$?",
    "opts": [
      "Sumando las probabilidades en una tabla que cubra todo el espacio muestral.",
      "Requiere saber la dependencia entre X e Y mediante un experimento de conteo conjunto.",
      "Multiplicando directamente las distribuciones marginales p_X(x) y p_Y(y).",
      "Solo es posible si ambas variables son binarias."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La definición fundamental requiere conocer los resultados experimentales en el espacio $(x, y)$ (Opción 1). No siempre se puede calcular por la multiplicación marginal; solo lo hace si hay independencia."
  },
  {
    "q": "¿Cuál de los siguientes procedimientos es correcto para obtener las distribuciones marginales?",
    "opts": [
      "Para variables discretas: Sumando $p(x,y)$ sobre todos los valores del eje opuesto.",
      "Para variables continuas: Integrando la densidad conjunta $f(x,y)$ respecto al otro variable.",
      "Las distribuciones marginales de X e Y son siempre iguales en magnitud (sujeta a escala).",
      "Solo es posible si se conoce el rango exacto y finito de ambas variables."
    ],
    "c": [
      0,
      1
    ],
    "exp": "En ambos casos (discreto o continuo), la clave es la integración/suma sobre todo el espacio del eje opuesto. La igualdad de magnitud no es una regla general."
  },
  {
    "q": "¿Si sabemos que $E[X|Y] = c$ (una constante), ¿qué podemos concluir?",
    "opts": [
      "Que la variable X es independiente de Y y su media es $c$.",
      "Que la varianza total de X debe calcularse únicamente como $Var(E[X|Y]) = 0$.",
      "Que X e Y deben ser distribuciones uniformes.",
      "Que el conocimiento de Y no aporta información sobre la tendencia central de X."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si $E[X|Y] = c$, significa que el valor esperado de X es constante e independiente de cualquier valor que tome Y. Por lo tanto, X y Y son independientes y la varianza total se simplifica a $Var(X) = E[Var(X|Y)] + Var(c) = 0 + 0 = Var(X)$."
  },
  {
    "q": "Dado un PMF conjunto $p(x, y)$, ¿cuáles fórmulas son correctas para calcular la esperança de X, $E[X]$?\nA) La esperanza es el valor esperado promedio ponderado por todas las probabilidades marginales. $\\sum_x x \\cdot p_X(x)$.\nB) Se calcula integrando sobre todos los posibles valores de Y: $E[X] = \\sum_y p_Y(y) E[X|Y=y]$.\nC) Solo necesitamos conocer la función de densidad conjunta continua, no el PMF.\n变量",
    "opts": [
      "La esperanza es el valor esperado promedio ponderado por todas las probabilidades marginales. $\\sum_x x \\cdot p_X(x)$.",
      "Se calcula integrando sobre todos los posibles valores de Y: $E[X] = \\sum_y p_Y(y) E[X|Y=y]$.",
      "Solo necesitamos conocer la función de densidad conjunta continua, no el PMF.",
      "La fórmula correcta siempre implica $\\iint x \\cdot f(x, y) dx dy$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La esperanza $E[X]$ se puede calcular directamente usando las marginales ($\\sum_x x \\cdot p_X(x)$, opción A). Alternativamente, por la Ley de Esperanzas Totales, podemos condicionar sobre Y: $E[X] = E[E[X|Y]] = \\sum_y p_Y(y) E[X|Y=y]$ (opción B). La opción C es incorrecta porque los principios se aplican a discretos o continuos, pero no solo a continuos."
  },
  {
    "q": "Respecto al cálculo de la varianza condicionada $\\text{Var}(X|Y=y)$, ¿qué afirmaciones son correctas?\nA) La varianza condicionada mide cuánto puede variar X cuando se fija Y en un valor $y$.\nB) Si $X$ e $Y$ son independientes, entonces $\\text{Var}(X|Y=y) = \\text{Var}(X)$ para cualquier $y$.\nC) El cálculo requiere solo la función de densidad conjunta y no las marginales.\n变量",
    "opts": [
      "La varianza condicionada mide cuánto puede variar X cuando se fija Y en un valor $y$.",
      "Si $X$ e $Y$ son independientes, entonces $\\text{Var}(X|Y=y) = \\text{Var}(X)$ para cualquier $y$.",
      "El cálculo requiere solo la función de densidad conjunta y no las marginales.",
      "La varianza siempre debe ser mayor o igual a cero."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La opción A es la definición conceptual: se mide la dispersión residual de X una vez que Y está fijado. La opción B es una consecuencia directa de la independencia; si no hay relación, saber $Y=y$ no afecta la variabilidad intrínseca de X. Si bien $\\text{Var}(X|Y=y) \\ge 0$ (opción D), las opciones A y B describen propiedades más profundas del cálculo."
  },
  {
    "q": "Suponga que $p(x, y)$ es la PMF conjunta de $(X, Y)$. ¿Cuáles son los procedimientos correctos para calcular la probabilidad marginal de X en $x$ o la esperanza condicional de $X$ dado $Y=y$? \nA) Para obtener la marginal $p_X(x)$, se debe sumar la función conjunta sobre todos los posibles valores de $y$: $p_X(x) = \\sum_y p(x, y)$.\nB) La esperanza condicional es siempre una constante e independiente del valor de $y$. $E[X|Y=y] = c$.\nC) La fórmula para la esperança condicional debe usar el cociente de las funciones: $E[X|Y=y] = \\frac{p(x, y)}{p_Y(y)}.\n变量",
    "opts": [
      "Para obtener la marginal $p_X(x)$, se debe sumar la función conjunta sobre todos los posibles valores de $y$: $p_X(x) = \\sum_y p(x, y)$.",
      "Si $X$ e $Y$ son independientes, entonces $E[X|Y=y] = E[X]$.",
      "La fórmula para la esperança condicional debe usar el cociente de las funciones: $E[X|Y=y] = \\frac{p(x, y)}{p_Y(y)}$.",
      "La esperanza condicional es siempre una constante e independiente del valor de $y$. $E[X|Y=y] = c$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para obtener la marginal (opción A), se suma sobre las variables. La esperança condicional requiere el uso de la densidad/masa conjunta dividida por la marginal del divisor ($p(x|y) = p(x, y)/p_Y(y)$); sin embargo, $E[X|Y=y]$ es una función ponderada por esta razón (opción C). Si son independientes, por definición, saber Y no cambia la esperanza de X (opción D), lo cual es cierto, pero la opción A es el cálculo marginal básico y la opción C apunta al uso correcto de las funciones conjuntas para modelar el condicional."
  },
  {
    "q": "Considere dos variables aleatorias $X$ e $Y$. ¿Qué propiedades son válidas respecto a su relación estadística?\nA) Si $\\text{Cov}(X, Y) > 0$, esto implica que X y Y están linealmente relacionados positivamente.\nB) Si conoces la distribución conjunta de $(X, Y)$, puedes calcular todas las distribuciones marginales y condicionadas.\nC) La condición de independencia es una propiedad más fuerte que la correlación. Esto significa que $\\text{Independiente} \\implies \\text{No Correlacionado}$, pero no al revés.\n变量",
    "opts": [
      "Si conoces la distribución conjunta de $(X, Y)$, puedes calcular todas las distribuciones marginales y condicionadas.",
      "La condición de independencia es una propiedad más fuerte que la correlación. Esto significa que $\\text{Independiente} \\implies \\text{No Correlacionado}$, pero no al revés.",
      "Si $\\text{Cov}(X, Y) > 0$, esto implica que X y Y están linealmente relacionados positivamente.",
      "La relación de covarianza solo es aplicable a variables continuas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La opción B es fundamental: la distribución conjunta es el origen de todas las otras distribuciones. La opción C establece correctamente la jerarquía estadística: la independencia implica ceteris paribus que no hay relación (covarianza cero), pero una covarianza de cero por sí sola no garantiza independencia, excepto en casos específicos como la normalidad."
  },
  {
    "q": "¿Cuáles son las propiedades clave al calcular distribuciones marginales $p_X(x)$ y $f_Y(y)$?",
    "opts": [
      "Se obtiene sumando/integrando la función de masa/densidad conjunta sobre todo el espacio del otra variable.",
      "Sirven para describir la probabilidad individual de X o Y, ignorando la dependencia entre ellas.",
      "Requieren que las variables sean independientes.",
      "Son iguales a las distribuciones individuales originales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las marginales se obtienen mediante sumas (si es discreta) o integrales (si es continua) sobre todo el espacio de la variable complementaria. Esto describe sus probabilidades individuales sin requerir independencia."
  },
  {
    "q": "¿Qué afirmación es correcta respecto al cálculo y significado de las distribuciones condicionales $p(x|y)$?",
    "opts": [
      "Representan la probabilidad de X dado que Y ha tomado un valor específico, reajustando nuestro conocimiento sobre X.",
      "Su cálculo implica dividir la función conjunta por la marginal de Y: $p(x|y) = p(x,y)/p_Y(y)$.",
      "Son esenciales para determinar si las variables son independientes.",
      "Pueden calcularse incluso cuando la variable observada (Y=y) tiene una probabilidad cero."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La distribución condicional $p(x|y)$ actualiza la probabilidad de X dada información sobre Y. Su fórmula es el cociente entre la conjunta y la marginal del condicionante ($p(x,y)/p_Y(y)$)."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para que dos variables aleatorias discretas X e Y sean estadísticamente independientes?",
    "opts": [
      "La probabilidad conjunta debe ser el producto de las marginales: $p(x,y) = p_X(x) \\cdot p_Y(y)$.",
      "La suma de todas las probabilidades conjuntas debe dar 1.",
      "La distribución condicionada debe ser constante. $p(x|y) = c$.",
      "El valor esperado de X y Y deben ser cero."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para la independencia en variables discretas, es fundamental que $p(x,y) = p_X(x) \\cdot p_Y(y)$. Además, por definición de cualquier distribución de probabilidad, la suma total debe ser igual a 1 ($\\sum_{x} \\sum_{y} p(x,y) = 1$). La condición de que la suma sea 1 es un requisito general de la PMF, no exclusivo de la independencia."
  },
  {
    "q": "¿Cuáles son las propiedades o características fundamentales de la Ley de Esperanza Total $E[Y]$?",
    "opts": [
      "Permite calcular el valor esperado de Y usando una variable auxiliar X: $E[Y] = E[E[Y|X]]$",
      "Es útil para simplificar cálculos complejos de esperanza. $E[g(X)] = \\sum g(x)p_X(x)$.",
      "Siempre se debe usar en variables continuas para hallar $E[Y]$.",
      "Solo aplica cuando X e Y son independientes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Ley de Esperanza Total es un mecanismo poderoso que permite 'condicionar' el cálculo del valor esperado. La fórmula clave es $E[Y] = E[E[Y|X]]$. Además, recordar la definición básica de esperanza para variables discretas: $E[g(X)] = \\sum g(x)p_X(x)$."
  },
  {
    "q": "¿Cuáles son interpretaciones correctas del concepto de Distribución Condicionada?",
    "opts": [
      "Describe cómo cambia la probabilidad de X cuando ya conocemos el valor específico de Y (dado $Y=y$).",
      "Es una herramienta esencial para verificar si dos variables son independientes.",
      "Permite calcular la esperanza de X sin necesidad de conocer la distribución conjunta.",
      "La fórmula general siempre implica dividir por $p(x, y)$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Conceptual y matemáticamente, la distribución condicionada $p(x|y) = p(x,y)/p_Y(y)$ describe el comportamiento de una variable dado que otra ya ha tomado un valor. Esta relación es crucial porque si las variables son independientes, la condición no cambia la distribución ($p(x|y) = p(x)$), lo cual puede usarse para verificar independencia."
  },
  {
    "q": "¿Cuáles son las implicaciones de determinar que dos variables aleatorias X e Y son independientes?",
    "opts": [
      "Su distribución conjunta es simplemente el producto de sus distribuciones marginales: $p(x,y) = p_X(x) \\cdot p_Y(y)$.",
      "La condición de una sobre la otra no altera su probabilidad (i.e., $p(x|y) = p(x)$).",
      "Su coeficiente de correlación $\\rho$ debe ser cero.",
      "Siempre deben seguir distribuciones normales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La independencia matemática se define formalmente por la multiplicación de las marginales. Interpretativamente, significa que conocer el valor de una variable no proporciona ninguna información sobre la probabilidad de la otra (lo cual implica $p(x|y) = p(x)$). Aunque $\\rho=0$ sugiere independencia, no lo garantiza (solo es necesario si son normales)."
  },
  {
    "q": "¿Cuáles deben cumplirse para que una función $f(x, y)$ sea considerada una Función de Densidad Conjunta válida?",
    "opts": [
      "Debe ser no negativa en todo su dominio: $f(x,y) \\ge 0$.",
      "Su integral total sobre todo el espacio debe ser igual a la unidad: $\\iint f(x,y) dx dy = 1$.",
      "Es necesario que sean variables continuas.",
      "Solo es válida si las variables son normales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las funciones de densidad deben cumplir dos propiedades fundamentales: no pueden ser negativas en ninguna parte del espacio ($f(x,y) \\ge 0$), y la integral total sobre todo su dominio debe sumar o integrar a 1 (normalización)."
  },
  {
    "q": "¿Qué significa que una distribución marginal $p_X(x)$ esté obtenida de la distribución conjunta?",
    "opts": [
      "Que el comportamiento de X no depende del valor específico que tome Y.",
      "Que se ha realizado un proceso de suma o integración sobre todas las posibles realizaciones de la otra variable (Y).",
      "Implica que X e Y tienen la misma varianza marginal.",
      "Solo es posible si ambas variables son discretas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Conceptualmente, obtener una marginal significa 'eliminar' el efecto de la otra variable. Matemáticamente, se logra mediante sumatoria (discreto) o integración (continuo), lo que nos permite estudiar X por sí sola."
  },
  {
    "q": "¿Cuáles son las principales diferencias entre la FDA conjunta y la Función de Densidad Conjunta?",
    "opts": [
      "La FDA se usa para variables discretas, mientras que la Función de Densidad es para continuas.",
      "La FDA acumula probabilidades (usando $P(X \\le x, Y \\le y)$), mientras que la Densidad requiere integración sobre un área. $f(x,y)$.",
      "Ambas deben sumar a 1 en su espacio total.",
      "Su cálculo implica solo realizar una derivación parcial."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La distinción fundamental es el tipo de variable: la FDA (F) para discreto/acumulación; la Función de Densidad (f) para continuo. Además, $F(x,y)$ proporciona una probabilidad directa, mientras que el área bajo $f(x,y)$ da esa misma probabilidad."
  },
  {
    "q": "¿Qué medidas describen completamente la distribución de probabilidad conjunta de $(X, Y)$?",
    "opts": [
      "La función de masa conjunta $p(x, y)$, las distribuciones marginales $p_X(x)$ y $p_Y(y)$.",
      "Solo conocer el valor esperado $\\mathbb{E}[XY]$.",
      "Conocer únicamente la distribución marginal de $X$ y la de $Y$.",
      "La función de densidad conjunta $f(x, y)$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para describir completamente $(X, Y)$, necesitamos la información más detallada posible. Esto se logra con la función de masa (o densidad) conjunta $p(x,y)$ (o $f(x,y)$). Sin embargo, también es crucial conocer sus marginales ($p_X$ y $p_Y$), ya que estas son las proyecciones individuales sobre los ejes X e Y. Conocer solo una no basta."
  },
  {
    "q": "¿Qué conceptos deben considerarse al interpretar el significado de una distribución condicional?",
    "opts": [
      "El valor esperado solo considera los estados donde Y ocurre.",
      "La información proporcionada por la variable condicionante $y$ restringe el espacio muestral.",
      "Permite calcular la probabilidad conjunta mediante $p(x,y) = p(x|y) p_Y(y)$.",
      "$p(x|y)$ es siempre una función de $y$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La opción [0] y [1] son interpretaciones correctas: el espacio se reduce ($y$) y solo consideramos resultados viables. La relación de probabilidad en la opción [2] es la definición fundamental de cómo recuperar la conjunta a partir de la condicional y la marginal (multiplicación en probabilidades)."
  },
  {
    "q": "¿Qué acciones son necesarias para interpretar completamente un modelo bidimensional?",
    "opts": [
      "Identificar si las variables son independientes o dependientes.",
      "Calcular tanto las distribuciones marginales como la conjunta. ",
      "Determinar los momentos clave (media y varianza) tanto individualmente como en función de la otra variable (condicional).",
      "Visualizar el conjunto de datos usando gráficas de dispersión."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un análisis exhaustivo requiere pasar por todos los niveles: entender la conjunta (el modelo completo), calcular las marginales para ver lo individual, y usar la condicional/esperanza total para cuantificar el impacto de una variable sobre otra. La visualización es útil, pero estadísticamente incompleta sin estos cálculos."
  },
  {
    "q": "¿Cuáles son las implicaciones prácticas de utilizar las leyes totales?",
    "opts": [
      "Permiten descomponer la variabilidad total en componentes (varianza condicional y varianza de la media condicional).",
      "Simplifican el cálculo del valor esperado al pasar de una dimensión a otra.",
      "Son vitales para modelar sistemas complejos donde las variables están anidadas o condicionadas entre sí.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las leyes totales (de esperanza y varianza) son herramientas fundamentales. Permiten descomponer la complejidad: en el valor esperado, simplifican de forma secuencial; en la varianza, descompone la variabilidad total en efectos condicionales."
  },
  {
    "q": "En el ámbito de variables aleatorias continuas bidimensionales, ¿cuál de las siguientes afirmaciones sobre las funciones de densidad conjunta $f(x,y)$ es válida?",
    "opts": [
      "$f(x,y) \\geq 0$ para todo $(x, y)$.",
      "$f_X(x) = \\int f(x,y)dy$.",
      "$f(x,y)$ debe integrarse a 1 sobre el plano $\\mathbb{R}^2$.",
      "Si $f(x,y)$ es normalizada correctamente, se puede obtener la marginal de Y por integrar respecto a X."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Todas las propiedades son fundamentales: 1. No negatividad. 2. Obtención de marginales (integración). 3. La integral total debe ser 1 para que sea una PDF válida."
  },
  {
    "q": "Al aplicar el Teorema de Varianzas Totales ($\\text{Var}(Y) = E[\\text{Var}(Y|X)] + \\text{Var}(E[Y|X])$), ¿qué debo saber?",
    "opts": [
      "Este teorema permite descomponer la varianza total en dos componentes: una componente esperada (media) y una componente variable.",
      "El término $\\text{Var}(E[Y|X])$ mide la dispersión de las medias condicionales a lo largo del espacio de X.",
      "Siempre debo calcular primero las varianzas y esperanzas condicionadas antes de aplicar la fórmula.",
      "Si $X$ es constante, entonces $\\text{Var}(Y)$ debe ser cero."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El teorema descompone la variación total. El primer punto explica el concepto general. El segundo identifica precisamente lo que mide cada término (la dispersión de las medias). Aunque no es estrictamente necesario calcular primero todo en orden, abordar los cálculos condicionales es un paso lógico y metodológico requerido para su aplicación."
  },
  {
    "q": "¿Qué representan de manera conceptual los conceptos de distribución condicionada y ley de esperanzas totales?",
    "opts": [
      "La distribución condicional $p(x|y) = p(x,y)/p_Y(y)$ describe la probabilidad de X dado un valor fijo de Y.",
      "La Ley de Esperanzas Totales establece que $E[X] = E[E[X|Y]]$, lo cual es útil para calcular esperancias sin conocer la distribución conjunta completa.",
      "Indica que si las variables son independientes, su esperanza condicional será igual a la esperanza marginal: $E[X|Y]=E[X]$.",
      "Miden únicamente la variabilidad de una variable mientras se mantiene constante la otra."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El primer punto define correctamente el concepto fundamental de condicionamiento. El segundo es la Ley Total de Esperanza (un principio clave). El tercer punto es la consecuencia más importante y práctica: si $X$ e $Y$ son independientes, la información sobre $Y$ no afecta $E[X]$, por lo que $E[X|Y] = E[X]$. Todos estos conceptos están intrínsecamente relacionados."
  },
  {
    "q": "¿Cuáles de las siguientes afirmaciones respecto a la independencia y las propiedades de las distribuciones bidimensionales son correctas?",
    "opts": [
      "Si X e Y son independientes, sus variables aleatorias también lo son.",
      "La condición $p(x,y) = p_X(x) \\cdot p_Y(y)$ es necesaria y suficiente para garantizar la independencia de X e Y.",
      "El hecho de que las marginales sean fáciles de calcular no implica automáticamente la independencia entre X e Y.",
      "Si $E[XY] = E[X]E[Y]$, entonces necesariamente X e Y deben ser independientes."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La primera y segunda afirmación definen correctamente la base teórica de la independencia. La tercer punto es crucial: el hecho de que $p(x|y)$ exista no implica independencia (solo significa que $p_Y(y)>0$). El cuarto punto es falso; aunque la igualdad de esperanzas en producto es una NECESARIA condición para la independencia, no es suficiente (ejemplo: variables no normales correlacionadas)."
  },
  {
    "q": "¿Cuáles son las características o interpretaciones válidas relacionadas con el cálculo de varianzas y leyes totales en variables bidimensionales?",
    "opts": [
      "La Ley de Varianzas Totales relaciona $\\text{Var}(X) = E[\\text{Var}(X|Y)] + \\text{Var}(E[X|Y])$.",
      "El término $E[\\text{Var}(X|Y)]$ mide la variabilidad promedio que queda en X después de considerar las fluctuaciones explicadas por Y.",
      "Permite descomponer la varianza total en dos componentes: el componente residual (no explicado) y el componente esperado (explicado).",
      "Solo aplica cuando X e Y siguen una distribución Gaussiana multivariada."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Se utiliza la Ley de Varianzas Totales. La primera opción proporciona la fórmula correcta para descomponer $\\text{Var}(X)$. La segunda y tercera opciones interpretan correctamente los dos términos de esa descomposición: $E[\\text{Var}(X|Y)]$ (varianza residual) y $\\text{Var}(E[X|Y])$ (varianza explicada o componente promedio)."
  },
  {
    "q": "¿Qué elementos son correctos al describir la relación entre las distribuciones joint, marginales y condicionadas?",
    "opts": [
      "La distribución conjunta $p(x,y)$ siempre contiene toda la información de ambas variables.",
      "Las probabilidades marginales $p_X(x)$ se calculan mediante sumas o integrales sobre el eje Y (o X).",
      "Si las variables son independientes, la distribución conjunta debe ser igual al producto de sus marginales.",
      "Para calcular una probabilidad condicional $p(x|y)$, es obligatorio dividir por $p_Y(y)$ para normalizar el resultado."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El primer punto define que la joint contiene toda la información. El segundo describe cómo obtenerlas. El cuarto es la definición operativa de independencia. La opción incorrecta (distractora) confunde el cálculo condicional con un simple cociente; se debe usar $p(x|y) = p(x,y)/p_Y(y)$ y recordar que esto solo define una nueva distribución 'condicionada', no necesariamente la probabilidad absoluta de X."
  },
  {
    "q": "¿Qué representa la función de densidad conjunta (f(x, y))?",
    "opts": [
      "La altura del PDF en un punto $(x, y)$, representando el grado de ocurrencia simultánea.",
      "Es la base para calcular tanto distribuciones marginales como condicionales. ",
      "Si su integral sobre todo el espacio no es 1, la función está mal normalizada.",
      "La probabilidad acumulada de que X sea menor o igual a $x$ Y menor o igual a $y$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La PDF conjunta $f(x, y)$ describe cómo se distribuyen los valores simultáneamente (Opción 1 es incorrecto, esa es F(x,y)). Es crucial para calcular marginales ($\\int f(x,y)dy$) y condicionales. Debe estar normalizada."
  },
  {
    "q": "¿Qué implica conceptualmente la ley de esperanza total $E[X] = E[E[X|Y]]$?",
    "opts": [
      "Que al promediar sobre todas las condiciones posibles (Y), el efecto de la condición desaparece.",
      "Es un principio fundamental que siempre simplifica los cálculos de esperanzas complejas a pasos más sencillos.",
      "Afirma que la esperanza del valor esperado es igual a la esperanza marginal. Esto ayuda a entender cómo 'promediar' una expectativa.",
      "Solo aplica cuando Y es una variable binaria."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Esta ley de anidación (E[E[X|Y]]) conceptualiza que el valor esperado total de X es simplemente la esperanza de las expectativas condicionales. Es un principio universalmente útil y no tiene restricciones en la naturaleza de Y."
  },
  {
    "q": "En el contexto de variables aleatorias bidimensionales (X, Y), ¿cuáles afirmaciones son correctas?\nA) La Distribución Conjunta describe cómo varían X e Y simultáneamente.\nB) Las distribuciones marginales representan la variación individual de X o Y sin considerar la otra variable.\nC) Si las variables son independientes, su distribución conjunta es el producto de sus distribuciones marginales: $p(x, y) = p_X(x) p_Y(y)$.",
    "opts": [
      "La Distribución Conjunta describe cómo varían X e Y simultáneamente.",
      "Las distribuciones marginales representan la variación individual de X o Y sin considerar la otra variable.",
      "Si las variables son independientes, su distribución conjunta es el producto de sus distribuciones marginales: $p(x, y) = p_X(x) p_Y(y)$.",
      "La condición de independencia solo aplica cuando se trata de variables continuas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución conjunta describe el comportamiento simultáneo. Los marginales son los comportamientos individuales (p_X(x) o p_Y(y)). La propiedad fundamental de la independencia es que $p(x, y)$ debe ser igual al producto de las marginales."
  },
  {
    "q": "Consideremos dos variables aleatorias X e Y. ¿Qué afirmaciones definen correctamente el concepto de Independencia Estadística?\nA) Si están correlacionadas en cero ($\\text{Cov}(X, Y)=0$), entonces son independientes.\nB) La distribución de X no cambia independientemente del valor que tome Y.\nC) Para ser independientes, la probabilidad conjunta debe factorizarse como $p(x, y) = p_X(x) \\cdot p_Y(y)$.",
    "opts": [
      "La distribución de X no cambia independientemente del valor que tome Y.",
      "Para ser independientes, la probabilidad conjunta debe factorizarse como $p(x, y) = p_X(x) \\cdot p_Y(y)$.",
      "Si están correlacionadas en cero ($\\text{Cov}(X, Y)=0$), entonces son independientes.",
      "Solo si las variables tienen la misma media, pueden ser consideradas independientes."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La definición formal y más fuerte de independencia es que el conocimiento del valor de una variable no afecta la probabilidad de la otra (opción B), lo cual implica matemáticamente la factorización $p(x, y) = p_X(x) \\cdot p_Y(y)$ (opción C). El hecho de $\\text{Cov}(X, Y)=0$ solo implica independencia si las variables están distribuidas normalmente."
  },
  {
    "q": "Para calcular $\\text{Var}(Y)$, ¿cuáles pasos o conceptos son esenciales?\nA) Es necesario conocer únicamente el valor esperado $E[Y]$ y $E[Y^2]$.\nB) Si $(X, Y)$ tiene una distribución conjunta continua $f(x, y)$, primero se debe encontrar la marginal $f_Y(y) = \\int f(x, y) dx$.\nC) La fórmula es $\\text{Var}(Y) = E[Y^2] - (E[Y])^2$.",
    "opts": [
      "Es necesario conocer únicamente el valor esperado $E[Y]$ y $E[Y^2]$.",
      "Si $(X, Y)$ tiene una distribución conjunta continua $f(x, y)$, primero se debe encontrar la marginal $f_Y(y) = \\int f(x, y) dx$.",
      "La fórmula es $\\text{Var}(Y) = E[Y^2] - (E[Y])^2$.",
      "Es suficiente calcular la varianza de X e Y por separado."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Todas las opciones son correctas y necesarias en el proceso general. La opción A es la definición matemática del cálculo de la varianza. La opción B describe el paso metodológico fundamental si se parte de una función conjunta continua. La opción C repite la definición matemática usando términos esperacionales."
  },
  {
    "q": "¿Qué condiciones deben cumplirse para que dos variables aleatorias $X$ e $Y$ sean consideradas independientes?",
    "opts": [
      "Que su distribución de probabilidad conjunta sea el producto de sus distribuciones marginales: $p(x,y) = p_X(x) \\cdot p_Y(y)$.",
      "Que la esperanza conjunta sea igual al producto de las esperanzas marginales: $E[XY] = E[X]E[Y]$.",
      "Que su distribución condicional sea igual a su distribución marginal original: $p(x|y) = p_X(x)$ para todo $y$.",
      "Solo si ambas variables son normales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La independencia requiere que las probabilidades (o densidades) se factoricen mutuamente ($p(x,y)=p_X(x)p_Y(y)$). El hecho de que $E[XY] = E[X]E[Y]$ es una condición *necesaria* para la independencia, pero no siempre suficiente. La condición más fuerte y general es la igualdad condicional a la marginal."
  },
  {
    "q": "¿En términos conceptuales, ¿qué representa el concepto de Esperanza Condicionada $E[X|Y=y]$?",
    "opts": [
      "El valor esperado de X bajo el supuesto estocástico de que Y ha asumido un valor fijo y conocido $y$.",
      "Una función lineal que transforma la variable aleatoria X en función del valor de Y.",
      "La media ponderada de los valores posibles de X, donde los pesos son las probabilidades condicionales $p(x|y)$.",
      "Es siempre igual al valor esperado marginal de X: $E[X]$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Conceptual y matemáticamente, $E[X|Y=y]$ es el nuevo 'mejor estimado' o media predicha para $X$, dado que ya conocemos el valor exacto $y$ de $Y$. Esta expectativa se calcula utilizando las probabilidades condicionales."
  },
  {
    "q": "¿Cómo se aplica la Ley de Esperanzas Totales (Law of Total Expectation) en el cálculo del valor esperado marginal $E[X]$?",
    "opts": [
      "Permite descomponer $E[X]$ sumándolo sobre los valores posibles de Y: $E[X] = \\sum_y E[X|Y=y] p_Y(y)$ (discreto).",
      "Indica que el valor esperado total es la media ponderada de las esperanzas condicionadas, usando las probabilidades marginales de Y como pesos.",
      "Es una propiedad fundamental para calcular la covarianza: $Cov(X,Y) = E[E[X|Y]]$.",
      "Solo se aplica si X e Y son variables discretas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La Ley de Esperanzas Totales establece que el valor esperado marginal de una variable es la esperanza del valor esperado condicional: $E[X] = E[E[X|Y]]$. Esto se calcula ponderando las esperanzas condicionadas por las probabilidades marginales de Y."
  },
  {
    "q": "¿Qué implicación tiene aplicar la Ley de Varianzas Totales (Law of Total Variance)?",
    "opts": [
      "Descomponer la varianza total $Var(X)$ en dos componentes: la varianza condicional promedio y la varianza de la esperanza condicional.",
      "Indica que la variación total es igual a la varianza del componente predictor ($Y$) más el promedio de las varianzas restantes ($\\text{Var}(E[X|Y]) + E[\\text{Var}(X|Y)]$).",
      "Es una herramienta crucial para modelar sistemas donde hay incertidumbre tanto en los parámetros como en los errores.",
      "Ayuda a entender cuánto del cambio total en X es explicado por la variación de Y."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La Ley de Varianzas Totales descompone $Var(X)$ en dos partes: $\\text{Var}(E[X|Y])$ (la variabilidad que proviene del cambio en el valor esperado debido a la variación de Y) y $E[\\text{Var}(X|Y)]$ (el error residual promedio, o varianza dentro de los grupos definidos por Y). La fórmula es: $\\text{Var}(X) = E[\\text{Var}(X|Y)] + \\text{Var}(E[X|Y])$. "
  },
  {
    "q": "¿Cómo se interpreta el resultado $p(x|y) > p_X(x)$?",
    "opts": [
      "Significa que observar Y=y aumenta la probabilidad de ver X=x, indicando una asociación positiva.",
      "Indica que la variable Y es un predictor fuerte y fiable para el valor de X en ese punto.",
      "Sugiere que existe dependencia entre las variables, ya que la distribución de X se ha 'desplazado' respecto a su marginal original.",
      "Solo es válido si ambas variables son normales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuando $p(x|y) > p_X(x)$, significa que el evento Y=y hace más probable el evento X=x de lo que era originalmente. Esto indica una dependencia positiva o asociación fuerte entre ellas."
  },
  {
    "q": "¿Cuál es la relación matemática entre la independencia de variables y las leyes de esperanza/varianza?",
    "opts": [
      "Si X e Y son independientes, entonces $E[X|Y] = E[X]$ y $\\text{Var}(X|Y) = \\text{Var}(X)$ (y análogamente para Y).",
      "La independencia implica que el término de varianza condicional promedio es cero: $E[\\text{Var}(X|Y)] = 0$.",
      "Si son independientes, la ley total de varianzas se simplifica a $\\text{Var}(X) = \\text{Var}(E[X|Y])$.",
      "Permite que el cálculo de cualquier esperanza o varianza sea simplemente el producto de las marginales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si X e Y son independientes, la información sobre Y no cambia nuestras expectativas sobre X. Por lo tanto, $E[X|Y] = E[X]$ y $\\text{Var}(X|Y) = \\text{Var}(X)$. Esto simplifica ambas leyes a sus respectivas marginales."
  },
  {
    "q": "¿Cuál es la principal ventaja conceptual de utilizar el marco probabilístico bidimensional?",
    "opts": [
      "Permite modelar sistemas donde múltiples factores afectan simultáneamente un resultado, capturando interdependencias.",
      "Es fundamental para realizar inferencia estadística sobre parámetros desconocidos mediante muestreo conjunto.",
      "Ayuda a definir si una variable puede ser explicada linealmente por otra (regresión).",
      "Simplifica la distribución al reducir el espacio de estados en comparación con múltiples variables."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El marco bidimensional permite ir más allá del análisis individual. Su valor reside en modelar cómo las variables interactúan y si esa interacción es lineal (regresión) o simplemente una correlación espacial (dependencia)."
  },
  {
    "q": "¿Cómo se utiliza la distribución conjunta $p(x,y)$ para calcular la esperanza de un producto de funciones $g(X)h(Y)$?",
    "opts": [
      "Se calcula como el valor esperado marginal: $E[g(X)h(Y)] = E[g(X)]E[h(Y)]$ (si son independientes).",
      "Si X e Y son independientes, la expectativa del producto es el producto de las expectativas: $E[g(X)h(Y)] = E[g(X)] \\cdot E[h(Y)]$.",
      "Siempre se calcula usando la fórmula conjunta: $\\sum_x \\sum_y g(x)h(y) p(x,y)$.",
      "Solo es posible si ambas variables tienen distribuciones gaussianas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La propiedad clave aquí es que el valor esperado del producto de dos funciones $g(X)$ y $h(Y)$ depende totalmente de la independencia. Si son independientes, se factoriza."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones es correcta respecto a la relación entre distribución conjunta, marginal y condicionada?",
    "opts": [
      "La probabilidad condicional $p(x|y)$ siempre será igual a $p(x) \\cdot p(y)$.",
      "Si $X$ e $Y$ son independientes, entonces $p(x|y) = p_X(x)$ (o $f(x|y) = f_X(x)$).",
      "La distribución marginal de $X$ se obtiene sumando la conjunta sobre todos los posibles valores de $Y$.",
      "Si conocemos la condicional $p(x|y)$, podemos deducir automáticamente la conjunta $p(x,y)$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Recordemos las reglas básicas: 1. La independencia implica que la condición no afecta a la distribución, por lo tanto $p(x|y) = p_X(x)$. 2. La marginal de X se calcula sumando/integrando sobre Y (el Teorema de la Probabilidad Total). 3. Nunca es cierto que sean iguales; la ley de probabilidad total nos da la fórmula correcta: $p(x, y) = p(x|y) \\cdot p_Y(y)$."
  },
  {
    "q": "Considerando dos variables discretas $(X, Y)$, ¿cómo se calcula el valor esperado del producto $\\mathbb{E}[XY]$?",
    "opts": [
      "$\\mathbb{E}[XY] = \\sum_x x \\cdot \\mathbb{E}[Y|X=x]$.",
      "$\\mathbb{E}[XY] = \\mathbb{E}[X] \\cdot \\mathbb{E}[Y]$, siempre que no sean independientes.",
      "Se debe usar la fórmula $\\mathbb{E}[XY] = \\sum_x \\sum_y xy \\cdot p(x, y)$.",
      "La única forma es calcular primero la varianza de $X$ y luego esa misma en $Y$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El cálculo directo e indiscutible para $\\mathbb{E}[XY]$ es usar la definición completa: multiplicar el producto ($xy$) por su probabilidad conjunta $p(x, y)$ y sumar sobre todo el espacio. La opción 1 es una forma de aplicar la Ley de Esperanzas Totales (ver abajo) pero solo funciona si se asume que $\\mathbb{E}[Y|X]$ existe y es integrable."
  },
  {
    "q": "¿Cuál es la aplicación correcta del Teorema de las Esperanzas Totales $\\mathbb{E}[Y] = \\mathbb{E}[\\mathbb{E}[Y|X]]$?",
    "opts": [
      "Permite calcular el valor promedio total de $Y$ sin conocer su distribución conjunta, solo usando la condicional.",
      "Es fundamental cuando se desea estimar $\\mathbb{E}[Y]$ a partir de información parcial o condicionada sobre $X$.",
      "Demuestra que el conocimiento de la esperanza marginal ($\\mathbb{E}[X]$) nos permite determinar cualquier otra esperanza.",
      "Solo es aplicable si las variables $X$ e $Y$ son independientes."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El teorema actúa como un 'promedio de esperanzas'. Nos dice que para obtener la esperanza total $\\mathbb{E}[Y]$, podemos calcular la esperanza condicional $\\mathbb{E}[Y|X]$ (que es una función de $X$) y luego tomar el promedio (esperanza) de esa función sobre la distribución de $X$. Es extremadamente poderoso porque no requiere que la relación sea simple."
  },
  {
    "q": "¿Qué afirmación respecto a las varianzas condicionales $\\text{Var}(Y|X)$ es verdadera?",
    "opts": [
      "$\\mathbb{E}[\\text{Var}(Y|X)] = \\text{Var}(Y)$ siempre y cuando $X$ esté definida.",
      "La variación de $Y$ dado un valor específico de $x$ solo depende de la distribución condicional $p(y|x)$.",
      "Si $\\text{Var}(Y|X) = c$, entonces $Y$ e $X$ deben ser perfectamente correlacionadas y sus varianzas deben ser iguales.",
      "El cálculo requiere necesariamente que las variables sean discretas para ser manejables."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La variación condicional $\\text{Var}(Y|X)$ es una función de $X$. Al tomar la esperanza de esta función (Ley de Varianzas Totales), obtenemos la varianza total de $Y$: $\\text{Var}(Y) = \\mathbb{E}[\\text{Var}(Y|X)] + \\text{Var}(\\mathbb{E}[Y|X])$. La opción 2 es conceptualmente correcta: dado que fijamos $x$, solo el comportamiento interno de $Y$ cambia."
  },
  {
    "q": "¿Cómo afecta conocer la dependencia lineal o el coeficiente de correlación $\\rho(X, Y)$ a la independencia?",
    "opts": [
      "$\\rho(X, Y) = 0$ es una condición necesaria (aunque no suficiente) para que $X$ e $Y$ sean independientes.",
      "Si $\\rho(X, Y) \neq 0$, las variables son necesariamente dependientes y deben usarse distribuciones condicionadas.",
      "Solo si $\\text{Cov}(X, Y) = 0$ podemos asumir independencia sin revisar la conjunta.",
      "La correlación solo mide la fuerza de una relación lineal y no tiene relación con la independencia estocástica."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Este es un error conceptual clásico. Aunque $\\text{Cov}(X, Y) = 0$ (y por lo tanto $\\rho(X, Y)=0$) es *necesario* para la independencia, NO es suficiente en general. Las variables deben satisfacer la condición $p(x, y) = p_X(x) \\cdot p_Y(y)$. Sin embargo, si las variables son normales, el cero de covarianza sí implica independencia."
  },
  {
    "q": "Se ha calculado $\\mathbb{E}[Y|X=x]$. ¿Qué representa la función resultante $g(x) = \\mathbb{E}[Y|X=x]$?",
    "opts": [
      "La mejor estimación puntual del valor esperado de $Y$ si se conoce el valor $x$.",
      "Una curva que muestra cómo cambia el promedio de $Y$ en respuesta a diferentes valores posibles de $X$.",
      "El coeficiente de variación entre $X$ e $Y$, normalizando su relación.",
      "Es la función de densidad marginal $f_Y(y)$ transformada por un factor lineal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La esperanza condicional $\\mathbb{E}[Y|X=x]$ es el corazón del análisis predictivo. Nos dice: 'Si sé que $X$ es igual a $x$, ¿cuál debería ser mi mejor estimación puntual (el promedio) para $Y$'? Esta función nos ayuda a modelar la dependencia."
  },
  {
    "q": "¿Qué características definen una relación de dependencia entre $X$ e $Y$?",
    "opts": [
      "Si $\\text{Cov}(X, Y) \neq 0$, es un indicador muy fuerte (aunque no suficiente) de que las variables están relacionadas.",
      "$p(x|y)$ varía significativamente a medida que cambian los valores de $y$.",
      "El hecho de que sus marginales sumen 1 no garantiza su independencia.",
      "La desviación estándar conjunta, $\\sigma_{(X,Y)}$, debe ser mayor que la suma de las desviaciones individuales ($\\sigma_X + \\sigma_Y$)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un cociente de covarianza distinto de cero indica una relación lineal o alguna dependencia. Si la probabilidad condicional varía (Opción 2), significa que el valor esperado de X depende del valor específico de Y, lo cual es la definición operativa de dependencia en este contexto. La Opción 3 no existe como concepto estándar y su afirmación matemática es incorrecta."
  },
  {
    "q": "Si $p(x, y)$ es una función de masa de probabilidad (PMF) conjunta para variables discretas. ¿Qué propiedades son correctas sobre las distribuciones marginales y condicionadas?",
    "opts": [
      "$p_X(x) = \\sum_y p(x, y)$: Se obtiene sumando sobre todos los valores posibles de Y.",
      "Condicionalmente, $p(x|y) = p(x, y)/p_Y(y)$ siempre es la forma correcta de calcular la probabilidad.",
      "$p_Y(y) = \\sum_x p(x, y)$: Se obtiene sumando sobre todos los valores posibles de X.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres puntos son definiciones fundamentales. Las marginales se calculan sumando la conjunta (una variable), y las condicionadas se obtienen dividiendo la conjunta por la marginal de la condición: $p(x|y) = p(x, y)/p_Y(y)$."
  },
  {
    "q": "Respecto al cálculo de la Varianza Total (Ley de Varianzas Totales), ¿qué se puede afirmar sobre sus componentes?",
    "opts": [
      "$Var(Y) = \\mathbb{E}[Var(Y|X)] + Var(\\mathbb{E}[Y|X])$: Es una descomposición crítica en el análisis estadístico.",
      "El primer término, $\\mathbb{E}[Var(Y|X)]$, representa la varianza promedio de Y dado X.",
      "El segundo término, $Var(\\mathbb{E}[Y|X])$, mide la dispersión causada por las diferencias entre los valores esperados condicionados.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La fórmula de varianzas totales es: $Var(Y) = \\mathbb{E}[\\text{Variabilidad Condicional}] + \\text{Varianza de las Medias Condicionales}$. El primer término mide el 'ruido' promedio (varianza dentro de los grupos definidos por X), y el segundo término mide la dispersión entre los centros de esos grupos."
  },
  {
    "q": "Si se conoce una distribución conjunta discreta $p(x, y)$, ¿qué pasos son necesarios para determinar si las variables X e Y son independientes?",
    "opts": [
      "Calcular $\\sum_y p(x, y)$ y $\\sum_x p(x, y)$ para obtener las marginales.",
      "Verificar que el producto de las distribuciones marginales ($p_X(x) \\cdot p_Y(y)$) sea igual a la distribución conjunta $p(x, y)$ para *todos* los pares $(x, y)$.",
      "Calcular $\\mathbb{E}[Y|X]$ y verificar si el resultado es una constante sin dependencia de X.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Aunque la independencia implica que las marginales sean iguales al producto ($p(x,y) = p_X(x) \\cdot p_Y(y)$), el método más robusto es verificar esta igualdad para *todos* los puntos. El hecho de que $\\mathbb{E}[Y|X]$ sea constante es una condición necesaria pero no siempre suficiente si se usa solo en un caso puntual."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para que dos variables aleatorias X e Y sean estadísticamente independientes?",
    "opts": [
      "Que su distribución conjunta sea el producto de sus distribuciones marginales: $p(x,y) = p_X(x) \\cdot p_Y(y)$.",
      "Que la esperanza condicional de X dado Y sea constante ($E[X|Y] = c$).",
      "Que su covarianza sea cero ($\\text{Cov}(X, Y) = 0$).",
      "Que sus valores promedio sean iguales: $E[X] = E[Y]$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La condición necesaria y suficiente para la independencia es que $p(x,y) = p_X(x) \\cdot p_Y(y)$. Sin embargo, aunque $\\text{Cov}(X, Y)=0$ a menudo implica independencia (especialmente con variables normales), no siempre es una condición *suficiente* matemática. Además, si $E[X|Y] = c$, significa que el conocimiento de Y no afecta la media de X, lo cual es un fuerte indicador de independencia."
  },
  {
    "q": "¿Cuáles son las propiedades correctas al calcular probabilidades condicionadas?",
    "opts": [
      "La probabilidad condicional $p(x|y)$ se calcula dividiendo la conjunta por la marginal: $p(x|y) = p(x,y)/p_Y(y)$.",
      "Si $p_Y(y)=0$, la distribución condicionada es indefinida.",
      "La suma de las probabilidades condicionales para un valor fijo de Y debe ser 1: $\\sum_{x} p(x|y) = 1$.",
      "El conocimiento de $p(x|y)$ implica que X e Y son independientes."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La definición clave es $p(x|y) = p(x,y)/p_Y(y)$, y si el denominador $p_Y(y)$ es cero, la división no está definida. Además, por definición de probabilidad condicional, sumar las probabilidades sobre todo el espacio muestral de X (manteniendo Y fijo) debe dar 1."
  },
  {
    "q": "¿En relación con la esperanza y varianzas totales, ¿qué afirmaciones son ciertas?",
    "opts": [
      "La Ley de Esperanzas Totales establece que $E[X] = E[E[X|Y]]$.",
      "Si X e Y son independientes, entonces $Var(X|Y) = Var(X)$ y $E[X|Y] = E[X]$.",
      "La Ley de Varianzas Totales es: $Var(X) = E[Var(X|Y)] + Var(E[X|Y])$. ",
      "$Var(\\text{Constante}) = 0$, independientemente de la variable."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las fórmulas clave son: 1. $E[X] = E[E[X|Y]]$. 2. Si X e Y son independientes, el conocimiento de Y no cambia la esperanza ni la varianza de X, por lo que $Var(X|Y) = Var(X)$ y $E[X|Y] = E[X]$. 3. La fórmula completa es $Var(X) = E[Var(X|Y)] + Var(E[X|Y])$. (La opción 2 es correcta, no la de covarianza cero)."
  },
  {
    "q": "¿Cuál es el procedimiento correcto para calcular la esperanza condicional $E[X|Y=y]$?",
    "opts": [
      "Se calcula sumando $x \\cdot p(x|y)$ sobre todos los valores posibles de x.",
      "Es equivalente a calcular simplemente $E[X] / p_Y(y)$.",
      "Requiere integrar la función conjunta: $\\int x \\cdot f(x, y) dx$.",
      "Depende únicamente del valor marginal esperado de X, sin considerar Y."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La esperanza condicional $E[X|Y=y]$ es el promedio ponderado de los posibles valores de X, donde los pesos son las probabilidades condicionadas $p(x|y)$. Por lo tanto: $E[X|Y=y] = \\sum_{x} x \\cdot p(x|y)$. (Aunque la opción 3 usa $\\int$, conceptualmente es correcto para el caso continuo)."
  },
  {
    "q": "Si se sabe que X e Y son normales, y $Var(X) = 4$ y $Var(Y) = 9$. ¿Qué afirmación sobre sus varianzas condicionales es correcta?",
    "opts": [
      "Si X e Y son independientes, entonces $Var(X|Y)$ será constante e igual a $Var(X)$.",
      "La $\\text{Var}(X|Y)$ siempre es menor o igual que $Var(X)$.",
      "$Var(E[X|Y])$ representa la varianza de la media predictiva de X en términos de Y.",
      "El cálculo de $Var(X)$ requiere conocer únicamente la distribución conjunta."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si son independientes, $Var(X|Y) = Var(X)$. La varianza condicional es una medida que indica cuán dispersos están los valores de X cuando Y está fijo. Además, la Ley de Varianzas Totales desglosa $Var(X)$ en la esperanza de la varianza ($\\text{E}[Var(X|Y)]$) y la varianza de la media ($\\text{Var}(E[X|Y])$)."
  },
  {
    "q": "Considere una variable aleatoria X con distribución discreta. ¿Cuál es el error más común al calcular la esperancia o varianza conjunta?",
    "opts": [
      "Confundir $\\sum p(x, y) \\cdot g(x, y)$ (el valor esperado de una función) con $g(E[X], E[Y])$.",
      "Asumir que el cálculo es lineal: $E[X+Y] = E[X] + Y$.",
      "Olvidar incluir la variable aleatoria en las funciones de masa.",
      "Calcular la esperanza marginal e intentar usarla como conjunta."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El error fundamental es asumir que el valor esperado de una función conjunta se calcula simplemente aplicando la función a los valores esperados individuales. Recordar siempre que $E[g(X, Y)] = \\sum g(x, y) p(x, y)$."
  },
  {
    "q": "¿Considerando $p(x, y)$ como la función de masa conjunta (VAD), ¿qué afirmaciones son correctas? (Seleccione tres)",
    "opts": [
      "$p_X(x) = \\sum_y p(x, y)$ es el cálculo de la distribución marginal de X.",
      "La independencia se verifica cuando $p(x, y) = p_X(x) \\cdot p_Y(y)$ para todo $(x, y)$.",
      "$p_{X|Y}(x|y) = p(x, y)/p_Y(y)$ es la definición de la distribución condicionada.",
      "Si $p(x|y) = p(x)/p_Y(y)$, las variables son independientes."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "1. La marginalización se realiza sumando sobre el otro eje ($p_X(x) = \\sum_y p(x, y)$). 2. La condición de independencia es $p(x, y) = p_X(x) p_Y(y)$. 3. La fórmula correcta para la distribución condicionada es $p(x|y) = p(x, y)/p_Y(y)$."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre el cálculo de esperanzas condicionales $\\mathbb{E}[Y|X=x]$ es correcta? (Seleccione tres)",
    "opts": [
      "Representa la media esperada de Y, asumiendo que X tiene un valor fijo $x$.",
      "$p(y|x) = p(x, y)/p_X(x)$ se utiliza para determinar las probabilidades condicionales necesarias.",
      "El resultado $\\mathbb{E}[Y|X=x]$ siempre será un valor constante (número escalar).",
      "Requiere calcular primero la distribución marginal de X."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "1. $\\mathbb{E}[Y|X=x]$ es la media de Y dado que X está fijo en $x$. 2. Se necesita $p(y|x)$, que requiere dividir por la marginal de X ($p_X(x)$). 3. La distribución condicionada $p(y|x) = p(x, y)/p_X(x)$ es esencial para calcular esta esperanza."
  },
  {
    "q": "¿Si $X$ e $Y$ son variables aleatorias discretas, ¿cómo se calcula la varianza condicional $\\text{Var}(Y|X=x)$? (Seleccione tres)",
    "opts": [
      "Se utiliza la fórmula general de la varianza: $\\mathbb{E}[Y^2|X=x] - (\\mathbb{E}[Y|X=x])^2$.",
      "Requiere el conocimiento de la distribución conjunta $p(x, y)$.",
      "El resultado es un valor que solo depende del valor fijo $x$ y no de otros valores de X.",
      "Se calcula sumando las desviaciones cuadradas con respecto a la media condicional."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "1. La fórmula estándar de varianza se aplica al contexto condicionado: $\\text{Var}(Y|X=x) = \\mathbb{E}[Y^2|X=x] - (\\mathbb{E}[Y|X=x])^2$. 2. Tanto la esperanza como el cálculo de las distribuciones condicionales dependen fundamentalmente de $p(x, y)$. 3. Dado que es una función de condición $X=x$, su resultado solo está determinado por ese valor $x$."
  },
  {
    "q": "¿Cuál es la interpretación correcta del principio de independencia entre X e Y? (Seleccione tres)",
    "opts": [
      "El conocimiento del valor de X no altera la probabilidad marginal de Y.",
      "Se cumple que $p(x, y) = p_X(x) \\cdot p_Y(y)$ para todos los valores $(x, y)$.",
      "Si X e Y son independientes, necesariamente $p(y|x) = p_Y(y)$.",
      "La esperanza condicional $\\mathbb{E}[Y|X=x]$ es igual a la esperanza marginal $\\mathbb{E}[Y]$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "1. Esto significa que las variables no tienen información mutuamente restrictiva sobre sus probabilidades marginales. 2. Esta es la definición matemática formal de independencia en términos de PMF o PDF. 3. Si son independientes, $p(y|x) = p_Y(y)$, y por lo tanto $\\mathbb{E}[Y|X=x] = \\mathbb{E}[Y]$."
  },
  {
    "q": "¿Qué propiedades debe tener la distribución de probabilidad conjunta para que el cálculo de las marginales sea posible? (Seleccione tres)",
    "opts": [
      "Debe ser no negativa en todo su dominio.",
      "La suma total sobre todo el dominio debe igualar 1.",
      "Solo es necesaria conocer la forma funcional $p(x, y)$.",
      "El cálculo de marginales siempre requiere integración (incluso si son discretas)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "1. Toda función de probabilidad debe ser no negativa ($p(x, y) \\ge 0$). 2. Como cualquier distribución, la suma total (integral o sumatoria) sobre todo el espacio muestral debe dar 1 ($\\sum_x \\sum_y p(x, y) = 1$). 3. Aunque conceptualmente se puede entender sin conocer la forma funcional, para realizar cálculos matemáticos específicos como marginales, es indispensable conocer $p(x, y)$."
  },
  {
    "q": "Se está analizando una cola de supermercado con dos variables: Tiempo (T) y Número de Clientes (C). ¿Cuál es la mejor herramienta estadística para modelar cómo el tiempo promedio por cliente varía dependiendo del número de clientes? (Seleccione tres)",
    "opts": [
      "Distribución Conjunta $p(t, c)$",
      "Esperanza Condicionada $\\mathbb{E}[T|C=c]$",
      "Ley de Varianzas Totales $\\text{Var}(T) = \\dots$",
      "Correlación Pearson ($\\rho$) o Coeficiente de Varianza"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "1. Se necesita la distribución conjunta $p(t, c)$ para describir ambos comportamientos simultáneamente. 2. La Esperanza Condicionada $\\mathbb{E}[T|C=c]$ es precisamente lo que busca: el tiempo promedio dado un número fijo de clientes. 3. Si se modela variabilidad, la Ley de Varianzas Totales ($\\text{Var}(T) = \\mathbb{E}[\\text{Var}(T|C)] + \\text{Var}(\\mathbb{E}[T|C])$) es crucial para entender cómo cambia el riesgo total."
  },
  {
    "q": "¿Cuáles son las implicaciones de asumir la independencia entre dos variables aleatorias, $X$ e $Y$? (Seleccione tres)",
    "opts": [
      "La distribución conjunta se factoriza en el producto de marginales.",
      "Cualquier cálculo estadístico basado en $p(x, y)$ se simplifica drásticamente.",
      "Implicará que la varianza total se reduce a la suma de las varianzas marginales: $\\text{Var}(Y) = \\dots$",
      "Significa necesariamente que el coeficiente de correlación debe ser cero ($\\rho=0$)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "1. La condición fundamental es $p(x, y) = p_X(x) \\cdot p_Y(y)$. 2. Al factorizarse la probabilidad conjunta, todos los cálculos de marginales o condicionales se simplifican (e.g., $p(x|y)=p_X(x)$). 3. Si son independientes, $\\text{Var}(Y) = \\mathbb{E}[\\text{Var}(Y|X)] + \\text{Var}(\\mathbb{E}[Y|X]) = \\text{Var}(Y) + 0$, lo cual es cierto."
  },
  {
    "q": "¿Cuáles de las siguientes afirmaciones son correctas sobre la relación entre distribuciones conjunta, marginales y condicionadas?",
    "opts": [
      "La distribución marginal se obtiene sumando la función de masa conjunta sobre todas las posibles realizaciones del otro variable.",
      "Si X e Y son independientes, su distribución conjunta es el producto de sus distribuciones marginales: $p(x,y) = p_X(x) \\cdot p_Y(y)$.",
      "La distribución condicional $p(x|y)$ es la razón entre la función de masa conjunta y la probabilidad marginal de Y.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las tres afirmaciones son principios fundamentales: (0) Los marginales se obtienen sumando sobre el otro eje. (1) La independencia es definida por el producto de las distribuciones marginales. (2) La distribución condicional se calcula mediante la razón $p(x, y) / p_Y(y)$."
  },
  {
    "q": "¿Consideremos que la variable aleatoria X sigue una distribución uniforme en $[0, 10]$ y Y sigue una distribución uniforme en $[0, 5]$. Si se asume que son independientes, ¿cuál es la densidad conjunta $f(x, y)$?",
    "opts": [
      "$f(x,y) = (1/10) + (1/5)$",
      "$f(x,y) = 1/(10 \\cdot 5)$",
      "$f(x,y) = 1/(10+5)$",
      "$f(x,y) = f_X(x) \\cdot f_Y(y)$"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Dado que X e Y son uniformes en $[0, 10]$ y $[0, 5]$ respectivamente, sus densidades marginales son $f_X(x) = 1/10$ y $f_Y(y) = 1/5$. La densidad conjunta de variables independientes es el producto de las marginales: $f(x, y) = f_X(x) \\cdot f_Y(y) = (1/10)(1/5)$. Esta expresión coincide con la opción (1). Además, se sabe que para variables uniformes e independientes en rectángulos, la forma general de $f(x,y)$ es el producto de las densidades marginales."
  },
  {
    "q": "¿Qué conceptos describen adecuadamente la estructura bivariada de dos variables aleatorias X e Y?",
    "opts": [
      "La distribución conjunta $f(x,y)$ proporciona la probabilidad de que (X=x Y=y) ocurra simultáneamente.",
      "Las distribuciones marginales $f_X(x)$ y $f_Y(y)$ describen el comportamiento individual de cada variable sin considerar la otra.",
      "La esperanza condicional $E[Y|X]$ nos dice cómo cambiaría la media de Y si ya conocemos el valor exacto de X.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución conjunta es clave para lo simultáneo. Las marginales aíslan los comportamientos individuales. La esperanza condicional $E[Y|X]$ modela la 'mejra' en nuestro conocimiento sobre Y al saber el valor de X, siendo un concepto central en estadística avanzada."
  },
  {
    "q": "¿Cuál es el propósito principal de calcular las distribuciones condicionadas?",
    "opts": [
      "Permite reducir la incertidumbre sobre una variable (Y) al conocer el valor de otra (X).",
      "Se utiliza para verificar la independencia entre variables. Si $p(y|x) = p_Y(y)$, son independientes.",
      "Es crucial en la aplicación práctica, como predecir ventas futuras sabiendo los gastos publicitarios.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución condicionada es una herramienta de reducción de incertidumbre. Si el resultado condicionado $p(y|x)$ no depende del valor de $x$, entonces las variables son independientes (verificando la condición). Esto tiene aplicaciones directas en modelado predictivo."
  },
  {
    "q": "¿Cuál es la interpretación correcta de la Ley de Esperanzas Totales, $E[Y] = E[E[Y|X]]$?",
    "opts": [
      "La esperanza total nos recuerda que el valor esperado promedio no cambia independientemente del condicionamiento.",
      "$E[Y|X]$ representa una función de X; su esperancia es simplemente $E[Y]$.",
      "Es la herramienta matemática que garantiza que al promediar las medias condicionales, obtenemos la media marginal original.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Esta ley es fundamental. Conceptualmente, dice que el promedio de los resultados condicionados (las medias $E[Y|X]$) debe ser igual al promedio simple esperado $E[Y]$. Es una forma poderosa de descomponer un problema complejo en partes más pequeñas y manejables."
  },
  {
    "q": "¿Qué propiedades se mantienen o modifican al pasar del cálculo bivariado a la esperanza condicional?",
    "opts": [
      "$E[X|Y]$ siempre es menor que $E[X]$, reflejando una relación negativa.",
      "$Var[X|Y]$ solo puede tomar valores iguales a cero si X e Y son totalmente determinísticas.",
      "El valor esperado de cualquier función lineal de las variables, como $E[aX+b]$, se mantiene en la fórmula condicional: $E[aX+b|Y] = aE[X|Y] + b$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La esperanza condicional es lineal y respeta las propiedades de expectativas. El valor esperado de una combinación lineal se mantiene bajo el condicionamiento. La primera opción es falsa; la relación puede ser positiva o negativa. La segunda opción solo implica que X es constante dado Y."
  },
  {
    "q": "¿Al calcular varianzas usando la Ley de Varianzas Totales, $Var[Y] = E[Var[Y|X]] + Var[E[Y|X]]$, ¿qué representa cada término?",
    "opts": [
      "$E[Var[Y|X]]$: La dispersión promedio (el sesgo) que Y tiene con respecto a X.",
      "$Var[E[Y|X]]$: La variación en la media condicional de Y debido a los cambios en X.",
      "Si el segundo término $Var[E[Y|X]]$ es cero, implica que la relación entre X e Y es lineal perfecta.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Esta ley descompone la varianza total. El primer término mide la 'variabilidad dentro de' las condiciones dadas por X. El segundo término mide cuán dispersa está esa media condicional a medida que X varía. Si el segundo término es cero, significa que $E[Y|X]$ es una constante, e implica independencia o determinismo."
  },
  {
    "q": "En el contexto de variables discretas (VAD), ¿cuál de los siguientes procedimientos o conceptos es válido?",
    "opts": [
      "La función de masa conjunta $p(x,y)$ debe ser multiplicada por un factor constante para obtener las probabilidades marginales.",
      "Para calcular la probabilidad condicional $p(x|y)$, se divide la función de masa conjunta $p(x,y)$ entre la función de masa marginal $p_Y(y)$.",
      "Si la suma total de la función de masa conjunta sobre todo el espacio muestral no es 1 ($\\sum_{x} \\sum_{y} p(x,y) \neq 1$), entonces los valores dados no representan una distribución válida.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Todas las afirmaciones son correctas. La primera es un error conceptual que debe evitarse; la segunda y tercera son definiciones matemáticas fundamentales en el ámbito discreto."
  },
  {
    "q": "¿Cuál de estas interpretaciones sobre la relación entre independencia y distribuciones conjuntas es correcta?",
    "opts": [
      "Si $E[X]E[Y] = E[XY]$, entonces X e Y deben ser independientes. (Falso)",
      "La condición necesaria y suficiente para la independencia estocástica es que la conjunta factorice en el producto de las marginales: $p(x,y) = p_X(x) p_Y(y)$.",
      "Si variables son independientes, sus distribuciones condicionales son simplemente iguales a sus distribuciones marginales. Por ejemplo, $p(x|y) = p_X(x)$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Esta pregunta requiere el conocimiento profundo de la independencia estocástica. La primera afirmación es una condición necesaria (si son independientes), pero no suficiente. La segunda opción define correctamente la independencia en términos distribucionales. La tercera propiedad ($p(x|y) = p_X(x)$) es la consecuencia directa y definitoria de ser independientes."
  },
  {
    "q": "¿Qué condiciones deben cumplirse para que dos variables aleatorias discretas X e Y sean estadísticamente independientes?",
    "opts": [
      "$p(x|y) = p(x)$",
      "$p(y|x) = p(y)$",
      "$p(x, y) = p_X(x) \\cdot p_Y(y)$",
      "$E[X|Y] = E[X]$"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La independencia se verifica si la probabilidad conjunta es el producto de las marginales ($p(x, y) = p_X(x) \\cdot p_Y(y)$). Esto implica que $p(x|y)$ debe ser igual a $p(x)$, y viceversa."
  },
  {
    "q": "Respecto al cálculo de distribuciones conjuntas en variables continuas (PDF), ¿cuáles afirmaciones son correctas?",
    "opts": [
      "La función de densidad conjunta es $f(x, y) = f_X(x) \\cdot f_Y(y)$ si X e Y son independientes.",
      "$f_X(x) = \\int_{-\\infty}^{\\infty} f(x, y) dy$ (Marginal de X).",
      "Si la distribución conjunta es dada, las distribuciones marginales se obtienen mediante integración.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las marginales en el caso continuo se encuentran integrando sobre todo el espacio del otro variable. La condición $f(x, y) = f_X(x) \\cdot f_Y(y)$ es la definición de independencia."
  },
  {
    "q": "¿Qué representa la esperanza condicionada $E[X|Y=y]$?",
    "opts": [
      "El valor esperado de X bajo el supuesto de que Y tiene un valor específico '$y$'.",
      "La media ponderada de X, donde los pesos son las probabilidades de Y.",
      "Si $X$ e $Y$ son independientes, $E[X|Y] = E[X]$.",
      "Es siempre igual a la esperanza marginal $E[X]$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La ley de condicionalidad establece que si X e Y son independientes (y se cumplen las condiciones), entonces $E[X|Y] = E[X]$. La función $E[X|Y=y]$ es una función de $y$ y no necesariamente igual a $E[X]$."
  },
  {
    "q": "Considerando el cálculo de la Ley de Expectativas Totales ($E[X]$), ¿cuál es su forma correcta?",
    "opts": [
      "$E[X] = E_Y[E[X|Y]]$",
      "$E[X] = \\int e[x|y] f_Y(y) dy$",
      "Es útil cuando la variable X depende de otra variable Y.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La ley nos dice que el valor esperado total de $X$ es la esperanza del valor esperado condicional de $X$. Es una herramienta fundamental para reducir variables complejas a sus componentes marginales."
  },
  {
    "q": "Si tenemos las distribuciones conjuntas de X e Y, ¿cómo se calcula la distribución condicional $p(x|y)$?",
    "opts": [
      "$p(x|y) = p(x, y) / p_Y(y)$",
      "$p(x|y) = p(x)/p_Y(y)$",
      "Es el cociente de las probabilidades conjuntas sobre la probabilidad marginal de Y.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La definición fundamental es $p(x|y) = \\frac{p(x, y)}{p_Y(y)}$. Esto es análogo a la definición de condicionalidad en teoría de conjuntos: $P(A|B) = P(A \\cap B)/P(B)$."
  },
  {
    "q": "Respecto a la Ley de Varianzas Totales ($Var[X]$), ¿cuál afirmación describe correctamente su aplicación o componentes?",
    "opts": [
      "$Var[X] = E_Y[Var[X|Y]] + Var[E[X|Y]]$",
      "$E_Y[Var[X|Y]]$ representa la varianza promedio de X dado Y.",
      "$Var[E[X|Y]]$ mide la variabilidad en el valor esperado de X que se debe a las fluctuaciones de Y.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La ley descompone la varianza total en dos componentes: la varianza promedio dentro de cada estado de Y ($E_Y[Var[X|Y]]$) y la varianza de los valores esperados (cuánto varía $E[X|Y]$ a medida que cambia Y)."
  }
];
