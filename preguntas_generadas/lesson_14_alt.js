// Leccion 14 — 180 preguntas alternativas
// Generadas con gemma4 el 2026-07-04 13:39
// Distribucion: 60/60/60 (1c/2c/3c)
window.LESSON_QUESTIONS_ALT = window.LESSON_QUESTIONS_ALT || {};
window.LESSON_QUESTIONS_ALT[14] = [
  {
    "q": "Según la teoría estadística, ¿qué representa fundamentalmente una variable que sigue una distribución Chi-cuadrado $\\chi^2(\nu)$?",
    "opts": [
      "El cociente de dos varianzas poblacionales desconocidas.",
      "$...$ La suma de cuadrados de variables Normales estándar independientes.",
      "La razón entre desviaciones tipo en muestras distintas.",
      "Un estadístico que solo se utiliza para datos categóricos."
    ],
    "c": [
      1
    ],
    "exp": "Por definición, la distribución Chi-cuadrado es una estadística que resulta de sumar los cuadrados de varias variables aleatorias normales estandarizadas e independientes. Esto es crucial en pruebas de bondad de ajuste y análisis de desviación."
  },
  {
    "q": "¿Qué característica define a la distribución t de Student $t(\nu)$?",
    "opts": [
      "Es simétrica alrededor de cero.",
      "Sus colas son más pesadas que las de una Normal estándar, especialmente para $\nu$ pequeños.",
      "Su forma depende únicamente del tamaño muestral ($n$).",
      "Solo se utiliza cuando el número de variables excede a las observaciones."
    ],
    "c": [
      0
    ],
    "exp": "La distribución t es simétrica y su principal rasgo distintivo es que tiene colas más pesadas (más gordas) que la Normal estándar. Esto refleja la mayor incertidumbre al estimar la desviación estándar poblacional ($\\sigma$) con un tamaño muestral pequeño."
  },
  {
    "q": "¿En qué tipo de análisis o contexto se utiliza primordialmente la distribución F de Fisher $F(\nu_1, \nu_2)$?",
    "opts": [
      "Comparación de dos varianzas poblacionales.",
      "Análisis de Varianza (ANOVA).",
      "Modelado de variables discretas categóricas.",
      "Estimación de parámetros mediante regresión lineal simple."
    ],
    "c": [
      0
    ],
    "exp": "La distribución F es el estadístico clave en ANOVA y cuando se comparan cocientes de varianzas. Indica si la variabilidad entre grupos es significativamente diferente de lo esperado por el azar."
  },
  {
    "q": "¿Cuál de los siguientes enunciados sobre el uso del $\\chi^2$ para probar la normalidad de datos es correcto?",
    "opts": [
      "Un valor alto de $\\chi^2$ indica que los datos se ajustan bien a una distribución Normal.",
      "El grado de libertad ($\nu$) está directamente relacionado con $n-1$.",
      "Se usa como prueba de bondad de ajuste para dicotomías.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Al realizar pruebas de normalidad (como Kolmogorov-Smirnov o Chi-cuadrado aplicado a frecuencias), un valor alto implica que la distribución observada se desvía significativamente del modelo teórico, sugiriendo falta de normalidad."
  },
  {
    "q": "¿Cuál es el rango de valores posibles para una variable aleatoria $\\chi^2(\nu)$?",
    "opts": [
      "Soporte en $[0, \\infty)$.",
      "Es asimétrica positiva.",
      "Su valor esperado (media) es $\nu$.",
      "Se calcula como la suma de cuadrados estandarizados."
    ],
    "c": [
      0
    ],
    "exp": "El soporte (rango posible) de cualquier variable Chi-cuadrado siempre comienza en cero y va hacia infinito, ya que se trata de una suma de cuadrados."
  },
  {
    "q": "¿Qué concepto matemático describe mejor el estadístico $(n-1)S^2 / \\sigma^2$ bajo la condición de normalidad poblacional?",
    "opts": [
      "Una variable aleatoria que sigue una distribución Chi-cuadrado con $\nu = n-1$.",
      "Un valor Z estandarizado. No depende del tamaño muestral.",
      "$...$ Es una razón que tiende a $Z^2$ cuando $n \\to \\infty$.",
      "Es el estadístico utilizado en la regresión de mínimos cuadrados ordinarios (MCO)."
    ],
    "c": [
      0
    ],
    "exp": "Este es un resultado fundamental: bajo normalidad, estandarizar la varianza muestral y multiplicar por $(n-1)$ produce exactamente una variable $\\chi^2(n-1)$. Esto es clave para pruebas de hipótesis sobre varianzas."
  },
  {
    "q": "¿Cuál es el límite asintótico de la distribución t de Student?",
    "opts": [
      "La distribución Normal estándar (Z) cuando los grados de libertad ($\nu$) tienden a infinito.",
      "Se vuelve idéntica a la distribución Chi-cuadrado, si $\nu$ es grande.",
      "Es siempre equivalente a la distribución F con $F(1, 1)$.",
      "Solo se aproxima a Z si el tamaño muestral es mayor que 50."
    ],
    "c": [
      0
    ],
    "exp": "Cuando los grados de libertad aumentan indefinidamente ($\nu \\to \\infty$), el factor corrector por tener $\\sigma$ desconocida desaparece, y la distribución t converge exactamente a la Normal estándar."
  },
  {
    "q": "¿Bajo qué condición se puede aproximar la distribución t de Student a la distribución Normal estándar $N(0, 1)$?",
    "opts": [
      "Cuando el tamaño muestral es muy pequeño (n < 15)",
      "Cuanto mayor sea los grados de libertad $\nu$ ($\nu \\to \\infty$)",
      "Cuando la varianza poblacional es cero",
      "Solo si la muestra sigue una distribución uniforme"
    ],
    "c": [
      0
    ],
    "exp": "La aproximación ocurre cuando el número de grados de libertad ($\nu$) tiende al infinito. En este límite, la cola más pesada de la t se vuelve indistinguible de la Normal."
  },
  {
    "q": "¿Qué caracteriza primariamente a la distribución Chi-cuadrado $\\chi^2(\nu)$?",
    "opts": [
      "Es simétrica alrededor de su media",
      "Su soporte es $[0, \\infty)$ (solo valores no negativos)",
      "Está definida como la suma de cuadrados de variables normales estándar independientes",
      "Siempre tiene una desviación estándar igual a su raíz cuadrática"
    ],
    "c": [
      0
    ],
    "exp": "La definición fundamental del Chi-cuadrado es que es la suma de cuadrados de varias variables Normales estándar y *independientes*. Además, su soporte siempre está en $[0, \\infty)$."
  },
  {
    "q": "¿Cuál distribución se utiliza específicamente para evaluar si las varianzas poblacionales de dos grupos son iguales?",
    "opts": [
      "t de Student",
      "Chi-cuadrado $\\chi^2$",
      "F de Fisher $F(\nu_1, \nu_2)$",
      "Z estándar"
    ],
    "c": [
      0
    ],
    "exp": "La razón de dos varianzas poblacionales (normalizadas) sigue una distribución F de Fisher. Esto se usa en el contexto de ANOVA y comparación de varianzas."
  },
  {
    "q": "¿Qué representan los grados de libertad ($\nu$) en la estadística inferencial?",
    "opts": [
      "El tamaño total de la población",
      "El número mínimo de parámetros a estimar",
      "El número de observaciones libres o independientes disponibles para calcular una estadística",
      "La varianza poblacional asumida"
    ],
    "c": [
      0
    ],
    "exp": "Los grados de libertad (gl) representan el número de datos que quedan libres después de haber calculado un estadístico. Por ejemplo, en una muestra $n$, los gl son generalmente $n-1$."
  },
  {
    "q": "¿Qué tipo de asimetría presenta la distribución Chi-cuadrado $\\chi^2(\nu)$?",
    "opts": [
      "Simétrica y mesocúrtica",
      "Asimétrica positiva (cola larga a la derecha)",
      "Normalmente simétrica en todo su rango",
      "Distribución exponencial pura"
    ],
    "c": [
      0
    ],
    "exp": "La distribución Chi-cuadrado es intrínsecamente asimétrica. Cuando $\nu$ es pequeño, la asimetría es muy marcada; se desplaza hacia la derecha (positiva)."
  },
  {
    "q": "¿Cuál de estas afirmaciones describe correctamente el papel o las propiedades del estadístico t?",
    "opts": [
      "Se utiliza para probar si dos proporciones son iguales",
      "Es adecuado cuando la varianza poblacional desconocida y los $n$ son pequeños",
      "Requiere que los datos sigan una distribución exponencial",
      "Su forma es siempre simétrica, independientemente de $\nu$"
    ],
    "c": [
      0
    ],
    "exp": "La t de Student está diseñada para estimar o comparar medias cuando se desconoce la varianza poblacional ($\\sigma^2$) y el tamaño muestral ($n$) es reducido. Su uso depende directamente del número de grados de libertad $\nu$."
  },
  {
    "q": "¿Cuál de los siguientes escenarios requiere necesariamente el uso de la distribución F?",
    "opts": [
      "Evaluar si las varianzas poblacionales son iguales o comparar múltiples grupos (ANOVA)",
      "Comparar dos medias con muestras grandes",
      "Realizar análisis de regresión lineal simple",
      "Calcular probabilidades exactas para una sola media"
    ],
    "c": [
      0
    ],
    "exp": "La distribución F es la herramienta estadística designada para evaluar relaciones entre varianzas. El ANOVA, que compara múltiples medias, se basa en el cociente de varianzas y, por lo tanto, usa $F$."
  },
  {
    "q": "¿Cuál es la relación conceptual fundamental entre la t de Student y la distribución Normal estándar?",
    "opts": [
      "La t está acotada a un rango finito, mientras N no lo está",
      "La t se deriva al considerar el cociente estandarizado en muestras pequeñas",
      "Cuando los grados de libertad aumentan, $t$ converge a $N$",
      "Ambas son distribuciones puramente exponenciales"
    ],
    "c": [
      0
    ],
    "exp": "La distribución t es esencialmente una generalización de la Normal. Su convergencia hacia $N(0, 1)$ cuando $\nu \\to \\infty$ es su propiedad más importante."
  },
  {
    "q": "¿Qué implica el hecho de que se use $t(\nu)$ en lugar de $N(0, 1)$ para una prueba de hipótesis?",
    "opts": [
      "Que la varianza poblacional desconocida y solo puede estimarse con muestreo",
      "Que asumimos normalidad, pero los datos son heterocedásticos",
      "Que el tamaño muestral es necesariamente grande ($n>30$)",
      "Que siempre se debe usar en lugar del estadístico Z"
    ],
    "c": [
      0
    ],
    "exp": "El uso de la t implica que no conocemos la varianza poblacional $\\sigma^2$, y por lo tanto, debemos estimarla a partir de la muestra. Esto es crucial cuando $n$ es pequeño."
  },
  {
    "q": "¿Qué significa interpretar un valor p bajo (p < 0.05) en el contexto del análisis Chi-cuadrado?",
    "opts": [
      "Que hay evidencia suficiente para rechazar la hipótesis nula $H_0$",
      "Que se debe aceptar la hipótesis nula ($H_0$) sin reservas",
      "Que las variables no están relacionadas entre sí",
      "Que la distribución de los datos es uniforme"
    ],
    "c": [
      0
    ],
    "exp": "Un valor p bajo indica que el resultado observado es muy improbable si la hipótesis nula fuera cierta. Por lo tanto, se rechaza $H_0$ y se concluye que hay una relación o diferencia significativa."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre los requisitos del análisis de varianza (ANOVA) es correcta?",
    "opts": [
      "Las varianzas entre grupos deben ser aproximadamente iguales (homogeneidad)",
      "Los grupos deben ser estadísticamente independientes",
      "La variable dependiente debe seguir una distribución Normal en cada grupo",
      "Todos estos requisitos son fundamentales"
    ],
    "c": [
      0
    ],
    "exp": "El ANOVA requiere tres supuestos clave: 1) Independencia de los datos, 2) Normalidad residual y 3) Homogeneidad de varianzas ($\\sigma^2$ constante en todos los grupos)."
  },
  {
    "q": "¿Qué tipo de información permite la distribución F sobre el cociente?",
    "opts": [
      "La razón de dos estimaciones de varianza poblacional o proporciones de varianzas",
      "La relación entre las medias poblacionales",
      "El tamaño del efecto (effect size)",
      "Si la población sigue una distribución log-normal"
    ],
    "c": [
      0
    ],
    "exp": "Literalmente, $F$ es un cociente. Cuando se compara $\\sigma_1^2 / \\sigma_2^2$, esta razón obedece a $F$. Esto lo hace indispensable para el ANOVA."
  },
  {
    "q": "¿Qué tipo de datos son más apropiados para aplicar la distribución t?",
    "opts": [
      "Datos continuos y medibles",
      "Datos categóricos (ej: sí/no)",
      "Datos ordinales sin intervalo definido",
      "Solo datos que siguen una distribución binomial"
    ],
    "c": [
      0
    ],
    "exp": "Tanto la t como la Normal se aplican a variables cuantitativas o continuas. Requieren medidas de variabilidad y media, por lo que son más adecuadas para intervalos (ratios/intervalos)."
  },
  {
    "q": "¿Qué tipo de inferencia es característica del análisis basado en estas tres distribuciones?",
    "opts": [
      "Pruebas paramétricas con suposiciones de normalidad o relaciones lineales",
      "Inferencia categórica simple",
      "Modelado probabilístico discreto (ej. Poisson)",
      "Análisis descriptivo sin pruebas de hipótesis"
    ],
    "c": [
      0
    ],
    "exp": "Dado que $t$, $\\chi^2$ y $F$ se basan en la Normalidad, sus aplicaciones son llamadas pruebas *paramétricas*, ya que requieren supuestos sobre los parámetros poblacionales (como la normalidad o igualdad de varianzas)."
  },
  {
    "q": "La distribución Chi-cuadrado $\\chi^2(\nu)$ se obtiene teóricamente como:",
    "opts": [
      "Suma de variables normales independientes",
      "Cociente de dos muestras Normales",
      "Suma de cuadrados de $z$-scores estandarizados y no correlacionados",
      "Distribución que solo aplica a tamaños muestrales grandes"
    ],
    "c": [
      0
    ],
    "exp": "El $\\chi^2$ es la suma de cuadrados de variables aleatorias normales estándar independientes. Si se toman $k$ muestras ($X_1, ..., X_k$) de una Normal $\\mathcal{N}(\\mu, \\sigma^2)$, y se estandarizan, la suma de los cuadrados de estos residuos sigue la distribución $\\chi^2(k)$. Esta propiedad es fundamental para las pruebas de bondad de ajuste."
  },
  {
    "q": "¿Cuál es el dominio de soporte (rango) de la distribución Chi-cuadrado $\\chi^2(\nu)$?",
    "opts": [
      "$[0, \\infty)$",
      "$(-\\infty, \\infty)$",
      "$(0, 1)$",
      "$(0, \\infty)$"
    ],
    "c": [
      0
    ],
    "exp": "La distribución $\\chi^2$ solo puede tomar valores no negativos. Su soporte es $[0, \\infty)$. Es asimétrica positiva y nunca es negativa."
  },
  {
    "q": "En comparación con la distribución Normal estándar $\\mathcal{N}(0, 1)$, ¿cuál es una característica definitoria de la distribución t de Student $t(\nu)$?",
    "opts": [
      "Es simétrica respecto a cero",
      "Tiene colas más pesadas (leptocúrtica)",
      "Su varianza depende únicamente del tamaño muestral $\nu$",
      "Converge rápidamente a $\\mathcal{N}(0, 1)$ incluso con muestras pequeñas"
    ],
    "c": [
      0
    ],
    "exp": "La distribución t es conocida por tener colas más pesadas que la Normal. Esto se debe a que el estimador de la varianza poblacional ($\\sigma^2$) está reemplazado por un estimador muestral ($S^2$), lo cual introduce mayor incertidumbre, especialmente con pocos grados de libertad $\nu$."
  },
  {
    "q": "Si queremos comparar las varianzas de dos poblaciones Gaussianas, ¿qué distribución se considera apropiada para la estadística teste?",
    "opts": [
      "F de Fisher",
      "t de Student",
      "Chi-cuadrado ($\\chi^2$)",
      "Distribución Exponencial"
    ],
    "c": [
      0
    ],
    "exp": "La proporción de varianzas (cociente) bajo el supuesto de normalidad sigue una distribución F de Fisher. Esta es la base para las pruebas de igualdad de varianzas y ANOVA."
  },
  {
    "q": "¿Qué sucede con la distribución t de Student $t(\nu)$ a medida que los grados de libertad $\nu$ tienden al infinito ($\nu \\to \\infty$)?",
    "opts": [
      "Converge hacia una distribución Normal estándar $\\mathcal{N}(0, 1)$",
      "Se vuelve exponencialmente dispersa",
      "Pierde su propiedad de simetría y se vuelve sesgada",
      "Su media tiende a cero"
    ],
    "c": [
      0
    ],
    "exp": "Esta es la relación límite clave. Cuanto mayor es $\nu$, el estimador $S^2$ se comporta mejor como $\\sigma^2$, y por lo tanto, la distribución t converge asintóticamente hacia la distribución Normal estándar."
  },
  {
    "q": "¿Cuál es la definición fundamental de la distribución Chi-cuadrado, $\\chi^2(\nu)$?",
    "opts": [
      "Es el cociente entre dos varianzas.",
      "Suma de cuadrados de variables aleatorias Normales estándar independientes.",
      "Distribución usada solo para proporciones poblacionales.",
      "Representa la desviación estándar muestral."
    ],
    "c": [
      1
    ],
    "exp": "La $\\chi^2$ es definida formalmente como la suma de los cuadrados ($Z_i^2$) de un número $\nu$ de variables aleatorias independientes que siguen una distribución Normal estándar $N(0,1)$."
  },
  {
    "q": "¿Qué ocurre con la distribución Chi-cuadrado, $\\chi^2(\nu)$, a medida que sus grados de libertad ($\nu$) aumentan?",
    "opts": [
      "Teme tiende a seguir una distribución Normal $N(\nu, 2\nu)$.",
      "Se vuelve perfectamente simétrica alrededor del valor $\nu$.",
      "Su soporte se restringe al intervalo $[0, \\infty)$ en todo momento.",
      "Disminuye su media de forma lineal con $\nu$."
    ],
    "c": [
      0
    ],
    "exp": "A medida que $\nu \\to \\infty$, la distribución $\\chi^2(\nu)$ converge a una Normalización Aproximada $N(\\mu=\nu, \\sigma^2=2\nu)$."
  },
  {
    "q": "¿Cuál es la condición principal para aplicar correctamente la distribución t de Student?",
    "opts": [
      "Se requiere que la muestra sea pequeña ($n < 30$) y se desconozca la desviación poblacional ($\\sigma$).",
      "La población debe seguir una distribución de Poisson.",
      "Solo aplica cuando las variables son categóricas.",
      "El tamaño muestral debe ser infinito."
    ],
    "c": [
      0
    ],
    "exp": "La t-Student es robusta para muestras pequeñas donde debemos inferir parámetros (como $\\mu$ o $\\sigma$) y no conocemos el parámetro poblacional $\\sigma$."
  },
  {
    "q": "¿En qué tipo de análisis estadístico se utiliza predominantemente la distribución F de Fisher?",
    "opts": [
      "ANOVA (Analysis of Variance) o comparaciones de varianzas entre grupos.",
      "Pruebas de hipótesis sobre una sola media desconocida.",
      "Análisis de regresión lineal simple (bivariado).",
      "Estimación de coeficientes de correlación en muestras grandes."
    ],
    "c": [
      0
    ],
    "exp": "La distribución F es fundamentalmente el cociente de dos varianzas estimadas, lo que la hace ideal para comparar si diferentes grupos tienen la misma varianza (ANOVA)."
  },
  {
    "q": "¿Qué propiedad distingue a las distribuciones Chi-cuadrado y t de Student?",
    "opts": [
      "Ambas están definidas sobre el soporte $[0, \\infty)$ (o en un rango positivo).",
      "Ambas son siempre simétricas.",
      "Son usadas principalmente para variables discretas contadoras.",
      "Sus medios se calculan únicamente con la desviación estándar."
    ],
    "c": [
      0
    ],
    "exp": "Tanto $\\chi^2$ como $t$ son distribuciones asimétricas y su soporte siempre comienza en cero. La simetría es característica de la distribución Normal, no de estas dos."
  },
  {
    "q": "¿Cuál es el rango de valores posibles para una prueba de hipótesis basada en la desviación estándar muestral utilizando la relación $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)$?",
    "opts": [
      "El soporte es $[0, \\infty)$.",
      "El rango está acotado entre 0 y 1.",
      "El rango es lineal, siguiendo $y=x+c$.",
      "El rango depende directamente del tamaño muestral ($n$)."
    ],
    "c": [
      0
    ],
    "exp": "Dado que la $\\chi^2$ representa una suma de cuadrados normalizadas, su valor siempre será positivo (soporte: $[0, \\infty)$)."
  },
  {
    "q": "¿Qué se requiere para aplicar el test t en lugar del Z-score?",
    "opts": [
      "El tamaño muestral es grande ($n > 30$) y la desviación estándar poblacional ($\\sigma$) es desconocida.",
      "La población debe ser paramétrica y con $\\sigma$ conocida.",
      "Se conoce la desviación estándar poblacional ($\\sigma$) pero $n$ es pequeño.",
      "Existe una fuerte asimetría en los datos."
    ],
    "c": [
      0
    ],
    "exp": "El test t se usa precisamente cuando el tamaño muestral es pequeño y, crucialmente, no se conoce el parámetro $\\sigma$."
  },
  {
    "q": "¿Qué tipo de análisis estadístico requiere intrínsecamente la distribución F?",
    "opts": [
      "Comparar la variabilidad entre al menos dos grupos diferentes.",
      "Pruebas de correlación de Pearson.",
      "Modelos logísticos binarios (Odds Ratio).",
      "Estimar coeficientes de regresión en variables nominales."
    ],
    "c": [
      0
    ],
    "exp": "La comparación de varianzas o la evaluación de modelos con múltiples factores (ANOVA) es el uso primordial de $F$."
  },
  {
    "q": "¿Cuál es el principal límite teórico que impone la distribución t respecto a la Normal estándar?",
    "opts": [
      "Tiene colas más pesadas, lo que permite manejar mejor las desviaciones extremas en muestras pequeñas.",
      "Es siempre más precisa para grandes tamaños muestrales ($n>100$).",
      "Su varianza debe ser exactamente 1.",
      "Requiere que los datos sean estrictamente enteros (discretos)."
    ],
    "c": [
      0
    ],
    "exp": "Las colas pesadas de la t-Student son su característica definitoria, lo que significa que es más tolerante a valores atípicos (outliers) en muestras pequeñas."
  },
  {
    "q": "¿Cuál es el resultado esperado al realizar un análisis Chi-cuadrado de independencia?",
    "opts": [
      "Si se acepta $H_0$, no hay evidencia suficiente para rechazar que las variables sean independientes.",
      "Que la variable A y la variable B son estadísticamente dependientes.",
      "Que existe una asociación significativa entre las variables categóricas bajo estudio.",
      "Determinar qué porcentaje del total de datos es atípico."
    ],
    "c": [
      0
    ],
    "exp": "El test Chi-cuadrado testa la independencia. Si el p-valor es alto (y no se rechaza $H_0$), asumimos que no hay relación entre las categorías."
  },
  {
    "q": "Según la teoría estadística, ¿cuál es el origen fundamental de la distribución Chi-cuadrado ($\\chi^2$)?",
    "opts": [
      "Es el cociente de dos varianzas muestrales.",
      "Es una medida de asociación entre variables categóricas.",
      "Representa la suma de cuadrados de variables Normales estándar independientes.",
      "Se utiliza para comparar medias poblacionales cuando $n$ es pequeño."
    ],
    "c": [
      2
    ],
    "exp": "Conceptual: La distribución $\\chi^2(v)$ surge matemáticamente como la suma de los cuadrados de $v$ variables aleatorias independientes que siguen una distribución Normal Estándar (Z ~ N(0, 1)). Esto es clave para sus aplicaciones en pruebas de bondad de ajuste y análisis de varianza."
  },
  {
    "q": "¿Cuál es el principal motivo por el cual se prefiere la distribución t de Student sobre la distribución Normal Z cuando $n$ es pequeño?",
    "opts": [
      "La curva t es siempre más fácil de calcular a mano.",
      "Permite hacer inferencias robustas incluso con desviaciones no normales en muestras pequeñas.",
      "Es inherentemente simétrica, lo que simplifica su uso.",
      "Su grado de libertad ($\nu$) corrige el sesgo asociado al tamaño muestral."
    ],
    "c": [
      0
    ],
    "exp": "Conceptual: Cuando se estima la desviación estándar poblacional ($\\sigma$) usando solo muestras pequeñas ($n$), sustituimos $\\sigma$ por $S$. Esto introduce una varianza adicional en el estimador, y la distribución t incorpora un factor de corrección basado en los grados de libertad ($\nu = n-1$) para ser más precisa que la Z."
  },
  {
    "q": "En el contexto de las pruebas estadísticas comparativas, ¿cuál es la función principal de la distribución F de Fisher?",
    "opts": [
      "Determinar si dos poblaciones son idénticas en su media.",
      "Evaluar la asociación entre variables categóricas (independencia).",
      "Proporcionar una prueba para comparar la varianza o las pendientes de dos o más grupos.",
      "Calcular el intervalo de confianza de los coeficientes de correlación."
    ],
    "c": [
      0
    ],
    "exp": "Aplicación: La distribución F se define como el cociente de dos variables Chi-cuadrado, cada una normalizada por sus respectivos grados de libertad. Por lo tanto, su uso principal es la comparación de varianzas (ej., Análisis de Varianza o ANOVA)."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre las distribuciones $\\chi^2$, t y F es correcta?",
    "opts": [
      "La distribución $t(\nu)$ se aproxima a la Normal Z cuando los grados de libertad $\nu$ son grandes.",
      "La distribución Chi-cuadrado siempre requiere un parámetro de escala adicional ($\\sigma$).",
      "La distribución F relaciona directamente el cociente de dos varianzas estimadas independientes.",
      "Todas estas distribuciones son simétricas en su forma estándar."
    ],
    "c": [
      0
    ],
    "exp": "Conceptos: La t y la F sí se basan en ratios o sumas de cuadrados, pero las afirmaciones sobre $\\sigma$ (que es un parámetro poblacional) y la simetría general son incorrectas. El límite $t(\nu) \\to N(0, 1)$ cuando $\nu \\to \\infty$ es una propiedad fundamental."
  },
  {
    "q": "¿Cuál de los siguientes conjuntos de variables se recomienda analizar con una prueba Chi-cuadrado ($\\chi^2$)?",
    "opts": [
      "Dos variables que solo toman valores categóricos (nominal o ordinal).",
      "Una variable continua y su relación con otra continua.",
      "Cuatro mediciones repetidas en el tiempo para un mismo sujeto.",
      "Un dato de varianza poblacional desconocido."
    ],
    "c": [
      0
    ],
    "exp": "Aplicación: La prueba $\\chi^2$ es la herramienta estándar para evaluar la independencia entre dos variables *categóricas*, analizadas mediante tablas de contingencia. Si fueran continuas, se usaría t o F."
  },
  {
    "q": "¿Cómo afecta el aumento de los grados de libertad ($\nu$) en la distribución $t(\nu)$?",
    "opts": [
      "Hace que las colas más pesadas de la curva se acerquen progresivamente a las colas de la Normal Z.",
      "Aumenta significativamente la varianza y hace la distribución más dispersa.",
      "Mantiene constante la forma, independientemente del tamaño muestral.",
      "Causa un cambio en el tipo de distribución (ej., pasa a ser exponencial)."
    ],
    "c": [
      0
    ],
    "exp": "Conceptual: Este es un punto clave. Cuando $n$ crece ($\nu \\to \\infty$), los estimadores basados en muestras grandes se vuelven más precisos y la corrección por grados de libertad desaparece, haciendo que la t converja a la Normal Z."
  },
  {
    "q": "Cuando se utiliza la distribución $t$ de Student en lugar de la Normal estándar, ¿cuál es el motivo principal?",
    "opts": [
      "El tamaño muestral siempre debe ser muy grande.",
      "La desviación estándar poblacional ($\\sigma$) es desconocida y se estima con la muestra.",
      "Los datos deben seguir una relación lineal exponencial.",
      "Se requiere un test paramétrico más complejo que $t$."
    ],
    "c": [
      0
    ],
    "exp": "La distribución t de Student está diseñada para manejar situaciones donde la varianza poblacional, $\\sigma^2$, es desconocida y se estima utilizando la varianza muestral ($S^2$). Esto hace sus colas más pesadas que las de la Normal estándar."
  },
  {
    "q": "¿Cuál es el proceso fundamental para generar una variable aleatoria siguiendo la distribución Chi-cuadrado ($\\chi^2$)?",
    "opts": [
      "Calcular la razón entre dos medias poblacionales.",
      "Sumar los cuadrados de variables normales estándar e independientes.",
      "Tomar el cociente de varianzas muestrales normalizadas.",
      "Aplicar la transformación logarítmica a la muestra."
    ],
    "c": [
      0
    ],
    "exp": "Una variable $\\chi^2(\nu)$ se define como la suma de $n$ variables aleatorias $Z_i$, donde cada $Z_i \\sim N(0, 1)$, elevadas al cuadrado y sumadas: $\\sum_{i=1}^{n} Z_i^2$. Estos componentes deben ser independientes."
  },
  {
    "q": "Si tenemos una variable muestral que se sabe que sigue una distribución Normal, ¿qué estadística es proporcional a la varianza poblacional ($\\sigma^2$)?",
    "opts": [
      "El estadístico $\\frac{(n-1)S^2}{\\sigma^2}$ en el límite de $n \\to \\infty$.",
      "La Media Muestral ($\\bar{x}$).",
      "El coeficiente de variación (CV).",
      "La mediana muestral."
    ],
    "c": [
      0
    ],
    "exp": "Bajo la Normalidad, y utilizando los grados de libertad $\nu = n-1$, sabemos que el estadístico $(\\frac{(n-1)S^2}{\\sigma^2}) \\sim \\chi^2(n-1)$. Esto permite realizar inferencias sobre $\\sigma^2$ mediante esta distribución."
  },
  {
    "q": "¿Cuál es la principal aplicación del estadístico $F$ de Fisher?",
    "opts": [
      "Comparar si la media de dos grupos es igual, asumiendo varianzas iguales.",
      "Realizar pruebas de bondad de ajuste (Goodness-of-Fit) cuando se cuenta con categorías discretas.",
      "Evaluar si las varianzas de dos o más poblaciones son significativamente diferentes entre sí.",
      "Determinar el valor p para un test t de Student."
    ],
    "c": [
      0
    ],
    "exp": "La distribución $F$ es fundamentalmente utilizada en ANOVA (Análisis de Varianza), que busca determinar si existe una diferencia significativa entre las medias de múltiples grupos. También se usa directamente para comparar dos varianzas ($\\sigma_1^2 / \\sigma_2^2$)."
  },
  {
    "q": "¿Cuál es la característica definitoria de la distribución Chi-cuadrado $\\chi^2(\nu)$?",
    "opts": [
      "Es una distribución simétrica con soporte $(-\\infty, \\infty)$",
      "Representa el cociente de dos variables normales independientes",
      "Es la suma de cuadrados de $k$ variables Normales estándar independientes",
      "Su media siempre es igual a sus grados de libertad $\nu$"
    ],
    "c": [
      2
    ],
    "exp": "La distribución Chi-cuadrado proviene conceptualmente de sumar los cuadrados de variables $Z \\sim N(0, 1)$. El soporte es $[0, \\infty)$, no $(-\\infty, \\infty)$."
  },
  {
    "q": "¿Cuál es la principal diferencia entre la distribución t de Student y la distribución Normal estándar $N(0, 1)$?",
    "opts": [
      "La distribución t tiene colas más pesadas (leptocúrtica)",
      "Los valores extremos son más probables bajo la curva t",
      "Su varianza está determinada por los grados de libertad $\nu$",
      "Se utiliza para muestras con población Normal"
    ],
    "c": [
      0
    ],
    "exp": "La principal distinción es que, para un número finito de grados de libertad ($\nu$), la distribución t tiene colas más pesadas que la Normal estándar, lo que permite manejar mejor desviaciones atípicas en muestras pequeñas."
  },
  {
    "q": "¿Para qué tipo de comparación estadística está diseñada primariamente la distribución F de Fisher?",
    "opts": [
      "Comparar medias entre múltiples grupos (ANOVA)",
      "Determinar si dos poblaciones tienen varianzas iguales",
      "Estimar parámetros desconocidos de una sola población",
      "Calcular coeficientes de correlación simples"
    ],
    "c": [
      0
    ],
    "exp": "La distribución F se utiliza principalmente en Análisis de Varianza (ANOVA) para comparar medias entre grupos, y también es clave para determinar si dos varianzas poblacionales son iguales."
  },
  {
    "q": "¿Qué afirmaciones son verdaderas sobre el límite de convergencia entre distribuciones?",
    "opts": [
      "$t(\nu) \\to N(0, 1)$ cuando $\nu \\to \\infty$",
      "$\\chi^2(\nu/2) / \nu/2 \\approx \\text{Exponencial}$",
      "La distribución F se reduce a la Normal en el límite de grandes grados de libertad",
      "La prueba Z es un caso particular de la distribución t"
    ],
    "c": [
      0
    ],
    "exp": "A medida que los grados de libertad $\nu$ aumentan, la cola más pesada de $t(\nu)$ converge hacia la curva normal estándar $N(0, 1)$. Esto no aplica a F en general."
  },
  {
    "q": "En el contexto de la distribución Chi-cuadrado $\\chi^2(\nu)$, ¿qué se debe saber para determinar correctamente su valor?",
    "opts": [
      "El número de grados de libertad ($\nu$)",
      "Que es la suma de cuadrados de variables normales estándar independientes",
      "La media poblacional desconocida",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "La definición fundamental del $\\chi^2$ requiere el parámetro de grados de libertad ($\nu$). Es crucial recordar que $\\chi^2(\nu)$ es la suma de cuadrados $(Z_1)^2 + (Z_2)^2 + ... + (Z_\nu)^2$, donde $Z_i \\sim N(0, 1) \\text{ i.i.d.}$"
  },
  {
    "q": "¿Qué implica el cociente de Chi-cuadrados normalizados?",
    "opts": [
      "La distribución F de Fisher",
      "Comparaciones entre varianzas poblacionales",
      "El análisis de Varianza (ANOVA)",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "La distribución F es el cociente de dos variables $\\chi^2$ independientes, cada una dividida por sus respectivos grados de libertad. Su aplicación principal radica en ANOVA y la prueba de igualdad de varianzas."
  },
  {
    "q": "¿Bajo qué condición se define la distribución Chi-cuadrado $\\chi^2(\nu)$?",
    "opts": [
      "Es el cociente de dos normales independientes.",
      "Es la suma de cuadrados de variables Normales estándar independientes.",
      "Siempre es simétrica alrededor de su media.",
      "Se utiliza únicamente para comparar medias."
    ],
    "c": [
      1
    ],
    "exp": "La distribución Chi-cuadrado $\\chi^2(\nu)$ se obtiene al sumar los cuadrados de $\nu$ variables aleatorias que siguen una distribución Normal estándar (N(0, 1)) e son independientes. Esto es fundamental en pruebas de bondad de ajuste y análisis de varianza."
  },
  {
    "q": "Cuando el grado de libertad $\nu$ es muy grande ($\nu \\to \\infty$), ¿a qué distribución tiende la t de Student $t(\nu)$?",
    "opts": [
      "A una distribución Uniforme.",
      "A una distribución Normal estándar N(0, 1).",
      "A una distribución Chi-cuadrado.",
      "No converge a ninguna distribución conocida."
    ],
    "c": [
      0
    ],
    "exp": "Una propiedad crucial de la t de Student es su convergencia. A medida que el número de grados de libertad ($\nu$) se hace muy grande, la distribución $t(\nu)$ se aproxima cada vez más a la distribución Normal estándar N(0, 1), haciéndola casi indistinguible."
  },
  {
    "q": "¿Cuál es la razón principal para utilizar la t de Student en lugar de la Normal estándar (Z) al realizar inferencia?",
    "opts": [
      "Porque siempre proporciona un rango de confianza más amplio.",
      "Cuando el tamaño muestral $n$ es pequeño y se desconoce la desviación estándar poblacional $\\sigma$.",
      "Porque elimina completamente la necesidad de calcular la varianza.",
      "Porque solo funciona con variables discretas."
    ],
    "c": [
      0
    ],
    "exp": "La distribución t de Student fue desarrollada precisamente para corregir los efectos de muestreo cuando el tamaño de muestra $n$ es pequeño y, lo más importante, desconocemos $\\sigma$. Esto introduce grados de libertad $\nu = n-1$, haciendo que la cola sea 'más pesada' (mayor variabilidad) que la Normal."
  },
  {
    "q": "¿Qué característica define a la distribución F de Fisher?",
    "opts": [
      "Es el cociente de dos variables Chi-cuadrado, cada una dividida por sus respectivos grados de libertad.",
      "Se utiliza principalmente para comparar tres o más medias simultáneamente.",
      "Su parámetro clave es el tamaño muestral $n$.",
      "Está siempre centrada en cero."
    ],
    "c": [
      0
    ],
    "exp": "La distribución F se define como la razón de dos variables Chi-cuadrado normalizadas por sus grados de libertad respectivos ($F = \\frac{\\chi^2_1/\nu_1}{\\chi^2_2/\nu_2}$). Esto la hace indispensable en el Análisis de Varianza (ANOVA) y comparaciones de varianzas."
  },
  {
    "q": "¿Cuál es el propósito principal del coeficiente de variación o relación entre estas distribuciones?",
    "opts": [
      "Determinar qué distribución se debe usar al modelar datos normales pero con muestras pequeñas.",
      "Establecer si las variables son independientes.",
      "Calcular la probabilidad de que una variable siga un patrón normal.",
      "Comparar la media y varianza en diferentes escenarios."
    ],
    "c": [
      0
    ],
    "exp": "La relación principal es metodológica: si tenemos variables Normales, y el tamaño muestral es pequeño y $\\sigma$ desconocido, debemos usar $t$. Si comparamos varianzas, usamos $F$. El coeficiente de variación ayuda a identificar la distribución adecuada."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre las colas de las distribuciones es correcta?",
    "opts": [
      "La t de Student tiene colas más pesadas que la Normal estándar.",
      "La F de Fisher se centra en cero.",
      "El $\\chi^2$ tiene una cola izquierda mucho más gruesa que el lado derecho.",
      "La distribución Normal siempre tiene colas más pesadas."
    ],
    "c": [
      0
    ],
    "exp": "Las distribuciones t y $\\chi^2$ tienen colas 'más pesadas' (leptocúrticas) que la Normal estándar. Esto significa que hay una mayor probabilidad de observar valores extremos, lo cual es crucial en pruebas estadísticas."
  },
  {
    "q": "¿Qué define a la distribución $F$ de Fisher-Snedecor?",
    "opts": [
      "Es el cociente de dos chi-cuadrados normalizados y es asimétrica a la derecha",
      "Es simétrica y toma valores negativos",
      "Es la suma de cuadrados de normales estándar",
      "Su media es siempre 0"
    ],
    "c": [
      0
    ],
    "exp": "Si $U_1 \\sim \\chi^2_{d_1}$ y $U_2 \\sim \\chi^2_{d_2}$ independientes, $F = (U_1/d_1)/(U_2/d_2) \\sim F_{d_1,d_2}$. Es asimétrica a la derecha, con soporte $(0,\\infty)$ y $\\E{F} = d_2/(d_2-2)$ para $d_2 > 2$. La suma de cuadrados de normales es la $\\chi^2$, no la $F$."
  },
  {
    "q": "Según las propiedades teóricas, ¿qué característica define a la distribución $\\chi^2$?",
    "opts": [
      "Es simétrica alrededor de su media",
      "Su soporte es el intervalo real $(-\\infty, \\infty)$",
      "Se obtiene como la suma de cuadrados de variables normales estándar independientes",
      "Su forma se describe mejor por la exponencial"
    ],
    "c": [
      0
    ],
    "exp": "El concepto fundamental del Chi-cuadrado es que sigue la distribución cuando se suman los cuadrados de variables aleatorias Normales estándar e *independientes*. Es importante notar que es asimétrica positiva."
  },
  {
    "q": "¿Qué aspectos deben considerarse al interpretar un resultado estadístico de una prueba de hipótesis sobre varianzas?",
    "opts": [
      "Siempre se debe verificar el supuesto de homocedasticidad (varianzas iguales) entre los grupos.",
      "Los grados de libertad definen la potencia estadística de la prueba.",
      "La magnitud del coeficiente $F$ es más importante que su valor p.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Es crucial chequear si las varianzas son iguales (homocedasticidad), o el test F puede ser inválido. Aunque $F$ es clave, lo más importante en inferencia es el valor p y la significancia estadística, no solo el coeficiente F en sí."
  },
  {
    "q": "¿Cuál es la relación fundamental que conecta las tres distribuciones ($\\chi^2$, t y F)?",
    "opts": [
      "La distribución $F$ es esencialmente un cociente de dos variables Normales estandarizadas.",
      "Cuando las muestras son grandes, la distribución $t$ se aproxima a la distribución Normal ($Z$).",
      "$...$ La variable $t^2/(1+t^2/(\nu-2))$ relaciona $t$ con $\\chi^2$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La relación clave es que F está construido usando dos variables Chi-cuadrado normalizadas. Además, cuando N es grande, t converge a Z (Normal). La segunda opción describe una transformación matemática más compleja pero correcta de la relación entre las tres."
  },
  {
    "q": "¿En el contexto de la inferencia estadística, qué significa interpretar un valor p < $\\alpha$?",
    "opts": [
      "Rechazar la hipótesis nula ($H_0$) en favor de la alternativa ($H_A$).",
      "Sugiere que el resultado es poco probable si $H_0$ fuera cierto.",
      "Indicar que los datos observados son estadísticamente significativos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un valor p bajo significa que la probabilidad de obtener estos datos (o más extremos) asumiendo que $H_0$ es cierta es muy baja. Por lo tanto, rechazamos $H_0$. También indica significancia estadística."
  },
  {
    "q": "¿Qué papel juega la estadística $F$ en el contexto del Análisis de Varianza (ANOVA)?",
    "opts": [
      "Mide la proporción de varianza explicada por el modelo respecto a la variación residual",
      "Se usa para comparar covarianza y varianzas",
      "Es siempre igual a 1 si no hay diferencia significativa entre grupos",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El estadístico F es el cociente de dos varianzas (o razones de varianzas). En ANOVA, compara la variación 'entre grupos' (que esperamos que sea grande si hay efecto) con la variación 'dentro de grupos' (el error residual)."
  },
  {
    "q": "¿Por qué se prefiere utilizar la distribución t de Student sobre la Normal estándar cuando el tamaño muestral es pequeño ($n < 30$)?",
    "opts": [
      "La distribución t requiere estimar la desviación estándar poblacional ($\\sigma$), que es desconocido",
      "La t considera los grados de libertad y ajusta las colas para reflejar la incertidumbre del estimador $S$",
      "Permite realizar pruebas paramétricas incluso si se sospecha cierta no Normalidad",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Cuando $\\sigma$ es desconocido (lo cual siempre ocurre en la práctica), debemos usar el estimador muestral $S$. La distribución t incorpora esta incertidumbre extra mediante sus grados de libertad ($\nu$), resultando en colas más pesadas que N(0, 1)."
  },
  {
    "q": "Sean $Z_1, Z_2, \\dots, Z_\\nu$ variables independientes $N(0,1)$. Respecto a las distribuciones $\\chi^2$, $t$ y $F$, ¿cuáles de las siguientes afirmaciones son correctas?",
    "opts": [
      "La suma $\\sum_{i=1}^{\\nu} Z_i^2$ sigue una distribución $\\chi^2(\\nu)$.",
      "El cociente de dos sumas de cuadrados normalizadas e independientes sigue una distribución $F$.",
      "La suma lineal $\\sum_{i=1}^{\\nu} Z_i$ sigue una distribución $t$ de Student.",
      "La suma $\\sum_{i=1}^{\\nu} Z_i^2$ puede tomar valores negativos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Por definición $\\sum Z_i^2\\sim\\chi^2(\\nu)$ (no negativa); el cociente de $\\chi^2$ normalizados e independientes sigue $F$. La suma lineal de Normales es Normal, no $t$."
  },
  {
    "q": "¿Cuál es la relación matemática fundamental entre las distribuciones $\\chi^2$, $t$ y $F$?",
    "opts": [
      "La variable t es un cociente de variables Chi-cuadrado normalizadas",
      "La media de la distribución F siempre será 1",
      "La distribución F se deriva del cociente de dos variables Normales independientes",
      "Las tres distribuciones son transformaciones lineales entre sí"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Esto es conceptual. La $t$ está relacionada con $\\chi^2$, y la $F$ se define exactamente como el cociente de dos variables Chi-cuadrado normalizadas (y adecuatamente escaladas)."
  },
  {
    "q": "¿Cómo afecta una violación del supuesto de homocedasticidad a los resultados de un ANOVA?",
    "opts": [
      "Los valores p serán incorrectamente grandes",
      "El estadístico F se vuelve sesgado, y los niveles de confianza son inválidos",
      "La prueba debe ser reemplazada por la prueba t simple",
      "Solo afecta al cálculo de intervalos de confianza, no a la significancia global"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La homocedasticidad (varianzas iguales) es crítica. Si se viola, el estadístico F y sus valores p pueden estar sesgados, lo que lleva a conclusiones erróneas sobre la diferencia entre grupos."
  },
  {
    "q": "Sobre las relaciones entre las distribuciones $t$ de Student, Normal estándar y $F$ de Fisher, ¿cuáles de las siguientes afirmaciones son correctas?",
    "opts": [
      "$t(\\nu) \\to N(0,1)$ cuando $\\nu \\to \\infty$.",
      "Si $T\\sim t(\\nu_1)$ entonces $T^2 \\sim F(1,\\nu_1)$.",
      "$\\chi^2(\\nu) \\to t(\\nu)$ cuando $\\nu \\to \\infty$.",
      "El cuadrado de una $F$ de Fisher sigue una distribución $t$ de Student."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Cuando $\\nu\\to\\infty$, $t(\\nu)\\to N(0,1)$; además, si $T\\sim t(\\nu)$, entonces $T^2\\sim F(1,\\nu)$ por la definición de ambas distribuciones."
  },
  {
    "q": "¿Cuál es la interpretación estadística de una 'cabeza' asimétrica positiva en la distribución Chi-cuadrado?",
    "opts": [
      "Indica que los datos son altamente correlacionados",
      "Sugiere que el error se concentra cerca del cero, aumentando la probabilidad de valores positivos grandes",
      "Es característica de cualquier distribución con colas pesadas",
      "Implica una relación lineal perfecta entre las variables"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La asimetría positiva implica que los valores son más densos hacia la izquierda (cercanos a cero), pero tiene 'colas' largas hacia la derecha. Esto es normal para $\\chi^2$ cuando $\nu < \\infty$."
  },
  {
    "q": "¿Si se realiza una prueba ANOVA y el valor $F_{calculado}$ resulta ser muy pequeño, ¿qué conclusión preliminar debería obtenerse?",
    "opts": [
      "Es altamente probable que las varianzas poblacionales sean desiguales",
      "Sugiere que no hay evidencia suficiente para rechazar la hipótesis nula de igualdad de medias ($\\mu_1 = \\mu_2 = ...$)",
      "Indica una correlación perfecta entre los grupos muestrales",
      "El modelo debe ser re-evaluado porque requiere una transformación inmediata"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un $F_{calculado}$ pequeño significa que la variación observada 'entre' grupos es similar a la variación 'dentro' de grupos (error). Por lo tanto, no hay evidencia fuerte para concluir que las medias son diferentes."
  },
  {
    "q": "¿Qué representa el parámetro 'grados de libertad' ($\nu$) en $\\chi^2(\nu)$?",
    "opts": [
      "El número total de observaciones recolectadas.",
      "La cantidad de parámetros desconocidos estimados en el modelo estadístico.",
      "El número de variables predictoras utilizadas en la prueba de hipótesis (ej. $k-1$).",
      "El tamaño muestral corregido por la complejidad del análisis."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los grados de libertad son críticos porque definen tanto la forma como la escala de la distribución. Generalmente representan el número de 'grados de libertad' que quedan después de estimar parámetros."
  },
  {
    "q": "¿Por qué se considera que $t(n) \\to N(0,1)$ cuando $\nu \\to \\infty$?",
    "opts": [
      "Debido a que, con muestras muy grandes, el estadístico de prueba está suficientemente bien aproximado por la distribución Z.",
      "Porque la dispersión aumenta linealmente con $n$.",
      "Porque la Normal es una forma más simple y universal.",
      "Los parámetros $\\mu$ y $\\sigma$ convergen en el límite infinito."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Es una propiedad clave. A medida que aumentan los grados de libertad ($\nu$), las colas pesadas de la t-Student se 'aplanan' hasta replicar el comportamiento de la distribución Normal estándar (Z)."
  },
  {
    "q": "¿Cuál es el propósito general al comparar estas tres distribuciones en inferencia estadística?",
    "opts": [
      "Validar las suposiciones paramétricas del modelo y elegir el estadístico de prueba apropiado.",
      "Calcular la probabilidad exacta sin necesidad de aproximaciones asintóticas.",
      "Determinar si una variable sigue una distribución Binomial o Poisson.",
      "Transformar variables categóricas en continuas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La elección entre $t$, $\\chi^2$ o $F$ depende enteramente de las suposiciones del modelo y el tipo de comparación (comparación de medias vs. varianzas)."
  },
  {
    "q": "¿Qué tipo de dato NO puede ser analizado directamente con estas distribuciones paramétricas?",
    "opts": [
      "Proporciones poblacionales (usando $\\chi^2$ en tablas).",
      "Variables categóricas nominales sin estructura de cuenta.",
      "Datos continuos y normales.",
      "Cuentas que siguen una distribución de Poisson."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Aunque se usa la $\\chi^2$ para proporciones, el test de independencia (tabla $R \\times C$) es específico. Las variables puramente nominales sin conteo ($N(A)$ vs $N(B)$) suelen requerir pruebas no paramétricas o análisis de frecuencias."
  },
  {
    "q": "¿Qué características definen mejor a la distribución t de Student?",
    "opts": [
      "Es perfectamente simétrica alrededor de su media.",
      "Posee colas más pesadas que la distribución Normal Z, especialmente para pocos grados de libertad.",
      "Su varianza depende directamente del número de grados de libertad ($\nu$).",
      "Se utiliza como base para probar hipótesis sobre la relación entre dos variables continuas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Conceptual: La t es simétrica. Sus colas más pesadas (leptocúrtica) que la Normal Z son su característica distintiva cuando $n$ es pequeño, lo que le permite ser más conservadora y precisa. Su varianza es $\\text{Var}(T) = \\frac{\nu}{\nu-2}$ para $\nu > 2$."
  },
  {
    "q": "¿Cuándo deberíamos utilizar la distribución F de Fisher en un análisis estadístico?",
    "opts": [
      "Para determinar si dos muestras provienen de poblaciones con medias significativamente diferentes.",
      "Cuando se desea comparar la varianza de múltiples grupos contra una varianza global o entre sí (ANOVA).",
      "Si el objetivo es modelar la proporción de eventos raros en grandes conjuntos de datos.",
      "Siempre que las variables sean categóricas y se busque medir independencia."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Aplicación: La F compara *varianzas* (o pendientes, en regresión). Si bien el ANOVA también implica comparar medias, su mecanismo estadístico subyacente utiliza la razón de varianzas entre grupos ($MS_{entre}/MS_{dentro}$)."
  },
  {
    "q": "¿Cuál es el propósito central del cálculo de un valor p utilizando estas distribuciones ($\\chi^2$, t, F)?",
    "opts": [
      "Estimar la magnitud del efecto o la diferencia entre grupos (tamaño del efecto).",
      "Determinar la probabilidad de observar los datos actuales o más extremos si la hipótesis nula fuera cierta.",
      "Calcular el tamaño muestral mínimo necesario para alcanzar potencia estadística.",
      "Corregir las desviaciones tipo I y tipo II en múltiples pruebas simultáneas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Interpretación: El valor p es una probabilidad. Nos dice qué tan improbable es el resultado observado bajo $H_0$. Si es muy pequeño (ej., $<0.05$), rechazamos la hipótesis nula. Los otros conceptos son pasos complementarios al uso del valor p."
  },
  {
    "q": "¿Cuál es el requisito fundamental para aplicar correctamente una prueba F (ANOVA)?",
    "opts": [
      "Asumir que los residuos del modelo siguen una distribución Normal en cada grupo.",
      "Que las varianzas de las poblaciones comparadas no varíen significativamente entre sí (Homogeneidad de varianzas).",
      "Que las variables sean inherentemente categóricas.",
      "Utilizar la muestra más grande disponible para maximizar el poder estadístico."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Aplicación: ANOVA y pruebas F requieren dos supuestos críticos: Normalidad (los residuos deben ser normales) e Homogeneidad de Varianzas ($\\sigma_1^2 = \\sigma_2^2 = ...$). Si la varianza no es homogénea, se prefiere usar alternativas como el test de Welch."
  },
  {
    "q": "Para una variable $X\\sim\\chi^2(\\nu)$, ¿cuáles de las siguientes propiedades son correctas?",
    "opts": [
      "Su media es $\\nu$ y su varianza es $2\\nu$.",
      "Su soporte es $[0,\\infty)$ y presenta asimetría positiva.",
      "Es simétrica respecto a su media $\\nu$.",
      "Su soporte es toda la recta real $\\mathbb{R}$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para $\\chi^2(\\nu)$ se tiene $E[X]=\\nu$, $\\mathrm{Var}(X)=2\\nu$, soporte $[0,\\infty)$ y asimetría positiva; no es simétrica."
  },
  {
    "q": "¿Cuál es el rol del parámetro $\nu$ (grados de libertad) en las tres distribuciones?",
    "opts": [
      "Define la forma específica de cada curva ($\\chi^2$, t), ajustando su dispersión.",
      "Determina si se debe usar una prueba paramétrica o no paramétrica.",
      "Es directamente proporcional al tamaño máximo de la muestra posible.",
      "Solo es relevante para la distribución F y tiene que ser $n-1$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Conceptual: El $\nu$ es crucial porque controla la forma. Si aumenta el número de grados de libertad, la t se acerca a Z; si el $\\chi^2$ crece, su dispersión aumenta. Este parámetro ajusta la 'curva' para que se ajuste mejor a los datos disponibles."
  },
  {
    "q": "¿Qué implica un resultado $F_{calculado} > F_{critico}$ en una prueba ANOVA?",
    "opts": [
      "Que las varianzas entre grupos son significativamente mayores que las varianzas dentro de ellos.",
      "Rechazar la hipótesis nula de igualdad de medias poblacionales.",
      "Indicar que el análisis debe ser realizado utilizando un test no paramétrico (ej., Kruskal-Wallis).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Interpretación: En ANOVA, $F = \\frac{MS_{entre}}{MS_{dentro}}$. Si este cociente es alto (y por lo tanto $F_{calculado} > F_{critico}$), sugiere que la variación explicada por los grupos es mucho mayor de lo esperado solo por el azar dentro del grupo, llevando a rechazar $H_0$."
  },
  {
    "q": "Al calcular intervalos de confianza para una media poblacional $\\mu$, ¿cuándo se debe emplear un intervalo basado en distribución t?",
    "opts": [
      "Cuando la desviación estándar muestral ($S$) es utilizada como estimador de $\\sigma$ y el tamaño muestral $n < 30$.",
      "Cuando se sospecha que los datos no siguen una distribución Normal.",
      "Siempre que el objetivo sea modelar la relación entre dos variables categóricas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Aplicación: El uso de t es preferible cuando $S$ se usa en lugar de $\\sigma$, especialmente con muestras pequeñas. Aunque no saber si los datos son Normales es un problema más grave, el tamaño muestral pequeño y el uso de $S$ son la indicación matemática para usar $t$."
  },
  {
    "q": "¿Qué tipos de información debe considerarse al decidir entre usar la distribución t y la Normal estándar?",
    "opts": [
      "El conocimiento previo del tamaño poblacional ($N$) y que sea finito.",
      "Si se desconoce $\\sigma$ o si el tamaño muestral es pequeño ($n < 30$).",
      "Si los datos presentan una marcada asimetría (skewness) extrema.",
      "Si la variable debe transformarse logarítmicamente antes del test."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El uso de $t$ vs. Normal depende principalmente de si conocemos $\\sigma$. Si el tamaño muestral es pequeño y $\\sigma$ es desconocida, se prefiere $t$. Aunque la asimetría (opción c) puede causar problemas en ambos casos, la razón *estructural* clave para elegir t sobre Z es la incertidumbre sobre $\\sigma$."
  },
  {
    "q": "¿Cuáles son características esenciales de la distribución Chi-cuadrado ($\\chi^2$)?",
    "opts": [
      "Es inherentemente asimétrica con soporte [0, $\\infty$) y media igual a sus grados de libertad ($\nu$).",
      "Su valor puede ser transformado para aproximarse a una Normal estándar si $\nu$ es muy grande.",
      "Tiene una forma simétrica perfecta alrededor de su pico en todos los casos.",
      "Requiere que la variable original sea exponencialmente distribuida."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las características clave son: 1) Es asimétrica y solo acepta valores positivos. 2) Su soporte es $[0, \\infty)$. 3) Cuando sus grados de libertad ($\nu$) son grandes, se comporta de manera muy similar a la distribución Normal. La simetría perfecta no es una característica inherente."
  },
  {
    "q": "¿Cuáles son los propósitos primarios para que el estadístico $F$ sea utilizado en estadística inferencial?",
    "opts": [
      "Comparar varianzas y determinar si las poblaciones varían de forma significativa.",
      "Realizar análisis comparativos entre tres o más grupos (ANOVA).",
      "Estimar la razón entre dos parámetros de dispersión poblacional ($\\sigma_1^2 / \\sigma_2^2$).",
      "Determinar la correlación lineal simple entre dos variables continuas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El estadístico $F$ es el núcleo del ANOVA (comparar múltiples medias) y también se utiliza para comparar varianzas. Estos usos derivan de su naturaleza como cociente de Chi-cuadrados normalizados."
  },
  {
    "q": "¿En un contexto práctico de comparación de datos, ¿qué elementos son cruciales al evaluar la robustez estadística?",
    "opts": [
      "Utilizar pruebas que asuman linealidad y Normalidad (como t o ANOVA).",
      "Verificar si los datos están libres de valores atípicos (outliers) extremos.",
      "Aplicar transformaciones logarítmicas cuando se detecta alta asimetría.",
      "Evaluar la magnitud del tamaño muestral ($n$) antes de cualquier prueba."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para que las pruebas paramétricas como t o ANOVA sean válidas y robustas, idealmente se deben verificar los supuestos de Normalidad (o el gran $n$ para evitarlo) y la ausencia de valores atípicos significativos."
  },
  {
    "q": "¿Cómo afecta el conocimiento de los grados de libertad ($\nu$) en cada distribución?",
    "opts": [
      "A mayor $\nu$, más simétrica se vuelve la distribución $t$ y se acerca a la Normal.",
      "El parámetro $\nu$ controla directamente tanto la forma (skewness) como la escala del estadístico Chi-cuadrado.",
      "En ANOVA, si los grados de libertad del numerador son bajos, el test F será menos sensible.",
      "Los grados de libertad siempre deben ser igualados para comparar dos tests $F$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El parámetro $\nu$ es crucial. En la distribución t y $\\chi^2$, a medida que $\nu \\to \\infty$, ambas convergen a distribuciones más conocidas (Normal o Normalizada). El control de la forma está directamente ligado al valor de $\nu$."
  },
  {
    "q": "¿Qué condiciones son necesarias para aplicar correctamente la prueba de independencia ($\\chi^2$)?",
    "opts": [
      "Los datos deben estar categorizados en tablas de contingencia (conteo $O_{ij}$).",
      "El tamaño esperado de cada celda ($E_{ij}$) no debe ser inferior a 5, idealmente $\\ge 10$.",
      "Se debe asumir que las variables se comportan de manera independiente entre sí.",
      "La variable categórica predictora debe tener más categorías que la respuesta."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para el test $\\chi^2$ de independencia, es vital usar datos de conteo. Además, hay condiciones de validez estadística: las celdas esperadas $E_{ij}$ deben ser suficientemente grandes (regla general: $>5$) para que la aproximación Normal sea válida."
  },
  {
    "q": "¿Cuáles son las propiedades correctas de la distribución Chi-cuadrado $\\chi^2(\nu)$?",
    "opts": [
      "Su soporte está limitado al intervalo $[0, \\infty)$",
      "Es inherentemente asimétrica (asimétrica positiva)",
      "Representa una suma de variables aleatorias Normales estándar",
      "Tener grados de libertad mayores a 3 siempre implica simetría"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El soporte $\\chi^2$ es $[0, \\infty)$ y su forma es asimétrica positiva. No es el cociente (eso sería F), ni la suma directa de Normales (eso no define $\\chi^2$)."
  },
  {
    "q": "¿En qué contexto se puede utilizar la distribución t de Student?",
    "opts": [
      "Cuando el tamaño muestral $n$ es pequeño y desconocemos la desviación estándar poblacional $\\sigma$",
      "Como una aproximación a $N(0, 1)$ cuando los grados de libertad son muy altos",
      "Para realizar pruebas de hipótesis sobre medias con muestras no Normales",
      "Al comparar varianzas entre dos grupos"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La distribución t es ideal para muestras pequeñas donde $\\sigma$ se estima por la desviación muestral. Además, su aproximación a $N(0, 1)$ ocurre cuando $\nu \\to \\infty$."
  },
  {
    "q": "¿Qué resultados son correctos al aplicar una prueba de varianza F?",
    "opts": [
      "Es el cociente de dos variables Chi-cuadrado independientes y normalizadas",
      "Indica que las diferencias entre medias son estadísticamente significativas",
      "Se utiliza para evaluar la igualdad de las proporciones poblacionales",
      "Solo es aplicable si los grupos tienen tamaños muestrales iguales"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La distribución F se define como un cociente de $\\chi^2$s normalizados. Su propósito principal en la práctica es evaluar la significancia de las diferencias entre medias (como en ANOVA)."
  },
  {
    "q": "¿Cuáles son los requisitos fundamentales para que una prueba estadística basada en estas distribuciones sea válida?",
    "opts": [
      "Los datos deben seguir una distribución Normal",
      "Las observaciones dentro de cada grupo deben ser independientes entre sí",
      "Los grupos comparados deben tener la misma forma y varianza (homogeneidad)",
      "El tamaño muestral debe ser siempre mayor a 30"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La normalidad es crucial para aplicar correctamente estas pruebas. Además, se requiere que las observaciones sean independientes. La homogeneidad de varianzas ($\\sigma^2_1 = \\sigma^2_2$) es un requisito clave en muchas aplicaciones (como la prueba F)."
  },
  {
    "q": "¿Sobre las medidas de dispersión y sus propiedades asociadas es correcto afirmar que:",
    "opts": [
      "La varianza $\\sigma^2$ siempre está relacionada con una distribución Chi-cuadrado",
      "El uso de la desviación estándar requiere asumir la normalidad para ser fiable",
      "Cuanto mayor sea el grado de libertad, más leptocúrtica es la distribución t",
      "Las tres distribuciones (t, F, $\\chi^2$) son invariantes bajo transformaciones lineales"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La varianza se utiliza para construir estadísticas que siguen $\\chi^2$ (ej: $(n-1)S^2/\\sigma^2 \\sim \\chi^2$). La desviación estándar y la distribución Normal son fundamentales. Sin embargo, el grado de libertad creciente hace que t sea *menos* leptocúrtica, no más."
  },
  {
    "q": "¿Qué características definen correctamente los grados de libertad ($\nu$) en este contexto?",
    "opts": [
      "Representa el número de variables independientes utilizadas para estimar un parámetro",
      "Es crucial en la forma y dispersión de las distribuciones t, $\\chi^2$ y F",
      "Si es bajo, indica que se debe usar la distribución Normal estándar",
      "Determina cuántas muestras deben tomarse para asegurar significancia estadística"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los grados de libertad son el contador interno de información disponible (variables independientes) y definen completamente la forma de las tres distribuciones. No determinan el tamaño muestral necesario; ese debe calcularse previamente."
  },
  {
    "q": "¿Cuáles de los siguientes conceptos describen correctamente el uso de la distribución F?",
    "opts": [
      "Se utiliza para comparar la variabilidad entre múltiples grupos",
      "Se fundamenta en el cociente de dos variables $\\chi^2$ independientes y normalizadas",
      "Es sensible a supuestos de homocedasticidad (varianzas iguales)",
      "Solo puede aplicarse cuando los datos son discretos"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La función primaria de F es comparar variabilidades/medias entre grupos. Su definición matemática requiere que sea un cociente de dos $\\chi^2$s normalizados, y su aplicación se basa fuertemente en el supuesto de homocedasticidad."
  },
  {
    "q": "¿Qué propiedades son ciertas al modelar datos con estas distribuciones?",
    "opts": [
      "El modelo Normal es un caso límite especial cuando los grados de libertad del Chi-cuadrado son grandes",
      "Las estadísticas construidas a partir de muestreos independientes siguen las distribuciones teóricas (t, F, $\\chi^2$)",
      "La naturaleza asimétrica de $\\chi^2$ y $F$ significa que la mediana siempre está lejos de la media",
      "El cálculo de probabilidades requiere siempre transformar los datos a unidades Z-score"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El límite Normal se alcanza cuando el número de variables independientes es grande. Las estadísticas basadas en muestras normales siguen estas distribuciones (teorema estadístico). La afirmación sobre la asimetría vs. mediana/media no siempre es cierta y puede depender del parámetro."
  },
  {
    "q": "¿Cuáles son los conceptos que definen correctamente una prueba de hipótesis paramétrica?",
    "opts": [
      "Requiere asumir que la población sigue una distribución específica (ej. Normal)",
      "Utiliza estadísticas de test basadas en el ratio o sumas de cuadrados",
      "Permite hacer inferencias sobre parámetros poblacionales ($\\mu, \\sigma^2$)",
      "Es siempre más poderosa que las pruebas no paramétricas"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las pruebas paramétricas asumen una distribución (ej. Normal) y utilizan estadísticas basadas en estos supuestos para estimar o contrastar parámetros poblacionales. Su poder es alto si los supuestos se cumplen."
  },
  {
    "q": "¿Cuáles son ejemplos de cuándo la distribución t es preferible sobre la Normal estándar?",
    "opts": [
      "Al evaluar hipótesis con tamaños muestrales pequeños ($n < 30$)",
      "Cuando se estima la media y el conocimiento de $\\sigma$ es escaso",
      "Para analizar datos que están intrínsecamente distribuidos en forma triangular",
      "Cuándo las colas pesadas son un riesgo real debido a outliers"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La distribución t fue diseñada específicamente para casos pequeños donde la varianza poblacional $\\sigma^2$ es desconocida y debe ser estimada por $S^2$. Sus colas más pesadas manejan mejor los datos atípicos en muestras pequeñas."
  },
  {
    "q": "¿Qué dos escenarios estadísticos están directamente relacionados con el uso de varianzas poblacionales?",
    "opts": [
      "Comparación de dos grupos para ver si son iguales",
      "Pruebas de igualdad de varianzas entre múltiples muestras",
      "El cálculo del coeficiente de correlación ($\\rho$)",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las pruebas F y el ANOVA se utilizan principalmente para comparar la variación (varianzas) entre diferentes grupos. La opción 'A' engloba esto: es el propósito fundamental del diseño."
  },
  {
    "q": "¿Qué tipo de información se obtienen al utilizar la distribución $\\chi^2$?",
    "opts": [
      "La dispersión alrededor de una media estimada",
      "Los grados de libertad asociados a un ajuste o prueba de independencia",
      "Las probabilidades en pruebas de bondad de ajuste",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Chi-cuadrado se usa para evaluar la variabilidad (dispersión) y es fundamental en las pruebas de hipótesis que requieren contar grados de libertad. La opción 'B' es un ejemplo directo de aplicación: $\\chi^2$ en tablas de contingencia."
  },
  {
    "q": "¿Cuál es el papel de los grados de libertad ($\nu$) en la distribución t?",
    "opts": [
      "Determinar si la media muestral es significativamente diferente de cero",
      "Controlar qué tan pesadas son las colas de la distribución",
      "Modificar la forma específica de la campana de la distribución",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El $\nu$ en t y $\\chi^2$ controla su 'forma'. En el caso de t, un $\nu$ pequeño resulta en colas más pesadas (más probabilidad de errores tipo II) que si usáramos $N(0,1)$. La opción A es la aplicación directa: test t para medias."
  },
  {
    "q": "¿Qué propiedades son universales a las distribuciones t y F?",
    "opts": [
      "Son basadas en el concepto de ratios o cocientes",
      "Requieren grados de libertad como parámetro clave ($\nu$)",
      "Se utilizan cuando se estiman varianzas poblacionales desconocidas",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Tanto la distribución t (que es un tipo de ratio) como F (un ratio de $\\chi^2$) dependen intrínsecamente del número de grados de libertad. Su uso implica que las varianzas son estimadas a partir de muestras."
  },
  {
    "q": "¿Qué se puede inferir sobre la relación entre $t$ y $N(0,1)$?",
    "opts": [
      "Cuanto más grandes sean los $\nu$, más cercana es $t(\nu)$ a $N(0,1)$",
      "Si el tamaño muestral $n$ es grande ($n>30$), se puede usar la Normal en lugar de t",
      "Ambas distribuciones son apropiadas para estimar medias bajo cualquier condición poblacional",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El límite teórico establece que cuando $\nu \\to \\infty$, $t(\nu) \\to N(0, 1)$. Prácticamente, si $n$ es grande, la aproximación Normal es aceptable. Sin embargo, la opción 'C' es incorrecta; el uso de t o F siempre asume alguna condición subyacente (normalidad, independencia)."
  },
  {
    "q": "¿Qué diferencia fundamental existe entre usar una prueba Z y una prueba t?",
    "opts": [
      "La prueba Z solo se usa con $\\sigma$ conocida",
      "La prueba t es la alternativa a Z cuando $\\sigma$ debe ser estimada ($S$) y el tamaño muestral puede ser pequeño",
      "La prueba Z siempre requiere que la población sea Normal",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El principal diferenciador entre ambas pruebas en contextos prácticos es si se conoce o no la desviación estándar poblacional $\\sigma$. Si es desconocida (y especialmente con $n$ pequeños), debemos recurrir a t."
  },
  {
    "q": "¿Cuál de los siguientes enunciados sobre las distribuciones estadísticas es correcto?",
    "opts": [
      "El valor esperado de $\\chi^2(\nu)$ es $\nu$",
      "La media muestral ($\\bar{X}$) siempre tiene un sesgo cero (unbiased)",
      "Cuando se hacen hipótesis múltiples, el error tipo I acumulado aumenta",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "En la distribución $\\chi^2$, el valor esperado es precisamente su parámetro de grados de libertad. La media muestral es un estimador insesgado (sesgo cero). El tercer enunciado describe una propiedad general del control de errores tipo I ($\\alpha_{total} = 1 - (1-\\alpha)^k$)."
  },
  {
    "q": "¿Qué implicaciones tiene el análisis ANOVA en términos distribucionales?",
    "opts": [
      "Implica que la varianza dentro de los grupos es comparable",
      "Se modela como una aplicación directa de la distribución F de Fisher",
      "Permite comparar múltiples medias poblacionales simultáneamente",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "ANOVA compara si las varianzas (variaciones) *entre* grupos son significativamente diferentes. Su base matemática se sustenta en el ratio de dos varianzas estimadas, lo que lo relaciona directamente con la distribución F."
  },
  {
    "q": "¿Cuál es el propósito principal de usar cuantiles en estas distribuciones?",
    "opts": [
      "Estimar probabilidades puntuales (ej: P(X > x))",
      "Encontrar valores X asociados a un nivel de probabilidad dado ($\\alpha$)",
      "Determinar los grados de libertad necesarios para una prueba",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los cuantiles son la herramienta inversa de la función de distribución acumulada (CDF). Se usan para encontrar el valor $X$ que corresponde a una probabilidad $\\alpha$. Por ejemplo, el cuantil crítico $t_{\\alpha/2}(\nu)$."
  },
  {
    "q": "¿Qué papel juega la suposición de Normalidad en estas pruebas?",
    "opts": [
      "Es un requisito estricto para la validez teórica de las pruebas t y F",
      "Permite el cálculo del valor p (p-value) mediante modelos paramétricos",
      "Sin esta suposición, se debe cambiar a métodos no paramétricos",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Normalidad es crucial para la base teórica de $t$ y $F$. Si falla, los tests pueden ser inválidos. El valor p depende de que el modelo estadístico subyacente sea correcto (paramétrico). La opción C, aunque cierta, no describe un *papel* sino una consecuencia."
  },
  {
    "q": "¿Bajo qué supuesto se puede aplicar correctamente el test F para comparar dos varianzas poblacionales $\\sigma_1^2$ y $\\sigma_2^2$?",
    "opts": [
      "Que las muestras son independientes.",
      "Que los datos de ambas poblaciones siguen una distribución Normal.",
      "Que el tamaño muestral es igual ($n_1 = n_2$).",
      "Que la media de ambas poblaciones es cero."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test F requiere dos supuestos: (1) Independencia de las muestras y (2) Normalidad de ambas poblaciones. El supuesto de tamaño muestral igual $n_1=n_2$ no es estrictamente necesario para la validez del teste estadístico en general, aunque puede simplificar cálculos."
  },
  {
    "q": "¿Cuál es el rango de soporte para la distribución Chi-cuadrado $\\chi^2(\nu)$?",
    "opts": [
      "$(-\\infty, \\infty)$",
      "[0, $\\infty$)",
      "$(0, 1]$",
      "$[1, \\infty)$"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Como el cuadrado de cualquier variable real (ya sea Normal estándar) siempre es no negativo, la suma de estos cuadrados debe ser $\\ge 0$. Por lo tanto, su soporte está en $[0, \\infty)$. La opción $A$ es incorrecta porque N puede tomar valores negativos."
  },
  {
    "q": "¿Cuál distribución se utiliza típicamente para realizar el Análisis de Varianza (ANOVA) de un solo factor?",
    "opts": [
      "La t de Student.",
      "La F de Fisher.",
      "La distribución Normal estándar.",
      "El Chi-cuadrado $\\chi^2$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Aunque ANOVA compara varianzas y se basa en la Normalidad (y por ende $t$), el estadístico de prueba clave en ANOVA es siempre una razón de varianzas que sigue la distribución F. Por lo tanto, la opción correcta más específica y fundamental es F."
  },
  {
    "q": "¿Qué medida estadística debe ser calculada a partir del estado estacionario para aplicar correctamente el test $\\chi^2$?",
    "opts": [
      "La frecuencia absoluta (conteo).",
      "Las probabilidades esperadas.",
      "Los grados de libertad (el parámetro $\nu$).",
      "El rango intercuartílico."
    ],
    "c": [
      0,
      1
    ],
    "exp": "En pruebas como la bondad de ajuste o independencia, primero se calculan las frecuencias observadas y luego se comparan con las frecuencias *esperadas* bajo la hipótesis nula. Este proceso requiere calcular los grados de libertad $\nu$ a partir del número de categorías."
  },
  {
    "q": "¿Qué significa que una distribución sea 'asimétrica positiva'?",
    "opts": [
      "Que su cola derecha es más larga o pesada.",
      "Que el valor esperado (media) es mayor que la mediana.",
      "Que el coeficiente de asimetría ($\\gamma_1$) es positivo.",
      "Implica que debe seguir la distribución $\\chi^2$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una asimetría positiva significa que los valores atípicos o las colas están extendidas hacia la derecha. Esto es característico del $\\chi^2$ y de la $F$, donde los valores bajos son mucho más probables que los altos."
  },
  {
    "q": "¿Cuál es el grado de libertad ($\nu$) utilizado en la prueba t para comparar dos medias poblacionales?",
    "opts": [
      "$n_1 + n_2 - 2$ (varianzas iguales, pooled).",
      "Aproximación de Welch-Satterthwaite (varianzas desiguales).",
      "$n_1 + n_2 - 1$ (fórmula sin corregir).",
      "Ningún parámetro es necesario si ambas muestras son grandes."
    ],
    "c": [
      0
    ],
    "exp": "Cuando se realiza una prueba t para dos grupos independientes y se asume varianza igual (pooled variance), los grados de libertad son $\nu = n_1 + n_2 - 2$. Los otros parámetros o fórmulas no corresponden a la definición estándar del cálculo de $\nu$."
  },
  {
    "q": "¿Qué sucede con la distribución t de Student $t(\nu)$ cuando los grados de libertad $\nu$ aumentan considerablemente?",
    "opts": [
      "Se vuelve completamente uniforme.",
      "Converge (tiende) a la distribución Normal estándar $N(0, 1)$.",
      "Su media se desplaza hacia el infinito.",
      "Sus colas se vuelven más pesadas que las de la distribución Normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Cuando los grados de libertad $\nu \\to \\infty$, el estadístico t tiende a distribuirse según la distribución normal estándar $N(0, 1)$. Esto explica por qué en muestras grandes (con muchos datos), se puede aproximar usar una prueba Z en lugar de la prueba t."
  },
  {
    "q": "¿Cuáles son las principales condiciones o aplicaciones donde se utiliza la distribución F de Fisher?",
    "opts": [
      "Comparación de varianzas entre dos grupos independientes.",
      "Análisis de Varianza (ANOVA) para múltiples grupos.",
      "Determinación de coeficientes de correlación lineal en muestras grandes.",
      "Estudio de la bondad de ajuste para datos discretos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La distribución F es esencialmente un cociente de dos variables $\\chi^2$ normalizadas. Sus aplicaciones más comunes son: 1) Comparar si las varianzas poblacionales son iguales (F-test). 2) Realizar el Análisis de Varianza (ANOVA), que prueba la igualdad de medias entre múltiples grupos."
  },
  {
    "q": "¿Bajo qué condiciones o escenarios debe preferirse el uso de la distribución t de Student sobre la distribución Normal $N(0, 1)$?",
    "opts": [
      "Cuando se desconoce la varianza poblacional y se estima con muestras pequeñas.",
      "Siempre que se realice una prueba de hipotesis para comparar medias en poblaciones normales.",
      "Cuando el tamaño muestral es muy grande ($n > 30$), sin importar la varianza.",
      "Cuando los datos presentan un sesgo extremo (outliers) que distorsionan significativamente las colas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La distribución t es preferida cuando el tamaño muestral $n$ es pequeño y la varianza poblacional $\\sigma^2$ debe ser estimada a partir de una muestra. Aunque los estadísticos Z (Normal) son más conocidos, en muestras pequeñas, la estimación del error estándar introduce mayor incertidumbre, lo cual requiere usar la t para capturar colas más pesadas."
  },
  {
    "q": "¿Cuáles representan las funciones estadísticas utilizadas para comparar varianzas o realizar ANOVA?",
    "opts": [
      "Estadístico F de Fisher.",
      "Distribución Chi-cuadrado $\\chi^2$ (en el contexto $S^2/\\sigma^2$).",
      "El coeficiente de correlación Pearson ($r$).",
      "La distribución t de Student."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test F compara cocientes de varianzas o la razón entre sumas de cuadrados. El estadístico $\\chi^2$ también se utiliza para comparar varianzas (ej., en el contexto de grados de libertad reducidos) y es crucial en la bondad de ajuste. La distribución t no está diseñada primariamente para comparar varianzas."
  },
  {
    "q": "¿Cuáles son las suposiciones críticas que deben cumplirse para aplicar correctamente un test paramétrico de medias?",
    "opts": [
      "Los datos deben ser independientes entre sí.",
      "Las poblaciones subyacentes deben seguir una distribución Normal (o $n$ es lo suficientemente grande).",
      "La varianza poblacional debe ser conocida a priori.",
      "Los residuos del modelo deben ser homocedásticos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para la mayoría de los tests paramétricos (Z o T), se asume que las observaciones son independientes. Además, el supuesto más crítico es la Normalidad (o un tamaño muestral suficientemente grande para aplicar el Teorema del Límite Central). El conocimiento previo de la varianza ($\\sigma^2$) hace innecesaria la prueba t."
  },
  {
    "q": "¿Cuáles son las principales diferencias conceptuales entre las distribuciones t, Z (Normal) y F?",
    "opts": [
      "La distribución t se utiliza cuando la desviación estándar poblacional ($\\sigma$) es desconocida.",
      "La distribución Normal ($Z$) solo aplica a muestras muy grandes.",
      "La distribución F compara varianzas o medidas de dispersión.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Se requiere 't' cuando no se conoce $\\sigma$ y $n$ es pequeño. La Normal (Z) asume que $\\sigma$ es conocida. Y la F siempre está relacionada con cocientes de varianzas o ANOVA."
  },
  {
    "q": "¿Bajo qué condiciones se considera apropiado utilizar una prueba t de Student en lugar de una prueba Z?",
    "opts": [
      "El tamaño muestral es pequeño ($n < 30$).",
      "La desviación estándar poblacional ($\\sigma$) es desconocida y debe estimarse con $S$.",
      "Los datos siguen aproximadamente una distribución Normal.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si el muestreo es de tamaño reducido (pequeño), se usa t. Si $\\sigma$ es desconocido, debemos usar la varianza muestral $S^2$, lo cual nos lleva a la distribución t. Finalmente, si asumimos normalidad, podemos usar ambas, pero t es más conservadora en muestras pequeñas."
  },
  {
    "q": "¿Qué propiedades definen conceptualmente a la distribución F de Fisher?",
    "opts": [
      "Es un cociente de dos variables aleatorias Chi-cuadrado independientes normalizadas.",
      "Se calcula comparando proporciones de varianza entre grupos (ANOVA).",
      "Sus grados de libertad son cruciales y se denotan por $\nu_1$ y $\nu_2$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La definición matemática es un cociente normalizado. Su aplicación principal es la comparación de varianzas o grupos (ANOVA). Los dos grados de libertad son esenciales para su cálculo."
  },
  {
    "q": "¿Qué implicaciones tiene el tamaño del grado de libertad ($\nu$) en las distribuciones $\\chi^2$ y t?",
    "opts": [
      "Un aumento en $\nu$ hace que la distribución se parezca más a una Normal.",
      "Indica el número de variables independientes utilizadas para calcular el estadístico.",
      "Es crítico porque define el índice de corrección por muestreo pequeño.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "En general, cuanto mayor es $\nu$, la distribución tiende a ser más simétrica y se acerca al comportamiento Normal (para ambas). Representa cuántas fuentes de variación o variables independientes contribuyen al cálculo."
  },
  {
    "q": "¿Bajo qué supuestos estadísticos fundamentales se basa el test Chi-cuadrado ($\\chi^2$)?",
    "opts": [
      "Los datos deben provenir de muestras aleatorias y el muestreo debe ser independiente.",
      "Las frecuencias esperadas en cada celda deben ser lo suficientemente grandes (generalmente $\\ge 5$).",
      "Se utiliza para evaluar la independencia entre variables categóricas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres son requisitos. Necesitas aleatoriedad e independencia de muestras; el supuesto de frecuencias esperadas es vital para la validez asintótica; y su uso clásico es testear si las categorías están relacionadas (independencia)."
  },
  {
    "q": "¿Cuáles son los requisitos esenciales para aplicar un Análisis de Varianza (ANOVA) correctamente?",
    "opts": [
      "Los datos deben provenir de muestras aleatorias independientes.",
      "La variable dependiente debe seguir aproximadamente una distribución Normal dentro de cada grupo.",
      "Las varianzas poblacionales de todas las poblaciones que se comparan deben ser iguales (homogeneidad).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "ANOVA requiere: 1) Independencia entre grupos. 2) Distribucionalmente normalidad en los residuos/grupos. Y 3) Homogeneidad de varianzas (homoscedasticidad). Si se cumplen estos tres supuestos, el test F es válido."
  },
  {
    "q": "¿Cuáles son las suposiciones críticas para aplicar correctamente un Análisis de Varianza (ANOVA)?",
    "opts": [
      "Normalidad en las poblaciones subyacentes",
      "Homogeneidad de varianzas (homocedasticidad)",
      "Independencia de las observaciones",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El ANOVA se basa en tres supuestos fundamentales: que los datos provienen de una población Normal ($H_0$), que las varianzas poblacionales son iguales ($\\sigma_i^2 = \\sigma^2$) y que las muestras son independientes entre sí."
  },
  {
    "q": "¿Si los datos provienen de una población Gaussiana y se calcula el estadístico $S/\\sigma$, esta estadística seguirá teóricamente qué distribución?",
    "opts": [
      "t de Student",
      "Chi-cuadrado $\\chi^2$",
      "F de Fisher",
      "Normal Estándar"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La razón entre la desviación muestral $S$ y la poblacional $\\sigma$ es una transformación que se relaciona con el estadístico Chi-cuadrado. Específicamente, $(n-1) S^2 / \\sigma^2 \\sim \\chi^2(n-1)$. Esto permite realizar pruebas de hipótesis sobre varianzas."
  },
  {
    "q": "¿Cuál es la principal diferencia conceptual entre usar $t$ y la Normal estándar en inferencia?",
    "opts": [
      "La distribución t es una generalización de la Normal, válida para muestras pequeñas con $\\sigma$ desconocido",
      "El estadístico $t$ utiliza los grados de libertad ($\nu$) que son cruciales para ajustar las colas pesadas",
      "Si el tamaño muestral es grande ($n>30$), ambas distribuciones se vuelven prácticamente idénticas",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La t fue diseñada justamente para cubrir la incertidumbre de estimar $\\sigma$ con muestras pequeñas. El parámetro clave que ajusta su forma son los grados de libertad ($\nu$)."
  },
  {
    "q": "¿En un contexto de prueba de hipótesis sobre una varianza poblacional $\\sigma^2$, ¿qué se realiza generalmente usando la distribución $\\chi^2$?",
    "opts": [
      "Se formula el estadístico como $ \\frac{(n-1)S^2}{\\sigma_0^2} $",
      "Evalúa si la dispersión observada es significativamente mayor que lo esperado",
      "Permite determinar un intervalo de confianza para la varianza poblacional",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La prueba $\\chi^2$ sobre la varianza sigue el patrón: obtener el estadístico $ \\frac{(n-1)S^2}{\\sigma_0^2} $, interpretarlo como un cuantil de $\\chi^2(n-1)$ y usarlo para construir intervalos o valores p."
  },
  {
    "q": "¿Cuáles condiciones deben cumplirse para considerar los resultados de una prueba estadística altamente fiables?",
    "opts": [
      "La variable dependiente debe seguir una distribución Normal o la muestra debe ser grande por el CLT.",
      "Las observaciones deben ser independientes entre sí.",
      "El modelo subyacente debe tener linealidad y homocedasticidad (varianzas constantes).",
      "Los datos deben estar normalizados antes de cualquier análisis."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para la mayoría de los modelos paramétricos (t, F), necesitamos Normalidad o $n$ grande (CLT), independencia y asumir que la varianza es constante (homocedasticidad)."
  },
  {
    "q": "¿Qué implicación tiene que la distribución F sea un cociente de Chi-cuadrados normalizados?",
    "opts": [
      "Sugiere que los estadísticos de prueba varían por naturaleza en términos cuadráticos.",
      "Permite realizar comparaciones estructuradas de la varianza entre múltiples grupos (ANOVA).",
      "Implica que las variables medidas deben ser independientes y normalmente distribuidas para su uso correcto.",
      "Solo puede calcularse si $\\sigma^2$ es conocido a priori."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La construcción $F = \\frac{\\chi^2_1 / \nu_1}{\\chi^2_2 / \nu_2}$ asegura que su uso está intrínsecamente ligado a comparar varianzas de poblaciones asumidas Normales."
  },
  {
    "q": "¿Qué relaciones matemáticas definen y explican la utilidad de estas tres distribuciones?",
    "opts": [
      "La distribución $t(\nu)$ se puede ver como un caso especial del cociente de Chi-cuadrados normalizados.",
      "El estadístico $F$ es conceptualmente el cociente de dos variables $\\chi^2$ independientes, escaladas por sus grados de libertad.",
      "Cuando los grados de libertad ($\nu$) tienden a infinito, la distribución $t(\nu)$ converge asintóticamente a la Normal estándar $N(0, 1)$.",
      "El estadístico Chi-cuadrado es el único que garantiza la normalidad en cualquier tamaño muestral."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Estas tres distribuciones están profundamente interconectadas: la t se relaciona con F (ya que $t^2 \\propto F$), y crucialmente, $t(\nu) \\to N(0, 1)$ cuando $\nu \\to \\infty$. La opción D es incorrecta porque solo ciertas condiciones garantizan normalidad."
  },
  {
    "q": "¿Cuál de las siguientes interpretaciones sobre la inferencia estadística es fundamental al estudiar estas distribuciones?",
    "opts": [
      "Los intervalos de confianza construidos usando $t$ son más precisos que los construidos con $Z$ cuando el tamaño muestral es pequeño.",
      "La distribución F se basa en hipótesis nulas de igualdad (igualdad entre grupos o igualar varianzas).",
      "El valor p calculado debe compararse siempre con un nivel $\\alpha$ preestablecido, nunca por intuición.",
      "Una alta diferencia entre la media y la mediana puede indicar que los datos son perfectamente normales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "En inferencia: 1) $t$ es preferible cuando no se conoce $\\sigma$. 2) Los tests (como ANOVA o Goodness-of-Fit) siempre operan sobre la hipótesis nula. 3) La interpretación del valor p requiere comparación formal con $\\alpha$."
  },
  {
    "q": "¿Cuáles son las características correctas del comportamiento de la distribución t?",
    "opts": [
      "Es simétrica respecto a su media",
      "Tiene colas más pesadas que la distribución Normal $N(0,1)$",
      "Su valor se aproxima rápidamente a $N(0,1)$ cuando $\nu$ es grande",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La t de Student es simétrica y sus colas son más pesadas que la normal para compensar el uso del estimador $S$. A medida que los grados de libertad ($\nu$) aumentan, la distribución se 'normaliza', convergiendo a la distribución Normal estándar."
  },
  {
    "q": "¿Cuándo se debe considerar usar una distribución Chi-cuadrado en lugar de otras?",
    "opts": [
      "Al realizar pruebas de independencia entre variables categóricas",
      "Para analizar la bondad de ajuste (Goodness of Fit)",
      "Cuando el objetivo es medir la desviación total respecto a un modelo esperado",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las aplicaciones clásicas del $\\chi^2$ son justamente las pruebas de independencia y bondad de ajuste, midiendo cuán diferente es lo observado ($\\text{O}$) de lo esperado ($\\text{E}$). La desviación total (suma de cuadrados) también se relaciona directamente con el concepto de varianza $\\chi^2$."
  },
  {
    "q": "¿Cuáles son propiedades clave de la distribución Chi-cuadrado $\\chi^2(\nu)$?",
    "opts": [
      "Su soporte es $[0, \\infty)$, por lo tanto, solo acepta valores no negativos.",
      "Presenta una asimetría positiva (cola derecha más larga).",
      "Se utiliza frecuentemente para calcular estadísticos de bondad de ajuste en pruebas categóricas.",
      "Es inherentemente simétrica alrededor de $\nu$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El soporte $[0, \\infty)$ implica que solo puede tomar valores positivos. Es asimétrica positiva (su cola se estira hacia la derecha) y es fundamental en estadística para evaluar si una distribución observada coincide con una distribución esperada (Bondad de Ajuste)."
  },
  {
    "q": "¿Cuáles son las características clave de la distribución t de Student $t(\nu)$?",
    "opts": [
      "Es simétrica alrededor de cero",
      "Posee colas más pesadas (leptocúrtica) que la Normal estándar",
      "Se aproxima a la Normal estándar cuando los grados de libertad $\nu$ son grandes",
      "Su forma es siempre más pronunciada que la distribución Normal"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución t es simétrica y tiene colas más pesadas que la Normal. Una propiedad crucial es que a medida que el número de grados de libertad ($\nu$) aumenta, su forma converge progresivamente a la distribución Normal estándar $N(0,1)$."
  },
  {
    "q": "¿Cuáles son los usos o propiedades fundamentales de la distribución F de Fisher?",
    "opts": [
      "Se utiliza para comparar varianzas de dos poblaciones normales",
      "Es un cociente de variables $\\chi^2$ normalizadas (ratio de varianzas)",
      "Es esencial en el análisis de Varianza (ANOVA) para múltiples grupos",
      "Solo es aplicable cuando las muestras son pequeñas"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución F se basa en la comparación de varianzas. Su uso principal radica en ANOVA y en la prueba de igualdad de varianzas entre dos poblaciones normales. Es el cociente de $\\chi^2$ divididos por sus grados de libertad respectivos."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para aplicar correctamente los conceptos de Inferencia Paramétrica?",
    "opts": [
      "La variable debe seguir una distribución conocida (ej., Normal)",
      "Se debe asegurar que las variables medidas sean independientes entre sí",
      "Se requiere la estimación del parámetro poblacional mediante muestreo aleatorio",
      "Los datos deben ser categóricos"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La inferencia paramétrica asume previamente una distribución específica (como la Normal). Además, es crucial que las observaciones sean independientes y que el proceso de toma de muestra haya sido aleatorio para garantizar la validez de los estimadores."
  },
  {
    "q": "¿Qué elementos describen correctamente a la distribución t de Student $t(\nu)$?",
    "opts": [
      "Su media teórica siempre es cero",
      "Sus grados de libertad $\nu$ controlan su cola y forma",
      "Es útil cuando se estima la desviación estándar poblacional con muestras pequeñas ($n<30$)",
      "Asume que las varianzas son iguales (homocedasticidad)"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución t es simétrica sobre cero. Los grados de libertad ($\nu$) determinan su 'pesadez' en colas: cuantos más pequeños $\nu$, más pesadas las colas y más dispersos los valores esperados. Es particularmente útil cuando se desconoce la desviación estándar poblacional."
  },
  {
    "q": "¿Cuáles son errores comunes o conceptos erróneos sobre el uso de $\\chi^2$?",
    "opts": [
      "Asumir que $\\chi^2$ es una distribución simétrica",
      "Confundirlo con la variable aleatoria $X^2$ (cuadrado de Normal)",
      "Utilizar sus grados de libertad incorrectos en las pruebas de independencia",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los errores comunes incluyen asumir que $\\chi^2$ es simétrica (es asimétrica positiva), confundirlo con $X^2$ y no utilizar los grados de libertad correctos ($\nu$) al calcular o interpretar la estadística."
  },
  {
    "q": "¿Qué deben cumplirse para aplicar correctamente un análisis ANOVA?",
    "opts": [
      "La variable dependiente debe ser continua",
      "Los grupos comparados deben provenir de poblaciones normales",
      "Las varianzas poblacionales asociadas a cada grupo deben ser iguales (homogeneidad)",
      "El tamaño muestral debe ser uniforme en todos los grupos"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "ANOVA requiere que la variable sea continua y que se cumplan dos supuestos clave: normalidad dentro de cada grupo y homogeneidad de varianzas entre los grupos. Aunque el ANOVA es robusto a pequeñas violaciones, estos son sus supuestos ideales."
  },
  {
    "q": "¿Cuáles definen correctamente las relaciones o equivalencias entre estas distribuciones?",
    "opts": [
      "La distribución t se convierte en Normal cuando $\nu \\to \\infty$",
      "El estadístico F puede verse como la relación entre dos varianzas estimadas",
      "Los grados de libertad son parámetros clave que determinan la forma",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Sí, existe una convergencia (t hacia N) y el concepto de F es precisamente comparar cocientes de variances. Los grados de libertad ($\nu$) no son simplemente un número; son parámetros cruciales que definen la dispersión y forma específica de cada distribución."
  },
  {
    "q": "¿Qué implica conceptualmente trabajar con cuantiles en estas distribuciones?",
    "opts": [
      "Permite estimar el valor X que corresponde a un nivel de probabilidad dado",
      "Es fundamental para realizar pruebas de hipótesis basadas en rangos (ej., Rango Normalizado)",
      "Ayuda a determinar intervalos de confianza basados en la percentila",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un cuantil ($q_p$) responde: '¿Qué valor $x$ deja un porcentaje $p$ de probabilidad acumulada?' Es esencial para calcular los límites de los Intervalos de Confianza y realizar pruebas Z/t."
  },
  {
    "q": "¿Cuáles son las implicaciones de que la distribución t tenga colas más pesadas que Normal?",
    "opts": [
      "Indica que se debe tener cuidado con el uso de la media muestral",
      "Permite a los estadísticos manejar mejor los 'outliers' extremos en muestras pequeñas",
      "Sugiere que la varianza muestral puede ser una estimación poco fiable",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las colas pesadas significan que es más probable observar valores extremadamente alejados de la media (outliers) en comparación con lo predicho por la Normal. Esto obliga a usar t en lugar de Z para muestras pequeñas."
  },
  {
    "q": "¿Qué cálculos son apropiados cuando se realiza una prueba de Bondad de Ajuste ($\\chi^2$)?",
    "opts": [
      "Comparar las frecuencias observadas vs. frecuencias esperadas teóricamente",
      "Determinar la probabilidad de un evento que no sigue una distribución conocida",
      "Verificar si los datos siguen la distribución categórica propuesta",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La prueba de Bondad de Ajuste compara cómo se distribuyen las frecuencias *observadas* en su muestra con las frecuencias *esperadas* según un modelo teórico (ej., dado que el dado es justo)."
  },
  {
    "q": "¿Qué afirmaciones son correctas respecto a la distribución Chi-cuadrado $\\chi^2(\nu)$?",
    "opts": [
      "Es asimétrica con cola positiva",
      "Su soporte está en el intervalo $[0, \\infty)$",
      "Es la suma de los cuadrados de $N$ variables Normales estándar independientes",
      "Siempre tiene media igual a 1"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La $\\chi^2$ es inherentemente positiva y asimétrica. Su definición clave es la suma de cuadrados de variables Normales estandarizadas."
  },
  {
    "q": "¿Cuáles son propiedades fundamentales que caracterizan a la distribución t de Student $t(\nu)$?",
    "opts": [
      "Es una distribución simétrica",
      "Sus colas son más pesadas que la Distribución Normal (especialmente para $\nu$ pequeños)",
      "El límite cuando los grados de libertad $\nu \\to \\infty$ es la Distribución Normal estándar N(0, 1)",
      "Su varianza es siempre igual a $N^2$"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La 'cola pesada' del t permite manejar mejor las desviaciones extremas con muestras pequeñas. A medida que $\nu \\to \\infty$, la distribución se aproxima a la Normal estándar."
  },
  {
    "q": "¿Cuáles de los siguientes conceptos son cruciales al aplicar pruebas estadísticas paramétricas?",
    "opts": [
      "Los datos deben seguir una distribución Normal",
      "Se asume independencia entre las observaciones",
      "La varianza de la población debe ser conocida (o poblacional)",
      "El tamaño muestral $n$ debe ser mayor a 30"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las pruebas t y F requieren asumir Normalidad e independencia. Si se conoce la varianza poblacional, generalmente se usan otras pruebas; de lo contrario, se estima con la muestra."
  },
  {
    "q": "¿Qué caracteriza o define adecuadamente a la distribución F de Fisher $F(\nu_1, \nu_2)$?",
    "opts": [
      "Se utiliza para comparar dos medias en diferentes grupos",
      "Es el cociente de dos variables Chi-cuadrado independientes y normalizadas",
      "Su uso principal está asociado con el Análisis de Varianza (ANOVA)",
      "Requiere que la varianza poblacional sea desconocida"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La F se usa cuando comparamos proporciones de varianzas o medias en múltiples grupos (ANOVA). Su definición es estrictamente un cociente normalizado de $\\chi^2$."
  },
  {
    "q": "¿Cuáles son las condiciones o supuestos que deben cumplirse para aplicar correctamente una prueba t de dos muestras independientes?",
    "opts": [
      "Las muestras deben ser aleatorias y la variable continua",
      "La varianza poblacional debe ser igual (homogeneidad)",
      "El tamaño muestral $n$ debe ser suficientemente grande ($\\geq 30$)",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Aunque idealmente se requiere Normalidad, el teorema del límite central ayuda. Sin embargo, la homogeneidad de varianzas es crucial para la prueba t estándar (pooled variance)."
  },
  {
    "q": "¿Qué elementos son fundamentales al interpretar los resultados de una prueba de hipótesis?",
    "opts": [
      "Se debe comparar el valor p con un nivel de significancia $\\alpha$ predefinido",
      "El estadístico calculado (t, F, etc.) se compara con valores críticos de la distribución apropiada",
      "La decisión estadística siempre implica rechazar la Hipótesis Nula ($H_0$) si $p < \\alpha$",
      "Un valor p grande indica que hay evidencia fuerte a favor de la hipótesis alternativa"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El objetivo es determinar si el valor observado del estadístico cae en la región crítica. Si $p < \\alpha$, rechazamos $H_0$. Un $p$ grande no implica ausencia de diferencia."
  },
  {
    "q": "¿Cuáles son las implicaciones o limitaciones al utilizar la distribución t versus la Normal estándar?",
    "opts": [
      "La t es más robusta ante valores atípicos (outliers) en muestras pequeñas",
      "El uso de $t$ con $\nu$ muy grande genera errores por sobreestimación de significancia",
      "Para $\nu > 30$, la diferencia entre $t$ y $N(0,1)$ es estadísticamente insignificante",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La principal ventaja del t es su capacidad para compensar las varianzas desconocidas con muestras pequeñas. A medida que $\nu$ aumenta, se asemeja a la Normal."
  },
  {
    "q": "¿Cuáles son las mejores prácticas al seleccionar la prueba estadística adecuada?",
    "opts": [
      "Siempre verificar primero el cumplimiento de los supuestos paramétricos",
      "Considerar alternativas no paramétricas si los datos violan severamente la Normalidad o la homocedasticidad",
      "Si $n$ es muy pequeño ($<10$), la robustez y la inspección gráfica son prioritarias",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La estadística requiere verificar supuestos (Normalidad/Homocedasticidad). Si fallan, se deben usar alternativas no paramétricas. La inspección visual es siempre el paso más importante."
  },
  {
    "q": "¿Cuáles de las siguientes distribuciones tienen colas más pesadas que la distribución Normal N(0, 1)?",
    "opts": [
      "Distribución t de Student t($\nu$)",
      "Distribución F de Fisher F($\nu_1, \nu_2$)",
      "Distribución Chi-cuadrado $\\chi^2(\nu)$",
      "Distribución Exponencial"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Tanto la distribución t de Student (especialmente para pocos grados de libertad) como la distribución Chi-cuadrado tienen colas más pesadas que la Normal. La F también lo hace en términos de varianza/dispersión comparada con sus componentes normales."
  },
  {
    "q": "¿Cuáles son las principales limitaciones al usar muestras muy pequeñas ($n<15$) en la inferencia estadística?",
    "opts": [
      "La distribución t debe ser utilizada en lugar de Z.",
      "Existe un alto riesgo de que los supuestos de normalidad sean violados.",
      "El poder estadístico para detectar efectos pequeños es bajo.",
      "Se recomienda fusionar las variables categóricas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Con muestras pequeñas, la t-Student es obligatoria en lugar de Z. También aumenta el riesgo de violación de supuestos (como normalidad) y reduce el poder estadístico para rechazar la hipótesis nula si el efecto real es pequeño."
  },
  {
    "q": "¿Qué se puede afirmar sobre la relación entre las tres distribuciones ($\\chi^2, t, F$)?",
    "opts": [
      "La distribución $t(\nu)$ converge a $N(0, 1)$ cuando $\nu \\to \\infty$.",
      "La distribución $F(1, \nu)$ es equivalente a la varianza normalizada de $t(\nu)$.",
      "El estadístico $F$ se puede interpretar como el cociente de dos variables Chi-cuadrado independientes.",
      "Las tres distribuciones son indistinguibles en el contexto del análisis avanzado."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Es correcto que t($\nu$) $\\to N(0, 1)$ cuando $\nu \\to \\infty$. Además, $F$ es definido como el cociente de dos variables Chi-cuadrado normalizadas e independientes. La relación entre $t$ y $F$ se da precisamente porque la varianza del estadístico t sigue una distribución $F(1, \nu)$."
  },
  {
    "q": "¿Cuáles son propiedades esenciales que definen la distribución t de Student?",
    "opts": [
      "Es simétrica alrededor de cero.",
      "Su uso requiere estimar la desviación estándar poblacional con datos muestrales ($s$).",
      "Tiene colas más pesadas que la Normal N(0, 1).",
      "Sus grados de libertad ($\nu$) son simplemente el tamaño de la muestra $n$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La t-Student es simétrica y tiene colas más pesadas. Su uso requiere estimar $\\sigma$ con $s$. Los grados de libertad no son $n$, sino $n-1$ (o la base del cálculo usado)."
  },
  {
    "q": "¿Cuáles deben considerarse los supuestos al aplicar cualquier prueba paramétrica que involucre múltiples muestras?",
    "opts": [
      "Normalidad de los residuos.",
      "Homogeneidad de varianzas (homoscedasticidad).",
      "Independencia entre las observaciones.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres son supuestos fundamentales para la validez de pruebas como ANOVA y t-test: que los datos se distribuyan normalmente (normalidad), que las varianzas sean iguales en las poblaciones comparadas (homogeneidad) y que cada observación sea independiente."
  },
  {
    "q": "Respecto a las propiedades fundamentales de la distribución t($\\nu$), ¿cuál es una afirmación correcta?",
    "opts": [
      "Es simétrica alrededor de cero",
      "Sus colas son más pesadas que la Normal estándar",
      "Se acerca a la Normal cuando los grados de libertad $\\nu$ aumentan indefinidamente",
      "Solo puede calcularse con muestras muy grandes"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La t es simétrica y tiene colas más pesadas. El límite crucial es que tiende a N(0,1) conforme $\\nu \\to \\infty$. No hay restricción de tamaño muestral; es ideal para muestras pequeñas bajo supuestos normales."
  },
  {
    "q": "Considerando las relaciones entre distribuciones estadísticas: ¿Cuál afirmación sobre el cociente de Chi-cuadrados normalizados sigue siendo cierta?",
    "opts": [
      "Sigue una distribución F($\\nu_1$, $\\nu_2$) con grados de libertad apropiados",
      "Es la base para realizar ANOVA (Análisis de Varianza)",
      "Se utiliza para comparar diferentes grupos y evaluar su variabilidad",
      "Si las muestras son muy grandes, tiende a seguir N(0, 1)"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución F es la generalizadora que relaciona $\\chi^2$ en el contexto de ANOVA. Se usa para comparar varianzas y evaluar el ajuste del modelo en múltiples grupos."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones describe correctamente una aplicación o propiedad de la distribución F de Fisher $F(\\nu_1, \\nu_2)$?",
    "opts": [
      "Se utiliza directamente para calcular probabilidades asociadas a la desviación estándar poblacional $\\sigma$.",
      "Es fundamental en el Análisis de Varianza (ANOVA) cuando se comparan medias de múltiples grupos.",
      "Representa el cociente de dos variables Chi-cuadrado normalizadas por sus respectivos grados de libertad.",
      "Su uso principal es determinar si las muestras provienen de poblaciones con distribuciones Normales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución F se define como un cociente de $\\chi^2$ (opción 2). Su aplicación más conocida y potente es el ANOVA, que compara varianzas o medias entre grupos (opción 1), lo cual la hace esencial en inferencia. Aunque no *determina* la Normalidad, su uso presupone esta condición."
  },
  {
    "q": "¿Qué propiedades definen a las distribuciones Chi-cuadrado $\\chi^2$, t de Student $t(\\nu)$ y F de Fisher $F(\\nu_1, \\nu_2)$?",
    "opts": [
      "El estadístico F es un cociente de varianzas estimadas bajo la hipótesis de igualdad de varianzas.",
      "La distribución $t$ se utiliza cuando el tamaño muestral es pequeño (n < 30) y $\\sigma^2$ es desconocido.",
      "La distribución de varianzas muestrales bajo Normalidad sigue una distribución $\\chi^2$ con $n-1$ grados de libertad.",
      "El valor $\\chi^2_p = \\sum_{i=1}^k x_i^2$ donde $x_i \\sim N(0, 1)$ son variables independientes."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Opción 1: F se usa para comparar varianzas. Opción 2: t es el reemplazo de la normal cuando n es pequeño y $\\sigma^2$ es desconocido. Opción 4: Bajo Normalidad, $(n-1)S^2/\\sigma^2 \\sim \\chi^2(n-1)$ (o más precisamente $S^2/\\sigma^2$ si se usan varianzas muestrales), lo cual confirma la relación con $\\chi^2$. La opción 3 es incorrecta porque un estadístico de bondad de ajuste Chi-cuadrado usa diferencias de frecuencias, no necesariamente una suma simple de cuadrados."
  },
  {
    "q": "¿Cómo interactúan las distribuciones Normal, t y Chi-cuadrado en el contexto de la inferencia estadística?",
    "opts": [
      "La distribución $t$ es esencialmente una normalizada por la varianza poblacional desconocida.",
      "La distribución $\\chi^2$ provee la base para calcular pruebas de hipótesis sobre proporciones o independencia.",
      "Los estadísticos F son un puente entre las varianzas, siendo el cociente de dos variables Normales en contextos específicos.",
      "Todas estas distribuciones requieren que los datos subyacentes sigan una población estrictamente Gaussiana."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La relación es compleja: $t$ modifica la normal por estimar $\\sigma$. $\\chi^2$ se usa para pruebas de conteo/independencia. $F$ compara varianzas (cociente). Aunque idealmente se prefiere Normalidad, no *todas* las distribuciones requieren que los datos sean estrictamente Gaussianos para ser aplicadas en sus contextos específicos."
  },
  {
    "q": "¿Cuál es la interpretación más precisa del concepto de 'grados de libertad' ($\\nu$) en estas tres distribuciones?",
    "opts": [
      "Determinan el número de variables independientes disponibles para estimar los parámetros de la población.",
      "Indican cuántos datos se han utilizado en el cálculo estadístico, restando siempre 1 por cada parámetro estimado.",
      "Definen la forma exacta y la cola pesada o delgada que tendrá la distribución específica (t, $\\chi^2$, F).",
      "Son un valor arbitrario de diseño para asegurar la potencia estadística deseada."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los grados de libertad son esenciales: controlan el número de variables libres (opción 1), se calculan restando parámetros estimados (opción 2) y su función principal es modificar la forma específica de las colas de $t$, $\\chi^2$ y $F$ (opción 3). La opción 4 es incorrecta."
  },
  {
    "q": "Si usted está realizando un ANOVA para comparar tres grupos, ¿qué distribución estadística será el estadístico de prueba fundamental y por qué?",
    "opts": [
      "La distribución t de Student, porque compara la media del grupo con el promedio general.",
      "La distribución $\\chi^2$, pues se usa para evaluar cuán dispersas están las frecuencias observadas en cada grupo.",
      "La distribución F de Fisher, ya que es diseñada específicamente para comparar varianzas y medias relativas entre múltiples grupos.",
      "La distribución Normal estándar, dado que el Teorema del Límite Central garantiza la normalidad."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "En ANOVA (comparación de $\\ge 3$ medias), se utiliza F. Opción 2: Se usa $\\chi^2$ para pruebas de independencia o bondad de ajuste (tablas de contingencia). Opción 3: La distribución F es la herramienta correcta para comparar varianzas y evaluar significancia entre múltiples grupos."
  },
  {
    "q": "¿Cuál es la principal diferencia conceptual entre usar una prueba $t$ vs. una prueba $z$ (Normal estándar) para evaluar la media poblacional $\\mu$?",
    "opts": [
      "La prueba z requiere conocer $\\sigma$, mientras que la prueba t solo necesita $s$.",
      "La prueba t funciona como una aproximación robusta de la Normal cuando se desconoce la desviación estándar poblacional.",
      "El uso de t ajusta los grados de libertad, haciendo la distribución más conservadora (colas más pesadas) para muestras pequeñas.",
      "En esencia, ambas pruebas son idénticas y solo cambia el nombre del estadístico."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La diferencia clave es el conocimiento de $\\sigma$. La prueba $t$ actúa como un 'corrector' o 'ajuste' a la distribución Normal (opción 1), lo cual se logra mediante el uso de los grados de libertad y las colas más pesadas en muestras pequeñas (opción 2). Ambas son conceptualmente similares, pero no idénticas."
  },
  {
    "q": "¿Qué acción debe tomar un estadístico si sospecha que sus datos violan la condición de Normalidad para una prueba $t$ o $\\chi^2$?",
    "opts": [
      "Transformar los datos (ej. logaritmo) o considerar pruebas no paramétricas alternativas.",
      "Aumentar el tamaño muestral hasta alcanzar un valor muy grande, mitigando así el problema.",
      "Ignorar la violación de Normalidad si el tamaño muestral $n > 30$, confiando en el Teorema del Límite Central (TLC).",
      "Asumir que los datos son normales y continuar con la prueba, ya que las distribuciones se ajustan bien."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si hay violación de Normalidad: Opción 1 es el método estadístico más correcto (transformación o usar Mann-Whitney/Kruskal-Wallis). Opción 3 es parcialmente correcta (TLC ayuda con la media, pero no garantiza la validez en todas las pruebas), y Opción 2 solo pospone el problema sin corregirlo fundamentalmente. El enfoque debe ser siempre la corrección de datos o métodos."
  },
  {
    "q": "¿Cuál de los siguientes escenarios requiere intrínsecamente el uso del estadístico F?",
    "opts": [
      "Estimar intervalos de confianza para una proporción poblacional ($p$).",
      "Realizar un análisis que compare la varianza entre dos poblaciones con independencia.",
      "Evaluar si las relaciones entre variables son linealmente dependientes (ej. coeficiente de correlación $R^2$ en regresión).",
      "Determinar el número mínimo de observaciones necesarias para alcanzar una potencia estadística dada."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución F es fundamentalmente un cociente de varianzas o residuos de modelos. Se usa directamente para comparar la dispersión (varianza) entre grupos, siendo crucial en ANOVA y pruebas comparativas de varianzas."
  },
  {
    "q": "¿Cuáles son propiedades fundamentales de la distribución Chi-cuadrado $\\chi^2(\nu)$?",
    "opts": [
      "Es una distribución simétrica alrededor de su media.",
      "Su soporte está limitado a los valores positivos [0, \\infty).",
      "Su media es igual a sus grados de libertad ($\nu$).",
      "Representa el cociente de dos varianzas normales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La $\\chi^2$ tiene soporte en $[0, \\infty)$, es asimétrica positiva. Su media es $\\mathbb{E}[\\chi^2] = \nu$, y su varianza es $\\text{Var}[\\chi^2] = 2\nu$. No es simétrica."
  },
  {
    "q": "¿Qué afirmaciones son ciertas respecto a la distribución t de Student $t(\nu)$?",
    "opts": [
      "Es una distribución simétrica alrededor de cero.",
      "Sus colas son más pesadas que las de la Normal estándar N(0,1).",
      "Conforme $\nu \\to \\infty$, la distribución $t(\nu)$ converge a la distribución Normal Estándar N(0,1).",
      "Su varianza es siempre 1, independientemente de los grados de libertad."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La $t$ es simétrica y tiene colas más pesadas (lo que implica mayor probabilidad de valores extremos) que la Normal cuando $\nu$ es bajo. A medida que $\nu \\to \\infty$, se vuelve indistinguible de N(0,1). La varianza es $\\text{Var}[t] = \\frac{\nu}{\nu-2}$ (si $\nu > 2$), no siempre 1."
  },
  {
    "q": "¿En el contexto de la estadística inferencial, ¿cuáles son aplicaciones o conceptos correctos sobre la distribución F de Fisher $F(\nu_1, \nu_2)$?",
    "opts": [
      "Se utiliza para comparar las varianzas de dos poblaciones normales.",
      "Es el cociente de dos variables Chi-cuadrado independientes y normalizadas.",
      "En ANOVA (Análisis de Varianza), prueba si la razón de varianzas entre grupos es significativa.",
      "Su valor esperado siempre debe ser mayor que 1."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución $F$ se define como el cociente de dos $\\chi^2$ normalizados y es fundamental en ANOVA. Su uso primario es comparar la razón de varianzas (por ejemplo, comparando si las varianzas son iguales o no)."
  },
  {
    "q": "¿Al aplicar las pruebas estadísticas basadas en estas distribuciones, ¿qué afirmaciones son conceptualmente correctas?",
    "opts": [
      "Una desviación significativa del valor crítico implica rechazo de la hipótesis nula.",
      "Los grados de libertad (GL) determinan completamente la forma de la distribución elegida.",
      "Si se viola la suposición de normalidad, el uso de $t$ o $F$ puede ser inválido.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La significancia estadística depende de comparar la prueba calculada con los valores críticos definidos por GL. Los grados de libertad son cruciales porque determinan la forma exacta (curva) de las distribuciones $t$, $\\chi^2$ y $F$. La normalidad es una suposición crítica para estas pruebas paramétricas."
  },
  {
    "q": "¿Respecto a los cálculos estadísticos basados en varianzas muestrales ($S^2$), ¿cuáles son correctas?",
    "opts": [
      "Se sabe que $\\frac{(n-1)S^2}{\\sigma^2}$ sigue una distribución Chi-cuadrado con $n-1$ grados de libertad.",
      "La prueba F es la mejor herramienta para determinar si las varianzas poblacionales varían entre grupos, comparando $F = \\frac{S_1^2}{S_2^2}$.",
      "El uso de $\\chi^2$ nos permite estimar tanto la dispersión como el sesgo (skewness) del conjunto de datos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La razón mencionada es la fórmula clásica para derivar $S^2/\\sigma^2 \\sim \\chi^2$. La prueba F está diseñada exactamente para comparar varianzas. Finalmente, $\\chi^2$ se calcula a partir de las sumas de cuadrados, que son medidas de dispersión."
  },
  {
    "q": "¿Bajo qué condiciones asumimos correctamente el uso de estas pruebas?",
    "opts": [
      "Los datos deben ser generados por un proceso con varianza constante (homocedasticidad).",
      "Para usar la prueba $t$, se debe asumir que la población es Normal y que la desviación estándar $\\sigma$ es desconocida.",
      "La prueba $F$ requiere que las variables sean independientes de los grupos considerados.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Estas son tres condiciones asumidas en el contexto clásico (ANOVA/T-test): homocedasticidad para la F, normalidad y $\\sigma$ desconocida para la $t$, e independencia para la F. Cumplir estas suposiciones es vital para la validez inferencial."
  },
  {
    "q": "¿Cuáles son las características de la distribución Chi-cuadrado $\\chi^2(\\nu)$?",
    "opts": [
      "Su soporte siempre es $[0, \\infty)$",
      "Representa la suma de cuadrados de variables normales estándar independientes",
      "Es sensible a cambios en los grados de libertad",
      "Es simétrica alrededor de su media ($\\\\nu$)"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución $\\chi^2$ es siempre positiva (soporte $[0, \\infty)$) y su valor se basa en sumar los cuadrados de variables normales estándar. No es simétrica."
  },
  {
    "q": "¿Cuáles son las aplicaciones principales de la distribución F de Fisher?",
    "opts": [
      "Comparar si dos poblaciones tienen medias iguales",
      "Probar la igualdad de varianzas entre múltiples grupos",
      "Calcular coeficientes de correlación robustos (ANOVA)",
      "Determinar intervalos de confianza para proporciones poblacionales"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución F es esencial en el ANOVA para comparar varianzas o medias de más de dos grupos. Usar la comparación de medias es insuficiente sin saber que se están comparando múltiples grupos (ANOVA)."
  },
  {
    "q": "¿Qué condiciones se deben considerar al usar la distribución t de Student?",
    "opts": [
      "El tamaño muestral ($n$) debe ser pequeño (generalmente $n<30$)",
      "La población debe seguir una distribución aproximadamente normal",
      "Se usa cuando hay sospecha de que la desviación estándar poblacional ($\\sigma$) es desconocida y se estima con la muestra",
      "Es la elección preferida si el coeficiente de variación es muy alto"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La t fue diseñada para muestras pequeñas (aunque funciona bien con $n$ grandes) cuando $\\sigma$ es desconocido. El requisito de normalidad sigue siendo clave."
  },
  {
    "q": "¿Cuáles son las limitaciones de usar la distribución Normal estándar en lugar de t de Student?",
    "opts": [
      "Produce valores críticos incorrectos si el tamaño muestral es pequeño",
      "No considera la incertidumbre adicional al estimar $\\sigma$ con $S$",
      "Solo puede manejar variables continuas",
      "Asume que hay mucha variabilidad entre grupos"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuando se usa $S$ en lugar de $\\sigma$, se introduce más varianza en el estadístico t. La opción 0 y 2 describen esta limitación fundamental."
  }
];;
