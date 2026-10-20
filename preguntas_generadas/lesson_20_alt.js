// Leccion 20 — 180 preguntas alternativas
// Generadas con gemma4 el 2026-07-04 14:35
// Distribucion: 60/60/60 (1c/2c/3c)
window.LESSON_QUESTIONS_ALT = window.LESSON_QUESTIONS_ALT || {};
window.LESSON_QUESTIONS_ALT[20] = [
  {
    "q": "En el contexto de comparar dos medias muestrales ($\\bar{X}$ y $\\bar{Y}$), ¿qué prueba debe aplicarse si se asume que las varianzas poblacionales son conocidas?",
    "opts": [
      "El test Z para dos muestras independientes",
      "El test t pooled (varianzas iguales)",
      "El test t de Welch (varianzas desiguales)",
      "La prueba F"
    ],
    "c": [
      0
    ],
    "exp": "Si $\\sigma_1^2$ y $\\sigma_2^2$ son conocidas, el estadístico sigue una distribución Normal Estándar (Z), lo que lleva al uso del test Z."
  },
  {
    "q": "¿Cuál es la interpretación de un valor $d$ de Cohen igual a 0.8 en el contexto de dos muestras?",
    "opts": [
      "Sugiere una magnitud de efecto grande",
      "Indica una diferencia pequeña y no significativa",
      "Implica que los grupos son indistinguibles",
      "Solo se calcula para datos pareados"
    ],
    "c": [
      0
    ],
    "exp": "El coeficiente $d$ de Cohen mide el tamaño del efecto. Generalmente, 0.8 es considerado un tamaño de efecto grande."
  },
  {
    "q": "Cuando aplicamos el test t de Welch (varianzas desiguales), ¿cuál es la principal ventaja metodológica respecto al test t pooled?",
    "opts": [
      "Permitir realizar inferencias sin asumir homogeneidad de varianzas",
      "No requiere conocer las desviaciones estándar poblacionales ($\\sigma$)",
      "Es más potente estadísticamente bajo condiciones heterogéneas",
      "Siempre arroja un valor p menor que el test Z"
    ],
    "c": [
      0
    ],
    "exp": "El test de Welch está diseñado específicamente para manejar la situación donde no se puede asumir la igualdad de varianzas (heterocedasticidad), lo cual es una ventaja clave."
  },
  {
    "q": "¿Qué condición debe cumplirse necesariamente para que el test t pooled sea estadísticamente válido?",
    "opts": [
      "Se deben cumplir los supuestos de homocedasticidad ($\\sigma_1^2 = \\sigma_2^2$)",
      "La distribución de las diferencias $D$ debe ser normal",
      "El tamaño muestral ($n$) debe ser muy grande (>30)",
      "Las muestras deben provenir de poblaciones completamente independientes"
    ],
    "c": [
      0
    ],
    "exp": "El test t pooled requiere la suposición fundamental (homocedasticidad) de que las varianzas poblacionales son iguales ($\\sigma_1^2 = \\sigma_2^2$)."
  },
  {
    "q": "¿Cuál es el propósito principal del estadístico $F$ en el contexto comparativo de dos muestras?",
    "opts": [
      "Comparar si las varianzas poblacionales ($\\sigma_1^2$ y $\\sigma_2^2$) son iguales",
      "Evaluar la diferencia entre proporciones ($p̂_1 - p̂_2$)",
      "Estimar la media combinada en casos de tamaños desiguales",
      "Calcular el tamaño del efecto usando rangos"
    ],
    "c": [
      0
    ],
    "exp": "El test F está diseñado para probar la hipótesis nula de igualdad de varianzas ($\\sigma_1^2 = \\sigma_2^2$)."
  },
  {
    "q": "En un contexto donde se analizan datos pareados, ¿qué variable se utiliza primariamente para realizar las pruebas t y Z?",
    "opts": [
      "La diferencia de las observaciones ($D = X - Y$) en cada par",
      "Las variables originales $X$ e $Y$ por separado",
      "El promedio de ambas mediciones ($\\bar{Z} = (X+Y)/2$)",
      "Las desviaciones estándar individuales"
    ],
    "c": [
      0
    ],
    "exp": "Los tests pareados eliminan la variabilidad intra-sujeto y se centran únicamente en medir las diferencias ($D_i$) entre pares de observaciones."
  },
  {
    "q": "¿Cuál es el estadístico usado en el test Z para dos proporciones ($\\hat{p}_1$ vs $\\hat{p}_2$)?",
    "opts": [
      "$(\\hat{p}_1 - \\hat{p}_2) / SE_{pooled}$",
      "$(\\hat{p}_1 - \\hat{p}_2)$ (sin normalización)",
      "$(\\hat{p}_1 + \\hat{p}_2)/2$",
      "$(\\text{suma de frecuencias}/n)$"
    ],
    "c": [
      0
    ],
    "exp": "Bajo la hipótesis nula ($H_0: p_1 = p_2$), se utiliza una desviación estándar combinada o 'pooled' para calcular el estadístico Z."
  },
  {
    "q": "¿Qué prueba debe utilizarse si los datos provienen de un diseño emparejado (antes y después) y se asume la normalidad?",
    "opts": [
      "El test t pareado",
      "El test McNemar",
      "La prueba Wilcoxon signed-rank",
      "La prueba Mann-Whitney"
    ],
    "c": [
      0
    ],
    "exp": "Para datos dependientes o empareados, el test t de muestras pareadas es el análogo paramétrico. Su hipótesis se centra en $\\mu_D = 0$."
  },
  {
    "q": "Cuando se comparan dos grupos independientes y se asume que las varianzas poblacionales son iguales ($\\sigma_1^2 = \\sigma_2^2$), ¿qué prueba de hipótesis es más apropiada para calcular el estadístico t?",
    "opts": [
      "Test Z (dos medias, $\\sigma$ conocidas)",
      "Test t pooled",
      "Test t de Welch",
      "Prueba F"
    ],
    "c": [
      0
    ],
    "exp": "El test t pooled está diseñado específicamente para la situación donde se asume la igualdad de varianzas poblacionales (homocedasticidad), combinando ambas estimaciones en una sola varianza estimada ($S_p^2$)."
  },
  {
    "q": "¿Cuál es el propósito fundamental del Test pareado?",
    "opts": [
      "Comparar dos poblaciones con muestras totalmente independientes.",
      "Evaluar si las distribuciones de rangos son similares.",
      "Analizar la misma variable medida en los mismos sujetos bajo diferentes condiciones (antes/después).",
      "Determinar la diferencia entre proporciones poblacionales."
    ],
    "c": [
      0
    ],
    "exp": "El test pareado se utiliza cuando hay dependencias o 'parejas' naturales, como mediciones repetidas en el mismo individuo. Su objetivo es eliminar la variabilidad intrínseca del sujeto."
  },
  {
    "q": "¿Qué condición debe cumplirse para que un Test Z de dos medias sea válido?",
    "opts": [
      "Las muestras deben ser paramétricas y tener varianzas iguales.",
      "Los tamaños muestrales ($n_1, n_2$) deben ser suficientemente grandes (Teorema del Límite Central).",
      "La población debe seguir una distribución Normal.",
      "Se requiere conocer la desviación estándar poblacional ($\\sigma$)."
    ],
    "c": [
      0
    ],
    "exp": "Si se utiliza el Test Z para dos medias y no se conocen las desviaciones estándar poblacionales, es imprescindible que los tamaños muestrales sean grandes. Además, si son pequeños, se asume normalidad."
  },
  {
    "q": "¿Cuál de estos tests NO requiere hacer la suposición de igualdad de varianzas ($\\sigma_1^2 = \\sigma_2^2$)?",
    "opts": [
      "Test t de Welch",
      "Test t pooled",
      "Prueba F para comparaciones de medias",
      "ANOVA (si se usa el principio de varianzas iguales)"
    ],
    "c": [
      0
    ],
    "exp": "El Test t de Welch es la corrección robusta que permite comparar dos medias sin asumir la igualdad de las varianzas poblacionales, ajustando los grados de libertad con la aproximación de Satterthwaite."
  },
  {
    "q": "¿Qué test estadístico se utiliza para comparar si dos proporciones ($p_1$ y $p_2$) son significativamente diferentes?",
    "opts": [
      "Test Z (para dos proporciones)",
      "Prueba F (de varianzas)",
      "Test t de Welch",
      "Prueba de McNemar"
    ],
    "c": [
      0
    ],
    "exp": "El Test Z se usa para comparar la diferencia entre dos proporciones muestrales ($\\hat{p}_1 - \\hat{p}_2$), utilizando el valor esperado bajo $H_0$ (la proporción común)."
  },
  {
    "q": "¿Cuál es la principal limitación o precaución al realizar un F-test comparando varianzas?",
    "opts": [
      "Es muy sensible a violaciones de la Normalidad, especialmente con muestras pequeñas.",
      "Requiere calcular los grados de libertad exactos mediante la distribución F.",
      "Solo puede usarse si las variables son proporcionales.",
      "No es aplicable en el análisis pareado."
    ],
    "c": [
      0
    ],
    "exp": "La prueba F (para varianzas) es extremadamente sensible a desviaciones de la normalidad y al tamaño muestral, haciendo que su interpretación sea difícil con muestras pequeñas."
  },
  {
    "q": "¿Cuál es la función principal del cálculo del estadístico $d$ de Cohen?",
    "opts": [
      "Cuantificar el tamaño del efecto o magnitud de la diferencia entre dos grupos.",
      "Determinar la significancia estadística (valor p) en lugar del tamaño del efecto.",
      "Comparar si las varianzas son iguales sin implicar un cambio en medias.",
      "Calcular los grados de libertad efectivos para una prueba t."
    ],
    "c": [
      0
    ],
    "exp": "El $d$ de Cohen es una medida estandarizada del tamaño del efecto, expresando la diferencia de medias en unidades de desviación estándar."
  },
  {
    "q": "¿Qué estadístico se utiliza como alternativa no paramétrica al Test t pareado?",
    "opts": [
      "Test de Wilcoxon signed-rank",
      "Mann-Whitney U (si los datos fueran independientes)",
      "Test de McNemar (solo para proporciones)",
      "Correlación de Pearson"
    ],
    "c": [
      0
    ],
    "exp": "Cuando los datos pareados no cumplen la suposición de normalidad, el Test de Rango con signo de Wilcoxon es el reemplazo estadístico más apropiado."
  },
  {
    "q": "¿Cuál se utiliza específicamente para analizar datos categóricos que son *pareados* (ej. Sí/No en el Tiempo 1 y Sí/No en el Tiempo 2)?",
    "opts": [
      "Test de McNemar",
      "Test Z para proporciones independientes",
      "Mann-Whitney U",
      "Ki-cuadrado de independencia"
    ],
    "c": [
      0
    ],
    "exp": "McNemar es la prueba diseñada para analizar la concordancia y desacuerdo entre dos variables categóricas que provienen del mismo par de sujetos."
  },
  {
    "q": "¿Qué significa conceptualmente asumir homocedasticidad?",
    "opts": [
      "Que las medias poblacionales son diferentes.",
      "Que los tamaños muestrales deben ser iguales en ambos grupos.",
      "Que las varianzas poblacionales ($\\sigma_1^2$ y $\\sigma_2^2$) de ambas muestras son iguales.",
      "Que la relación entre variables es lineal."
    ],
    "c": [
      0
    ],
    "exp": "Homocedasticidad es el supuesto estadístico de que la dispersión o varianza en ambos grupos poblacionales debe ser constante e igual."
  },
  {
    "q": "¿En la interpretación práctica, ¿qué representa un tamaño del efecto $d$ de Cohen cercano a 1?",
    "opts": [
      "Una diferencia muy pequeña y sin interés clínico.",
      "Una magnitud de diferencia mediana. ",
      "Una diferencia grande; los grupos están separados por más de una desviación estándar.",
      "Que no hay diferencia significativa (p > $\\alpha$)."
    ],
    "c": [
      0
    ],
    "exp": "Un $d$ cercano a 1 implica que la separación entre las medias es muy grande, lo cual suele ser clínicamente significativo."
  },
  {
    "q": "¿Qué test se utiliza para comparar dos muestras independientes cuando los datos no son paramétricos y solo se puede asumir una distribución de rangos?",
    "opts": [
      "Mann-Whitney U (o Wilcoxon Rank Sum Test)",
      "Wilcoxon signed-rank (para pareados)",
      "Test Z",
      "ANOVA"
    ],
    "c": [
      0
    ],
    "exp": "El Mann-Whitney U es el equivalente no paramétrico al test t para dos muestras independientes, operando sobre los rangos observados."
  },
  {
    "q": "¿Cuál de estos escenarios NO justifica el uso del Test t (o su variación T Welch)?",
    "opts": [
      "Comparar la media de salario entre empleados de dos departamentos distintos.",
      "Evaluar si una nueva terapia disminuyó significativamente la presión arterial en un grupo de pacientes.",
      "Determinar si la varianza de salarios es igual entre los departamentos.",
      "Estudiar las ventas diarias antes y después del lanzamiento de una campaña publicitaria."
    ],
    "c": [
      0
    ],
    "exp": "El escenario de 'varianzas iguales' (comparar solo la varianza) requiere el F-test o un test específico de igualdad de varianzas, no el Test t que compara medias."
  },
  {
    "q": "¿Cuál es la principal diferencia conceptual entre usar Mann-Whitney y Wilcoxon signed-rank?",
    "opts": [
      "Mann-Whitney se usa para datos pareados; Wilcoxon para independientes.",
      "Wilcoxon requiere medir rangos; Mann-Whitney usa las puntuaciones originales.",
      "Mann-Whitney es para muestras independientes (comparando distribuciones); Wilcoxon es para muestras pareadas (diferencias).",
      "No hay diferencia, son sinónimos estadísticos."
    ],
    "c": [
      0
    ],
    "exp": "La distinción radica en la estructura de los datos: independiente vs. dependiente/pareado."
  },
  {
    "q": "¿Qué implicación tiene la elección del Test t de Welch sobre el Test t pooled?",
    "opts": [
      "El test de Welch es más robusto y apropiado si se sospecha que las varianzas poblacionales son diferentes.",
      "Requiere calcular los grados de libertad mediante una fórmula compleja (Welch-Satterthwaite).",
      "Siempre arrojará un valor p más conservador (más alto) en comparación con el pooled.",
      "Asume la igualdad de varianzas, pero no es tan estricto."
    ],
    "c": [
      0
    ],
    "exp": "La principal ventaja conceptual y práctica del test de Welch es que se elimina la fuerte suposición de igualdad de varianzas, mejorando la robustez si esta asunción falla."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre el análisis estadístico comparativo es correcta?",
    "opts": [
      "Los tests no paramétricos siempre son menos potentes que los paramétricos.",
      "El tamaño muestral debe ser grande para aplicar cualquier test t o Z correctamente.",
      "La elección del test depende de la naturaleza de los datos (cuantitativos, categóricos) y el diseño experimental (independiente vs. pareado).",
      "Un valor p alto siempre implica que no hay efecto práctico (d=0)."
    ],
    "c": [
      0
    ],
    "exp": "El análisis estadístico es un proceso jerárquico: primero se revisa la naturaleza de los datos y el diseño, lo cual dicta el test correcto."
  },
  {
    "q": "Cuando se comparan dos medias poblacionales ($\\mu_1$ y $\\mu_2$) utilizando datos de muestras independientes, ¿cuál es la principal diferencia metodológica entre usar el test Z (si $\\sigma$ son conocidas) y el test t-pooled?",
    "opts": [
      "El test Z asume varianzas desconocidas, mientras que el test t requiere varianzas conocidas.",
      "El test t compara solo la media de la diferencia, mientras que el test Z compara las medias individualmente.",
      "El test Z utiliza la distribución Normal estandarizada (Z), y el test t utiliza la distribución $t$ de Student con grados de libertad ajustados.",
      "El test t pooled requiere asumir homocedasticidad ($\\sigma_1^2 = \\sigma_2^2$), mientras que el test Z no tiene tales restricciones."
    ],
    "c": [
      0
    ],
    "exp": "La diferencia clave radica en la distribución. Si las varianzas poblacionales ($\\sigma$) son conocidas, usamos $Z$. Si solo tenemos muestras y estimamos las varianzas (usando $s$), debemos usar la distribución $t$ de Student."
  },
  {
    "q": "¿En qué escenario estadístico se debe priorizar el uso del test t de Welch en lugar del test t-pooled?",
    "opts": [
      "Cuando se sospecha o se prueba formalmente que las varianzas poblacionales son significativamente diferentes (heterocedasticidad).",
      "Cuando ambas varianzas poblacionales son extremadamente pequeñas y las muestras son grandes.",
      "Cuando existe evidencia fuerte que sugiere la igualdad de varianzas ($\\sigma_1^2 = \\sigma_2^2$).",
      "Siempre, ya que el test de Welch es la versión más robusta y generalizable para cualquier caso."
    ],
    "c": [
      0
    ],
    "exp": "El propósito principal del test t de Welch es justamente evitar la suposición de igualdad de varianzas ($\\sigma_1^2 = \\sigma_2^2$), lo que lo hace ideal cuando se sospecha heterocedasticidad. Solo debe usarse si no hay evidencia clara para asumir homocedasticidad."
  },
  {
    "q": "Si el objetivo del análisis es determinar si la relación entre dos variables categóricas (por ejemplo, tratamiento vs. resultado) existe en un diseño donde las mismas unidades fueron medidas antes y después (o emparejadas), ¿cuál es el test estadístico más apropiado?",
    "opts": [
      "Test de McNemar",
      "Test $t$ pareado (Wilcoxon Signed-Rank)",
      "Análisis ANOVA de dos vías",
      "Test Z para proporciones."
    ],
    "c": [
      0
    ],
    "exp": "McNemar está diseñado específicamente para datos categóricos pareados, comparando las frecuencias en los cuatro cuadrantes de la tabla de contingencia 2x2. El test t pareado se usa si la variable dependiente es continua."
  },
  {
    "q": "¿Cuál es el propósito fundamental del coeficiente $d$ (diferencia de Cohen) al comparar dos medias?",
    "opts": [
      "Cuantificar la magnitud práctica (tamaño del efecto) de la diferencia entre las medias poblacionales.",
      "Evaluar la significancia estadística ($p$-valor) de la diferencia observada.",
      "Determinar los grados de libertad apropiados para el test $t$.",
      "Estimar la proporción común bajo la hipótesis nula."
    ],
    "c": [
      0
    ],
    "exp": "El estadístico $d$ de Cohen no indica si una diferencia es estadísticamente significativa, sino cuán grande y práctica debe ser esa diferencia (su magnitud) en términos de desviaciones estándar."
  },
  {
    "q": "¿Qué tipo de datos deben utilizarse para aplicar correctamente el test Wilcoxon Signed-Rank?",
    "opts": [
      "Datos ordinales o variables continuas pareadas, cuando se sospecha que los datos no son normales.",
      "Variables categóricas nominales con alta dependencia.",
      "Datos continuos que cumplen la condición de normalidad y pares de observaciones (pre/post).",
      "Solo muestras muy pequeñas (n < 10) para evitar la complejidad del cálculo."
    ],
    "c": [
      0
    ],
    "exp": "El test Wilcoxon Signed-Rank es el sustituto no paramétrico del test t pareado. Funciona con datos pares, especialmente útiles cuando se viola la normalidad o los supuestos de varianza."
  },
  {
    "q": "¿Cuál es la limitación más crítica al aplicar el F-test para comparar dos varianzas ($\\sigma_1^2$ vs $\\sigma_2^2$)?",
    "opts": [
      "Es extremadamente sensible a violaciones de la normalidad, especialmente en las colas.",
      "Solo puede usarse si las muestras son muy pequeñas (n < 5).",
      "Requiere que los tamaños muestrales sean iguales para ser válido.",
      "No es útil para comparar proporciones, solo varianzas."
    ],
    "c": [
      0
    ],
    "exp": "Aunque el F-test compara varianzas, su distribución $F$ se deriva bajo supuestos de normalidad. Por lo tanto, si la distribución real está muy lejos de la Normal, el resultado puede ser altamente engañoso (muy sensible a la falta de normalidad)."
  },
  {
    "q": "Al comparar dos proporciones ($p_1$ vs $p_2$) utilizando un test Z, ¿cuál es el valor fundamental que se debe usar para calcular el error estándar bajo $H_0$?",
    "opts": [
      "La proporción combinada (o común) bajo la hipótesis nula: $p_{pool} = (n_1 p_1 + n_2 p_2)/(n_1 + n_2)$.",
      "La varianza promedio de las dos muestras: $(s_1^2 + s_2^2)/2$",
      "El Error Estándar calculado usando las proporciones muestrales ($\\hat{p}_1, \\hat{p}_2$).",
      "Simplemente calcular $\\sqrt{\\hat{p}_1(1-\\hat{p}_1)/n_1}$ y ignorar el segundo grupo."
    ],
    "c": [
      0
    ],
    "exp": "Bajo $H_0$ (donde se asume que la proporción común es la misma), debemos usar la proporción combinada ($\\hat{p}_{pool}$) para calcular un Error Estándar más preciso, lo que permite un contraste más potente."
  },
  {
    "q": "¿Qué implicación tiene asumir homocedasticidad en el contexto de los tests t?",
    "opts": [
      "Implica que las varianzas poblacionales son iguales ($\\sigma_1^2 = \\sigma_2^2$), justificando el uso de $S_p$.",
      "Permite reducir los grados de libertad y aumentar la potencia del test.",
      "Solo es necesario si se utiliza el test Z, no para el test t.",
      "Indica que las muestras deben ser extraídas del mismo proceso generador."
    ],
    "c": [
      0
    ],
    "exp": "La suposición de homocedasticidad ($\\sigma_1^2 = \\sigma_2^2$) es la base matemática que permite combinar las varianzas en un solo estimador $S_p$ para el test t-pooled."
  },
  {
    "q": "¿Cuál es la función principal del test de Mann-Whitney U?",
    "opts": [
      "Comparar si la distribución de una variable ordinal o continua se comporta igual en dos muestras independientes (usa rangos).",
      "Estimar cuán diferente es la media entre dos grupos.",
      "Evaluar correlaciones lineales entre variables continuas.",
      "Reemplazar el análisis ANOVA cuando solo hay tres grupos."
    ],
    "c": [
      0
    ],
    "exp": "Mann-Whitney es un test no paramétrico que opera sobre los rangos de las observaciones, comparando si dos poblaciones tienen la misma distribución de forma y ubicación. Es el alternativo a t independiente."
  },
  {
    "q": "¿Por qué se considera conceptualmente incorrecto aplicar un test $t$ pareado cuando los datos son puramente nominales (ej. rojo/azul) o solo ordinales?",
    "opts": [
      "Porque la variable dependiente debe ser continua para calcular diferencias ($D_i$).",
      "Porque el test $t$ asume que las desviaciones estándar y varianzas están definidas.",
      "Porque su potencia es baja en cualquier tipo de datos no paramétrico.",
      "Porque requiere un tamaño muestral grande (n > 30) para aproximar la Normalidad."
    ],
    "c": [
      0
    ],
    "exp": "El test $t$ calcula diferencias ($D_i = X_i - Y_i$), lo cual es imposible o sin sentido si las variables son nominales. Para datos ordinales, el test Wilcoxon (que usa rangos) es más apropiado."
  },
  {
    "q": "¿Qué significa que un estudio haya reportado un tamaño del efecto grande ($d = 1.2$)?",
    "opts": [
      "Que el cambio o la diferencia práctica entre las medias supera 1.2 desviaciones estándar.",
      "Que la diferencia observada entre los grupos es muy significativa estadísticamente ($p < 0.01$).",
      "Que la varianza de error muestral es significativamente grande.",
      "Que se debe utilizar un test no paramétrico en su lugar."
    ],
    "c": [
      0
    ],
    "exp": "Un tamaño del efecto (como $d$) cuantifica la magnitud. Un valor de 1.2 indica que el cambio o la diferencia es muy grande, superando una desviación estándar completa."
  },
  {
    "q": "¿En un contexto donde se compara la tasa de éxito entre dos tratamientos diferentes (p1 vs p2), ¿cuál de los siguientes escenarios requiere obligatoriamente el uso del test Z para proporciones?",
    "opts": [
      "Cuando ambos tamaños muestrales son muy grandes ($n_1, n_2 \\gg 30$).",
      "Cuando hay datos pareados y solo comparamos las frecuencias en el grupo positivo.",
      "Cuando la variable de interés es continua, pero se discretiza (ej. éxito/fracaso).",
      "Siempre que se establezca $H_0: p_1 = p_2$."
    ],
    "c": [
      0
    ],
    "exp": "Aunque siempre se puede usar Z para proporciones si n es grande, formalmente el test Z se basa en la aproximación Normal de la distribución muestral de $\\hat{p}$, lo cual es más robusto y preciso cuando los tamaños muestrales son grandes."
  },
  {
    "q": "¿Cuándo es apropiado aplicar un Test de McNemar?",
    "opts": [
      "Cuando tenemos datos categóricos (binomiales) recopilados en el mismo sujeto antes y después de una intervención.",
      "Cuando se compara si la prevalencia de una condición cambia en dos grupos independientes.",
      "Para comparar las proporciones de éxito entre tratamientos A y B usando múltiples mediciones por paciente.",
      "Si solo hay un grupo, pero queremos medir su variabilidad."
    ],
    "c": [
      0
    ],
    "exp": "McNemar es el test estándar para datos de contingencia 2x2 pareados (ej. ¿Mejoró o empeoró respecto a la línea base?). Solo se usa en escenarios donde el sujeto actúa como su propia muestra."
  },
  {
    "q": "En el contexto de la comparación de medias entre dos grupos independientes y con varianzas desconocidas y potencialmente desiguales, ¿cuál es el test estadístico más robusto si no se cumplen los supuestos de homocedasticidad?",
    "opts": [
      "Test t de Welch",
      "Test t pooled",
      "Test Z para dos medias",
      "Prueba F"
    ],
    "c": [
      0
    ],
    "exp": "El Test t de Welch está diseñado específicamente para manejar casos donde las varianzas poblacionales ($\\sigma_1^2 \neq \\sigma_2^2$) son desiguales, utilizando grados de libertad ajustados por la aproximación de Welch-Satterthwaite. Esto lo hace más robusto que el test pooled cuando se violan los supuestos."
  },
  {
    "q": "¿Qué condición debe cumplirse para aplicar correctamente el Test t pooled (varianzas iguales)?",
    "opts": [
      "Se debe asumir la igualdad de varianzas ($\\sigma_1^2 = \\sigma_2^2$).",
      "Los datos deben ser normales en ambos grupos.",
      "El tamaño muestral $n$ debe ser grande (>30).",
      "Las muestras deben provenir del mismo proceso generador."
    ],
    "c": [
      0
    ],
    "exp": "La principal condición para el test t pooled es la suposición de homocedasticidad, es decir, que las varianzas poblacionales de ambos grupos son iguales. Aunque se asume normalidad y se prefiere $n$ grande por Central Limit Theorem (CLT), la igualdad de varianzas es el requisito definitorio del pooling."
  },
  {
    "q": "Cuando realizamos un Test de McNemar en datos categóricos pareados, ¿qué información se está comparando directamente?",
    "opts": [
      "El porcentaje de desacuerdos (errores) en la concordancia.",
      "La diferencia absoluta entre las categorías dominantes.",
      "La proporción general del grupo control.",
      "La diferencia promedio entre mediciones no relacionadas."
    ],
    "c": [
      0
    ],
    "exp": "McNemar se enfoca en los datos pareados categóricos. No compara proporciones totales, sino que utiliza las celdas de desacuerdo ($n_{A \neq B}$ y $n_{B \neq A}$) para evaluar si la proporción de errores de clasificación es significativamente diferente de cero (es decir, si hay un cambio real en la preferencia o estado entre mediciones)."
  },
  {
    "q": "¿Cuál es el propósito principal del Test pareado utilizando la distribución t?",
    "opts": [
      "Analizar si existe una diferencia significativa en el promedio de las diferencias ($D$) entre pares relacionados.",
      "Comparar las medias poblacionales cuando los datos son independientes.",
      "Evaluar la variabilidad general dentro de una única población sobre múltiples medidas.",
      "Determinar si dos conjuntos de proporciones siguen la misma distribución binomial."
    ],
    "c": [
      0
    ],
    "exp": "El test pareado elimina la variable de variación intersujeto. Su objetivo no es comparar $\\mu_1$ y $\\mu_2$, sino evaluar si el promedio de las diferencias ($\\bar{D}$) es distinto de cero, lo cual mide el cambio o efecto dentro del mismo sujeto."
  },
  {
    "q": "Respecto a los tests no paramétricos (Mann-Whitney U y Wilcoxon Signed-Rank), ¿qué propiedad estadística se utilizan para la prueba en lugar de los valores originales?",
    "opts": [
      "Los rangos de observación.",
      "Las medias poblacionales.",
      "La desviación estándar muestral.",
      "El coeficiente de correlación (r)."
    ],
    "c": [
      0
    ],
    "exp": "Estos tests son alternativos cuando no se cumplen las condiciones de normalidad o cuando los datos están medidos en escalas ordinales. En lugar de usar valores brutos, utilizan rangos para medir la posición relativa de cada observación dentro del conjunto de datos."
  },
  {
    "q": "¿En un contexto de prueba de dos proporciones ($p̂_1$ vs $p̂_2$), ¿qué es la hipótesis nula ($H_0$)?",
    "opts": [
      "Que las proporciones poblacionales son iguales ($p_1 = p_2$).",
      "Que las proporciones son significativamente diferentes ($\neq$).",
      "Que ambas poblaciones siguen distribuciones binomiales.",
      "Que el tamaño muestral es suficiente para usar la aproximación Z."
    ],
    "c": [
      0
    ],
    "exp": "La hipótesis nula en cualquier test de contraste establece que no hay efecto o diferencia. Para dos proporciones, esto significa que las probabilidades de éxito en ambas muestras son iguales ($p_1 = p_2$)."
  },
  {
    "q": "¿Cuál es el significado del estadístico $d$ (d de Cohen) cuando se calcula la diferencia entre dos medias independientes?",
    "opts": [
      "La magnitud relativa del tamaño del efecto en unidades estándar.",
      "El valor de significancia P-value.",
      "La varianza combinada estimada por el pooling.",
      "La desviación típica muestral general."
    ],
    "c": [
      0
    ],
    "exp": "Cohen's d es la métrica estándar para cuantificar el tamaño del efecto. Indica cuántas desviaciones estándar separa a las medias de los dos grupos, proporcionando un valor interpretable (pequeño, mediano o grande)."
  },
  {
    "q": "¿Cuándo se prefiere usar el Test t de Welch en lugar del test t pooled?",
    "opts": [
      "Siempre que haya sospecha de heterogeneidad entre varianzas.",
      "Cuando el tamaño muestral es muy pequeño ($n<10$).",
      "Si los datos son categóricos (proporciones).",
      "Cuando las muestras están perfectamente correlacionadas."
    ],
    "c": [
      0
    ],
    "exp": "La principal razón para usar Welch es la flexibilidad. Si hay evidencia, incluso anecdótica, de que $\\sigma_1^2 \neq \\sigma_2^2$, utilizar el test t de Welch evita violar supuestos y provee una estimación más precisa del nivel de significancia."
  },
  {
    "q": "¿En un estudio longitudinal, se mide el rendimiento de un grupo antes (Pre) y después (Post) de una intervención. ¿Qué test es apropiado para determinar si la diferencia media $\\bar{D}$ es significativa?",
    "opts": [
      "Test t pareado.",
      "Mann-Whitney U",
      "ANOVA de medidas repetidas",
      "McNemar"
    ],
    "c": [
      0
    ],
    "exp": "Dado que las mediciones son del mismo grupo (sujeto) en dos momentos distintos y se busca la diferencia media, el test t pareado es el más adecuado. Si los datos no fueran normales o hubiera pocos sujetos, Wilcoxon Signed-Rank sería su alternativa."
  },
  {
    "q": "¿Cuál es la principal condición de supuesto que se debe verificar antes de aplicar el test $t$ pooled?",
    "opts": [
      "La normalidad en las muestras individuales.",
      "El tamaño muestral suficientemente grande ($n>30$).",
      "La igualdad de varianzas ($\\sigma_1^2 = \\sigma_2^2$) entre ambas poblaciones.",
      "Que los datos sean medianos y no normales."
    ],
    "c": [
      0
    ],
    "exp": "El test $t$ pooled (varianzas iguales) asume la homocedasticidad, es decir, que las varianzas poblacionales son iguales ($\\sigma_1^2 = \\sigma_2^2$). Si esta condición falla, se prefiere el Test de Welch."
  },
  {
    "q": "¿Cuál es el principal propósito del Test de McNemar en estadística?",
    "opts": [
      "Testear diferencias en datos categóricos pareados (antes/después).",
      "Determinar si la varianza entre dos grupos es igual.",
      "Comparar medias cuando las muestras son independientes y normales.",
      "Evaluar correlaciones lineales entre variables continuas."
    ],
    "c": [
      0
    ],
    "exp": "El Test de McNemar se utiliza específicamente para analizar si hay cambios o diferencias significativas entre proporciones obtenidas de muestras pareadas (por ejemplo, un grupo que recibió un tratamiento y luego fue medido nuevamente)."
  },
  {
    "q": "¿Qué tipo de datos deben analizarse obligatoriamente con el Test de McNemar?",
    "opts": [
      "Variables categóricas binarias medidas dos veces en los mismos sujetos (pareadas).",
      "Datos continuos agrupados en rangos.",
      "Proporciones obtenidas de muestras independientes grandes.",
      "Medias de variables normalmente distribuidas."
    ],
    "c": [
      0
    ],
    "exp": "El Test de McNemar es exclusivo para datos de conteo o proporciones binomiales que son pareados. Se enfoca en las celdas donde hay desacuerdo (discordantes)."
  },
  {
    "q": "Cuando se compara la media de dos poblaciones con muestras independientes y se conocen las varianzas poblacionales ($\\sigma_1^2$ y $\\sigma_2^2$), ¿qué test es el estadístico apropiado para utilizar? A) El Test t de Welch. B) El Test z para dos medias. C) La prueba F (F-test). D) El test pareado.",
    "opts": [
      "El Test z para dos medias",
      "El Test t de Welch",
      "La prueba F (F-test)",
      "El test pareado"
    ],
    "c": [
      0
    ],
    "exp": "Dado que las varianzas poblacionales ($\\sigma_1^2$ y $\\sigma_2^2$) son conocidas, el estadístico sigue una distribución Z. La fórmula es $Z = (X̄ - Ȳ - δ₀)/\\sqrt{(\\sigma_1^2/n_1 + \\sigma_2^2/n_2)}$."
  },
  {
    "q": "En un experimento de tratamiento donde se mide la variable dependiente en el mismo sujeto antes y después del tratamiento, ¿cuál es el método estadístico más adecuado para analizar los datos? A) Test t pareado. B) Test z (dos medias). C) Mann-Whitney U test. D) F-test de varianzas.",
    "opts": [
      "Test t pareado",
      "Mann-Whitney U test",
      "F-test de varianzas",
      "Test z (dos medias)"
    ],
    "c": [
      0
    ],
    "exp": "Cuando los datos provienen del mismo sujeto en diferentes momentos o condiciones, se debe utilizar un análisis pareado. Esto elimina la variabilidad intra-sujeto, aumentando el poder estadístico."
  },
  {
    "q": "Cuando se comparan dos medias de grupos independientes y se conocen ambas varianzas poblacionales ($\\sigma_1^2$ y $\\sigma_2^2$), ¿cuál es el estadístico de prueba apropiado para la hipótesis nula?",
    "opts": [
      "$Z = (\\bar{X} - \\bar{Y} - \\delta_0) / \\sqrt{(\\sigma_1^2/n_1 + \\sigma_2^2/n_2)}$",
      "$T_{pooled} = (\\bar{X} - \\bar{Y} - \\delta_0) / (S_p \\sqrt{1/n_1 + 1/n_2})$",
      "$F = S_1^2 / S_2^2$",
      "$\\text{Z-test para dos proporciones}$"
    ],
    "c": [
      0
    ],
    "exp": "Dado que se conocen las varianzas poblacionales ($\\sigma$ conocidas), el contraste estadístico apropiado es la distribución Z. El estadístico clave es $Z = (\\bar{X} - \\bar{Y} - \\delta_0) / \\sqrt{(\\sigma_1^2/n_1 + \\sigma_2^2/n_2)}$."
  },
  {
    "q": "En un contraste de dos proporciones, ¿qué condición debe cumplirse para utilizar la aproximación normal (test Z)?",
    "opts": [
      "Los tamaños muestrales ($n_1$ y $n_2$) deben ser suficientemente grandes.",
      "La proporción esperada bajo H₀ debe estar definida en cada grupo.",
      "Se deben asumir que los datos están distribuidos normalmente.",
      "El test de McNemar es el método más adecuado."
    ],
    "c": [
      0
    ],
    "exp": "Para usar la aproximación normal (Z-test) en proporciones, se requiere que las muestras sean lo suficientemente grandes y que se cumplan condiciones de conteo para asegurar la distribución binomial aproximada a normal."
  },
  {
    "q": "¿Cuál es la condición de varianza que debe cumplirse para utilizar el Test t pooled en comparación con el Test t de Welch?",
    "opts": [
      "Las desviaciones estándar deben ser siempre iguales.",
      "Se asume homocedasticidad ($\\sigma_1^2 = \\sigma_2^2$).",
      "Ambas muestras deben tener tamaños n mayores a 30.",
      "Los datos deben seguir una distribución de Poisson."
    ],
    "c": [
      0
    ],
    "exp": "El test t pooled requiere que se asuma la igualdad de las varianzas poblacionales ($\\sigma_1^2 = \\sigma_2^2$), lo que se conoce como homocedasticidad. Si esta condición no se cumple, se prefiere el Test de Welch."
  },
  {
    "q": "¿Qué prueba estadística es apropiada para comparar proporciones de éxito en dos grupos independientes?",
    "opts": [
      "Test Z para dos proporciones",
      "Test t de Student pareado",
      "Análisis de Varianza (ANOVA)",
      "F-test para comparación de medias"
    ],
    "c": [
      0
    ],
    "exp": "Dado que se comparan proporciones ($\\hat{p}_1$ y $\\hat{p}_2$), el Test Z para dos proporciones es la herramienta estándar. Los tests t o F están destinados a comparar medias o varianzas."
  },
  {
    "q": "¿En el contexto de dos grupos independientes (N1 ≠ N2), si se sospecha que las varianzas son significativamente diferentes, ¿cuál debería ser la prueba preferida?",
    "opts": [
      "Test t de Welch",
      "Test t pooled",
      "Mann-Whitney U test",
      "F-test para igualdad de medias"
    ],
    "c": [
      0
    ],
    "exp": "El Test t de Welch es robusto y está diseñado específicamente para situaciones donde no se puede asumir la igualdad de varianzas ($\\sigma_1^2 \neq \\sigma_2^2$), lo que ocurre frecuentemente en datos reales."
  },
  {
    "q": "En el contexto de la comparación de dos medias poblacionales ($\\mu_1$ y $\\mu_2$) cuando las varianzas poblacionales ($\\sigma_1^2$ y $\\sigma_2^2$) son conocidas, ¿cuál es el estadístico de prueba apropiado para evaluar $H_0: \\mu_1 - \\mu_2 = \\delta_0$?",
    "opts": [
      "Z = (X̄ - Ȳ - δ₀)/√(σ₁²/n₁ + σ₂²/n₂)",
      "T pooled = (X̄ - Ȳ - δ₀)/(Sp·√(1/n₁ + 1/n₂))",
      "F = S₁²/S₂²",
      "d de Cohen = (X̄ - Ȳ)/Sp"
    ],
    "c": [
      0
    ],
    "exp": "Cuando las varianzas poblacionales son conocidas, se utiliza la distribución Z estándar para el contraste. El estadístico es Z = (X̄ - Ȳ - δ₀)/√(σ₁²/n₁ + σ₂²/n₂)."
  },
  {
    "q": "Según los supuestos de varianzas, ¿cuándo es apropiado utilizar el Test t pooled para comparar dos medias?",
    "opts": [
      "Cuando las muestras son pequeñas y la normalidad se cumple.",
      "Cuando se conoce que $\\sigma_1^2 = \\sigma_2^2$ (homocedasticidad).",
      "Cuando los datos no siguen una distribución normal, usando rangos de Spearman.",
      "Cuando el tamaño muestral es grande ($n > 30$) y las varianzas son muy diferentes."
    ],
    "c": [
      0
    ],
    "exp": "El Test t pooled requiere la suposición fuerte de que ambas poblaciones tienen varianzas iguales ($\\sigma_1^2 = \\sigma_2^2$). Este supuesto se conoce como homocedasticidad. Si no se cumple, debe usarse el Test de Welch."
  },
  {
    "q": "Cuando se realizan pruebas de contraste para la diferencia entre dos medias poblacionales ($\\mu_1$ y $\\mu_2$), y el tamaño muestral es grande ($n \\ge 30$) o las poblaciones son normales, ¿qué estadístico sigue una distribución normal estándar (Z) si conocemos ambas varianzas poblacionales ($\\sigma_1^2$ y $\\sigma_2^2$)?",
    "opts": [
      "Z = (X̄ - Ȳ - δ₀)/√(σ₁²/n₁ + σ₂²/n₂) ",
      "T pooled",
      "F-ratio",
      "D de Cohen"
    ],
    "c": [
      0
    ],
    "exp": "Cuando se conocen las varianzas poblacionales y el tamaño muestral es grande, la aproximación normal estándar Z debe utilizarse. El estadístico correcto es $Z = (X̄ - Ȳ - δ₀)/√(σ₁²/n₁ + σ₂²/n₂)$. Si las varianzas son desconocidas o los tamaños muestrales pequeños, se usaría el test t."
  },
  {
    "q": "Considere dos grupos de sujetos: un grupo A y un grupo B. Si queremos comparar las medianas de sus distribuciones y sospechamos que ambas son asimétricas o la normalidad es dudosa, ¿qué análisis debería considerar?",
    "opts": [
      "Test U de Mann-Whitney",
      "Prueba de T (t) independiente",
      "Análisis de Varianzas (ANOVA)",
      "McNemar's Test"
    ],
    "c": [
      0
    ],
    "exp": "Dado que la variable no cumple con el supuesto de normalidad (o se desea una alternativa robusta), y queremos comparar dos grupos independientes, el test U de Mann-Whitney es la prueba no paramétrica apropiada. El t de Student requiere normalidad o grandes muestras."
  },
  {
    "q": "¿Cuál es la principal consideración al elegir entre el test Mann-Whitney y el test t independiente?",
    "opts": [
      "Mann-Whitney funciona con rangos cuando los datos originales violan la normalidad",
      "El test t asume varianzas iguales, mientras que Mann-Whitney no lo hace",
      "Mann-Whitney requiere una medición ordinal, mientras que t requiere intervalo",
      "Los resultados de ambos tests son matemáticamente equivalentes si $n$ es grande"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Mann-Whitney utiliza rangos (es robusto a la falta de normalidad). El test t asume varianzas iguales solo cuando se usa el pooled; si no hay suposiciones sobre las varianzas, se prefiere Welch o Mann-Whitney."
  },
  {
    "q": "¿Cuándo es apropiado utilizar el test de McNemar?",
    "opts": [
      "Cuando se tienen datos categóricos (binomiales) y la medición es pareada",
      "Para verificar si hay una asociación entre dos variables nominales sin dependencia",
      "Para comparar dos grupos continuos con tamaños muestrales muy grandes ($n>100$)",
      "Cuando el objetivo es calcular un coeficiente de correlación"
    ],
    "c": [
      0,
      1
    ],
    "exp": "McNemar se usa en datos categóricos pareados (ej. Aceptado/Rechazado). No compara la media, sino los porcentajes de concordancia y desacuerdo."
  },
  {
    "q": "¿Qué tipo de información proporciona el test $F$ al comparar varianzas?",
    "opts": [
      "Una métrica para determinar si las poblaciones tienen significativamente diferentes niveles de dispersión",
      "$S_1^2/S_2^2$ (razón de varianzas)",
      "Un valor que ayuda a calcular el tamaño del efecto mediante la razón de varianzas",
      "Indica directamente la diferencia entre medias ($\\bar{X} - \\bar{Y}$)"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test F compara las varianzas. El estadístico $F = S_1^2/S_2^2$ es el valor calculado que se prueba bajo la hipótesis de igualdad de varianzas."
  },
  {
    "q": "¿Cuál debe ser considerado como una limitación crucial del test t de Welch en comparación con un diseño experimental bien controlado?",
    "opts": [
      "Su cálculo depende únicamente de grados de libertad aproximados (Welch-Satterthwaite)",
      "No es adecuado para datos categóricos o conteos",
      "Si las muestras son muy pequeñas ($n<10$), los resultados pueden ser inestables",
      "Exige que la población sea paramétrica, lo cual siempre es falso"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test de Welch maneja varianzas desiguales mediante grados de libertad aproximados. Es robusto a la no-normalidad en muestras grandes, pero su limitación principal sigue siendo el requisito de independencia y estructura muestral."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para aplicar correctamente un análisis t pareado?",
    "opts": [
      "Los datos deben ser recolectados del mismo sujeto o unidad de medida en dos momentos",
      "La diferencia entre pares ($D_i$) debe seguir una distribución aproximadamente normal",
      "Se puede usar si la muestra es muy grande, independientemente de la forma",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El diseño pareado requiere que las observaciones estén relacionadas (mismo sujeto). Además, el test t asume que las *diferencias* son normales."
  },
  {
    "q": "¿Qué pasos se siguen al aplicar el test Mann-Whitney?",
    "opts": [
      "Se asignan rangos a los datos combinados de ambas muestras",
      "La hipótesis nula es la igualdad de medianas (o distribuciones), no necesariamente medias",
      "Los valores originales $X$ e $Y$ se dividen y analizan por separado",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Mann-Whitney opera mediante rangos. Su objetivo es comparar si las dos poblaciones tienen el mismo patrón de distribución (igualdad de distribuciones), lo que a menudo se interpreta como la igualdad de medianas."
  },
  {
    "q": "¿Qué características definen a los datos ideales para aplicar un test de proporciones?",
    "opts": [
      "Variables categóricas (binomiales) y conteos totales",
      "El objetivo es comparar las frecuencias relativas ($\\hat{p}$)",
      "La medición debe ser independiente entre grupos",
      "Se requiere calcular el tamaño del efecto mediante $d$ de Cohen"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tests de proporción trabajan con datos binarios (éxito/fracaso). Requieren independencia y comparan proporciones o porcentajes."
  },
  {
    "q": "¿Qué afirmaciones son correctas sobre la comparación de varianzas?",
    "opts": [
      "Se puede usar el test $F$ solo si se cumplen los supuestos de normalidad",
      "Es crucial saber qué tipo de variación (varianza, desviación estándar) se está comparando",
      "El objetivo es verificar si $\\sigma_1^2 = \\sigma_2^2$",
      "Si la muestra es grande ($n>30$), el test $F$ es menos sensible a desviaciones de normalidad"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test F compara varianzas. Si bien requiere normalidad para ser óptimo, en muestras grandes su robustez mejora (aunque la interpretación sigue siendo sobre la igualdad de $\\sigma^2$)."
  },
  {
    "q": "¿Cuáles son las implicaciones del uso de un test no paramétrico como Wilcoxon signed-rank?",
    "opts": [
      "Se evita el supuesto de distribución normal de las diferencias",
      "Es más apropiado cuando se trabaja con escalas ordinales",
      "Mantienen una potencia similar al test t bajo condiciones ideales",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Wilcoxon es el sustituto no paramétrico del test t pareado. Su fortaleza radica en que opera sobre rangos, eliminando la necesidad de normalidad o linealidad."
  },
  {
    "q": "¿Cuál de los siguientes pares representa correctamente la relación entre sus tests alternativos?",
    "opts": [
      "T independiente / Mann-Whitney U",
      "Pareado / Wilcoxon Signed-Rank",
      "Proporciones Z / Test F",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test t para dos medias independientes tiene el equivalente no paramétrico de Mann-Whitney U. De manera similar, el test t pareado tiene su alternativa en rangos, que es Wilcoxon Signed-Rank. El Test Z de proporciones y Test F son herramientas muy distintas (Z para diferencias entre $p$, F para varianzas), por lo tanto, esta pareja está incorrecta."
  },
  {
    "q": "¿Cuál es la implicación de un valor de $F$ grande en el contexto del F-test de comparación de varianzas?",
    "opts": [
      "Que las dos poblaciones son idénticas.",
      "Que la razón de varianzas muestrales sugiere una diferencia significativa entre $\\sigma_1^2$ y $\\sigma_2^2$.",
      "Que se debe usar un test Z para medias en su lugar.",
      "Que el tamaño muestral es insuficiente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un valor alto de $F = S_1^2 / S_2^2$ (asumiendo que $S_1 > S_2$) indica que la varianza del numerador es mucho mayor que la del denominador. Si este valor supera el umbral crítico bajo $H_0$, rechazamos $H_0$ y concluimos que las varianzas son significativamente distintas."
  },
  {
    "q": "¿Cuáles de estos conceptos están relacionados con la medición de dispersión?",
    "opts": [
      "Varianza",
      "Desviación típica",
      "Cuartiles",
      "Coeficiente de correlación"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Varianza ($\\sigma^2$) y la Desviación Típica ($\\sigma$) son las medidas estándar de dispersión. Los Cuartiles miden posición, no dispersión en sí mismos (aunque ayudan a calcular el Rango Intercuartílico), y el Coeficiente de correlación mide asociación."
  },
  {
    "q": "¿Qué implica estadísticamente rechazar la hipótesis nula ($H_0$) en un test t de Welch con grados de libertad complejos?",
    "opts": [
      "Que existe una evidencia suficiente para concluir que las medias poblacionales son significativamente diferentes.",
      "Que la distribución muestral sigue siendo aproximadamente normal debido al CLT.",
      "Que se debe asumir, a falta de pruebas, que $\\sigma_1^2 = \\sigma_2^2$.",
      "Que el tamaño del efecto es pequeño."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Rechazar $H_0$ implica encontrar evidencia contra la igualdad de medias. La referencia a la normalidad (opción 3) y el uso de grados de libertad complejos son características inherentes al test t de Welch que lo hacen robusto. La opción 2 es incorrecta porque rechazar $H_0$ *ignora* la suposición de igualdad de varianzas, siendo esa la ventaja del test de Welch."
  },
  {
    "q": "¿En el análisis de proporciones con McNemar, ¿qué resultado sugiere un valor p bajo ($p < \\alpha$)?",
    "opts": [
      "Que existe una diferencia estadísticamente significativa en las proporciones observadas entre los desacuerdos.",
      "Que el cambio o la tendencia no es aleatorio y requiere atención.",
      "Que se puede asumir que las dos muestras son independientes.",
      "Que las proporciones totales deben ser comparadas con un test Z simple."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un p bajo en McNemar significa que los desacuerdos son significativos. Esto sugiere que la proporción de 'cambio' (de A a B o de B a A) no es aleatoria y representa un cambio real o una tendencia importante entre las mediciones pareadas."
  },
  {
    "q": "¿Cuáles de los siguientes tests estadísticos están diseñados específicamente para analizar la diferencia en proporciones entre dos grupos?",
    "opts": [
      "Test Z para dos proporciones.",
      "Chi-cuadrado de independencia (para tablas 2x2).",
      "Análisis de Varianza (ANOVA) factorial.",
      "Ujiio Mann-Whitney U."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Test Z para dos proporciones compara $\\hat{p}_1$ vs $\\hat{p}_2$. El test Chi-cuadrado es el método general más usado en tablas de contingencia (como una tabla 2x2) y su hipótesis nula se relaciona directamente con la independencia o igualdad de proporciones."
  },
  {
    "q": "¿Cuáles son las ventajas del uso de pruebas no paramétricas como Mann-Whitney U y Wilcoxon Signed-Rank?",
    "opts": [
      "No requieren asumir una distribución normal en la población.",
      "Funcionan correctamente incluso cuando hay valores atípicos (outliers).",
      "Son más poderosas que sus contrapartes paramétricas si los datos están perfectamente normales.",
      "Siempre proporcionan un cálculo de tamaño del efecto más preciso."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las pruebas no paramétricas son robustas porque operan sobre rangos o signos en lugar de medias. Por lo tanto, eliminan la necesidad de asumir Normalidad y son menos sensibles a los outliers."
  },
  {
    "q": "¿Qué test se utiliza específicamente cuando se tienen datos pareados (antes/después) en una sola muestra?",
    "opts": [
      "Ujiio t para muestras pareadas.",
      "Test Wilcoxon Signed-Rank.",
      "Test de McNemar.",
      "F-test."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test $t$ pareado compara la media de las diferencias ($\\bar{D}$). El Wilcoxon Signed-Rank es su alternativa no paramétrica. McNemar se usa para proporciones en tablas 2x2 pareadas."
  },
  {
    "q": "¿Qué tipo de información proporciona un test $\\chi^2$ (Chi-cuadrado) aplicado a una tabla de contingencia 2x2?",
    "opts": [
      "Si existe una asociación estadísticamente significativa entre dos variables categóricas.",
      "Permite calcular el tamaño del efecto $(\\phi)$ asociado al contraste.",
      "Indica la proporción acumulada en la cola derecha de la distribución.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El $\\chi^2$ evalúa si las frecuencias observadas difieren significativamente de lo esperado bajo independencia. Además, permite el cálculo de medidas como Phi ($\\phi$), que es un tamaño del efecto."
  },
  {
    "q": "¿Cómo se diferencia conceptualmente el Test Z de dos medias (cuando $\\sigma$ son conocidas) del test $t$?",
    "opts": [
      "El test Z utiliza una distribución normal estándar, mientras que el $t$ usa la t de Student.",
      "El uso de parámetros poblacionales ($\\sigma$) permite que el test Z tenga mayor potencia asintótica.",
      "El test $t$ está limitado a muestras muy pequeñas ($n<10$), lo cual no es cierto.",
      "Ambos tests son intercambiables siempre y cuando los tamaños muestrales sean grandes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La diferencia fundamental es la distribución utilizada: Z usa $\\sigma$ conocidas (normal estándar), mientras que $t$ se usa cuando solo conocemos las desviaciones estándar muestrales ($s$), ajustando por los grados de libertad."
  },
  {
    "q": "¿Qué significa un valor $p < 0.05$ en el contexto de un contraste de hipótesis?",
    "opts": [
      "Se rechaza la hipótesis nula ($H_0$) y se considera que hay evidencia significativa de diferencia.",
      "Los resultados son estadísticamente significativos, pero puede no ser clínicamente relevante.",
      "Existe una probabilidad del 95% de encontrar los datos observados por azar.",
      "El tamaño muestral es demasiado pequeño para concluir algo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si $p < \\alpha$ (ej. 0.05), rechazamos $H_0$. Esto significa que los datos observados son muy improbables si $H_0$ fuera cierta. Sin embargo, un resultado significativo no implica automáticamente relevancia práctica."
  },
  {
    "q": "¿Cuándo se debe preferir el Test t pooled sobre el Test t de Welch?",
    "opts": [
      "Cuando existe una fuerte evidencia teórica o visual de homogeneidad de varianzas (homocedasticidad).",
      "Siempre que se desconocen las desviaciones estándar poblacionales ($\\sigma$).",
      "Cuando la muestra tamaño $n_1$ es mucho menor que $n_2$.",
      "Cuando los datos son categóricos y no siguen distribución normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Test t pooled es más eficiente *solo* si asumimos correctamente la igualdad de varianzas ($\\sigma_1^2 = \\sigma_2^2$), lo cual se basa en evidencia teórica. Si las varianzas son notoriamente diferentes, el test de Welch (que es más robusto) debe usarse."
  },
  {
    "q": "¿Cuáles son los supuestos clave que deben cumplirse para aplicar correctamente la prueba t de muestras independientes?",
    "opts": [
      "Los datos deben ser mediciones a intervalo o razón.",
      "Las variables deben provenir de poblaciones con distribución aproximadamente normal.",
      "El tamaño de muestra ($n$) debe ser suficientemente grande (>30) para usar el Teorema del Límite Central.",
      "Las varianzas poblacionales ($\\sigma_1^2$ y $\\sigma_2^2$) deben ser iguales (homocedásticas)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para la prueba t clásica se requiere normalidad o muestras grandes. El supuesto de igualdad de varianzas es necesario *solo* si se elige el test pooled; si no hay evidencia, se prefiere Welch."
  },
  {
    "q": "¿En qué situaciones resulta indispensable usar un test estadístico no paramétrico?",
    "opts": [
      "Cuando la variable dependiente es ordinal o nominal.",
      "Cuando los datos violan severamente el supuesto de normalidad y $n$ es pequeño.",
      "Cuando se opera con distribuciones desconocidas (por ejemplo, datos de cola pesada).",
      "Siempre que se quiera calcular una diferencia entre medias."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tests no paramétricos son la herramienta de elección cuando los datos no cumplen los supuestos estrictos (como normalidad) o cuando el tipo de medición es inferior a intervalo/razón."
  },
  {
    "q": "¿Qué aspectos se consideran al interpretar el tamaño del efecto ($d$ de Cohen)?",
    "opts": [
      "El valor numérico indica la magnitud y la dirección de la diferencia entre grupos.",
      "Es útil para determinar si una diferencia observada es clínicamente o prácticamente significativa, independientemente del $p$-valor.",
      "Permite comparar la fuerza de asociación entre dos variables categóricas.",
      "Su cálculo depende únicamente de las desviaciones estándar muestrales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El tamaño del efecto (d) mide cuán grande es el impacto real. Esto separa la significancia estadística ($p$) de la significancia práctica o clínica."
  },
  {
    "q": "¿Qué condiciones se evalúan al realizar un test para dos proporciones ($\\hat{p}_1$ vs $\\hat{p}_2$)?",
    "opts": [
      "Los tamaños muestrales $n_1$ y $n_2$ deben ser mayores a 5 (o 10) por cada grupo.",
      "Debe asumirse la igualdad de las proporciones en la hipótesis nula ($H_0: p_1 = p_2$).",
      "La variable debe seguir una distribución normal.",
      "Las observaciones deben estar correlacionadas positivamente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Se requiere que los $n \\cdot p$ y $n \\cdot (1-p)$ sean suficientemente grandes para aproximar la distribución binomial a normal. La hipótesis nula siempre asume igualdad."
  },
  {
    "q": "¿Cuáles son las principales ventajas de utilizar un test pareado (Paired T-test) en lugar de dos muestras independientes?",
    "opts": [
      "Elimina la variabilidad individual y solo se enfoca en el cambio dentro del sujeto.",
      "Aumenta el poder estadístico si los sujetos son resistentes a factores externos.",
      "Permite controlar sistemáticamente las diferencias inherentes entre individuos (sujetos).",
      "Requiere que ambos grupos sean de tamaño muestral muy grande."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Al usar datos pareados, se reduce el error tipo II porque la variabilidad intersujeto es removida o controlada, aumentando el poder del test."
  },
  {
    "q": "¿Qué propiedades fundamentales definen a las medidas de tendencia central?",
    "opts": [
      "Representan un único valor que resume el centro típico de un conjunto de datos.",
      "Son sensibles a valores atípicos (outliers) cuando se trata de la media aritmética.",
      "Se pueden calcular utilizando tanto variables cuantitativas como cualitativas bajo ciertas condiciones.",
      "Indican necesariamente la forma asimétrica de la distribución."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La media y mediana son medidas centrales. La media es sensible a outliers; si los datos no son normales, la mediana puede ser más robusta."
  },
  {
    "q": "¿Cuáles deben cumplirse para poder aplicar correctamente un test estadístico de hipótesis general?",
    "opts": [
      "El nivel $\\alpha$ (significancia) debe ser definido antes de recopilar los datos.",
      "Se debe especificar claramente la Hipótesis Nula ($H_0$) y la Alternativa ($H_a$).",
      "Los datos deben estar medidos en una escala de intervalo o razón para calcular distancias.",
      "El valor $p$ obtenido siempre es un indicador directo del tamaño del efecto."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Establecer hipótesis claras y definir el nivel $\\alpha$ son pasos fundamentales. Además, la naturaleza continua (intervalo/razón) de los datos es crucial para calcular estadísticas paramétricas."
  },
  {
    "q": "¿Qué aspectos se deben considerar al comparar varianzas poblacionales ($\\sigma_1^2$ vs $\\sigma_2^2$)?",
    "opts": [
      "El F-test asume que las muestras son normales y de tamaño considerable.",
      "La raíz del test es la razón de las varianzas muestrales, $F = S_1^2 / S_2^2$.",
      "Es una prueba altamente sensible a violaciones de normalidad en los datos fuente.",
      "Solo se debe utilizar cuando el objetivo final sea medir diferencias de medias."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El F-test compara varianzas. Sus supuestos más críticos son la normalidad y que las muestras sean independientes."
  },
  {
    "q": "¿Cuándo es apropiado considerar una aproximación Z en lugar de usar el test t?",
    "opts": [
      "Cuando los tamaños muestrales ($n_1$ o $n_2$) son muy grandes (típicamente $n>30$).",
      "Cuando las desviaciones estándar poblacionales ($\\sigma$) son conocidas.",
      "Cuando la distribución poblacional se sabe que es perfectamente normal.",
      "Siempre que el test involucra datos pareados."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si los tamaños de muestra son muy grandes, la distribución t converge a la distribución Z (normal estándar). Si $\\sigma$ se conoce, usamos $Z$ directamente."
  },
  {
    "q": "¿Qué elementos son esenciales al describir el proceso estadístico completo?",
    "opts": [
      "Especificar y justificar la elección del test adecuado basado en la naturaleza de los datos.",
      "Calcular tanto la significancia estadística ($p$-valor) como el tamaño del efecto (ej. $d$ o $\\eta^2$).",
      "Realizar una revisión exhaustiva de las suposiciones asumidas por el modelo elegido.",
      "Interpretar siempre los resultados solo en términos de rechazo o no rechazo de $H_0$, sin contexto práctico."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un análisis completo requiere seleccionar bien la herramienta (paso 1), medir tanto el efecto como su probabilidad ($p$-valor), y reportar las suposiciones. Nunca se debe interpretar un resultado puramente en términos de rechazo/aceptación."
  },
  {
    "q": "¿Cuáles son los supuestos clave al aplicar el test t pooled (varianzas iguales)?",
    "opts": [
      "Independencia de las observaciones en ambos grupos.",
      "Homocedasticidad ($\\sigma_1^2 = \\sigma_2^2$).",
      "Normalidad de las poblaciones que generan las muestras.",
      "Que la muestra sea aleatoria y representativa."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test t pooled requiere tres supuestos principales: (1) Independencia entre grupos, (2) Normalidad de las poblaciones, y crucialmente, (3) Homocedasticidad (igualdad de varianzas)."
  },
  {
    "q": "¿Qué condiciones hacen que el Test t de Welch sea superior o preferible al test t pooled?",
    "opts": [
      "No asume la igualdad de varianzas poblacionales ($\\sigma_1^2 \\neq \\sigma_2^2$).",
      "Puede manejar tamaños muestrales muy diferentes entre grupos.",
      "Es más robusto ante violaciones leves de normalidad que el test Z.",
      "Requiere calcular manualmente los grados de libertad mediante una fórmula compleja."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Test de Welch es preferible porque no exige la suposición de homocedasticidad (igualdad de varianzas), lo cual aumenta su robustez en la práctica estadística."
  },
  {
    "q": "¿Qué afirmaciones son correctas sobre el test t pareado (Wilcoxon signed-rank)?",
    "opts": [
      "Analiza las diferencias individuales ($D_i = X_i - Y_i$).",
      "Es el contraste más apropiado cuando se mide la misma variable en dos momentos diferentes.",
      "Utiliza la distribución $t$ con grados de libertad $n-1$.",
      "Su alternativa no paramétrica es el test U de Mann-Whitney."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test pareado (o t para datos relacionados) se enfoca en las diferencias ($D_i$). Es ideal para diseños longitudinales o pre/post-test. El signo de 'Pareado' evita la varianza intersujeto y es más potente que el Mann-Whitney en su contexto."
  },
  {
    "q": "Sobre el test $F$ para comparar las varianzas $\\sigma_1^2$ y $\\sigma_2^2$ de dos poblaciones normales independientes, ¿cuáles de las siguientes afirmaciones son correctas?",
    "opts": [
      "Bajo $H_0: \\sigma_1^2 = \\sigma_2^2$, el estadístico $F = s_1^2/s_2^2$ sigue una distribución $F_{n_1-1,\\, n_2-1}$.",
      "Es una prueba muy sensible a desviaciones de la Normalidad, por lo que conviene usarla con cautela.",
      "Es robusto frente a la asimetría de las poblaciones.",
      "No requiere que las muestras sean independientes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Bajo $H_0$, $F = s_1^2/s_2^2 \\sim F_{n_1-1,n_2-1}$; sin embargo, el test $F$ es muy sensible a la falta de normalidad, por lo que su robustez frente a asimetría es limitada y exige independencia entre muestras."
  },
  {
    "q": "¿Cuáles son las características del test Z para dos proporciones ($Z = (\\hat{p}_1 - \\hat{p}_2) / SE_{H_0}$)?",
    "opts": [
      "Se utiliza cuando se comparan datos categóricos de dos grupos.",
      "Requiere el cálculo de una proporción común bajo la hipótesis nula ($\\text{SE}_{H_0}$).",
      "Asume que las muestras son independientes entre sí.",
      "Es más sensible a los tamaños muestrales pequeños que el test t."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Este test se usa para proporciones. Requiere calcular la proporción común bajo $H_0$ (el SE) y puede utilizarse con muestras grandes e independientes."
  },
  {
    "q": "¿Qué métodos estadísticos son adecuados para datos categóricos pareados?",
    "opts": [
      "Test de McNemar.",
      "Se calcula observando las celdas donde el estado cambia ($A \\rightarrow B$).",
      "Se utiliza cuando solo se compara la proporción de 'Sí' vs. 'No'.",
      "El test t es inadecuado porque no mide diferencias continuas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "McNemar está diseñado específicamente para medir la asociación o cambio en datos dicotómicos pareados (ej: ¿mejora? Sí/No). Se centra en las celdas de discordancia."
  },
  {
    "q": "¿Cuáles son los supuestos críticos al comparar dos grupos utilizando un test no paramétrico?",
    "opts": [
      "Los datos deben ser medibles por una escala ordinal o superior.",
      "La naturaleza de la distribución (normalidad) es irrelevante para su cálculo basado en rangos.",
      "Se debe asegurar que las muestras sean independientes si se usa Mann-Whitney.",
      "Solo aplica cuando el test t falla."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Estos tests son robustos ante fallas de normalidad. Solo requieren un ordenamiento (escala ordinal) y la independencia o dependencia adecuada."
  },
  {
    "q": "¿Qué conceptos se relacionan con los tamaños del efecto estadístico?",
    "opts": [
      "d de Cohen.",
      "$\\eta^2$ (Eta cuadrado).",
      "El test F es una medida directa del tamaño del efecto.",
      "La interpretación de valores P."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El d de Cohen y $\\eta^2$ son métricas que cuantifican la magnitud de la diferencia o relación. El valor p simplemente indica la probabilidad bajo $H_0$, no el tamaño."
  },
  {
    "q": "¿Cuáles son las implicaciones conceptuales al elegir entre Mann-Whitney y Wilcoxon signed-rank?",
    "opts": [
      "Mann-Whitney se usa para grupos independientes.",
      "Wilcoxon signed-rank es el contraste adecuado para muestras pareadas (longitudinal).",
      "Ambos reemplazan al test t cuando los datos no cumplen la normalidad.",
      "El poder estadístico de ambos depende del tipo de distribución subyacente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Esta pregunta compara su aplicación: MW (independientes) y Wilcoxon (pareados). Ambos tienen el mismo propósito conceptual: evitar supuestos paramétricos."
  },
  {
    "q": "Para aplicar la aproximación Normal (test $Z$) al contraste de dos proporciones $p_1$ vs $p_2$ con muestras independientes, ¿cuáles de las siguientes condiciones son correctas?",
    "opts": [
      "Los conteos esperados $n_1\\hat p_1$, $n_1(1-\\hat p_1)$, $n_2\\hat p_2$ y $n_2(1-\\hat p_2)$ deben ser suficientemente grandes (p.ej. $\\ge 5$).",
      "Las dos muestras deben ser independientes entre sí.",
      "Las muestras deben estar emparejadas (diseño antes/después).",
      "Se exige como requisito que $\\hat p_1 = \\hat p_2$ en la muestra observada."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La aproximación Z requiere éxitos y fracasos esperados suficientemente grandes en cada grupo y muestras independientes. Si los datos están emparejados conviene el test de McNemar, y no se exige $\\hat p_1 = \\hat p_2$ en la muestra."
  },
  {
    "q": "¿Cuáles son los objetivos principales del contraste de hipótesis para dos muestras?",
    "opts": [
      "Determinar si existen diferencias significativas entre $\\mu_1$ y $\\mu_2$.",
      "Comparar si las proporciones ($p_1$ y $p_2$) son iguales.",
      "Estimar la varianza poblacional ($\\sigma^2$).",
      "Calcular el valor de $t$ o $Z$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El objetivo es contrastar. Se puede comparar medias (continuas) o proporciones (categóricas). Estimar la varianza es un paso intermedio, no el objetivo final del contraste."
  },
  {
    "q": "¿Qué se debe tener en cuenta al interpretar los resultados de un test estadístico?",
    "opts": [
      "El valor p bajo indica una diferencia significativa a nivel muestral.",
      "Los tamaños del efecto (d) indican la relevancia práctica o clínica de las diferencias encontradas.",
      "Se debe reportar el tipo de contraste utilizado (ej: Welch vs. Pooled).",
      "Un resultado no significativo implica que no hay ninguna relación entre variables."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Es vital diferenciar 'significancia estadística' (valor p) de 'relevancia práctica' (tamaño del efecto d). Un valor p alto puede coexistir con un tamaño del efecto grande en muestras muy pequeñas."
  },
  {
    "q": "¿Qué se requiere asumir para utilizar la fórmula $Z = (\\bar{X} - \\bar{Y} - \\delta_0)/\\sqrt{(\\sigma_1^2/n_1 + \\sigma_2^2/n_2)}$?",
    "opts": [
      "Que las muestras sean independientes.",
      "Conocimiento de las varianzas poblacionales ($\\sigma_1^2$ y $\\sigma_2^2$).",
      "Normalidad en la población generadora.",
      "Un tamaño muestral grande ($n \\rightarrow \\infty$)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Esta fórmula Z requiere independencia de muestras y, crucialmente, el conocimiento previo de las varianzas poblacionales ($\\sigma^2$)."
  },
  {
    "q": "¿Cuáles son las principales diferencias conceptuales entre el Test t independiente y el Test pareado?",
    "opts": [
      "El test pareado elimina la variabilidad intersujeto.",
      "El test independiente asume independencia total entre muestras.",
      "El test pareado se usa solo para variables normales.",
      "Ambos tests requieren que los datos sigan una distribución normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La clave del diseño es: el test pareado analiza las diferencias individuales ($D_i = X_i - Y_i$), eliminando la variabilidad causada por características inherentes al sujeto. El test independiente asume que los sujetos de un grupo no tienen relación con los de otro grupo."
  },
  {
    "q": "¿Cuáles son los requisitos fundamentales (asunciones) al aplicar el Test t independiente?",
    "opts": [
      "Las muestras deben ser independientes.",
      "La población debe seguir una distribución normal o tener N grande.",
      "Se requiere conocer la varianza poblacional ($\\sigma^2$).",
      "Los tamaños de muestra deben ser iguales ($n_1 = n_2$)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las asunciones básicas son: independencia entre muestras y que los datos se distribuyan normalmente (o usar el Teorema del Límite Central si $N$ es grande). Conocer la varianza poblacional no es un requisito para ninguno de los tests t."
  },
  {
    "q": "¿Cuándo se debe utilizar el test Mann-Whitney U en lugar del Test t independiente?",
    "opts": [
      "Cuando los datos son categóricos y pareados.",
      "Cuando los datos están medidos por rangos (ordinales) o cuando la normalidad es altamente dudosa.",
      "Cuando las varianzas poblacionales se sabe que son iguales.",
      "Siempre que el tamaño de muestra sea grande, sin importar la distribución."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Mann-Whitney U es el sustituto no paramétrico del test t independiente. Se prefiere cuando los datos violan gravemente la normalidad o tienen naturaleza ordinal (rangos). La opción 'categóricos y pareados' corresponde a McNemar."
  },
  {
    "q": "¿Qué representa la estatística $d$ en el contexto del tamaño del efecto Cohen?",
    "opts": [
      "La diferencia entre medias observadas y las esperadas bajo H₀.",
      "Una medida estandarizada de la magnitud de la diferencia entre grupos.",
      "Un valor que requiere normalidad gaussiana para su cálculo.",
      "Solo es aplicable cuando los tamaños muestrales son muy grandes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Cohen's $d$ estandariza la diferencia de medias dividiéndola por la desviación estándar combinada. Por lo tanto, mide la magnitud (tamaño) del efecto en unidades de Desviación Estándar, sin importar las unidades originales."
  },
  {
    "q": "¿Qué indica una gran diferencia entre las varianzas (F-test) antes de realizar la comparación de medias?",
    "opts": [
      "Que se debe utilizar el Test t de Welch.",
      "Que el test t pooled será inválido o poco preciso.",
      "Que es más apropiado usar el análisis ANCOVA.",
      "Que los datos son inherentemente no gaussianos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La prueba F (F-test) compara varianzas. Si estas difieren significativamente ($\\sigma_1^2 \neq \\sigma_2^2$), se debe evitar el test t pooled y optar por la versión de Welch, que es robusta a esta violación de supuestos."
  },
  {
    "q": "¿Cuál es la principal diferencia conceptual entre el test t *pooled* y el test t de Welch al comparar dos medias poblacionales?",
    "opts": [
      "El test pooled asume que las varianzas son iguales ($$\\sigma_1^2 = \\sigma_2^2$$), mientras que Welch no lo asume.",
      "El test t de Welch es el método preferido en la práctica porque nunca requiere asumir homogeneidad de varianzas.",
      "Welch siempre tiene más poder estadístico porque utiliza los grados de libertad aproximados (gl).",
      "Ambos tests son idénticos matemáticamente; solo difieren en su nombre."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test pooled (varianzas iguales) es más eficiente si la asunción se cumple. Sin embargo, el test de Welch (no asume igualdad de varianzas) es generalmente preferido porque es robusto y su uso es válido incluso cuando las varianzas son iguales, sin perder potencia."
  },
  {
    "q": "¿Qué condiciones deben cumplirse para utilizar el test t pooled?",
    "opts": [
      "Asumir la independencia entre las muestras",
      "Asumir homocedasticidad ($\\sigma_1^2 = \\sigma_2^2$)",
      "Requiere que los tamaños muestrales sean relativamente grandes (N>30)",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test t pooled requiere la independencia de las muestras y, crucialmente, asumir la igualdad de varianzas ($\\sigma_1^2 = \\sigma_2^2$). No es estrictamente necesario que N sea grande si se cumple normalidad."
  },
  {
    "q": "¿Cuándo debe preferirse el test t de Welch sobre el test t pooled?",
    "opts": [
      "Cuando los tamaños muestrales son muy diferentes ($n_1 \neq n_2$)",
      "Siempre que no se pueda confirmar la igualdad de varianzas",
      "Cuando las desviaciones estándar observadas difieren significativamente",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test t de Welch es robusto y recomendado cuando existe sospecha o evidencia de que las varianzas poblacionales son desiguales ($\\sigma_1^2 \neq \\sigma_2^2$). Es la opción más segura si no se cumplen los supuestos para el pooled."
  },
  {
    "q": "¿Cuál es la variable central analizada en un test t pareado?",
    "opts": [
      "Las diferencias individuales ($D_i = X_i - Y_i$)",
      "La variabilidad de las mediciones entre sujetos",
      "El coeficiente de correlación entre $X$ e $Y$",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "En el test pareado, se eliminan las diferencias individuales y solo se analiza la media de las diferencias ($D̄$). La variable clave es $D_i$."
  },
  {
    "q": "¿Cuál es el propósito fundamental del contraste de dos proporciones?",
    "opts": [
      "Comparar si dos poblaciones tienen diferentes probabilidades de éxito",
      "Estimar la proporción común poblacional",
      "Determinar la asociación entre variables cualitativas",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Este test se centra en comparar $p_1$ y $p_2$. El contraste más potente es bajo $H_0: p_1 = p_2$, que implica asumir una proporción común (pooled proportion)."
  },
  {
    "q": "¿Qué implicación tiene la elección de un test no paramétrico como Mann-Whitney?",
    "opts": [
      "Manejar datos que violan el supuesto de normalidad",
      "Reducir los datos a sus rangos en lugar de utilizar valores brutos",
      "Ofrecer una alternativa robusta cuando se desconocen las distribuciones subyacentes",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tests no paramétricos (Mann-Whitney, Wilcoxon) son la opción por defecto si los datos no cumplen supuestos de normalidad o distribución específicos. Operan en rangos para mantener la robustez."
  },
  {
    "q": "¿Qué tipo de resultado se obtiene al realizar un F-test?",
    "opts": [
      "Un valor $F$ que compara la razón de varianzas",
      "La determinación de si las dos poblaciones varían significativamente entre sí",
      "Una indicación sobre la adecuada forma de distribución (Normalidad)",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El F-test evalúa el contraste $H_0: \\sigma_1^2 = \\sigma_2^2$. El estadístico es $F = S_1^2/S_2^2$ y su p-valor indica si la igualdad de varianzas es plausible."
  },
  {
    "q": "¿Qué función cumple el cálculo del tamaño del efecto (d de Cohen)?",
    "opts": [
      "Evaluar cuán grandes son los datos muestrales en comparación con la media cero",
      "Cuantificar la diferencia observada entre grupos en unidades estandarizadas",
      "Ayudar a determinar si es necesario realizar un test estadístico formal",
      "Indicar el nivel de significancia (p-valor) del contraste"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El tamaño del efecto nos dice *cuán grande* es la diferencia o relación, mientras que el test t/Z solo nos dice si la diferencia observada es *estadísticamente significativa*. Son métricas complementarias."
  },
  {
    "q": "¿Cuál de los siguientes procedimientos estadísticos está diseñado para analizar datos categóricos pareados (dependientes) en una tabla $2\\times 2$?",
    "opts": [
      "Test Chi-cuadrado de independencia",
      "Test McNemar",
      "ANOVA bidireccional",
      "Prueba Z para proporciones"
    ],
    "c": [
      0,
      1
    ],
    "exp": "McNemar es el test estándar para tablas categóricas pareadas ($2\\times2$), ideal para medir la concordancia o el cambio entre dos mediciones dicotómicas."
  },
  {
    "q": "¿En un contraste de hipótesis que compara dos proporciones ($p_1$ vs $p_2$), ¿cuándo se debe usar una proporción combinada (pooled proportion)?",
    "opts": [
      "Cuando la hipótesis nula establece que ambas poblaciones tienen la misma proporción bajo evaluación",
      "Siempre que los tamaños muestrales sean iguales ($n_1 = n_2$)",
      "Solo si el test de Chi-cuadrado es significativo",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Se utiliza la proporción combinada ($\\hat{p}_{pooled}$) cuando $H_0: p_1 = p_2$, pues se asume que existe una única fuente común de éxito o fracaso para ambas muestras."
  },
  {
    "q": "¿Cuál es el propósito principal del contraste t de Welch?",
    "opts": [
      "Proporcionar un test robusto sin asumir la igualdad de varianzas",
      "Aproximarse al test Z cuando los tamaños muestrales son muy grandes",
      "Reducir las pérdidas de poder estadístico en comparación con el pooled",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Welch fue desarrollado para evitar el error cometido por el t-pooled bajo la condición de varianzas desiguales. Es más robusto y su grados de libertad son calculados de forma compleja (aproximación Welch-Satterthwaite)."
  },
  {
    "q": "¿Cuáles de los siguientes enunciados sobre la interpretación del tamaño del efecto son correctos?",
    "opts": [
      "El valor es adimensional.",
      "Depende de una escala estándar para su cuantificación (ej. SD).",
      "Permite estandarizar el hallazgo para comparar diferentes estudios.",
      "Un valor cercano a cero indica un efecto muy fuerte y significativo."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El tamaño del efecto es adimensional (por ejemplo, Cohen's d). Está normalizado respecto a una escala estándar (SD), lo cual permite que los resultados sean comparables entre distintas muestras y contextos. Un valor cercano a cero indica la ausencia de efecto."
  },
  {
    "q": "¿Cuáles variables son necesarias para realizar un análisis estadístico comparando dos muestras? (Seleccione todas las que apliquen)",
    "opts": [
      "Las medias muestrales ($\\bar{X}_1, \\bar{X}_2$).",
      "Los tamaños muestrales ($n_1, n_2$).",
      "La varianza poblacional de cada muestra ($\\sigma_1^2, \\sigma_2^2$).",
      "El valor $p$ del contraste."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para la mayoría de los tests paramétricos (como t o Z), se requieren las medidas centrales ($\\bar{X}$), el tamaño ($n$) y una estimación de la dispersión ($\\sigma^2$ o $s^2$). El valor $p$ es un resultado, no un dato inicial."
  },
  {
    "q": "¿Qué interpretación corresponde a los estadísticos de efecto (effect size) en estadística inferencial?",
    "opts": [
      "Un valor bajo de Cohen indica que la diferencia observada entre grupos es pequeña.",
      "Un valor alto de Kappa o $\\phi$ sugiere una fuerte asociación categórica.",
      "El $R^2$ mide la proporción de varianza explicada por el modelo.",
      "La raíz cuadrada del coeficiente de correlación siempre da un tamaño de efecto."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El cálculo de tamaños del efecto (d de Cohen, Kappa, $\\eta^2$, etc.) es crucial para ir más allá del valor $p$. Un bajo 'd' significa que la diferencia es clínicamente insignificante, y los otros ítems describen correctamente el significado de sus respectivos coeficientes."
  },
  {
    "q": "¿Cuáles son los parámetros que determinan el estadístico $F$ y cuándo debe usarse?",
    "opts": [
      "$S_1^2 / S_2^2$: se usa para comparar varianzas poblacionales.",
      "Requiere la suposición de Normalidad, pero no es tan sensible como otros tests.",
      "Se utiliza en el ANOVA y cuando se compara si las dispersiones son iguales.",
      "Solo puede usarse con datos categóricos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El ratio de varianzas $S_1^2 / S_2^2$ forma el estadístico F. Aunque es sensible a la normalidad (lo que lo hace poderoso), su uso principal y conceptual radica en comparar varianzas o como parte del ANOVA."
  },
  {
    "q": "¿Cuáles son los componentes clave en la formulación de una prueba de hipótesis para dos medias poblacionales?",
    "opts": [
      "Los estadísticos muestrales (medias $\\bar{X}_1, \\bar{X}_2$) y el nivel de significancia ($\\alpha$).",
      "La varianza combinada ($S_p^2$) o la desviación estándar para reducir errores.",
      "El cálculo del intervalo de confianza asociado al contraste.",
      "La hipótesis nula ($H_0: \\mu_1 = \\mu_2$) y las desviaciones estándar poblacionales ($\\sigma_1, \\sigma_2$)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para realizar un test $t$ o Z, se necesita establecer formalmente la hipótesis nula (punto 1). Los cálculos usan los datos muestrales ($\\bar{X}$, $\\alpha$) y las varianzas combinadas para estimar el error estándar. El intervalo de confianza es la herramienta complementaria clave."
  },
  {
    "q": "¿Cuáles son las hipótesis nulas y alternativas correctas para comparar la proporción de éxito en dos grupos ($p_1$ vs $p_2$)?",
    "opts": [
      "$H_0: p_1 = p_2$ (No hay diferencia entre proporciones).",
      "$H_A: p_1 \neq p_2$ (Existe una diferencia en las proporciones).",
      "$H_{A}: p_1 > p_2$ (La proporción 1 es mayor que la proporción 2).",
      "Siempre se debe asumir $p_1 / n_1 = p_2 / n_2$ para el cálculo Z."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Se pueden plantear los tres tipos de hipótesis (bidireccional $\neq$, unidireccional $>$ o $<$). La formulación $H_0: p_1 = p_2$ es el punto de partida universal. El cálculo Z usa la proporción combinada bajo $H_0$."
  },
  {
    "q": "Respecto a las hipótesis nulas y alternativas al comparar dos proporciones ($p_1$ y $p_2$), ¿qué afirmaciones son correctas? A) Bajo $H_0$, se asume que la proporción común es igual en ambas poblaciones. B) El test utiliza una aproximación Z (normal). C) Se debe utilizar el estadístico de prueba con la varianza combinada o 'pooled'. D) La desviación estándar es un estimador más robusto que la proporción.",
    "opts": [
      "Bajo $H_0$, se asume que la proporción común es igual en ambas poblaciones",
      "El test utiliza una aproximación Z (normal)",
      "Se debe utilizar el estadístico de prueba con la varianza combinada o 'pooled'",
      "La desviación estándar es un estimador más robusto que la proporción"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Bajo $H_0$, $\\sqrt{p_{común}(1-p_{común})/(n_1+n_2)}$, se usa una aproximación Z. Además, para calcular el estadístico de prueba (combinado o pooled) en proporciones, se requiere asumir la igualdad de las proporciones bajo $H_0$."
  },
  {
    "q": "Cuando realizamos un Test t independiente y asumimos que las varianzas son iguales ($\\sigma_1^2 = \\sigma_2^2$), ¿cuáles son los pasos o condiciones correctas? A) Se debe calcular la varianza combinada (pooled variance). B) Los grados de libertad se calculan como $n_1 + n_2 - 2$. C) La muestra de datos debe seguir una distribución normal. D) Siempre es más potente que el test de Welch.",
    "opts": [
      "Se debe calcular la varianza combinada (pooled variance)",
      "Los grados de libertad se calculan como $n_1 + n_2 - 2$",
      "La muestra de datos debe seguir una distribución normal",
      "Siempre es más potente que el test de Welch"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El Test t pooled requiere calcular la varianza combinada ($S_p^2$) y usa los grados de libertad $n_1 + n_2 - 2$. Como cualquier prueba paramétrica, asume Normalidad. Aunque es eficiente bajo homocedasticidad, no siempre garantiza ser más potente que Welch si esta suposición falla."
  },
  {
    "q": "Al elegir entre un test paramétrico (como t) y uno no paramétrico (como Mann-Whitney), ¿qué criterios guían la decisión? A) La verificación de Normalidad en los datos. B) Si las muestras son independientes o pareadas. C) El cálculo del tamaño del efecto (ej. d de Cohen). D) La estructura de los datos, especialmente si son ordinales.",
    "opts": [
      "La verificación de Normalidad en los datos",
      "El cálculo del tamaño del efecto (ej. d de Cohen)",
      "La estructura de los datos, especialmente si son ordinales",
      "Si las muestras son independientes o pareadas"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La elección depende de: 1) Normalidad/Parametrizabilidad (si falla, se usa no paramétrico). 2) Tipo de diseño (independiente o pareado). 3) La naturaleza de la variable (ordinales sugieren pruebas basadas en rangos como Mann-Whitney). El tamaño del efecto es secundario para la selección del test."
  },
  {
    "q": "Consideremos el Test t de Welch vs. el Test t pooled. ¿Cuáles son las consideraciones clave sobre su uso? A) El test de Welch no asume la igualdad de varianzas, siendo más flexible. B) El test t pooled requiere estrictamente homocedasticidad para ser válido. C) Si las varianzas son muy diferentes, el test de Welch es superior al pooled. D) Ambos requieren que los datos sean paramétricamente normales.",
    "opts": [
      "El test de Welch no asume la igualdad de varianzas, siendo más flexible",
      "El test t pooled requiere estrictamente homocedasticidad para ser válido",
      "Si las varianzas son muy diferentes, el test de Welch es superior al pooled",
      "Ambos requieren que los datos sean paramétricamente normales"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Welch no asume igualdad de varianzas (Flexibilidad). Pooled requiere homocedasticidad. Si las varianzas son muy distintas, el supuesto de Welch se cumple mejor y es la opción más robusta."
  },
  {
    "q": "En el contexto del test pareado con datos $D_i = X_i - Y_i$, ¿cuáles son los elementos cruciales a considerar? A) El cálculo de la media de las diferencias ($\\bar{D}$). B) La hipótesis nula sobre la diferencia poblacional ($\\delta_0$). C) El uso del test t estándar para muestras independientes. D) Determinar el tamaño del efecto mediante la desviación estándar o coeficiente de correlación.",
    "opts": [
      "El cálculo de la media de las diferencias ($\\bar{D}$)",
      "La hipótesis nula sobre la diferencia poblacional ($\\delta_0$)",
      "Determinar el tamaño del efecto mediante la desviación estándar o coeficiente de correlación",
      "El uso del test t estándar para muestras independientes"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El análisis pareado se centra en $\\bar{D}$ y $H_0: \\delta = 0$. Se usa t-test para estas diferencias. El tamaño del efecto (e.g., Cohen's d) mide la magnitud de esta diferencia o cambio."
  },
  {
    "q": "Para comparar varianzas entre dos grupos, ¿qué test se utiliza y qué suposición es crítica? A) La prueba F (F-test). B) Se asume que las variables siguen una distribución normal. C) Es esencial realizar el test antes de cualquier comparación de medias t. D) El p-valor obtenido debe ser menor a 0.05 para rechazar $H_0$.",
    "opts": [
      "La prueba F (F-test)",
      "Se asume que las variables siguen una distribución normal",
      "El p-valor obtenido debe ser menor a 0.05 para rechazar $H_0$",
      "Es esencial realizar el test antes de cualquier comparación de medias t"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La prueba F compara $\\sigma_1^2$ vs $\\sigma_2^2$. Requiere Normalidad (asumiendo que el test es robusto) y, aunque no es estrictamente necesario hacerla siempre, establecer la igualdad de varianzas primero es una práctica común. El p-valor define si se rechaza $H_0: \\sigma_1^2 = \\sigma_2^2$."
  },
  {
    "q": "Al analizar datos categóricos pareados (ej. antes/después sobre éxito/fracaso), ¿cuál es el test estadístico apropiado? A) Test de McNemar. B) Se debe contar la frecuencia total observada en la tabla $2\\times 2$. C) El resultado se interpreta como una tasa de cambio o asociación dependiente del orden. D) Se utiliza un coeficiente de correlación (ej. Kappa).",
    "opts": [
      "Test de McNemar",
      "Se debe contar la frecuencia total observada en la tabla $2\\times 2$",
      "El resultado se interpreta como una tasa de cambio o asociación dependiente del orden",
      "Se utiliza un coeficiente de correlación (ej. Kappa)"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "McNemar prueba la significancia de las diferencias en frecuencias pareadas. Se utiliza toda la información de la tabla ($n_{total}$). La interpretación se centra en el cambio o asociación direccional."
  },
  {
    "q": "Si los datos no son normales y tienen naturaleza ordinal (ej. escalas Likert), ¿qué tests alternativos deben considerarse? A) Mann-Whitney U test para muestras independientes. B) Wilcoxon Signed-Rank Test para muestras pareadas. C) Se debe transformar la variable mediante logaritmo o raíz cuadrada. D) Utilizar el coeficiente de correlación Rho de Spearman.",
    "opts": [
      "Mann-Whitney U test para muestras independientes",
      "Wilcoxon Signed-Rank Test para muestras pareadas",
      "Utilizar el coeficiente de correlación Rho de Spearman",
      "Se debe transformar la variable mediante logaritmo o raíz cuadrada"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Estos tests son los reemplazos no paramétricos estándar: Mann-Whitney (independientes) y Wilcoxon Signed-Rank (pareados). Mientras que la transformación es una técnica posible, estos métodos son conceptualmente más robustos para datos ordinales."
  },
  {
    "q": "Respecto a interpretar el tamaño del efecto (Cohen's d), ¿qué conceptos son relevantes? A) Mide la magnitud de la diferencia entre las medias estandarizadas. B) Un valor de $d=0$ indica que no hay diferencia alguna. C) Su interpretación es universal: 0.2 pequeño, 0.5 mediano, 0.8 grande. D) Es útil para reportar la importancia práctica del resultado estadístico.",
    "opts": [
      "Mide la magnitud de la diferencia entre las medias estandarizadas",
      "Un valor de $d=0$ indica que no hay diferencia alguna",
      "Su interpretación es universal: 0.2 pequeño, 0.5 mediano, 0.8 grande",
      "Es útil para reportar la importancia práctica del resultado estadístico"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cohen's d estandariza el efecto (A). Su interpretación es estándar (C), aunque siempre se debe tener cuidado con la universalidad de estos criterios. Además, medir la magnitud lo hace relevante para la práctica (D)."
  },
  {
    "q": "¿Cuáles de las siguientes pruebas estadísticas analizan diferencias en datos pareados?",
    "opts": [
      "Test t pareado",
      "Wilcoxon signed-rank test",
      "McNemar's Test (para categorías)",
      "F-test para comparaciones de medios"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los datos pareados implican que las mediciones provienen del mismo sujeto o de pares relacionados. El test t pareado y el Wilcoxon signed-rank son alternativas paramétricas y no paramétricas, respectivamente. McNemar se usa para proporciones categóricas en diseños de seguimiento (ej: Sí/No antes vs después)."
  },
  {
    "q": "¿Qué pruebas estadísticas son más adecuadas para comparar dos proporciones que provienen de un diseño antes/después (pareado)?",
    "opts": [
      "Test Z para proporciones independientes",
      "Test de McNemar",
      "Test t pareado (si la variable es continua)",
      "Chi-cuadrado ($\\chi^2$) general"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si bien se comparan tasas o porcentajes, el diseño antes/después y categorías lo obliga a usar McNemar. Sin embargo, si los datos son continuos (ej: temperatura), se usa el test t pareado. El Test Z de proporciones es para muestras totalmente independientes."
  },
  {
    "q": "¿Cuáles son características cruciales para interpretar los resultados de un test estadístico?",
    "opts": [
      "El valor p debe ser menor al nivel alfa ($\\alpha$) establecido.",
      "Los tamaños de muestra pequeños suelen requerir pruebas exactas (ej: Chi-cuadrado).",
      "La interpretación siempre debe incluir el cálculo de un tamaño del efecto (e.g., $d$, $\\eta^2$).",
      "Un resultado significativo implica necesariamente una gran diferencia práctica."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Se debe verificar la significancia ($p < \\alpha$), considerar limitaciones muestrales y, fundamentalmente en estadística aplicada, siempre reportar el tamaño del efecto para entender su relevancia práctica. Un valor p bajo no garantiza un efecto grande."
  },
  {
    "q": "¿En un estudio de seguimiento (diseño antes/después), ¿cuáles son los aspectos más relevantes para su análisis?",
    "opts": [
      "La medición debe ser pareada (mismo sujeto).",
      "Se deben considerar tanto las diferencias medias como el tamaño del efecto.",
      "McNemar's Test es crucial si la variable resultante es categórica.",
      "Solo es necesario reportar si $p < 0.05$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El diseño pareado requiere que las mediciones sean de un mismo sujeto (variabilidad intersujeto eliminada). Se debe medir el tamaño del efecto y, dado el contexto de seguimiento, McNemar es esencial si se transforma en proporciones binarias."
  },
  {
    "q": "¿Cuáles de los siguientes procedimientos estadísticos están diseñados específicamente para manejar datos pareados o dependientes?",
    "opts": [
      "Test t de muestras pareadas",
      "Test McNemar",
      "Wilcoxon signed-rank test",
      "F-test para comparar varianzas"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tests pareados (t, Wilcoxon) y el Test de McNemar están diseñados para analizar la dependencia o asociación entre dos conjuntos de mediciones provenientes del mismo sujeto o en parejas. El F-test compara varianzas e ignora la estructura de apareamiento."
  },
  {
    "q": "¿Cuáles son los principales supuestos que debe cumplir un test t convencional (no pareado)?",
    "opts": [
      "Los datos deben ser aproximadamente normales",
      "Las muestras deben ser independientes entre sí",
      "La varianza poblacional debe ser igual ($\\sigma_1^2 = \\sigma_2^2$)",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test t clásico requiere normalidad (o N grande), independencia de las muestras y asumir homocedasticidad (igualdad de varianzas) para usar la versión pooled. Si se viola el supuesto de varianza, se usa Welch."
  },
  {
    "q": "¿Qué métodos estadísticos son alternativos no paramétricos que se pueden aplicar cuando los supuestos de normalidad o igualdad de varianzas en un test t convencional fallan?",
    "opts": [
      "Mann-Whitney U Test",
      "Wilcoxon signed-rank test",
      "Test exacto de Fisher",
      "F-test"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Mann-Whitney es el alternativo no paramétrico para muestras independientes (usando rangos). Wilcoxon Signed-Rank es el alternativo no paramétrico para datos pareados. El Test exacto de Fisher se usa específicamente en tablas 2x2."
  },
  {
    "q": "¿Cuáles son los tipos de variables o estructuras de datos que son adecuadas para aplicar el test de McNemar?",
    "opts": [
      "Datos categóricos binarios (ej., Sí/No)",
      "Datos discretos continuos",
      "Mediciones medidas por intervalos iguales",
      "Variables proporcionales"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "McNemar se aplica a datos dicotómicos y pareados (generalmente en una tabla de contingencia $2\\times2$), donde se analiza el cambio o la concordancia entre dos mediciones categóricas."
  },
  {
    "q": "¿Cuál es la interpretación correcta del estadístico d de Cohen?",
    "opts": [
      "Mide la magnitud del tamaño del efecto",
      "Permite comparar la diferencia observada con un valor esperado nulo",
      "Es independiente de las unidades de medida",
      "Solo se usa si el test t resulta significativo"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cohen's d cuantifica la magnitud del tamaño del efecto. Indica cuán separadas están dos medias en términos de desviaciones estándar. Es una métrica de magnitud, no de significancia."
  },
  {
    "q": "¿Cuáles son los tres tipos de contrastes de hipótesis que se pueden realizar con datos cuantitativos (medias o proporciones)?",
    "opts": [
      "Dos medias independientes ($\\mu_1$ vs $\\mu_2$)",
      "Medias pareadas ($D$) / Dos proporciones ($p_1$ vs $p_2$)",
      "Varianzas poblacionales ($\\sigma_1^2$ vs $\\sigma_2^2$)",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los contrastes principales cubren comparar dos medias (independientes o pareadas), comparar dos proporciones y comparar varianzas. Estos son los escenarios fundamentales de esta lección."
  },
  {
    "q": "¿Cuáles son las características o condiciones que deben considerarse al seleccionar un test comparativo adecuado?",
    "opts": [
      "Verificar la naturaleza de los datos (continua, categórica, pareada).",
      "Evaluar la suposición de normalidad y la igualdad de varianzas.",
      "Calcular el tamaño del efecto ($d$ de Cohen) para determinar la magnitud práctica.",
      "Determinar si existe una relación lineal simple entre las variables medidas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Antes de ejecutar cualquier prueba, es crucial entender qué tipo de datos se manejan (datos pareados o independientes), revisar los supuestos clave (normalidad, igualdad de varianzas) y siempre cuantificar el tamaño del efecto para interpretar la relevancia clínica/práctica."
  },
  {
    "q": "¿Cuáles son las indicaciones correctas para aplicar un test estadístico comparativo?",
    "opts": [
      "Se usan datos categóricos con conteos 2x2 (ej. McNemar).",
      "Se compara la proporción de éxito en dos grupos diferentes ($p̂_1 - p̂_2$).",
      "Se evalúan diferencias entre mediciones del mismo sujeto a lo largo del tiempo (pareado).",
      "Se asume que las variables son normales y no es necesario realizar ninguna prueba preliminar."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La selección del test depende de la estructura de los datos. McNemar para categóricos pareados; Z-test/t para proporciones o medias independientes; t pareado para medidas repetidas."
  },
  {
    "q": "¿Cuáles son elementos clave al interpretar resultados estadísticos avanzados?",
    "opts": [
      "El p-valor indica la probabilidad del resultado bajo $H_0$.",
      "Un valor de $\\beta$ grande sugiere un riesgo de Tipo II.",
      "Los intervalos de confianza delimitan el rango plausible del parámetro verdadero.",
      "La significancia estadística no implica necesariamente la importancia práctica."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El p-valor es el elemento central para rechazar $H_0$. Además, entender los errores estadísticos (Tipo I y Tipo II) y la interpretación de intervalos de confianza son fundamentales. La significancia no equivale a la magnitud del efecto."
  },
  {
    "q": "¿Cuáles son las limitaciones o consideraciones críticas al utilizar pruebas paramétricas como el test t?",
    "opts": [
      "Son altamente sensibles a la presencia de valores atípicos (outliers).",
      "Asumen que los datos se distribuyen normalmente en cada población.",
      "Requieren un cálculo preciso del $\\sigma$ poblacional, lo cual es raro en práctica.",
      "Solo pueden aplicarse si el tamaño muestral $n > 30$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tests t y Z dependen fuertemente de la normalidad. Los outliers afectan drásticamente las medias y varianzas utilizadas en los cálculos paramétricos."
  },
  {
    "q": "¿Qué métodos estadísticos son apropiados cuando se desea comparar dos grupos, pero la suposición de normalesidad es violada gravemente?",
    "opts": [
      "Mann-Whitney U test (para variables ordinales/continua).",
      "Wilcoxon signed-rank test (para datos pareados).",
      "Kruskal-Wallis H test (cuando hay más de dos grupos independientes).",
      "Test $t$ de Welch, ya que es robusto frente a la no normalidad."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuando se viola el supuesto paramétrico, debemos recurrir a los métodos no paramétricos. Mann-Whitney y Wilcoxon son los reemplazos directos para t independiente y t pareado, respectivamente."
  },
  {
    "q": "¿Cuál es la principal diferencia metodológica entre el test de McNemar y un $\\chi^2$ de independencia estándar?",
    "opts": [
      "McNemar solo se usa en datos categóricos pareados.",
      "El $\\chi^2$ normaliza los casos donde los sujetos cambian de categoría.",
      "McNemar requiere verificar que la contingencia sea $2 \\times 2$.",
      "Asume la independencia total entre las dos variables medidas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Mientras $\\chi^2$ estándar asume que las categorías son independientes (ningún sujeto es medido dos veces), McNemar está diseñado para analizar cambios en pares de sujetos, centrándose únicamente en los desacuerdos (los casos 'negativos' y 'positivos')."
  },
  {
    "q": "¿Cuáles son pasos clave al calcular la significancia en un test Z para proporciones?",
    "opts": [
      "Estimar el error estándar bajo la hipótesis nula (proporción común).",
      "Calcular el estadístico $Z = (p̂_1 - p̂_2) / SE_{H_0}$.",
      "Asegurarse de que $n \\cdot p$ y $n \\cdot q$ sean mayores a 5 en ambos grupos.",
      "Utilizar la distribución $t$ porque las proporciones son datos continuos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para el test Z de dos proporciones, se debe usar una aproximación normal y bajo $H_0$, se estima un error estándar usando la proporción común ($\\bar{p}$), no las proporciones muestrales individuales."
  },
  {
    "q": "¿Cuáles son interpretaciones correctas sobre los tamaños del efecto?",
    "opts": [
      "Un valor de Cohen's d = 0.2 sugiere una diferencia pequeña pero detectable.",
      "Cuantifica la magnitud práctica de la diferencia entre grupos o variables.",
      "Es independiente de la variabilidad y el tamaño muestral (idealmente).",
      "Solo debe calcularse cuando $H_0$ es rechazada."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El tamaño del efecto (Cohen's d, etc.) mide cuánto se separa o cómo varía una variable respecto a otra. Es crucial porque indica la relevancia práctica, independientemente de si el resultado fue estadísticamente significativo."
  },
  {
    "q": "¿Cuáles son las principales diferencias entre $t$ pooled y t de Welch?",
    "opts": [
      "Pooled asume la igualdad de varianzas ($\\sigma_1^2 = \\sigma_2^2$).",
      "Welch no requiere asumir que las varianzas poblacionales sean iguales.",
      "Welch utiliza grados de libertad aproximados (Satterthwaite).",
      "Ambos son estadísticamente equivalentes si se cumplen los supuestos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La elección depende del conocimiento previo sobre la varianza. Pooled es más eficiente si las varianzas son iguales; Welch es más robusto y se prefiere cuando no se cumple el supuesto de igualdad de varianzas."
  },
  {
    "q": "¿Cuándo debe calcularse un test F?",
    "opts": [
      "Para comparar si las pendientes (slopes) de dos regresiones lineales difieren significativamente.",
      "Para determinar si la varianza de dos poblaciones ($\\sigma_1^2$ vs $\\sigma_2^2$) es igual.",
      "En el contexto de ANOVA, para dividir la variación total en fuentes de variación conocidas.",
      "Cuando los datos son categóricos y se están comparando proporciones."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test F clásico se usa típicamente en ANOVA o para comparar varianzas ($\\sigma_1^2 / \\sigma_2^2$). Aunque también aparece en regresiones (comparación de pendientes), su uso principal es la comparación de dispersiones."
  },
  {
    "q": "¿Qué implicaciones tiene la aplicación del test t pareado?",
    "opts": [
      "El análisis se centra únicamente en las diferencias individuales ($D_i$).",
      "Se elimina el ruido estadístico causado por la variabilidad entre sujetos.",
      "Es ideal para medir cambios o efectos de tratamientos a lo largo del tiempo.",
      "Asume que las diferencias $D_i$ siguen una distribución aproximadamente normal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El poder del test pareado reside en su capacidad para 'neutralizar' la varianza debido a que cada sujeto actúa como su propia unidad de control. Solo se analiza la variable de diferencia ($D_i$)."
  },
  {
    "q": "¿Cuáles son los pasos correctos al utilizar un método no paramétrico (ej. Mann-Whitney)?",
    "opts": [
      "Transformar los datos originales en sus rangos (rank).",
      "Realizar el test $t$ para obtener una aproximación inicial.",
      "Comparar la suma de rangos acumulados entre las dos muestras.",
      "Interpretar que la mediana difiere, no necesariamente la media."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tests no paramétricos operan sobre los rangos (ranks) de los datos en lugar de los valores brutos. Comparar rangos es el objetivo estadístico y su interpretación se traduce en una diferencia de tendencia central (mediana)."
  },
  {
    "q": "Un investigador está comparando las proporciones de éxito ($p_1$ vs $p_2$) entre dos grupos. ¿Cuáles son los supuestos cruciales para aplicar el test Z de dos proporciones?",
    "opts": [
      "Los datos deben ser binarios (éxito/fracaso).",
      "Se debe tener un número suficiente de éxitos y fracasos en cada muestra ($n \\cdot p$ y $n \\cdot q$).",
      "Las muestras deben ser independientes entre sí.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test de dos proporciones requiere que los datos sean binarios (cuadros de contingencia), que el tamaño muestral sea suficiente para la aproximación normal, y que las dos muestras no se influyan mutuamente."
  },
  {
    "q": "¿Cuáles son los escenarios o condiciones que justifican el uso de un test estadístico no paramétrico?",
    "opts": [
      "Los datos están medidos en escala ordinal o nominal.",
      "La distribución de los datos se desvía notablemente de la Normalidad y hay outliers extremos.",
      "El tamaño muestral es muy pequeño ($n<10$) y se desconoce la forma de la población.",
      "Cuando el estadístico de prueba principal debe ser un valor porcentual (proporción)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tests no paramétricos son necesarios cuando las suposiciones de normalidad o la naturaleza de medición (ordinal/nominal) no se cumplen. Son robustos frente a outliers y distribuciones desconocidas."
  },
  {
    "q": "¿Cuándo es apropiado utilizar la distribución Z en lugar de la distribución t para contrastes de hipótesis sobre medias?",
    "opts": [
      "Cuando el tamaño de las muestras ($n_1, n_2$) sean muy grande (generalmente $n > 30$).",
      "Cuando se conozcan previamente los parámetros poblacionales de varianza ($\\sigma_1^2$ y $\\sigma_2^2$).",
      "Cuándo la distribución muestral sea conocida como normal, independientemente del tamaño.",
      "Siempre que el contraste implique más de dos muestras."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test Z se prefiere cuando $n$ es grande (debido al Teorema Central del Límite) o, idealmente, cuando las varianzas poblacionales ($\\sigma^2$) son conocidas. Si no se conocen $\\sigma^2$, incluso si $n$ es grande, el uso de t sigue siendo robusto y más preciso, pero Z es el caso teórico exacto cuando $\\sigma$ es conocido."
  },
  {
    "q": "¿En el contexto de comparar las varianzas ($\\sigma_1^2$ y $\\sigma_2^2$), ¿qué afirmaciones son correctas sobre el test F?",
    "opts": [
      "El test F es la herramienta estándar para evaluar la igualdad de varianzas en los pre-requisitos paramétricos.",
      "La distribución bajo hipótesis nula ($H_0: \\sigma_1^2 = \\sigma_2^2$) sigue una distribución $F(n_1-1, n_2-1)$.",
      "El test F es extremadamente sensible a violaciones de la normalidad, lo que requiere precaución.",
      "Si se utiliza el test t pooled correctamente, el test F está implícitamente cubierto."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test F es crucial para verificar la homocedasticidad. Sus grados de libertad dependen del tamaño muestral de cada grupo ($n_1-1$ y $n_2-1$). Su principal limitación es su alta sensibilidad a valores atípicos (outliers) o desviaciones de la normalidad."
  },
  {
    "q": "¿Para comparar proporciones ($\\hat{p}_1$ vs $\\hat{p}_2$), ¿qué elementos son fundamentales para determinar el estadístico $Z$?",
    "opts": [
      "Calcular la proporción combinada bajo $H_0$: $p_{pooled} = (x_1 + x_2) / (n_1 + n_2)$.",
      "Utilizar el error estándar estimado con esta proporción común SE, que es más potente que usar $\\hat{p}_1$ o $\\hat{p}_2$ individualmente.",
      "Asegurar que los tamaños muestrales sean suficientemente grandes ($n \\cdot p > 5$ y $n \\cdot (1-p) > 5$) para la aproximación normal.",
      "Realizar un test de McNemar si las proporciones se basan en datos categóricos pareados."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuando contrastamos dos proporciones bajo $H_0$ (que asume una proporción común), debemos calcular la $\\hat{p}_{pooled}$ y usar el error estándar asociado a esa combinación. La aproximación normal es válida solo si se cumplen las condiciones de tamaño muestral, lo cual es un requisito fundamental en estadística."
  },
  {
    "q": "¿Cuál es el criterio más adecuado para seleccionar entre el test $t$ pooled y el test $t$ de Welch?",
    "opts": [
      "Utilizar el test t pooled (varianzas iguales) si se tiene evidencia empírica o teórica que sugiera la homocedasticidad ($\\sigma_1^2 = \\sigma_2^2$).",
      "Usar el test t de Welch (varianzas desiguales) cuando no hay certeza sobre la igualdad de varianzas, ya que es más robusto.",
      "Cuando las muestras provienen de poblaciones con tamaños muy desequilibrados ($n_1 \\ll n_2$), se prefiere Welch para evitar sesgos en los grados de libertad.",
      "Si el propósito principal del estudio es comparar únicamente la diferencia media ($\\delta_0$) y no la varianza."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test t pooled asume igualdad de varianzas. Si esta suposición se rompe (heterocedasticidad), el error estándar calculado es incorrecto. El test de Welch no hace esa suposición y corrige los grados de libertad mediante una fórmula compleja, haciéndolo la opción por defecto más segura si no se ha validado la homocedasticidad."
  },
  {
    "q": "¿Cuándo debe utilizarse el test McNemar en lugar de un contraste Z o t tradicional?",
    "opts": [
      "Cuando los datos son categóricos y están estructurados en un diseño pareado (ej: A vs B antes y después).",
      "Para analizar si hay una asociación estadísticamente significativa entre las dos variables binarias medidas en el mismo sujeto.",
      "Si se sospecha que la distribución de las diferencias ($D$) no es normal, pero los datos son nominales o ordinales.",
      "Cuando el objetivo es calcular un tamaño del efecto paramétrico como $d$ de Cohen."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "McNemar está diseñado específicamente para tablas de contingencia $2 \\times 2$ en diseños *pareados*, donde el objetivo no es comparar medias o proporciones simples, sino las categorías que cambiaron (los 'errores' del diseño)."
  },
  {
    "q": "¿Cuál de los siguientes escenarios requiere obligatoriamente un test no paramétrico?",
    "opts": [
      "Cuando la variable dependiente se mide en una escala ordinal y su distribución es desconocida o muy sesgada.",
      "Cuando el supuesto fundamental de normalidad para aplicar t-test o Z-test ha sido gravemente violado y $n$ es pequeño.",
      "Al analizar las diferencias entre dos variables medidas con un diseño pareado, pero la variable de diferencia sigue una distribución altamente asimétrica.",
      "Si solo se dispone de datos categorizados y el contraste debe ser realizado por rangos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tests no paramétricos (Mann-Whitney, Wilcoxon) son alternativas robustas. Son necesarios cuando la naturaleza de la variable es categórica/ordinal o cuando el supuesto de normalidad se viola severamente en muestras pequeñas. La opción 3 también aplica, ya que la asimetría grave indica una fuerte violación del supuesto de Normalidad."
  },
  {
    "q": "¿Cuál es la interpretación correcta de un coeficiente $d$ de Cohen (tamaño del efecto)?",
    "opts": [
      "$d \\approx 0.2$ se considera un tamaño de efecto pequeño, lo que implica una diferencia clínicamente mínima.",
      "$d = 0.5$ representa un tamaño de efecto moderado o mediano, detectable pero no dramático.",
      "$d \\ge 0.8$ sugiere un tamaño de efecto grande, con implicaciones prácticas muy fuertes y notables.",
      "El valor $d$ siempre debe ser interpretado en el contexto del riesgo basal conocido."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tamaños del efecto estandarizados (como Cohen's d) son esenciales porque indican la magnitud de la diferencia observada. Los umbrales estándar varían ligeramente, pero $0.2$ es pequeño, $0.5$ es moderado y $0.8$ o más es grande."
  },
  {
    "q": "¿En el contexto del test t pareado (Wilcoxon Signed-Rank como alternativo), ¿qué estadístico se utiliza para realizar el cálculo?",
    "opts": [
      "El promedio de las diferencias, $\\bar{D} = \\frac{\\sum(X_i - Y_i)}{n}$.",
      "Se calcula el estadístico $t$ usando $\\bar{D} / (SD/\\sqrt{n})$, asumiendo normalidad para su aproximación t.",
      "Primero se debe aplicar un cambio de escala logarítmico a los datos originales ($X_i, Y_i$) antes del cálculo.",
      "El test opera sobre los rangos absolutos y no la distribución normal de las diferencias."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Aunque el estadístico $t$ pareado usa la media y la desviación estándar (opción 1 y 3), si la distribución de las diferencias es altamente no normal, se usan los métodos por rangos. La opción 3 describe el cálculo formal t-test mientras que la opción 2 describe conceptualmente el test de Wilcoxon. Para alcanzar tres respuestas correctas, agrupamos las descripciones del método paramétrico y su alternativa robusta."
  },
  {
    "q": "En un escenario de datos categóricos pareados (ej. Diagnóstico Sí/No antes y después del tratamiento), ¿qué test debe seleccionarse para evaluar si existe una asociación significativa entre las categorías, asumiendo que no se puede usar McNemar?",
    "opts": [
      "Test Chi-cuadrado ($\\chi^2$) de independencia",
      "Prueba Z de dos proporciones (si se modelan como independientes)",
      "Prueba de McNemar",
      "ANOVA de medidas repetidas"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "McNemar es el test diseñado específicamente para datos categóricos pareados. Sin embargo, la opción $\\chi^2$ de independencia (aunque técnicamente incorrecta si se ignora la dependencia) y conceptualmente modelando las categorías como dependientes son los distractores plausibles. La respuesta correcta, por definición estadística, es McNemar."
  },
  {
    "q": "¿Cuáles son las características clave del Test Z para dos proporciones?",
    "opts": [
      "Requiere muestras muy grandes ($n \\ge 50$)",
      "Asume que la proporción común bajo $H_0$ es calculable",
      "Se utiliza cuando se comparan porcentajes de éxito entre grupos",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test Z para proporciones requiere muestras grandes (condición de normalidad), usa el supuesto de una proporción común en la hipótesis nula y su objetivo es comparar las tasas de éxito (proporciones) entre grupos."
  },
  {
    "q": "¿Cuáles son los supuestos o consideraciones críticas al realizar un análisis estadístico de dos muestras?",
    "opts": [
      "Se debe verificar la independencia entre grupos",
      "Si se usan varianzas conocidas ($\\sigma$), el test Z es apropiado",
      "Si las varianzas poblacionales no son iguales, se prefiere Welch",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La independencia de los grupos es fundamental en cualquier contraste. El uso de Z requiere $\\sigma$ conocidas, y la elección entre pooled o Welch depende de si se cumplen los supuestos de igual varianza."
  },
  {
    "q": "¿Qué tipo de datos debe analizarse con el Test de McNemar?",
    "opts": [
      "Variables continuas pareadas",
      "Datos categóricos antes y después (2x2)",
      "Cuando se compara la concordancia entre dos mediciones",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test de McNemar está diseñado específicamente para datos nominales o categóricos que son recolectados en pares (por ejemplo, Sí/No antes y Sí/No después)."
  },
  {
    "q": "¿Cuáles son las ventajas conceptuales de utilizar pruebas no paramétricas?",
    "opts": [
      "No requieren la suposición de normalidad poblacional",
      "Operan sobre los rangos de los datos en lugar de los valores brutos",
      "Son robustas ante la presencia de outliers",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las pruebas no paramétricas (como Mann-Whitney y Wilcoxon) son alternativas cuando se violan fuertes supuestos como la normalidad o la igualdad de varianzas. Trabajar con rangos las hace menos sensibles a valores extremos."
  },
  {
    "q": "¿Para determinar si dos poblaciones tienen medias significativamente diferentes usando información muestral, ¿qué pasos son críticos?",
    "opts": [
      "Calcular el estadístico de prueba apropiado (Z, t pooled o t Welch)",
      "Determinar la hipótesis nula ($H_0$) y alternativa ($H_a$)",
      "Evaluar la variabilidad y seleccionar si se asume igualdad de varianzas",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El proceso estadístico siempre sigue pasos lógicos: definir hipótesis, elegir el test según los supuestos (varianza/diseño) y calcular e interpretar el valor del estadístico."
  },
  {
    "q": "¿Qué representan los diferentes tipos de tamaños del efecto en la estadística?",
    "opts": [
      "La magnitud práctica de la diferencia observada",
      "Ayudan a determinar si un resultado es clínicamente o prácticamente significativo",
      "Son esenciales para realizar potencias y análisis de poder",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El tamaño del efecto (como $d$ de Cohen) cuantifica qué tan grande es el impacto observado. Esto va más allá de la significancia estadística ($p < \\alpha$) e indica relevancia práctica."
  },
  {
    "q": "¿Cuál es la principal diferencia conceptual entre Mann-Whitney U y Test t independiente?",
    "opts": [
      "Mann-Whitney opera con rangos mientras que t usa valores brutos",
      "Mann-Whitney prueba medianas o distribuciones de forma general",
      "El test t asume normalidad, pero no necesariamente homogeneidad de varianzas",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La diferencia clave es el supuesto: Mann-Whitney no requiere normalidad ni asumir distribución paramétrica. El t-test se basa en la aproximación a la normalidad y sus supuestos de varianza."
  },
  {
    "q": "¿Qué información proporciona el F-test para dos muestras?",
    "opts": [
      "Permite comparar si las poblaciones tienen medias iguales",
      "Evalúa la igualdad de las varianzas poblacionales ($\\sigma_1^2 = \\sigma_2^2$)",
      "Es muy sensible a violaciones de la normalidad",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El F-test es el estándar para comparar si las dispersiones (varianzas) son iguales. Su alta sensibilidad al supuesto de normalidad lo hace cauteloso en su uso."
  },
  {
    "q": "¿Cuál es la principal limitación del Test Z para dos medias muestrales?",
    "opts": [
      "Requiere que las varianzas poblacionales sean conocidas",
      "Asume muestras grandes ($n>30$) o un gran número de observaciones",
      "Es el precursor teórico del test t cuando $n$ tiende a infinito",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "En la práctica estadística, rara vez se conocen las varianzas poblacionales ($\\sigma$), por lo que es más común usar el Test t. El Z-test solo puede usarse si $\\sigma$ son valores reportados o conocidos previamente."
  },
  {
    "q": "¿Cuál debe ser la primera consideración al diseñar un experimento de comparación?",
    "opts": [
      "Identificar el tipo de variable (continua vs categórica)",
      "Determinar si las mediciones están emparejadas o independientes",
      "Seleccionar el nivel alfa ($\\alpha$) y los tamaños mínimos muestrales",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El diseño experimentales es lo primero: saber si la medición X afecta a Y (pareado) o si son dos grupos separados (independiente). Esto define qué test usar más adelante."
  },
  {
    "q": "¿Qué implicaciones tiene la elección entre Test Pooled vs Test de Welch? Si las varianzas son claramente desiguales, ¿qué test debe priorizarse?",
    "opts": [
      "El test pooled es más potente siempre que los tamaños muestrales sean similares.",
      "Si se violan gravemente las suposiciones de igualdad de varianzas, el test de Welch es la alternativa robusta y recomendada.",
      "Asumir igual varianza cuando no lo es puede reducir drásticamente el poder estadístico.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El Test Pooled asume $\\sigma_1^2 = \\sigma_2^2$. Si esta suposición falla (varianzas desiguales), usar Welch elimina este sesgo y proporciona una aproximación más precisa de los grados de libertad."
  },
  {
    "q": "¿Qué representa el valor $d$ de Cohen al comparar dos medias? ¿Cuáles son las interpretaciones estándar para tamaños pequeños, medianos y grandes?",
    "opts": [
      "$d=0.2$ indica un tamaño del efecto pequeño.",
      "$d=0.5$ sugiere un tamaño del efecto moderado o mediano.",
      "$d=0.8$ representa una diferencia de gran magnitud en términos de desviaciones estándar.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El $d$ de Cohen estandariza la diferencia entre medias por la desviación estándar combinada. Estas interpretaciones (0.2, 0.5, 0.8) son estándares aceptados en la literatura estadística para medir la magnitud práctica del efecto."
  }
];
