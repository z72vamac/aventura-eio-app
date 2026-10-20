// Leccion 23 — 180 preguntas alternativas
// Generadas con gemma4 el 2026-07-04 14:59
// Distribucion: 60/60/60 (1c/2c/3c)
window.LESSON_QUESTIONS_ALT = window.LESSON_QUESTIONS_ALT || {};
window.LESSON_QUESTIONS_ALT[23] = [
  {
    "q": "Según la teoría de límites centrales, si el tamaño muestral $n$ es suficientemente grande, qué distribución se aproxima a la distribución de la media muestral $\\bar{X}$?",
    "opts": [
      "Distribución Normal $N(\\mu, \\sigma^2/n)$",
      "Distribución t de Student",
      "Distribución F de Snedecor",
      "Distribución Chi-cuadrado $\\chi^2$"
    ],
    "c": [
      0
    ],
    "exp": "El Teorema del Límite Central (TLC) establece que, independientemente de la forma de la distribución poblacional original, la distribución muestral de la media $(\\bar{X})$ tenderá a una Normal $N(\\mu, \\sigma^2/n)$ cuando $n$ es grande."
  },
  {
    "q": "En el contexto del control estadístico, ¿qué se requiere para poder utilizar la distribución Z (normal estándar) en lugar de t de Student?",
    "opts": [
      "Conocer la desviación estándar poblacional $\\sigma$",
      "Tener un tamaño muestral muy pequeño ($n<30$)",
      "Asumir que la población sigue una distribución normal",
      "Que el estadístico sea siempre discreto"
    ],
    "c": [
      0
    ],
    "exp": "La utilización de Z requiere conocer $\\sigma$. Si $\\sigma$ es desconocida, debemos usar $t$, independientemente del tamaño muestral (aunque si $n$ es grande, $t$ y $z$ convergen)."
  },
  {
    "q": "Cuando se realiza un test bilateral de hipótesis sobre la media poblacional ($\\mu$), ¿qué significa rechazar la hipótesis nula $H_0: \\mu = \\mu_0$?",
    "opts": [
      "Que hay evidencia suficiente para afirmar que $\\mu \\neq \\mu_0$",
      "Que el error tipo II es muy bajo",
      "Que necesariamente se ha detectado un efecto causal",
      "Que el valor $p$ debe ser mayor a $\\alpha$"
    ],
    "c": [
      0
    ],
    "exp": "Rechazar $H_0: \\mu = \\mu_0$ implica que, dada la evidencia muestral ($\\bar{X}$), es improbable que la media real sea igual a $\\mu_0$. Esto significa que el valor de $p$ es menor que $\\alpha$, indicando que $\\mu$ es significativamente diferente de $\\mu_0$."
  },
  {
    "q": "En las pruebas de hipótesis, ¿cuál es la relación entre el nivel de significancia $\\alpha$ y la potencia del test?",
    "opts": [
      "Reducir $\\alpha$ (hacerlo más estricto) aumenta el riesgo de Tipo II ($\\beta$) y reduce la potencia",
      "Un $\\alpha$ muy bajo disminuye la potencia",
      "Aumentar $\\alpha$ aumenta la probabilidad de cometer un error Tipo I",
      "La potencia es directamente proporcional a $\\alpha$"
    ],
    "c": [
      0
    ],
    "exp": "La potencia ($1-\\beta$) mide la capacidad de rechazar $H_0$ cuando es falsa. Reducir $\\alpha$ reduce el riesgo de Error Tipo I, pero hace que sea más difícil obtener un resultado significativo, aumentando el error Tipo II ($\\beta$) y disminuyendo la potencia."
  },
  {
    "q": "Si se desea comparar dos grupos de muestras independientes sin asumir normalidad o varianzas iguales, ¿cuál es la prueba estadística apropiada?",
    "opts": [
      "Prueba U de Mann-Whitney",
      "T-test para muestras independientes",
      "ANOVA de una vía",
      "Regresión lineal simple"
    ],
    "c": [
      0
    ],
    "exp": "Mann-Whitney U es el equivalente no paramétrico del t-test para dos muestras. Es ideal cuando la condición de normalidad o la igualdad de varianzas no se cumplen, y los datos son ordinales o tienen distribución desconocida."
  },
  {
    "q": "En términos conceptuales, ¿qué representa el parámetro $\\sigma$ en una población?",
    "opts": [
      "Una característica fija de la población (ej. variabilidad total)",
      "Una medida calculada a partir de una muestra específica",
      "La desviación estándar muestral $S$",
      "Un valor que solo se estima mediante Bootstrap"
    ],
    "c": [
      0
    ],
    "exp": "Un parámetro es un valor fijo e desconocido de toda la población, como $\\mu$ o $\\sigma$. Esto lo distingue de un estadístico ($S$), que es una estimación calculada a partir de la muestra."
  },
  {
    "q": "Según el Teorema Central del Límite (TCL), si la muestra $n$ es grande, ¿qué distribución aproximará la media muestral $\\bar{X}$?",
    "opts": [
      "Distribución de Poisson",
      "Distribución Normal $N(\\mu, \\sigma^2/n)$",
      "Distribución t de Student",
      "Distribución Chi-cuadrado $\\chi^2$"
    ],
    "c": [
      0
    ],
    "exp": "El TCL establece que la distribución muestral de la media tiende a ser normal, independientemente de la forma de la población original, siempre y cuando el tamaño de muestra $n$ sea suficientemente grande. Por lo tanto, $\\bar{X} \\approx N(\\mu, \\sigma^2/n)$."
  },
  {
    "q": "¿Cuál es la función principal del estadístico muestral en estadística inferencial?",
    "opts": [
      "Estimar directamente el parámetro poblacional sin incertidumbre.",
      "Proveer un valor numérico que se utiliza para hacer inferencias sobre parámetros desconocidos.",
      "Reemplazar completamente la necesidad de realizar pruebas de hipótesis.",
      "Calcular únicamente la varianza de los datos observados."
    ],
    "c": [
      0
    ],
    "exp": "El estadístico es una función de los datos muestrales (ej: $\\bar{X}, S^2$) que se utiliza para hacer estimaciones o contrastar hipótesis sobre un parámetro poblacional desconocido ($\\mu, \\sigma$)."
  },
  {
    "q": "¿Bajo qué condición es apropiado utilizar la distribución $z$ en lugar de la distribución $t$?",
    "opts": [
      "Cuando se conoce la desviación estándar poblacional ($\\sigma$).",
      "Cuando el tamaño muestral ($n$) es pequeño (ej: $n < 30$).",
      "Cuando los datos provienen de una población no normal.",
      "Siempre que el coeficiente de correlación sea alto."
    ],
    "c": [
      0
    ],
    "exp": "La distribución z se utiliza cuando se asume o se conoce $\\sigma$. Cuando $\\sigma$ es desconocida y se debe estimar con la desviación estándar muestral ($S$), debemos usar la distribución t, especialmente si $n$ es pequeño."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones describe correctamente el concepto de potencia estadística?",
    "opts": [
      "La probabilidad de rechazar correctamente $H_0$ cuando es falsa (1 - $\\beta$).",
      "La probabilidad de que la hipótesis nula ($H_0$) sea verdadera.",
      "El riesgo de cometer un Error Tipo II ($\\beta$).",
      "Una medida de la fuerza de la correlación entre variables."
    ],
    "c": [
      0
    ],
    "exp": "La potencia es $1 - \\beta$. Es la capacidad del test estadístico para detectar un efecto o diferencia que realmente existe en la población. Maximizar la potencia es un objetivo clave en el diseño experimental."
  },
  {
    "q": "¿Cuándo se debe considerar utilizar un test no paramétrico como Mann-Whitney U?",
    "opts": [
      "Cuando se sospecha que los supuestos de normalidad o igualdad de varianzas para las muestras independientes han sido violados.",
      "Cuando los datos son categóricos nominales.",
      "Siempre que el tamaño muestral sea pequeño ($n < 10$).",
      "Cuando la relación entre variables es estrictamente lineal."
    ],
    "c": [
      0
    ],
    "exp": "Los tests no paramétricos son alternativas robustas cuando los datos no cumplen con los supuestos de normalidad o se trabaja con escalas ordinales. Mann-Whitney U compara dos muestras independientes sin asumir distribución específica."
  },
  {
    "q": "¿Qué tipo de relación implica la existencia de un coeficiente $R^2$ alto en el modelo de regresión lineal?",
    "opts": [
      "Que las variables tienen una fuerte correlación y que el modelo explica bien la variabilidad Y.",
      "Que cualquier variable predictora puede reemplazar a otras sin perder poder explicativo.",
      "Que la relación observada es inherentemente causal, sin necesidad de controles.",
      "Que se ha cometido un error tipo I en el test F."
    ],
    "c": [
      0
    ],
    "exp": "$R^2$ mide la proporción de la varianza de la variable dependiente ($Y$) que es predecible a partir de las variables independientes. Un $R^2$ alto indica que el modelo ajusta bien los datos, sugiriendo una fuerte relación lineal y poder explicativo."
  },
  {
    "q": "¿Qué significa interpretar un intervalo de confianza (IC) al 95%?",
    "opts": [
      "Que si repitiéramos el proceso de muestreo muchas veces, el 95% de los IC construidos contendrían al verdadero parámetro.",
      "Que existe un 95% de probabilidad de que el parámetro poblacional caiga dentro del rango calculado.",
      "Que la media observada está a más de dos desviaciones estándar del parámetro.",
      "Que siempre se debe usar un intervalo de confianza amplio para ser conservador."
    ],
    "c": [
      0
    ],
    "exp": "La interpretación correcta de un IC es frecuentista: si repitiéramos el muestreo infinitas veces, el 95% de los intervalos calculados capturarían el parámetro verdadero. No significa que haya un 95% de probabilidad sobre ese intervalo específico."
  },
  {
    "q": "Según el Teorema Central del Límite (TCL), si una población tiene una media $\\mu$ y desviación estándar $\\sigma$, ¿cómo se aproxima la distribución muestral de las medias ($\\bar{X}$) cuando $n$ es grande?",
    "opts": [
      "A. Se distribuye con forma t, utilizando grados de libertad $n-1$.",
      "B. Se distribuye aproximadamente normal: $\\bar{X} \\sim N(\\mu, \\sigma^2/n)$.",
      "C. Su desviación estándar siempre será la desviación típica poblacional $\\sigma$.",
      "D. Solo se aplica si los datos originales son normales."
    ],
    "c": [
      0
    ],
    "exp": "El TCL establece que, independientemente de la forma de la población original, la distribución muestral del promedio ($\\bar{X}$) tiende a una distribución normal con media $\\mu$ y varianza $\\sigma^2/n$, siempre que el tamaño muestral ($n$) sea suficientemente grande. La opción B es la correcta."
  },
  {
    "q": "¿Cuál es la principal ventaja de utilizar métodos 'Bootstrap' en comparación con los tests paramétricos tradicionales?",
    "opts": [
      "A. No requiere asumir una distribución poblacional específica (no paramétrico).",
      "B. Permite estimar distribuciones muestrales y intervalos de confianza sin suponer parámetros exactos.",
      "C. Siempre proporciona un valor p más preciso que la teoría clásica.",
      "D. Reduce la necesidad de calcular el estadístico $t$."
    ],
    "c": [
      0
    ],
    "exp": "El Bootstrap es una técnica computacional que simula muestreos con reemplazo a partir de los datos observados para estimar propiedades estadísticas (como medias o varianzas) sin hacer suposiciones fuertes sobre la distribución subyacente, lo cual es clave cuando las condiciones paramétricas fallan."
  },
  {
    "q": "¿Cuál es la interpretación correcta del coeficiente $R^2$ en un modelo de regresión lineal?",
    "opts": [
      "A. Representa la proporción de varianza total de la variable dependiente ($Y$) explicada por el predictor ($X$).",
      "B. Indica que una unidad de cambio en $X$ genera un aumento constante en $Y$.",
      "C. Es sinónimo de correlación, pero solo para variables normales.",
      "D. Solo es aplicable cuando se utiliza la regresión logística."
    ],
    "c": [
      0
    ],
    "exp": "$R^2 = 1 - \\frac{SCE}{SCT}$. Este coeficiente mide el ajuste del modelo y representa qué porcentaje de la variabilidad total observada en $Y$ puede ser explicado por el modelo predictivo que incluye $X$. No es igual a la correlación."
  },
  {
    "q": "Cuando se comparan tres o más grupos (ej. Rendimiento en 3 aulas distintas) utilizando ANOVA, ¿cuál es la razón de ser del estadístico $F$?",
    "opts": [
      "A. Evaluar si las varianzas entre grupos son significativamente diferentes.",
      "B. Determinar si existe una diferencia general significativa entre al menos dos medias grupales.",
      "C. Estimar el coeficiente de correlación lineal global ($\\rho$).",
      "D. Modelar la relación cuadrática compleja entre variables."
    ],
    "c": [
      0
    ],
    "exp": "ANOVA compara múltiples grupos a la vez. El estadístico $F = \\frac{CM_{entre}}{CM_{dentro}}$ evalúa si la variabilidad observada *entre* los grupos es significativamente mayor que la variabilidad esperada o residual (varianza dentro de los grupos), indicando una diferencia general entre medias."
  },
  {
    "q": "¿Cuándo se debe utilizar un test no paramétrico como Mann-Whitney U en lugar del Test T de Student?",
    "opts": [
      "B. Cuando los datos violan gravemente la suposición de normalidad y hay outliers.",
      "A. Cuando el tamaño muestral es muy pequeño ($n < 10$).",
      "C. Cuando se está comparando solo una muestra contra un valor conocido poblacional.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Los tests no paramétricos (como Mann-Whitney U, Wilcoxon) son alternativas robustas que operan sobre rangos o medianas en lugar de medias y desviaciones estándar. Son apropiados cuando los datos no cumplen supuestos paramétricos estrictos (normalidad, homogeneidad de varianzas)."
  },
  {
    "q": "¿Qué representa un parámetro estadístico en el contexto de una población?",
    "opts": [
      "La media muestral ($\\bar{X}$) calculada.",
      "Una medida que describe la característica completa de la población (ej., $\\mu$).",
      "El valor obtenido después de aplicar el test.",
      "Un estimador puntual basado solo en un subconjunto de datos."
    ],
    "c": [
      0
    ],
    "exp": "Definición clave: Un parámetro es una propiedad fija e inobservable de toda la población ($\\mu$, $\\sigma^2$, $p$). Un estadístico, como $\\bar{X}$, es el valor calculado a partir de una muestra y se usa para estimar ese parámetro."
  },
  {
    "q": "¿Cuál es la principal ventaja metodológica del método Bootstrap?",
    "opts": [
      "Permite hacer inferencia estadística sin asumir una distribución poblacional específica para los datos.",
      "Requiere menos información de entrada que los métodos paramétricos tradicionales.",
      "Es computacionalmente más lento y complejo de implementar.",
      "Asume automáticamente el principio de homocedasticidad."
    ],
    "c": [
      0
    ],
    "exp": "El Bootstrap es un método no paramétrico robusto. Su gran ventaja radica en que estima la distribución muestral del estadístico (ej., $\\bar{X}$ o coeficiente de correlación) mediante remuestreo, sin hacer suposiciones fuertes sobre la forma teórica de la población."
  },
  {
    "q": "¿Cuál es el principio fundamental que relaciona la correlación con la causalidad?",
    "opts": [
      "Que para establecer causalidad, se requiere un diseño experimental controlado y aleatorización.",
      "Que una alta correlación ($|r| \\approx 1$) indica fuertemente una relación lineal.",
      "Que la correlación nunca puede ser usada en ningún tipo de modelado predictivo.",
      "Que las variables intervinientes (confundidoras) son siempre insignificantes."
    ],
    "c": [
      0
    ],
    "exp": "Este es el concepto más importante: Correlación $\\neq$ Causalidad. Para demostrar que $X$ causa $Y$, se necesita un diseño cuasi-experimental o experimental robusto para controlar las variables extrañas (confundidoras)."
  },
  {
    "q": "Según el Teorema Central del Límite (TCL), si extraemos muestras de tamaño $n$ de una población con media $\\mu$ y varianza $\\sigma^2$, la distribución muestral de la media ($\\bar{X}$) se aproxima a:",
    "opts": [
      "Una distribución Normal $N(\\mu, \\sigma^2/n)$.",
      "Una distribución Chi-Cuadrado ($\\chi^2$), con $n$ grados de libertad.",
      "Una distribución t de Student, independientemente del tamaño de la muestra.",
      "Una distribución Beta que requiere conocer el rango de los datos."
    ],
    "c": [
      0
    ],
    "exp": "El TCL establece que, para muestras suficientemente grandes ($n$ grande), la media muestral $\\bar{X}$ sigue una distribución normal con media $\\mu$ y varianza poblacional dividida por $n$, es decir, $N(\\mu, \\sigma^2/n)$."
  },
  {
    "q": "¿Cuál de los siguientes conceptos estadísticos se define mejor como una característica *poblacional* fija?",
    "opts": [
      "Estadístico (e.g., $\\bar{X}$)",
      "Parámetro (e.g., $\\mu$, $p$)",
      "Coeficiente de correlación ($r$)",
      "Valor p"
    ],
    "c": [
      0
    ],
    "exp": "Un parámetro es la medida que describe a toda la población, como la media poblacional ($\\mu$) o la varianza poblacional ($\\sigma^2$). Un estadístico es el valor calculado a partir de una muestra específica."
  },
  {
    "q": "¿Cuándo se prefiere utilizar la distribución t de Student sobre la distribución Z (Normal estándar) para calcular un intervalo de confianza?",
    "opts": [
      "Cuando se desconoce la desviación estándar poblacional ($\\sigma$) y se usa la desviación muestral ($S$).",
      "Cuando el tamaño muestral $n$ es muy grande ($n > 100$).",
      "Cuando se conoce la desviación estándar poblacional $\\sigma$.",
      "Cuando los datos no cumplen con supuestos de normalidad."
    ],
    "c": [
      0
    ],
    "exp": "La distribución t debe usarse cuando $n$ es pequeño o moderado, y lo crucial es que $\\sigma$ (poblacional) sea desconocida. En ese caso, reemplazamos $\\sigma$ por su estimación muestral $S$. Si $n$ es grande, la t se aproxima a la Z."
  },
  {
    "q": "¿Cuál de estas afirmaciones describe correctamente la relación entre un intervalo de confianza y una prueba de hipótesis bilateral?",
    "opts": [
      "Si el parámetro poblacional ($\\mu$) cae dentro del IC, no se rechaza $H_0$.",
      "El nivel de significancia $\\alpha$ debe ser siempre menor a 0.1.",
      "Para rechazar $H_0: \\mu = \\mu_0$, este valor $\\mu_0$ debe caer fuera del intervalo de confianza calculado con un nivel $\\alpha$.",
      "La potencia de la prueba depende directamente de la longitud del intervalo."
    ],
    "c": [
      0
    ],
    "exp": "Existe una equivalencia fundamental: si el valor hipotético ($\\mu_0$) está contenido dentro del intervalo de confianza (IC) al nivel $1-\\alpha$, no hay suficiente evidencia para rechazar $H_0$. Si cae fuera, sí se rechaza $H_0$."
  },
  {
    "q": "¿Cuál de los siguientes métodos es más apropiado cuando la variable de resultado no sigue una distribución normal y hay sospecha de datos atados a cero?",
    "opts": [
      "Regresión Logística o modelos de conteo (Poisson/Negativo Binomial).",
      "Análisis de Varianza (ANOVA) tradicional.",
      "Prueba Z estándar para medias.",
      "El uso del Bootstrap sin transformar los datos."
    ],
    "c": [
      0
    ],
    "exp": "Cuando la variable es de conteo (discreta, no normal), debemos usar modelos especializados. La Regresión Logística o modelos Poisson son diseñados específicamente para este tipo de estructuras de dependencia y distribución."
  },
  {
    "q": "¿Qué implica una baja potencia estadística en el contexto de un test de hipótesis?",
    "opts": [
      "Que existe un alto riesgo de cometer un Error Tipo II (no rechazar $H_0$ cuando es falso).",
      "Que la magnitud del efecto es muy grande.",
      "Que existe un alto riesgo de cometer un Error Tipo I (rechazar $H_0$ cuando es verdad).",
      "Que el tamaño muestral debe ser reducido para mejorar la precisión."
    ],
    "c": [
      0
    ],
    "exp": "La potencia ($1-\\beta$) mide la capacidad del test para detectar un efecto real. Baja potencia significa que existe una alta probabilidad de no detectarlo (Error Tipo II), lo cual puede llevar a conclusiones erróneas."
  },
  {
    "q": "¿Cuáles son ejemplos válidos de tests estadísticos no paramétricos?",
    "opts": [
      "Mann-Whitney U Test",
      "Test Z (para medias)",
      "ANOVA F (varianzas)",
      "Prueba Chi-cuadrado ($\\chi^2$)"
    ],
    "c": [
      0
    ],
    "exp": "Los tests no paramétricos se utilizan cuando la normalidad o la igualdad de varianzas son cuestionables. Mann-Whitney, Wilcoxon y Kruskal-Wallis son ejemplos canónicos que comparan medianas u ordinales sin asumir distribuciones normales."
  },
  {
    "q": "¿Qué representa el ratio $F = CM_{entre} / CM_{dentro}$ en ANOVA?",
    "opts": [
      "La razón de la variabilidad explicada (entre grupos) respecto a la variabilidad residual no explicada (dentro grupos).",
      "Un indicador directo de la magnitud del efecto, independiente del tamaño muestral.",
      "El coeficiente de correlación cuadrado ($r^2$) que mide el porcentaje de varialidad explicado.",
      "La diferencia absoluta entre las medias grupales."
    ],
    "c": [
      0
    ],
    "exp": "El ratio $F$ compara si la variación *entre* los grupos es significativamente mayor que la variación esperada *dentro* de cada grupo (error aleatorio). Si $F$ es grande, indica un efecto significativo."
  },
  {
    "q": "¿Cómo se interpreta un intervalo de confianza del 95% para la media poblacional $\\mu$?",
    "opts": [
      "Si repitiéramos el proceso muchas veces, el 95% de los IC construidos contendrían al verdadero parámetro poblacional.",
      "Existe un 95% de probabilidad de que el verdadero valor de $\\mu$ esté dentro del rango calculado.",
      "El 95% restante es la variabilidad natural esperada en la población.",
      "Sugiere que necesitamos un tamaño muestral mucho mayor."
    ],
    "c": [
      0
    ],
    "exp": "La interpretación correcta del IC no trata $\\mu$ como una variable aleatoria, sino que se refiere al procedimiento: el intervalo construido captura el verdadero parámetro poblacional el 95% de las veces si se repite infinitas veces."
  },
  {
    "q": "En el contexto estadístico, ¿qué representa un 'parámetro'?",
    "opts": [
      "La media muestral ($\\bar{X}$)",
      "El tamaño de la muestra ($n$)",
      "Una característica fija de la población (ej: $\\mu$, $p$)",
      "El valor obtenido en una ejecución particular del test"
    ],
    "c": [
      0
    ],
    "exp": "Un parámetro es un valor desconocido que describe a toda la población (como $\\mu$ o $\\sigma^2$). Un estadístico, en cambio, es el valor calculado usando los datos de muestra."
  },
  {
    "q": "¿Cuál es la distribución apropiada para calcular intervalos de confianza y realizar pruebas de hipótesis sobre la media poblacional ($\\mu$) si se desconoce la desviación estándar poblacional ($\\sigma$)?",
    "opts": [
      "Distribución $t$ de Student",
      "Distribución Normal (Z)",
      "Distribución Chi-cuadrado ($\\chi^2$)",
      "La distribución F"
    ],
    "c": [
      0
    ],
    "exp": "Cuando trabajamos con muestras pequeñas ($n<30$) y la desviación estándar poblacional ($\\sigma$) es desconocida, debemos usar el estadístico $t$. Si $n$ fuera grande o $\\sigma$ conocida, se usaría Z."
  },
  {
    "q": "Si al realizar una prueba de hipótesis bilateral sobre la media ($\\mu$), obtenemos un valor p = 0.01 y fijamos nuestro nivel de significancia $\\alpha = 0.05$, ¿cuál es la conclusión estadísticamente correcta?",
    "opts": [
      "Rechazar $H_0$: Existe evidencia significativa contra el valor postulado.",
      "No se rechaza $H_0$: Los datos no son suficientes para concluir algo.",
      "Aceptar $H_0$: La hipótesis nula siempre es cierta.",
      "Mantener la duda: El resultado debe ser interpretado por expertos."
    ],
    "c": [
      0
    ],
    "exp": "Regla de decisión: Si p-valor $\\le \\alpha$, rechazamos $H_0$. Dado que 0.01 $\\le$ 0.05, rechazamos $H_0$. Esto implica que el parámetro poblacional es significativamente diferente del valor propuesto ($H_0$)."
  },
  {
    "q": "¿Cuál de las siguientes situaciones exige la utilización de un test estadístico no paramétrico en lugar de uno paramétrico (ej: t-test o ANOVA)?",
    "opts": [
      "La variable medida está ordinal o la normalidad no se cumple.",
      "Los datos están distribuidos normalmente.",
      "Se requiere comparar tres grupos diferentes.",
      "El tamaño muestral es suficientemente grande ($n \\ge 30$)."
    ],
    "c": [
      0
    ],
    "exp": "Los tests paramétricos (t, ANOVA) asumen normalidad y homocedasticidad. Si los datos son de tipo ordinal, o si la distribución es altamente sesgada y el tamaño muestral pequeño, debemos optar por métodos robustos como Mann-Whitney U o Kruskal-Wallis."
  },
  {
    "q": "Si se calcula el intervalo de confianza para la media $\\mu$ y resulta ser $[12.5, 14.5]$, ¿qué conclusión es estadísticamente válida?",
    "opts": [
      "Existe un nivel de confianza del 95% (asumiendo $\\alpha=0.05$) de que el verdadero valor de $\\mu$ cae en ese rango.",
      "El valor $13.5$ representa con certeza la media poblacional.",
      "La media poblacional ($\\mu$) debe estar entre $12.5$ y $14.5$.",
      "Si se repite la muestra, la media muestral ($\\bar{X}$) será exactamente igual a $13.5$."
    ],
    "c": [
      0
    ],
    "exp": "El intervalo de confianza (IC) NO asegura que el parámetro poblacional esté dentro del rango; solo proporciona un nivel de certeza sobre la precisión del estimador. La opción 3 es la definición correcta: con cierto nivel de confianza, el verdadero parámetro está contenido en ese intervalo."
  },
  {
    "q": "¿Cuál de los siguientes enunciados describe correctamente un 'parámetro' estadístico?",
    "opts": [
      "Describe una característica fija e intrínseca de la población completa (ej: $\\mu$, $\\sigma^2$).",
      "Es una métrica calculada a partir de datos muestrales.",
      "Se utiliza para hacer predicciones sobre el futuro sin necesidad de un análisis formal.",
      "Requiere realizar múltiples remuestreos mediante Bootstrap."
    ],
    "c": [
      0
    ],
    "exp": "El parámetro es la característica que se busca estimar y que pertenece a toda la población (ej: $\\mu, \\sigma^2$). Un estadístico es la estimación basada en una muestra."
  },
  {
    "q": "¿Cuál distribución sigue siendo apropiada para construir un intervalo de confianza cuando el tamaño muestral ($n$) es grande ($n \\geq 30$), independientemente de si $\\sigma$ se conoce o no?",
    "opts": [
      "Distribución $z$",
      "Distribución $\\chi^2$",
      "Distribución $t$ (Student's)",
      "Distribución $F$"
    ],
    "c": [
      0
    ],
    "exp": "Cuando $n$ es grande, por el Teorema Central del Límite (TCL), la distribución muestral de $\\bar{X}$ se aproxima a una Normal. Usamos la aproximación normal estándar, que sigue la distribución $z$, incluso si originalmente solo conocíamos la desviación estándar muestral ($S$)."
  },
  {
    "q": "¿Qué supuesto debe cumplirse para aplicar un análisis de varianza (ANOVA) paramétrico?",
    "opts": [
      "Normalidad de las variables dentro de cada grupo.",
      "Independencia entre las observaciones y los grupos.",
      "Homogeneidad de varianzas (homocedasticidad).",
      "Que la relación esté modelada por una distribución log-normal."
    ],
    "c": [
      0
    ],
    "exp": "Los tres supuestos principales son: 1) Normalidad de residuos, 2) Independencia, y 3) Homocedasticidad (varianzas iguales entre grupos)."
  },
  {
    "q": "¿Cuál es la interpretación correcta del coeficiente de correlación ($r$)?",
    "opts": [
      "Mide la fuerza de una relación lineal entre dos variables.",
      "Indica que existe una causalidad directa entre las variables medidas.",
      "Se normaliza y varía entre -1 y 1, donde cero indica ausencia de relación.",
      "Solo es aplicable cuando ambas variables son categóricas."
    ],
    "c": [
      0
    ],
    "exp": "El coeficiente $r$ mide la asociación lineal. Es crucial recordar que correlación no implica causalidad (opción 2)."
  },
  {
    "q": "¿En el contexto de la regresión lineal ($Y = \\beta_0 + \\beta_1 X$), qué representa el coeficiente $R^2$?",
    "opts": [
      "La proporción de la varianza total en $Y$ que es explicada por las variables predictoras ($X$).",
      "Una medida de cuán dispersos están los residuos respecto a cero.",
      "Un valor siempre menor o igual a 1, y mayor o igual a 0.",
      "Indica directamente el tamaño del efecto causal ($\\beta_1$) sin pasar por la significancia estadística."
    ],
    "c": [
      0
    ],
    "exp": "$R^2$ es un coeficiente de bondad de ajuste. Indica qué porcentaje de la variación observada en la variable dependiente ($Y$) puede ser explicado por la modelación lineal con las variables independientes ($X$)."
  },
  {
    "q": "¿Qué significa el concepto de 'Potencia Estadística' ($1-\\beta$)?",
    "opts": [
      "La capacidad del test estadístico para detectar correctamente un efecto o diferencia real si realmente existe en la población.",
      "La probabilidad de cometer un error Tipo II (no rechazar $H_0$ cuando es falso).",
      "El riesgo que corremos al rechazar la hipótesis nula ($H_0$) incorrectamente (Error Tipo I, $\\alpha$).",
      "Está directamente relacionada con el tamaño de la muestra y el poder alfa ($\\alpha$)."
    ],
    "c": [
      0
    ],
    "exp": "Potencia = $1-\\beta$. Es lo que queremos maximizar: la capacidad de rechazar $H_0$ cuando es falso. La opción 3 define correctamente esta capacidad."
  },
  {
    "q": "¿Qué implica el concepto de 'Homogeneidad de Varianzas' en un diseño experimental con múltiples grupos?",
    "opts": [
      "Que las varianzas poblacionales de todas las variables medidas son iguales ($\\sigma_1^2 = \\sigma_2^2 = ...$).",
      "Que la distribución normal se cumple para todos los grupos.",
      "Que el tamaño muestral ($n$) es igual en todos los grupos comparados.",
      "Que el efecto de la variable independiente sobre la variable dependiente es constante a lo largo del rango."
    ],
    "c": [
      0
    ],
    "exp": "Homogeneidad (o homocedasticidad) es un supuesto crucial para ANOVA y muchos tests paramétricos, significando que las dispersiones poblacionales deben ser iguales."
  },
  {
    "q": "¿Cuál es el flujo lógico más correcto al diseñar una prueba de hipótesis con múltiples grupos?",
    "opts": [
      "Verificar los supuestos (Normalidad/Homocedasticidad) $\\rightarrow$ Elegir el test apropiado ($\\text{ANOVA}/\\text{Kruskal-Wallis}$) $\\rightarrow$ Calcular el estadístico $F \\rightarrow$ Interpretar la significancia ($p < \\alpha$).",
      "Calcular el valor de $t$ primero, sin importar los grupos. $\\rightarrow$ Determinar si hay diferencias significativas entre pares. $\\rightarrow$ Corregir por múltiples comparaciones.",
      "Asumir que las varianzas son iguales y usar siempre ANOVA, incluso si los datos son categóricos. $\\rightarrow$ Comparar cada par individualmente.",
      "Empezar con la regresión lineal para modelar todas las interacciones posibles."
    ],
    "c": [
      0
    ],
    "exp": "El proceso estadístico es secuencial: verificar supuestos (Homocedasticidad), elegir el test, calcular el valor ($F$), y finalmente tomar una decisión sobre $H_0$ usando $p$-valores."
  },
  {
    "q": "¿Qué tipo de relación se establece cuando un análisis de regresión lineal muestra que al aumentar la variable X, Y también aumenta consistentemente?",
    "opts": [
      "Modelado por una asociación estadísticamente significativa (pendiente $\\beta_1 > 0$).",
      "Correlación negativa o inversa.",
      "Relación causal directa y positiva.",
      "Solo puede darse si se ha controlado por variables confusoras (confounders)."
    ],
    "c": [
      0
    ],
    "exp": "Estadísticamente, observamos un coeficiente positivo ($\\beta_1 > 0$, opción 3). Sin embargo, la correlación no implica causalidad. Para establecer causalidad, se requiere un diseño experimental riguroso y el control de variables confusoras."
  },
  {
    "q": "En el contexto de la inferencia estadística, ¿cuál es la función principal del Intervalo de Confianza (IC)?",
    "opts": [
      "Estimar un parámetro poblacional con precisión infinita.",
      "Proporcionar un rango plausible para el verdadero valor de un parámetro desconocido.",
      "Reemplazar por completo el proceso formal de contrastación de hipótesis.",
      "Determinar la desviación estándar poblacional mediante cálculo muestral."
    ],
    "c": [
      0
    ],
    "exp": "El IC no es una estimación puntual, sino que proporciona un intervalo (rango) con una probabilidad determinada ($\\text{confianza}$) de contener el verdadero parámetro. Es clave para la toma de decisiones al reducir la incertidumbre."
  },
  {
    "q": "¿Cuál es la principal limitación de los tests paramétricos?",
    "opts": [
      "Requieren que los datos sigan una distribución normal.",
      "No pueden manejar variables categóricas directamente.",
      "Son computacionalmente intensivos para grandes muestras.",
      "Solo funcionan cuando se conoce la desviación estándar poblacional ($\\sigma$)."
    ],
    "c": [
      0
    ],
    "exp": "La mayoría de los tests paramétricos (como el t-test o ANOVA) asumen normalidad y, aunque hay robustez, la violación de estos supuestos es su limitación más crítica. Si la distribución no es normal o si las varianzas no son homocedásticas, sus resultados pueden ser inválidos."
  },
  {
    "q": "Según el Teorema Central del Límite (TCL), si la muestra es suficientemente grande ($n$ grande), ¿cuál distribución se aproxima la distribución muestral de la media ($\\bar{X}$)?",
    "opts": [
      "Una distribución Normal, $\\mathcal{N}(\\mu, \\sigma^2/n)$.",
      "Distribución t de Student con $n-1$ grados de libertad.",
      "La distribución Chi-cuadrado ($\\chi^2$).",
      "Solo se aplica si la población es perfectamente normal."
    ],
    "c": [
      0
    ],
    "exp": "El Teorema Central del Límite establece que, independientemente de la forma de la distribución poblacional original (siempre que $\\sigma$ es conocida o $n$ es grande), la distribución muestral de la media ($\\bar{X}$) tiende a una Normal con media $\\mu$ y varianza $\\sigma^2/n$."
  },
  {
    "q": "¿Cuál es el papel principal del valor $p$ en un contraste de hipótesis?",
    "opts": [
      "Es la probabilidad de obtener los datos observados (o más extremos) si la hipótesis nula ($H_0$) fuera cierta.",
      "Indica el nivel de significancia ($\\alpha$) que debe usarse en el análisis.",
      "Representa la potencia del test estadístico.",
      "Calcula la diferencia entre dos medias poblacionales."
    ],
    "c": [
      0
    ],
    "exp": "El valor $p$ es la probabilidad de encontrar un resultado tan extremo como el observado, asumiendo que la hipótesis nula ($H_0$) es verdadera. Si este $p$-valor es menor que $\\alpha$, rechazamos $H_0$."
  },
  {
    "q": "¿Cuándo debemos preferir usar la distribución $t$ sobre la distribución $z$ en un contraste de hipótesis?",
    "opts": [
      "Cuando se desconoce la desviación estándar poblacional ($\\sigma$) y solo se conoce la desviación estándar muestral ($S$).",
      "Cuando el tamaño muestral ($n$) es muy grande (ej. $n > 100$).",
      "Si sabemos que la población sigue una distribución Normal.",
      "Siempre, ya que $t$ es más general."
    ],
    "c": [
      0
    ],
    "exp": "La distribución t de Student debe usarse cuando $\\sigma$ es desconocida. Usamos la varianza muestral ($S^2$) como estimador y grados de libertad ($n-1$)."
  },
  {
    "q": "¿Qué implica conceptualmente el valor $d$ de Cohen en un test para muestras independientes?",
    "opts": [
      "La magnitud del efecto estadístico, cuantificando si la diferencia es pequeña, mediana o grande.",
      "El nivel de significancia ($\\alpha$) que se debe establecer al inicio del estudio.",
      "La correlación lineal entre las variables medidas.",
      "Una prueba de normalidad de los datos."
    ],
    "c": [
      0
    ],
    "exp": "El $d$ de Cohen estandariza la diferencia observada por el tamaño del efecto (Effect Size). Valores típicos son 0.2 (pequeño), 0.5 (mediano) y 0.8 (grande)."
  },
  {
    "q": "¿Qué tipo de problema debe resolver primariamente un análisis de regresión lineal simple?",
    "opts": [
      "Estimar la relación funcional entre dos variables continuas (X e Y).",
      "Determinar si las medias de múltiples grupos son significativamente diferentes.",
      "Calcular la probabilidad $p$ para aceptar o rechazar una hipótesis nula.",
      "Comparar frecuencias observadas contra esperadas."
    ],
    "c": [
      0
    ],
    "exp": "La regresión lineal modela cómo cambia el valor esperado de una variable dependiente ($Y$) en función del cambio en una variable independiente ($X$), estableciendo la mejor línea recta que las atraviesa."
  },
  {
    "q": "¿Qué información proporciona un valor $R^2$ (Coeficiente de Determinación)?",
    "opts": [
      "La proporción de la varianza total en la variable dependiente ($Y$) que es explicada por las variables independientes ($X$).",
      "Un indicador directo de la causalidad entre X e Y.",
      "El grado de significancia del modelo globalmente, comparado con un test $F$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "$R^2$ nos dice qué porcentaje de la variación total en $Y$ es explicado por el modelo. Por ejemplo, un $R^2=0.6$ significa que el 60% de la varianza de $Y$ está explicada por $X$."
  },
  {
    "q": "Al identificar si un valor es un parámetro o un estadístico, ¿cuáles de las siguientes afirmaciones son correctas?",
    "opts": [
      "Un parámetro describe una característica específica de toda la población.",
      "Un estadístico es un valor calculado a partir de datos muestrales.",
      "Los parámetros se estiman usando muestras aleatorias.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Conceptualmente, el Parámetro ($\\mu$, $\\sigma^2$) pertenece a la Población y no puede ser conocido directamente. El Estadístico ($\\bar{X}$, $S^2$) es un cálculo derivado de los datos Muestrales. Por lo tanto, la opción 1 es la definición clave."
  },
  {
    "q": "En el contexto de la inferencia estadística, ¿cuándo se prefiere utilizar la distribución T de Student sobre la distribución Z?",
    "opts": [
      "Cuando la desviación estándar poblacional ($\\sigma$) es desconocida.",
      "Con tamaños muestrales pequeños ($n < 30$).",
      "Siempre que los datos no sigan una distribución normal.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "La distribución $z$ asume $\\sigma$ conocida. Cuando solo conocemos la desviación estándar muestral $S$, debemos usar la distribución $t$. La opción de ser 'siempre' es incorrecta, ya que si $n$ es muy grande (ej., $n>100$), la $t$ converge a la $z$."
  },
  {
    "q": "Al interpretar el coeficiente de determinación ($R^2$) en un modelo de regresión lineal, ¿qué significa afirmar que $R^2 = 0.85$?",
    "opts": [
      "El 85% de la variabilidad de la variable dependiente es explicada por las variables predictoras del modelo.",
      "Existe una correlación positiva muy fuerte entre ambas variables.",
      "La pendiente del modelo lineal es significativamente diferente de cero.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Por definición, $R^2$ (o coeficiente de determinación) es la proporción de la varianza de la variable dependiente que es predictible a partir de las variables independientes. Un valor de 0.85 significa precisamente eso: el 85% de la variación en Y se debe al modelo."
  },
  {
    "q": "Según el Teorema Central del Límite (TCL), ¿cuál es la distribución aproximada de la media muestral $\\bar{X}$ cuando el tamaño de muestra $n$ es grande?",
    "opts": [
      "$N(\\mu, \\sigma^2/n)$",
      "$\\mu$ constante, sin relación con $n$",
      "$N(0, 1)$ siempre",
      "Distribución uniforme"
    ],
    "c": [
      0
    ],
    "exp": "El TCL establece que, independientemente de la forma de la población, la distribución muestral de la media $\\bar{X}$ se aproxima a una normal $N(\\mu, \\sigma^2/n)$ cuando $n$ es grande."
  },
  {
    "q": "¿Qué condición debe cumplirse para poder utilizar la prueba Z (distribución Normal estándar) en un contraste de hipótesis?",
    "opts": [
      "$\\sigma$ poblacional conocida",
      "$n$ muy pequeño ($n<30$)",
      "La población sigue una distribución normal",
      "Las variables deben ser categóricas"
    ],
    "c": [
      0
    ],
    "exp": "La prueba Z requiere que la desviación estándar poblacional ($\\sigma$) sea conocida. Si $\\sigma$ es desconocida, se debe usar la distribución $t$."
  },
  {
    "q": "¿Qué representan los parámetros $\\mu_0$ y $\\alpha$ en el contexto de un contraste bilateral de hipótesis?",
    "opts": [
      "$\\mu_0$: Valor hipotético nulo; $\\alpha$: Nivel de significancia",
      "$\\mu_0$: Parámetro muestral; $\\alpha$: Potencia estadística",
      "$\\mu_0$: Diferencia observada; $\\alpha$: Error Tipo II",
      "$\\mu_0$ y $\\alpha$ son intercambiables"
    ],
    "c": [
      0
    ],
    "exp": "$\\mu_0$ es el valor que se asume en la hipótesis nula ($H_0: \\mu = \\mu_0$). $\\alpha$ (nivel de significancia) es la probabilidad máxima de cometer un error Tipo I (rechazar $H_0$ siendo verdadera)."
  },
  {
    "q": "¿Qué implica la relación entre un Intervalo de Confianza (IC) y una prueba bilateral?",
    "opts": [
      "Si $H_0: \\mu = \\mu_0$ es rechazada, entonces $\\mu_0$ debe caer fuera del IC con el nivel $(1-\\alpha)$",
      "El valor crítico Z o T utilizado en ambos procedimientos es idéntico.",
      "La potencia del test está directamente relacionada con la amplitud del intervalo de confianza elegido.",
      "Si $H_0: \\mu = \\mu_0$ se acepta, $\\mu_0$ necesariamente debe estar dentro del IC."
    ],
    "c": [
      0
    ],
    "exp": "Existe una equivalencia formal: Rechazar $H_0$ al nivel $\\alpha$ es equivalente a encontrar que el valor $\\mu_0$ cae fuera del intervalo de confianza al nivel $(1-\\alpha)$."
  },
  {
    "q": "¿Cuál de los siguientes procedimientos estadísticos requiere remuestrear datos sin asumir una distribución poblacional específica?",
    "opts": [
      "Bootstrap: Utiliza remuestreo con reemplazo para estimar la distribución muestral.",
      "Test Z paramétrico: Requiere que se conozcan $\\sigma$ y Normalidad.",
      "Análisis de Varianza (ANOVA): Asume normalidad en los grupos.",
      "Regresión lineal simple: Asume una relación lineal subyacente."
    ],
    "c": [
      0
    ],
    "exp": "El Bootstrap es un método computacional no paramétrico. Funciona generando múltiples muestras artificiales a partir del conjunto original, sin hacer suposiciones fuertes sobre la forma de la población."
  },
  {
    "q": "¿Cuáles son las propiedades fundamentales del estadístico media muestral $\\bar{X}$?",
    "opts": [
      "Es un estimador insesgado (unsesced) del parámetro poblacional $\\mu$",
      "Minimiza la suma de cuadrados errores (SSE) en el cálculo de regresión",
      "Es robusto ante valores atípicos (outliers)",
      "Asume que los datos siguen una distribución gaussiana"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La media es un estimador insesgado ($\\mathbb{E}[\\bar{X}] = \\mu$) y minimiza la suma de cuadrados. Sin embargo, no es robusta a outliers (la opción B es incorrecta) ni requiere asumir normalidad para ser usado (aunque el cálculo se basa en ello)."
  },
  {
    "q": "¿En qué situaciones es particularmente útil aplicar el método Bootstrap?",
    "opts": [
      "Cuando no se cumplen los supuestos de normalidad y la muestra es pequeña",
      "Para estimar distribuciones muestrales sin hacer suposiciones paramétricas sobre la población",
      "Cuando necesitamos calcular un contraste de hipótesis con alta potencia",
      "Cuando se desea determinar si existe una relación causal directa"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Bootstrap resuelve el problema de no conocer la distribución poblacional o cuando los supuestos paramétricos fallan. Permite estimar la varianza y las distribuciones muestrales mediante remuestreo. Aunque puede usarse para tests (opción C), su principal utilidad radica en hacer inferencias sin fuertes supuestos paramétricos."
  },
  {
    "q": "¿Qué componentes son esenciales al calcular el estadístico F en un ANOVA?",
    "opts": [
      "La varianza entre grupos (Mean Square Between, $CM_{entre}$)",
      "La varianza dentro de los grupos (Mean Square Within, $CM_{dentro}$)",
      "El cociente de las desviaciones estándar poblacionales ($\\sigma_1 / \\sigma_2$)",
      "La proporción de la variación explicada"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El estadístico F es el cociente entre la varianza que varía *entre* los grupos (variación explicable) y la varianza residual *dentro* de cada grupo (error no explicado). La proporción de variación explicada se relaciona más con $R^2$."
  },
  {
    "q": "¿Qué principios deben considerarse al interpretar la relación entre Intervalos de Confianza y Test de Hipótesis?",
    "opts": [
      "Si un IC de $(1-\\alpha)$ contiene el valor nulo $\\mu_0$, no se rechaza $H_0$ en el nivel $\\alpha$",
      "El test de hipótesis bilateral y la comprobación por intervalo son métodos conceptualmente equivalentes",
      "La magnitud del efecto debe determinar la significancia estadística (el p-valor)",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Existe una equivalencia fundamental: si $H_0$ es verdadera ($\\mu = \\mu_0$), entonces $\\mu_0$ *debe* estar dentro del IC al nivel de confianza $(1-\\alpha)$ correspondiente. También es crucial recordar que la significancia estadística (p-valor) no implica necesariamente relevancia práctica o magnitud del efecto."
  },
  {
    "q": "¿Qué característica distingue al estadístico $t$ del estadístico $z$?",
    "opts": [
      "A. El estadístico $t$ se usa cuando la desviación estándar poblacional ($\\sigma$) es desconocida y debe estimarse por la muestra ($S$).",
      "C. La distribución $t$ tiene grados de libertad que varían en función del tamaño muestral.",
      "B. El estadístico $z$ solo puede usarse con muestras muy grandes ($n > 30$).",
      "D. Ambos son indistinguibles si el tamaño muestral es superior a 100."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El estadístico $t$ (Student) se utiliza específicamente cuando $\\sigma$ es desconocida y hay que estimar por $S$. Su distribución depende de los grados de libertad ($df = n-1$), lo cual lo hace más variable para muestras pequeñas. La opción B es incorrecta porque el $z$ también puede usarse si $n$ es grande, pero la razón principal es la disponibilidad de $\\sigma$."
  },
  {
    "q": "¿Qué condición es fundamental para aplicar correctamente ANOVA?",
    "opts": [
      "A. Los datos deben ser independientes entre sí y los grupos.",
      "B. Las varianzas dentro de cada grupo (homogeneidad) deben ser aproximadamente iguales.",
      "C. La relación entre las variables debe ser lineal, como en regresión.",
      "D. Debe existir una variable categórica que defina la partición de grupos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "ANOVA requiere dos supuestos críticos: Independencia (las observaciones no deben influirse mutuamente) y Homogeneidad de Varianzas (las varianzas poblacionales dentro de cada grupo deben ser iguales). La opción C describe el supuesto de regresión."
  },
  {
    "q": "¿Qué significa que un test bilateral sea estadísticamente significativo al nivel $\\alpha=0.01$?",
    "opts": [
      "A. Hay menos del 1% de probabilidad de obtener los resultados observados si $H_0$ fuera cierta.",
      "C. El riesgo de cometer un error Tipo I (rechazar $H_0$ falsamente) se establece en 1%.",
      "B. La diferencia entre las medias es grande en términos prácticos (magnitud).",
      "D. Se requiere un tamaño muestral mínimo y muy grande."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un valor p < $\\alpha$ significa que la probabilidad observada bajo $H_0$ es menor a $\\alpha$. La opción C define el nivel de significancia ($\\alpha$) como el riesgo teórico de rechazar $H_0$ cuando es verdadera (Error Tipo I)."
  },
  {
    "q": "¿Qué implica interpretar que 'Correlación no implica causalidad'?",
    "opts": [
      "A. Solo los estudios experimentales controlados pueden establecer relaciones causales.",
      "C. Es posible que la asociación se deba a una variable de confusión (confounder) no medida.",
      "B. Un coeficiente alto ($\\rho \\approx 1$) solo significa una relación fuerte, pero no de causa-efecto.",
      "D. Las variables deben ser distribuidas normalmente para asumir causalidad."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Esta es una advertencia metodológica crucial: el alto coeficiente $\\rho$ solo indica asociación lineal. No podemos concluir causalidad sin un diseño experimental adecuado y controlando posibles variables de confusión (C). Las opciones A y B son incorrectas o incompletas."
  },
  {
    "q": "¿Cuál debería ser la consideración principal al seleccionar un modelo de regresión?",
    "opts": [
      "A. Verificar los supuestos estadísticos clave, como la linealidad y homocedasticidad.",
      "B. Determinar si el predictor $X$ es categórico o continuo para elegir el tipo de modelo (e.g., ANOVA vs Regresión).",
      "C. Minimizar la dependencia del tamaño muestral en las conclusiones finales.",
      "D. Usar únicamente variables medidas en escala de razón."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Antes de modelar, se deben verificar los supuestos: linealidad (la relación debe ser recta) y homocedasticidad (la varianza del error debe ser constante). Además, el tipo de variable predictora ($X$) dicta si se usa regresión o ANOVA."
  },
  {
    "q": "¿Cuál es la utilidad primaria de calcular un Intervalo de Confianza (IC)?",
    "opts": [
      "A. Proporcionar una estimación plausible del rango donde reside el parámetro poblacional real.",
      "B. Cuantificar tanto la precisión como la incertidumbre asociada a la estadística muestral ($\\bar{X}$).",
      "C. Determinar si el valor hipotético de $H_0$ es improbable dado nuestro muestreo.",
      "D. Evaluar la magnitud del efecto (Effect Size) en términos prácticos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El IC no solo da un rango, sino que también cuantifica nuestra incertidumbre sobre el parámetro poblacional ($\\mu$, $\\sigma$). Si el intervalo es muy amplio, indica baja precisión o alta variabilidad. Ambos puntos A y B son su utilidad fundamental."
  },
  {
    "q": "¿En el contexto del diseño de experimentos (DOE), qué se considera un 'Error Tipo II'?",
    "opts": [
      "A. Fallar en rechazar $H_0$ cuando en realidad es falsa (No detectar un efecto que sí existe).",
      "C. Tener baja potencia estadística, lo cual requiere aumentar la muestra o modificar el contraste.",
      "B. Estimar el intervalo de confianza con una varianza incorrecta.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Error Tipo II ($\\beta$) es no rechazar $H_0$ cuando debería rechazarse (falta de detección). Esto se relaciona directamente con la Potencia ($1-\\beta$), que es la probabilidad correcta de detectar un efecto. Aumentar el tamaño muestral o aumentar $\\alpha$ son métodos para reducir $\\beta$. La opción B es una preocupación sobre cálculo, no la definición del error."
  },
  {
    "q": "¿Cuál debería ser el criterio principal para elegir entre comparar solo dos grupos (Test T) o utilizar ANOVA?",
    "opts": [
      "A. Si se comparan más de dos grupos en paralelo, ANOVA es preferible por su manejo global de varianzas.",
      "B. Aunque un test $t$ pueda usarse con 3 grupos (comparaciones múltiples), esto aumenta el riesgo de error Tipo I general.",
      "C. ANOVA maneja mejor la corrección del nivel $\\alpha$ al realizar múltiples comparaciones simultáneas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Cuando se tienen tres o más grupos, usar un test $t$ repetidamente (comparación por pares) infla el error Tipo I general. ANOVA, por su naturaleza de contraste global, maneja mejor esta corrección y es la herramienta adecuada para comparar múltiples medias a la vez."
  },
  {
    "q": "¿Cuándo debemos utilizar la distribución $t$ de Student en lugar de la distribución normal estándar ($z$)?",
    "opts": [
      "Cuando el tamaño muestral ($n$) es pequeño (generalmente $n < 30$).",
      "Cuando la desviación estándar poblacional ($\\sigma$) es desconocida y se estima con la desviación muestral ($s$).",
      "Siempre que estemos comparando más de dos grupos.",
      "Cuando los datos no siguen una distribución normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Ambas condiciones justifican el uso de $t$. La distribución $z$ requiere $\\sigma$ conocida. Si $n$ es pequeño y $\\sigma$ es desconocida, usamos $t$. (Nota: Aunque por TCL para $n \\ge 30$ la aproximación a $z$ es buena, la regla estricta en estadística inferencial cuando $\\sigma$ es *desconocida* es utilizar $t$, independientemente de si $n$ es grande o pequeño)."
  },
  {
    "q": "¿Qué implica estadísticamente rechazar la hipótesis nula ($H_0: \\mu = \\mu_0$) con un nivel $\\alpha = 0.05$?",
    "opts": [
      "Que hay suficiente evidencia muestral para concluir que el parámetro poblacional es significativamente diferente de lo esperado.",
      "Que la probabilidad de obtener los resultados observados bajo $H_0$ es menor al 5%.",
      "Que se ha demostrado, sin duda alguna, una diferencia real en la población.",
      "Que el valor p calculado debe ser exactamente 0.05."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Rechazar $H_0$ significa que los datos son muy improbables si $H_0$ fuera verdad (opción 1). Esto se cuantifica porque el valor $p < \\alpha$, lo que implica una probabilidad de resultados $\\le 0.05$. No significa 'prueba irrefutable' (la ciencia es probabilística, opción 3)."
  },
  {
    "q": "¿Qué condiciones deben cumplirse conceptualmente para que la equivalencia entre el intervalo de confianza y el test bilateral sea válida?",
    "opts": [
      "Que el nivel de significancia ($\\alpha$) y el nivel de confianza ($1-\\alpha$) estén correctamente definidos e invertidos.",
      "Que se haya utilizado el mismo estadístico de prueba en ambos procedimientos (ej., $\\bar{X}$ o $t$).",
      "Que se interprete que la hipótesis nula es verdadera si el parámetro cae dentro del intervalo calculado.",
      "Que las distribuciones poblacionales sean perfectamente normales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La equivalencia funcional requiere coherencia matemática: usar los mismos datos, el mismo estadístico y niveles de $\\alpha$ e $1-\\alpha$. La interpretación correcta es crucial: si el parámetro cae *dentro* del IC, no se rechaza $H_0$."
  },
  {
    "q": "¿Qué indicadores sugieren que la potencia estadística de un estudio será baja?",
    "opts": [
      "Una diferencia real entre grupos (tamaño del efecto) muy pequeña.",
      "No tener conocimiento previo sobre el tamaño del efecto esperado.",
      "Un tamaño muestral muy grande ($n$).",
      "Un nivel de significancia ($\\alpha$) demasiado bajo, como $0.001$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La potencia ($1-\\beta$) se ve comprometida por tres factores principales: 1) $\\alpha$ (el nivel de significancia), 2) $n$ (tamaño muestral) y 3) el tamaño del efecto. Si el tamaño del efecto es muy pequeño, la prueba tendrá dificultad para detectarlo sin un $n$ gigantesco."
  },
  {
    "q": "¿En qué escenarios estadísticos es apropiado recurrir a pruebas no paramétricas?",
    "opts": [
      "Cuando los datos son ordinales y no hay suficiente poder para modelar la relación.",
      "Cuando se viola gravemente la suposición de normalidad y el tamaño muestral es pequeño.",
      "Cuando la variable dependiente es categórica (ej., prueba $\\chi^2$).",
      "Siempre que exista una correlación muy alta ($|r|>0.9$)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Se usan cuando los datos no cumplen supuestos paramétricos fuertes (normalidad) o su naturaleza es ordinal/nominal. Mann-Whitney y Wilcoxon son alternativas a $t$, y Kruskal-Wallis es la alternativa a ANOVA."
  },
  {
    "q": "¿Qué elementos son esenciales para interpretar correctamente un intervalo de confianza del 95%?",
    "opts": [
      "Que, si repitiéramos el proceso infinitas veces, el 95% de los intervalos construidos contendrían al parámetro poblacional verdadero.",
      "Que su interpretación debe ser siempre realizada en términos del parámetro subyacente y no de las unidades muestrales.",
      "Que la probabilidad de que el valor puntual esté fuera es del 5%.",
      "Implica necesariamente que $H_0$ sea falsa."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La opción 1 es la definición correcta (procedimental). La opción 3 recuerda que el IC estima el *parámetro* ($\\mu$), no los datos de una sola muestra. Nunca se debe interpretar como probabilidad puntual."
  },
  {
    "q": "¿Qué condición es indispensable para aplicar correctamente la prueba t de Student?",
    "opts": [
      "Los datos deben seguir una distribución normal o el tamaño muestral debe ser suficientemente grande.",
      "Las variables deben estar perfectamente correlacionadas (r=1).",
      "La muestra debe ser grande ($n \\ge 30$).",
      "Se requiere que las varianzas poblacionales sean iguales (homocedasticidad)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La opción 1 (N grande) es útil para el TCL pero no la condición *indispensable*. La opción 2 (Normalidad/Tamaño suficiente) es fundamental. Y si se usa t en contextos de varianza comparada (como ANOVA), se asume homocedasticidad, lo cual es un supuesto crítico que debe cumplirse."
  },
  {
    "q": "¿Cuáles son las principales ventajas conceptuales del método Bootstrap?",
    "opts": [
      "Permite estimar intervalos de confianza sin asumir distribuciones paramétricas específicas.",
      "Se basa en el principio de que los datos observados son representativos del proceso generador.",
      "Requiere un gran conocimiento teórico sobre la población subyacente.",
      "Es computacionalmente costoso y lento para muestras grandes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Bootstrap es una herramienta poderosa porque no requiere supuestos paramétricos (ventaja clave). Además, su base conceptual es la idea de remuestrear sin reemplazo para estimar la distribución muestral, asumiendo que los datos observados son representativos del proceso poblacional."
  },
  {
    "q": "¿Cuál es el significado estadístico de calcular un valor $R^2$ en una regresión lineal?",
    "opts": [
      "Representa la proporción de la varianza total de la variable dependiente ($Y$) que es explicada por las variables independientes ($X$).",
      "Indica la fuerza de la relación lineal entre $X$ y $Y$.",
      "Es un indicador de si se debe usar una transformación logarítmica en el modelo.",
      "Solo aplica cuando la muestra es perfectamente normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El $R^2$ cuantifica *cuánto* del cambio en Y se puede atribuir a los cambios en X. Un valor de 0.9 significa que el 90% de la variabilidad de Y es explicada por nuestro modelo (alta capacidad explicativa)."
  },
  {
    "q": "¿Cuáles son las medidas de dispersión apropiadas para datos cuantitativos continuos?",
    "opts": [
      "Varianza ($\\sigma^2$)",
      "Desviación típica ($\\sigma$)",
      "Rango intercuartílico (IQR)",
      "Cuartiles."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La varianza y la desviación típica son las medidas estándar que cuantifican qué tan dispersos están los datos. El IQR es una medida de dispersión más robusta, pero el enunciado se refiere a las medidas paramétricas primarias: Varianza y Desviación Típica."
  },
  {
    "q": "¿Cuál es el propósito principal del análisis de regresión lineal?",
    "opts": [
      "Estimar qué tan bien se ajustan las variables a una línea recta definida.",
      "Evaluar si la relación entre dos variables es significativa y para predecir valores futuros.",
      "Determinar la distribución más probable de los parámetros poblacionales.",
      "Comparar las medias de tres o más grupos simultáneamente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La regresión busca modelar la relación lineal ($Y = \\beta_0 + \\beta_1 X$) para estimar $\\beta$'s. Su propósito es doble: primero, establecer si existe una relación significativa y segundo, usar ese modelo para hacer predicciones (inferencia)."
  },
  {
    "q": "¿Cuál de las siguientes situaciones requiere el uso de tests no paramétricos en lugar de tests Z o T?",
    "opts": [
      "Cuando se comparan dos muestras independientes y la normalidad es dudosa.",
      "Cuando los datos son medidas ordinales por naturaleza, como niveles de satisfacción (Bajo, Medio, Alto).",
      "Siempre que haya más de tres grupos para comparar sus medias.",
      "Cuando el tamaño muestral $n$ sea extremadamente grande ($n > 1000$)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tests no paramétricos son necesarios cuando los supuestos de normalidad o igualdad de varianzas fallan. Las muestras ordinales (categorías con orden) siempre requieren estos tests porque las matemáticas paramétricas asumen intervalos iguales y distribución continua."
  },
  {
    "q": "¿Qué distribuciones estadísticas se utilizan comúnmente para realizar pruebas de hipótesis sobre varianzas ($\\sigma^2$) o proporciones ($p$)?",
    "opts": [
      "Distribución Chi-cuadrado ($\\chi^2$)",
      "Distribución Z (Normal estandarizada)",
      "Distribución t de Student",
      "La distribución F"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La distribución $\\chi^2$ se utiliza específicamente para probar varianzas y la distribución $Z$ es fundamental para trabajar con proporciones grandes o cuando se conoce $\\sigma$. La distribución $t$ se reserva para medias poblacionales cuando $\\sigma$ es desconocida."
  },
  {
    "q": "¿Cuál es la relación entre el intervalo de confianza (IC) construido al nivel $(1-\\alpha)$ y un test bilateral a nivel $\\alpha$? ¿Cómo se relacionan?",
    "opts": [
      "Si el IC contiene el valor hipotético $H_0$, no hay evidencia para rechazar $H_0$ en el test.",
      "Rechazar $H_0$ en el test es equivalente a que el valor $H_0$ caiga fuera del intervalo de confianza construido al nivel $\\alpha$.",
      "El tamaño muestral afecta igual y opuesto la relación entre IC y Test.",
      "La equivalencia solo aplica cuando se usa el estadístico z."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Existe una fuerte equivalencia conceptual: si $H_0$ está dentro del IC, significa que ese valor es plausible para la población (no rechazamos); si $H_0$ cae fuera, es muy improbable (rechazamos $H_0$). Esta relación se mantiene independientemente de si se usa t o z."
  },
  {
    "q": "¿Qué indica el coeficiente de determinación $R^2$ en un modelo de regresión lineal? ¿Cuáles son sus propiedades?",
    "opts": [
      "Proporción de la varianza dependiente explicada por las variables independientes.",
      "Es unitario ($0 \\le R^2 \\le 1$).",
      "Mide qué tan bien se ajustan los puntos a la recta, sin importar si hay causalidad.",
      "Representa el cociente entre la suma de cuadrados entre (SCE) y la suma total de cuadrados (SCT)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "$R^2$ mide la proporción de varianza explicada. Dado que $R^2 = 1 - \\text{SCE/SCT}$, su valor está acotado entre 0 y 1. Es una medida de bondad de ajuste, pero no implica causalidad por sí sola."
  },
  {
    "q": "¿Cuál es el objetivo principal de realizar pruebas no paramétricas en lugar de las paramétricas?",
    "opts": [
      "Evitar el cálculo de medias muestrales.",
      "Cuando los supuestos de normalidad y homocedasticidad han sido gravemente violados.",
      "Utilizar datos ordinales o nominales donde la distribución normal no se puede asumir.",
      "Reducir la complejidad matemática del análisis estadístico."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tests no paramétricos (ej: Mann-Whitney) son alternativas robustas cuando se viola la Normalidad o el tipo de datos es inferior a intervalo/ratio. Las opciones 1 y 4 son las razones más comunes."
  },
  {
    "q": "¿Qué representan los términos 'Estadístico' y 'Parámetro'?",
    "opts": [
      "El parámetro es conocido teóricamente mientras que el estadístico debe calcularse.",
      "El estadístico se calcula de una muestra y estima al parámetro poblacional.",
      "Los dos conceptos son sinónimos y pueden intercambiarse en cualquier contexto.",
      "Solo los parámetros requieren la aplicación del Teorema Central del Límite."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El objetivo central es pasar de lo desconocido (Parámetro) a lo estimado (Estadístico). El estadístico actúa como un estimador puntual o intervalar del parámetro."
  },
  {
    "q": "¿Cuándo se prefiere usar el método Bootstrap sobre métodos paramétricos tradicionales?",
    "opts": [
      "Cuando hay una gran sospecha de que la distribución subyacente no es normal.",
      "Para estimar distribuciones muestrales sin depender de supuestos teóricos específicos (remuestreo).",
      "En situaciones donde las muestras son muy pequeñas y aplicar $t$ o $z$ sería riesgoso.",
      "Cuando se está trabajando exclusivamente con datos nominales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Bootstrap es una herramienta robusta. Su principal ventaja es que estiman la distribución muestral simplemente mediante remuestreo de los datos disponibles, evitando la necesidad de asumir Normalidad o conocer la forma poblacional."
  },
  {
    "q": "¿Cuál de los siguientes supuestos debe cumplirse típicamente para aplicar correctamente ANOVA o tests paramétricos como T-test?",
    "opts": [
      "Normalidad de las variables en cada grupo.",
      "Independencia entre las observaciones y homocedasticidad (varianzas iguales).",
      "Que la relación sea lineal, independientemente del método.",
      "La necesidad obligatoria de un tamaño muestral $n > 30$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "ANOVA requiere que los datos en cada grupo sean normales y que las varianzas de estos grupos sean iguales (homocedasticidad). La independencia es crítica para cualquier test paramétrico."
  },
  {
    "q": "¿Qué diferencia fundamental existe entre un parámetro poblacional y un estadístico muestral?",
    "opts": [
      "El parámetro se calcula con datos de una muestra; el estadístico requiere la población completa.",
      "El parámetro ($\\mu$) es fijo e desconocido; el estadístico ($\\bar{X}$) es variable y conocido tras la medición.",
      "El estadístico se usa solo para pruebas $Z$; el parámetro se usa en análisis de regresión.",
      "No existe diferencia conceptual, son sinónimos utilizados indistintamente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Parámetro: valor verdadero (fijo) sobre la población ($\\mu, \\sigma^2$). Estadístico: valor calculado a partir de una muestra específica ($\\bar{X}, S^2$). La inferencia se mueve del estadístico al parámetro."
  },
  {
    "q": "En el análisis de regresión lineal simple ($Y = \\beta_0 + \\beta_1 X$), ¿qué representan correctamente los siguientes términos?",
    "opts": [
      "El coeficiente $\\beta_1$ estima la pendiente y cambio esperado en $Y$ por unidad de $X$.",
      "El término $R^2$ indica la proporción de varianza total de $Y$ explicada por el modelo.",
      "La correlación de Pearson ($r$) mide únicamente la fuerza lineal, sin considerar significancia.",
      "Los residuos ($\\epsilon_i$) representan necesariamente errores aleatorios que no pueden ser modelados."
    ],
    "c": [
      0,
      1
    ],
    "exp": "$\\beta_1$ es el cambio en $Y$. $R^2$ cuantifica cuánto mejora el modelo. La correlación ($r$) solo es una medida de asociación y no implica causalidad. Los residuos son la parte no explicada por el modelo."
  },
  {
    "q": "¿Cuál es la relación conceptual entre los Intervalos de Confianza y las Contrastes de Hipótesis?",
    "opts": [
      "Un valor parámetro ($\\mu_0$) cae dentro del IC implica que no hay evidencia suficiente para rechazar $H_0: \\mu = \\mu_0$.",
      "El test bilateral y la construcción del IC son métodos estadísticos conceptualmente equivalentes para tomar decisiones sobre un parámetro.",
      "Si el nivel de significancia $\\alpha$ se establece en 5%, el intervalo de confianza debe ser del 95%.",
      "La potencia del test es directamente proporcional a la amplitud del IC."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si $\\mu_0$ está dentro del IC, no rechazamos $H_0$. El nivel de confianza y el nivel de significancia están relacionados ($\\text{confianza} = 1 - \\alpha$). Son equivalentes: si un test rechaza $H_0$, ese valor cae fuera del IC."
  },
  {
    "q": "¿Cómo se interpreta el cálculo del estadístico $F$ en un ANOVA?",
    "opts": [
      "Compara la variabilidad promedio entre grupos con la variabilidad dentro de los mismos grupos (residual).",
      "Un valor grande de $F$ sugiere que las diferencias observadas entre medias son significativamente mayores que el ruido interno.",
      "El test F es útil solo para variables continuas y siempre requiere tres o más grupos comparados.",
      "Indica directamente la magnitud del efecto de cada variable predictora."
    ],
    "c": [
      0,
      1
    ],
    "exp": "$F$ compara las varianzas (entre/dentro). Un $F$ grande significa que el cambio entre grupos es mucho mayor que la variación aleatoria esperada dentro de ellos."
  },
  {
    "q": "¿En un contexto de múltiples variables predictoras y modelado?",
    "opts": [
      "El coeficiente de regresión ($\\beta_i$) se interpreta como el cambio esperado en Y cuando $X_i$ cambia una unidad, *manteniendo constantes las demás variables*. (Ceteris Paribus).",
      "La significancia estadística ($p < \\alpha$) solo indica que la variable no es cero, sin especificar su magnitud práctica.",
      "Un alto valor de $R^2$ sugiere un modelo robusto y que todos los supuestos fueron cumplidos.",
      "Es indispensable realizar una prueba de multicolinealidad para asegurar que las variables predictoras son ortogonales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El coeficiente $\\beta_i$ es el efecto aislado (manteniendo constantes). $p < \\alpha$ solo indica la significancia estadística. Un alto $R^2$ *sugiere* buen ajuste, pero no garantiza que los supuestos estén cumplidos."
  },
  {
    "q": "¿Cuáles son las principales funciones o aplicaciones del concepto de Propensión o Bootstrap en estadísticas computacionales?",
    "opts": [
      "Permitir la estimación de distribuciones muestrales y errores estándar cuando los suposiciones teóricas (ej. normalidad) fallan.",
      "Generar intervalos de confianza no paramétricos, aumentando la robustez ante datos atípicos (outliers).",
      "Se utiliza para simular múltiples escenarios hipotéticos sin la necesidad de una población grande o conocida.",
      "Es un reemplazo directo del cálculo analítico en todos los casos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Bootstrap es una técnica computacional que remuestrea con reemplazo. Permite estimar parámetros y ICs cuando no se cumplen supuestos teóricos (normalidad). Simular escenarios es su objetivo."
  },
  {
    "q": "¿Qué representan los indicadores de asociación en la relación entre variables?",
    "opts": [
      "La correlación ($\\rho$) mide la fuerza lineal e indica solo una medida de asociación, nunca causalidad.",
      "El valor $R^2$ cuantifica el porcentaje de varianza explicada por el modelo. Es un indicador de bondad de ajuste.",
      "Un coeficiente de regresión grande significa que hay una relación fuerte y necesariamente causa un cambio en Y.",
      "Los residuos representan la contribución no lineal o latente que ninguna variable predictora pudo capturar."
    ],
    "c": [
      0,
      1
    ],
    "exp": "$r$ mide asociación. $R^2$ es el ajuste del modelo. El coeficiente $\\beta$ (o $r$) indica magnitud de cambio, pero *nunca* causalidad automáticamente."
  },
  {
    "q": "¿Cuáles son las acciones apropiadas a tomar al planificar un análisis estadístico integral?",
    "opts": [
      "Realizar primero la exploración visual de los datos (histogramas, diagramas caja) para identificar valores atípicos y formas.",
      "Verificar los supuestos subyacentes del método elegido (ej. homocedasticidad o normalidad).",
      "Decidir el test estadístico basado en la naturaleza de las variables (paramétrico vs no paramétrico), no solo por conveniencia matemática.",
      "Asumir siempre que si $n$ es grande, todos los supuestos son automáticamente satisfechos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La planificación estadística debe comenzar con exploración y verificación de supuestos. La elección del test depende *primero* de la naturaleza de los datos/variables (ordinales, continuas) antes que por el tamaño muestral."
  },
  {
    "q": "¿Cuál es el estadístico que representa la variabilidad de un conjunto de datos muestrales?",
    "opts": [
      "Media ($\\bar{x}$)",
      "Varianza ($S^2$)",
      "Desviación estándar (s)",
      "Coeficiente de correlación"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Tanto la varianza ($S^2$) como la desviación estándar (s) son medidas fundamentales de dispersión o variabilidad dentro del conjunto de datos muestrales."
  },
  {
    "q": "¿Cuál es la interpretación más precisa del coeficiente de determinación ($R^2$) en el contexto de regresión lineal?",
    "opts": [
      "Representa la proporción de la varianza total de la variable dependiente que es explicada por el modelo de regresión y sus variables predictoras.",
      "Indica cuán fuerte debe ser la relación causal entre las variables X e Y.",
      "Es una medida adimensional que siempre debe ser negativa para significar un patrón.",
      "Mide directamente el tamaño del efecto ($d$ de Cohen) en unidades naturales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "$R^2$ explica la proporción de varianza. Un valor cercano a 1 significa que el modelo explica mucha variación (es decir, las variables X y Y están muy relacionadas). *No* mide causalidad ni es directamente un tamaño de efecto."
  },
  {
    "q": "¿Qué ventaja principal ofrece el método Bootstrap en comparación con los métodos paramétricos tradicionales?",
    "opts": [
      "No requiere hacer supuestos fuertes sobre la distribución subyacente de la población.",
      "Puede estimar distribuciones y errores estándar incluso cuando las fórmulas analíticas son complejas o inexistentes.",
      "Es más rápido de calcular que el método Z, independientemente del tamaño de muestra.",
      "Generalmente proporciona un valor $p$ más pequeño, lo que aumenta el riesgo de error Tipo I."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La fuerza del Bootstrap radica en su capacidad de estimar parámetros y distribuciones sin depender de supuestos paramétricos como la normalidad, basándose únicamente en los datos muestrales."
  },
  {
    "q": "¿Qué métodos estadísticos son más apropiados cuando los supuestos paramétricos fallan?",
    "opts": [
      "Tests no paramétricos (e.g., Mann-Whitney U, Kruskal-Wallis).",
      "Transformación de datos (Box-Cox) para estabilizar la varianza o aproximar la normalidad.",
      "Reducción de dimensiones (PCA) si el objetivo es solo describir la estructura de datos.",
      "Modelos de regresión logística cuando la variable dependiente no es continua."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tests no paramétricos son alternativas robustas. La transformación de Box-Cox o logarítmica puede ayudar a cumplir los supuestos de normalidad y homocedasticidad necesarios para métodos paramétricos."
  },
  {
    "q": "¿Qué implica un tamaño de efecto ($d$ de Cohen) grande?",
    "opts": [
      "Indica que la diferencia entre las medias de dos grupos es muy grande en términos estandarizados (gran separación).",
      "Sugiere que el resultado del test fue estadísticamente significativo al nivel $\\alpha$.",
      "Representa únicamente una medida de asociación, sin implicación práctica.",
      "Necesita ser interpretado siempre comparándolo con $R^2$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El tamaño de efecto cuantifica la magnitud del impacto. Un valor grande (ej., $d > 0.8$) indica que la diferencia observada es prácticamente importante o clínicamente significativa."
  },
  {
    "q": "¿Cuándo se debe preferir un test estadístico no paramétrico?",
    "opts": [
      "Cuando los datos son nominales u ordinales (datos por rangos o categorías).",
      "Cuando la distribución de los datos se desvía gravemente de la normalidad y $n$ es pequeño.",
      "Cuando el tamaño de muestra ($n$) es muy grande (>30).",
      "Siempre que el parámetro poblacional sea desconocido."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tests no paramétricos son ideales cuando trabajamos con tipos de datos ordinales o nominales (no se asume una escala continua) y también son la alternativa más segura cuando los supuestos de normalidad son violados severamente en muestras pequeñas."
  },
  {
    "q": "¿Qué indica un valor $R^2$ muy bajo (cercano a 0)?",
    "opts": [
      "Que la variable predictora ($X$) es completamente irrelevante para predecir la variable respuesta ($Y$).",
      "Que el modelo de regresión lineal está mal especificado y se necesita incluir más variables.",
      "Que la relación entre $X$ e $Y$ es perfectamente lineal (correlación perfecta).",
      "Que los residuos son normales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un $R^2$ bajo indica que el modelo explica muy poca varianza. Esto sugiere que la variable predictora tiene poco poder explicativo (opción 0) o que se han omitido variables importantes (modelo mal especificado, opción 1)."
  },
  {
    "q": "¿Cuál es la interpretación correcta de un intervalo de confianza del 95% para una media $\\mu$?",
    "opts": [
      "Si repitiéramos el proceso muchas veces, el 95% de los intervalos construidos contendrían el parámetro poblacional real ($\\mu$).",
      "El 95% de las observaciones muestrales caerán en ese rango.",
      "Existe un 95% de probabilidad de que el valor verdadero de $\\mu$ caiga dentro del intervalo calculado.",
      "La probabilidad es de 0.95 que la media muestral $\\bar{X}$ sea igual a $\\mu$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los intervalos de confianza son declaraciones sobre el procedimiento estadístico (opción 1). No se debe tratar la probabilidad como algo sobre el parámetro fijo ($\\mu$), ya que esto es un error conceptual común. El intervalo *contiene* el parámetro con cierto nivel de confianza."
  },
  {
    "q": "¿Cuál debe ser la interpretación de un coeficiente de correlación $r = -0.9$? ",
    "opts": [
      "Existe una relación lineal negativa muy fuerte entre las variables.",
      "Cuanto mayor es $X$, menor es consistentemente $Y$.",
      "La varianza conjunta de ambas variables es alta.",
      "Esto implica que la variable $X$ causa la disminución de $Y$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un valor cercano a -1 indica una relación lineal muy fuerte y negativa (opción 0). Interpretativamente significa que al aumentar $X$, $Y$ tiende a disminuir consistentemente (opción 1). Es crucial recordar que la correlación nunca implica causalidad."
  },
  {
    "q": "¿Qué técnica estadística es apropiada cuando no se cumplen los supuestos de normalidad y homogeneidad de varianzas, y se comparan tres o más grupos?",
    "opts": [
      "Test de Kruskal-Wallis (análogo no paramétrico al ANOVA de una vía).",
      "Regresión logística.",
      "ANOVA de medidas repetidas.",
      "ANCOVA (Análisis de Covarianza)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Cuando se comparan múltiples grupos y los datos violan supuestos paramétricos, el test de Kruskal-Wallis es la alternativa no paramétrica recomendada. La regresión logística está destinada a variables binarias (causalidad), no para comparar medias en general."
  },
  {
    "q": "¿Cuál es la relación conceptual entre un intervalo de confianza y una prueba de hipótesis bilateral?",
    "opts": [
      "Si el valor nulo ($\\mu_0$) cae dentro del intervalo de confianza, se debe fallar a rechazar $H_0$.",
      "Existe equivalencia: si se rechaza $H_0$ en un nivel $\\alpha$, entonces $\\mu_0$ estará fuera del IC al nivel $1-\\alpha$.",
      "Los intervalos de confianza siempre deben tener niveles de significancia más bajos que los tests de hipótesis.",
      "El test es la versión paramétrica y el IC, la no paramétrica."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La relación fundamental es que si un valor ($\\mu_0$) está contenido en el intervalo de confianza calculado con nivel $1-\\alpha$, este valor *no* puede ser rechazado por el test bilateral al nivel $\\alpha$. Esta equivalencia es clave para la inferencia."
  },
  {
    "q": "¿Qué implica conceptualmente el método Bootstrap?",
    "opts": [
      "Reestimar la distribución muestral de un estadístico utilizando remuestreos con reemplazo a partir de los datos observados.",
      "Corregir sesgos en estimadores lineales mediante técnicas de ajuste (e.g., Jackknife).",
      "Asumir que los datos siguen una distribución normal para calcular intervalos y p-valores.",
      "Realizar pruebas de hipótesis basadas únicamente en la distribución $t$ de Student."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Bootstrap es un método computacional robusto que simula la distribución muestral sin asumir formas paramétricas (opción 0). No está diseñado para corregir sesgos específicos del estimador en sí mismo (esa sería más la función de Jackknife)."
  },
  {
    "q": "¿Qué se entiende por 'parámetro' y cuál es el ejemplo correcto?",
    "opts": [
      "Una característica fija de toda la población, como $\\mu$ o $p$.",
      "La desviación estándar poblacional ($\\sigma$), siempre que sea conocida.",
      "Un valor calculado a partir de una muestra específica (ej. $\\bar{X}$ o $\\hat{p}$).",
      "El estadístico muestral más eficiente en términos de varianza."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Parámetros son valores reales e inalcanzables (fijos) de la población. $\\mu$ y $p$ son los ejemplos canónicos de parámetros. Un valor calculado a partir de una muestra es un estadístico ($\\bar{X}, \\hat{p}$), no un parámetro."
  },
  {
    "q": "¿Cuál es la interpretación correcta de una potencia estadística alta (cercana a 1)?",
    "opts": [
      "La capacidad del test para detectar un efecto o diferencia si realmente existe en la población ($\\text{Power} = 1-\\beta$).",
      "Indica que el tamaño muestral debe ser excesivamente grande, lo cual es ineficiente.",
      "El riesgo de cometer un error Tipo I (rechazar $H_0$ cuando es verdadera) es bajo.",
      "Significa que la correlación entre variables es extremadamente alta."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La potencia ($\\text{Power} = 1-\\beta$) mide nuestra capacidad de rechazar $H_0$ cuando en realidad es falsa (detectar el efecto). Un test con alta potencia es bueno. Sin embargo, un riesgo bajo Tipo I se relaciona más directamente con el nivel $\\alpha$, no necesariamente con la potencia."
  },
  {
    "q": "¿Cuál es el propósito principal de la Regresión Lineal Múltiple?",
    "opts": [
      "Estimar cómo una o varias variables predictoras ($X_i$) afectan a una variable respuesta continua ($Y$).",
      "Determinar si existe una relación lineal entre dos variables (Correlación).",
      "Realizar la prueba de hipótesis más simple para dos grupos (t-test).",
      "Identificar patrones en datos categóricos sin asumir normalidad."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La regresión lineal va más allá de solo medir la relación ($r$) o correlación. Su objetivo es cuantificar y modelar cómo el cambio en $X$ *predice* un cambio esperado en $Y$, permitiendo establecer un modelo funcional $\\hat{Y} = \\beta_0 + \\sum \\beta_i X_i$. Por lo tanto, incluye la medición de relación como parte de su alcance."
  },
  {
    "q": "¿Cuáles son los propósitos fundamentales del método Bootstrap en estadística?",
    "opts": [
      "Estimar la distribución de muestreo de un estadístico sin asumir una forma paramétrica teórica.",
      "Calcular intervalos de confianza más robustos cuando las asunciones de normalidad o tamaño muestral grande fallan.",
      "Sustituir completamente a los tests parametricos tradicionales (como $z$ o $t$).",
      "Determinar la causalidad entre variables."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Bootstrap es una herramienta computacional que simula el remuestreo de datos para estimar distribuciones y ICs. Es robusto porque no asume parámetros específicos (como Normalidad) ni dependencia del tamaño muestral infinito."
  },
  {
    "q": "¿Cuáles son medidas utilizadas para cuantificar la dispersión o variabilidad de un conjunto de datos?",
    "opts": [
      "Varianza ($\\sigma^2$)",
      "Desviación Estándar ($\\sigma$)",
      "Media ($\\bar{X}$)",
      "Rango Intercuartílico (IQR)"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Varianza y la Desviación Estándar son las medidas más comunes de dispersión. La Media es una medida de tendencia central; el Rango Intercuartílico también mide dispersión entre cuartiles."
  },
  {
    "q": "¿Bajo qué condiciones se asume que un test paramétrico (como ANOVA o T-test) arrojará resultados válidos y confiables?",
    "opts": [
      "Los datos deben provenir de una muestra aleatoria.",
      "Las variables medidas deben ser continuas.",
      "La varianza debe ser homogénea entre los grupos comparados.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una muestra aleatoria asegura la independencia. Las variables continuas son necesarias para calcular parámetros de dispersión y aplicar estos tests. La homogeneidad de varianzas (homocedasticidad) es un supuesto crítico, especialmente en ANOVA."
  },
  {
    "q": "¿Cuáles de las siguientes afirmaciones describen correctamente los conceptos relacionados con el coeficiente de correlación ($r$)?",
    "opts": [
      "El signo del coeficiente indica la dirección de la relación.",
      "Un valor de $r=1$ implica una relación lineal perfecta positiva.",
      "Puede usarse para inferir causalidad entre variables.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El signo define la dirección (positivo/negativo). $|r|=1$ significa que todos los puntos caen en la recta. Sin embargo, el valor de $r$ solo mide asociación; es incorrecto asumir causalidad."
  },
  {
    "q": "¿Cuándo se debe considerar estadísticamente significativa el resultado de un Intervalo de Confianza (IC) para una media poblacional ($\\mu$)?",
    "opts": [
      "Si los límites superior e inferior del IC están ambos por encima o por debajo de cero.",
      "Si el valor hipotético nulo ($\\mu_0$) cae fuera del intervalo.",
      "Cuanto mayor sea la longitud del intervalo, más precisa es la estimación.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El IC en sí mismo no debe contener información sobre cero (aunque esto es específico de variables de cambio de signo). Lo crucial para el test es que si $\\mu_0$ está fuera del IC, rechazaríamos $H_0$. El tercer punto es incorrecto: un intervalo más pequeño implica *mayor* precisión."
  },
  {
    "q": "¿Cuál es la correcta interpretación de los resultados obtenidos mediante contrastes de hipótesis?",
    "opts": [
      "Rechazar $H_0$ significa que el resultado observado es muy improbable si $H_0$ fuera cierta.",
      "No rechazar $H_0$ simplemente indica falta de evidencia suficiente para declarar una diferencia significativa.",
      "El p-valor siempre debe ser menor a 0.05 para considerar un hallazgo significativo.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Rechazar $H_0$ se basa en la probabilidad (p-valor) bajo el supuesto de que $H_0$ es cierta. No rechazar $H_0$ NO significa que $H_0$ sea verdadera; solo significa que no hay pruebas suficientes para refutarla. El valor de 0.05 es un umbral arbitrario, no una ley universal."
  },
  {
    "q": "¿Cuáles son los supuestos esenciales para aplicar una Regresión Lineal simple $Y = \\beta_0 + \\beta_1 X + \\epsilon$?",
    "opts": [
      "La independencia de las observaciones",
      "La linealidad de la relación entre variables",
      "Homocedasticidad (varianza constante del error)",
      "Que los residuos ($\\epsilon$) sigan una distribución normal"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los supuestos más críticos son: 1) Linealidad (la relación debe ser lineal), 2) Independencia (observaciones no correlacionadas), y 3) Homocedasticidad ($\\text{Var}(\\epsilon)$ constante). Aunque la normalidad de los residuos es deseable para inferencias precisas, a menudo se tolera si $n$ es grande debido al TLC. Por lo tanto, la opción C (Normalidad) no es estrictamente necesaria para el modelo en sí mismo."
  },
  {
    "q": "¿Qué elementos deben considerarse al planificar un estudio que requiera pruebas de hipótesis?",
    "opts": [
      "Definir previamente las hipótesis nula ($H_0$) y alternativa ($H_a$).",
      "Determinar el nivel de significancia ($\\alpha$) deseado antes de recolectar datos.",
      "Estimar un tamaño muestral adecuado basado en la potencia, $\\alpha$ y el tamaño del efecto esperado.",
      "Realizar análisis exploratorios para verificar los supuestos paramétricos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El proceso debe ser prospectivo. Se define $H_0$ y $H_a$. Se fija $\\alpha$ (el riesgo de error Tipo I). Y se calcula $n$ necesario para alcanzar la potencia deseada ($1-\\beta$). El análisis exploratorio es parte de la ejecución, no del *plan* inicial."
  },
  {
    "q": "¿Cuáles son los supuestos esenciales que deben cumplirse para aplicar correctamente un ANOVA unidireccional?",
    "opts": [
      "Las variables dependientes y las poblaciones subyacentes siguen una distribución normal.",
      "Los grupos de muestras deben ser estadísticamente independientes entre sí.",
      "La varianza poblacional debe ser igual en todos los grupos (homocedasticidad).",
      "Solo es necesario tener un tamaño muestral grande ($n > 30$ en cada grupo)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los supuestos son: Normalidad de las poblaciones, Independencia entre grupos y Homocedasticidad (varianzas iguales). El supuesto $n>30$ es una regla general que se puede evadir si los datos son normales."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para considerar el uso apropiado de la regresión lineal simple?",
    "opts": [
      "La relación entre las variables debe ser aproximadamente lineal.",
      "Los residuos del modelo deben tener media cero y distribución normal (Normalidad de residuos).",
      "La varianza de los errores no debe depender de los valores predichos (Homocedasticidad).",
      "Solo es válida si el coeficiente de correlación ($r$) es positivo."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los supuestos clásicos son: linealidad, normalidad de residuos y homocedasticidad. La dirección de la relación (si $r>0$ o $r<0$) no invalida el modelo; por eso se incluyen las tres primeras opciones."
  },
  {
    "q": "¿Cuáles son los supuestos más críticos al realizar un ANOVA (Análisis de Varianza) en múltiples grupos?",
    "opts": [
      "Los datos deben ser independientes entre grupos.",
      "La variable dependiente debe ser continua y la normalidad debe cumplirse dentro de cada grupo.",
      "Las varianzas poblacionales de todos los grupos comparados deben ser iguales (homocedasticidad).",
      "El tamaño muestral debe ser igual en todos los grupos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para que el ANOVA sea válido, se requieren tres supuestos: independencia entre observaciones, normalidad dentro de cada grupo y homocedasticidad (varianzas iguales). Estos son esenciales para la interpretación del ratio $F$."
  },
  {
    "q": "¿Qué supuestos son cruciales para la validez de los resultados obtenidos en ANOVA de uniones? ¿Cuáles son las implicaciones si estos supuestos se violan?",
    "opts": [
      "Los grupos deben ser estadísticamente independientes entre sí.",
      "Las varianzas poblacionales deben ser iguales (homocedasticidad).",
      "La variable dependiente debe seguir una distribución aproximadamente normal dentro de cada grupo.",
      "El $F$ calculado es siempre el cociente de las medias agrupadas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "ANOVA requiere independencia, normalidad y homocedasticidad (varianzas iguales). Si se viola la normalidad o la homogeneidad, los resultados pueden ser poco fiables. Estos supuestos son fundamentales para que el estadístico $F$ sea válido."
  },
  {
    "q": "¿Cuáles de las siguientes afirmaciones sobre el muestreo aleatorio son correctas en estadística inferencial?",
    "opts": [
      "El muestreo debe garantizar la independencia entre observaciones.",
      "Permite aplicar correctamente los Teoremas del Límite Central (TLC).",
      "Minimiza el riesgo de sesgo muestral al seleccionar unidades aleatorias.",
      "La varianza estimada siempre será igual a la desviación estándar."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El objetivo principal es garantizar que cada elemento tenga igual probabilidad de ser seleccionado (independencia y baja varianza). El TLC solo se aplica al promedio ($\\bar{X}$), no significa que $\\sigma^2$ sea siempre igual a $s^2$. Además, la opción 3 es más precisa que simplemente 'minimiza el riesgo'."
  },
  {
    "q": "¿Cuáles son las principales diferencias conceptuales entre correlación y causalidad en un estudio de asociaciones?",
    "opts": [
      "La correlación solo mide la fuerza lineal entre variables.",
      "Para establecer causalidad se requiere manipulación experimental o diseño cuasi-experimental.",
      "Una relación alta en el coeficiente $r$ no implica que una variable cause a otra.",
      "El valor de $p$ es siempre igual al coeficiente de correlación."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La correlación solo identifica patrones (si variables se mueven juntas), pero no determina por qué. Para causalidad necesitamos un diseño experimental controlado que elimine variables confusoras. El p-valor indica la significancia estadística, no una magnitud de relación."
  },
  {
    "q": "¿Qué principios rigen el uso correcto del estadístico Bootstrap en comparación con los métodos paramétricos tradicionales?",
    "opts": [
      "Permite estimar distribuciones y errores estándar sin asumir una distribución poblacional específica (no paramétrico).",
      "Genera distribuciones muestrales a partir de remuestreo aleatorio de la muestra original.",
      "Es particularmente útil cuando se trabaja con métricas complejas o índices que no tienen fórmulas analíticas directas.",
      "Siempre es computacionalmente más rápido que calcular valores Z o t."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El Bootstrap es una técnica *computacional* de remuestreo. Su poder reside en su naturaleza no paramétrica; reestima la distribución muestral empírica sin necesidad de asumir normalidad ni conocer $\\sigma$. Es potente pero puede ser intensivo computacionalmente."
  },
  {
    "q": "¿Cuáles son los componentes clave necesarios para interpretar adecuadamente un modelo avanzado de regresión lineal ($Y = \\beta_0 + \\beta_1 X + \\epsilon$)?",
    "opts": [
      "El coeficiente intercepto ($\\beta_0$) representa el valor esperado de Y cuando todas las predictoras son cero.",
      "Los coeficientes $\\beta_i$ representan el cambio promedio en $Y$ por cada unidad de aumento en $X_i$, manteniendo otras variables constantes (ceteris paribus).",
      "El término de error ($\\epsilon$) representa la varianza no explicada por el modelo, que debe ser constante y normalmente distribuida.",
      "La significancia estadística solo se evalúa observando si los coeficientes son mayores a 1."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El análisis de regresión depende del entendimiento de los parámetros. $\\beta_0$ es el punto de partida (la intersección). Los $\\beta_i$ miden la pendiente e impacto *manteniendo constantes* las otras variables. El supuesto clave sobre $\\epsilon$ es que debe tener varianza constante (homoscedasticidad)."
  },
  {
    "q": "¿Qué acciones o pasos se deben seguir metodológicamente cuando se está diseñando un test de hipótesis robusto?",
    "opts": [
      "Definir claramente la Hipótesis Nula ($H_0$) y la Alternativa ($H_A$).",
      "Establecer el nivel de significancia ($\\alpha$) antes de recolectar datos.",
      "Verificar los supuestos estadísticos (normalidad, independencia) para seleccionar el test adecuado.",
      "Calcular automáticamente el valor $p$ sin revisar los grados de libertad."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La planificación es crítica: primero definir $H_0$, fijar $\\alpha$, y luego verificar los supuestos. El paso de seleccionar la prueba (z, t, ANOVA) depende de estos supuestos."
  },
  {
    "q": "¿Qué representa una 'dificultad' (Cohen's $d$) en la evaluación de un efecto? ¿Cuáles son sus interpretaciones comunes?",
    "opts": [
      "Es la magnitud estandarizada de la diferencia entre dos grupos ($M_{grupo1} - M_{grupo2}$)/$S_{pooled}$.",
      "Ayuda a determinar si el tamaño del efecto es pequeño ($d=0.2$), medio ($d=0.5$) o grande ($d=0.8$).",
      "Es un valor adimensional que nos permite comparar la fuerza de efectos en diferentes unidades de medida.",
      "Su cálculo requiere solo muestras muy grandes para asegurar su estabilidad."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La $d$ estandariza el efecto (opción 1). Sus valores interpretativos son estándar (pequeño/medio/grande) (opción 2). Su gran utilidad es que permite comparar efectos de diferentes escalas, lo cual no pueden hacer solo los $p$-valores o coeficientes $\\beta$."
  },
  {
    "q": "¿Cuáles son las principales limitaciones o aclaraciones que deben hacerse al interpretar los resultados estadísticos?",
    "opts": [
      "La detección de una correlación fuerte nunca implica relaciones causales.",
      "El valor $p$ es la probabilidad de obtener datos tan extremos si la hipótesis nula fuera cierta.",
      "Un test estadístico rechazando $H_0$ solo nos dice que el parámetro difiere, no la dirección o magnitud del cambio.",
      "Siempre se debe asumir normalidad sin importar el tamaño de la muestra."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Es crucial recordar que $r \neq c$. El valor $p$ es una probabilidad condicional. Rechazar $H_0$ solo afirma la diferencia, no su significado práctico. La normalidad es un supuesto, pero el TCL nos ayuda si $n$ es grande."
  },
  {
    "q": "¿Cuáles son las características o usos apropiados de los métodos estadísticos avanzados?",
    "opts": [
      "El Bootstrap permite estimar distribuciones y intervalos sin asumir una distribución poblacional específica.",
      "Los tests no paramétricos (ej. Mann-Whitney) se usan cuando se violan severamente los supuestos de normalidad o la escala de medición es ordinal.",
      "La potencia de un test es $1 - \\beta$, lo que representa el riesgo de cometer un error tipo II (no rechazar una $H_0$ falsa).",
      "Requiere siempre realizar primero un análisis de regresión para definir las variables."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Bootstrap es robusto a supuestos. Los tests no paramétricos manejan datos más flexibles. La Potencia ($1-\\beta$) es la capacidad del test para detectar el efecto real. El análisis de regresión es una técnica y no un prerrequisito universal."
  },
  {
    "q": "¿Qué implicaciones tienen las diferentes distribuciones clave en la estadística inferencial?",
    "opts": [
      "La distribución Z se utiliza idealmente cuando la desviación estándar ($\\sigma$) poblacional es conocida.",
      "La distribución T debe usarse preferentemente cuando la $\\sigma$ es desconocida y solo se tiene la desviación muestral ($S$).",
      "La distribución Chi-cuadrado ($\\chi^2$) mide la bondad de ajuste entre frecuencias observadas y esperadas.",
      "La distribución $F$ es fundamental para comparar varianzas o evaluar modelos de ANOVA en comparación con múltiples grupos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Z requiere $\\sigma$ conocida. T es para muestras pequeñas con $S$. F compara varianzas (ANOVA). $\\chi^2$ se usa en pruebas de independencia o bondad de ajuste."
  },
  {
    "q": "¿Qué condición es necesaria para aplicar el Teorema Central Límite (TCL)?",
    "opts": [
      "El tamaño de muestra ($n$) debe ser grande.",
      "Los datos deben estar medidos en una escala interválica o razón.",
      "Las variables muestreadas deben ser independientes entre sí.",
      "La población original debe tener una distribución normal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El TCL garantiza que la distribución de las medias muestrales se aproximará a Normal cuando el tamaño de muestra ($n$) es lo suficientemente grande. Esto requiere que los datos sean medidos en escalas apropiadas e independientes."
  },
  {
    "q": "¿Cuál de las siguientes opciones describe correctamente los conceptos estadísticos?",
    "opts": [
      "Parámetro: Característica fija y desconocida de la población ($\\mu, \\sigma^2$).",
      "Estadístico: Cálculo que se deriva de un conjunto de datos muestrales ($\\bar{x}, S^2$).",
      "Distribución Z: Se utiliza cuando se conoce la desviación estándar poblacional ($\\sigma$).",
      "Correlación: Implica necesariamente una relación causal entre las variables."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El parámetro describe a la población. El estadístico es el valor calculado en la muestra. La distribución Z se usa cuando $\\sigma$ es conocida. Es crucial recordar que correlación no implica causalidad."
  },
  {
    "q": "¿Cuál es la relación correcta entre un intervalo de confianza (IC) y una prueba de hipótesis bilateral?",
    "opts": [
      "Si el parámetro poblacional bajo $H_0$ cae fuera del IC, debemos rechazar $H_0$.",
      "Los niveles de significancia ($\\alpha$) y los niveles de confianza ($1-\\alpha$) están inversamente relacionados.",
      "Ambos métodos buscan estimar o verificar si un valor hipotético es plausible para la población.",
      "Un IC estrecho siempre implica una alta potencia estadística."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Existe equivalencia: si el valor nulo $\\mu_0$ está fuera del IC de $95\\%$ (o cualquier nivel $1-\\alpha$), se rechaza $H_0$. Además, ambos son herramientas complementarias para la inferencia."
  },
  {
    "q": "¿Qué supuestos deben considerarse al aplicar una prueba paramétrica como ANOVA?",
    "opts": [
      "Normalidad: Que los residuos o las poblaciones subyacentes sean aproximadamente normales.",
      "Homocedasticidad: Que la varianza en cada grupo sea aproximadamente igual (homogénea).",
      "Independencia: Que las observaciones dentro y entre grupos sean independientes.",
      "Tamaño de muestra muy pequeño ($n < 5$) para garantizar el uso de $t$-test."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "ANOVA (y la mayoría de los tests paramétricos) requieren que las variables sigan una distribución normal, que las varianzas sean iguales entre grupos (homocedasticidad), y que las muestras sean independientes."
  },
  {
    "q": "¿Cuáles son propiedades fundamentales que posee la media aritmética ($\\bar{x}$)?",
    "opts": [
      "Es el valor más utilizado para resumir un conjunto de datos. Utiliza todos los valores observados.",
      "Minimiza la suma de los cuadrados de las desviaciones respecto a los datos (ESQ).",
      "Es extremadamente sensible a la presencia de valores atípicos (outliers), lo que puede distorsionar su interpretación.",
      "Solo es apropiada si los datos siguen una distribución normal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La media utiliza toda la información y, debido a que no está acotada por el mínimo o máximo (como sí lo están mediana/moda), es sensible a valores extremos. Además, matemáticamente minimiza $\\sum (x_i - \\bar{x})^2$."
  },
  {
    "q": "¿Cuál de las siguientes interpretaciones sobre la hipótesis nula ($H_0$) y alternativa ($H_1$) es correcta?",
    "opts": [
      "La $H_0$ siempre representa el estado 'de no efecto' o 'de igualdad'.",
      "El nivel de significancia $\\alpha$ es la probabilidad de cometer un error Tipo I (rechazar $H_0$ cuando es verdadera).",
      "La $H_1$ debe ser siempre una declaración de desigualdad ($\neq, >, <$).",
      "Si aceptamos $H_0$, significa que hemos demostrado que la hipótesis nula es cierta."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$H_0$ se formula típicamente como igualdad (no efecto). $\\alpha$ es el riesgo de error Tipo I. Nunca 'aceptamos' $H_0$; simplemente no hay evidencia suficiente para rechazarla."
  },
  {
    "q": "¿Qué condiciones deben cumplirse para aplicar confiablemente el test $t$ de Student?",
    "opts": [
      "La población debe seguir una distribución aproximadamente normal.",
      "Las muestras deben ser independientes entre sí (no relacionadas).",
      "Las varianzas poblacionales deben ser homocedásticas (iguales, si se comparan múltiples grupos).",
      "Se debe utilizar siempre $\\sigma$ conocida."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tests $t$ requieren normalidad y la independencia de las observaciones. La homocedasticidad (varianzas iguales) es crucial si se compara más de dos grupos con este test. Si $\\sigma$ fuera conocida, usaríamos el test $z$. Las tres primeras opciones son supuestos fundamentales."
  },
  {
    "q": "¿Cuáles son los supuestos críticos que deben cumplirse para interpretar correctamente los resultados de un Análisis de Varianza (ANOVA)?",
    "opts": [
      "Normalidad en cada grupo.",
      "Independencia entre las observaciones y entre grupos.",
      "Homocedasticidad (varianzas iguales) entre los grupos.",
      "La variable dependiente debe ser categórica."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "ANOVA requiere que la población de cada grupo sea Normal, que las muestras sean independientes entre sí, y que las varianzas poblacionales ($\\sigma^2$) sean iguales (homocedasticidad). Si no se cumplen, se deben usar tests como Kruskal-Wallis."
  },
  {
    "q": "¿Cuáles son las características esenciales de los tests no paramétricos como Mann-Whitney U o Kruskal-Wallis?",
    "opts": [
      "No requieren asumir una distribución específica (como Normalidad) para los datos.",
      "Operan sobre rangos o medianas, en lugar de medias muestrales.",
      "Son apropiados cuando se violan severamente los supuestos de homocedasticidad y normalidad.",
      "Pueden reemplazar completamente a un ANOVA si el tamaño muestral es grande."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tests no paramétricos son robustos ante la violación de Normalidad o igualdad de varianzas. Operan sobre rankings (rangos) y medianas para hacer menos supuestos al análisis."
  },
  {
    "q": "¿Cuáles son las propiedades estadísticas fundamentales de una media muestral ($\\bar{X}$) bajo ciertas condiciones?",
    "opts": [
      "Es un estimador insesgado (unbiased) del parámetro poblacional $\\mu$.",
      "Su distribución tiende a la normalidad, según el TCL.",
      "Minimiza la suma de los cuadrados de las diferencias entre los datos y su valor promedio.",
      "Es siempre más robusto que la mediana ante outliers."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La media es un estimador insesgado (su esperanza es $\\mu$), se normaliza por el TCL, y es matemáticamente el punto que minimiza la suma de cuadrados."
  },
  {
    "q": "¿Cuáles son las propiedades fundamentales de la media aritmética ($\\bar{X}$) como medida de tendencia central?",
    "opts": [
      "Toma en cuenta cada observación del conjunto de datos.",
      "Es altamente sensible a valores atípicos (outliers).",
      "Tiene el poder matemático de minimizar la suma de cuadrados de los residuos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La media es un estimador eficiente porque utiliza toda la información disponible. Su principal desventaja teórica es su sensibilidad a outliers. Estadísticamente, es el parámetro que minimiza la función de suma de cuadrados ($\\sum(X_i - \\bar{X})^2$)."
  },
  {
    "q": "¿Qué condiciones deben cumplirse para poder aplicar exitosamente el Teorema del Límite Central (TLC)?",
    "opts": [
      "El tamaño muestral ($n$) debe ser suficientemente grande.",
      "Las observaciones dentro de la muestra deben ser independientes entre sí.",
      "La variable aleatoria subyacente debe tener una media y una varianza finitas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El TLC asegura que la distribución muestral converja a Normalidad bajo condiciones ideales. Los requisitos son: $n$ grande (o la población normal), independencia de observaciones, y existencia de $\\mu$ y $\\sigma^2$."
  },
  {
    "q": "¿En qué situaciones específicas resulta más apropiado utilizar tests estadísticos no paramétricos?",
    "opts": [
      "Cuando el supuesto de normalidad poblacional se viola severamente.",
      "Cuando la variable dependiente es ordinal (rangos) o nominal.",
      "Al comparar medianas en lugar de medias, cuando los datos son altamente sesgados.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tests no paramétricos son herramientas robustas. Son preferibles si no se cumplen supuestos fuertes como la normalidad o cuando las variables solo permiten rangos (ordinal) o categorías (nominal)."
  },
  {
    "q": "¿Qué suposiciones fundamentales deben cumplirse idealmente en el análisis ANOVA (Análisis de Varianza)?",
    "opts": [
      "La variable respuesta debe ser continua.",
      "Los grupos deben tener la misma varianza poblacional (homocedasticidad).",
      "Las muestras para cada grupo deben ser independientes entre sí.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "ANOVA es un test paramétrico. Requiere que los datos sean continuos y, fundamentalmente, que las varianzas de la población de donde se extraen las muestras sean iguales (homocedasticidad). La independencia de grupos es básica para cualquier diseño experimental."
  },
  {
    "q": "¿Cuáles son requisitos esenciales para asumir que una relación lineal mediante regresión ($\\hat{Y} = b_0 + b_1 X$) es válida?",
    "opts": [
      "Los datos deben seguir un patrón lineal.",
      "La variable predictora ($X$) debe medir el mismo tipo de escala (ratio o intervalo) que la respuesta ($Y$).",
      "Los residuos del modelo deben ser normalmente distribuidos y tener varianza constante.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Estos son los supuestos clásicos de Mínimos Cuadrados Ordinarios (OLS): linealidad, escala adecuada para todas las variables y la homocedasticidad/normalidad de residuos. Si se cumplen, el modelo es eficiente."
  },
  {
    "q": "¿Qué ventajas metodológicas se obtienen al emplear técnicas como Bootstrap o resampleo en estadística?",
    "opts": [
      "Permite estimar distribuciones muestrales sin asumir una distribución paramétrica específica.",
      "Es particularmente útil cuando los supuestos tradicionales (como la normalidad) son difíciles de verificar.",
      "Ayuda a obtener intervalos de confianza más robustos bajo condiciones extremas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El poder del Bootstrap radica en que se basa puramente en el remuestreo de datos observados, evitando así depender de supuestos teóricos (como la Normalidad o la distribución $t$), lo cual lo hace extremadamente robusto."
  },
  {
    "q": "¿Cuáles son características o propiedades adecuadas para describir una distribución de datos?",
    "opts": [
      "Media ($\\bar{X}$): Usa todos los valores y minimiza suma cuadrados",
      "Varianza ($S^2$): Mide la dispersión relativa sin unidades cuadradas",
      "Asimetría (Skewness): Indica qué cola se estira más",
      "Coeficiente de correlación: Solo mide linealidad, no magnitud"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La media es sensible a outliers y usa todos los datos. La varianza mide la dispersión. El coeficiente de correlación solo indica la fuerza/dirección lineal (r), mientras que el skewness describe la forma asimétrica."
  },
  {
    "q": "¿Qué supuestos deben cumplirse para aplicar correctamente un análisis de regresión lineal simple?",
    "opts": [
      "Linealidad: La relación entre X y Y debe ser recta.",
      "Homocedasticidad: La varianza de los errores ($\\epsilon$) debe ser constante en todo el rango de X.",
      "Normalidad: Los residuos (errores) deben seguir una distribución normal.",
      "Independencia: Las observaciones (y sus errores) no deben depender entre sí."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los supuestos clave son la linealidad (relación recta), la homocedasticidad (varianza constante de los residuos) y la normalidad de los residuos. La independencia es fundamental para cualquier test paramétrico."
  },
  {
    "q": "¿Qué métricas se utilizan en ANOVA (Analysis of Variance) para evaluar diferencias entre grupos?",
    "opts": [
      "$F = CM_{entre} / CM_{dentro}$: Ratio que compara varianza intergrupal con varianza intragrupal.",
      "$R^2$: Mide la proporción de varianza total explicada por el modelo.",
      "Test post-hoc: Son necesarios después de un ANOVA significativo para identificar grupos específicos diferentes.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El ratio $F$ es la base del test. $R^2$ (coeficiente de determinación) indica qué porcentaje de varianza se explica por las variables predictoras en regresión o ANOVA. Los tests post-hoc son esenciales para desglosar el ANOVA."
  },
  {
    "q": "¿Qué limitaciones tienen los tests estadísticos no paramétricos (ej., Mann-Whitney U)?",
    "opts": [
      "No requieren asumir normalidad en las poblaciones.",
      "Trabajan con rangos o medianas, haciendo menos uso de la información de magnitud exacta.",
      "Son alternativas robustas cuando se viola el supuesto de homocedasticidad.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tests no paramétricos son valiosos porque eliminan la necesidad de asumir normalidad. Sin embargo, al trabajar con rangos o medianas, pierden poder estadístico y precisión en comparación con sus contrapartes paramétricas cuando los supuestos sí se cumplen."
  },
  {
    "q": "¿Qué se debe considerar al determinar el tamaño muestral ($n$) en un contraste de hipótesis?",
    "opts": [
      "La potencia deseada $(1-\\beta)$ y $\\alpha$ (nivel de significancia) son parámetros clave.",
      "El poder estadístico aumenta linealmente con $n$.",
      "Un $n$ pequeño puede llevar a errores Tipo II (no detectar un efecto real).",
      "Los supuestos poblacionales deben ser verificados antes de calcular el tamaño muestral."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Determinar $n$ requiere definir la potencia deseada y $\\alpha$. Un aumento en $n$ aumenta la precisión (y potencialmente el poder). Es fundamental verificar los supuestos para saber qué test usar, ya que esto afecta directamente al cálculo de n."
  },
  {
    "q": "¿Cuáles son condiciones necesarias que se deben verificar antes de aplicar un test paramétrico (como el t-test o ANOVA)?",
    "opts": [
      "Independencia de las observaciones",
      "Normalidad en la población de interés",
      "Homocedasticidad de las varianzas si se comparan múltiples grupos",
      "Que la muestra sea siempre muy grande ($n>30$)"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tests paramétricos requieren que los datos sean independientes y que la variable siga una distribución normal (o al menos que el tamaño muestral sea suficiente para aplicar el TCL). La homocedasticidad es crucial en ANOVA o t-tests de varianzas desiguales."
  },
  {
    "q": "¿Qué conceptos deben ser manejados con cuidado al interpretar las relaciones estadísticas?",
    "opts": [
      "Establecer causalidad solo mediante diseños experimentales controlados",
      "Recordar que la correlación ($r$) es una medida de asociación lineal, no de causa-efecto",
      "Utilizar las curvas de dispersión para visualizar posibles relaciones",
      "Asumir siempre que el coeficiente $r$ indica la magnitud del efecto clínico esperado"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El error más común es confundir asociación con causalidad. $r$ solo mide linealidad y no debe interpretarse como un tamaño de efecto en sí mismo sin un contexto teórico o clínico."
  },
  {
    "q": "¿Cuáles son los principales roles que cumplen las distribuciones Z, T, $\\chi^2$ y F en el análisis estadístico?",
    "opts": [
      "Z se usa cuando la desviación estándar poblacional ($\\sigma$) es conocida",
      "T se utiliza para estimar parámetros con muestras pequeñas ($n<30$) y $\\sigma$ desconocida",
      "F compara varianzas o medias en modelos ANOVA/Regresión",
      "$\\chi^2$ evalúa la bondad de ajuste o independencia entre variables"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cada distribución tiene un rol específico: Z (población conocida), T (muestras pequeñas, $\\sigma$ desconocida), $\\chi^2$ (ajuste), F (comparar varianzas o medias en modelos lineales)."
  },
  {
    "q": "¿Qué pasos metodológicos garantizan la validez y rigurosidad al realizar un análisis inferencial completo?",
    "opts": [
      "Verificar los supuestos estadísticos (Normalidad, Independencia, etc.)",
      "Elegir el nivel de significancia ($\\alpha$) antes de analizar datos",
      "Interpretar el tamaño del efecto detectado en lugar de solo el p-valor",
      "Utilizar pruebas de hipótesis para guiar la selección del método"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un análisis estadístico riguroso requiere no solo los supuestos (paso 1), sino también fijar $\\alpha$ (evitar 'data dredging') y centrarse siempre en la magnitud del efecto (tamaño) para tomar decisiones clínicas/prácticas."
  },
  {
    "q": "¿Cuáles son los elementos que deben estar presentes en la interpretación integral de un modelo estadístico?",
    "opts": [
      "La identificación del tamaño del efecto práctico (effect size)",
      "El estado de las hipótesis nulas ($H_0$ o $H_a$) a nivel $\\alpha$",
      "La comparación entre el valor estimado y el rango esperado (IC)",
      "Solo reportar valores p menores a 0.05"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Una interpretación completa va más allá del p-valor: hay que decir si existe un efecto (H0), cuán grande es ese efecto (tamaño) y qué tan seguro estamos de él (IC)."
  },
  {
    "q": "¿Qué tipos de datos o escenarios estadísticos justifican el uso de la transformación logarítmica o la modelización no lineal?",
    "opts": [
      "Cuando se violan severamente los supuestos de normalidad en los residuos",
      "Cuando existe una relación curvilínea o asimétrica entre las variables",
      "Para estabilizar la varianza y acercarla a su media (homocedasticidad)",
      "Si el modelo cuadrático es teóricamente imposible"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las transformaciones se usan para hacer que los datos se ajusten mejor a las pretensiones paramétricas o lineales: mejorar la normalidad de residuos, linealizar relaciones no lineales y estabilizar varianzas."
  },
  {
    "q": "¿Cuál debe ser el supuesto principal al aplicar una prueba t de Student en comparación con una prueba z?",
    "opts": [
      "La varianza poblacional ($\\sigma^2$) debe ser desconocida.",
      "El tamaño muestral ($n$) debe ser pequeño (usualmente $n < 30$).",
      "Los datos deben provenir de una población que siga una distribución aproximadamente normal.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La prueba t se utiliza específicamente cuando la varianza poblacional ($\\sigma^2$) es desconocida y debemos estimarla con la muestra. Aunque tradicionalmente se asocia a muestras pequeñas (n<30), el supuesto más crítico sigue siendo la normalidad de los datos o que $n$ sea suficientemente grande para aplicar TCL."
  },
  {
    "q": "¿Qué elementos son correctos al interpretar el coeficiente de determinación ($R^2$) en un modelo de regresión?",
    "opts": [
      "Indica la proporción de varianza en la variable dependiente explicada por el modelo.",
      "$R^2 = 0$ significa que no hay relación lineal entre las variables.",
      "$R^2 = 1$ implica una perfección predictiva absoluta.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El $R^2$ mide qué porcentaje de la variación en Y es explicado por X. Si $R^2=0$, significa que el modelo no explica nada (la línea de mejor ajuste está siempre sobre la horizontal). $R^2=1$ implica un ajuste perfecto."
  },
  {
    "q": "¿Qué afirmaciones son válidas al comparar correlación y causalidad?",
    "opts": [
      "La correlación alta simplemente indica una asociación lineal fuerte.",
      "No asumir que la correlación implica causalidad es una regla fundamental de estadística.",
      "El diseño experimental (manipulación) es el único método para establecer causalidad.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Correlación y causalidad son conceptos distintos. Una relación lineal fuerte solo indica asociación, no dirección o causa. Para probar causalidad se requiere un diseño controlado (experimental)."
  },
  {
    "q": "¿Cuáles de las siguientes afirmaciones sobre la relación entre Intervalos de Confianza (IC) y Contrastes de Hipótesis son correctas?",
    "opts": [
      "Existe una equivalencia directa: no rechazar $H_0$ $\\iff$ el valor nulo cae en el IC.",
      "La probabilidad de que un test sea incorrecto depende del nivel $\\alpha$.",
      "El ancho del IC es inversamente proporcional al tamaño muestral ($n$) y directamente proporcional a la desviación estándar ($\\sigma$).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Son equivalentes: no rechazar $H_0$ significa que el valor nulo está contenido en el intervalo. Tanto $\\alpha$ como $n$ afectan directamente el ancho del IC."
  },
  {
    "q": "¿Qué elementos describen correctamente la interpretación de un coeficiente de correlación ($r$) o la regresión lineal?",
    "opts": [
      "Miden la fuerza y dirección de la relación entre dos variables.",
      "Asumen que todas las variables deben estar en la misma escala métrica.",
      "Un valor cercano a $r=1$ indica una fuerte relación positiva.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La correlación mide la asociación lineal. Para regresión/correlación, es crucial que ambas variables estén correctamente escaladas y se interprete el sentido de la pendiente ($\\beta$). El valor $r$ indica fuerza/dirección."
  },
  {
    "q": "¿Qué conceptos son fundamentales al realizar análisis de Varianza (ANOVA)?",
    "opts": [
      "Calcular la razón $F = CM_{entre}/CM_{dentro}$.",
      "Determinar si las varianzas entre grupos son significativamente diferentes.",
      "Interpretar el valor $p$ para determinar si existen diferencias significativas entre medias.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "ANOVA compara múltiples medias. La razón $F$ compara la variación explicada (entre) con la variación residual (dentro). El objetivo es saber si las diferencias son estadísticamente significativas."
  },
  {
    "q": "¿Cuáles de los siguientes métodos se consideran apropiados cuando el supuesto de normalidad o homocedasticidad está gravemente violado?",
    "opts": [
      "Pruebas no paramétricas (ej. Mann-Whitney U).",
      "Métodos basados en la distribución $t$ con muestras grandes.",
      "El uso del método Bootstrap para estimar IC y realizar pruebas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuando los supuestos fallan, se prefieren métodos robustos. Los tests no paramétricos son alternativas directas (ej. Mann-Whitney en lugar de $t$). El Bootstrap es computacionalmente robusto y no asume distribución."
  },
  {
    "q": "¿Qué afirmaciones sobre el cálculo del Intervalo de Confianza para la Media ($\\mu$) son correctas?",
    "opts": [
      "Cuando $\\sigma$ se conoce, se usa la distribución Z.",
      "Si $n$ es pequeño ($n<30$) y $\\sigma$ es desconocida, se debe usar la distribución T de Student.",
      "Cuanto mayor sea el nivel de confianza (ej., 99% vs. 95%), más ancho será el intervalo.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Depende si $\\sigma$ es conocida o no. $Z$ se usa con $\\sigma$. $T$ se usa con $s$ (desconocida). Un nivel de confianza mayor requiere un valor crítico más extremo, haciendo el intervalo más amplio."
  },
  {
    "q": "¿Cuáles son las implicaciones adecuadas al interpretar el coeficiente de determinación ($R^2$) en regresión?",
    "opts": [
      "Mide la proporción de varianza de la variable dependiente que es explicada por el modelo.",
      "Su valor está siempre acotado entre 0 y 1, si se usa correctamente.",
      "Un $R^2$ alto implica necesariamente una fuerte causalidad.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$R^2$ explica la varianza. Está acotado en $[0, 1]$. *Importante:* Nunca prueba causalidad; solo asociación lineal."
  },
  {
    "q": "¿Qué diferencias son cruciales al pasar de un Parámetro a un Estadístico?",
    "opts": [
      "El Parámetro es universal y fijo para la población completa.",
      "El Estadístico se calcula como una estimación a partir del subconjunto muestral disponible.",
      "La distribución muestral describe el comportamiento teórico del estadístico si repitiéramos las muestras infinitas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Se define la jerarquía: Parámetro (población) $\\rightarrow$ Estadístico (muestra) $\\rightarrow$ Distribución Muestral (teórica)."
  },
  {
    "q": "¿Qué conceptos son necesarios para evaluar la potencia estadística de una prueba?",
    "opts": [
      "El nivel de significancia deseado ($\\alpha$).",
      "El tamaño del efecto esperado (ej., $d$ de Cohen).",
      "El tamaño muestral ($n$) requerido.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La potencia es $1-\\beta$. Para calcularla o evaluarla se necesitan estos tres elementos: $\\alpha$, el efecto y el $n$. Si cualquiera falla, la potencia puede ser baja."
  },
  {
    "q": "¿Cuál es el rol principal de las distribuciones Chi-cuadrado ($\\chi^2$) y F?",
    "opts": [
      "Evaluar la bondad de ajuste (Goodness of Fit) o la razón entre varianzas.",
      "Son fundamentales para calcular los intervalos de confianza en pruebas $\\chi^2$.",
      "Se utilizan como bases teóricas para el cálculo de ANOVA.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$F$ se usa en ANOVA/Comparación de varianzas. $\\chi^2$ se usa en independencia y bondad de ajuste (fit). Ambos son cruciales pilares de la inferencia multivariada."
  },
  {
    "q": "¿Cuáles características distinguen a los tests no paramétricos?",
    "opts": [
      "No requieren que los datos sigan una distribución normal.",
      "Funcionan bien con variables ordinales o nominales.",
      "Se basan en medidas de tendencia central (medianas) y rangos, en lugar de medias.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Su principal fortaleza es la robustez frente a incumplimiento de supuestos paramétricos. Operan sobre rankings/rangos, no directamente sobre las magnitudes."
  },
  {
    "q": "¿Qué pasos son esenciales para un análisis estadístico integral?",
    "opts": [
      "Definir claramente los parámetros y las hipótesis nula ($H_0$) y alternativa ($H_A$).",
      "Seleccionar el método adecuado (paramétrico vs. no paramétrico) basándose en supuestos de datos.",
      "Interpretar los resultados siempre en el contexto del problema original, evitando causalidad.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El proceso estadístico exige rigor: 1. Hipótesis $\\rightarrow$ 2. Método (evaluando supuestos) $\\rightarrow$ 3. Conclusión contextualizada."
  },
  {
    "q": "¿Qué implica conceptualmente la técnica de Bootstrap?",
    "opts": [
      "Crear distribuciones muestrales empíricas mediante remuestreo con reemplazo.",
      "Permitir estimaciones y pruebas sin asumir una distribución poblacional específica (distribución libre).",
      "Reducir la dependencia de los supuestos teóricos ($Z, T$, etc.).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El Bootstrap es un método computacional potente que simula la distribución muestral usando solo los datos observados. Esto anula muchos requisitos distributivos."
  },
  {
    "q": "¿Qué medidas estadísticas son apropiadas para describir una distribución de variables cuantitativas?",
    "opts": [
      "Media ($\\bar{x}$)",
      "Varianza ($s^2$) o Desviación estándar ($s$)",
      "Asimetría (Skewness) y Curtosis",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para caracterizar completamente una distribución se necesita saber dónde está el centro (Media), su dispersión ($s$), y su forma (Sesgo/Curtosis)."
  },
  {
    "q": "¿Qué afirmaciones son correctas respecto a la relación entre Intervalos de Confianza (IC) y pruebas de hipótesis bilaterales?",
    "opts": [
      "Un IC que incluye el valor nulo ($\\mu_0$) sugiere no rechazar $H_0$ al nivel $\\alpha$.",
      "Si se rechaza $H_0: \\mu = \\mu_0$, es equivalente a que el intervalo de confianza construido para $\\mu$ no contenga $\\mu_0$.",
      "La magnitud del nivel de significancia ($\\alpha$) determina la precisión del IC, pero no su valor central.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Son equivalentes: si el intervalo contiene $\\mu_0$, no hay evidencia suficiente para rechazar $H_0$. La elección de $\\alpha$ (el nivel de significancia) determina directamente la amplitud del IC (mayor precisión = menor $\\alpha$)."
  },
  {
    "q": "¿Cuáles son las condiciones o supuestos críticos que deben cumplirse antes de aplicar una prueba paramétrica como el ANOVA?",
    "opts": [
      "Los grupos deben tener medias similares y varianzas iguales (homocedasticidad).",
      "Las variables medidas deben seguir aproximadamente una distribución normal dentro de cada grupo.",
      "La variable dependiente debe ser continua y la independencia entre observaciones debe mantenerse.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El ANOVA es sensible a estos supuestos: Normalidad (datos normales en cada grupo), Independencia (observaciones independientes) y Homocedasticidad (varianzas iguales)."
  }
];
