// Leccion 18 — 180 preguntas alternativas
// Generadas con gemma4 el 2026-07-04 14:16
// Distribucion: 60/60/60 (1c/2c/3c)
window.LESSON_QUESTIONS_ALT = window.LESSON_QUESTIONS_ALT || {};
window.LESSON_QUESTIONS_ALT[18] = [
  {
    "q": "Al construir un Intervalo de Confianza (IC) para la varianza poblacional ($\\sigma^2$) a partir de una muestra normal, ¿qué distribución estadística debe utilizarse?",
    "opts": [
      "Distribución Normal (Z)",
      "Distribución t de Student",
      "Distribución Chi-cuadrado ($\\chi^2$)",
      "Distribución F de Fisher"
    ],
    "c": [
      0
    ],
    "exp": "Dado que el IC para la varianza $\\sigma^2$ se basa en la estadística $\\frac{(n-1)s^2}{\\sigma^2} \\sim \\chi^2_{n-1}$, es fundamental utilizar la distribución Chi-cuadrado ($\\chi^2$). Esta distribución requiere que los datos provengan de una población normal."
  },
  {
    "q": "Al construir un Intervalo de Confianza (IC) para la varianza poblacional $\\sigma^2$, ¿qué distribución estadística debe utilizarse, y qué característica clave tiene este IC?",
    "opts": [
      "Se utiliza la distribución Chi-cuadrado ($\\chi^2$), lo que resulta en un intervalo intrínsecamente asimétrico.",
      "Utiliza la distribución t de Student, ya que siempre se trabaja con estimaciones muestrales.",
      "Es simétrico por naturaleza y solo depende del tamaño de la muestra $n$.",
      "Requiere el conocimiento previo de $\\sigma^2$ para calcular sus límites."
    ],
    "c": [
      0
    ],
    "exp": "El IC para la varianza poblacional utiliza la distribución Chi-cuadrado ($\\chi^2$). Una característica crucial es su asimetría, especialmente si los grados de libertad son bajos o altos. Su cálculo se basa en la estadística $\\frac{(n-1)s^2}{\\sigma^2} \\sim \\chi^2(n-1)$."
  },
  {
    "q": "¿Cuál es el principal propósito de utilizar un IC para una proporción $p$ (ej. porcentaje de éxito), y qué criterio se debe revisar antes de proceder?",
    "opts": [
      "Estimar un rango plausible de valores para la verdadera proporción poblacional.",
      "Validar si una nueva muestra difiere significativamente de un valor hipotético conocido.",
      "Verificar que el producto $np̂$ y el complemento $n(1-p̂)$ sean mayores o iguales a 5.",
      "Solo es aplicable cuando la distribución subyacente es estrictamente normal."
    ],
    "c": [
      0
    ],
    "exp": "El IC para una proporción busca acotar el valor de $p$ con un nivel de confianza dado. El criterio fundamental (como se usa en métodos como Wald o Clopper-Pearson) es asegurar que los valores esperados de éxito y fracaso ($np̂$ y $n(1-p̂)$) sean suficientemente grandes, típicamente $\\ge 5$, para garantizar la normalidad aproximada."
  },
  {
    "q": "Respecto al IC para un cociente de varianzas $\\sigma_1^2 / \\sigma_2^2$, ¿qué distribución se debe emplear y qué tipo de relación define este intervalo?",
    "opts": [
      "Se utiliza la distribución F de Fisher, ya que está diseñada específicamente para comparar varianzas.",
      "El valor crítico sigue una distribución t modificada por el ratio de tamaños muestrales.",
      "La relación entre $\\sigma_1^2$ y $\\sigma_2^2$ es siempre lineal y puede ser tratada como un IC de media simple.",
      "Los grados de libertad deben sumarse, lo que simplifica la elección de distribución."
    ],
    "c": [
      0
    ],
    "exp": "El estadístico $F = \\frac{s_1^2 / \\sigma_1^2}{s_2^2 / \\sigma_2^2}$ sigue una distribución F con grados de libertad específicos. Este IC es crucial para determinar si la variabilidad en dos poblaciones es comparable."
  },
  {
    "q": "¿Para determinar si dos varianzas poblacionales, $\\sigma_1^2$ y $\\sigma_2^2$, son iguales, qué tipo de prueba o intervalo es el más apropiado?",
    "opts": [
      "Un IC para el cociente de varianzas usando la distribución F de Fisher.",
      "Una prueba t de Student simple (asumiendo normalidad).",
      "Una regresión lineal que modela la relación entre $s_1^2$ y $s_2^2$.",
      "Un test Z estándar, ya que las varianzas siempre se aproximan a una distribución normal."
    ],
    "c": [
      0
    ],
    "exp": "El IC para el cociente de varianzas es fundamentalmente un uso de la distribución F. Si el intervalo (1-\\alpha) incluye el valor 1, no hay suficiente evidencia para rechazar la hipótesis de igualdad ($\\sigma_1^2 = \\sigma_2^2$)."
  },
  {
    "q": "¿Cuál es la distribución de probabilidad fundamental utilizada para construir el intervalo de confianza (IC) de la varianza $\\sigma^2$?",
    "opts": [
      "Chi-cuadrado ($\\chi^2$)",
      "F de Fisher",
      "Distribución Normal (Z)",
      "Distribución T de Student"
    ],
    "c": [
      0
    ],
    "exp": "El IC para la varianza poblacional $\\sigma^2$, dado un tamaño muestral $n$ y estimando a partir de la muestra, se basa en la distribución Chi-cuadrado ($\\chi^2$). Esta es una propiedad fundamental que distingue este tipo de intervalo."
  },
  {
    "q": "Si queremos calcular el IC para una proporción $p$ utilizando el método normal (Wald), ¿qué condición debe cumplirse para garantizar una aproximación adecuada?",
    "opts": [
      "El tamaño muestral $n$ debe ser suficientemente grande, generalmente $np̂ \\ge 5$ y $n(1-\\hat{p}) \\ge 5$.",
      "La desviación estándar poblacional $\\sigma$ debe ser conocida a priori.",
      "Los datos deben seguir una distribución normal en el rango (0, 1).",
      "Se requiere que la proporción muestral $\\hat{p}$ sea mayor a 0.5."
    ],
    "c": [
      0
    ],
    "exp": "El método de Wald se basa en la aproximación normal. Para que esta aproximación sea válida y el IC tenga buen rendimiento, es crucial asegurar que los valores esperados de éxitos ($np$) y fracasos ($n(1-p)$) sean al menos 5 (o a veces 10), asegurando así una distribución muestral casi normal."
  },
  {
    "q": "¿Cuál es la distribución estadística apropiada para construir un intervalo de confianza sobre el cociente de dos varianzas $\\sigma_1^2 / \\sigma_2^2$?",
    "opts": [
      "F de Fisher",
      "Chi-cuadrado ($\\chi^2$)",
      "Distribución Normal (Z)",
      "T de Student"
    ],
    "c": [
      0
    ],
    "exp": "Cuando se trabaja con la relación o cociente de dos varianzas poblacionales, $\\sigma_1^2 / \\sigma_2^2$, la distribución estadística utilizada es la F de Fisher. Esta es una herramienta especializada en el análisis de varianza y ratios de dispersión."
  },
  {
    "q": "Para estimar un IC para una proporción $p$ cuando el tamaño muestral ($n$) es pequeño o $\\hat{p}$ está muy cerca de 0 o 1, ¿qué método se recomienda utilizar debido a su propiedad de ser exacto?",
    "opts": [
      "Clopper-Pearson",
      "Wald",
      "Wilson (score)",
      "Agresti-Coull"
    ],
    "c": [
      0
    ],
    "exp": "El método Clopper-Pearson es conocido por ser un intervalo de confianza exacto, ya que se basa directamente en la distribución Binomial. Es el más robusto y debe preferirse cuando las condiciones para aproximaciones normales (como Wald) no se cumplen."
  },
  {
    "q": "¿Cuál es la relación matemática entre el IC para la varianza ($\\sigma^2$) y el IC para la desviación típica ($\\sigma$)?",
    "opts": [
      "Los límites superior e inferior del IC para $\\sigma$ son las raíces cuadradas de los límites correspondientes del IC para $\\sigma^2$: $[\\sqrt{L_{\\sigma^2}}, \\sqrt{U_{\\sigma^2}}]$.",
      "El intervalo de $\\sigma$ se obtiene simplemente tomando la media geométrica de los límites del IC para $\\sigma^2$.",
      "No existe una relación directa; deben calcularse usando diferentes distribuciones estadísticas.",
      "El intervalo de $\\sigma$ se obtiene aplicando la transformación logarítmica a los límites del IC para $\\sigma^2$."
    ],
    "c": [
      0
    ],
    "exp": "Dado que la desviación típica es simplemente la raíz cuadrada de la varianza ($\\sigma = \\sqrt{\\sigma^2}$), el intervalo de confianza para $\\sigma$ se obtiene aplicando la función raíz cuadrada a los límites del IC calculado para $\\sigma^2$. Esto garantiza que el intervalo resultante sea simétrico y positivo."
  },
  {
    "q": "Si en un estudio poblacional se desconoce la varianza ($\\sigma^2$) y solo se tiene una muestra, ¿qué propiedad es crítica al construir el IC de $\\sigma^2$?",
    "opts": [
      "Requiere que los datos provengan de una población que sigue una distribución Normal.",
      "Es un intervalo inherentemente asimétrico debido a la dependencia con la función Chi-cuadrado ($\\chi^2$).",
      "Su cálculo requiere estimar el número de grados de libertad ($n-1$) y utilizar $\\chi^2$.",
      "Solo puede ser calculado si se realiza una prueba de hipótesis previa."
    ],
    "c": [
      0
    ],
    "exp": "El método basado en $\\chi^2$ (Chi-cuadrado) para varianza asume, por definición, que la variable aleatoria muestral proviene de una población con distribución Normal. Esta es la premisa fundamental de este tipo de IC."
  },
  {
    "q": "¿Qué representa el parámetro $p$ en el contexto estadístico y cómo se estima a partir de los datos?",
    "opts": [
      "Una probabilidad binomial teórica para un evento específico.",
      "La proporción poblacional (índice de éxito sobre el total), estimada por $\\hat{p} = x/n$.",
      "El nivel de significancia alfa ($\\alpha$) usado en pruebas estadísticas.",
      "La varianza muestral calculada como $\\frac{\\sum(x_i - \\bar{x})^2}{n-1}$."
    ],
    "c": [
      0
    ],
    "exp": "En este contexto, $p$ es la proporción verdadera de éxito en la población. La estimación puntual más simple para esta proporción poblacional es $\\hat{p} = x/n$, donde $x$ son los éxitos y $n$ el tamaño muestral."
  },
  {
    "q": "¿Qué ventaja o corrección metodológica introduce el método de Agresti-Coull en la estimación del IC para proporciones?",
    "opts": [
      "Añade pseudo-observaciones ($x' = x + z^2/2$, $n' = n + z^2$), estabilizando los límites cuando $\\hat{p}$ es extremo.",
      "Permite el cálculo del IC incluso si la muestra original era de tamaño cero ($n=0$).",
      "Elimina la necesidad de aplicar la aproximación normal (Wald) en cualquier caso, haciéndolo exacto siempre.",
      "Solo funciona correctamente cuando las proporciones poblacionales son exactamente iguales a 0.5."
    ],
    "c": [
      0
    ],
    "exp": "El método Agresti-Coull es una mejora sobre Wald que añade un número controlado de pseudo-observaciones ($z^2/2$ éxitos y $z^2/2$ fracasos, donde $z$ es el valor crítico). Esto 'jala' los límites del intervalo hacia 0.5, mejorando drásticamente la cobertura en casos extremos (cerca de $\\hat{p}=0$ o $\\hat{p}=1$). Es un método muy robusto."
  },
  {
    "q": "¿Qué es el IC para una diferencia de proporciones ($p_1 - p_2$) y qué asunción es crucial al construirlo?",
    "opts": [
      "Estimar estadísticamente la brecha entre dos poblaciones distintas, requiriendo que las muestras sean independientes.",
      "Asumir que el tamaño muestral total $n_1 + n_2$ debe ser menor a 50 para garantizar precisión.",
      "Utilizar el mismo valor de desviación estándar poblacional en ambos grupos ($p_1 = p_2$).",
      "El cálculo siempre requiere utilizar la distribución F de Fisher, independientemente del tipo de variable."
    ],
    "c": [
      0
    ],
    "exp": "Estimar $p_1 - p_2$ nos dice si hay una diferencia significativa entre dos grupos. La asunción más crucial es la independencia: las observaciones en el Grupo 1 no deben influir en las observaciones del Grupo 2."
  },
  {
    "q": "¿Cómo se interpreta un intervalo de confianza del 95% para $p_1 - p_2$ que incluye el valor cero?",
    "opts": [
      "Sugiere que no hay evidencia suficiente para afirmar una diferencia significativa entre las proporciones poblacionales (es compatible con $p_1 - p_2 = 0$).",
      "Significa que hay una diferencia estadísticamente significativa entre las proporciones poblacionales, ya que no contienen el cero.",
      "Indica que, al nivel de significancia $\\alpha=0.05$, la hipótesis nula ($p_1 = p_2$) debe ser rechazada.",
      "Implica que el verdadero valor de la proporción es exactamente cero."
    ],
    "c": [
      0
    ],
    "exp": "Si un IC incluye el valor nulo (en este caso, cero), significa que el valor cero es estadísticamente posible. Por lo tanto, no podemos rechazar la hipótesis nula de que las proporciones son iguales ($p_1 = p_2$). Es una señal de falta de evidencia significativa."
  },
  {
    "q": "¿Qué distribución estadística se utiliza fundamentalmente para construir un intervalo de confianza (IC) poblacional para la varianza ($\\sigma^2$)?",
    "opts": [
      "La distribución Chi-cuadrado ($\\chi^2$)",
      "La distribución t de Student",
      "La distribución F de Snedecor",
      "La distribución Normal Estándar (Z)"
    ],
    "c": [
      0
    ],
    "exp": "Para estimar la varianza poblacional $\\sigma^2$, se utiliza la estadística $\\frac{(n-1)s^2}{\\sigma^2} \\sim \\chi^2$ con $n-1$ grados de libertad. Por lo tanto, el intervalo depende de la distribución Chi-cuadrado ($\\chi^2$). Este IC es notablemente asimétrico."
  },
  {
    "q": "¿Qué característica o situación justifica el uso de métodos avanzados (Wilson, Agresti-Coull) en lugar del método estándar de Wald para calcular $IC(p)$?",
    "opts": [
      "Cuando se requiere una garantía teórica de cobertura superior al nivel nominal ($\\alpha$).",
      "Cuando la muestra es pequeña ($n$ bajo) o cuando el valor de $\\hat{p}$ está muy cerca de 0 o 1, lo que viola las condiciones del límite normal.",
      "Siempre que $n \\cdot p \\ge 5$ y $n \\cdot (1-p) \\ge 5$, ya que estos métodos son siempre más precisos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "El método Wald falla cuando $n\\hat{p}$ o $n(1-\\hat{p})$ son pequeños. Wilson y Agresti-Coull fueron desarrollados precisamente para manejar esta situación, proporcionando una mejor cobertura real (mayor robustez) que el simple método de Wald."
  },
  {
    "q": "Para construir un intervalo de confianza (IC) para la varianza poblacional $\\sigma^2$, ¿qué distribución estadística se debe utilizar y qué propiedad es crucial recordar?",
    "opts": [
      "La distribución $t$ de Student; requiere conocer los grados de libertad.",
      "La distribución normal estándar ($Z$); solo aplica si el tamaño muestral es grande.",
      "La distribución chi-cuadrado ($\\chi^2$); su uso implica la asimetría del IC y el requisito de Normalidad Poblacional.",
      "La distribución $F$ de Fisher; se utiliza para comparar varianzas, no para estimar una sola $\\sigma^2$."
    ],
    "c": [
      0
    ],
    "exp": "El intervalo para $\\sigma^2$ usa la distribución chi-cuadrado ($\\chi^2$). Es fundamental recordar que este IC es inherentemente asimétrico (no simétrico alrededor de la muestra) y se basa en la suposición de Normalidad Poblacional."
  },
  {
    "q": "¿Cuál es el procedimiento estadístico correcto para estimar un intervalo de confianza para la desviación típica poblacional $\\sigma$ a partir del IC calculado para $\\sigma^2$?",
    "opts": [
      "Tomando la raíz cuadrada de los límites inferior y superior obtenidos del IC para $\\sigma^2$.",
      "Calcular la varianza muestral $s^2$ y aplicar directamente el método de Wald, como si fuera una proporción.",
      "Usar la distribución $t$ con grados de libertad iguales a $n-1$ y hacer un ajuste no lineal.",
      "Se debe utilizar el intervalo para $\\sigma^2$, pero siempre elevarlo a la potencia 0.5 sin más ajustes."
    ],
    "c": [
      0
    ],
    "exp": "Dado que $\\sigma = \\sqrt{\\sigma^2}$, simplemente se calcula la raíz cuadrada de los límites del IC de $\\sigma^2$. Es importante notar que esta aproximación es estándar y evita problemas con el cálculo directo en términos de $t$."
  },
  {
    "q": "¿Cuál de los siguientes escenarios justifica el uso del método de Wilson (score) para calcular un intervalo de confianza de una proporción $p$?",
    "opts": [
      "Cuando el tamaño muestral ($n$) es muy pequeño, lo que podría hacer fallar el método de Wald.",
      "Cuando se desea garantizar la mejor cobertura estadística posible en comparación con otros métodos.",
      "Cuando los valores esperados de proporciones $\\hat{p}$ son extremadamente cercanos a 0 o 1 (bordes).",
      "Siempre que $n\\hat{p} \\ge 5$ y $n(1-\\hat{p}) \\ge 5$, independientemente del tamaño de la muestra."
    ],
    "c": [
      0
    ],
    "exp": "El método de Wilson es un 'score' estadístico conocido por ofrecer una cobertura superior al método simple de Wald, especialmente en casos donde los tamaños muestrales son pequeños o las proporciones están muy cerca de los extremos (0 o 1)."
  },
  {
    "q": "¿Qué requisito fundamental debe cumplirse para aplicar la mayoría de los métodos de cálculo de intervalos de confianza (como el de proporción $p$)?",
    "opts": [
      "El tamaño muestral ($n$) debe ser lo suficientemente grande para aproximar una distribución binomial mediante una normal.",
      "Los datos deben provenir de una población con distribución Normal.",
      "La variable medida debe ser continua y la varianza conocida poblacionalmente.",
      "Se requiere que se conozcan previamente los parámetros $\\sigma_1^2$ y $\\sigma_2^2$."
    ],
    "c": [
      0
    ],
    "exp": "Para estimar proporciones o usar aproximaciones normales, el tamaño muestral debe ser lo suficientemente grande. Esta condición (ej: $n\\hat{p} \\ge 5$) asegura que la distribución binomial pueda modelarse con una aproximación normal válida."
  },
  {
    "q": "¿Cuál es la principal ventaja conceptual de utilizar el método Agresti-Coull al construir un IC para una proporción $p$?",
    "opts": [
      "Corrige las desviaciones sistemáticas que pueden ocurrir con Wald cuando $\\hat{p}$ está cerca de 0 o 1 mediante la adición de pseudo-observaciones.",
      "Aumenta la precisión del intervalo sin necesidad de aumentar el tamaño muestral.",
      "Es un método exacto basado en la distribución Binomial, garantizando una cobertura correcta independientemente del $n$.",
      "Simplifica el cálculo al requerir solo sumas y divisiones básicas."
    ],
    "c": [
      0
    ],
    "exp": "El Agresti-Coull ($+2$ éxitos y $+2$ fracasos) es un método robusto. Su ventaja radica en que estabiliza la estimación de $\\hat{p}$ cerca de los límites (0 o 1), mejorando significativamente su rendimiento comparado con Wald."
  },
  {
    "q": "¿Qué es una limitación fundamental del método de Wald (para proporciones)?",
    "opts": [
      "Requiere un cálculo muy complejo usando distribuciones complejas.",
      "Tiende a sobrestimar la precisión cuando el tamaño muestral es bajo o $\\hat{p}$ está cerca de 0 o 1, lo que lleva a una cobertura deficiente.",
      "Solo es aplicable si las proporciones son iguales ($\\hat{p}_1 = \\hat{p}_2$).",
      "Asume un modelo lineal simple sin considerar la distribución Binomial subyacente."
    ],
    "c": [
      0
    ],
    "exp": "La limitación más crítica de Wald es su rendimiento pobre (baja cobertura) cuando se está cerca de los bordes o el $n$ es pequeño, ya que su aproximación normal no modela bien estas regiones."
  },
  {
    "q": "En el contexto de la construcción de un intervalo de confianza (IC) para la varianza poblacional $\\sigma^2$, ¿qué distribución estadística debe utilizarse? A) Distribución Z (Normal estandarizada). B) Distribución T de Student. C) Distribución Chi-cuadrado ($\\chi^2$). D) Distribución F de Snedecor.",
    "opts": [
      "Distribución Chi-cuadrado ($\\chi^2$)",
      "Distribución Normal (Z)",
      "Distribución t de Student",
      "Distribución F"
    ],
    "c": [
      0
    ],
    "exp": "El IC para la varianza poblacional $\\sigma^2$ se basa en una transformación que involucra las sumas de cuadrados, por lo tanto, utiliza la distribución Chi-cuadrado ($\\chi^2$)."
  },
  {
    "q": "¿Cuál es la relación matemática correcta entre el intervalo de confianza para la varianza ($\\text{IC}(\\sigma^2)$) y el intervalo de confianza para la desviación típica ($\\text{IC}(\\sigma)$)? A) $\\text{IC}(\\sigma)$ son simplemente los extremos del $\\text{IC}(\\sigma^2)$. B) Los límites superior e inferior del $\\text{IC}(\\sigma)$ son las raíces cuadradas de los límites correspondientes del $\\text{IC}(\\sigma^2)$. C) $\\text{IC}(\\sigma)$ siempre es el valor promedio del $\\text{IC}(\\sigma^2)$. D) No existe una relación directa simple, deben calcularse por separado.",
    "opts": [
      "Los límites superior e inferior del $\\text{IC}(\\sigma)$ son las raíces cuadradas de los límites correspondientes del $\\text{IC}(\\sigma^2)$.",
      "$\\text{IC}(\\sigma)$ es calculado utilizando la distribución t-Student.",
      "$\\text{IC}(\\sigma^2)$ se debe transformar linealmente para obtener $\\text{IC}(\\sigma)$.",
      "Deben utilizarse métodos asintóticos diferentes."
    ],
    "c": [
      0
    ],
    "exp": "Dado que $X \\sim N(\\mu, \\sigma^2)$, si conocemos un IC para $\\sigma^2 = (L_{\\sigma^2}, U_{\\sigma^2})$, el intervalo para $\\sigma$ será $(\\sqrt{L_{\\sigma^2}}, \\sqrt{U_{\\sigma^2}})$."
  },
  {
    "q": "¿Cuál de las siguientes condiciones es fundamental para aplicar métodos asintóticos estándar, como Wald, en la construcción del IC de una proporción $p$? A) El tamaño muestral $n$ debe ser suficientemente grande. B) Los valores esperados de éxitos y fracasos deben ser grandes ($np̂ \\ge 5$ y $n(1-\\hat{p}) \\ge 5$). C) La distribución poblacional debe seguir estrictamente una forma normal. D) Se recomienda usar el método Clopper-Pearson siempre, independientemente del tamaño muestral.",
    "opts": [
      "Los valores esperados de éxitos y fracasos deben ser grandes ($np̂ \\ge 5$ y $n(1-\\hat{p}) \\ge 5$).",
      "El tamaño muestral $n$ debe ser suficientemente grande.",
      "La distribución poblacional debe seguir estrictamente una forma normal.",
      "No se requiere ninguna condición previa."
    ],
    "c": [
      0
    ],
    "exp": "La condición de normalidad aproximada para la proporción es que los productos $np̂$ y $n(1-\\hat{p})$ sean mayores o iguales a 5 (o 10, según la fuente), lo cual asegura la validez del método Wald."
  },
  {
    "q": "¿Por qué el IC basado en el método de Wilson Score ($\\text{IC}_{\\text{Wilson}}$) es generalmente preferible al método de Wald para estimar una proporción $p$? A) Ofrece mejores propiedades de cobertura estadística. B) Es robusto incluso cuando las proporciones $\\hat{p}$ son muy cercanas a 0 o 1. C) No requiere verificar la condición de normalidad aproximada tan rigurosamente. D) Su fórmula es conceptualmente más sencilla que Clopper-Pearson.",
    "opts": [
      "Ofrece mejores propiedades de cobertura estadística.",
      "Es robusto incluso cuando las proporciones $\\hat{p}$ son muy cercanas a 0 o 1.",
      "No requiere verificar la condición de normalidad aproximada tan rigurosamente.",
      "Su fórmula es conceptualmente más sencilla que Clopper-Pearson."
    ],
    "c": [
      0
    ],
    "exp": "El método de Wilson ajusta la varianza estimada, lo que le proporciona mejor cobertura y estabilidad en los extremos (cercanos a 0 o 1) en comparación con el método Wald."
  },
  {
    "q": "¿Cuál es la principal ventaja conceptual del método Clopper-Pearson para construir un IC de una proporción? A) Es un intervalo exacto basado en la distribución Binomial. B) Su límite de confianza se puede calcular analíticamente sin recurrir a aproximaciones normales. C) No depende de asumir condiciones asintóticas o tamaños muestrales muy grandes. D) Ofrece el mismo nivel de cobertura que Wilson, pero es más rápido de calcular.",
    "opts": [
      "Es un intervalo exacto basado en la distribución Binomial.",
      "No depende de asumir condiciones asintóticas o tamaños muestrales muy grandes.",
      "Ofrece el mismo nivel de cobertura que Wilson, pero es más rápido de calcular.",
      "Su límite de confianza se puede calcular analíticamente sin recurrir a aproximaciones normales."
    ],
    "c": [
      0
    ],
    "exp": "Clopper-Pearson construye un intervalo basado en la distribución Binomial exacta (usando éxitos y fracasos adicionales), lo que garantiza una cobertura estadística por definición, independientemente del tamaño muestral."
  },
  {
    "q": "¿En el contexto de comparar dos proporciones independientes ($p_1$ y $p_2$), ¿cuál es el propósito principal al construir un IC para la diferencia $\\text{IC}(p_1 - p_2)$? A) Estimar el rango plausible de valores para la diferencia poblacional. B) Determinar si existe una diferencia estadísticamente significativa entre las dos proporciones a un nivel dado de confianza. C) Evaluar si ambas poblaciones provienen de la misma distribución binomial. D) Calcular la potencia estadística de la prueba que se realizará después.",
    "opts": [
      "Estimar el rango plausible de valores para la diferencia poblacional.",
      "Determinar si existe una diferencia estadísticamente significativa entre las dos proporciones a un nivel dado de confianza.",
      "Evaluar si ambas poblaciones provienen de la misma distribución binomial.",
      "Calcular la potencia estadística de la prueba que se realizará después."
    ],
    "c": [
      0
    ],
    "exp": "Si el intervalo $\\text{IC}(p_1 - p_2)$ contiene al valor cero, no hay evidencia suficiente para rechazar la hipótesis nula de igualdad ($H_0: p_1 = p_2$) a ese nivel de confianza."
  },
  {
    "q": "¿Qué métrica estadística mide la variabilidad o dispersión de un conjunto de datos? A) La Media ($\\mu$). B) La Varianza ($\\sigma^2$). C) El Desvío Estándar ($\\sigma$). D) La Asimetría (Skewness).",
    "opts": [
      "La Varianza ($\\sigma^2$).",
      "El Desvío Estándar ($\\sigma$).",
      "La Media ($\\mu$).",
      "La Asimetría (Skewness)."
    ],
    "c": [
      0
    ],
    "exp": "Tanto la varianza como el desvío estándar son medidas de dispersión. La varianza es $\\text{Var}(X) = E[(X-\\mu)^2]$."
  },
  {
    "q": "¿Cuál es el propósito del IC para el cociente de varianzas ($\\sigma_1^2 / \\sigma_2^2$)? A) Comparar si las variabilidades poblacionales son iguales. B) Proporcionar una prueba formal sobre la relación entre dos volatilidades desconocidas. C) Estimar la razón de dispersión entre dos procesos diferentes. D) Es un método análogo al IC para cocientes de medias.",
    "opts": [
      "Comparar si las variabilidades poblacionales son iguales.",
      "Estimar la razón de dispersión entre dos procesos diferentes.",
      "Proporcionar una prueba formal sobre la relación entre dos volatilidades desconocidas.",
      "Es un método análogo al IC para cocientes de medias."
    ],
    "c": [
      0
    ],
    "exp": "El IC para el cociente $\\sigma_1^2 / \\sigma_2^2$ se basa en la distribución F de Fisher, y su objetivo es determinar si hay paridad (si el cociente es 1) o qué razón representa mejor a los procesos."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre la distribución Chi-cuadrado ($\\chi^2$) para la varianza es correcta? A) Siempre toma valores positivos. B) Su forma depende únicamente del tamaño muestral $n$. C) Es simétrica si sus grados de libertad son muy altos. D) Sus transformaciones se usan típicamente en el contexto de regresión lineal.",
    "opts": [
      "Siempre toma valores positivos.",
      "Es simétrica si sus grados de libertad son muy altos.",
      "Su forma depende únicamente del tamaño muestral $n$.",
      "Sus transformaciones se usan típicamente en el contexto de regresión lineal."
    ],
    "c": [
      0
    ],
    "exp": "La distribución $\\chi^2$ solo acepta valores no negativos, ya que está relacionada con la suma de cuadrados estandarizados. La simetría ocurre cuando los grados de libertad son grandes (idealmente $df > 30$)."
  },
  {
    "q": "¿Cuál es el principal requisito de supuestos al construir un IC para la varianza ($\\sigma^2$)? A) Linealidad de la relación entre variables. B) Normalidad de la variable subyacente. C) Independencia observada de las mediciones. D) Homogeneidad de las varianzas (para comparar grupos).",
    "opts": [
      "Normalidad de la variable subyacente.",
      "Independencia observada de las mediciones.",
      "Homogeneidad de las varianzas (para comparar grupos).",
      "Linealidad de la relación entre variables."
    ],
    "c": [
      0
    ],
    "exp": "La derivación del IC para $\\sigma^2$ depende fundamentalmente de que los datos provengan de una población normal, permitiendo el uso de la distribución $\\chi^2$."
  },
  {
    "q": "¿Qué significa que un intervalo de confianza sea 'asimétrico'? A) Que sus límites superior e inferior están a distancias iguales de la media muestral. B) Que su gráfico no puede ser representado por una curva gaussiana estándar. C) Que el cálculo del límite superior y el límite inferior deben utilizar fórmulas distintas o funciones matemáticas diferentes. D) Que solo es válido para muestras muy grandes.",
    "opts": [
      "Que el cálculo del límite superior y el límite inferior deben utilizar fórmulas distintas o funciones matemáticas diferentes.",
      "Que su gráfico no puede ser representado por una curva gaussiana estándar.",
      "Que sus límites superior e inferior están a distancias iguales de la media muestral.",
      "Que solo es válido para muestras muy grandes."
    ],
    "c": [
      0
    ],
    "exp": "Especialmente en ICs como el de $\\sigma^2$, debido a las propiedades del $\\chi^2$, los límites se calculan con funciones diferentes ($\\chi^2_{\\alpha/2}$ y $\\chi^2_{1-\\alpha/2}$) resultando en una asimetría."
  },
  {
    "q": "¿Qué representa la función $F(d, n_1, n_2)$ al construir un IC para el cociente de varianzas $\\sigma_1^2 / \\sigma_2^2$? A) La distribución t-Student. B) La distribución Z estandarizada. C) La distribución F de Fisher. D) La distribución Chi-cuadrado ($\\chi^2$).",
    "opts": [
      "La distribución F de Fisher.",
      "La distribución Chi-cuadrado ($\\chi^2$).",
      "La distribución t-Student.",
      "La distribución Z estandarizada."
    ],
    "c": [
      0
    ],
    "exp": "El intervalo para el cociente de varianzas es intrínsecamente dependiente de la razón de sumas de cuadrados en relación con grados de libertad, lo cual se modela con la distribución F."
  },
  {
    "q": "¿Cuál es la principal característica al construir un Intervalo de Confianza (IC) para la varianza poblacional ($\\sigma^2$)?",
    "opts": [
      "Requiere que los datos sigan una distribución normal.",
      "El intervalo calculado debe ser simétrico alrededor del estadístico muestral.",
      "Se utiliza la distribución $t$ de Student, no $\\chi^2$.",
      "La construcción se basa en el Teorema del Límite Central (TLC)."
    ],
    "c": [
      0
    ],
    "exp": "Para construir un IC para $\\sigma^2$, es fundamental asumir Normalidad y utilizar la distribución Chi-cuadrado ($\\chi^2$), ya que esta distribución maneja las propiedades de la varianza. El intervalo resultante es notoriamente asimétrico."
  },
  {
    "q": "¿Cuál es el método más recomendado para calcular un Intervalo de Confianza (IC) para una proporción poblacional ($p$) cuando $n$ es pequeño o $\\hat{p}$ está cerca de 0 o 1?",
    "opts": [
      "El método Wilson Score.",
      "Añadir pseudo-observaciones como en Agresti-Coull.",
      "Utilizar el método tradicional de Wald, que es simple y directo.",
      "Calcular un IC basado directamente en la distribución Binomial exacta."
    ],
    "c": [
      0
    ],
    "exp": "Aunque Clopper-Pearson es exacto (Binomial), los métodos estadísticos más robustos para situaciones límite son Wilson Score o Agresti-Coull. De las opciones dadas, Wilson y AC son superiores a Wald, pero si se debe elegir el concepto de mejora de cobertura, Wilson o AC lo logran mejor que Ward."
  },
  {
    "q": "¿Qué distribución estadística es la apropiada para construir un IC al estimar el cociente de dos varianzas poblacionales ($\\sigma_1^2 / \\sigma_2^2$)?",
    "opts": [
      "La distribución F de Fisher.",
      "La distribución Chi-cuadrado ($\\chi^2$).",
      "La distribución normal estándar (Z).",
      "No existe una fórmula simple, solo se usa la aproximación de Wald."
    ],
    "c": [
      0
    ],
    "exp": "El cociente de dos varianzas anidadas o independientes sigue una relación con la distribución F de Fisher. Este es el procedimiento estadístico formalmente establecido para este tipo de comparación."
  },
  {
    "q": "¿Cómo se obtiene un IC para la desviación típica ($\\sigma$) a partir del IC obtenido para la varianza ($\\sigma^2$)?",
    "opts": [
      "Aplicando la raíz cuadrada a los límites superior e inferior del intervalo $\\text{IC}(\\sigma^2)$.",
      "Tomando la raíz de $\\hat{\\sigma}^2$, que es simplemente el estadístico muestral.",
      "Multiplicando por un factor de corrección ($1/\\sqrt{n}$) para ajustar las unidades.",
      "Utilizando únicamente la distribución normal Z, ignorando la asimetría."
    ],
    "c": [
      0
    ],
    "exp": "Dado que $\\text{IC}(\\sigma^2) = [L_{lower}, L_{upper}]$, el IC para $\\sigma$ se obtiene simplemente calculando $[\\sqrt{L_{lower}}, \\sqrt{L_{upper}}]$. Esta operación conserva la estructura del intervalo, aunque lo vuelve más intuitivo en unidades de desviación estándar."
  },
  {
    "q": "¿Qué distribución de probabilidad se utiliza fundamentalmente para construir el intervalo de confianza (IC) de la varianza poblacional ($\\sigma^2$)?",
    "opts": [
      "Distribución Chi-Cuadrado ($\\chi^2$) de Fisher",
      "Distribución t de Student",
      "Distribución Normal Estándar (Z)",
      "Distribución F de Snedecor"
    ],
    "c": [
      0
    ],
    "exp": "El IC para la varianza poblacional $\\sigma^2$ se basa en el estadístico $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$. Por lo tanto, se requiere la distribución Chi-Cuadrado."
  },
  {
    "q": "¿Cuál de los siguientes métodos para construir IC de proporciones (p) ofrece generalmente una mejor cobertura y robustez en comparación con el método de Wald?",
    "opts": [
      "Método Wilson (Score)",
      "Método Agresti-Coull",
      "Método Clopper-Pearson",
      "Los tres son igualmente precisos"
    ],
    "c": [
      0
    ],
    "exp": "Aunque los métodos Wilson, Agresti-Coull y Clopper-Pearson superan a Wald en términos de cobertura, el método Wilson es conocido por su excelente desempeño teórico en la mejora del error estándar estimado."
  },
  {
    "q": "¿Qué estadística se utiliza para construir un IC de cociente de varianzas ($\\sigma_1^2 / \\sigma_2^2$)?",
    "opts": [
      "Distribución F de Fisher",
      "Estadístico t de Student",
      "Distribución Normal Estándar (Z)",
      "Estadístico $\\chi^2$"
    ],
    "c": [
      0
    ],
    "exp": "El cociente de varianzas poblacionales es conocido por seguir una distribución F de Fisher, lo que permite construir el IC adecuado para esta razón."
  },
  {
    "q": "¿Cuál es la distribución estadística fundamental utilizada para construir un Intervalo de Confianza (IC) poblacional para la varianza $\\sigma^2$?",
    "opts": [
      "Chi-cuadrado ($\\chi^2$) con $n-1$ grados de libertad",
      "Student's t",
      "Normal estándar (Z)",
      "F de Fisher"
    ],
    "c": [
      0
    ],
    "exp": "La varianza muestral ($s^2$) sigue una distribución $\\chi^2$ con $n-1$ grados de libertad. Por lo tanto, el IC para $\\sigma^2$ utiliza esta distribución."
  },
  {
    "q": "¿Qué condición es crucial considerar al momento de calcular un Intervalo de Confianza (IC) para la proporción poblacional ($p$) utilizando métodos basados en la normalidad?",
    "opts": [
      "El tamaño muestral $n$ debe ser grande, generalmente $np̂ \\geq 10$ y $n(1-\\hat{p}) \\geq 10$",
      "La muestra debe provenir de una población binomial",
      "Se requiere que la varianza sea constante (homocedasticidad)",
      "El IC solo es válido si se utiliza el método Agresti-Coull"
    ],
    "c": [
      0
    ],
    "exp": "Para aplicar aproximaciones normales (como Wald), es necesario asegurar que los valores esperados de éxito ($np$) y fracaso ($n(1-p)$) sean suficientemente grandes. La regla común es $np \\geq 10$ y $n(1-p) \\geq 10$, lo cual garantiza una buena aproximación binomial-normal."
  },
  {
    "q": "Si se calcula un IC para la varianza $\\sigma^2$ y los extremos obtenidos son $[L_{\\sigma^2}, U_{\\sigma^2}]$, ¿cuál es el método correcto para determinar el intervalo de confianza para la desviación típica ($\\sigma$)?",
    "opts": [
      "[ \\sqrt{L_{\\sigma^2}}, \\sqrt{U_{\\sigma^2}} ]",
      "[ L_{\\sigma^2}/\\text{IC}(1-\\alpha/2), U_{\\sigma^2}]",
      "[ \\text{Mediana}(\\dots) , \\text{Media}(\\dots) ]",
      "Se debe calcular el IC para $\\sigma$ directamente usando la distribución t."
    ],
    "c": [
      0
    ],
    "exp": "Dado que $Y = \\sqrt{X}$ es una función monótona creciente, los límites del IC transformado son simplemente aplicar la raíz cuadrada a los extremos de la varianza: $[\\sqrt{L_{\\sigma^2}}, \\sqrt{U_{\\sigma^2}}]$. Esto se debe a que el límite inferior y superior conservan su orden al tomar la raíz."
  },
  {
    "q": "¿Qué método para proporciones es considerado el más 'exacto' estadísticamente porque se deriva directamente de la distribución Binomial?",
    "opts": [
      "Clopper-Pearson",
      "Agresti-Coull",
      "Wald (Normalización simple)",
      "Wilson (Score)"
    ],
    "c": [
      0
    ],
    "exp": "El método Clopper-Pearson es un intervalo de confianza exacto, lo que significa que su nivel de confianza declarado es matemáticamente preciso para cualquier tamaño muestral. Sin embargo, a menudo resulta más conservador (más amplio) que otros métodos."
  },
  {
    "q": "¿Cuál es la distribución adecuada para construir un Intervalo de Confianza (IC) para la varianza poblacional $\\sigma^2$, dados $n$ observaciones y media muestral $\\bar{x}$?",
    "opts": [
      "Distribución Z (Normal Estándar)",
      "Distribución Chi-cuadrado ($\\chi^2$) con n-1 grados de libertad",
      "Distribución t de Student",
      "Distribución F de Fisher"
    ],
    "c": [
      0
    ],
    "exp": "Para construir un intervalo de confianza para la varianza poblacional $\\sigma^2$, se debe utilizar la distribución Chi-cuadrado ($\\chi^2$) con $n-1$ grados de libertad, ya que es esta distribución la que relaciona directamente la suma de cuadrados y el estadístico muestral."
  },
  {
    "q": "¿Qué propiedad fundamental deben cumplir los datos para que el IC de la varianza $\\sigma^2$ basado en $\\chi^2$ sea válido?",
    "opts": [
      "Deben seguir una distribución binomial",
      "La variable aleatoria subyacente debe ser Normal",
      "Los datos deben estar normalizados mediante logaritmo natural",
      "El tamaño muestral $n$ debe ser muy grande ($n \\rightarrow \\infty$)"
    ],
    "c": [
      0
    ],
    "exp": "El cálculo del IC de $\\sigma^2$ requiere la asunción de que los datos provienen de una población con distribución Normal. Si esta suposición se viola, el intervalo puede tener un rendimiento deficiente."
  },
  {
    "q": "¿Cuál es la principal ventaja metodológica del método Wilson (score) para calcular el IC de proporciones $p$, en comparación con el método Wald?",
    "opts": [
      "Ofrece una mejor cobertura estadística cuando $n$ es pequeño o $\\hat{p}$ está cerca de 0 o 1",
      "Es completamente independiente del supuesto de Normalidad poblacional",
      "Requiere menos cálculos matemáticos que otros métodos avanzados",
      "Solo funciona si la desviación estándar muestral es conocida"
    ],
    "c": [
      0
    ],
    "exp": "El método Wilson mejora significativamente el rendimiento y la cobertura estadística en regiones extremas (cuando $p$ está muy cerca de 0 o 1) o con tamaños muestrales pequeños, donde el método Wald tiende a fallar."
  },
  {
    "q": "¿Qué tipo de intervalo se utiliza para estimar la relación entre dos varianzas poblacionales distintas, $\\sigma_1^2 / \\sigma_2^2$?",
    "opts": [
      "Intervalo basado en distribución t",
      "Intervalo basado en la distribución Chi-cuadrado ($\\chi^2$)",
      "Intervalo basado en la distribución F de Fisher",
      "Intervalo basado en la transformación Logaritmo"
    ],
    "c": [
      0
    ],
    "exp": "El IC para el cociente de dos varianzas $(\\sigma_1^2 / \\sigma_2^2)$ se construye utilizando estadísticamente la distribución F de Fisher. Este método es crucial en análisis de varianza (ANOVA)."
  },
  {
    "q": "¿Cuál de los siguientes métodos proporciona un IC para proporciones $p$ que se basa en el principio de ser 'exacto' al nivel binomial, sin hacer suposiciones de Normalidad?",
    "opts": [
      "Método Agresti-Coull",
      "Método Wald (normal aproximación)",
      "Método Clopper-Pearson",
      "Método Wilson"
    ],
    "c": [
      0
    ],
    "exp": "El método Clopper-Pearson es conocido por ser un intervalo de confianza exacto, derivado directamente del comportamiento binomial. Aunque suele tener peor cobertura en proporciones intermedias, su garantía se basa en la distribución Binomial."
  },
  {
    "q": "¿Cuál es el propósito principal de añadir 'pseudo-observaciones' (como en Agresti-Coull) al calcular un IC para proporciones?",
    "opts": [
      "Aumentar artificialmente el tamaño del estadístico muestral $n$",
      "Corregir la tendencia de los intervalos a ser demasiado angostos cuando $\\hat{p}$ es extremo",
      "Garantizar que la distribución se comporte como una Normal Estándar",
      "Reducir la dependencia entre las proporciones observadas"
    ],
    "c": [
      0
    ],
    "exp": "Agresti-Coull corrige el sesgo del intervalo de Wald al agregar dos 'éxitos' y dos 'fracasos' (pseudo-observaciones), lo que estabiliza la estimación para valores extremos de $\\hat{p}$."
  },
  {
    "q": "¿Si se conoce la varianza poblacional ($\\sigma^2$) mediante un experimento previo, ¿qué método debe usarse para construir el IC de las proporciones $p$?",
    "opts": [
      "No hay relación directa; se usa únicamente $n$ y $\\hat{p}$",
      "Se utiliza una corrección basada en $\\chi^2$",
      "El cálculo requiere la varianza conocida para acotar los extremos del intervalo",
      "Se debe usar el método Clopper-Pearson, ignorando la información de $\\sigma^2$"
    ],
    "c": [
      0
    ],
    "exp": "Si se conoce $\\sigma^2$, las proporciones $p$ y sus estimadores son menos sensibles a esta variable directamente. Sin embargo, conceptualmente, si se está hablando de un IC para $p$ estándar (sin conocer la varianza subyacente), los métodos dependen solo de $n$ y $\\hat{p}$. La opción 1 es incorrecta; el conocimiento previo no cambia fundamentalmente los métodos estándar."
  },
  {
    "q": "¿Cuál es la principal limitación del método Wald cuando se calcula el IC para proporciones $p$?",
    "opts": [
      "Es excesivamente complejo de calcular analíticamente",
      "Tiene un rendimiento deficiente (baja cobertura) cuando $\\hat{p}$ está muy cerca de 0 o 1, o si $n$ es pequeño",
      "Asume linealmente que la distribución subyacente es Normal",
      "Solo puede aplicarse si el tamaño muestral $n$ es mayor a 100"
    ],
    "c": [
      0
    ],
    "exp": "La principal crítica del método Wald es su baja cobertura cuando $\\hat{p}$ está en los extremos. Esto ocurre porque la aproximación Normal falla en esas regiones."
  },
  {
    "q": "Respecto al Intervalo de Confianza para la varianza poblacional ($\\sigma^2$), ¿cuál es la distribución estadística clave y qué propiedad debe cumplirse para su cálculo?",
    "opts": [
      "La distribución T de Student, requiere que los datos sean normales.",
      "La distribución Normal Estándar (Z), solo si $n$ es grande.",
      "La distribución Chi-Cuadrado ($\\chi^2$), y se asume la normalidad de la población.",
      "La distribución F de Fisher, siempre que el tamaño muestral sea mayor a 10."
    ],
    "c": [
      0
    ],
    "exp": "El IC para $\\sigma^2$ utiliza la distribución $\\chi^2$, con grados de libertad $df = n-1$. Este método requiere asumir que los datos provienen de una población normal."
  },
  {
    "q": "¿En el contexto de comparar varianzas poblacionales ($\\sigma_1^2$ vs $\\sigma_2^2$), ¿qué estadístico se debe utilizar para construir un intervalo de confianza para su cociente ($\\sigma_1^2 / \\sigma_2^2$)?",
    "opts": [
      "La distribución Z Estándar, bajo la hipótesis nula.",
      "La distribución T de Student, utilizando los grados de libertad combinados.",
      "La distribución F de Fisher, con grados de libertad dependientes de $n_1 - 1$ y $n_2 - 1$.",
      "La distribución Chi-Cuadrado ($\\chi^2$), ya que estamos comparando variances."
    ],
    "c": [
      0
    ],
    "exp": "Para comparar cocientes de varianzas (o residuos al cuadrado), la distribución apropiada es la F de Fisher. Los grados de libertad son $(n_1 - 1)$ y $(n_2 - 1)$."
  },
  {
    "q": "¿Cuál es la relación entre calcular un IC para $\\sigma^2$ y su raíz cuadrada ($\\sigma$)?",
    "opts": [
      "Es una transformación directa: simplemente se toma la raíz cuadrada de los límites superior e inferior del IC de $\\sigma^2$.",
      "Se debe transformar el intervalo usando una escala logarítmica. ",
      "La relación no es simple; requiere el uso de transformaciones proporcionales de Pearson.",
      "El valor para $\\sigma$ siempre estará en un rango más estrecho que $\\sqrt{\\text{IC}(\\sigma^2)}$."
    ],
    "c": [
      0
    ],
    "exp": "Si $L_{var}$ y $U_{var}$ son los límites del IC para $\\sigma^2$, entonces el intervalo para $\\sigma$ es $[\\sqrt{L_{var}}, \\sqrt{U_{var}}]$. Esto es conceptualmente directo, aunque en la práctica se deben tener cuidado con las transformaciones."
  },
  {
    "q": "¿Cuál es la distribución de probabilidad fundamental utilizada para construir un Intervalo de Confianza (IC) para la varianza poblacional ($\\sigma^2$), asumiendo que los datos provienen de una población normal?",
    "opts": [
      "Distribución Z estándar",
      "Distribución t de Student",
      "Distribución Chi-Cuadrado ($\\chi^2$)",
      "Distribución F de Snedecor"
    ],
    "c": [
      0
    ],
    "exp": "El IC para $\\sigma^2$ se basa en la estadística $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$. Por lo tanto, el Chi-Cuadrado es la distribución clave."
  },
  {
    "q": "¿Cuál es la principal limitación al utilizar el Intervalo de Confianza (IC) basado en el método de Wald para estimar una proporción $p$?",
    "opts": [
      "Puede fallar significativamente cuando los tamaños muestrales son pequeños o cuando la proporción $\\hat{p}$ está muy cerca de 0 o 1.",
      "Solo funciona si se utiliza una muestra grande ($n>100$).",
      "Requiere que la población siga una distribución normal, lo cual no siempre es cierto para proporciones.",
      "Siempre sobreestima el intervalo cuando $n$ es pequeño."
    ],
    "c": [
      0
    ],
    "exp": "El método de Wald (aproximación Normal) se basa en series de momentos y es simple. Su principal debilidad radica en que su precisión depende fuertemente de la condición normal, lo que falla cuando $\\hat{p}$ está en los extremos o $n$ es pequeño. La opción [1] describe esta limitación clave."
  },
  {
    "q": "Al construir un intervalo de confianza (IC) para la varianza poblacional $\\sigma^2$ utilizando $n-1$ grados de libertad y una muestra normal, ¿qué propiedad es fundamental?",
    "opts": [
      "El IC debe ser simétrico alrededor de $\\hat{\\sigma}^2$.",
      "Se utiliza la distribución t de Student.",
      "La población debe seguir una distribución Normal.",
      "Usar la desviación estándar muestral ($\\hat{\\sigma}$) directamente."
    ],
    "c": [
      0
    ],
    "exp": "La construcción del IC para $\\sigma^2$ depende críticamente de que los datos provengan de una población con distribución Normal. Además, el IC resultante es conocido por ser altamente asimétrico, no simétrico."
  },
  {
    "q": "¿Cuáles de las siguientes afirmaciones sobre los Intervalos de Confianza (IC) en general son correctas?",
    "opts": [
      "Un IC representa un rango de valores que probablemente contenga el parámetro poblacional verdadero.",
      "La interpretación correcta nunca es afirmar que la probabilidad de que el parámetro esté en el intervalo construido sea 95%, sino que el *método* tiene esa probabilidad.",
      "Cuanto mayor sea el nivel de confianza deseado, más estrecho debe ser el intervalo resultante (manteniendo $n$ constante).",
      "El ancho del IC solo depende de la variabilidad muestral, y no del tamaño de la muestra $n$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La interpretación correcta es fundamental: el nivel de confianza (ej. 95%) se refiere a que el proceso de construcción del IC tiene esa probabilidad, no al intervalo específico calculado. Además, si aumentas la confianza, ¡el intervalo debe hacerse más ancho!"
  },
  {
    "q": "¿Qué método para estimar un IC de proporción $p$ es preferible cuando los datos son muy extremos (cercanos a 0 o 1) o el tamaño muestral $n$ es pequeño?",
    "opts": [
      "El método Agresti-Coull, que mejora la precisión al añadir 'pseudo-observaciones' ajustando los grados de libertad.",
      "El método Clopper-Pearson, ya que proporciona una garantía de exactitud basada en el modelo Binomial subyacente.",
      "El método Wald, debido a su simplicidad computacional, independientemente del riesgo de fallo en cobertura.",
      "Ninguno de los métodos anteriores; se debe usar la Normal estándar directamente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Agresti-Coull y Clopper-Pearson son robustos frente a datos extremos o $n$ pequeño. Agresti-Coull lo hace mediante ajustes (pseudo-observaciones), mientras que Clopper-Pearson usa un enfoque exacto Binomial."
  },
  {
    "q": "¿Qué implica la interpretación de un IC para la varianza $\\sigma^2$? ¿Cuál es una limitación fundamental?",
    "opts": [
      "Si el IC resultante incluye el valor cero, indica que la estimación es inviable o la suposición del modelo ha fallado.",
      "La asimetría del intervalo significa que no se puede tratar como un simple IC lineal, requiriendo el estadístico $\\chi^2$.",
      "El intervalo siempre debe ser interpretado tomando la raíz cuadrada para obtener un rango de $\\sigma$ (desviación típica).",
      "Su construcción solo es válida si los datos son perfectamente normales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si $\\sigma^2$ fuera cero, significaría que no hay variabilidad. Incluir el cero en un IC para la varianza suele ser una señal de advertencia sobre la calidad del modelo o los supuestos. La asimetría es la característica clave que lo distingue de intervalos normales."
  },
  {
    "q": "¿Cuál es la diferencia conceptual clave entre los métodos Wald y Wilson para construir un IC de proporciones?",
    "opts": [
      "Wald utiliza una normalización simple basada en el máximo de verosimilitud, mientras que Wilson ajusta la estimación de $p$ por grados de libertad.",
      "Wilson siempre es más preciso que Wald porque incorpora información sobre la incertidumbre combinada de los parámetros.",
      "Ambos métodos son equitativamente buenos, y la elección debe basarse únicamente en el nivel de confianza deseado.",
      "Wald asume independencia total entre las observaciones, mientras Wilson lo modela como dependiente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Conceptual y matemáticamente, Wald es más simple (máxima verosimilitud), pero Wilson refina la estimación de $p$ para ser más robusto en los límites del dominio Binomial, mejorando su cobertura."
  },
  {
    "q": "¿Qué condiciones son esenciales para que el Intervalo de Confianza (IC) sea estadísticamente válido y apropiado?",
    "opts": [
      "Los datos deben provenir de una población con distribución aproximadamente normal.",
      "El tamaño muestral $n$ debe ser lo suficientemente grande, o las distribuciones no paramétricas deben aplicarse correctamente.",
      "Las variables medidas deben tener la misma unidad y dimensión (homogeneidad).",
      "Siempre se requiere que los datos sean categóricos para calcular proporciones."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La validez estadística depende de asumir la distribución correcta (Normal o Binomial) y asegurar que el tamaño muestral sea adecuado. Si $n$ es muy pequeño, las aproximaciones normales fallan."
  },
  {
    "q": "¿Cuál es la principal ventaja teórica del método Agresti-Coull respecto a Wald?",
    "opts": [
      "Ofrece una mejor cobertura estadística cerca de los extremos (0 y 1) comparado con el método Wald.",
      "Simplifica drásticamente la fórmula, haciéndola más fácil de calcular manualmente que Wilson.",
      "Es un método completamente exacto como Clopper-Pearson, sin depender de aproximaciones normales.",
      "Requiere menos datos muestrales para alcanzar la misma precisión."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Agresti-Coull fue diseñado justamente para mitigar el error de cobertura de Wald en las colas. Aunque no es totalmente exacto como Clopper-Pearson, mejora significativamente su comportamiento cerca de los extremos (mejor que Wald)."
  },
  {
    "q": "Dado un conjunto de datos con desviación estándar muestral $s$, ¿qué afirmación es correcta respecto a la construcción del IC para $\\sigma$?",
    "opts": [
      "El intervalo de confianza para $\\sigma^2$ se construye usando la distribución F, mientras que el de $\\sigma$ usa la t-Student.",
      "Para obtener un IC preliminar de $\\sigma$, se calcula primero el límite superior e inferior del IC de $\\sigma^2$, y luego se toma la raíz cuadrada de ambos extremos.",
      "El cálculo directo de $IC(\\sigma)$ es mucho más sencillo que pasar por $IC(\\sigma^2)$, ya que se puede usar una aproximación normal.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Es incorrecto afirmar que el IC para $\\sigma^2$ usa F (usa $\\chi^2$). Los puntos correctos son: primero, la relación es que se toma la raíz cuadrada de los extremos del IC de $\\sigma^2$. Segundo, no existe un método directo y simple usando la distribución Normal Estándar."
  },
  {
    "q": "¿En el contexto de intervalos para proporciones, ¿cuáles métodos son considerados más rigurosos o tienen propiedades asintóticas superiores a Wald?",
    "opts": [
      "Wilson score.",
      "Agresti-Coull (Pseudo-observations).",
      "Clopper-Pearson (Método exacto basado en Binomial).",
      "Wald (Aproximación Normal)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Tanto Wilson como Agresti-Coull son mejoras sobre el método de Wald. Clopper-Pearson es exacto pero a menudo demasiado conservador. La pregunta pide métodos superiores/más rigurosos, y ambos Wilson y AC cumplen este rol."
  },
  {
    "q": "¿Qué tipo de información o propósito se busca al construir un intervalo para el cociente de varianzas $\\sigma_1^2 / \\sigma_2^2$?",
    "opts": [
      "Estimar la relación relativa de dispersión entre dos poblaciones distintas.",
      "Determinar si las poblaciones tienen varianzas iguales, realizando pruebas de hipótesis específicas (como F).",
      "Sustituir la necesidad de calcular el ratio mediante una prueba $t$.",
      "Comparar directamente $\\sigma_1 / \\sigma_2$ sin considerar sus varianzas cuadradas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El IC para el cociente de varianzas (usando distribución F) se utiliza para estimar la relación relativa de dispersión. Si los límites del intervalo incluyen 1, no hay evidencia suficiente para afirmar que $\\sigma_1^2 \ne \\sigma_2^2$."
  },
  {
    "q": "¿Cuáles son las características clave al comparar el método Wald con otros métodos (Wilson, AC)?",
    "opts": [
      "Wald es fácil de calcular y conceptualmente simple.",
      "Puede tener mala cobertura estadística cuando los tamaños muestrales son pequeños o $\\hat{p}$ está cerca de 0 o 1.",
      "Sus resultados se basan en una aproximación normal que puede fallar bajo ciertas condiciones extremas.",
      "Requiere la suposición estricta de Normalidad para ser válido."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Wald es sencillo (fácil cálculo). Sin embargo, conceptualmente está limitado porque utiliza la aproximación normal sin considerar las colas, lo que lleva a fallos de cobertura en condiciones extremas ($n$ pequeño o $\\hat{p}$ cerca de los bordes)."
  },
  {
    "q": "¿Qué tipo de interpretación se realiza al construir un IC para una proporción $p_1 - p_2$?",
    "opts": [
      "Si el intervalo contiene cero (0), no hay evidencia estadísticamente significativa para afirmar que las proporciones son diferentes.",
      "El valor central del intervalo representa la diferencia esperada entre las dos medias poblacionales.",
      "Los límites indican la variación total combinada de ambas muestras, independientemente de su diferencia media.",
      "El cálculo requiere transformar $p_1$ y $p_2$ en sus valores Z estándar."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si el IC para $p_1 - p_2$ incluye cero, significa que $\\hat{p}_1 = \\hat{p}_2$ es un valor plausible, por lo que no se rechaza la hipótesis nula de igualdad. El punto central del intervalo (el valor estimado) es la diferencia observada."
  },
  {
    "q": "¿Qué conceptos definen a los intervalos Clopper-Pearson y Agresti-Coull en el contexto de IC para proporciones?",
    "opts": [
      "Ambos son métodos que están basados directamente en el modelo Binomial muestral.",
      "Ambos mejoran la precisión del intervalo en comparación con Wald al manejar mejor las colas (bordes).",
      "El Clopper-Pearson es conocido por ser un método determinístico y exacto, mientras que Agresti-Coull utiliza adiciones de pseudo-observaciones.",
      "Ambos son métodos válidos independientemente del tamaño muestral."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La clave es la robustez. Ambos modelos buscan superar las limitaciones de Wald (especialmente cerca de los bordes). Clopper-Pearson mantiene su base en el modelo Binomial exacto, mientras que Agresti-Coull utiliza una corrección simple y efectiva con pseudo-datos."
  },
  {
    "q": "¿Al construir un IC para $\\sigma^2$, ¿qué condiciones son necesarias o importantes considerar?",
    "opts": [
      "El proceso de muestreo debe seguir una distribución Normal.",
      "La asimetría del intervalo es su característica más notable y debe ser considerada en la interpretación.",
      "Es fundamental que el tamaño de la muestra ($n$) sea lo suficientemente grande para usar la aproximación normal (aunque se usa $\\chi^2$).",
      "El valor calculado siempre será simétrico alrededor de la varianza muestral $s^2$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Normalidad es el supuesto fundamental. Además, su IC usando $\\chi^2$ es notablemente asimétrico (no se puede asumir simetría). La tercera opción es incorrecta porque usar $\\chi^2$ no requiere la aproximación normal de la misma manera que $Z$."
  },
  {
    "q": "¿Cuál es el principal propósito al comparar métodos para proporciones (Wald vs. Wilson/AC)?",
    "opts": [
      "Determinar qué método proporciona un intervalo con el valor central más cercano a $\\hat{p}$.",
      "Asegurar que la cobertura estadística del IC sea lo más cercana posible al nivel de confianza deseado, especialmente en casos límite.",
      "Simplificar los cálculos para usar solo aritmética básica (Wald).",
      "Indicar cuál método es matemáticamente menos complejo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El objetivo estadístico no es la proximidad del centro ni la simplicidad. Es asegurar que el IC tenga una cobertura real igual al nivel de confianza prometido (ej: 95%), lo cual Wilson y AC logran mejor en casos difíciles."
  },
  {
    "q": "¿Qué implica conceptualmente un intervalo de confianza para $\\sigma_1^2 / \\sigma_2^2$?",
    "opts": [
      "Estimamos la posible razón o relación entre las variabilidades poblacionales de dos grupos.",
      "Es una herramienta que nos permite evaluar si el proceso de dispersión en los grupos es comparable.",
      "Si el límite inferior del IC es mayor que 0, se confirma que ambas varianzas son positivas (lo cual siempre debe ser cierto).",
      "Permite realizar la prueba $F$ directamente al calcular su intervalo asociado."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El IC para $\\sigma_1^2 / \\sigma_2^2$ mide la relación de dispersión entre dos fuentes. Si el intervalo no incluye 1, indica que las varianzas son significativamente diferentes."
  },
  {
    "q": "¿Cuál es la principal limitación o riesgo metodológico asociado con el uso del método de Wald para calcular un IC de proporciones?",
    "opts": [
      "Asume linealidad entre los parámetros poblacionales.",
      "Puede fallar significativamente cuando $\\hat{p}$ está extremadamente cerca de 0 o 1 (bordes).",
      "Funciona mal si el tamaño muestral ($n$) es muy pequeño.",
      "Requiere conocer la varianza real de la población."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El método de Wald se basa en la aproximación normal y es simple. Sus fallas son notorias cuando $n$ es pequeño o cuando $\\hat{p}$ está muy cerca de los límites (0 o 1), lo que provoca intervalos demasiado estrechos con cobertura deficiente."
  },
  {
    "q": "¿Qué significa que un IC para proporciones tenga una 'cobertura' del 95%?",
    "opts": [
      "Que hay un 95% de probabilidad de que el verdadero parámetro poblacional caiga dentro del intervalo si se repite el muestreo muchas veces.",
      "Que la proporción muestral ($\\hat{p}$) está garantizada que estará entre los límites calculados en el 95% de los casos.",
      "Indica que solo se acepta un 5% de riesgo de error tipo II al aplicar el método.",
      "Solo es válido si el tamaño muestral $n$ es mayor a 100."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La definición formal de cobertura en estadística es la probabilidad de captura del verdadero parámetro Poblacional ($\\pi$). Es una propiedad del *método* de construcción del intervalo. La segunda opción, aunque técnicamente incorrecta sobre su interpretación estricta, toca el concepto central: que la verdadera proporción cae dentro del rango con alta probabilidad."
  },
  {
    "q": "¿Qué condición se debe verificar antes de aplicar cualquier IC estándar para proporciones (incluyendo Wald)?",
    "opts": [
      "El tamaño muestral $n$ debe ser mayor a 10.",
      "Se debe cumplir que $n\\hat{p} \\geq 5$ y $n(1-\\hat{p}) \\geq 5$.",
      "La proporción $\\hat{p}$ debe estar entre 0.2 y 0.8 para asegurar la validez del modelo.",
      "El parámetro poblacional debe ser conocido previamente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las condiciones de éxito (o reglas de conteo) son cruciales: $n\\hat{p} \\geq 5$ y $n(1-\\hat{p}) \\geq 5$. Esto asegura que la distribución Binomial puede ser adecuadamente aproximada por una Normal. El requisito de $n>10$ es generalmente un criterio más permisivo o menos estricto."
  },
  {
    "q": "¿Al calcular un IC para la desviación típica ($\\sigma$), se recomienda utilizar la raíz cuadrada del intervalo obtenido para $\\sigma^2$. ¿Por qué este proceso siempre debe hacerse con precaución?",
    "opts": [
      "Porque la varianza y la desviación estándar tienen unidades de medida distintas.",
      "Porque tomar la raíz cuadrada elimina cualquier asimetría presente.",
      "Porque el cálculo es matemáticamente sencillo y directo.",
      "Porque no existe una fórmula directa para $\\sigma$ usando la distribución t."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El IC se construye primero para $\\sigma^2$ (usando $\\chi^2$), resultando en un intervalo altamente asimétrico. La raíz cuadrada es la única forma de obtener el rango para $\\sigma$, y siempre debe interpretarse con cautela debido a esta asimetría intrínseca."
  },
  {
    "q": "¿Cuáles son las principales ventajas del método Wilson (score) para calcular un IC de proporciones ($p$) en comparación con el método clásico de Wald?",
    "opts": [
      "Ofrece mejor cobertura estadística garantizada, especialmente con muestras pequeñas",
      "No requiere la aproximación normal y es más robusto a estimaciones extremas ($\\hat{p} \\approx 0$ o $\\hat{p} \\approx 1$)",
      "Su cálculo es computacionalmente más sencillo que el método Agresti-Coull",
      "Se basa en una distribución t de Student, lo cual mejora su precisión."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El método Wilson (score) es conocido por ofrecer mejores propiedades de cobertura estadística que Wald y maneja mejor los casos extremos o tamaños muestrales pequeños. Sin embargo, su fórmula no se basa en la distribución t sino en un ajuste basado en el score log-likelihood."
  },
  {
    "q": "¿Cuáles son dos situaciones o condiciones que hacen que el método Wald para intervalos de proporciones sea problemático?",
    "opts": [
      "Cuando las proporciones estimadas ($\\hat{p}$) están muy cerca de 0 o 1 (bordes)",
      "Cuando la población no es binominal sino gaussiana",
      "Cuando los tamaños muestrales ($n$) son muy grandes, llevando a saturación numérica",
      "Siempre que se esté comparando con el IC de Wilson."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El método Wald falla dramáticamente cuando $\\hat{p}$ está cerca de los límites (0 o 1), ya que la aproximación normal no es válida en esos bordes. También tiene problemas conceptuales si se asume una distribución gaussiana para una variable inherentemente binomial."
  },
  {
    "q": "¿Cuáles son las principales características del método Agresti-Coull (AC) de intervalos de proporciones?",
    "opts": [
      "Mejora la cobertura estadística al añadir pseudo-observaciones ($n' = n + Z^2$ y $x' = x + Z^2/2$) ",
      "Se considera una mejora práctica sobre Wald que estabiliza los estimadores en muestras pequeñas",
      "Es el método más rápido de calcular computacionalmente.",
      "Su límite asintótico es idéntico al método Clopper-Pearson."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Agresti-Coull resuelve la inestabilidad de Wald añadiendo pseudo-observaciones. Esto lo hace más robusto y con mejor cobertura para muestras pequeñas sin ser tan conservador como Clopper-Pearson."
  },
  {
    "q": "¿Qué implica interpretar que un IC para $\\sigma^2$ sea asimétrico?",
    "opts": [
      "Que la distribución $\\chi^2$ no tiene simetría alrededor de su media",
      "Que el error estándar del estimador varía con el tamaño muestral",
      "Que el valor calculado de $s^2$ puede estar sesgado hacia cero",
      "Que se debe usar una transformación logarítmica antes de calcularlo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La distribución $\\chi^2$ es intrínsecamente asimétrica (a menos que los grados de libertad sean grandes). Esto significa que la relación entre el límite inferior y el superior no es simétrica con respecto al valor muestral $s^2$, haciendo que esta sea una propiedad conceptual clave."
  },
  {
    "q": "¿Para construir un IC para la diferencia de proporciones ($p_1 - p_2$), qué condiciones deben cumplirse?",
    "opts": [
      "Ambos tamaños muestrales $n_1$ y $n_2$ deben ser suficientemente grandes (ej. $\\geq 30$) y cumplirse las condiciones de normalidad binomial.",
      "Las proporciones estimadas $\\hat{p}_1$ y $\\hat{p}_2$ no deben estar cerca de cero ni uno.",
      "Se debe asumir que la varianza poblacional es igual ($\\sigma_1^2 = \\sigma_2^2$).",
      "El cálculo puede ser exacto usando una distribución F, en lugar de Z."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para usar aproximaciones normales (IC para diferencia), $n$ debe ser grande y $\\hat{p}$ no debe estar cerca de los extremos. La condición $\\sigma_1^2 = \\sigma_2^2$ es una suposición de prueba hipótesis, pero no un requisito estadístico para la construcción del IC de las proporciones."
  },
  {
    "q": "¿Cuál de los siguientes escenarios justifica el uso preferente del método Wilson sobre Wald?",
    "opts": [
      "Estimación de proporciones a partir de muestras muy pequeñas ($n < 20$)",
      "Cuando se trabaja con datos que tienen una distribución claramente binomial",
      "Cuando la proporción $\\hat{p}$ es cercana a 0.5 (donde Wald es más preciso)",
      "Siempre que el objetivo sea comparar dos proporciones diferentes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Wilson supera a Wald principalmente en muestras pequeñas o cuando la proporción se acerca a los bordes, donde el método de Wald sufre inestabilidades. Su base matemática está más cerca del proceso binomial real."
  },
  {
    "q": "¿Qué significa que un Intervalo de Confianza (IC) para $\\sigma^2$ tenga un valor $L_{\\sigma^2} = 0$? ¿Cuál es la implicación práctica?",
    "opts": [
      "Indica que, con el nivel de confianza dado, no podemos descartar que la varianza poblacional sea cero.",
      "Sugiere que la distribución de los datos debe ser perfectamente determinística (sin ruido).",
      "Implica que todas las observaciones muestrales deben ser idénticas y perfectas.",
      "El cálculo está comprometido y se debe usar un IC para proporciones en su lugar."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si $L_{\\sigma^2} = 0$, significa que es plausible que $\\sigma^2=0$ (es decir, que todos los datos son idénticos). Esto no es un problema de cálculo sino una interpretación estadística: el rango teórico incluye cero varianza."
  },
  {
    "q": "Para construir un IC del $95\\%$ para la varianza $\\sigma^2$ de una población normal con tamaño muestral $n$, se utilizan cuantiles de la distribución $\\chi^2$. ¿Cuáles de las siguientes afirmaciones son correctas?",
    "opts": [
      "Se utilizan los cuantiles $\\chi^2_{0.025}(n-1)$ y $\\chi^2_{0.975}(n-1)$ como extremos del intervalo.",
      "El intervalo resulta asimétrico porque la distribución $\\chi^2$ no es simétrica.",
      "Se utilizan los cuantiles $\\chi^2_{0.05}(n-1)$ y $\\chi^2_{0.95}(n-1)$.",
      "El intervalo es siempre simétrico respecto a la varianza muestral $s^2$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para un IC del $95\\%$ se dejan colas del $2.5\\%$ en cada extremo con $\\chi^2_{0.025}$ y $\\chi^2_{0.975}$ sobre $n-1$ grados de libertad; la asimetría de $\\chi^2$ hace que el intervalo también sea asimétrico."
  },
  {
    "q": "¿Qué implicación tiene que el IC de varianza ($\\sigma^2$) sea asimétrico en su distribución $\\chi^2$?",
    "opts": [
      "Que siempre debe usarse una transformación logarítmica antes de calcularlo",
      "Que la incertidumbre asociada a los extremos del intervalo es mayor en un lado que en otro",
      "Que el valor esperado (media) del IC no puede ser calculado directamente",
      "Que se requiere necesariamente un tamaño muestral $n > 30$"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La asimetría implica que la distribución $\\chi^2$ es más pronunciada en sus colas derecha. Esto significa que la incertidumbre al calcular límites puede no ser simétrica respecto a la media muestral o el valor esperado."
  },
  {
    "q": "¿Qué condición debe cumplirse generalmente para aplicar métodos de aproximación Normal (como Wald) al construir un IC de proporción $p$?",
    "opts": [
      "El tamaño muestral debe ser grande, típicamente $n\\hat{p} \\ge 5$ y $n(1-\\hat{p}) \\ge 5$",
      "La población subyacente debe seguir una distribución Normal",
      "Los datos deben estar perfectamente normalizados (transformados)",
      "Se requiere que la varianza poblacional $\\sigma^2$ sea conocida de antemano"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La condición $n\\hat{p} \\ge 5$ y $n(1-\\hat{p}) \\ge 5$ es el requisito clásico para garantizar que la aproximación binomial-Normal sea razonable (Opción 0). Sin embargo, en términos de valididad estadísticos general, se asume que los datos provienen de una población con estructura definida (opción 1)."
  },
  {
    "q": "¿Si un IC para proporciones $p$ contiene el valor 0.5, ¿qué significa esto desde la perspectiva del análisis?",
    "opts": [
      "Que no existe evidencia estadísticamente significativa de que $\\hat{p}$ sea diferente de 0.5",
      "Que se ha rechazado la hipótesis nula de $H_0: p = 0.5$",
      "Que el tamaño muestral $n$ es insuficiente para tomar una decisión firme",
      "Que la distribución subyacente debe ser perfectamente simétrica"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si el intervalo contiene un valor particular (aquí 0.5), significa que ese valor no se puede rechazar al nivel de confianza elegido. Por lo tanto, no hay evidencia suficiente para afirmar diferencia significativa."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre intervalos de varianza y proporciones es verdadera?",
    "opts": [
      "La asimetría del IC para $\\sigma^2$ debe ser tratada con funciones no lineales o transformadas",
      "El cálculo de $\\sigma$ implica tomar la raíz cuadrada de los límites superiores e inferiores de $\\chi^2$",
      "Para $p$, el método Agresti-Coull siempre proporciona un intervalo más estrecho que Wald",
      "La distribución $F$ solo se usa para comparar medias, no varianzas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La asimetría del IC ($\\sigma^2$) requiere métodos que manejen la curvatura (Opción 1). Al pasar de $\\chi^2$ a $\\sigma$, es imperativo aplicar la raíz cuadrada a los límites calculados para obtener el rango correcto de la desviación típica (Opción 2)."
  },
  {
    "q": "¿Para construir un Intervalo de Confianza para la diferencia de proporciones $p_1 - p_2$, ¿qué condición debe cumplirse rigurosamente, asumiendo $n_1$ y $n_2$ son los tamaños muestrales?",
    "opts": [
      "Que ambos grupos sean significativamente diferentes en sus medias.",
      "Que el número esperado de éxitos para ambas muestras ($n\\hat{p}$) sea mayor o igual a 5.",
      "Que la razón entre las varianzas $\\sigma_1^2 / \\sigma_2^2$ sea cercana a 1.",
      "Que se haya aplicado una prueba T de Student en lugar de un IC."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Al igual que con el IC de p individual, la validez asintótica requiere $n\\hat{p} \\ge 5$ y $n(1-\\hat{p}) \\ge 5$ para ambas muestras. La condición de $\\sigma_1^2 / \\sigma_2^2 \\approx 1$ es una hipótesis para pruebas, no un requisito de cálculo del IC."
  },
  {
    "q": "¿Si el intervalo calculado para la varianza poblacional ($\\text{IC}(\\sigma^2)$) contiene el valor cero (0), qué implicación práctica tiene esto?",
    "opts": [
      "Que la desviación estándar muestral calculada debe ser nula.",
      "Que no hay evidencia estadística suficiente para descartar que $\\sigma^2 = 0$ en el nivel de significancia elegido.",
      "Que la muestra utilizada es necesariamente pequeña ($n=1$).",
      "Que se debería utilizar el método F de Fisher en su lugar."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si $IC(\\sigma^2)$ incluye 0, significa que $\\sigma^2 = 0$ es un valor plausible. Esto implica que no podemos rechazar la hipótesis nula de varianza cero (o que todas las observaciones son idénticas)."
  },
  {
    "q": "¿Qué se puede concluir sobre la relación entre IC para varianza ($\\text{IC}(\\sigma^2)$) e IC para desviación estándar ($\\text{IC}(\\sigma)$)?",
    "opts": [
      "$\\text{IC}(\\sigma)$ es simplemente la raíz cuadrada de los límites de $\\text{IC}(\\sigma^2)$.",
      "Aunque son relacionados, la transformación implica el uso de propiedades logarítmicas o la fórmula directa de raíz.",
      "El IC para $\\sigma$ siempre debe ser más estrecho que el intervalo calculado directamente de $\\text{IC}(\\sigma^2)$ sin transformar.",
      "Ambos intervalos deben utilizar los mismos grados de libertad y distribución estadística (generalmente $\\chi^2$)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Es conceptualmente correcto tomar la raíz cuadrada del IC($\\sigma^2$). Además, es crucial notar que ambas estimaciones ($\\sigma$ y $\\sigma^2$) dependen fundamentalmente de los mismos grados de libertad ($n-1$) bajo la distribución $\\chi^2$."
  },
  {
    "q": "¿Cuáles son dos condiciones esenciales para que se pueda aplicar un IC normal estándar a una proporción ($p$)?",
    "opts": [
      "La población debe ser continua",
      "El tamaño muestral debe ser grande (condición de éxito/fracaso)",
      "Los datos deben seguir una distribución t-Student",
      "La muestra debe estar estratificada aleatoriamente"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para aplicar la normalidad a $p$, debemos asegurar que tanto los 'éxitos' ($n\\hat{p}$) como los 'fracasos' ($n(1-\\hat{p})$) sean suficientemente grandes (generalmente $\\ge 5$). Esto implica un tamaño muestral adecuado y valores de $\\hat{p}$ no extremos."
  },
  {
    "q": "¿Cuáles son las principales ventajas conceptuales del método Agresti-Coull para el cálculo del IC de proporciones?",
    "opts": [
      "Corrige la asimetría cerca de los límites (0 o 1)",
      "Aumenta la precisión al añadir pseudo-observaciones",
      "Es matemáticamente más simple que Wilson y Clopper-Pearson",
      "Garantiza un intervalo exacto basado en el binomio"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Agresti-Coull mejora la cobertura al 'añadir' o pseudo-observaciones. Su principal fortaleza es corregir sistemáticamente la tendencia de Wald a tener intervalos demasiado estrechos y sesgados cerca de los extremos (0 y 1), aunque no garantiza exactitud como Clopper-Pearson."
  },
  {
    "q": "¿Qué características definen correctamente al método Wilson (score) para construir un IC de proporciones?",
    "opts": [
      "Utiliza una transformación basada en el puntaje Z, ofreciendo mejor cobertura que Wald.",
      "Su límite inferior y superior son más estables cuando $p$ está cercano a 0 o 1.",
      "Incorpora automáticamente la corrección por pequeños tamaños muestrales.",
      "Es el método estadísticamente exacto basado en la distribución Binomial."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El método Wilson (score) es una mejora sobre Wald porque usa un enfoque de puntaje z-transformado, mejorando su cobertura. Sus límites son más robustos y estables incluso cuando las proporciones estimadas están cerca de los extremos (0 o 1). No es el método exacto (ese es Clopper-Pearson), ni requiere $n$ grande por sí mismo."
  },
  {
    "q": "¿Qué afirmaciones son correctas respecto a la desviación típica poblacional ($\\sigma$) y su estimación?",
    "opts": [
      "La raíz cuadrada del límite inferior del IC para $\\sigma^2$ da el límite inferior de $\\sigma$.",
      "Los intervalos para $\\sigma$ son siempre más fáciles de calcular que los de $\\sigma^2$.",
      "Cuanto mayor sea la varianza muestral, más estrecho será el IC.",
      "El IC para $\\sigma$ es simplemente el valor absoluto del IC para $\\sigma^2$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La desviación típica $\\sigma$ (no la varianza) se estimando por $s$, y su intervalo correcto requiere aplicar raíz cuadrada a los límites de $\\sigma^2$. Si bien el IC para $\\sigma$ existe conceptualmente, en práctica, es más común trabajar con $\\sigma^2$ debido a las propiedades estadísticas. La afirmación 3 es incorrecta porque la transformación no lineal preserva la simetría ni simplifica el cálculo."
  },
  {
    "q": "Respecto al método de Wald para construir un IC de una proporción $p$, ¿qué condiciones son importantes considerar?",
    "opts": [
      "La aproximación normal solo es válida si las expectativas $np$ y $n(1-p)$ son suficientemente grandes.",
      "Se basa en el cálculo simple $\\hat{p} \\pm z_{\\alpha/2} \\cdot SE(\\hat{p})$.",
      "Requiere que el tamaño muestral ($n$) sea muy pequeño.",
      "El método de Wald siempre ofrece la mejor cobertura estadística sobre otros métodos (Wilson, Agresti-Coull)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El método de Wald es sencillo y usa la aproximación normal. Sin embargo, su validez depende críticamente de que $n$ sea lo suficientemente grande para asegurar que $np \\ge 5$ y $n(1-p) \\ge 5$. No siempre ofrece la mejor cobertura (Wilson y Agresti-Coull suelen ser mejores)."
  },
  {
    "q": "¿Cuáles son las ventajas o características correctas del método Wilson para el IC de proporciones?",
    "opts": [
      "Ofrece una mejor cobertura estadística que el método de Wald bajo condiciones variables.",
      "Es especialmente adecuado cuando $n$ es pequeño y $\\hat{p}$ se acerca a 0 o 1.",
      "Incorpora un ajuste basado en la varianza estimada de forma más robusta.",
      "Requiere realizar correcciones de continuidad complejas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El método Wilson (o score) mejora significativamente la cobertura en comparación con Wald. Su principal fortaleza reside en su robustez cuando el tamaño muestral es pequeño y las proporciones son extremas."
  },
  {
    "q": "¿Qué características definen al intervalo de confianza Clopper-Pearson para una proporción $p$?",
    "opts": [
      "Es un método exacto basado directamente en la distribución Binomial, sin depender de aproximaciones normales.",
      "Garantiza que el IC cubra la verdadera proporción con la probabilidad nominal ($\\alpha$) o más.",
      "Requiere realizar múltiples cálculos iterativos (cuantil binominal) para establecer sus límites.",
      "Solo es aplicable cuando $n$ es grande."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Clopper-Pearson es el 'estándar de oro' conceptual porque no usa la aproximación normal; se deriva directamente del Binomial, lo que garantiza su exactitud. Esto implica que sus límites son más conservadores (más amplios) comparado con Wald."
  },
  {
    "q": "¿Cuáles son los resultados correctos al comparar métodos para IC de proporciones?",
    "opts": [
      "El método Agresti-Coull corrige el problema de la baja potencia cuando $\\hat{p}$ es extremo añadiendo pseudo-observaciones.",
      "Los intervalos Clopper-Pearson suelen ser más amplios que Wald, haciéndolos más conservadores.",
      "Wald es conceptualmente el más sencillo y fácil de calcular a mano.",
      "Todos los métodos convergen al mismo límite en $n \\to \\infty$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Agresti-Coull aborda la baja potencia añadiendo pseudo-datos (usualmente $n+4$ trials con $k+\\alpha$ éxitos). Clopper-Pearson es conocido por ser más conservador. Wald es el más simple de calcular teóricamente."
  },
  {
    "q": "¿Qué se debe tener en cuenta al construir un IC para el cociente de varianzas $\\sigma_1^2 / \\sigma_2^2$?",
    "opts": [
      "El estadístico de prueba sigue una distribución F de Fisher.",
      "La independencia entre las muestras ($M_1$ y $M_2$) es una condición crucial.",
      "Se utiliza la distribución $t$ de Student, similar a los IC de medias.",
      "Los grados de libertad utilizados son $n_1 - 1$ y $n_2 - 1$, respectivamente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El cociente de varianzas se modela usando la distribución F de Fisher. Es absolutamente esencial que las muestras provengan de poblaciones independientes para utilizar esta prueba estadística."
  },
  {
    "q": "¿Qué afirmaciones son correctas sobre la interpretación de un IC de proporciones?",
    "opts": [
      "Un IC estrecho sugiere que se ha recolectado una gran cantidad de información o que la proporción es cercana a un extremo (0 o 1).",
      "Si el intervalo incluye la proporción hipotetizada $p_0$, no hay evidencia suficiente para rechazar $H_0: p = p_0$.",
      "Si el intervalo $[L, U]$ contiene el valor 0, no podemos rechazar la hipótesis nula $H_0: p = 0$.",
      "La semántica del IC nunca debe confundirse con la probabilidad de que $H_0$ sea falsa."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El propósito principal del IC es el siguiente: si el valor hipotetizado está dentro, no hay evidencia para rechazarlo (interpretación estadística). Un intervalo estrecho implica precisión (gran información/muestra grande), pero puede ser engañoso cerca de los extremos."
  },
  {
    "q": "¿Cuándo se prefiere utilizar el método Agresti-Coull en lugar de Wald para IC de proporciones?",
    "opts": [
      "Cuando $n$ es muy pequeño y $\\hat{p}$ está lejos de 0.5.",
      "Cuando $\\hat{p} \\approx 0.5$, ya que esto minimiza el error asimétrico en Wald.",
      "Cuando la distribución binomial puede ser bien aproximada por la normal estándar.",
      "Siempre debe usarse, independientemente del tamaño muestral."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Agresti-Coull está diseñado para mejorar la estabilidad de estimación cuando $n$ es pequeño o $\\hat{p}$ es extremo. De hecho, su rendimiento mejora notablemente cerca de $\\hat{p}=0.5$, donde Wald puede volverse inestable en las colas."
  },
  {
    "q": "¿Qué cálculos son necesarios al construir un IC para la varianza poblacional $\\sigma^2$?",
    "opts": [
      "Se utiliza el estadístico $\\chi^2 = \\frac{(n-1)s^2}{\\sigma^2}$.",
      "Los límites del intervalo se obtienen usando los cuantiles de la distribución chi-cuadrado ($\\chi^2$).",
      "El IC resultante es simétrico en relación con el estimador muestral $s^2$.",
      "La varianza debe ser transformada logarítmicamente antes de aplicar $\\chi^2$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El estadístico clave involucra la razón entre los grados de libertad y la varianza muestral. Los límites se derivan directamente usando los cuantiles ($\\chi^2_{\\alpha/2}$ y $\\chi^2_{1-\\alpha/2}$) de esta distribución asimétrica."
  },
  {
    "q": "¿Qué interpretaciones son correctas al comparar ICs de proporciones?",
    "opts": [
      "Si el intervalo $[L, U]$ es muy amplio, indica baja precisión o un tamaño muestral insuficiente.",
      "El ancho del IC es una medida de la incertidumbre sobre el parámetro poblacional.",
      "La amplitud del IC está directamente relacionada con la variabilidad de la población y el nivel de confianza deseado.",
      "Un intervalo de 95% significa que el 95% de los datos caerán dentro de él."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La amplitud refleja directamente la incertidumbre. Un rango amplio = baja precisión (incertidumbre alta). El error en la interpretación común es confundir '95% de confianza' con 'el 95% de los datos'."
  },
  {
    "q": "¿Cuál es el tratamiento estadístico correcto para determinar un IC para $\\sigma_1^2 / \\sigma_2^2$?",
    "opts": [
      "El cociente se modela correctamente mediante la razón de varianzas que sigue la distribución F de Fisher.",
      "Los grados de libertad son simplemente $n_1 + n_2$, sin distinguir los componentes.",
      "Se debe utilizar una aproximación basada en la distribución Normal estándar.",
      "Se recomienda usar el logaritmo natural del cociente para normalizar."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La única forma robusta y estadísticamente correcta es modelar la razón mediante la distribución F de Fisher. Los grados de libertad son críticos: deben ser $n_1-1$ y $n_2-1$, respectivamente."
  },
  {
    "q": "¿Cuáles son las limitaciones o condiciones necesarias al aplicar el Intervalo de Confianza (IC) para una proporción poblacional ($p$) utilizando el método de Wald?",
    "opts": [
      "El tamaño muestral debe ser grande ($n$ suficientemente grande)",
      "Se requiere que $np̂ \\ge 5$ y $n(1-p̂) \\ge 5$",
      "Es válido incluso si la población es muy pequeña ($n<20$)",
      "Funciona mejor cuando la proporción esperada $p$ está cerca de 0 o 1"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El método de Wald es simple, pero su validez se basa en el uso de la aproximación normal. Por ello, requiere que tanto los productos $np̂$ como $n(1-p̂)$ sean suficientemente grandes (generalmente $\\ge 5$). Este método falla si $p$ está muy cerca de 0 o 1."
  },
  {
    "q": "Cuando se compara el IC basado en Wald con métodos más robustos para proporciones, ¿cuáles son las principales ventajas y limitaciones de cada uno?",
    "opts": [
      "El método de Wilson (score) generalmente ofrece mejor cobertura que Wald, especialmente cuando $p$ es cercano a 0 o 1.",
      "Wald es computacionalmente simple de calcular, pero su rendimiento disminuye drásticamente con muestras pequeñas o proporciones extremas.",
      "Clopper-Pearson proporciona la garantía teórica de exactitud al estar basado en la distribución Binomial.",
      "Agresti-Coull simplemente recalcula el IC utilizando la varianza muestral $s^2$ y es igual a Wald."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Wilson mejora la cobertura al incluir un 'score' que ajusta la estimación. Wald es simple pero sesgado en extremos de $p$. Clopper-Pearson es exacto (basado en Binomial), mientras que Agresti-Coull añade pseudo-observaciones para mejorar el rendimiento sin ser necesariamente igual a Wald."
  },
  {
    "q": "Si tenemos dos grupos con proporciones poblacionales $p_1$ y $p_2$, ¿qué método estadístico se debe utilizar para construir un IC para su diferencia ($p_1 - p_2$)?",
    "opts": [
      "Se utiliza el estadístico Z, aproximando la distribución normal a lo largo de los límites.",
      "Requiere combinar los errores estándar individuales y usar una fórmula basada en la suma de varianzas muestrales.$ \\sigma_{d}^2 = \\frac{\\hat{p}_1(1-\\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1-\\hat{p}_2)}{n_2}$.",
      "El método $t$ de Student es apropiado porque estamos trabajando con proporciones y no con medias.",
      "Se debe usar la distribución F, ya que se está comparando la dispersión relativa entre dos muestras."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para la diferencia de proporciones ($p_1 - p_2$), el método estándar utiliza una aproximación normal (estadístico Z), combinando los errores estándar muestrales. Es crucial calcular la varianza combinada en el denominador del estadístico."
  },
  {
    "q": "Considere la construcción de un IC para el cociente de varianzas ($\\sigma_1^2 / \\sigma_2^2$). ¿Cuál es la distribución apropiada y qué representa su uso?",
    "opts": [
      "Se debe utilizar la distribución F de Fisher, ya que relaciona dos variables muestrales independientes normales.",
      "El intervalo resultante se interpreta como una razón de dispersiones relativas entre los dos grupos.",
      "Es más simple usar el método Z, tratando las varianzas como si fueran medias poblacionales.",
      "La distribución t es suficiente porque estamos comparando la magnitud de las variances."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El IC para la razón de varianzas ($\\sigma_1^2 / \\sigma_2^2$) está regido por la distribución F de Fisher. Este enfoque es el adecuado estadísticamente cuando se comparan dos dispersiones poblacionales bajo la suposición de Normalidad."
  },
  {
    "q": "Si queremos estimar $p$, y encontramos que $n=10$ y tenemos 3 éxitos ($x=3$), ¿qué método de IC sería más fiable en términos de cobertura garantizada?",
    "opts": [
      "El método Wald, ya que es el más simple de aplicar con cualquier muestra.",
      "El método Clopper-Pearson, pues garantiza una cobertura exacta basada en la distribución binominal.",
      "El método Agresti-Coull, ya que ajusta la estimación para muestras pequeñas sin sacrificar demasiada complejidad.",
      "El IC basado en $Z$ (aproximación normal), siempre y cuando $n \\ge 10$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Cuando las muestras son pequeñas o los valores de $\\hat{p}$ están cerca de 0 o 1, el Clopper-Pearson es superior porque su base binomial lo garantiza. Agresti-Coull también mejora significativamente sobre Wald en estas condiciones."
  },
  {
    "q": "¿Cuál es la principal desventaja conceptual al usar un IC para proporción ($p$) basado únicamente en la aproximación normal (Wald)?",
    "opts": [
      "Que ignora completamente el tamaño de la muestra $n$.",
      "Que su distribución se vuelve extremadamente asimétrica cerca de los extremos (0 y 1), lo que anula la aproximación normal.",
      "Que tiende a subestimar la verdadera varianza cuando las muestras son muy pequeñas.",
      "Que solo puede calcularse si la proporción observada $\\hat{p}$ es exactamente $0.5$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El problema principal del método Wald es que la distribución muestral no es perfectamente normal cerca de los límites (0 y 1), causando una cobertura deficiente en muestras pequeñas o proporciones extremas."
  },
  {
    "q": "¿Qué se debe tener en cuenta al interpretar un intervalo de confianza para $\\sigma^2$?",
    "opts": [
      "El valor del IC representa el rango más probable de valores que podría tomar la varianza poblacional.",
      "Debemos interpretar este intervalo como si estuviera dando una certeza sobre la desviación típica ($\\sigma$).",
      "Su interpretación es sensible a si se utiliza la distribución $Z$ o $\\chi^2$.",
      "Solo puede interpretarse en unidades cuadradas, nunca en unidades lineales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El intervalo para $\\sigma^2$ es un rango de valores posibles para la varianza. Es crucial recordar que este intervalo está en términos de varianza ($\\sigma^2$), no de desviación típica ($\\sigma$). La primera opción es la definición correcta."
  },
  {
    "q": "¿Cuál es el propósito del parámetro 'Grados de Libertad' ($df$) al calcular el IC para $\\sigma^2$?",
    "opts": [
      "Define la cantidad de información muestral disponible después de estimar la media, siendo típicamente $n-1$.",
      "Asegura que la varianza poblacional sea tratada como una constante conocida durante el proceso inferencial.",
      "Determina qué distribución (Z o T) debe usarse en el cálculo.",
      "Solo es relevante si se está calculando un IC para medias ($\\mu$)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los grados de libertad ($n-1$) son esenciales porque definen la forma específica de la distribución $\\chi^2$ utilizada. Esto afecta directamente los valores críticos usados para determinar los límites del intervalo."
  },
  {
    "q": "¿Qué diferencia existe conceptualmente entre el IC para $p$ y el IC para $\\sigma^2$?",
    "opts": [
      "El IC para $p$ usa una aproximación normal por simplicidad, mientras que el de $\\sigma^2$ requiere la distribución $\\chi^2$.",
      "El intervalo para $p$ se basa en conteos binominales (éxitos/fracasos), mientras que el de $\\sigma^2$ se basa en las desviaciones cuadráticas.",
      "Ambos requieren asumir normalidad, lo cual es una limitación común al trabajar con varianzas y proporciones.",
      "El intervalo para $p$ siempre será simétrico, a diferencia del IC para $\\sigma^2$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Aunque ambos son intervalos de confianza, la base estadística es diferente: $p$ se basa en eventos discretos (binomios), mientras que $\\sigma^2$ se basa en el comportamiento continuo de las variaciones bajo la suposición normal."
  },
  {
    "q": "¿Por qué al calcular un IC para $\\sigma$, nunca debemos tomar simplemente la raíz cuadrada del límite inferior y superior calculados directamente en términos de $s$?",
    "opts": [
      "Porque aplicar la raíz a los límites del IC para $\\sigma^2$ puede llevar a una subestimación sesgada del valor real.",
      "La función $f(x) = \\sqrt{x}$ es concava, y aplicar raíz cuadrada a los extremos asimétricamente distribuidos genera errores significativos.",
      "Debido a que el cálculo no se basa en un método transformado, sino que requiere el uso directo de la distribución $\\chi^2$.",
      "Es estadísticamente incorrecto porque se debe utilizar siempre la transformación logarítmica en este caso."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La razón principal por la que tomar $\\sqrt{L_{low}}$ y $\\sqrt{L_{high}}$ es problemático es debido a la naturaleza de la raíz cuadrada (función concava). Esto distorsiona el intervalo ya asimétrico derivado del $\\chi^2$."
  },
  {
    "q": "¿Qué escenario justifica el uso del IC para cociente de varianzas ($\\sigma_1^2 / \\sigma_2^2$) en lugar de simplemente comparar las desviaciones estándar ($s_1/s_2$)?",
    "opts": [
      "Cuando se asume que ambos grupos son normales e independientes, y se desea saber si la dispersión relativa es significativamente diferente.",
      "Porque el uso del cociente mantiene la linealidad matemática necesaria para usar la distribución F.",
      "Solo se puede calcular cuando $n_1 = n_2$.",
      "Comparar desviaciones estándar siempre es más fácil que usar la razón de varianzas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El IC para el cociente de varianzas (usando F) es el método formal correcto. Permite cuantificar si existe una diferencia significativa en la dispersión relativa entre los grupos, lo cual tiene aplicaciones críticas en análisis de residuos o modelos de regresión."
  },
  {
    "q": "¿Cuáles son las principales ventajas o consideraciones al seleccionar un método para construir IC de proporciones (p)?",
    "opts": [
      "El método Wald es el más sencillo y fácil de aplicar.",
      "Los métodos Agresti-Coull o Wilson mejoran la cobertura real del intervalo en comparación con Wald, especialmente con muestras pequeñas.",
      "La aproximación normal se garantiza independientemente del tamaño muestral ($n$).",
      "El IC Clopper-Pearson utiliza una distribución binomial exacta sin depender de grandes valores $np$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Wald es sencillo (Ventaja), pero Wilson y Agresti-Coull son preferibles por su mejor rendimiento de cobertura. La aproximación normal falla cuando $n$ es pequeño o $p$ es extremo."
  },
  {
    "q": "¿Cuáles de los siguientes métodos se utilizan típicamente para construir un Intervalo de Confianza para una proporción $p$?",
    "opts": [
      "Wald (aproximación normal): Fórmula simple y fácil, pero puede fallar si la muestra es pequeña o $p̂$ está cerca de 0 o 1.",
      "Wilson Score: Es considerado un método superior al Wald porque mantiene mejores propiedades de cobertura en condiciones marginales.",
      "Clopper-Pearson: Es conocido por ser un método exacto basado directamente en la distribución Binomial, sin depender de aproximaciones normales.",
      "Distribución t de Student: Este método es incorrecto, ya que las proporciones no siguen esta distribución."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Wald, Wilson y Clopper-Pearson son los métodos más comunes. Wald es el más simple pero menos robusto. Wilson mejora la cobertura. Clopper-Pearson garantiza una cobertura correcta por definición Binomial."
  },
  {
    "q": "¿Qué significa interpretar un IC para la varianza $\\sigma^2$ con un intervalo [Límite Inferior, Límite Superior]? ",
    "opts": [
      "Que se tiene una alta probabilidad de que el verdadero valor de $\\sigma^2$ caiga dentro de este rango.",
      "Si tomamos cualquier valor $V$ de este intervalo, es plausible que sea la varianza poblacional verdadera.",
      "El límite superior no puede ser negativo, pues la varianza es siempre positiva.",
      "La distancia entre los límites indica la precisión con la que hemos estimado $\\sigma^2$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un IC nos da un rango plausible. Los límites definen el margen de error (precisión). Y por definición matemática, la varianza ($\\sigma^2$) debe ser no negativa, lo que es una restricción física/estadística importante."
  },
  {
    "q": "¿Cuáles son características correctas al comparar los métodos para construir un Intervalo de Confianza (IC) para una proporción $p$?",
    "opts": [
      "El método Clopper-Pearson proporciona la garantía de cobertura más alta y es exacto, basado en la distribución Binomial.",
      "Los métodos basados en el límite normal (como Wald) son fáciles de calcular pero su rendimiento puede ser pobre cuando los valores esperados $n\\hat{p}$ o $n(1-\\hat{p})$ son pequeños.",
      "El método Agresti-Coull mejora la estabilidad y la cobertura al añadir pseudo-observaciones ($n' = n \\pm 2$ y $x' = x \\pm 2$) en comparación con Wald.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres puntos son correctos. Clopper-Pearson es exacto por definición binomial; Wald es sencillo pero poco preciso bajo condiciones extremas o $n$ pequeño; y Agresti-Coull corrige la varianza al añadir pseudo-observaciones, mejorando notablemente el rendimiento sobre Wald."
  },
  {
    "q": "¿Cuáles son propiedades esenciales al construir un IC para el cociente de varianzas $\\sigma_1^2 / \\sigma_2^2$?",
    "opts": [
      "Se debe utilizar la distribución F de Fisher, que es apropiada para comparar razones de varianzas de dos poblaciones independientes.",
      "Los grados de libertad deben especificarse cuidadosamente: $df_1 = n_1 - 1$ y $df_2 = n_2 - 1$.",
      "El IC debe ser construido como un intervalo de razón, usando la relación $\\frac{\\sigma_1^2/\\sigma_2^2}{\\chi^2_{1-\\alpha/2, df_1} / \\chi^2_{\\alpha/2, df_2}}$. ",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres puntos son correctos. La distribución F es la herramienta clave para este tipo de comparación, y el cálculo requiere especificar los grados de libertad apropiados para cada varianza."
  },
  {
    "q": "¿Cuáles deben cumplirse las condiciones muestrales necesarias antes de aplicar fórmulas estándar para un IC de proporción $p$?",
    "opts": [
      "$n\\hat{p} \\ge 5$ y $n(1-\\hat{p}) \\ge 5$, lo que asegura la aproximación Normal.",
      "El tamaño muestral $n$ debe ser grande, típicamente $n > 30$.",
      "La variable de estudio debe seguir una distribución Binomial (ya que las proporciones son cuentas discretas).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Aunque es más estricto el requisito binomial ($n\\hat{p} \\ge 5$), la condición $n>30$ y la naturaleza discreta de las proporciones refuerzan que los tres puntos son condiciones requeridas o relevantes para una estimación válida."
  },
  {
    "q": "¿Qué tipo de información se obtiene al construir un IC para el cociente de varianzas $\\sigma_1^2 / \\sigma_2^2$?",
    "opts": [
      "Permite estimar la razón relativa de la dispersión entre dos poblaciones",
      "Es fundamental en pruebas de igualdad de varianzas (como la prueba F)",
      "Asume que las muestras son independientes y normales",
      "Solo puede calcularse si los tamaños muestrales ($n_1$ y $n_2$) son iguales"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El IC para $\\sigma_1^2 / \\sigma_2^2$ estima la razón relativa de varianzas (interpretación). Este IC se basa en la distribución F de Fisher y su uso principal es determinar si las varianzas poblacionales son iguales (prueba de hipótesis)."
  },
  {
    "q": "¿Cuáles son las principales limitaciones al utilizar el intervalo de confianza de Wald (basado en la aproximación Normal) para una proporción p?",
    "opts": [
      "Es muy sensible a tamaños muestrales pequeños ($n$) o proporciones extremas ($\\hat{p}$ cerca de 0 o 1).",
      "Asume que la distribución binomial se comporta como normal incluso con datos poco representativos.",
      "Su cobertura suele ser menor (más sesgada) en comparación con métodos más robustos.",
      "Es el método más simple y rápido de calcular, sin importar las condiciones."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El método de Wald es conceptualmente sencillo, pero su validez depende de que $n\\hat{p}$ y $n(1-\\hat{p})$ sean grandes. Sus principales fallas ocurren cuando $\\hat{p}$ está cerca de los límites (0 o 1) o cuando $n$ es pequeño, lo cual reduce su cobertura real."
  },
  {
    "q": "¿Qué características definen mejor a un intervalo de confianza para una proporción p?",
    "opts": [
      "Requiere calcular la desviación estándar muestral $s/\\sqrt{n}$.",
      "Su cálculo se basa en el Teorema Central Límite (TCL), usando una aproximación Normal.",
      "El método Agresti-Coull modifica los datos añadiendo pseudo-observaciones para mejorar la estabilidad.",
      "Es totalmente independiente de si la población sigue una distribución binomial."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un IC para p utiliza generalmente el TCL (método Wald). Sin embargo, en lugar de usar $s/\\sqrt{n}$ (que es para medias), se usa $\\hat{p}\\hat{q}/n$. La mejora viene de Agresti-Coull al 'ajustar' los datos. El hecho de que se base en Binomial lo hace dependiente del modelo."
  },
  {
    "q": "¿Cuáles son las propiedades fundamentales del método Clopper-Pearson para calcular el IC de una proporción?",
    "opts": [
      "Es un método exacto estadísticamente, ya que está basado directamente en la distribución binomial.",
      "Ofrece garantizada cobertura por encima de niveles nominales (ej. 95%), sin aproximaciones continuas.",
      "Tiende a ser más conservador o amplio que los métodos basados en Normal (Wald).",
      "Es el método más recomendado incluso cuando $n$ es pequeño."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Clopper-Pearson es considerado 'exacto' porque utiliza la distribución binomial sin aproximaciones continuas. Esto lo hace muy confiable y ligeramente más amplio (conservador) que Wald o Wilson."
  },
  {
    "q": "¿Qué métodos se pueden utilizar para construir un Intervalo de Confianza robusto para una proporción p, especialmente cuando los tamaños muestrales son pequeños?",
    "opts": [
      "El método Wilson (Score), que optimiza la cobertura en comparación con Wald.",
      "Añadir pseudo-observaciones como lo hace Agresti-Coull.",
      "Los métodos que incorporan cálculos exactos basados en distribución Binomial.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Wald falla con $n$ pequeño o $\\hat{p}$ extremo. Wilson es una mejora de puntuación (score). Agresti-Coull está diseñado para estabilizar el cálculo añadiendo puntos ficticios. Clopper-Pearson también cae en esta categoría al ser exacto."
  },
  {
    "q": "¿Cuáles son los pasos correctos para determinar el intervalo de confianza de una proporción p basado en la distribución binomial?",
    "opts": [
      "Estimar $\\hat{p} = x/n$ y usarlo como parámetro principal.",
      "Utilizar métodos basados en la aproximación Normal (Wald) o métodos exactos (Clopper-Pearson).",
      "Asegurarse siempre de que $n \\cdot p \\ge 10$ para garantizar convergencia.",
      "Verificar que el número de fracasos ($n-x$) sea al menos 5."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los pasos incluyen la estimación $\\hat{p}$ y luego aplicar un método (Normal o Binomial/Exacto). Si bien los requisitos varían ($\\ge 5$ es común), el enfoque metodológico clave es entender que se usa la Binomial para obtener límites exactos, o Normal para la aproximación."
  },
  {
    "q": "¿Cuáles de los siguientes métodos para calcular el IC de una proporción ($p$) son generalmente considerados más robustos o tienen mejor cobertura que el método simple de Wald?",
    "opts": [
      "Wilson (score) intervalo",
      "Agresti-Coull interval",
      "Clopper-Pearson intervalo",
      "IC basado en la aproximación Normal"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los métodos Wilson, Agresti-Coull y Clopper-Pearson son preferibles sobre Wald porque corrigen las deficiencias de cobertura cuando $n$ es pequeño o cuando $\\hat{p}$ está muy cerca de 0 o 1. El intervalo basado en la aproximación Normal (Wald) es el menos robusto."
  },
  {
    "q": "¿Cuáles son las propiedades del IC para el cociente de varianzas ($\\sigma_1^2 / \\sigma_2^2$)?",
    "opts": [
      "Utiliza la distribución F de Fisher",
      "Requiere que ambas poblaciones sean normales e independientes",
      "Sus grados de libertad están ligados a los tamaños muestrales $n_1$ y $n_2$",
      "Es un método altamente susceptible a valores atípicos (outliers)"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El IC para el cociente de varianzas utiliza la distribución F. Este método requiere que ambas variables sigan una normalidad y que las muestras sean independientes. Los grados de libertad son críticos en esta prueba."
  },
  {
    "q": "¿Cuáles de los siguientes conceptos se relacionan directamente con la interpretación de un IC para $\\sigma$? (Recordar que el IC para $\\sigma$ es la raíz cuadrada del IC para $\\sigma^2$).",
    "opts": [
      "Representa el rango plausible de valores para la desviación estándar poblacional",
      "Si $0 \\in (\\text{IC para } \\sigma)$, entonces no se puede hacer afirmación sobre la variabilidad.",
      "Su cálculo siempre implica transformar los límites superiores e inferiores del IC para $\\sigma^2$ mediante raíz cuadrada.",
      "Es un valor punto que estima el verdadero $\\sigma$ con alta confianza."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El intervalo de confianza para $\\sigma$ es la transformación (raíz) del CI de $\\sigma^2$. Si $0$ está dentro del intervalo, sugiere que no hay evidencia suficiente de variabilidad. No es un valor punto, sino un rango."
  },
  {
    "q": "¿Cuáles son las limitaciones o consideraciones importantes al seleccionar el método para el IC de proporciones ($p$)?",
    "opts": [
      "Wald puede fallar si $n\\hat{p}$ o $n(1-\\hat{p})$ son menores a 5.",
      "Wilson generalmente ofrece una mejor cobertura que Wald en la mayoría de los escenarios.",
      "El intervalo Clopper-Pearson es computacionalmente complejo y no asintótico.",
      "Todos los métodos convergen al mismo resultado cuando el tamaño muestral ($n$) tiende a infinito."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres puntos son correctos. Wald falla con $n$ pequeño o extremos de $\\hat{p}$. Wilson es superior a Wald en cobertura. Clopper-Pearson es exacto pero más complejo; y teóricamente, todos convergen, pero en la práctica hay diferencias notables."
  },
  {
    "q": "¿Cuáles son los pasos correctos para construir un IC para el cociente de varianzas ($\\sigma_1^2 / \\sigma_2^2$) utilizando la distribución F?",
    "opts": [
      "Se calculan las razones extremas $F_{\\alpha/2}$ y $F_{1-\\alpha/2}$ usando los grados de libertad apropiados.",
      "El límite inferior es el cociente más pequeño, y el límite superior es el cociente más grande.",
      "Los grados de libertad utilizados son directamente $(n_1-1)$ y $(n_2-1)$.",
      "Es necesario transformar primero las varianzas muestrales a la escala Z antes de usar F."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La construcción implica el uso de $F$ con los grados de libertad apropiados. Los límites son el cociente de variables que dan el valor más pequeño/grande (utilizando las propiedades inversas de la distribución F). El tercer punto es correcto porque usamos $n-1$ para ambos."
  },
  {
    "q": "¿Cuáles son los conceptos clave sobre la relación entre varianza ($\\sigma^2$) y desviación típica ($\\sigma$)?",
    "opts": [
      "La Desviación Típica ($\\sigma$) siempre debe ser utilizada en todos los IC estadísticos.",
      "El CI de $\\sigma$ se obtiene mediante raíz cuadrada del CI de $\\sigma^2$.",
      "Ambos parámetros son medidas de dispersión, pero la varianza no tiene unidades físicas claras sin contexto.",
      "La transformación de $\\sigma^2 \\to \\sigma$ es lineal y simple."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El CI de $\\sigma$ se deriva de $\\sigma^2$. Ambos son medidas de dispersión. La varianza tiene unidades cuadradas (ej: $km^2$), por eso la desviación típica es más interpretable en las unidades originales. La transformación NO es lineal."
  },
  {
    "q": "¿Cuáles de estos enunciados describen correctamente el propósito del intervalo de confianza para una proporción ($p$)?",
    "opts": [
      "Estimar el rango plausible del verdadero parámetro poblacional $p$.",
      "Permitir la toma de decisiones sobre si la proporción observada difiere significativamente de un valor nulo hipotético.",
      "Son cruciales en estudios de control de calidad o encuestas políticas.",
      "Su interpretación requiere siempre el uso de valores t-Student, no Z."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El propósito principal es estimar un rango poblacional. También permite pruebas de hipótesis (si el valor nulo cae fuera del IC, se rechaza $H_0$). Son útiles en la práctica. Sin embargo, dado que usamos grandes muestras o aproximaciones normales, generalmente usamos Z, no t-Student."
  },
  {
    "q": "¿Cuáles son las implicaciones prácticas de utilizar el intervalo Wald para proporciones ($p$)?",
    "opts": [
      "Es muy sencillo de calcular y entender conceptualmente.",
      "Tiende a subestimar la verdadera variabilidad cuando $n$ es pequeño o $\\hat{p}$ está en los extremos (0, 1).",
      "Su uso es el estándar industrial si se cumple la condición de éxito/fracaso.",
      "Suele tener mejor rendimiento asintótico que Wilson o Agresti-Coull en muestras grandes."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Wald es simple y usado a menudo por su simplicidad conceptual. Su principal falla es el sesgo (subestimar variabilidad) en muestras pequeñas o extremas. Aunque se usa mucho, la mejor cobertura suele ser de Wilson o Agresti-Coull."
  },
  {
    "q": "¿Cuáles son los criterios que rigen el uso del IC para cociente de varianzas ($\\sigma_1^2 / \\sigma_2^2$)?",
    "opts": [
      "Se requiere la independencia entre las dos muestras (nuestra y control).",
      "El método es apropiado si se sospecha que la relación entre $\\sigma_1^2$ y $\\sigma_2^2$ no es 1.",
      "Requiere asumir una distribución normal en ambas poblaciones.",
      "La interpretación de un límite fuera de [0, 1] debe hacerse con precaución estadística."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La independencia y la sospecha de que el cociente no es 1 son fundamentales. Si el IC contiene valores muy alejados de 1 (por ejemplo, un límite superior de 5), se debe interpretar cuidadosamente si esa discrepancia es estadísticamente significativa o simplemente debido a la cola de la distribución F."
  },
  {
    "q": "¿Cuáles son las principales diferencias conceptuales entre los métodos Wilson y Agresti-Coull para IC de proporciones?",
    "opts": [
      "Ambos añaden términos extra para estabilizar el cálculo cerca de los extremos.",
      "Wilson utiliza un método de 'score' que minimiza la varianza asintóticamente.",
      "El intervalo Wilson no requiere verificar la condición $np \\ge 5$.",
      "Agresti-Coull es conceptualmente más simple porque solo suma ajustes binomiales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Ambos son superiores a Wald en el manejo de extremos. El método de Wilson es un ajuste más sofisticado basado en optimización (score). Agresti-Coull simplemente ajusta contando pseudo-observaciones. Ambos evitan la dependencia estricta de $n$ grande."
  },
  {
    "q": "Respecto al Intervalo de Confianza (IC) para la varianza poblacional $\\sigma^2$, ¿qué afirmaciones son correctas?",
    "opts": [
      "El método utiliza la distribución $F$ de Fisher.",
      "Es un intervalo inherentemente asimétrico, lo cual debe considerarse en su interpretación.",
      "Para construirlo se requiere que la población subyacente siga una distribución normal.",
      "La raíz cuadrada de los límites del IC para $\\sigma^2$ siempre resulta en el IC correcto para $\\sigma$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El IC para $\\sigma^2$ depende de la estadística $Z^2 = \\frac{(n-1)s^2}{\\sigma^2}$, que sigue una distribución Chi-Cuadrado ($\\chi^2$). Por lo tanto, el método usa $\\chi^2$, es asimétrico y requiere Normalidad. Sin embargo, tomar simplemente la raíz cuadrada de los extremos del IC para $\\sigma^2$ no garantiza un IC correcto o con cobertura adecuada para $\\sigma$."
  },
  {
    "q": "¿Qué métodos para la construcción de IC para proporciones son preferibles a Wald, especialmente cuando las muestras son pequeñas o las estimaciones están en los extremos (cercanos a 0 o 1)?",
    "opts": [
      "El método Wilson (score)",
      "El método Agresti-Coull (AC)",
      "El método Clopper-Pearson (CP)",
      "Solo el uso de la distribución Z estandarizada"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los métodos Wilson, Agresti-Coull y Clopper-Pearson son considerados superiores a Wald porque manejan mejor los límites (bordes) de la probabilidad. Wilson usa una transformación 'score', AC añade pseudo-observaciones, y CP es un método exacto basado en la distribución binomial."
  },
  {
    "q": "¿Cuáles son características fundamentales del IC para la desviación típica ($\\sigma$) en comparación con el IC para la varianza ($\\sigma^2$)?",
    "opts": [
      "Siempre debe ser construido tomando la raíz cuadrada de los límites superior e inferior del IC de $\\sigma^2$",
      "Su distribución es compleja y no sigue una ley conocida simple",
      "Requiere asumir normalidad poblacional, al igual que su contraparte en varianza",
      "Es siempre más fácil de interpretar que el intervalo para $\\sigma^2$"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El IC para $\\sigma$ se obtiene típicamente tomando la raíz cuadrada de los límites del IC para $\\sigma^2$. Además, dado que depende de la varianza y es sensible a sus propiedades, también requiere el supuesto de normalidad poblacional. Su distribución propia no es simple (es altamente sesgada)."
  },
  {
    "q": "Respecto a los métodos de construcción de IC para una proporción poblacional ($p$), ¿qué afirmaciones son correctas?",
    "opts": [
      "El método Clopper-Pearson es considerado un método exacto, basado en la distribución binomial.",
      "El método Wald es el más sencillo de calcular, pero su rendimiento puede ser pobre si $n$ o $np$ son muy pequeños.",
      "Los métodos Agresti-Coull y Wilson mejoran la cobertura del intervalo respecto al método Wald añadiendo ajustes pseudo-observaciones.",
      "La condición para aplicar cualquier IC en proporciones ($np \\ge 5$ y $n(1-p) \\ge 5$) solo es necesaria si el tamaño de la muestra $n$ es muy pequeño."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Clopper-Pearson proporciona una garantía de cobertura exacta. Wald es simple pero falla con $np$ pequeños. Agresti-Coull y Wilson son mejoras robustas sobre Wald al incorporar ajustes ('pseudo-observaciones') para mejorar la precisión en casos difíciles."
  },
  {
    "q": "Al construir un IC para $\\sigma$, ¿cuál método debe seguirse y cuáles son las características clave de este intervalo?",
    "opts": [
      "Se calcula directamente aplicando el error estándar a $s$.",
      "Requiere calcular primero los límites del IC para $\\sigma^2$ usando la distribución $\\chi^2$.",
      "El resultado es típicamente asimétrico, pues se deriva de una función raíz cuadrada aplicada a un límite $\\chi^2$.",
      "Siempre resulta ser simétrico y normal, independientemente del tamaño muestral."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El IC para $\\sigma$ no es directo. Primero se encuentra $IC(\\sigma^2)$ usando $\\chi^2$, y luego se aplica la raíz cuadrada a los límites (superior e inferior). Dado que el intervalo de varianza es altamente asimétrico, este proceso mantiene la asimetría en $\\sigma$."
  },
  {
    "q": "¿Cuáles son interpretaciones correctas sobre la relación entre el IC para $\\sigma^2$ y su raíz cuadrada ($\\sigma$)?",
    "opts": [
      "El intervalo construido para $\\sigma$ debe ser simplemente la raíz cuadrada de los extremos del IC de $\\sigma^2$.",
      "Dado que el estadístico $\\chi^2$ es asimétrico, el IC resultante para $\\sigma$ también será inherentemente asimétrico.",
      "Los métodos basados en transformaciones (como $sqrt(\\text{IC}_{\\sigma^2})$) a menudo subestiman la variabilidad real de $\\sigma$.",
      "Siempre se debe trabajar con $\\sigma^2$ y evitar calcular directamente el IC para $\\sigma$, ya que es más fácil."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Es un teorema conocido en estadística inferencial que tomar la raíz cuadrada de los extremos del intervalo de varianza da una aproximación razonable al intervalo de desviación típica. Además, debido a la asimetría del $\\chi^2$, el IC para $\\sigma$ también lo será."
  },
  {
    "q": "¿En un escenario de comparación de dos proporciones ($p_1$ vs $p_2$), ¿cuáles son los cálculos y conceptos clave que deben manejarse?",
    "opts": [
      "El IC para la diferencia $\\hat{p}_1 - \\hat{p}_2$ se construye usando el estadístico Z normal, asumiendo varianzas independientes.",
      "Si el intervalo de confianza incluye cero (0), esto sugiere que no hay evidencia estadística suficiente para afirmar una diferencia significativa entre $p_1$ y $p_2$.",
      "La hipótesis nula ($H_0: p_1 = p_2$) es rechazada únicamente si los intervalos son mutuamente excluyentes.",
      "El IC para el cociente $\\sigma_1^2 / \\sigma_2^2$ requiere la distribución F de Fisher, independientemente si se trabaja con promedios o proporciones."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El IC para la diferencia de medias o proporciones usa Z. Si $0$ está contenido en el intervalo, no hay evidencia significativa ($H_0$ no se rechaza). El cociente de varianzas utiliza F."
  },
  {
    "q": "¿Qué implica el cálculo del Intervalo de Confianza (IC) para el cociente de varianzas ($\\sigma_1^2 / \\sigma_2^2$) y qué prueba estadística es crucial?",
    "opts": [
      "Este IC se construye utilizando la distribución $F$ de Fisher con grados de libertad $\nu_1$ y $\nu_2$.",
      "El estadístico clave para este intervalo es el cociente de varianzas muestrales $(s_1^2 / s_2^2)$.",
      "Este IC se usa principalmente en contextos de comparación de procesos de medición, donde la relación varíancial es fundamental.",
      "La interpretación del valor crítico F debe relacionarse con la razón entre las variances poblacionales bajo $H_0$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El uso de la distribución F (cociente de dos $\\chi^2$ normalizados) es exclusivo para comparar o intervalar cocientes de varianzas. Los grados de libertad son los tamaños muestrales menos uno ($\nu_1 = n_1-1$, etc.)."
  },
  {
    "q": "Al construir un intervalo de confianza para la proporción poblacional ($p$), ¿cuáles son los métodos más robustos en términos de cobertura, especialmente cuando $n$ es pequeño?",
    "opts": [
      "El método Wilson (score)",
      "El método Clopper-Pearson",
      "El método Agresti-Coull",
      "El método Wald"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los métodos Wilson y Clopper-Pearson son considerados los más robustos porque no se basan en la aproximación normal de la Binomial. El método Agresti-Coull mejora significativamente el rendimiento del IC comparado con Wald al añadir pseudo-observaciones (generalmente $Z=2$ éxito y $N-Z=2$ fracaso), lo que es más fiable para muestras pequeñas."
  },
  {
    "q": "En el contexto de la construcción de intervalos de confianza para proporciones, ¿cuáles son las condiciones o propiedades asociadas a la aproximación normal utilizada por métodos como Wald?",
    "opts": [
      "Requiere que el tamaño muestral sea suficientemente grande ($np̂ \\geq 5$ y $n(1-\\hat{p}) \\geq 5$)",
      "Su cálculo es simple de aplicar analíticamente",
      "La distribución se aproxima a una distribución normal (asintóticamente)",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El método Wald asume que la distribución Binomial puede aproximarse por una Normal. Esta aproximación solo es válida si el tamaño muestral $n$ y los parámetros $\\hat{p}$ son lo suficientemente grandes para asegurar la normalidad de la distribución binomial (condición práctica)."
  },
  {
    "q": "Respecto a la comparación entre métodos para IC de proporciones, ¿cuáles afirmaciones son correctas sobre sus fortalezas y debilidades?",
    "opts": [
      "Wald es fácil de calcular pero tiene baja cobertura en extremos",
      "Wilson ofrece mejor cobertura que Wald debido a su forma más precisa",
      "Agresti-Coull corrige el problema de la varianza estimada para muestras pequeñas",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La principal debilidad del método Wald es su bajo rendimiento (baja cobertura) cuando $p$ está cerca de 0 o 1, o si $n$ es pequeño. Wilson y Agresti-Coull son mejoras que corrigen esta subestimación de la varianza para aumentar la fiabilidad del intervalo."
  },
  {
    "q": "Al construir el IC para $\\sigma_1^2 / \\sigma_2^2$ utilizando la distribución $F$, ¿cuáles son los elementos clave que deben determinarse?",
    "opts": [
      "Los grados de libertad (v1, v2) y los percentiles deseados ($\\alpha/2$ y $1-\\alpha/2$)",
      "Se requiere realizar una transformación logarítmica para aproximar el intervalo",
      "La distribución F es asimétrica en la región del cociente",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El IC basado en $F$ depende directamente de los grados de libertad (de cada muestra) y del nivel de confianza deseado. Aunque la transformación logarítmica puede ser útil conceptualmente, el método formal utiliza directamente la distribución F."
  },
  {
    "q": "Cuando comparamos los IC de proporciones, ¿cuáles consideraciones impactan directamente su selección y rendimiento?",
    "opts": [
      "La proximidad del $\\hat{p}$ a 0 o 1 (bordes)",
      "El tamaño muestral $n$ respecto a la estabilidad asintótica",
      "Si se busca una cobertura estadística garantizada en lugar de solo simplicidad matemática",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La elección del método debe considerar si el estimador está cerca de los límites (bordes), si el $n$ es suficiente para la aproximación normal y si la prioridad es un rendimiento estadístico (cobertura) sobre la facilidad de cálculo."
  },
  {
    "q": "Cuando se compara el IC de proporción (Métodos Wald vs Wilson), ¿cuál es la principal ventaja del método Wald?",
    "opts": [
      "Es extremadamente fácil y rápido de calcular a mano",
      "Su fórmula es conceptualmente simple para estudiantes principiantes",
      "Requiere solo los parámetros $n$ y $\\hat{p}$ sin condiciones adicionales",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La principal ventaja del método Wald no es su precisión, sino su simplicidad matemática. Es el más directo de usar conceptualmente: simplemente calcular un margen de error basado en la aproximación normal."
  },
  {
    "q": "¿Cuáles condiciones deben cumplirse al construir un Intervalo de Confianza (IC) para proporciones utilizando el método Wald?",
    "opts": [
      "El tamaño muestral $n$ debe ser suficientemente grande.",
      "$np̂ \\ge 5$ y $n(1-\\hat{p}) \\ge 5$.",
      "La población debe seguir una distribución normal estricta.",
      "Se debe utilizar la aproximación binomial de Poisson."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El método Wald es un enfoque asintótico que requiere muestras grandes. La condición práctica más comúnmente citada y necesaria para su validez es $np̂ \\ge 5$ y $n(1-\\hat{p}) \\ge 5$. Además, este método falla cuando la proporción $\\hat{p}$ está muy cerca de 0 o 1."
  },
  {
    "q": "¿Cuándo se recomienda utilizar el Intervalo de Confianza (IC) para la varianza ($\\sigma^2$) en lugar del IC para la desviación típica ($\\sigma$)?",
    "opts": [
      "Cuando se trabaja con modelos de regresión donde $\\sigma^2$ es parametrizado.",
      "Porque los cálculos basados en $\\chi^2$ son más directos.",
      "Si el objetivo final es realizar comparaciones de cocientes de varianzas (ej. ratio $F$).",
      "Siempre que haya evidencia de que la población no es normal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los modelos estadísticos avanzados y los cálculos en regresión suelen trabajar con $\\sigma^2$. Además, el uso del estadístico $F$ para comparar ratios de varianzas (que usa $\\sigma^2$) hace que sea más conveniente usar la escala de la varianza. Finalmente, la normalidad es un requisito asumido."
  },
  {
    "q": "¿Por qué la interpretación del IC de $\\sigma^2$ es crucial en estadística aplicada?",
    "opts": [
      "Permite determinar si dos varianzas poblacionales son significativamente diferentes.",
      "Indica el rango plausible donde se encuentra la dispersión verdadera de los datos.",
      "Es fundamental para modelar la incertidumbre y la heterogeneidad en múltiples variables.",
      "Solo puede usarse cuando $n$ es muy grande ($n \\to \\infty$)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El IC para $\\sigma^2$ nos da un rango de valores plausibles para la dispersión real. Esto es vital en modelos (opción 3) porque permite cuantificar cuán variable debe ser el error residual o la variabilidad entre grupos."
  },
  {
    "q": "¿Cuál es la principal limitación del método Wald al estimar IC para proporciones?",
    "opts": [
      "Tiende a tener una cobertura insuficiente cuando $n$ es pequeño.",
      "Puede volverse inestable si $\\hat{p}$ está muy cerca de 0 o 1.",
      "Asume que el proceso generador sigue una distribución Binomial perfecta sin considerar errores de muestreo.",
      "Ignora la naturaleza discreta del conteo de éxitos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La principal debilidad de Wald es su dependencia de aproximaciones asintóticas. Falla o se vuelve poco preciso cuando el tamaño muestral $n$ es pequeño, o cuando $\\hat{p}$ está muy pegado a los extremos (0 o 1), ya que la distribución normal no modela bien las colas del proceso Binomial."
  },
  {
    "q": "Respecto a los Intervalos de Confianza para proporciones ($p$) y su cálculo, ¿qué afirmación es correcta?",
    "opts": [
      "El criterio de normalidad para la aproximación Z se cumple si $n\\hat{p} \\ge 5$ y $n(1-\\hat{p}) \\ge 5$, lo que garantiza una buena simulación binomial.",
      "Añadir pseudo-observaciones (como en Agresti-Coull) es útil principalmente porque compensa el sesgo de la estimación puntual cuando se trabaja con tamaños muestrales pequeños.",
      "En las proporciones, un IC calculado debe siempre estar acotado entre 0 y 1, ya que $p$ está intrínsecamente limitado a este rango.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El requisito de normalidad es crucial (Opción 1). Agresti-Coull corrige el sesgo en muestras pequeñas al 'añadir' pseudo-observaciones (Opción 2), y por definición, la proporción $p$ nunca puede ser menor que cero ni mayor que uno (Opción 3)."
  },
  {
    "q": "Cuando se construye un IC para una diferencia de proporciones ($p_1 - p_2$), ¿qué consideraciones son fundamentales?",
    "opts": [
      "Se debe asumir la independencia entre las muestras o grupos, ya que esto afecta la varianza combinada utilizada en el cálculo del error estándar.",
      "El método normal aproximado utiliza la suma de las varianzas individuales, $\\text{Var}(p_1 - p_2) = \\frac{p_1(1-p_1)}{n_1} + \\frac{p_2(1-p_2)}{n_2}$.",
      "Es crucial recordar que el valor del IC se interpreta como un rango de valores poblacionales, no como una probabilidad de ocurrencia en las muestras.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La validez estadística depende de la independencia (Opción 1), y el cálculo estándar para el error está basado en la suma de varianzas individuales (Opción 2). La interpretación de cualquier IC es siempre sobre los parámetros poblacionales, no sobre las muestras específicas obtenidas (Opción 3)."
  },
  {
    "q": "Considere la construcción de un Intervalo de Confianza para el cociente de varianzas ($\\sigma_1^2 / \\sigma_2^2$). ¿Qué puntos son relevantes?",
    "opts": [
      "Se debe utilizar la distribución F de Fisher, ya que esta distribución está diseñada específicamente para comparar razones de varianzas normalizadas.",
      "El IC se calcula típicamente ajustando los grados de libertad bajo el ratio $F = (\\frac{s_1}{s_2})^2$.",
      "Un resultado muy grande o muy pequeño en este IC puede indicar que la suposición de que ambas poblaciones siguen una distribución normal podría ser incorrecta, requiriendo métodos no paramétricos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La razón de varianzas requiere el uso formal de la distribución F (Opción 1). La construcción del intervalo implica manipular los grados de libertad y las estimaciones de desviación típica muestral elevadas al cuadrado (Opción 2). Si la normalidad se viola, toda la teoría subyacente falla (Opción 3)."
  },
  {
    "q": "En el contexto general de intervalos de confianza paramétricos, ¿qué afirmaciones son correctas?",
    "opts": [
      "La mayoría de los ICs calculados están basados en la aproximación normal a distribuciones más complejas.",
      "La cobertura del intervalo está determinada por el nivel de confianza ($\\alpha$), no por el tamaño muestral ($n$).",
      "Para que un IC sea válido, debe cumplirse la condición de que las estimaciones puntuales sean consistentes y asintóticamente normales.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La teoría estadística se apoya fuertemente en el Teorema del Límite Central (TLC), justificando la aproximación normal (Opción 1). Sin embargo, la cobertura es *dependiente* de $n$ y $\\alpha$. La opción correcta implica que la confianza está dada por el nivel ($\\alpha$), pero no ignora a $n$, aunque se acepta como regla conceptual. Lo más importante es la consistencia y normalidad asintótica (Opción 3)."
  },
  {
    "q": "Al analizar ICs para varianzas, ¿cuál de estas afirmaciones describe correctamente su comportamiento o limitación?",
    "opts": [
      "El intervalo de confianza para $\\sigma^2$ siempre se expresará en unidades cuadráticas (unidades$^2$), lo que lo hace más difícil de interpretar directamente.",
      "La estimación del error estándar basado en la varianza es inherentemente menos precisa que el usado para medias porque requiere dos pasos: IC para $\\sigma^2$, luego raíz cuadrada para $\\sigma$.",
      "Si una muestra es extremadamente pequeña ($n < 5$), cualquier aproximación paramétrica de intervalos se vuelve altamente inestable y poco fiable.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El resultado del IC para varianza siempre tendrá unidades cuadráticas (Opción 1). La estimación de $\\sigma$ es susceptible a errores de propagación (Opción 2), y además, el tamaño muestral pequeño afecta drásticamente la precisión de cualquier parámetro poblacional estimado (Opción 3)."
  },
  {
    "q": "Considere los diferentes métodos para calcular ICs de proporciones. ¿Cuáles son sus propiedades clave?",
    "opts": [
      "Wald es fácil de implementar por su simplicidad algebraica y uso del Z-score, lo que lo hace ideal en entornos de programación automática.",
      "El método Agresti-Coull corrige el sesgo biascado al estimador $\\hat{p}$ (especialmente con $n$ pequeño) mediante la adición de pseudo-observaciones $(+2/n)$.",
      "Ningún método es universalmente superior; la elección debe basarse en si se prioriza la exactitud teórica (Clopper-Pearson) o el rendimiento asintótico (Wilson).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Wald destaca por su facilidad de uso (Opción 1). Agresti-Coull es una corrección específica para muestras pequeñas que maneja el sesgo (Opción 2). Finalmente, no hay un método perfecto; la elección depende del contexto y el objetivo estadístico (Opción 3)."
  },
  {
    "q": "Un investigador desea construir ICs de proporciones. ¿Cuáles son las trampas conceptuales o errores a evitar?",
    "opts": [
      "Confundir el intervalo de confianza con un intervalo de probabilidad; el IC no es una probabilidad de que la $p$ real caiga en ese rango, sino un procedimiento que genera rangos confiables.",
      "No se debe asumir simetría simplemente porque estamos usando la aproximación normal. La asimetría puede persistir si $n$ es pequeño o $\\hat{p}$ está cerca de los límites (0 o 1).",
      "El IC para una proporción siempre requiere saber el nivel de significancia ($\\alpha$) previamente, lo que debe ser establecido antes de cualquier cálculo muestral.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Es un error común confundir la semántica del IC con probabilidad (Opción 1). La aproximación normal puede fallar en el extremo debido a límites biológicos como $p \\ge 0$ y $p \\le 1$, generando asimetría (Opción 2). Finalmente, $\\alpha$ es un hiperparámetro crucial que debe fijarse antes de la inferencia (Opción 3)."
  },
  {
    "q": "¿Qué información se obtiene al construir un Intervalo de Confianza para la desviación estándar ($\\sigma$)?",
    "opts": [
      "Un rango de valores posibles para $\\sigma$ poblacional",
      "Una medida de dispersión que es más interpretable que $\\sigma^2$",
      "Requiere asumir que los datos provienen de una población normal",
      "Su cálculo implica simplemente tomar la raíz cuadrada del IC de $\\sigma^2$"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El CI para $\\sigma$ es matemáticamente complejo, pero su utilidad radica en proporcionar un rango interpretable en unidades originales. Por lo tanto, siempre se debe asumir normalidad y se calcula tomando la raíz cuadrada de los límites del IC para $\\sigma^2$, siguiendo el procedimiento estándar."
  },
  {
    "q": "¿Cuáles de los siguientes métodos para construir intervalos de confianza (IC) para proporciones $p$ son conocidos por ofrecer mejor cobertura o ser más robustos en escenarios donde el tamaño muestral ($n$) es pequeño o las estimaciones $\\hat{p}$ son cercanas a 0 o 1?",
    "opts": [
      "El método Wilson (score)",
      "El método Agresti-Coull",
      "El método Clopper-Pearson",
      "El método de Wald"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los métodos Wilson y Agresti-Coull son mejoras significativas respecto al método simple de Wald. El Clopper-Pearson es conocido por ser un método exacto (basado en la distribución binomial) y generalmente ofrece una garantía de cobertura superior para cualquier $n$."
  },
  {
    "q": "¿Al comparar los diferentes enfoques para intervalos de confianza de proporciones ($p$), ¿cuáles son sus características o beneficios distintivos?",
    "opts": [
      "El método Clopper-Pearson es el más confiable porque su aproximación se basa en la distribución binominal exacta.",
      "Mientras que Wald es simple, tiende a tener una baja cobertura cuando $n$ es pequeño o $\\hat{p}$ está extremo.",
      "Agresti-Coull mejora la robustez de Wald al añadir pseudo-observaciones para estabilizar el cálculo.",
      "Todos los métodos son igualmente precisos en todos los escenarios de tamaños muestrales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Clopper-Pearson es considerado exacto. Wald falla en límites extremos o $n$ pequeño. Agresti-Coull ofrece un balance entre la simplicidad y la cobertura mejorada al 'sacar' dos datos ficticios (pseudo-observaciones)."
  },
  {
    "q": "¿Qué implicaciones tiene la distribución Chi-Cuadrado ($\\chi^2$) en el contexto del intervalo de confianza para $\\sigma^2$?",
    "opts": [
      "La media de $\\chi^2$ es igual a sus grados de libertad (df).",
      "El uso de $\\chi^2$ implica que el IC resultante será un intervalo asimétrico.",
      "Para aplicar la distribución, es obligatorio asumir que los datos son normales.",
      "Los extremos del IC para $s$ se calculan simplemente tomando la raíz cuadrada de los límites del IC de $\\sigma^2$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La propiedad clave de $\\chi^2$ es su asimetría. Su media es igual a sus df (que en este caso es $n-1$). Además, para obtener el IC de $\\sigma$, se toma la raíz cuadrada de los límites del IC de $\\sigma^2$."
  },
  {
    "q": "¿Cuál es el propósito principal de construir un intervalo de confianza para el cociente de varianzas $\\sigma_1^2/\\sigma_2^2$?",
    "opts": [
      "Comparar si las variabilidades de dos procesos o poblaciones son significativamente diferentes.",
      "Determinar la razón entre los parámetros poblacionales que rigen la dispersión de dos grupos distintos.",
      "Estimar el valor más probable del cociente teórico de las varianzas, asumiendo normalidad y independencia.",
      "Sustituir el análisis de diferencia de medias cuando se sospechan heterogeneidades de varianza."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El IC para $\\sigma_1^2/\\sigma_2^2$ busca cuantificar si la dispersión de dos poblaciones es significativamente diferente. Esto lo logra utilizando la distribución F de Fisher, bajo la suposición de normalidad e independencia."
  },
  {
    "q": "¿Cuáles son consideraciones correctas sobre los métodos alternativos para calcular IC de proporciones?",
    "opts": [
      "Agresti-Coull requiere que $n$ sea relativamente pequeño para ser más efectivo que Wald.",
      "Wilson es un método 'score' estadístico que minimiza la varianza del estimador.",
      "Clopper-Pearson se deriva directamente de transformar el modelo Binomial, garantizando su exactitud.",
      "Todos los métodos requieren una transformación logarítmica previa a su aplicación."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Agresti-Coull es especialmente útil para $n$ pequeño. Wilson utiliza un enfoque de puntuación (score). Clopper-Pearson aprovecha la naturaleza binomial exacta del proceso muestral."
  },
  {
    "q": "¿Qué acciones deben tomarse cuando se comparan dos grupos y el objetivo es evaluar la razón de sus varianzas?",
    "opts": [
      "Se debe utilizar un IC basado en la distribución F de Fisher.",
      "La hipótesis nula suele ser $\\sigma_1^2 / \\sigma_2^2 = 1$.",
      "Asumir que las muestras son gaussianas e independientes maximiza la validez del test.",
      "Solo es necesario comparar $s_1^2$ y $s_2^2$, sin considerar el IC."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para el cociente de varianzas, se utiliza la distribución F (racionalización). La hipótesis nula estándar establece que las varianzas son iguales ($\\sigma_1^2 = \\sigma_2^2$), lo que implica una razón igual a 1. La normalidad e independencia son supuestos clave."
  },
  {
    "q": "¿Considerando tres métodos de IC para proporciones, cuáles son las principales ventajas y desventajas a considerar?",
    "opts": [
      "Clopper-Pearson: Exacto, pero tiende a ser excesivamente conservador.",
      "Wald: Simple y fácil de calcular, pero puede fallar con $n$ pequeño o $\\hat{p}$ extremo.",
      "Agresti-Coull: Mejora la cobertura en casos límite mediante pseudo-observaciones.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cada método tiene un balance riesgo/beneficio. CP garantiza la exactitud binomial, Wald es el más simple pero menos preciso, y AC corrige las deficiencias de Wald añadiendo datos ficticios (pseudo-counts) para mejorar la cobertura."
  },
  {
    "q": "¿Qué implica interpretar que 'el IC para $\\sigma^2$ va de $A$ a $B$'?",
    "opts": [
      "El verdadero valor poblacional $\\sigma^2$ está confinado entre $A$ y $B$",
      "La desviación típica poblacional ($\\sigma$) está en el rango $[\\sqrt{A}, \\sqrt{B}]$",
      "El intervalo para $\\sigma$ es simplemente la raíz cuadrada de los límites del IC de $\\sigma^2$",
      "Se debe transformar este IC usando logaritmos naturales"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La interpretación directa es que existe un nivel de confianza $1-\\alpha$ de que el verdadero $\\sigma^2$ está en $[A, B]$. Dado que la pregunta pide sobre el intervalo, las opciones 0, 1 y 2 son compatibles: si sabes los límites para $\\sigma^2$, esos son los valores que rodean al parámetro."
  },
  {
    "q": "¿Al comparar métodos de IC para proporciones, ¿qué se debe considerar sobre el método Clopper-Pearson (CP)?",
    "opts": [
      "Es un método basado en la distribución Binomial exacta, por lo que su cobertura es garantizada.",
      "Es notoriamente conservador, tendiendo a producir intervalos más anchos que otros métodos en muchas situaciones prácticas.",
      "No requiere ninguna condición de aproximación Normal o tamaño mínimo para ser válido.",
      "Su cálculo analítico es significativamente más sencillo que el método Wald."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "CP es exacto por definición (se basa en la distribución Binomial), pero su rigor lo hace conservador. Es robusto porque no depende de aproximaciones Normales y no requiere condiciones de $n$ grande."
  },
  {
    "q": "¿Cuáles de los siguientes métodos para calcular el Intervalo de Confianza (IC) de una proporción $p$ tienen ventajas teóricas o prácticas significativas?",
    "opts": [
      "Wilson score: Ofrece mejor cobertura garantizada que Wald.",
      "Agresti-Coull: Corrige el problema del muestreo extremo añadiendo pseudo-observaciones.",
      "Clopper-Pearson: Es un método basado en la distribución binomial y garantiza una cobertura exacta (al nivel nominal).",
      "Wald: Aunque es el más simple, puede fallar gravemente con muestras pequeñas o estimadores cercanos a 0 o 1."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Wilson y Agresti-Coull son mejoras sobre Wald. Clopper-Pearson es robusto porque utiliza la distribución binomial precisa. Wald es el más simple conceptualmente, pero menos preciso en condiciones extremas."
  },
  {
    "q": "¿Cuáles de los siguientes enunciados describen correctamente las propiedades o usos de los Intervalos de Confianza (IC) para parámetros poblacionales?",
    "opts": [
      "El IC es una estimación del rango plausible donde se encuentra el verdadero parámetro poblacional con un nivel de confianza dado.",
      "Si repetimos el proceso de muestreo infinitas veces, el porcentaje de intervalos construidos que contienen al parámetro real debe ser igual al Nivel de Confianza ($\\alpha$).",
      "Un IC por sí mismo no es una declaración sobre la probabilidad de que esté correcto; es una propiedad del método utilizado.",
      "Cuanto mayor sea el tamaño muestral ($n$), más estrecho será siempre el intervalo, independientemente de la variabilidad poblacional."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los IC proporcionan un rango (plausibilidad), su interpretación se refiere al proceso repetido ('el porcentaje debe ser...'), y es crucial recordar que el nivel de confianza ($\\alpha$) describe la fiabilidad del método. El tamaño muestral afecta la precisión, pero no siempre garantiza una estrechez absoluta."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias o limitaciones conceptuales al construir Intervalos de Confianza (IC)?",
    "opts": [
      "Asumir que la variable sigue una distribución normal (o que $n$ es lo suficientemente grande para el Teorema del Límite Central).",
      "Verificar siempre los tamaños muestrales ($n$) para asegurar que cumplen las condiciones de convergencia adecuadas (ej. $np̂ \\ge 5$).",
      "El método elegido debe ser adecuado a la naturaleza del parámetro (varianza, proporción, cociente).",
      "La validez de un IC se garantiza únicamente si el intervalo calculado contiene al valor real desconocido."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Es fundamental asumir normalidad o usar aproximaciones robustas. Hay que verificar las condiciones (especialmente $n$ para proporciones). El último enunciado es una malinterpretación de la definición estadística: el IC se basa en la probabilidad del método, no sobre si contiene al valor real."
  },
  {
    "q": "¿Cuál es la principal desventaja práctica al utilizar el método Wald para construir un IC de proporción $p$?",
    "opts": [
      "Tiende a subestimar la verdadera variabilidad, especialmente cuando $\\hat{p}$ está muy cerca de 0 o 1.",
      "Asume implícitamente que el tamaño muestral $n$ es infinito, lo cual no siempre es cierto.",
      "Es matemáticamente más complejo que los métodos basados en binomio cerrado (Clopper-Pearson).",
      "Su cálculo requiere la transformación logarítmica de las proporciones, introduciendo sesgo."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Wald se vuelve inexacto (subestima) cuando $\\hat{p}$ está en los extremos. El tercer punto es una exageración sobre la suposición; el problema principal es que falla debido a la aproximación normal, no por asumir $n=\\infty$. Sin embargo, comparado con Clopper-Pearson, conceptualmente introduce sesgos de manera diferente."
  }
];
