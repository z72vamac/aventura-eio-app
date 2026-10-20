// Leccion 6 — 180 preguntas alternativas
// Generadas con gemma4 el 2026-07-04 12:18
// Distribucion: 60/60/60 (1c/2c/3c)
window.LESSON_QUESTIONS_ALT = window.LESSON_QUESTIONS_ALT || {};
window.LESSON_QUESTIONS_ALT[6] = [
  {
    "q": "Una variable aleatoria que solo puede tomar valores contables (como el número de caras al lanzar una moneda) se clasifica como:",
    "opts": [
      "Variable Aleatoria Discreta (VAD)",
      "Variable Aleatoria Continua (VAC)",
      "Función de Densidad de Probabilidad (FDP)",
      "Función de Distribución Acumulada (FDA)"
    ],
    "c": [
      0
    ],
    "exp": "Una VAD, por definición, toma valores discretos o contables. Las VAC toman valores en intervalos continuos."
  },
  {
    "q": "¿Cuál es la característica fundamental que debe cumplir la Función de Masa de Probabilidad $p(x)$ para una variable discreta?",
    "opts": [
      "$p(x) \\ge 0$ y $\\sum p(x) = 1$",
      "$p(x) = 0$ si $x$ no está en el soporte",
      "$p(x)$ debe ser diferenciable",
      "Debe cumplir que la integral de $p(x)$ es igual a 1"
    ],
    "c": [
      0
    ],
    "exp": "La condición fundamental para una FMP es que cada probabilidad individual no sea negativa ($p(x) \\ge 0$) y que la suma total sobre todo el espacio muestral debe ser exactamente 1 ($\\sum p(x) = 1$)."
  },
  {
    "q": "Si $X$ es una VAC con fdp $f(x)$, la probabilidad de que $X$ caiga en un punto específico $P(X=a)$ siempre será:",
    "opts": [
      "Cero",
      "Mayor que cero",
      "Igual a $\\int_{-\\infty}^{a} f(x) dx$",
      "Dependiente del soporte"
    ],
    "c": [
      0
    ],
    "exp": "Una de las propiedades cruciales de las variables continuas es que la probabilidad asociada a un punto exacto, $P(X=a)$, siempre es cero. Solo podemos calcular probabilidades sobre intervalos."
  },
  {
    "q": "La Función de Distribución Acumulada (FDA), $F(x)$, define formalmente:",
    "opts": [
      "La probabilidad acumulada $P(X \\le x)$",
      "El valor esperado de la variable aleatoria",
      "La densidad máxima en el soporte",
      "La varianza asociada al sistema"
    ],
    "c": [
      0
    ],
    "exp": "Por definición, $F(x) = P(X \\le x)$. Es decir, es la probabilidad de que la variable aleatoria tome un valor menor o igual a $x$."
  },
  {
    "q": "¿Cómo se calcula la probabilidad $P(a < X \\le b)$ utilizando la Función de Distribución Acumulada (FDA), $F(x)$?",
    "opts": [
      "$F(b) - F(a)$",
      "$\\int_{a}^{b} f(x) dx$",
      "$F(b+1) - F(a-1)$",
      "$p(b) - p(a)$"
    ],
    "c": [
      0
    ],
    "exp": "La probabilidad entre dos puntos $a$ y $b$ se calcula como el valor acumulado en $b$ menos el valor acumulado hasta $a$: $P(a < X \\le b) = F(b) - F(a)$."
  },
  {
    "q": "En términos de continuidad, ¿cuál es la propiedad que debe satisfacer la FDA $F(x)$?",
    "opts": [
      "Ser continua por la derecha y monótona no decreciente",
      "Debe ser decreciente",
      "Ser estrictamente creciente en su soporte",
      "Tener una pendiente constante"
    ],
    "c": [
      0
    ],
    "exp": "Una función de distribución acumulada debe ser siempre no decreciente (monótona) e idealmente, continua por la derecha. Esta propiedad garantiza que las probabilidades se acumulen correctamente."
  },
  {
    "q": "¿Cuál es el principal propósito de utilizar la Función de Densidad de Probabilidad (FDP), $f(x)$?",
    "opts": [
      "Calcular directamente la probabilidad entre dos puntos utilizando integración continua",
      "Determinar si la variable aleatoria es discreta",
      "Estimar los parámetros poblacionales a partir de muestras grandes",
      "Identificar el soporte exacto sin cálculo"
    ],
    "c": [
      0
    ],
    "exp": "La FDP, $f(x)$, permite calcular probabilidades continuas mediante la integral $\\int_{a}^{b} f(x) dx$. No se puede usar directamente para obtener una probabilidad puntual."
  },
  {
    "q": "Un estudiante tiene que elegir si su tiempo de estudio es un valor discreto o continuo. ¿Cuál de las siguientes afirmaciones define correctamente una Variable Aleatoria Discreta (VAD)?",
    "opts": [
      "Solo puede tomar valores enteros positivos.",
      "Su espacio muestral debe ser finito o contable.",
      "Debe modelarse usando una Función de Densidad (FDP).",
      "Representa solo conteos, nunca mediciones."
    ],
    "c": [
      0
    ],
    "exp": "Una VAD toma un número contable de valores (discretos), como contar el número de caras al lanzar una moneda. Esto incluye espacios muestrales finitos o numerables."
  },
  {
    "q": "Se lanza un dado justo, y $X$ es el valor obtenido. ¿Cuál es la probabilidad de obtener 4 o menos puntos, utilizando la Función de Masa de Probabilidad (FMP) $p(x)$?",
    "opts": [
      "$P(X \\le 4) = p(1)+p(2)+p(3)+p(4) = 1/6 + 1/6 + 1/6 + 1/6 = 4/6$",
      "El valor debe calcularse con la Función de Distribución Acumulada (FDA).",
      "$P(X \\le 4)$ es siempre igual a $p(4)$.",
      "Se debe integrar $p(x)$ desde 0 hasta 4."
    ],
    "c": [
      0
    ],
    "exp": "Para una VAD, $P(X \\le x)$ se calcula sumando las probabilidades de todos los valores posibles hasta $x$: $\\sum_{k=1}^{4} p(k) = 4/6$."
  },
  {
    "q": "¿Cuál es la condición fundamental que debe cumplir cualquier función de densidad de probabilidad (FDP), $f(x)$, para que sea válida?",
    "opts": [
      "$f(x)$ debe ser no negativa en todo su dominio ($\\ge 0$).",
      "La integral total sobre todo el dominio debe ser igual a uno: $\\int_{-\\infty}^{\\infty} f(x) dx = 1$.",
      "Su valor máximo (pico) representa la probabilidad de un evento.",
      "Debe estar definida solo para números enteros."
    ],
    "c": [
      0
    ],
    "exp": "Las dos propiedades cruciales son que $f(x) \\ge 0$ siempre y que el área total bajo la curva debe ser 1, lo que garantiza que la suma de todas las probabilidades sea unitaria."
  },
  {
    "q": "Si una variable aleatoria continua $X$ tiene una Función de Distribución Acumulada (FDA) $F(x)$, ¿cómo se calcula correctamente la probabilidad $P(-2 < X \\le 5)$?",
    "opts": [
      "$P(-2 < X \\le 5) = F(5) - F(-2)$",
      "Se debe utilizar el intervalo de integración $[\\text{inferior}, \\text{superior})$ en la FDA.",
      "$P(-2 < X \\le 5) = F(5) + F(-2)$.",
      "Es necesario calcular $p(5) - p(-2)$."
    ],
    "c": [
      0
    ],
    "exp": "Por definición, el área entre dos puntos (o la diferencia de las acumuladas en esos puntos) da la probabilidad: $P(a < X \\le b) = F(b) - F(a)$."
  },
  {
    "q": "Al analizar una distribución usando su soporte ($\\text{Supp}(X)$), ¿qué información fundamental se obtiene?",
    "opts": [
      "El conjunto de todos los valores posibles que la variable aleatoria $X$ puede tomar y donde su probabilidad es positiva.",
      "La media o valor esperado de la variable, el cual siempre está incluido en el soporte.",
      "Indica si la distribución es discreta o continua (si tiene saltos).",
      "Determina únicamente la varianza, sin importar los valores posibles."
    ],
    "c": [
      0
    ],
    "exp": "El soporte define el dominio efectivo de la función de probabilidad. Es crucial porque fuera del soporte, $p(x)$ o $f(x)$ son cero."
  },
  {
    "q": "Si se sabe que la FDA $F(x)$ es monótona no decreciente y continua por la derecha, ¿qué tipo de variable aleatoria está modelando con precisión?",
    "opts": [
      "Cualquier variable aleatoria bien definida (discreta o continua).",
      "Una Variable Aleatoria Continua (VAC).",
      "Solo variables que provienen de distribuciones uniformes.",
      "Variables cuyas probabilidades solo se calculan por suma."
    ],
    "c": [
      0
    ],
    "exp": "Estas son propiedades inherentes y necesarias para cualquier función $F(x)$ que represente una distribución de probabilidad válida, independientemente si es discreta o continua."
  },
  {
    "q": "Sea $X$ una variable aleatoria con FDA $F(x)$. Si $F(3)=0.4$ y $F(7)=0.9$, entonces $P(3 < X \\le 7)$ vale:",
    "opts": [
      "$0.5$",
      "$0.4$",
      "$0.9$",
      "$1.3$"
    ],
    "c": [
      0
    ],
    "exp": "Por la propiedad de la FDA, $P(3 < X \\le 7)=F(7)-F(3)=0.9-0.4=0.5$."
  },
  {
    "q": "¿Cuál es la principal diferencia conceptual al calcular $P(X=a)$ para una VAD vs una VAC?",
    "opts": [
      "Para VAD, $p(a)$ puede ser positivo y distinto de cero; para VAC, $P(X=a)$ siempre es exactamente cero.",
      "Solo se pueden usar FMPs cuando el soporte es finito.",
      "La única forma de calcular probabilidades en VAC es mediante integración.",
      "El valor $P(X=a)$ solo existe si la variable es discreta."
    ],
    "c": [
      0
    ],
    "exp": "Esta es una distinción clave. En VAD, podemos asignar probabilidad a puntos individuales ($p(x)>0$). En VAC, debido a que el espacio es infinito, la probabilidad de un punto exacto es infinitesimal (cero)."
  },
  {
    "q": "¿Cuál es la característica definitoria de una variable aleatoria continua (VAC)?",
    "opts": [
      "Puede tomar cualquier valor dentro de un intervalo dado.",
      "Solo puede tomar valores enteros.",
      "Su soporte se encuentra en conjuntos contables.",
      "Se calcula mediante funciones de masa de probabilidad (FMP)."
    ],
    "c": [
      0
    ],
    "exp": "Una VAC, por definición, está asociada a fenómenos que pueden medirse y toman valores reales. Esto significa que su soporte reside en intervalos continuos, no solo en números enteros o discretos."
  },
  {
    "q": "Cuando se trabaja con una Variable Aleatoria Discreta (VAD), ¿qué función se utiliza para calcular la probabilidad de obtener un valor específico $x$?",
    "opts": [
      "Función de Masa de Probabilidad (FMP)",
      "Integral de Densidad",
      "Función de Distribución Acumulada (FDA) en el punto x",
      "La norma euclidiana del espacio muestral"
    ],
    "c": [
      0
    ],
    "exp": "Para VAD, la probabilidad de un valor exacto $P(X=x)$ se determina utilizando la Función de Masa de Probabilidad, denotada como $p(x)$. En contraste, en VAC utilizamos funciones y áreas bajo curvas (integrales)."
  },
  {
    "q": "¿Cuál es el propósito principal de la Función de Distribución Acumulada (FDA), $F(x)$?",
    "opts": [
      "Representar la probabilidad acumulada hasta un valor dado: $P(X \\le x)$.",
      "Calcular la esperanza matemática ($\\text{E}[X]$).",
      "Determinar si una variable es discreta o continua.",
      "Hallar el soporte de la distribución."
    ],
    "c": [
      0
    ],
    "exp": "La FDA, $F(x) = P(X \\le x)$, nos da la probabilidad de que la variable aleatoria tome un valor menor o igual a $x$. Es fundamental porque permite calcular probabilidades sobre intervalos: $P(a < X \\le b) = F(b) - F(a)$."
  },
  {
    "q": "En el contexto de las Variables Aleatorias, ¿qué representa el 'soporte' de la distribución?",
    "opts": [
      "El rango de valores donde la función $p(x)$ o $f(x)$ es estrictamente positiva.",
      "La varianza máxima posible.",
      "El valor esperado (media) de la variable aleatoria.",
      "Solo los valores enteros positivos."
    ],
    "c": [
      0
    ],
    "exp": "El soporte es el conjunto de valores posibles que puede tomar la variable. Si decimos que el soporte es $[a, b]$, significa que $f(x)$ solo es mayor que cero para $x$ entre $a$ y $b$. Es crucial para saber dónde aplicar las fórmulas."
  },
  {
    "q": "¿Qué propiedad debe cumplir una Función de Densidad de Probabilidad (FDP), $f(x)$, sobre su soporte?",
    "opts": [
      "Su integral total respecto a todo el espacio muestral debe ser igual a 1 ($\\int f(x) dx = 1$).",
      "Debe ser un valor constante.",
      "Solo puede tener valores positivos, pero no necesariamente integrable.",
      "Debe estar definida únicamente en números enteros."
    ],
    "c": [
      0
    ],
    "exp": "Al igual que cualquier función de probabilidad, la integral total del área bajo la curva debe normalizar a 1. Esto asegura que la suma (o integración) de todas las probabilidades posibles es 1."
  },
  {
    "q": "¿Qué tipo de variable aleatoria se modela con una distribución donde la probabilidad $P(X=x)$ siempre es cero?",
    "opts": [
      "Variable Aleatoria Continua (VAC)",
      "Variable Aleatoria Discreta (VAD)",
      "Variable determinística",
      "Una media móvil"
    ],
    "c": [
      0
    ],
    "exp": "Esto es característico de las VAC. Debido a que estas variables toman un valor continuo, la probabilidad de acertar *exactamente* un punto $x$ individual es infinitesimalmente pequeña, por lo que $P(X=x) = 0$. Se requiere usar límites o intervalos."
  },
  {
    "q": "¿Cuál es la relación matemática entre la FDP, $f(x)$, y la FDA, $F(x)$?",
    "opts": [
      "La FDA se obtiene integrando la FDP: $F(x) = \\int_{-\\infty}^{x} f(t) dt$.",
      "La FDP es el cociente de la FDA respecto al espacio muestral.",
      "Ambas funciones son completamente independientes y no están relacionadas.",
      "La FDA es simplemente la suma acumulada discreta."
    ],
    "c": [
      0
    ],
    "exp": "Esta relación define cómo se pasa de la densidad (la tasa instantánea de probabilidad, $f(x)$) a la acumulación total ($F(x)$). La integración de $f(t)$ hasta el punto $x$ nos da la probabilidad acumulada."
  },
  {
    "q": "¿Cuál es la principal desventaja de usar un histograma para representar una distribución?",
    "opts": [
      "Solo proporciona aproximaciones visuales y no valores exactos. ",
      "No muestra el soporte de la variable.",
      "Requiere que los datos sean perfectamente normales.",
      "Es imposible calcular medidas estadísticas a partir de él."
    ],
    "c": [
      0
    ],
    "exp": "Un histograma es excelente para la interpretación visual, pero al agrupar datos en 'bins' (intervalos), pierde información sobre la resolución exacta y puede llevar a interpretaciones erróneas si no se manejan los límites correctamente. Por eso, se prefiere usar las funciones matemáticas $f(x)$ o $F(x)$."
  },
  {
    "q": "¿Qué característica debe poseer siempre una FDA (Función de Distribución Acumulada)?",
    "opts": [
      "Debe ser monótona no decreciente y continua por la derecha.",
      "Debe ser decreciente.",
      "Debe ser discontinua en todos los puntos, excepto el límite superior.",
      "Solo puede existir para variables discretas."
    ],
    "c": [
      0
    ],
    "exp": "Una de las propiedades más importantes es que $F(x)$ nunca disminuye a medida que aumenta $x$ (monótona no decreciente). Además, debe ser continua por la derecha, lo cual maneja correctamente los saltos en el soporte discreto."
  },
  {
    "q": "¿En estadística, ¿qué significa cuando decimos que una distribución es 'teóricamente perfecta'??",
    "opts": [
      "Que se ajusta exactamente a un modelo matemático conocido (ej. Normal, Poisson).",
      "Que su media siempre será cero.",
      "Que solo puede calcularse mediante software especializado.",
      "Que no tiene outliers en sus datos."
    ],
    "c": [
      0
    ],
    "exp": "Modelar una distribución significa asumir que los datos siguen las reglas de un patrón matemático específico ($f(x)$ o $p(x)$) para poder hacer predicciones y cálculos teóricos, independientemente de cómo se comporten los datos reales."
  },
  {
    "q": "Conceptualmente, ¿cuál es la característica que define a una Variable Aleatoria Discreta (VAD)?",
    "opts": [
      "Solo puede tomar valores enteros positivos.",
      "Asigna probabilidades de forma continua en un intervalo.",
      "Su rango de posibles valores es finito o numerable.",
      "Requiere necesariamente el uso de funciones de densidad."
    ],
    "c": [
      0
    ],
    "exp": "Una VAD, por definición, toma valores contables (discretos), ya sean finitos (ej. lanzar 3 dados) o infinitos pero enumerables (ej. contar todos los números naturales)."
  },
  {
    "q": "¿Qué propiedades debe cumplir la función de distribución acumulada $F(x)$ de una variable aleatoria cualquiera?",
    "opts": [
      "Es monótona no decreciente, con $F(-\\infty)=0$ y $F(+\\infty)=1$",
      "Es continua y derivable en todo punto",
      "Toma valores entre $-\\infty$ y $+\\infty$",
      "Es necesariamente simétrica respecto a su media"
    ],
    "c": [
      0
    ],
    "exp": "Propiedades de la FDA: monótona no decreciente, límites $0$ y $1$ en los extremos, y $P(a \\le X \\le b) = F(b) - F(a)$. En variables discretas presenta saltos (masa en los átomos) y no es derivable; en continuas es continua. No tiene por qué ser simétrica."
  },
  {
    "q": "¿Cuál de los siguientes casos representa correctamente el cálculo de una probabilidad discreta utilizando la Función de Masa de Probabilidad (FMP), $p(x)$?",
    "opts": [
      "Suma $\\sum p(x_i)$ para todos los valores deseados.",
      "$\\int_{a}^{b} f(x) dx$",
      "$p(b) - p(a)$",
      "Evaluar la pendiente en el punto 'x'."
    ],
    "c": [
      0
    ],
    "exp": "Para variables discretas, las probabilidades se suman. Si queremos $P(X=2 \\text{ o } X=3)$, debemos calcular $p(2) + p(3)$."
  },
  {
    "q": "¿Cuál es la condición fundamental que debe cumplir una Función de Densidad de Probabilidad (FDP), $f(x)$?",
    "opts": [
      "$f(x)$ debe ser $\\ge 0$ para todo $x$.",
      "$f(x)$ debe integrar a 1 sobre su soporte ($\\int f(x) dx = 1$).",
      "La integral de $f(x)$ respecto a cualquier intervalo $[\\text{a, b}]$ debe ser siempre igual a la probabilidad.",
      "Debe existir un valor único para el esperado."
    ],
    "c": [
      0
    ],
    "exp": "Las condiciones básicas son: $f(x) \\ge 0$ (nunca negativa) y $\\int_{-\\infty}^{\\infty} f(x) dx = 1$."
  },
  {
    "q": "¿Qué característica distingue a una Variable Aleatoria Continua (VAC) de una Discreta (VAD)?",
    "opts": [
      "Los valores posibles en la VAC se encuentran en un intervalo continuo, no contable.",
      "La VAC siempre está definida por funciones cuadráticas.",
      "Para la VAC, el área bajo la curva es suficiente para calcular probabilidades.",
      "Las VAD requieren siempre una FMP."
    ],
    "c": [
      0
    ],
    "exp": "La clave es que las VAC toman infinitos valores dentro de un rango (ej. tiempo o peso), mientras que las VAD tienen valores contables."
  },
  {
    "q": "¿Cómo se calcula la probabilidad $P(a < X \\le b)$ para una Variable Aleatoria Continua?",
    "opts": [
      "Evaluando el límite superior de la FDA: $F(b) - F(a)$.",
      "Calculando la suma $\\sum_{x=a}^{b} f(x)$.",
      "Utilizando exclusivamente la función de masa.",
      "Mediante un cálculo trigonométrico específico."
    ],
    "c": [
      0
    ],
    "exp": "Ya sea mediante la FDA ($F(b) - F(a)$) o integrando la FDP ($\\int_{a}^{b} f(x) dx$)."
  },
  {
    "q": "¿Cuál es la diferencia entre la función de masa de probabilidad $p(x)$ y la función de densidad $f(x)$?",
    "opts": [
      "$p(x)$ se usa en variables discretas y da $P(X=x)$; $f(x)$ se usa en continuas y da la densidad, con $P(X=x)=0$",
      "Son equivalentes: ambas dan $P(X=x)$",
      "$p(x)$ es siempre un polinomio de grado $n$",
      "$f(x)$ solo existe para variables normales"
    ],
    "c": [
      0
    ],
    "exp": "En una VAD, $p(x) = P(X=x) \\ge 0$ y $\\sum_x p(x) = 1$. En una VAC, $f(x) \\ge 0$ e $\\int f(x)\\,dx = 1$, y además $P(X=x) = 0$ para todo $x$: la probabilidad se obtiene por intervalos, $P(a < X < b) = \\int_a^b f(x)\\,dx$."
  },
  {
    "q": "Para una Variable Aleatoria Continua (VAC), ¿cuál de las siguientes afirmaciones sobre la probabilidad $P(a < X < b)$ es correcta?",
    "opts": [
      "$F(b) - F(a)$",
      "$f(b) - f(a)$",
      "$b - a$",
      "$f(b) \\cdot f(a)$"
    ],
    "c": [
      0
    ],
    "exp": "Por definición, la probabilidad en un intervalo continuo se calcula mediante el área bajo la curva de densidad acumulada: $P(a < X < b) = F(b) - F(a)$."
  },
  {
    "q": "¿Cuál es el valor que representa la Función de Distribución Acumulada (FDA), $F(x)$, para cualquier punto $x$?",
    "opts": [
      "$P(X \\leq x)$",
      "La probabilidad de que $X$ sea exactamente igual a $x$.",
      "El área total bajo la función de densidad.",
      "La varianza de $X$."
    ],
    "c": [
      0
    ],
    "exp": "Por definición, $F(x) = P(X \\leq x)$. Es crucial recordar que esto difiere de $P(X=x)$, especialmente en el caso continuo."
  },
  {
    "q": "En el contexto de Variables Aleatorias, ¿qué función describe la probabilidad de que $X$ tome un valor específico $x$, y se utiliza para VAD?",
    "opts": [
      "Función de Masa de Probabilidad (FMP)",
      "Función de Densidad (FDP)",
      "Función de Distribución Acumulada (FDA)",
      "Esperanza Matemática"
    ],
    "c": [
      0
    ],
    "exp": "La FMP, $p(x) = P(X=x)$, es la herramienta definitoria para VADs. La FDP se usa solo para VAC."
  },
  {
    "q": "¿Qué representa el concepto de 'Soporte' (Support) en una distribución?",
    "opts": [
      "El rango o conjunto de valores donde $p(x)>0$ o $f(x)>0$.",
      "El valor máximo que puede tomar la variable aleatoria.",
      "La media aritmética de los posibles resultados.",
      "El límite superior del espacio muestral."
    ],
    "c": [
      0
    ],
    "exp": "El soporte define dónde 'vive' la distribución. Es el conjunto de todos los valores posibles que tienen probabilidad positiva."
  },
  {
    "q": "Conceptualmente, ¿qué define mejor una Variable Aleatoria Discreta (VAD)?",
    "opts": [
      "Solo puede tomar valores enteros positivos.",
      "Su espacio muestral es finito o numerable.",
      "La probabilidad de cada valor debe ser calculada mediante integración.",
      "Siempre su media será igual a la varianza."
    ],
    "c": [
      0
    ],
    "exp": "Una VAD toma un número contable de valores (finitos o infinitos, pero siempre separados). Esto se diferencia de las VAC que toman valores en intervalos continuos."
  },
  {
    "q": "¿Cómo se calcula la probabilidad $P(X=x)$ si X sigue una Variable Aleatoria Discreta con función de masa $p(x)$?",
    "opts": [
      "$P(X=x) = p(x)$",
      "$P(X=x) = \\int_{x-\\epsilon}^{x+\\epsilon} f(t) dt$",
      "$P(X=x) = 0.5 * f(x)$",
      "$P(X=x)$ no puede calcularse directamente."
    ],
    "c": [
      0
    ],
    "exp": "Para VAD, $p(x)$ es la función de masa y proporciona directamente la probabilidad exacta de un punto específico."
  },
  {
    "q": "¿Cuál es la característica fundamental que debe cumplir una Función de Densidad de Probabilidad (FDP) $f(x)$?",
    "opts": [
      "$f(x) \\ge 0$ para todo $x$.",
      "$El área total bajo la curva, $\\int_{-\\infty}^{\\infty} f(x) dx$, debe ser igual a 1.",
      "$La función $f(x)$ debe ser siempre continua.",
      "Solo aplica si el soporte de X es finito."
    ],
    "c": [
      0
    ],
    "exp": "Ambas condiciones son necesarias: $f(x)$ no puede ser negativa, y el área total bajo la curva (la integral) debe normalizar a 1."
  },
  {
    "q": "¿Qué representa la Función de Distribución Acumulada (FDA), denotada por $F(x)$?",
    "opts": [
      "$P(X \\le x)$",
      "$La probabilidad acumulada de que X tome un valor menor o igual a x.",
      "$El soporte del espacio muestral.",
      "El valor esperado de X."
    ],
    "c": [
      0
    ],
    "exp": "Por definición, la FDA $F(x) = P(X \\le x)$. Nos dice qué proporción de veces el evento ocurrirá hasta cierto punto."
  },
  {
    "q": "Desde el punto de vista conceptual, ¿cuál es la diferencia fundamental entre una Variable Aleatoria Discreta (VAD) y una Variable Aleatoria Continua (VAC)?",
    "opts": [
      "La VAD siempre tiene valores enteros negativos.",
      "La VAC se define mediante una Función de Masa de Probabilidad (FMP).",
      "La VAD toma un número contable (finito o infinito), mientras que la VAC toma valores en intervalos continuos.",
      "Solo las variables discretas pueden calcularse usando sumatorias."
    ],
    "c": [
      0
    ],
    "exp": "Conceptualmente, la diferencia clave radica en el tipo de valores que toman. La VAD cuenta resultados específicos (contables), mientras que la VAC puede tomar cualquier valor dentro de un rango continuo."
  },
  {
    "q": "¿Cuál es la propiedad esencial que debe cumplir una Función de Densidad de Probabilidad (FDP), $f(x)$?",
    "opts": [
      "$f(x) \\ge 0$ para todo $x$.",
      "$f(x)$ solo se evalúa en puntos enteros.",
      "La integral total sobre su soporte debe ser igual a 1: $\\int_{-\\infty}^{\\infty} f(x) dx = 1$.",
      "Su gráfica debe presentar discontinuidades en todos los intervalos."
    ],
    "c": [
      0
    ],
    "exp": "Para que una función sea válida como FDP, debe cumplir dos condiciones principales: no puede ser negativa ($f(x) \\ge 0$) y el área total bajo la curva (la integral) debe normalizar la probabilidad a 1."
  },
  {
    "q": "Si $X$ es una Variable Aleatoria Continua, ¿cómo se calcula la probabilidad de que $X$ tome un valor exacto, por ejemplo, $P(X = x_0)$?",
    "opts": [
      "Calculándola mediante el límite: $\\lim_{h \\to 0} P(x_0 \\le X \\le x_0+h)$.",
      "Usando la Función de Masa (FMP): $p(x_0)$.",
      "El resultado siempre será un número positivo mayor que cero.",
      "Utilizando únicamente la fórmula de momentos."
    ],
    "c": [
      0
    ],
    "exp": "En variables continuas, el área bajo la curva para un punto exacto es nulo. $P(X = x_0) = 0$. Por lo tanto, no se puede calcular con FMP ni mediante límites que produzcan un valor positivo."
  },
  {
    "q": "¿Cuál de los siguientes escenarios representa correctamente a una Variable Aleatoria Discreta (VAD)?",
    "opts": [
      "El número de llamadas recibidas en una hora.",
      "La altura de una persona en metros.",
      "El tiempo de espera hasta el próximo evento, medido en segundos.",
      "La temperatura ambiente medida con precisión infinita."
    ],
    "c": [
      0
    ],
    "exp": "Una VAD cuenta resultados contables. El número de llamadas (0, 1, 2, ...) es un conteo discreto. Las otras opciones son medidas continuas."
  },
  {
    "q": "Una VAD $X$ tiene FMP $p(1)=0.2$, $p(2)=0.3$, $p(3)=0.4$ y $p(4)=0.1$. ¿Cuánto vale $F(3)=P(X\\le 3)$?",
    "opts": [
      "$0.9$",
      "$0.4$",
      "$0.3$",
      "$1.0$"
    ],
    "c": [
      0
    ],
    "exp": "$F(3)=\\sum_{x\\le 3}p(x)=p(1)+p(2)+p(3)=0.2+0.3+0.4=0.9$."
  },
  {
    "q": "¿Qué tipo de variable aleatoria se utiliza para modelar el número de fallas que ocurren en un turno de 8 horas?",
    "opts": [
      "Variable Aleatoria Discreta (VAD)",
      "Variable Aleatoria Continua (VAC)",
      "Función de Masa de Probabilidad (FMP)",
      "Distribución Binomial"
    ],
    "c": [
      0
    ],
    "exp": "El número de fallas solo puede tomar valores enteros contables (0, 1, 2, ...), lo que define a una Variable Aleatoria Discreta (VAD)."
  },
  {
    "q": "¿Cuál es la condición fundamental que debe cumplir cualquier Función de Densidad de Probabilidad $f(x)$?",
    "opts": [
      "$f(x) \\geq 0$ para todo $x$",
      "$E[X]$ debe ser finito",
      "$\\int_{-\\infty}^{\\infty} f(x) dx = 1$",
      "La gráfica debe ser siempre concava"
    ],
    "c": [
      0
    ],
    "exp": "Una condición esencial de la FDP es que no puede tomar valores negativos y que el área total bajo la curva (la integral) debe sumar 1. Las otras opciones son propiedades, pero no las fundamentales para la definición."
  },
  {
    "q": "¿Cuál es la forma correcta de calcular $P(a < X \\leq b)$ usando la Función de Distribución Acumulada $F(x)$?",
    "opts": [
      "$F(b) - F(a)$",
      "$F(b) + F(a)$",
      "$1 - (F(a) + F(b))$",
      "Solo $F(b)$"
    ],
    "c": [
      0
    ],
    "exp": "Por definición, la probabilidad en un intervalo es el valor acumulado hasta el límite superior menos el valor acumulado hasta el límite inferior: $P(a < X \\leq b) = F(b) - F(a)$."
  },
  {
    "q": "¿Si la Función de Masa de Probabilidad (FMP) de una VAD es $p(x)$, ¿cómo se calcula la probabilidad de que la variable aleatoria sea menor o igual a un valor $k$?",
    "opts": [
      "$\\sum_{x \\leq k} p(x)$",
      "$p(k)$ multiplicado por el número de valores hasta $k$",
      "$f(k)$ integrado desde $-\\infty$ hasta $k$",
      "Es imposible calcularlo sin más información"
    ],
    "c": [
      0
    ],
    "exp": "Para una VAD, la acumulación de probabilidades se realiza mediante una suma discreta ($\\sum$), sumando todas las probabilidades de los valores que son menores o iguales a $k$. Esto es el cálculo directo de $F(k)$."
  },
  {
    "q": "¿Cuál es la principal diferencia entre una Variable Aleatoria Discreta (VAD) y una Continua (VAC)?",
    "opts": [
      "La VAD toma valores que son contables o finitos, mientras que la VAC puede tomar cualquier valor dentro de un intervalo.",
      "La función de masa siempre requiere suma, mientras que la densidad requiere integración.",
      "Las variables continuas tienen soporte infinito, las discretas no lo tienen.",
      "Solo se pueden calcular probabilidades para las Variables Aleatorias Discretas."
    ],
    "c": [
      0
    ],
    "exp": "El concepto fundamental es el dominio: VAD (Discreta) tiene valores contables (ej., número de caras en 3 lanzamientos); VAC (Continua) toma cualquier valor real dentro de un intervalo continuo. La segunda opción es parcialmente correcta, pero la primera define mejor el núcleo conceptual."
  },
  {
    "q": "Si una variable aleatoria $X$ tiene una Función de Densidad de Probabilidad (FDP) dada por $f(x) = 2x$ en $[0, 1]$ y $f(x)=0$ fuera de ese intervalo, ¿cuál es la probabilidad de que $X$ sea exactamente igual a $0.5$? (Opciones: A) 0.2; B) 0.0; C) 0.5; D) Imposible de calcular.",
    "opts": [
      "A",
      "B",
      "C",
      "D"
    ],
    "c": [
      0
    ],
    "exp": "Para cualquier VAC, la probabilidad de que tome un valor exacto es cero: $P(X = x) = 0$. Por lo tanto, $P(X = 0.5) = 0$."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre una Función de Distribución Acumulada (FDA), $F(x)$, es correcta?",
    "opts": [
      "La FDA debe ser una función monótona no decreciente.",
      "Si la distribución es continua, la FDA siempre será diferenciable en todo su dominio.",
      "El límite $\\lim_{x \\to -\\infty} F(x)$ siempre debe ser 0, y $\\lim_{x \\to +\\infty} F(x)$ debe ser 1.",
      "La derivada de $F(x)$, denotada $f(x)$, nos da la probabilidad instantánea en un punto específico."
    ],
    "c": [
      0
    ],
    "exp": "Propiedades clave: 1) Debe ser monótona no decreciente. 2) $\\lim_{x \\to -\\infty} F(x) = 0$ y $\\lim_{x \\to +\\infty} F(x) = 1$. La opción B es falsa porque la discontinuidad puede ocurrir en puntos discretos, aunque su derivada pueda existir en otros lugares."
  },
  {
    "q": "Según la definición estadística, ¿qué tipo de variable aleatoria (X) se caracteriza por tomar valores contables o finitos?",
    "opts": [
      "Variable Aleatoria Continua (VAC)",
      "Variable Aleatoria Discreta (VAD)",
      "Variable Determinista",
      "Función Acumulada"
    ],
    "c": [
      0
    ],
    "exp": "Una VAD toma un número finito o numerable de valores (ej: conteo de caras). La VAC, por el contrario, puede tomar cualquier valor en un intervalo continuo."
  },
  {
    "q": "¿Cuál es la característica fundamental que define a una Función de Distribución Acumulada (FDA), $F(x)$?",
    "opts": [
      "Es siempre decreciente.",
      "Siempre debe ser continua.",
      "Es monótona no decreciente y continua por la derecha.",
      "Solo se usa para variables discretas."
    ],
    "c": [
      0
    ],
    "exp": "La FDA, $F(x) = P(X \\le x)$, debe ser no decreciente (monotónica) porque al avanzar en $x$, la probabilidad acumulada nunca disminuye. Además, es continua por la derecha."
  },
  {
    "q": "Si una variable aleatoria X sigue una distribución discreta definida por $p(x)$, ¿cómo se calcula la probabilidad de que X tome un valor específico $c$?",
    "opts": [
      "Integrando $\\int p(x) dx$",
      "$P(X=c) = p(c)$",
      "Evaluando $F(c+1) - F(c)$",
      "Usando el límite superior e inferior"
    ],
    "c": [
      0
    ],
    "exp": "Para variables discretas, la probabilidad de un punto individual se calcula directamente usando la Función de Masa de Probabilidad (FMP): $P(X=c) = p(c)$."
  },
  {
    "q": "¿Qué tipo de variable aleatoria se utiliza para modelar el número de llamadas que recibe una central telefónica en un día?",
    "opts": [
      "Variable Aleatoria Discreta (VAD)",
      "Variable Aleatoria Continua (VAC)",
      "Función de Masa de Probabilidad (FMP)",
      "Momento Central"
    ],
    "c": [
      0
    ],
    "exp": "El conteo de llamadas solo puede tomar valores enteros no negativos (0, 1, 2, ...), lo que la clasifica como una Variable Aleatoria Discreta (VAD)."
  },
  {
    "q": "¿Cuál es la probabilidad $P(X \\le 5)$ si la FMP de X está dada por $p(x) = 0.1$ para $x=2, 3, 4, 5$ y 0 en otro caso?",
    "opts": [
      "0.3",
      "0.1",
      "0.4",
      "0"
    ],
    "c": [
      0
    ],
    "exp": "La probabilidad es la suma de las densidades hasta ese punto: $P(X \\le 5) = p(2) + p(3) + p(4) + p(5) = 0.1 + 0.1 + 0.1 + 0.1 = 0.4$. (Nota: El ejemplo dado en la pregunta debe ser interpretado como que $p(x)=0.1$ para los cuatro valores, lo que resulta en 0.4)."
  },
  {
    "q": "Un estudiante lanza un dado justo de seis caras. ¿Cuál es la naturaleza de la variable aleatoria X que representa el resultado obtenido?",
    "opts": [
      "Es una Variable Aleatoria Discreta (VAD) porque toma valores contables.",
      "Es una Variable Aleatoria Continua (VAC) por definición.",
      "Es determinista, ya que el espacio muestral es fijo.",
      "No puede ser clasificada sin conocer la función de probabilidad."
    ],
    "c": [
      0
    ],
    "exp": "El resultado al lanzar un dado $\\{1, 2, 3, 4, 5, 6\\}$ es finito y contable. Por lo tanto, X es una Variable Aleatoria Discreta (VAD)."
  },
  {
    "q": "¿Cuál de las siguientes variables aleatorias es inherentemente discreta?",
    "opts": [
      "Tiempo de vida de una bombilla (horas)",
      "El voltaje medido en un circuito (voltios)",
      "El número de llamadas recibidas en una hora",
      "La temperatura corporal a lo largo del día ($^\\circ$C)"
    ],
    "c": [
      0
    ],
    "exp": "Una variable aleatoria discreta (VAD) toma valores contables. El 'número de llamadas' es un conteo entero, mientras que el tiempo o voltaje son continuos."
  },
  {
    "q": "¿Cuál debe cumplirse para que una función $F(x)$ sea considerada la Función de Distribución Acumulada (FDA)?",
    "opts": [
      "Debe ser monótona no decreciente y continua por la derecha.",
      "Su límite $\\lim_{x\\to -\\infty} F(x) = 0$.",
      "Debe satisfacer $F(-\\infty) = 0$ y $F(\\infty) = 1$.",
      "Ser derivable en todo su soporte."
    ],
    "c": [
      0
    ],
    "exp": "La FDA, por definición, debe ser monótona no decreciente (nunca baja) y continua por la derecha. Además, sus límites deben ser 0 e 1."
  },
  {
    "q": "¿Cuáles de las siguientes afirmaciones son correctas respecto a la clasificación entre VAD y VAC?",
    "opts": [
      "Las variables continuas siempre usan la FDP",
      "La FDA es aplicable tanto a VAD como a VAC",
      "Una variable discreta debe ser modelada con $p(x)$",
      "El soporte define el rango posible de valores de una variable"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las variables continuas se describen por la FDP (f(x)), mientras que las discretas usan la FMP (p(x)). Sin embargo, la FDA es un concepto universal aplicable a ambos tipos de variables. El soporte define el conjunto de valores donde existe probabilidad positiva."
  },
  {
    "q": "¿Qué propiedades deben cumplir tanto una FMP $p(x)$ como una FDP $f(x)$?",
    "opts": [
      "Ambas funciones deben ser no negativas en todo su dominio",
      "La suma/integral total debe igualar 1 (Normalización)",
      "El soporte define el rango de valores posibles",
      "Deben tener la misma continuidad"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Tanto $p(x)$ como $f(x)$ deben ser no negativas. Además, por definición, la suma total de probabilidades (suma para VAD o integral para VAC) debe normalizarse a 1."
  },
  {
    "q": "Se propone $f(x)=kx$ en $[0,2]$ (y $0$ fuera) como FDP de una VAC. ¿Cuáles afirmaciones son correctas?",
    "opts": [
      "$\\int_0^2 kx\\,dx=1 \\Rightarrow k=\\tfrac12$",
      "$f(x)\\ge 0$ en $[0,2]$ requiere $k\\ge 0$",
      "$k$ puede ser negativo si el área total es 1",
      "$f(x)$ debe cumplir $f(x)\\le 1$"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La integral normaliza: $\\int_0^2 kx\\,dx=2k=1 \\Rightarrow k=1/2$; además la FDP exige no negatividad, $k\\ge 0$. No está acotada por 1."
  },
  {
    "q": "¿Cuáles dos métodos deben utilizarse para calcular probabilidades en variables aleatorias continuas?",
    "opts": [
      "Integración directa mediante $f(x)$",
      "Usando el concepto de área bajo la curva (Geometría)",
      "Calculando diferencias entre valores discretos consecutivos",
      "Evaluando límites de Riemann"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para VAC, las probabilidades se calculan siempre a través del área bajo la FDP. Esto significa usar la integración $\\int_{a}^{b} f(x) dx$. Gráficamente, esto es el cálculo del área delimitada por $f(x)$ entre $a$ y $b$."
  },
  {
    "q": "¿Qué implicaciones tiene que una variable aleatoria sea considerada 'dispersa' (es decir, no solo take valores enteros)?",
    "opts": [
      "Requiere obligatoriamente el uso de la FDP",
      "Permite usar métodos gráficos como histogramas para estimar probabilidades",
      "La media puede ser un número irracional o decimal",
      "Su cálculo de varianza es más complejo que en VAD"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si la variable es continua (dispersa), debe usarse la FDP e integración. Además, aunque el cálculo formal sea diferente, podemos usar histogramas y métodos gráficos para obtener una estimación visual de las probabilidades en este tipo de variables."
  },
  {
    "q": "¿Qué afirmaciones son verdaderas sobre las propiedades necesarias para que una función $f(x)$ sea considerada una FDP válida?",
    "opts": [
      "$f(x) \\ge 0$ en todo su dominio.",
      "$\\int f(x) dx = 1$.",
      "$f(x)$ debe ser diferenciable en todos los puntos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las propiedades fundamentales son la no negatividad y que el área total bajo la curva sea 1. La diferenciabilidad es deseable para cálculos avanzados, pero no es una condición *necesaria* de validez."
  },
  {
    "q": "¿Cómo se puede interpretar correctamente un histograma en el contexto de Variables Aleatorias Continuas (VAC)?",
    "opts": [
      "El área de cada barra representa la probabilidad $P(a \\le X < b)$.",
      "La altura del pico debe indicar la moda o valor más probable.",
      "La suma total de las alturas individuales es siempre igual a 1.",
      "Las barras representan los valores exactos que se obtuvieron."
    ],
    "c": [
      0,
      1
    ],
    "exp": "En VAC, el área bajo la curva (o barra) representa la probabilidad acumulada en ese intervalo. La sumatoria de alturas no tiene sentido; solo importa el área total."
  },
  {
    "q": "¿Cuál es la relación correcta entre $P(a < X \\le b)$ y la FDA $F(x)$?",
    "opts": [
      "$P(a < X \\le b) = F(b) - F(a)$.",
      "$P(a < X \\le b)$ se calcula integrando $f(x)$ en el intervalo $[a, b]$.",
      "$P(a < X \\le b) = F(b) + F(a)$.",
      "La FDA solo funciona para variables discretas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Ambas fórmulas son correctas: la diferencia de las acumuladas ($F(b) - F(a)$) y la integral bajo la curva ($\\int_a^b f(x) dx$) representan lo mismo. Esto reafirma que el área es clave."
  },
  {
    "q": "¿Qué característica define a una Variable Aleatoria Discreta (VAD)?",
    "opts": [
      "Solo puede tomar un número finito de valores.",
      "Toma valores que provienen de un conjunto contable, como números enteros o combinaciones limitadas.",
      "Está definida únicamente por una Función de Masa de Probabilidad (FMP).",
      "Su soporte debe ser siempre el intervalo $[0, 1]$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una VAD toma valores en conjuntos contables (finitos o numerables). La primera opción es un caso límite de la segunda. La FMP ($p(x)$) es la herramienta principal para describir su distribución."
  },
  {
    "q": "¿Cuál es la correcta interpretación del cálculo de probabilidad usando la Función de Distribución Acumulada (FDA), $F(x)$?",
    "opts": [
      "$P(X \\leq x) = F(x)$, por definición, la FDA proporciona la probabilidad acumulada hasta el punto $x$.",
      "Para un intervalo $(a, b]$, se calcula correctamente como $P(a < X \\leq b) = F(b) - F(a)$.",
      "La FDA siempre debe ser una función continua en cualquier punto donde no haya discontinuidades de salto.",
      "$F(x)$ es la inversa directa de la Función de Densidad."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Por definición, $F(x) = P(X \\leq x)$. La propiedad fundamental para calcular probabilidades en un intervalo $(a, b]$ es justamente $P(a < X \\leq b) = F(b) - F(a)$. Aunque la FDA puede tener saltos (si hay VAD), debe ser monótona no decreciente y continua por la derecha."
  },
  {
    "q": "Si tenemos una VAD $X$ con los valores $\\{1, 2, 3\\}$ y $P(X=x) = \\frac{1}{6}x$, ¿qué afirmaciones son verdaderas?",
    "opts": [
      "La suma de las probabilidades en su soporte es $\\sum p(x) = \\frac{1}{6}(1+2+3) = 1$.",
      "El valor esperado (media) se calcula mediante la fórmula $E[X] = \\sum x \\cdot p(x)$.",
      "La función de masa $p(x)$ es el complemento directo de la FDA.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Primero se verifica que $\\sum P(X=x) = 1/6 + 2/6 + 3/6 = 6/6 = 1$. El cálculo de $E[X]$ es siempre la suma ponderada. La relación entre $p(x)$ y $F(x)$ es que $p(x) = F(x) - F(x-1)$, no es un complemento directo."
  },
  {
    "q": "Sea $X$ una VAC con FDA $F(x)=x^2$ en $[0,1]$ (con $F(x)=0$ si $x<0$ y $F(x)=1$ si $x>1$). ¿Cuáles afirmaciones son correctas?",
    "opts": [
      "$F$ es monótona no decreciente en $[0,1]$",
      "$P(0.25 < X \\le 0.75)=0.5625-0.0625=0.5$",
      "$F$ es decreciente en $[0,1]$",
      "$P(0.25 < X \\le 0.75)=0.0625$"
    ],
    "c": [
      0,
      1
    ],
    "exp": "$F(x)=x^2$ crece en $[0,1]$, y $P(0.25<X\\le 0.75)=F(0.75)-F(0.25)=0.5625-0.0625=0.5$."
  },
  {
    "q": "¿Cuál es el cálculo correcto para la probabilidad de que $X$ caiga entre 2 y 5, utilizando una FDA, $F(x)$?",
    "opts": [
      "$P(2 \\le X \\le 5) = F(5) - F(2)$.",
      "$P(2 < X < 5) = F(5) - F(2)$.",
      "$P(2 \\le X \\le 5) = F(5)$.",
      "$P(2 < X < 5) = F(2)$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Dado que la FDA es continua por la derecha, $P(a \\le X \\le b) = P(a < X \\le b) = P(a \\le X < b) = P(a < X < b)$, lo cual se simplifica a $F(b) - F(a)$. Ambos formatos en las opciones 0 y 1 son estadísticamente equivalentes para la mayoría de los contextos académicos."
  },
  {
    "q": "¿Cómo se calcula la probabilidad de que una Variable Aleatoria Discreta (VAD) caiga entre los valores 3 y 6, incluyendo ambos?",
    "opts": [
      "$\\sum_{x=3}^{6} p(x)$.",
      "$p(3) + p(4) + p(5) + p(6)$.",
      "$F(6) - F(2)$.",
      "Integrar $p(x)$ de 3 a 6."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para VAD, siempre debemos sumar las probabilidades individuales (suma de masas). La notación $\\sum_{x=a}^{b} p(x)$ es el formalismo matemático para la suma directa $p(3) + p(4) + p(5) + p(6)$. Los métodos de integral o resta son incorrectos en este caso."
  },
  {
    "q": "¿Cuáles de los siguientes ejemplos corresponden a Variables Aleatorias Discretas (VAD)?",
    "opts": [
      "Número de defectos en una pieza manufacturada",
      "Número de clientes que llegan a una caja en una hora",
      "Tiempo (en minutos) que tarda en atenderse un cliente",
      "Peso (en kg) de un recién nacido"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los conteos (defectos, clientes) toman valores enteros numerables, luego son VAD; tiempos y pesos son VAC."
  },
  {
    "q": "Para que una FMP $p(x)$ de una VAD sea válida, ¿cuáles condiciones deben cumplirse?",
    "opts": [
      "$p(x)\\ge 0$ para todo $x$",
      "$\\sum_{x\\in\\text{Supp}(X)} p(x)=1$",
      "$p(x)$ puede ser negativo en algunos puntos si se compensa con positivos",
      "$\\sum_{x\\in\\text{Supp}(X)} p(x)$ puede ser menor que 1"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una FMP válida exige no negatividad y que la suma de probabilidades sobre el soporte sea exactamente 1."
  },
  {
    "q": "¿Cuál es el método correcto para calcular la probabilidad $P(10 < X \\le 20)$ cuando se tiene una FDP, $f(x)$?",
    "opts": [
      "Calcular la integral definida: $\\int_{10}^{20} f(x) dx$.",
      "Usar directamente el límite superior en la FDA. ",
      "Sumar los valores de densidad entre 10 y 20.",
      "Aplicar la regla de tres simple."
    ],
    "c": [
      0,
      1
    ],
    "exp": "En VAC, las probabilidades se encuentran calculando el área bajo la curva (integral definida). Tanto $\\int_{a}^{b} f(x) dx$ como $F(b) - F(a)$ representan este cálculo exacto y son equivalentes."
  },
  {
    "q": "Sea $X$ una VAD con FMP $p(x)$. ¿Cuáles afirmaciones sobre su soporte $\\text{Supp}(X)$ son correctas?",
    "opts": [
      "$\\text{Supp}(X)=\\{x: p(x)>0\\}$",
      "$\\text{Supp}(X)$ puede ser finito o infinito numerable",
      "$\\text{Supp}(X)$ es siempre un intervalo cerrado $[a,b]$",
      "$\\text{Supp}(X)$ incluye todos los $x$ con $p(x)=0$"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El soporte de una VAD es el conjunto (numerable) donde $p(x)>0$; no es necesariamente un intervalo."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre la FDP $f(x)$ es correcta?",
    "opts": [
      "El área bajo la curva representa siempre una probabilidad.",
      "Si $f(x) = c \\cdot e^{-kx}$, se trata de una distribución exponencial.",
      "La función debe ser creciente para representar una VAC normal.",
      "Su valor máximo determina el pico de probabilidad."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El área bajo la curva es el concepto central de $f(x)$, representando $P$. La segunda opción identifica correctamente un caso conocido (distribución exponencial)."
  },
  {
    "q": "¿Qué propiedades definen a una variable aleatoria?",
    "opts": [
      "La media ($\\mu$) representa el valor esperado teórico de la variable.",
      "La varianza ($\\sigma^2$) mide la dispersión promedio de los resultados respecto a $\\mu$.",
      "El coeficiente de variación es útil para comparar la dispersión relativa entre distribuciones diferentes.",
      "Si la distribución es normal, su forma siempre debe ser simétrica."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La media y varianza son parámetros fundamentales. El CV permite una comparación estandarizada de riesgos (dispersión relativa). La normalidad implica simetría, pero no viceversa."
  },
  {
    "q": "¿Cuáles de las siguientes funciones pueden ser una FDA $F(x)=P(X\\le x)$ válida?",
    "opts": [
      "Una función monótona no decreciente, continua por la derecha, con $\\lim_{x\\to-\\infty}F=0$ y $\\lim_{x\\to+\\infty}F=1$",
      "Una función escalonada con saltos en $x=1,2,3$ que crece de 0 a 1",
      "Una función estrictamente decreciente con $\\lim_{x\\to-\\infty}=1$ y $\\lim_{x\\to+\\infty}=0$",
      "Una función que toma valores de $-0.2$ para $x$ muy negativos"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Toda FDA es no decreciente, continua por la derecha, acotada en $[0,1]$, con los límites indicados; una VAD produce FDA escalonada."
  },
  {
    "q": "Sea $X$ una VAC con FDP $f(x)$ y FDA $F(x)$. ¿Cuáles relaciones son correctas?",
    "opts": [
      "$F(x)=\\int_{-\\infty}^{x} f(t)\\,dt$",
      "$f(x)=F'(x)$ en los puntos donde $F$ es derivable",
      "$F(x)=\\int_{x}^{+\\infty} f(t)\\,dt$",
      "$f(x)=\\int_{-\\infty}^{x} F(t)\\,dt$"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La FDA es la integral acumulada de la FDP, y donde $F$ es derivable, $F'=f$. Las otras relaciones invierten los papeles."
  },
  {
    "q": "Sea $X$ una VAC con FDP $f(x)=4x^3$ en $[0,1]$ y $f(x)=0$ fuera. ¿Cuáles afirmaciones son verdaderas?",
    "opts": [
      "$\\int_0^1 4x^3\\,dx=1$, luego es una FDP válida",
      "$P(X=0.3)=0$",
      "$P(X=0.3)=4(0.3)^3=0.108$",
      "$\\int_0^1 4x^3\\,dx=4$"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La integral vale $x^4\\big|_0^1=1$, y para una VAC $P(X=a)=0$ para cualquier punto $a$; el valor $f(0.3)$ es una densidad, no una probabilidad puntual."
  },
  {
    "q": "¿Qué se requiere para que una Variable Aleatoria sea bien definida?",
    "opts": [
      "Que su función de distribución acumulada $F(x)$ esté completamente especificada.",
      "Que la suma o integral de sus probabilidades/densidades resulte en 1.",
      "Que el valor esperado exista ($\\mu < \\infty$).",
      "Que su soporte sea un intervalo cerrado."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La definición más completa requiere conocer $F(x)$, asegurar que $\\sum p(x_i)=1$ (o $\\int f(x) dx=1$) y garantizar la existencia de los momentos principales."
  },
  {
    "q": "¿Cuál es el rango adecuado para interpretar resultados de VAD vs VAC?",
    "opts": [
      "Los problemas discretos se resuelven con conteos enteros.",
      "Si una variable aleatoria toma valores intermedios (ej. temperatura), es casi seguro que es continua.",
      "Los problemas continuos requieren métodos de integración continua.",
      "La discreción solo afecta al tipo de función usada, no a la naturaleza del resultado."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Esta pregunta evalúa la capacidad de identificar el tipo de variable: conteos $\\rightarrow$ Discreta; rangos $\\rightarrow$ Continua. La última opción es un distractor conceptual que debe evitarse."
  },
  {
    "q": "¿Cuáles son las propiedades fundamentales de una Función de Distribución Acumulada (FDA), $F(x)$?",
    "opts": [
      "Es una función monótona no decreciente.",
      "Está definida como $F(x) = P(X \\leq x)$.",
      "Siempre debe ser continua para cualquier tipo de variable aleatoria.",
      "Su límite cuando $x \\to -\\infty$ es 0."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La FDA siempre es monótona no decreciente y su definición principal es $F(x) = P(X \\leq x)$. No siempre debe ser continua (puede tener saltos en el caso VAD)."
  },
  {
    "q": "¿Cuáles son las características que diferencian a una VAC de una VAD?",
    "opts": [
      "La VAC se calcula con integrales.",
      "En la VAC, $P(X=x)$ es siempre cero.",
      "La VAD solo utiliza sumatoria ($\\sum$).",
      "Ambas usan variables discretas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las VAC requieren integración (calculo continuo). La propiedad clave de VAC es que la probabilidad de un punto exacto es cero ($P(X=x)=0$), lo cual no sucede con VADs."
  },
  {
    "q": "Para una VAC con FDA $F(x)$, ¿cuáles afirmaciones sobre $P(a < X < b)$ (con $a<b$) son correctas?",
    "opts": [
      "$P(a < X < b) = F(b)-F(a)$",
      "$P(a < X < b) = P(a\\le X\\le b)$ en una VAC",
      "$P(a < X < b) = F(a)-F(b)$",
      "$P(a < X < b) = F(a)+F(b)$"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Como $P(X=a)=P(X=b)=0$ en una VAC, las inclusiones de extremos no cambian la probabilidad: $P(a<X<b)=F(b)-F(a)=P(a\\le X\\le b)$."
  },
  {
    "q": "¿Cuál es el método apropiado para calcular probabilidades si tenemos una FDP $f(x)$?",
    "opts": [
      "Integración (Área bajo la curva).",
      "Usando la Función de Distribución Acumulada.",
      "Sumatoria ($\\sum$).",
      "Tomar el valor máximo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para VAC, se debe usar integración $\\int f(x) dx$. También podemos usar la FDA $F(b)-F(a)$, que es la acumulación. La sumatoria solo aplica a VADs."
  },
  {
    "q": "¿Qué deben cumplirse para que una Función de Masa de Probabilidad (FMP), $p(x)$, sea válida?",
    "opts": [
      "$p(x) \\geq 0$ para todos los $x$.",
      "$\\sum p(x) = 1$.",
      "$p(x)$ debe ser decreciente.",
      "$p(x)$ debe tener un soporte infinito."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las dos condiciones fundamentales de una FMP son que todas las probabilidades deben ser no negativas y que la suma total sobre todo el espacio muestral debe ser igual a 1."
  },
  {
    "q": "¿Cuáles de los siguientes conceptos definen correctamente a una Variable Aleatoria?",
    "opts": [
      "Es un número real que asigna probabilidad a eventos.",
      "Es una función del espacio muestral $\\Omega \\to R$.",
      "Solo puede tomar valores discretos.",
      "Su valor siempre es el promedio esperado."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una variable aleatoria *es* la función. Su resultado (el número real) es lo que tiene probabilidad asignada. No está limitada a ser solo discreta."
  },
  {
    "q": "¿Cuáles son las interpretaciones correctas de $P(a < X < b)$ en términos de FDA, $F(x)$?",
    "opts": [
      "$F(b) - F(a)$.",
      "$F(b)$ menos $F(a)$.",
      "$F(b-1) - F(a-1)$.",
      "Solo es aplicable si la variable es discreta."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La definición matemática de probabilidad en un intervalo continuo utilizando FDA es precisamente $P(a < X < b) = F(b) - F(a)$."
  },
  {
    "q": "¿Cuáles son las implicaciones de que la variable aleatoria $X$ sea continua?",
    "opts": [
      "La probabilidad de obtener un valor exacto es cero.",
      "Se debe utilizar el cálculo integral para hallar probabilidades.",
      "No se puede usar la función de masa (FMP).",
      "Necesariamente tiene una distribución normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si X es continua, $P(X=x)=0$ y por lo tanto debemos integrar. El hecho de ser continua niega el uso de FMP."
  },
  {
    "q": "¿Cuáles enunciados sobre la FDA $F(x)$ son siempre ciertos, sea la variable discreta o continua?",
    "opts": [
      "$0\\le F(x)\\le 1$ para todo $x\\in\\mathbb{R}$",
      "$F(x)$ es continua por la derecha",
      "$F(x)$ es siempre una función continua (sin saltos)",
      "$F(x)$ puede tomar valores mayores que 1"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Toda FDA está acotada en $[0,1]$ y es continua por la derecha; en VAD presenta saltos, por lo que no es siempre continua."
  },
  {
    "q": "Sea $X$ una VAD con FMP $p(x)$. ¿Cuáles expresiones son correctas para $P(X\\le k)$?",
    "opts": [
      "$P(X\\le k)=\\sum_{x\\le k} p(x)$",
      "$P(X\\le k)=F(k)$",
      "$P(X\\le k)=\\int_{-\\infty}^{k} p(x)\\,dx$",
      "$P(X\\le k)=1-F(k)$"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para una VAD la probabilidad acumulada es la suma de $p(x)$ sobre $x\\le k$, que coincide con $F(k)$; no se usa integral."
  },
  {
    "q": "¿Cuál es la relación entre las tres funciones de probabilidad?",
    "opts": [
      "$F(x)$ y $f(x)$: $f(x) = F'(x)$ (derivada).",
      "$p(x)$ y $F(x)$: $p(x) = F(x) - F(x-\\epsilon)$.",
      "La integral de $f(x)$ debe dar la forma escalonada de $F(x)$.",
      "Se puede reconstruir cualquier función a partir de las otras dos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para VAC, $F(x)$ es la integral acumulativa de $f(x)$ ($F'(x)=f(x)$). Para VAD, $p(x)$ se relaciona con el salto en la FDA (la diferencia entre acumulaciones)."
  },
  {
    "q": "¿Qué implica que una Variable Aleatoria sea 'estocástica'?",
    "opts": [
      "Su valor no está determinado por certeza, sino por probabilidad.",
      "Sus valores provienen de un proceso aleatorio gobernado por leyes estadísticas.",
      "Requiere medir su comportamiento a lo largo del tiempo (Proceso estocástico).",
      "Solo puede modelarse usando distribuciones normales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Conceptualmente, la palabra 'aleatoria' implica que el resultado es incierto. Ser 'estocástica' refuerza esta idea de dependencia en procesos aleatorios."
  },
  {
    "q": "¿Qué propiedades deben cumplir los valores calculados a partir de la Función de Distribución Acumulada (FDA), $F(x)$?",
    "opts": [
      "Es una función monótona no decreciente.",
      "Su límite cuando $x \\to -\\infty$ debe ser 0 y su límite cuando $x \\to \\infty$ debe ser 1.",
      "Siempre es continua, independientemente del tipo de variable.",
      "Si la variable es discreta, $F(x)$ será una función escalonada."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La FDA siempre es no decreciente (monótona). Además, representa probabilidades acumuladas, por lo que el inicio ($-\\infty$) debe ser 0 y el final ($\\infty$) debe ser 1. El hecho de que sea escalonada solo ocurre en VAD."
  },
  {
    "q": "¿Cuáles son las formas correctas de calcular la probabilidad $P(a < X \\le b)$ utilizando cualquier función asociada a la variable aleatoria?",
    "opts": [
      "Integrando (o sumando) la función desde 'a' hasta 'b': $\\int_a^b f(x) dx$ o $\\sum_{x=a+1}^{b} p(x)$.",
      "Simplemente evaluando $F(b) - F(a)$ en cualquier caso.",
      "Calculándola por continuidad: $F(b) - F(a^-)$.",
      "Utilizando la fórmula de momentos para intervales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La probabilidad entre dos puntos se calcula siempre usando el concepto de acumulación. Usar $P(X \\le b) - P(X < a)$ es equivalente a calcular $\\int_a^b f(x) dx$ o sumando desde $a+1$ hasta $b$, dependiendo si la variable es continua o discreta."
  },
  {
    "q": "¿Cuáles afirmaciones distinguen correctamente una VAD de una VAC?",
    "opts": [
      "En una VAD existe una FMP $p(x)$ con probabilidad positiva en ciertos puntos; en una VAC no",
      "En una VAC los valores posibles forman un intervalo continuo; en una VAD son numerables",
      "La FDA solo existe para VAD",
      "En una VAD $P(X=a)$ siempre es 0"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La VAD tiene FMP con probabilidades puntuales positivas; la VAC toma valores en intervalos continuos. La FDA existe en ambos casos, y es la VAC donde $P(X=a)=0$."
  },
  {
    "q": "¿Cuáles son las características cruciales que definen el 'soporte' de una distribución?",
    "opts": [
      "Es el conjunto de valores donde la función p(x) o f(x) es positiva (mayor a cero).",
      "Define los límites físico y matemático bajo los cuales opera la variable aleatoria.",
      "Indica dónde se concentra la máxima probabilidad o densidad.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El soporte es el dominio donde la distribución tiene significado. Es fundamental saber qué valores puede tomar $X$, ya que fuera de ese rango, la función p(x) o f(x) debe ser cero."
  },
  {
    "q": "¿Qué métodos son apropiados para aproximar la forma de una función desconocida a partir de datos observacionales?",
    "opts": [
      "El cálculo de Máxima Verosimilitud (ML).",
      "Realizando un histograma o gráfico de densidad empírica.",
      "La utilización del Método de Momentos (MM).",
      "Asumiendo que sigue una distribución normal sin pruebas formales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los métodos ML y MM son herramientas teóricas para estimar parámetros. Sin embargo, la forma más básica e intuitiva para visualizar la distribución a partir de datos es mediante un histograma o gráfico de densidad empírica."
  },
  {
    "q": "¿Por qué se afirma que una variable aleatoria describe un fenómeno estocástico?",
    "opts": [
      "Porque su valor no está predeterminado: se modela mediante una ley de probabilidad",
      "Porque siempre sigue una distribución normal",
      "Porque no puede medirse más de una vez",
      "Porque su media es siempre cero"
    ],
    "c": [
      0
    ],
    "exp": "El término «estocástico» indica que el valor no está fijado de antemano y se describe con una distribución de probabilidad. No impone una ley concreta (puede ser binomial, Poisson, uniforme...) ni que la media sea cero."
  },
  {
    "q": "¿Al calcular la probabilidad en un contexto real, qué factor requiere más cuidado: el soporte de la variable o la elección entre f(x) y p(x)?",
    "opts": [
      "La selección correcta del tipo de función (FMP vs FDP).",
      "Asegurar que los límites de integración/sumatoria ($\\int_a^b$ o $\\sum$) cubran el rango físico correcto (soporte).",
      "Calcular correctamente la media, ya que es el valor más reportado.",
      "Verificar si la función resultante cumple $\\int f(x) dx = 1$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Ambos son cruciales. Elegir si es FMP o FDP depende de si la variable cuenta o mide (Concepto). Pero asegurar que los límites ($\\int_a^b$ o $\\sum$) cubran el soporte correcto garantiza que se está calculando sobre el espacio muestral válido y no una porción errónea."
  },
  {
    "q": "¿Cómo afecta la discreción de una variable aleatoria a su Función de Distribución Acumulada (FDA)?",
    "opts": [
      "La FDA tendrá un comportamiento escalonado, saltando en cada valor posible.",
      "En los puntos de salto, la probabilidad se concentra mediante el valor $p(x)$.",
      "Su derivada $F'(x)$ solo existirá en intervalos donde no hay valores posibles.",
      "No tiene relación; la discreción afecta únicamente a la FMP."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una VAD genera una FDA que es *escalonada*. El 'salto' vertical en un punto $x_k$ corresponde exactamente al valor de probabilidad $p(x_k)$ que se concentra en ese punto. Esto es la firma matemática clave."
  },
  {
    "q": "Sea $X$ una variable aleatoria con FDA $F(x)$. Para $a<b$, ¿cuáles expresiones son válidas?",
    "opts": [
      "$P(a < X \\le b) = F(b)-F(a)$",
      "$P(X \\le b) = F(b)$",
      "$P(a \\le X \\le b) = F(b)+F(a)$",
      "$P(X > b) = F(b)$"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Por definición $F(b)=P(X\\le b)$ y $P(a<X\\le b)=F(b)-F(a)$. Las demás expresiones mezclan signos incorrectamente."
  },
  {
    "q": "¿Cuáles son los métodos correctos para calcular $P(a < X < b)$?",
    "opts": [
      "Usando el Teorema del Límite de la Integral (para VAC): $\\int_a^b f(x) dx$.",
      "Restando las probabilidades acumuladas: $F(b) - F(a)$.",
      "Multiplicando la probabilidad en los límites, como $P(X=a) \\cdot P(X=b)$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para cualquier distribución (especialmente VAC), el área bajo la curva o la diferencia entre las acumuladas nos da la probabilidad de un intervalo. La opción C es incorrecta porque multiplicar probabilidades no calcula $P(a < X < b)$; se usa la resta de las FDA: $F(b) - F(a)$."
  },
  {
    "q": "¿Cuáles son las propiedades correctas que debe cumplir una Función de Densidad de Probabilidad (FDP), $f(x)$?",
    "opts": [
      "Debe ser no negativa ($f(x) \\ge 0$).",
      "La integral total sobre todo su soporte debe ser igual a 1 ($\\int f(x) dx = 1$).",
      "Representa la probabilidad exacta de un punto individual ($P(X=x)$).",
      "Puede tener saltos discontinuos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una FDP es siempre no negativa y su integral total debe ser 1. Incorrectamente se afirma que $P(X=x) = 0$ para VAC; esto es una propiedad, no la definición de la función."
  },
  {
    "q": "¿Qué afirmaciones son correctas sobre el cálculo de probabilidades usando la FDA, $F(x)$?",
    "opts": [
      "Calcular $P(a \\le X \\le b)$ se hace restando $F(b) - F(a^-)$.",
      "$P(X > a)$ siempre es igual a $1 - F(a)$.",
      "La FDA debe ser diferenciable en todo su soporte.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Por definición, $P(a \\le X \\le b) = F(b) - F(a^-)$. Además, $P(X > a)$ es el complemento de $P(X \\le a)$, lo que nos da $1 - F(a)$."
  },
  {
    "q": "¿Qué propiedades son ciertas para la función de masa de probabilidad (FMP), $p(x)$?",
    "opts": [
      "La suma de todas las probabilidades debe ser 1 ($\\sum p(x) = 1$).",
      "Si hay un valor $k$ donde $p(k)=0$, ese valor no pertenece al soporte de la variable aleatoria.",
      "Solo puede definirse en valores enteros.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La suma total debe ser 1. El soporte son los valores con $p(x)>0$. Si $p(k)=0$, significa que el valor $k$ está fuera del soporte o tiene probabilidad cero."
  },
  {
    "q": "¿Qué conceptos ayudan a identificar si una variable aleatoria es continua o discreta?",
    "opts": [
      "Evaluar si las probabilidades se calculan mediante suma ($\\sum$) o integral ($\\int$).",
      "Determinar si la función asociada (FMP/FDP) tiene saltos discontinuos.",
      "Observar si el conjunto de valores posibles está contenido en los números naturales.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El método definitorio es observar cómo se calcula la probabilidad: suma para discreta ($\\sum$) e integral para continua ($\\int$). El tipo de conjunto posible ayuda conceptualmente."
  },
  {
    "q": "¿Cuáles son las características necesarias de cualquier Función de Distribución Acumulada (FDA), $F(x)$?",
    "opts": [
      "Debe ser siempre creciente.",
      "Es monótona no decreciente y continúa por la derecha.",
      "Su límite cuando $x \\to -\\infty$ debe ser 0.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Toda FDA es no decreciente. Además, por definición de probabilidad acumulada total, $\\lim_{x \\to -\\infty} F(x) = 0$. (Nota: la opción 'Debe ser siempre creciente' es una simplificación, pues puede tener tramos horizontales donde la pendiente es cero)."
  },
  {
    "q": "¿Qué afirmaciones describen el concepto de Soporte en variables aleatorias?",
    "opts": [
      "Es el conjunto de todos los valores posibles que la variable puede tomar.",
      "Son los únicos valores $x$ para los cuales $p(x) > 0$ (VAD) o $f(x) > 0$ (VAC).",
      "Define dónde se debe realizar la suma ($\\sum$) o la integral ($\\int$).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El soporte es el rango de valores con probabilidad positiva. Es crucial saberlo para calcular probabilidades."
  },
  {
    "q": "¿Cuáles de las siguientes afirmaciones son correctas sobre una Variable Aleatoria Continua (VAC)?",
    "opts": [
      "La probabilidad de X tomar un valor exacto es cero: $P(X=x) = 0$",
      "Se calcula mediante el área bajo la curva de la FDP",
      "Su Función de Distribución Acumulada (FDA) debe ser diferenciable en casi todos los puntos",
      "Debe contar con una Media definida"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una VAC siempre tiene probabilidad cero para un punto exacto ($P(X=x)=0$). Además, la probabilidad se calcula integrando el área bajo la FDP $f(x)$ en el intervalo deseado."
  },
  {
    "q": "Una función $f(x)$ representa la Función de Densidad de Probabilidad (FDP) para una VAC. ¿Cuál de las siguientes afirmaciones debe ser cierta sobre esta función?",
    "opts": [
      "$f(x) \\geq 0$ para todo $x$.",
      "El área total bajo la curva debe ser igual a 1, es decir, $\\int_{-\\infty}^{\\infty} f(x) dx = 1$.",
      "$P(X=x) = f(x)$ en cualquier punto.",
      "La integral de $f(x)$ solo necesita sumarse sobre el soporte."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una FDP debe ser no negativa ($f(x) \\geq 0$) y su área total bajo la curva (la probabilidad total) debe ser igual a 1 ($\\int f(x) dx = 1$). Recordar que para VAC, $P(X=x)=0$, por lo que no se puede equiparar directamente con $f(x)$."
  },
  {
    "q": "¿Cuáles de las siguientes propiedades son características de la Función de Distribución Acumulada (FDA), $F(x) = P(X \\leq x)$?",
    "opts": [
      "Es una función monótona no decreciente.",
      "Siempre se cumple que $\\lim_{x\\to-\\infty} F(x) = 0$ y $\\lim_{x\\to\\infty} F(x) = 1$.",
      "Su gráfica es siempre continua en todos los puntos.",
      "La derivada de la FDA, $F'(x)$, nos da directamente el valor esperado."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La FDA es monótona no decreciente (nunca baja). Además, por definición de probabilidad total, debe comenzar en 0 y terminar en 1. La derivada ($F'(x)$) es la función de probabilidad (p(x) o f(x)), pero las otras opciones son incorrectas."
  },
  {
    "q": "¿Cuál de los siguientes conceptos se relaciona correctamente con la definición de una Variable Aleatoria X?",
    "opts": [
      "Asigna un valor numérico a cada resultado posible del espacio muestral.",
      "Su rango debe estar contenido en $\\mathbb{R}$.",
      "Solo puede ser aplicada si el fenómeno es discreto.",
      "Es equivalente a la función de probabilidad."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una variable aleatoria es una función que mapea resultados cualitativos (el espacio muestral) a números reales. Por lo tanto, asigna valores numéricos y su rango debe ser un subconjunto de $\\mathbb{R}$. No está limitada a ser discreta."
  },
  {
    "q": "¿Cuáles son propiedades clave o condiciones necesarias para que una función $p(x)$ sea considerada una Función de Masa de Probabilidad (FMP)?",
    "opts": [
      "$p(x) \\geq 0$ para todo valor posible x.",
      "La suma de todas las probabilidades debe ser igual a 1: $\\sum p(x) = 1$.",
      "Solo necesita cumplirse la condición de no negatividad.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para que $p(x)$ sea una FMP, primero debe ser no negativa ($p(x) \\geq 0$). Además, al ser discreta, la suma total de probabilidades sobre todo su soporte debe sumar exactamente 1 ($\\sum p(x) = 1$)."
  },
  {
    "q": "¿Qué características definen correctamente el Soporte de una Variable Aleatoria?",
    "opts": [
      "Es el conjunto de valores posibles donde la función p(x) o f(x) son estrictamente positivas.",
      "Indica los límites de la variable y siempre debe estar acotado en $\\mathbb{R}$.",
      "Determina dónde se concentra la mayor probabilidad, es decir, el modo.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El soporte es matemáticamente el conjunto donde la función de densidad o masa no es cero. No siempre está acotado (ej: Normal), y aunque indica dónde hay probabilidad, conceptualmente se refiere al dominio matemático, no necesariamente al modo."
  },
  {
    "q": "¿Qué es una Variable Aleatoria?",
    "opts": [
      "Una función que mapea resultados experimentales (espacio muestral) a números reales ($\\mathbb{R}$)",
      "Un conjunto de reglas que determinan si un evento es posible o no.",
      "La medida que estima la incertidumbre asociada a un resultado experimental.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Conceptualmente, una VAR es el puente entre lo cualitativo (el espacio muestral) y lo cuantitativo (los números). Es una 'función' en sí misma."
  },
  {
    "q": "¿Cuáles son las propiedades esenciales que definen la FDA, $F(x)$?",
    "opts": [
      "Es siempre derivable en todo su soporte",
      "Incrementa o permanece constante a medida que $x$ aumenta (Monótona no decreciente)",
      "Su valor límite cuando $x \\to -\\infty$ es 0 y cuando $x \\to +\\infty$ es 1",
      "Es continua por la derecha"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La FDA debe ser monótona no decreciente, lo que significa que solo puede subir o mantenerse. Los límites son fundamentales: el inicio debe tener probabilidad cero y el final debe acumular toda la probabilidad (1). Ser continua por la derecha es una propiedad formal de las distribuciones acopiadas."
  },
  {
    "q": "¿Cuáles son los principales errores conceptuales que se deben evitar al trabajar con VAD y VAC?",
    "opts": [
      "Tratar $P(X=x)$ como un área bajo la curva",
      "Asumir que el soporte es necesariamente $[0, 1]$",
      "Omitir la verificación de $\\sum p(x) = 1$ o $\\int f(x) dx = 1$",
      "Confundir la FDA con la FDP"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El error más común es intentar calcular $P(X=x)$ usando integración. Otro error frecuente es asumir que la distribución debe estar acotada entre 0 y 1. Finalmente, siempre se debe verificar la condición de normalización para cualquier modelo propuesto."
  },
  {
    "q": "¿Cuáles son las propiedades esenciales que deben cumplir las probabilidades definidas por una Función de Densidad de Probabilidad (FDP), $f(x)$?",
    "opts": [
      "$f(x) \\geq 0$ para todo $x$.",
      "El área bajo la curva debe normalizar a uno: $\\int_{-\\infty}^{\\infty} f(x) dx = 1$.",
      "La integral de $f(x)$ en un intervalo representa la probabilidad de estar dentro de ese intervalo.",
      "Siempre se cumple que $P(X=x)=0$, incluso si el soporte es discreto."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las tres primeras opciones son propiedades fundamentales de cualquier FDP. La última opción solo se cumple para variables continuas (VAC); para VAD $P(X=x)$ puede ser mayor a cero."
  },
  {
    "q": "¿Qué afirmaciones son ciertas respecto a las Variables Aleatorias Continuas (VAC)?",
    "opts": [
      "Su soporte generalmente corresponde a un intervalo continuo, como $[a, b]$ o $(-\\infty, \\infty)$.",
      "Para cualquier punto $x$, la probabilidad de que tome ese valor exacto es cero: $P(X=x) = 0$.",
      "El cálculo de probabilidades se realiza mediante integración del área bajo la curva (FDP).",
      "Las VAC pueden ser completamente descritas usando una Función de Masa de Probabilidad."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las tres primeras opciones definen correctamente a las VAC. La cuarta opción es incorrecta; la descripción se realiza con FDP y FDA, no con FMP."
  },
  {
    "q": "¿Cuál de los siguientes conceptos son esenciales para definir el comportamiento estadístico de una Variable Aleatoria?",
    "opts": [
      "Su soporte (el conjunto de valores posibles donde su probabilidad es positiva).",
      "La función que describe la masa o densidad de sus probabilidades (FMP o FDP).",
      "Sus momentos, como la Media ($E[X]$) y Varianza ($\\text{Var}[X]$), son descripciones resumidas.",
      "Solo el cálculo del valor esperado es suficiente para caracterizar completamente la distribución."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para describir una variable aleatoria se requiere conocer su soporte (dónde vive), cómo se distribuye (FMP/FDP) y sus medidas clave de resumen como la media y varianza. La última opción es falsa, ya que no basta solo con el valor esperado."
  },
  {
    "q": "¿Qué propiedades debe cumplir la Función de Distribución Acumulada (FDA), $F(x)$, independientemente de si la variable es discreta o continua?",
    "opts": [
      "$F(x)$ siempre está limitada entre 0 y 1.",
      "Es una función monótona no decreciente, lo que garantiza el orden probabilístico.",
      "Debe ser continua por la derecha (Right-Continuous).",
      "Su derivada $f(x) = F'(x)$ debe existir en casi todos los puntos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las tres primeras son propiedades definitorias de cualquier FDA: el rango $[0, 1]$, la monotonicidad (nunca baja), y ser continua por la derecha. La existencia de la derivada solo es una propiedad de las VAC o en puntos suaves, no es universal."
  },
  {
    "q": "Consideremos un proceso aleatorio $X$. ¿Qué condiciones deben cumplirse para que su distribución sea modelada correctamente?",
    "opts": [
      "Que el soporte debe ser consistente con el tipo de variable (VAD o VAC).",
      "Que la función elegida, ya sea FMP o FDP, siempre cumpla con las propiedades de normalización ($\\sum p(x) = 1$ o $\\int f(x) dx = 1$).",
      "El cálculo de probabilidad debe ser coherente: $P(a \\leq X \\leq b)$ es el objetivo final.",
      "Si la variable es continua, su FDA siempre tendrá derivadas positivas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Es fundamental que las propiedades matemáticas (soporte y normalización) se respeten. El objetivo final del análisis probabilístico es calcular probabilidades en intervalos de manera coherente, independientemente si la variable lo requiere por FMP o FDP."
  },
  {
    "q": "¿Cómo debe interpretarse estadísticamente un histograma versus una Función de Masa de Probabilidad (PMF)?",
    "opts": [
      "El PMF muestra barras discretas y representa directamente $P(X=x)$ para valores específicos.",
      "Un histograma agrupa datos en intervalos, por lo que su altura se interpreta como la densidad relativa o frecuencia ajustada.",
      "La relación entre ambos es que el área bajo una barra del histograma debe aproximar a $P(X \\in [x_i, x_{i+1}])$.",
      "Ambos gráficos representan la función de distribución (FDA) si los intervalos son muy pequeños."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El PMF es exacto para VAD. El histograma, al ser una herramienta de estimación a partir de datos muestrales, muestra densidad relativa o frecuencia por intervalo. La tercera opción es incorrecta; el histograma *aproxima* la densidad $f(x)$, no necesariamente la FDA."
  },
  {
    "q": "¿Son correctas las siguientes afirmaciones sobre la FDA $F(x)$?",
    "opts": [
      "Es siempre una función monótona no decreciente.",
      "Al ser continua por la derecha, $P(X=x) = F(x) - \\lim_{h\\to 0} F(x-h)$.",
      "El valor de $F(-\\infty)$ debe ser cero y $F(\\infty)$ debe ser uno.",
      "Su derivada, $f(x)$, solo existe si la variable es discreta."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La FDA siempre crece o se mantiene constante (monótona no decreciente). La segunda opción es una definición formal de probabilidad puntual usando límites. Finalmente, en cualquier caso, $F(-\\infty)=0$ y $F(\\infty)=1$."
  },
  {
    "q": "¿Cuáles son los requisitos matemáticos para que una Función de Densidad (FDP), $f(x)$, sea válida?",
    "opts": [
      "$f(x) \\geq 0$ en su soporte.",
      "$f(x)$ debe integrable sobre todo el espacio.",
      "El área total bajo la curva debe ser igual a 1 ($\\int f(x) dx = 1$).",
      "Debe ser una función continua."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las tres propiedades son: no negatividad ($f(x) \\geq 0$), integrabilidad y que el área total bajo la curva debe normalizarse a 1."
  },
  {
    "q": "¿Qué propiedades son inherentemente ciertas para cualquier Función de Distribución Acumulada (FDA), $F(x)$?",
    "opts": [
      "Es monótona no decreciente.",
      "Está definida por la suma o integral de probabilidades.",
      "Su límite cuando $x \\to -\\infty$ es 0 y su límite cuando $x \\to +\\infty$ es 1.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Estas tres propiedades definen universalmente a una FDA: debe ser creciente (monótona), acumula probabilidad y está normalizada entre 0 y 1."
  },
  {
    "q": "¿Qué métodos se pueden usar para calcular probabilidades utilizando la Función de Distribución Acumulada (FDA), $F(x)$?",
    "opts": [
      "Calcular $P(a < X \\le b) = F(b) - F(a)$.",
      "$Calcular $P(a \\le X \\le b) = F(b) - F(a)$.",
      "$Calcular $P(X > b) = 1 - F(b)$.",
      "Combinar $F(x)$ con la media y varianza."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La probabilidad de un intervalo se calcula restando las acumulaciones: $P(a < X \\le b) = F(b) - F(a)$. Dado que la FDA está definida para $\\le$, es más seguro usar $F(b) - F(a)$ o, si hay continuidad, $1-F(a)$."
  },
  {
    "q": "¿Cuáles son propiedades correctas de la Función de Distribución Acumulada (FDA), $F(x)$?",
    "opts": [
      "Es siempre monótona no decreciente.",
      "Está continua por la derecha en todo su dominio.",
      "Su límite cuando $x \\to -\\infty$ debe ser cero.",
      "El valor de $F(-\\infty)$ es 0."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La FDA siempre sube (monótona no decreciente) y por definición, cualquier CDF está continua por la derecha. Además, el límite izquierdo en $-\\infty$ debe ser 0."
  },
  {
    "q": "¿Cuáles de las siguientes afirmaciones son ciertas respecto a variables aleatorias continuas (VAC)?",
    "opts": [
      "El área bajo $f(x)$ entre dos puntos es $P(a \\le X \\le b) = \\int_a^b f(x) dx$.",
      "$La probabilidad de que la VAC tome un valor exacto, $P(X=x)$, siempre es cero.",
      "La función de distribución $F(x)$ debe ser diferenciable casi en todo su soporte.",
      "Solo se puede usar la integral para calcular probabilidades."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "En VAC, el área bajo la curva (integral) da la probabilidad. Además, por continuidad en los números reales, $P(X=x)=0$. Finalmente, la FDA debe ser integrable y diferenciable."
  },
  {
    "q": "¿Cuáles elementos son esenciales para definir completamente una distribución de probabilidad?",
    "opts": [
      "La Función de Distribución Acumulada (FDA).",
      "La Función de Densidad de Probabilidad (FDP) $f(x)$ o Función de Masa de Probabilidad (FMP) $p(x)$.",
      "El valor esperado ($\\mu$) y la varianza ($\\sigma^2$).",
      "Solo el soporte del espacio muestral."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Aunque $\\mu$ y $\\sigma^2$ son parámetros clave, no definen *completamente* la distribución. La definición completa requiere $F(x)$ o ($f(x)$/ $p(x)$) porque estos determinan todos los momentos."
  },
  {
    "q": "¿Qué características debe tener una función de probabilidad para ser considerada válida?",
    "opts": [
      "Ser no negativa en todo su soporte.",
      "$P(\\text{todo el espacio}) = 1$.",
      "La integral (o suma) sobre todo el dominio debe normalizar a 1.",
      "Su gráfica puede contener discontinuidades."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las tres condiciones son fundamentales: $p(x) \\ge 0$, $\\int f(x) dx = 1$, y la suma/integral sobre todo el espacio debe ser 1. La opción de las discontinuidades es siempre permitida (especialmente en VAD)."
  },
  {
    "q": "¿Qué tipos de problemas requieren necesariamente el uso combinado de estas herramientas?",
    "opts": [
      "Estimar parámetros poblacionales a partir de muestras.",
      "Calcular probabilidades complejas que abarcan múltiples variables o intervalos. ($P(a \\le X \\le b)$)",
      "Determinar si una distribución observada se ajusta teóricamente (Prueba de bondad).",
      "Identificar el tipo de variable antes de aplicar cualquier cálculo."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La estadística es un ciclo: Se identifica la variable/distribución; se estima ($\\mu$); y luego se usa para calcular probabilidades o hacer inferencias."
  },
  {
    "q": "¿Cómo se manejan las probabilidades en un contexto de Variables Aleatorias Mixtas?",
    "opts": [
      "Se utiliza una combinación ponderada de FMP y FDP.",
      "$F(x)$ sigue siendo la herramienta principal, aunque el cálculo sea más complejo.",
      "La función debe ser modelada por componentes discretos y continuos simultáneamente.",
      "El método es siempre calcular el límite superior e inferior en un sistema mixto."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Una variable mixta requiere manejar ambas herramientas: suma (por lo discreto) e integral (por lo continuo). $F(x)$ sigue siendo la herramienta de acumulación universal."
  },
  {
    "q": "¿Qué afirmaciones sobre las propiedades de la FDA $F(x)$ son correctas?",
    "opts": [
      "Si $F(b) - F(a) = 0.25$, entonces $P(a < X \\le b) = 0.25$.",
      "La derivada de la FDA, $F'(x)$, nos devuelve la densidad (si existe).",
      "Si $X$ es discreta, su FDA tendrá saltos discontinuos.",
      "El valor $F(x)$ representa siempre una probabilidad acumulada."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Todos los puntos son correctos. La propiedad de acumulación (opción 0) y la relación con el PDF ($f(x)=F'(x)$, opción 1) son fundamentales, y la naturaleza escalonada en VAD (opción 3) es su sello distintivo."
  },
  {
    "q": "¿Cuál es el propósito principal de determinar si una variable aleatoria es continua o discreta?",
    "opts": [
      "Determinar qué tipo de función (FMP vs FDP) se debe utilizar para modelarla.",
      "Saber qué método de cálculo usar: sumatorias ($\\Sigma$) o integrales ($\\int$).",
      "Establecer el conjunto de valores posibles que puede tomar la variable aleatoria.",
      "Decidir si es posible normalizar la distribución a un área unitaria."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La clasificación VAD vs VAC (discreta/continua) dicta completamente cómo modelar la probabilidad. Esto determina si se usan sumatorias o integrales para calcular probabilidades y el tipo de función (p(x) o f(x))."
  },
  {
    "q": "¿Cuáles son ejemplos válidos de Variables Aleatorias Discretas (VAD)?",
    "opts": [
      "Número de hijos en una familia",
      "Resultado de un dado justo",
      "Cantidad de veces que aparece 'cara' en 10 lanzamientos",
      "Tiempo de espera para el autobús"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las VAD cuentan eventos discretos (número de hijos, resultados contables). El tiempo de espera es continuo."
  },
  {
    "q": "¿Cuáles son propiedades cruciales que debe cumplir una Función de Densidad de Probabilidad $f(x)$?",
    "opts": [
      "$f(x) \\geq 0$",
      "$\\int_{-\\infty}^{\\infty} f(x) dx = 1$",
      "$f(x)$ es continua en su soporte",
      "Su forma es perfectamente parabólica"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La FDP debe ser no negativa ($f(x) \\geq 0$) y el área total bajo la curva debe ser igual a 1 ($\\int f(x) dx = 1$). Además, generalmente se asume que es continua en su soporte."
  },
  {
    "q": "¿Cuáles son métodos o conceptos correctos para calcular $P(a < X < b)$?",
    "opts": [
      "$\\int_{a}^{b} f(x) dx$ (usando FDP)",
      "$F(b) - F(a)$ (usando FDA)",
      "Usar el área bajo la curva de la densidad",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "En variables continuas, $P(a < X < b)$ es igual al área entre $a$ y $b$, lo cual se calcula por integral ($\\int_{a}^{b} f(x) dx$) o directamente con la diferencia de la FDA ($F(b) - F(a)$). Estos tres métodos son equivalentes."
  },
  {
    "q": "¿Qué representan correctamente los siguientes conceptos?",
    "opts": [
      "La Función de Distribución Acumulada $F(x)$ es monótona no decreciente",
      "El área bajo $f(x)$ representa la probabilidad acumulada hasta ese punto",
      "Para VAC, $P(X=x)=0$ siempre",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La FDA siempre aumenta o se mantiene constante (monótona no decreciente). El área es el significado geométrico de $P$. Y crucialmente, para variables continuas, la probabilidad de un punto exacto es cero."
  },
  {
    "q": "¿Cuáles son las características correctas del 'Soporte' de una variable aleatoria?",
    "opts": [
      "Es el conjunto de valores donde $p(x) > 0$ o $f(x) > 0$",
      "Determina si la variable es discreta o continua",
      "Indica los rangos de valores que tienen probabilidad positiva",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El soporte define el dominio donde la distribución 'existe' o tiene probabilidad. Si $p(x)=0$ en un valor, ese valor está fuera del soporte (o tiene probabilidad nula)."
  },
  {
    "q": "¿Cuáles de las siguientes son propiedades válidas de una Función de Distribución Acumulada (FDA) $F(x)$?",
    "opts": [
      "Es siempre continua por la derecha",
      "Está definida para todo el espacio real",
      "Cumple con $\\lim_{x\\to-\\infty} F(x) = 0$ y $\\lim_{x\\to\\infty} F(x) = 1$",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La FDA debe ser continua por la derecha (por definición de acumulación). Debe estar definida en todo $\\mathbb{R}$. Y sus límites deben encerrar el intervalo $[0, 1]$."
  },
  {
    "q": "¿Cuáles condiciones deben cumplirse para que $f(x)$ pueda actuar como una Función de Densidad de Probabilidad válida?",
    "opts": [
      "$f(x) \\ge 0$ para todo $x$.",
      "$f(x)$ debe estar definida sobre un soporte $\\mathcal{S}$.",
      "La integral total del soporte debe ser igual a uno: $\\int_{\\mathbb{R}} f(x) dx = 1$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para que $f(x)$ sea una FDP válida, tres condiciones son imprescindibles: no puede haber probabilidades negativas ($f(x) \\ge 0$), debe estar definida sobre un conjunto específico (el soporte $\\mathcal{S}$), y la suma o integral total de todas las probabilidades posibles debe normalizarse a 1. La opción A es esencialmente una reformulación de la primera condición."
  },
  {
    "q": "¿Qué afirmaciones son ciertas al comparar el cálculo de probabilidades en VAD versus VAC?",
    "opts": [
      "En VAD, usamos la suma $\\sum P(X=x)$ sobre los valores específicos.",
      "En VAC, utilizamos la integral continua $\\int f(x) dx$ sobre un intervalo.",
      "Para VAC, $P(a \\le X \\le b)$ se calcula como el área bajo la curva entre $a$ y $b$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Esta pregunta sintetiza los métodos de cálculo. VAD usa sumatorias (suma), VAC usa integrales (área). La tercera opción es simplemente una descripción formal del concepto de área bajo la curva en el contexto continuo."
  },
  {
    "q": "¿Cuáles son las principales propiedades conceptuales de una Variable Aleatoria $X$?",
    "opts": [
      "Representa un experimento cuyo resultado numérico puede ser modelado.",
      "Su rango (soporte) define los posibles resultados que tomará.",
      "La probabilidad asociada a cualquier valor debe estar entre 0 y 1.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Una variable aleatoria es conceptualmente una función de mapeo. Sus propiedades definen lo que puede ser (su soporte) y cómo se relacionan con la teoría de probabilidades (las probabilidades deben acotarse entre 0 y 1)."
  },
  {
    "q": "¿Cuáles son los tipos de datos o escenarios donde resulta apropiado modelar un fenómeno como una Variable Aleatoria Continua (VAC)?",
    "opts": [
      "Tiempo transcurrido hasta un evento.",
      "Temperatura registrada en un periodo de tiempo.",
      "Porcentaje de error en una medición instrumental.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los escenarios que involucran mediciones o procesos naturales graduales (como el tiempo o la temperatura) son inherentemente continuos. Modelar estos fenómenos con VAD sería inexacto."
  },
  {
    "q": "Sea $X$ una VAD con FMP $p(1)=0.1$, $p(2)=0.4$, $p(3)=0.3$, $p(4)=0.2$ (y $0$ en otro caso). ¿Cuáles afirmaciones son correctas?",
    "opts": [
      "$\\sum_{x} p(x)=1$, luego es una FMP válida",
      "$F(3)=0.8$",
      "$P(2 < X \\le 4)=0.5$",
      "$p(5)=0$ implica que $5$ pertenece al soporte"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La FMP suma 1 y es no negativa, así que es válida. $F(3)=p(1)+p(2)+p(3)=0.8$ y $P(2<X\\le 4)=p(3)+p(4)=0.5$. Un punto con $p=0$ no pertenece al soporte."
  },
  {
    "q": "¿Cuáles son las características que definen correctamente una Función de Masa de Probabilidad (FMP) $p(x)$?",
    "opts": [
      "$p(x) \\ge 0$ para todo $x$",
      "$ \\sum p(x) = 1$ sobre el soporte",
      "$P(X=x_i) = p(x_i)$ para valores discretos",
      "Debe ser continua"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Una FMP debe ser no negativa ($p(x) \\ge 0$), la suma total de todas las probabilidades en su soporte debe dar 1 ($\\sum p(x) = 1$), y representa directamente la probabilidad de cada valor discreto $P(X=x_i)$. No tiene que ser continua."
  },
  {
    "q": "¿Cuáles de los siguientes conceptos describen adecuadamente lo que es una Variable Aleatoria (V.A.)?",
    "opts": [
      "Es una función matemática que mapea resultados del espacio muestral a números reales",
      "Su valor se determina solo después de realizar el experimento aleatorio",
      "Permite calcular probabilidades en intervalos continuos y discretos",
      "Representa únicamente variables cuantificables"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Una V.A. es una función que asigna valores numéricos a resultados experimentales (Concepto 1). Su valor solo se conoce tras el experimento (Concepto 2). Es la herramienta fundamental para calcular probabilidades en ambos tipos de variables."
  },
  {
    "q": "¿Cuáles son las propiedades fundamentales que debe exhibir cualquier Función de Distribución Acumulada (FDA), $F(x)$?",
    "opts": [
      "Es una función monótona no decreciente",
      "Siempre es continua por la derecha",
      "$P(a < X \\le b) = F(b) - F(a)$",
      "Debe ser integrable en cualquier intervalo"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La FDA debe aumentar o mantenerse (monótona no decreciente), y su definición matemática asegura la continuidad por la derecha. Además, la forma estándar de calcular probabilidades mediante la FDA es $P(a < X \\le b) = F(b) - F(a)$."
  },
  {
    "q": "¿Cuáles son características generales que definen el 'soporte' de una variable aleatoria?",
    "opts": [
      "Representa el conjunto de valores donde la función de probabilidad es positiva.",
      "Es esencial para poder calcular cualquier probabilidad asociada a X.",
      "Puede ser un intervalo continuo o un conjunto discreto finito/infinito.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El soporte define los posibles valores que puede tomar la variable. Si $p(x)$ es positiva en cierto valor, ese valor pertenece al soporte. Este concepto aplica tanto a VAD (valores puntuales) como a VAC (intervalos)."
  },
  {
    "q": "¿Cuáles de las siguientes expresiones son válidas para calcular probabilidades utilizando una Función de Distribución Acumulada $F(x)$?",
    "opts": [
      "$P(a < X \\leq b) = F(b) - F(a)$.",
      "$P(X > x) = 1 - F(x)$.",
      "$P(X \\leq a) = F(a)$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La FDA es la herramienta más universal. $F(b) - F(a)$ calcula el área entre dos puntos (excluyendo 'a'). Usar $1 - F(x)$ calcula la cola derecha (mayor que x). Y por definición, $P(X \\leq a)$ es exactamente $F(a)$."
  },
  {
    "q": "¿Cuáles son las propiedades correctas al comparar VAD y VAC?",
    "opts": [
      "Las VAD se describen con sumatorias ($\\sum$).",
      "En las VAC, la probabilidad de un punto exacto siempre es cero ($P(X=x)=0$).",
      "La FDP requiere el uso de integrales continuas para calcular probabilidades.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las VAD usan sumatorias. Las VAC tienen $P(X=x)=0$. Y las probabilidades de intervalos en VAC se calculan mediante integración (área bajo la curva)."
  },
  {
    "q": "¿Cuáles son los parámetros que definen completamente una distribución (ya sea discreta o continua)?",
    "opts": [
      "El soporte de la variable aleatoria.",
      "Los valores que define la función de probabilidad/densidad.",
      "La forma matemática específica de $p(x)$ o $f(x)$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para definir una distribución necesitamos saber dónde puede tomar valores (soporte), cuáles son esos posibles valores y qué fórmula matemática usan para asignar la probabilidad/densidad. Estos tres elementos lo definen completamente."
  },
  {
    "q": "¿Cuáles propiedades debe cumplir toda Función de Distribución Acumulada $F(x)$?",
    "opts": [
      "$F$ es monótona no decreciente",
      "$\\lim_{x\\to-\\infty}F(x)=0$ y $\\lim_{x\\to+\\infty}F(x)=1$",
      "$F$ es continua por la derecha",
      "$F(x)$ puede tomar valores negativos para $x$ pequeños"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las tres propiedades (no decreciente, continua por la derecha, límites 0 y 1) son definitorias de toda FDA; además está acotada en $[0,1]$."
  },
  {
    "q": "¿Cuáles son las interpretaciones correctas al observar un histograma?",
    "opts": [
      "Representa la distribución empírica de una muestra.",
      "Permite identificar visualmente el soporte de la variable.",
      "Puede sugerir si la variable es aproximadamente normal o sesgada.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un histograma es una aproximación gráfica (empírica) de la distribución real. Su ancho representa los intervalos posibles (soporte), y su forma permite identificar características como simetría o sesgo."
  },
  {
    "q": "Sea $X$ una VAD con FMP $p(1)=0.2$, $p(2)=0.5$, $p(3)=0.3$. ¿Cuáles afirmaciones son verdaderas?",
    "opts": [
      "$F(2)=0.7$",
      "$P(X\\le 2)=0.7$",
      "$P(1 < X \\le 3)=0.8$",
      "$F(2)=0.5$"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$F(2)=P(X\\le 2)=0.2+0.5=0.7$; $P(1<X\\le 3)=p(2)+p(3)=0.8$. La opción $F(2)=0.5$ confunde $F(2)$ con $p(2)$."
  },
  {
    "q": "¿Cuáles parámetros deberían considerarse al analizar si una variable aleatoria es continua?",
    "opts": [
      "Debe poder tomar cualquier valor dentro de un intervalo dado.",
      "Su función de probabilidad se define mediante integrales (FDP).",
      "La fórmula $P(X=x)$ siempre debe ser cero.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si una variable es continua, sus valores están en intervalos. Esto significa que puede tomar cualquier punto dentro de esos límites. Por eso usamos la FDP (integrales) y por definición, el área de un punto individual siempre es cero."
  },
  {
    "q": "¿Cuáles de los siguientes ejemplos corresponden a Variables Aleatorias Continuas (VAC)?",
    "opts": [
      "La altura (en cm) de un alumno elegido al azar",
      "El tiempo (en minutos) de entrega de un paquete",
      "La temperatura (en °C) registrada por un termómetro",
      "El número de paquetes entregados en un día"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Altura, tiempo y temperatura se miden en escalas continuas, luego son VAC; el conteo de paquetes es una VAD."
  },
  {
    "q": "¿Cuáles son propiedades fundamentales que definen la relación entre las funciones de probabilidad?",
    "opts": [
      "La FDA $F(x)$ siempre es el límite superior acotado por 1.",
      "La función de densidad $f(x)$ debe ser no negativa ($f(x) \\ge 0$) y su integral sobre todo el espacio debe ser igual a 1 ($\\int f(x) dx = 1$).",
      "Para una VAC, la probabilidad de que $X$ tome un valor exacto es nula ($P(X=x)=0$).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Estas tres propiedades son esenciales para cualquier variable aleatoria. La FDA está limitada entre 0 y 1; la FDP debe integrarse a 1 y la probabilidad de un punto exacto es cero en distribuciones continuas."
  },
  {
    "q": "¿Qué podemos afirmar sobre los cálculos probabilísticos usando la FDA, $F(x)$?",
    "opts": [
      "Calcular $P(a < X \\le b)$ requiere únicamente calcular $F(b) - F(a)$.",
      "La probabilidad de que $X$ sea menor o igual a $c$, es simplemente el valor $F(c)$.",
      "Si $X$ sigue una distribución continua, $\\lim_{x\\to c} F(x) = P(X \\le c)$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La FDA define $P(X \\le x)$, por lo tanto $F(c)$ es la probabilidad de ser menor o igual a $c$. El cálculo entre dos puntos se hace mediante el principio de límites: $P(a < X \\le b) = F(b) - F(a)$. Como los límites son iguales, esto aplica también para $P(a < X < b)$."
  },
  {
    "q": "¿Consideremos una VAD con soporte $\\{1, 2, 3\\}$. ¿Cuáles de las siguientes afirmaciones son ciertas?",
    "opts": [
      "La función de masa $p(x)$ debe sumar 1 sobre todo su soporte ($\\sum p(x) = 1$).",
      "Las probabilidades en los valores no soportados deben ser cero ($p(x)=0$ si $x \notin \\{1, 2, 3\\}$).",
      "El valor esperado $E[X]$ se calcula multiplicando cada valor por su probabilidad y sumando los resultados ($\\sum x_i p(x_i)$).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Estas tres son definiciones fundamentales para VAD. La suma de probabilidades debe ser 1, las probabilidades fuera del soporte deben ser cero, y el valor esperado es la media ponderada por las probabilidades."
  },
  {
    "q": "¿Qué representa el 'soporte' de una variable aleatoria?",
    "opts": [
      "El rango infinito de valores posibles en teoría.",
      "El conjunto específico de valores donde la Función de Masa (p(x)) o la Función de Densidad (f(x)) son estrictamente mayores a cero.",
      "Es simplemente el dominio matemático donde la función está definida, sin considerar la probabilidad.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El soporte es crucial porque solo los valores dentro de él tienen una probabilidad positiva. La definición correcta requiere que p(x)>0 o f(x)>0."
  },
  {
    "q": "¿Cuál es el procedimiento correcto para calcular la probabilidad $P(a < X \\le b)$ utilizando la Función de Distribución Acumulada (FDA)?",
    "opts": [
      "Calcular directamente $P(X=b) - P(X=a)$, ya que son valores discretos.",
      "Utilizar la resta: $F(b) - F(a)$.",
      "Para variables continuas, el intervalo es abierto y se usa $\\int_a^b f(x) dx$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La FDA cumple con la propiedad de linealidad en intervalos. Para VAD: $P(X \\le b) - P(X \\le a)$. Para VAC: $F(b) - F(a)$ o $\\int_a^b f(x) dx$. Las tres formas son conceptualmente correctas para calcular probabilidades en este intervalo."
  },
  {
    "q": "¿Qué tipos de problemas se resuelven típicamente mediante el uso de un histograma?",
    "opts": [
      "Identificar visualmente los valores de cola de una distribución.",
      "Estimar gráficamente las propiedades centrales, como la moda o la mediana.",
      "Determinar si la distribución es aproximadamente normal (simetría y forma).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los histogramas son herramientas de interpretación visual. Permiten estimar la tendencia central (moda/mediana), la dispersión y evaluar la simetría o la naturaleza de los valores atípicos."
  },
  {
    "q": "¿Qué propiedad debe cumplirse por una Función de Densidad de Probabilidad (FDP) $f(x)$?",
    "opts": [
      "Debe ser continua en su soporte.",
      "Su integral total sobre todo el espacio muestral debe ser igual a 1: $\\int_{-\\infty}^{\\infty} f(x) dx = 1$.",
      "La media se puede calcular utilizando la FDP mediante $\\int x f(x) dx$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Estas tres son propiedades clave y correctas de cualquier FDP. La continuidad ayuda en el cálculo, la integral total asegura que es una distribución válida, y el uso de $f(x)$ para calcular la media es la definición formal."
  },
  {
    "q": "¿En un contexto de modelado, ¿por qué es vital distinguir entre VAD y VAC?",
    "opts": [
      "Determina si se debe usar sumatorias o integrales para calcular probabilidades.",
      "Define si la probabilidad puntual $P(X=x)$ puede ser mayor que cero (VAD) o siempre cero (VAC).",
      "Afecta directamente la interpretación de los datos, ya sea conteos discretos o mediciones continuas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Esta distinción es fundamental porque cambia completamente las herramientas matemáticas a usar: sumatorias vs. integrales, y si $P(X=x)$ puede ser positivo o no."
  },
  {
    "q": "¿Considerando una VAD con FMP $p(2)=0.1, p(3)=0.3, p(4)=0.6$, ¿cuáles son las afirmaciones verdaderas?",
    "opts": [
      "La probabilidad de que $X$ sea menor o igual a 3 es $P(X \\le 3) = 0.4$.",
      "El soporte de esta variable aleatoria incluye los valores $\\{2, 3, 4\\}$.",
      "La suma total de las probabilidades debe ser 1.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cálculo: $P(X \\le 3) = p(2) + p(3) = 0.1 + 0.3 = 0.4$. El soporte son los valores donde $p(x)>0$. La suma debe ser 1 (0.1+0.3+0.6=1)."
  },
  {
    "q": "Si una variable aleatoria continua tiene la FDP $f(x) = c \\cdot x$ en $[0, 2]$, ¿qué afirma el estudiante correctamente?",
    "opts": [
      "La constante de normalización debe ser $c = 1/2$.",
      "El cálculo de probabilidades requiere encontrar el área bajo la curva.",
      "Para cualquier $a < b$, $P(a < X < b) = \\int_a^b f(x) dx$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Primero se normaliza: $\\int_0^2 c x dx = c[x^2/2]_0^2 = 2c$. Para que sea 1, $2c=1$, por lo tanto $c=1/2$. Luego, la probabilidad siempre es el área bajo la curva."
  },
  {
    "q": "¿Cuáles son las propiedades correctas de la Función de Distribución Acumulada (FDA), $F(x)$?",
    "opts": [
      "Es continua en todos los puntos donde la variable aleatoria cambia su comportamiento.",
      "Si se sabe $F(x)$, es posible encontrar la FDP $f(x)$ mediante diferenciación ($f(x) = F'(x)$).",
      "Su monotonía garantiza que las probabilidades acumuladas siempre aumentan o se estabilizan.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La FDA debe ser continua. Si es derivable, su derivada es la FDP $f(x)$. La monotonicidad asegura que las probabilidades no disminuyen a medida que aumenta $x$."
  },
  {
    "q": "¿Qué implica conceptualmente el término 'Soporte' de una variable aleatoria?",
    "opts": [
      "Indica el intervalo o conjunto específico de valores posibles donde la función debe ser calculada.",
      "Es el rango máximo teórico posible para la variable.",
      "Si un valor no está en el soporte, su probabilidad asignada es cero.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El soporte define dónde 'vive' la variable aleatoria. Si $x$ está fuera del soporte, $P(X=x)=0$ o $\\int f(x) dx = 0$."
  },
  {
    "q": "¿Qué procedimientos son necesarios para calcular probabilidades exactas en el contexto de VAC?",
    "opts": [
      "Se debe utilizar la integral definida sobre el intervalo deseado.",
      "Es imposible usar la FMP ya que los valores son infinitos.",
      "El cálculo se realiza encontrando $P(a < X \\le b) = F(b) - F(a)$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "En VAC, el área (integral definida) es la clave. La integral sobre $[a, b]$ representa la probabilidad de que $X$ esté en ese rango."
  },
  {
    "q": "¿Cuál de las siguientes interpretaciones de un histograma es correcta?",
    "opts": [
      "La altura de cada barra representa la densidad de probabilidad $f(x)$ en ese intervalo.",
      "El área total bajo el histograma debe sumar 1.",
      "Los intervalos (bins) del histograma deben ser lo más estrechos posible para una mejor estimación.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "En un histograma de densidad, la altura es $f(x)$ y el área total es 1. Usar bins muy pequeños puede hacer que el gráfico sea ruidoso o difícil de interpretar."
  },
  {
    "q": "¿Cómo se relaciona la función discreta (FMP) con la continuidad en los límites?",
    "opts": [
      "Cuando el soporte está contenido en un intervalo cerrado $[a, b]$, $P(X=a)$ es generalmente cero.",
      "La probabilidad acumulada siempre incluye el valor límite superior, por eso $P(X \\le x)=F(x)$.",
      "Si se calcula $\\lim_{h\\to 0} P(X \\in [x, x+h])$, se obtiene la función de densidad (en caso continuo).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "En cualquier distribución continua o discreta sobre un intervalo, el límite de probabilidad en puntos singulares es cero. La definición formal $P(X \\le x)$ siempre usa $\\le$."
  },
  {
    "q": "¿Qué tipo de variable aleatoria resulta del conteo de eventos (ej., número de éxitos en $n$ ensayos)?",
    "opts": [
      "Generalmente es una Variable Aleatoria Discreta (VAD).",
      "Su distribución está acotada por un límite superior finito.",
      "Se modela a menudo mediante distribuciones como Binomial o Poisson.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El conteo implica valores enteros contables. Esto define una VAD. Además, la mayoría de estos modelos tienen límites naturales (ej., $n$ ensayos)."
  },
  {
    "q": "¿Cuáles afirmaciones sobre el soporte de una variable aleatoria son correctas?",
    "opts": [
      "Para una VAD, $\\text{Supp}(X)=\\{x: p(x)>0\\}$",
      "Para una VAC, $\\text{Supp}(X)=\\{x: f(x)>0\\}$",
      "Es necesario conocerlo para normalizar la FMP o la FDP",
      "$\\text{Supp}(X)$ siempre coincide con todo $\\mathbb{R}$"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El soporte se define como los valores donde $p(x)>0$ (VAD) o $f(x)>0$ (VAC), y se usa para acotar la normalización; no siempre es $\\mathbb{R}$."
  }
];;
