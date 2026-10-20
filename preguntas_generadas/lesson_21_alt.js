// Leccion 21 — 180 preguntas alternativas
// Generadas con gemma4 el 2026-07-04 14:42
// Distribucion: 60/60/60 (1c/2c/3c)
window.LESSON_QUESTIONS_ALT = window.LESSON_QUESTIONS_ALT || {};
window.LESSON_QUESTIONS_ALT[21] = [
  {
    "q": "¿Cuál es la hipótesis nula ($H_0$) que se contrasta con un ANOVA de un factor?",
    "opts": [
      "$H_0: \\mu_1 = \\mu_2 = ... = \\mu_k$",
      "Todos los grupos tienen varianzas iguales.",
      "El coeficiente de correlación es nulo ($\\rho=0$).",
      "La distribución de datos sigue una normalidad perfecta."
    ],
    "c": [
      0
    ],
    "exp": "En el ANOVA univariado, la hipótesis nula establece que las medias poblacionales de todos los grupos ($k$) son iguales. Es decir, no hay diferencias significativas entre ellas. Los otros supuestos (varianzas iguales) son importantes, pero la $H_0$ principal es sobre la igualdad de medias."
  },
  {
    "q": "¿Cuál debe cumplirse para que el Test $\\chi^2$ de independencia sea válido?",
    "opts": [
      "Las frecuencias esperadas ($E_{ij}$) en cada celda deben ser mayores o iguales a 5.",
      "Los datos deben provenir de variables categóricas nominales.",
      "El tamaño muestral debe ser grande (N $\\ge$ 30).",
      "La distribución de los residuos debe seguir una normalidad."
    ],
    "c": [
      0
    ],
    "exp": "Aunque el tamaño muestral grande ayuda, la condición crítica para la validez del test $\\chi^2$ es que las frecuencias esperadas (calculadas bajo $H_0$) sean adecuadamente grandes ($\\ge 5$) en la mayoría de las celdas. Esto asegura que la distribución aproximada sea normal."
  },
  {
    "q": "¿Cuándo se debe considerar utilizar el test Kruskal-Wallis?",
    "opts": [
      "Cuando los datos son ordinales o no cumplen con la suposición de normalidad y hay un factor independiente. ",
      "Como alternativa a ANOVA cuando las muestras son independientes.",
      "Cuando solo se está comparando una variable continua entre dos grupos (t-test).",
      "Si se detecta falta de esfericidad en el diseño."
    ],
    "c": [
      0
    ],
    "exp": "Kruskal-Wallis es la alternativa no paramétrica a ANOVA de un factor. Se utiliza cuando los datos son independientes, pero violan el supuesto de normalidad o de igualdad de varianzas (homoscedasticidad)."
  },
  {
    "q": "¿Cuál representa matemáticamente la Suma de Cuadrados Dentro de Grupos ($SCR$)?",
    "opts": [
      "$\\sum_{i=1}^{k} \\sum_{j=1}^{n_i}(X_{ij} - \\bar{X}_{i.} )^2$",
      "$SCT = \\sum (X_{ij} - \\bar{X.})^2$",
      "$SCE / (N-k)$",
      "$\\sum (\\bar{X}_{i.} - \\bar{X.})^2$"
    ],
    "c": [
      0
    ],
    "exp": "La $SCR$ mide la variabilidad residual o el error, calculando la suma de cuadrados para cada punto de dato respecto a la media de su propio grupo ($\\bar{X}_{i.}$), sumado sobre todos los grupos ($k$). Esto refleja lo que queda después de explicar la variación por los grupos."
  },
  {
    "q": "¿Cuál es el propósito principal de aplicar una corrección Bonferroni?",
    "opts": [
      "Controlar la Tasa de Error Tipo I (Error Familiar) al realizar múltiples comparaciones post-hoc.",
      "Ajustar los grados de libertad cuando se viola el supuesto de esfericidad en medidas repetidas.",
      "Transformar datos normales a distribución de Poisson para análisis de conteo.",
      "Corregir la correlación excesiva entre variables dependientes."
    ],
    "c": [
      0
    ],
    "exp": "Al realizar múltiples comparaciones (post-hoc, $m$ pruebas), el riesgo acumulado de rechazar $H_0$ por error (Error Tipo I) aumenta. Bonferroni corrige esto ajustando el nivel de significancia global $\\alpha_{adj} = \\alpha/m$ para mantener el control del Error Familiar."
  },
  {
    "q": "¿Qué tipo de análisis se realiza cuando se comparan tres o más variables categóricas?",
    "opts": [
      "Se utiliza un Test Chi-cuadrado de independencia.",
      "ANOVA es inapropiado, ya que requiere datos continuos. ",
      "La variable dependiente debe ser continua para usar cualquier test ANOVA.",
      "El análisis siempre debe ser transformado logarítmicamente."
    ],
    "c": [
      0
    ],
    "exp": "Cuando se tienen dos o más variables categóricas (por ejemplo, sexo y preferencia política), el Test $\\chi^2$ de independencia es la herramienta adecuada para determinar si existe asociación entre ellas. Su resultado compara frecuencias observadas vs esperadas."
  },
  {
    "q": "¿Qué tipo de diseño requiere evaluar primero el supuesto de Esfericidad?",
    "opts": [
      "Medidas Repetidas (ANOVA intra-sujetos).",
      "Diseño factorial con factores independientes.",
      "Test $\\chi^2$ de bondad de ajuste.",
      "Comparaciones múltiples post-hoc."
    ],
    "c": [
      0
    ],
    "exp": "La esfericidad es un supuesto clave en el ANOVA de medidas repetidas. Indica que la varianza de las diferencias entre pares de tratamientos es constante, sin importar qué par se compare. Si falla, se aplican correcciones (Greenhouse-Geisser o Huynh-Feldt)."
  },
  {
    "q": "¿Qué condición debe revisarse al interpretar un Test $\\chi^2$?",
    "opts": [
      "Verificar que las frecuencias observadas sean lo suficientemente grandes.",
      "Asegurarse de que el número de categorías no exceda 10. ",
      "Confirmar la independencia entre las variables analizadas.",
      "Evaluar si los datos provienen de una distribución normal."
    ],
    "c": [
      0
    ],
    "exp": "Al interpretar $\\chi^2$, debemos verificar que (1) las frecuencias observadas no sean demasiado bajas (lo ideal es $E_{ij} \\ge 5$) y (2) la hipótesis de independencia es el objetivo del test. La normalidad solo aplica a los datos continuos, no al conteo categórico."
  },
  {
    "q": "¿Qué pruebas son consideradas alternativas no paramétricas para ANOVA?",
    "opts": [
      "Kruskal-Wallis (para factores independientes).",
      "Friedman (para medidas repetidas).",
      "Test t de Student (siempre, ya que es más robusto).",
      "ANOVA de varianzas dirigidas."
    ],
    "c": [
      0
    ],
    "exp": "Kruskal-Wallis y Friedman son las alternativas no paramétricas directas. Se usan cuando se violan supuestos críticos (como la normalidad o la esfericidad), pero mantienen el propósito de comparar grupos."
  },
  {
    "q": "¿Qué representa el estadístico $F$ calculado en ANOVA?",
    "opts": [
      "La razón entre la varianza explicada y la no explicada",
      "El cociente entre Suma de Cuadrados Entre y grados de libertad dentro",
      "Una medida de correlación lineal entre grupos",
      "Solo es válido si los datos son normales"
    ],
    "c": [
      0
    ],
    "exp": "Estadísticamente, el ratio $F$ se define como la razón entre las varianzas entre grupos (CM_entre) y las varianzas dentro de los grupos (CM_dentro). Indica qué proporción de la variación total es atribuible al factor. La fórmula clave es: $F = \\frac{MS_{Entre}}{MS_{Dentro}}$."
  },
  {
    "q": "¿Cuál es el propósito fundamental del Test $\\chi^2$ de independencia?",
    "opts": [
      "Evaluar la relación entre dos variables categóricas",
      "Determinar si las frecuencias observadas se ajustan a una distribución teórica esperada",
      "Comparar medias poblacionales de grupos independientes",
      "Verificar la linealidad en datos continuos"
    ],
    "c": [
      0
    ],
    "exp": "El test $\\chi^2$ de independencia se utiliza en tablas de contingencia para contrastar si existe asociación o dependencia estadística entre dos variables categóricas. Si el valor $p$ es bajo, rechazamos la hipótesis nula de independencia."
  },
  {
    "q": "¿Cuál es el test no paramétrico más adecuado como alternativa a ANOVA de un factor?",
    "opts": [
      "Kruskal-Wallis H",
      "Teste estadístico de Friedman",
      "Test de Student t de dos muestras",
      "ANOVA de medidas repetidas"
    ],
    "c": [
      0
    ],
    "exp": "Cuando se sospecha que la variable dependiente no sigue una distribución normal, o si los datos son ordinales, el test adecuado para reemplazar el ANOVA unidireccional es Kruskal-Wallis. Este prueba compara las medianas (o distribuciones de rangos) de tres o más grupos."
  },
  {
    "q": "¿Qué sucede con la validez de un ANOVA cuando se viola significativamente el supuesto de homocedasticidad?",
    "opts": [
      "Las p-valores y los intervalos de confianza pierden fiabilidad",
      "Los resultados $F$ serán artificialmente bajos, llevando a errores tipo II",
      "La potencia estadística disminuye notablemente sin afectar la magnitud del error Tipo I",
      "Es irrelevante siempre y cuando se cumpla la normalidad"
    ],
    "c": [
      0
    ],
    "exp": "Si las varianzas no son homogéneas (heteroscedasticidad), el estadístico $F$ puede estar sesgado, lo que afecta directamente la significación de los resultados. Los p-valores pierden fiabilidad, y esto especialmente impacta a los tests post-hoc."
  },
  {
    "q": "¿En qué tipo de diseño experimental es obligatorio aplicar ANOVA de dos factores?",
    "opts": [
      "Cuando se desea evaluar el efecto principal y la interacción entre varios predictores",
      "Cuando la variable respuesta depende de múltiples tratamientos sin interacción",
      "Cuando solo hay una variable independiente que manipula el resultado",
      "Para comparar tres o más medias en un único factor"
    ],
    "c": [
      0
    ],
    "exp": "ANOVA de dos factores es necesario cuando tenemos dos (o más) variables independientes categóricas para ver, no solo sus efectos principales, sino también si existe una interacción ($A \\times B$)."
  },
  {
    "q": "¿Qué test se utiliza para verificar la condición de Esfericidad en ANOVA de medidas repetidas?",
    "opts": [
      "Test de Mauchly",
      "Test $t$ de Student",
      "Test $\\chi^2$ de independencia",
      "ANOVA de un factor"
    ],
    "c": [
      0
    ],
    "exp": "El supuesto de esfericidad (que la varianza de las diferencias entre pares de condiciones sea igual) se verifica con el Test de Mauchly. Si este test falla, deben aplicarse correcciones como Greenhouse-Geisser o Huynh-Feldt."
  },
  {
    "q": "En el contexto de un ANOVA de un factor, ¿qué hipótesis nula ($H_0$) se está contrastando estadísticamente?",
    "opts": [
      "Que todas las medias poblacionales de los grupos son iguales ($\\mu_1 = \\mu_2 = ... = \\mu_k$).",
      "Que las varianzas entre grupos son iguales.",
      "Que la media general es cero.",
      "Que no hay correlación lineal entre variables."
    ],
    "c": [
      0
    ],
    "exp": "El ANOVA de un factor está diseñado específicamente para contrastar la igualdad de múltiples medias. La hipótesis nula es que $\\mu_1 = \\mu_2 = ... = \\mu_k$."
  },
  {
    "q": "¿Qué tipo de relación estadística mide primariamente el Test $\\chi^2$ de independencia?",
    "opts": [
      "El grado de asociación (dependencia) entre dos variables categóricas.",
      "La fuerza lineal entre dos variables continuas.",
      "La diferencia en las medias poblacionales de múltiples grupos.",
      "La variabilidad dentro de una única población."
    ],
    "c": [
      0
    ],
    "exp": "El test $\\chi^2$ de independencia evalúa si la distribución de frecuencias de una variable es estadísticamente independiente de otra, utilizando tablas de contingencia. Se busca asociación."
  },
  {
    "q": "Si el resultado de un ANOVA (F-test) es significativo ($p < \\alpha$), ¿qué acción estadística debe realizarse *siempre* a continuación?",
    "opts": [
      "Realizar pruebas post-hoc (ej. Tukey HSD, Bonferroni).",
      "Repetir la muestra para confirmar resultados.",
      "Aceptar que no hay diferencias entre grupos.",
      "Transformar los datos a una escala logarítmica."
    ],
    "c": [
      0
    ],
    "exp": "Un F significativo indica que *al menos* dos medias son diferentes. Para saber cuáles pares de medias difieren específicamente, es obligatorio realizar comparaciones múltiples post-hoc."
  },
  {
    "q": "¿Cuál es el criterio principal para seleccionar Kruskal-Wallis como un test estadístico?",
    "opts": [
      "Cuando la variable cuantitativa no cumple con la suposición de normalidad o hay outliers severos, y las muestras son independientes.",
      "Cuando la variable dependiente es continua y las muestras son independientes.",
      "Cuando la distribución de las variables es normal y se cumplen los supuestos de homogeneidad de varianzas.",
      "Cuando solo se comparan más de dos medias en un único grupo."
    ],
    "c": [
      0
    ],
    "exp": "Kruskal-Wallis es el análogo no paramétrico del ANOVA de un factor. Se usa cuando la variable dependiente no sigue una distribución normal o si los datos son ordinales, y las muestras son independientes."
  },
  {
    "q": "En el contexto de un ANOVA de un factor, ¿cuál es la hipótesis nula ($H_0$) que se busca contrastar?",
    "opts": [
      "Las medias poblacionales ($\\mu$) de todos los grupos son iguales: $\\mu_1 = \\mu_2 = ... = \\mu_k$.",
      "La varianza dentro de grupos debe ser igual a cero.",
      "Los tamaños muestrales deben ser idénticos para todos los niveles del factor.",
      "Existe una relación lineal significativa entre la variable dependiente y el factor."
    ],
    "c": [
      0
    ],
    "exp": "El ANOVA (Analysis of Variance) compara si existen diferencias significativas entre las medias de $k$ grupos. La hipótesis nula ($H_0$) establece que todas las medias poblacionales son iguales ($\\mu_1 = \\mu_2 = ... = \\mu_k$). Si se rechaza esta $H_0$, significa que al menos dos medias son diferentes."
  },
  {
    "q": "Al calcular la estadística $F$ en un ANOVA, ¿cuáles representan correctamente los cocientes utilizados?",
    "opts": [
      "$F = CM_{entre}/CM_{dentro}$: Razón de la media de cuadrados entre grupos sobre la media de cuadrados dentro de grupos.",
      "$F = SCR/SCE$: Razón de varianza dentro a entre.",
      "$F = CM_{dentro}/CM_{entre}$: Cociente de varianzas incorrecto.",
      "El valor $F$ siempre debe ser menor que 1 para indicar significancia."
    ],
    "c": [
      0
    ],
    "exp": "La razón $F$ se calcula como el cociente entre la Media de Cuadrados (CM) *entre* grupos ($CM_{entre}$) y la CM *dentro* de grupos ($CM_{dentro}$). Un valor grande de $F$ sugiere que las variaciones entre grupos son mucho mayores que las variaciones dentro de ellos, lo cual es un indicador de diferencia significativa."
  },
  {
    "q": "Si se realiza una prueba $\\chi^2$ de independencia con datos categóricos, ¿qué está contrastando fundamentalmente?",
    "opts": [
      "La existencia de una relación estadística (dependencia) entre dos variables categóricas.",
      "La probabilidad de observar ciertas frecuencias por azar.",
      "Que la distribución de las frecuencias observadas es normal.",
      "Si los grupos tienen tamaños muestrales iguales."
    ],
    "c": [
      0
    ],
    "exp": "El test $\\chi^2$ de independencia evalúa si hay asociación o dependencia entre dos variables nominales. $H_0$: Las dos variables son independientes (no están relacionadas). Si se rechaza esta $H_0$, aceptamos la hipótesis alternativa de que existe una relación estadísticamente significativa."
  },
  {
    "q": "En el contexto de las pruebas no paramétricas, ¿cuál es el principal motivo para seleccionar Kruskal-Wallis en lugar de ANOVA?",
    "opts": [
      "Cuando los datos son ordinales o no cumplen el supuesto de normalidad y homocedasticidad.",
      "Si se desea comparar solo la media sin considerar la varianza.",
      "Cuando la variable dependiente es continua y los grupos tienen tamaños muestrales muy grandes ($N>100$).",
      "Porque siempre arroja resultados más precisos que ANOVA."
    ],
    "c": [
      0
    ],
    "exp": "Kruskal-Wallis es el equivalente no paramétrico de un ANOVA de un factor. Se utiliza cuando se viola la normalidad o, de manera crucial, cuando los datos son medidas ordinales. En este caso, en lugar de comparar medias, compara las medianas o las distribuciones de rangos."
  },
  {
    "q": "Cuando se utilizan pruebas para medidas repetidas (ej. Tiempo 1, Tiempo 2), ¿cuál es el requisito fundamental que debe cumplirse para aplicar ANOVA de Medidas Repetidas?",
    "opts": [
      "El supuesto de esfericidad (test de Mauchly) debe cumplirse o aplicarse una corrección adecuada.",
      "La variable dependiente debe ser continua y tener distribución normal.",
      "Los sujetos deben estar completamente independientes entre sí.",
      "Se requiere que la muestra sea lo más grande posible para aumentar el poder estadístico."
    ],
    "c": [
      0
    ],
    "exp": "En medidas repetidas, los datos están correlacionados porque las mismas unidades se miden varias veces. El supuesto de esfericidad asegura que la varianza de las diferencias entre pares de mediciones sea constante. Si este supuesto falla (p-valor Mauchly < 0.05), *debe* aplicarse una corrección como Greenhouse-Geisser o Huynh-Feldt para no inflar el error tipo I."
  },
  {
    "q": "Si se realiza un ANOVA y resulta significativo ($p < \\alpha$), ¿qué acción estadística es estrictamente necesaria en el paso siguiente?",
    "opts": [
      "Realizar pruebas post-hoc (ej. Tukey HSD) para identificar qué pares de grupos difieren específicamente.",
      "Calcular la desviación estándar de cada grupo.",
      "Redimensionar los datos para que sean paramétricos.",
      "Revisar si los tamaños muestrales son iguales."
    ],
    "c": [
      0
    ],
    "exp": "Un ANOVA significativo solo indica que *al menos* dos medias son diferentes, pero no dice cuáles. Por lo tanto, es obligatorio realizar pruebas post-hoc (como Tukey HSD o Bonferroni) para identificar las diferencias específicas entre pares de grupos y controlar la tasa de error Tipo I por comparaciones múltiples."
  },
  {
    "q": "En el contexto del test $\\chi^2$ de bondad de ajuste, ¿cuál es su propósito principal?",
    "opts": [
      "Comparar las frecuencias observadas ($O_i$) con las frecuencias teóricamente esperadas ($E_i$).",
      "Determinar si dos variables categóricas están relacionadas.",
      "Verificar la normalidad de una distribución continua.",
      "Calcular el nivel de correlación entre categorías."
    ],
    "c": [
      0
    ],
    "exp": "El test $\\chi^2$ de bondad de ajuste se usa para determinar si la distribución real de frecuencias observadas de una variable categórica difiere significativamente de una distribución teórica o esperada (ej., si un dado es justo)."
  },
  {
    "q": "Cuando analizamos la relación entre variables categóricas con $\\chi^2$ de independencia, ¿cuál es el supuesto más crítico que debemos verificar antes de proceder al cálculo?",
    "opts": [
      "Que la mayoría de las frecuencias esperadas ($E_i$) en cada celda de la tabla $\\geq 5$.",
      "Que todos los datos estén distribuidos normalmente.",
      "Que los tamaños muestrales sean muy grandes ($N \\to \\infty$).",
      "Que exista un efecto principal detectable."
    ],
    "c": [
      0
    ],
    "exp": "El supuesto más importante del test $\\chi^2$ es que las frecuencias esperadas sean suficientes. La regla general ($\\geq 5$) asegura que la distribución muestral se aproxime adecuadamente a la distribución teórica de $\\chi^2$. Si esta condición falla, el p-valor puede ser inválido."
  },
  {
    "q": "Al interpretar los resultados de un ANOVA factorial (A x B), ¿cuál es la jerarquía correcta en la interpretación de significancia?",
    "opts": [
      "Primero debe examinarse la interacción ($A \\times B$), luego los efectos principales A y B.",
      "Los efectos principales A y B son siempre más importantes que la interacción, salvo indicación contraria.",
      "Solo se deben reportar los efectos principales si la interacción es significativa.",
      "La significancia de la interacción anula automáticamente cualquier efecto principal."
    ],
    "c": [
      0
    ],
    "exp": "La jerarquía en ANOVA factorial dicta que *si* una interacción ($A \\times B$) es significativa, esto explica parte de la varianza. Por lo tanto, los efectos principales (A y B) deben interpretarse con cautela o considerar la interacción primero. La interacción siempre tiene prioridad."
  },
  {
    "q": "En el contexto de las comparaciones múltiples post-hoc, ¿por qué se recomienda usar Bonferroni si el objetivo es mantener un control muy estricto del error Tipo I?",
    "opts": [
      "Porque su aplicación garantiza que ninguna comparación sea necesaria.",
      "Porque realiza la corrección más conservadora, ajustando $\\alpha$ individualmente ($\\alpha_{adj} = \\alpha/m$).",
      "Porque solo funciona cuando los grupos tienen tamaños muestrales iguales.",
      "Porque es el método más potente estadísticamente."
    ],
    "c": [
      0
    ],
    "exp": "Bonferroni controla la Tasa de Error Tipo I (Family-Wise Error Rate, FWER) ajustando el nivel alfa ($\\alpha$) para cada prueba individual. Es muy conservador y se recomienda cuando las comparaciones son limitadas o cuando es crítica la tasa global de error."
  },
  {
    "q": "En el contexto de un ANOVA de un factor, ¿qué representa la hipótesis nula ($H_0$)?",
    "opts": [
      "Que todas las medias poblacionales ($\\mu$) de los grupos son iguales.",
      "Que las varianzas entre grupos son iguales.",
      "Que existe una relación significativa entre los factores.",
      "Que hay correlación negativa entre las variables medidas."
    ],
    "c": [
      0
    ],
    "exp": "ANOVA contrasta la igualdad de medias. $H_0: \\mu_1 = \\mu_2 = ... = \\mu_k$. La igualdad de varianzas es un supuesto (homoscedasticidad), no la hipótesis nula del contraste principal."
  },
  {
    "q": "¿Cuál es el objetivo principal al realizar un test $\\chi^2$ de bondad de ajuste?",
    "opts": [
      "Comparar las frecuencias observadas con las frecuencias esperadas bajo una distribución específica.",
      "Determinar si dos variables categóricas son independientes.",
      "Evaluar la relación lineal entre variables cuantitativas.",
      "Contrastar la varianza poblacional contra un valor conocido."
    ],
    "c": [
      0
    ],
    "exp": "El test de bondad de ajuste ($\\chi^2_{GoF}$) compara si los datos observados se ajustan a una distribución teórica (o patrón esperado). La independencia es el foco del $\\chi^2$ de independencia."
  },
  {
    "q": "¿Cuál es el propósito primordial del test $\\chi^2$ de independencia?",
    "opts": [
      "Contrastar si dos variables categóricas son estadísticamente independientes (no hay asociación).",
      "Verificar si las frecuencias observadas difieren significativamente de las esperadas.",
      "Determinar la proporción de casos que cumplen una categoría específica.",
      "Calcular el grado de ajuste de los datos a una distribución normal."
    ],
    "c": [
      0
    ],
    "exp": "El $\\chi^2$ de independencia se aplica a tablas de contingencia para determinar si la distribución de una variable depende de las categorías de otra. Si son independientes, no hay relación entre ellas."
  },
  {
    "q": "¿Por qué es crucial la condición de que las frecuencias esperadas ($\\text{E}_i$) sean mayores o iguales a 5 en un test $\\chi^2$?",
    "opts": [
      "Porque garantiza la aproximación normalidad necesaria para el cálculo del estadístico $\\chi^2$.",
      "Para asegurar que el cálculo de $F$ sea válido.",
      "Permite descomponer la suma de cuadrados total en componentes entre y dentro.",
      "Indica que las variables son categóricas."
    ],
    "c": [
      0
    ],
    "exp": "El test $\\chi^2$ se basa en una aproximación asintótica a la distribución normal. Si las frecuencias esperadas son muy bajas, esta aproximación falla, lo que invalida el resultado del test."
  },
  {
    "q": "¿Qué proceso estadístico sigue lógicamente a un ANOVA significativamente alto (p < $\\alpha$)?",
    "opts": [
      "Realizar pruebas post-hoc para identificar qué pares de medias difieren.",
      "Verificar la independencia de las variables categóricas.",
      "Ejecutar una regresión logística adicional.",
      "Aplicar la transformación Box-Cox."
    ],
    "c": [
      0
    ],
    "exp": "Un ANOVA solo indica que *al menos* dos medias son diferentes (el contraste general). Los tests post-hoc (Tukey HSD, Bonferroni) son necesarios para saber *dónde* están las diferencias específicas."
  },
  {
    "q": "¿Qué indica un valor $p$ significativo para la $\\chi^2$ de independencia?",
    "opts": [
      "Que es muy probable que haya una asociación estadísticamente significativa entre las dos variables categóricas.",
      "Que el diseño del estudio debe ser reevaluado por sesgos.",
      "Que se ha violado la condición de frecuencias esperadas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Si $p < \\alpha$, rechaza $H_0$ (independencia). Por lo tanto, hay evidencia suficiente para afirmar que existe una asociación o dependencia entre las variables categóricas."
  },
  {
    "q": "¿Qué se debe hacer si en un ANOVA de dos factores se viola el supuesto de esfericidad? (Asumiendo medidas repetidas en al menos un factor)",
    "opts": [
      "Aplicar la corrección de Greenhouse-Geisser, ajustando los grados de libertad.",
      "Transformar todos los datos a una escala logarítmica.",
      "Usar Kruskal-Wallis como alternativa inmediata.",
      "Reducir el número de niveles del factor."
    ],
    "c": [
      0
    ],
    "exp": "La violación específica en medidas repetidas es la esfericidad. La corrección de Greenhouse-Geisser o Huynh-Feldt ajusta los grados de libertad para compensar esta violación y mantener la validez estadística."
  },
  {
    "q": "¿Cuál de los siguientes escenarios requiere el uso del test U de Mann-Whitney?",
    "opts": [
      "Comparar si dos grupos independientes tienen distribuciones diferentes, sin asumir normalidad.",
      "Analizar una relación lineal entre variables cuantitativas.",
      "Comparar tres o más muestras independientes con datos ordinales.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Mann-Whitney (o Wilcoxon rank-sum) es el test no paramétrico para comparar dos grupos independientes cuando los datos son ordinales o la muestra es muy pequeña y no normal."
  },
  {
    "q": "¿Cuál es el propósito fundamental de realizar un Análisis de Varianza (ANOVA)?",
    "opts": [
      "Determinar la correlación lineal entre dos variables continuas.",
      "Comparar medias de tres o más grupos simultáneamente para determinar si al menos una media difiere significativamente.",
      "Verificar si los datos siguen una distribución normal a través de pruebas como Shapiro-Wilk.",
      "Estimar la relación causal directa entre las variables predictoras."
    ],
    "c": [
      0
    ],
    "exp": "ANOVA está diseñado específicamente para comparar medias de múltiples grupos (μ₁ = μ₂ = ... = μk) y determinar si la variabilidad observada entre los grupos es significativamente mayor que la variación dentro de ellos."
  },
  {
    "q": "¿Cuál es el supuesto más crítico de homocedasticidad en un ANOVA?",
    "opts": [
      "La normalidad de los residuos.",
      "Que las varianzas poblacionales de todos los grupos son iguales (homocedásticas).",
      "Independencia entre las observaciones y los grupos.",
      "Uso de datos medidos a intervalos iguales."
    ],
    "c": [
      0
    ],
    "exp": "La homocedasticidad requiere que la varianza del error sea constante en todos los niveles de los factores. Si esta suposición se viola, el $F$-test puede ser inválido."
  },
  {
    "q": "¿Qué mide el coeficiente $\\chi^2$ de bondad de ajuste (Goodness of Fit)?",
    "opts": [
      "La independencia entre dos variables categóricas.",
      "Cuánto difieren las frecuencias observadas ($O_i$) respecto a las frecuencias esperadas ($E_i$).",
      "La fuerza de la relación lineal en datos continuos.",
      "El grado de correlación multivariante."
    ],
    "c": [
      0
    ],
    "exp": "Este test compara una distribución de frecuencias observada con una distribución teórica (o esperada) para un único conjunto de categorías."
  },
  {
    "q": "¿Qué tipo de datos son requeridos obligatoriamente para aplicar un Test Chi-cuadrado de Independencia?",
    "opts": [
      "Datos categóricos, organizados en una tabla de contingencia.",
      "Variables continuas que deben ser normalizadas antes del test.",
      "Mediciones ordinales o nominales.",
      "Una muestra lo suficientemente grande (N > 30)."
    ],
    "c": [
      0
    ],
    "exp": "El Test $\\chi^2$ de Independencia requiere datos categóricos tabulados, donde se evalúa si la distribución de una variable depende de los niveles de otra."
  },
  {
    "q": "¿Cuál es el propósito fundamental del ANOVA en un diseño de un factor?",
    "opts": [
      "Evaluar la relación causal entre dos variables continuas.",
      "Contrastar si las medias de múltiples grupos son iguales ($H_0: \\mu_1 = \\mu_2 = ...$)",
      "Determinar la proporción de varianza explicada por una variable categórica.",
      "Sustituir pruebas t cuando el número de muestras es pequeño."
    ],
    "c": [
      0
    ],
    "exp": "El ANOVA (Analysis of Variance) está diseñado específicamente para contrastar si las medias poblacionales de $k$ grupos son iguales. Se basa en comparar la varianza 'entre' grupos con la varianza 'dentro' de los grupos."
  },
  {
    "q": "¿Qué condición debe cumplirse al aplicar el Test $\\chi^2$ de bondad de ajuste?",
    "opts": [
      "La frecuencia esperada ($E_i$) para cada celda debe ser mayor o igual a 5.",
      "Los datos deben seguir una distribución normal en las variables categóricas.",
      "El tamaño muestral total ($N$) debe ser grande (generalmente $N > 30$).",
      "Solo se aplica si hay más de dos categorías."
    ],
    "c": [
      0
    ],
    "exp": "Un supuesto crítico para el Test $\\chi^2$ es que las frecuencias esperadas en cada categoría o celda sean suficientemente grandes, generalmente $\\geq 5$. Si no se cumple, la aproximación se vuelve inválida."
  },
  {
    "q": "¿Cuándo es apropiado utilizar la prueba de Kruskal-Wallis?",
    "opts": [
      "Cuando se comparan tres o más grupos independientes y los datos son ordinales o violan la normalidad.",
      "Si la muestra proviene de un diseño de medidas repetidas con correlaciones esperadas.",
      "Para determinar si dos variables categóricas están relacionadas en una tabla $k \\times m$.",
      "Cuando solo se tiene información sobre el rango medio de las muestras."
    ],
    "c": [
      0
    ],
    "exp": "Kruskal-Wallis es el análogo no paramétrico del ANOVA de un factor. Se utiliza cuando los grupos son independientes y la variable dependiente no cumple con supuestos como normalidad o homocedasticidad."
  },
  {
    "q": "¿Cuál es la función principal de las pruebas post-hoc (ej. Tukey HSD, Bonferroni)?",
    "opts": [
      "Reducir el nivel de significancia acumulado al realizar múltiples comparaciones grupales.",
      "Realizar contrastes pairwise entre todos los grupos individuales tras obtener un ANOVA significativo.",
      "Evaluar si hay diferencias significativas en medidas repetidas a lo largo del tiempo.",
      "Sustituir la prueba F cuando las varianzas son desiguales."
    ],
    "c": [
      0
    ],
    "exp": "El ANOVA solo indica *si existe* una diferencia global ($\\mu_1 = \\mu_2 = ...$ vs. $H_a$). Los tests post-hoc se usan para identificar *qué pares específicos* de grupos difieren significativamente."
  },
  {
    "q": "¿Qué implica un valor p alto ($p > \\alpha$) después de realizar un ANOVA?",
    "opts": [
      "Que no hay evidencia suficiente para rechazar la hipótesis nula, sugiriendo igualdad de medias poblacionales.",
      "Que los grupos son significativamente diferentes entre sí y se requiere corrección post-hoc inmediata.",
      "Que la varianza dentro de los grupos es mayor que la varianza entre ellos.",
      "Que el diseño experimental fue incorrecto."
    ],
    "c": [
      0
    ],
    "exp": "Un valor p alto (mayor que $\\alpha$, ej. 0.05) significa que no podemos rechazar $H_0$. Por lo tanto, concluimos que las medias poblacionales son estadísticamente iguales."
  },
  {
    "q": "¿Qué corrección estadística se debe aplicar si el test de Mauchly indica una violación del supuesto de esfericidad en medidas repetidas?",
    "opts": [
      "La prueba t de Student.",
      "Correcciones como Greenhouse-Geisser o Huynh-Feldt deben ser aplicadas al valor F.",
      "Se debe cambiar la variable dependiente a un formato categórico para usar $\\chi^2$.",
      "El test se vuelve inválido y no hay alternativa estadística válida."
    ],
    "c": [
      0
    ],
    "exp": "La esfericidad es el supuesto de que las varianzas de las diferencias entre pares de condiciones son iguales. Si falla, se usan correcciones como Greenhouse-Geisser o Huynh-Feldt para ajustar los grados de libertad y obtener un valor F más conservador."
  },
  {
    "q": "¿Qué significa encontrar una interacción significativa en un ANOVA de dos factores (ej. Factor A $\\times$ Factor B)?",
    "opts": [
      "Que el efecto del Factor A sobre la variable dependiente depende del nivel específico del Factor B.",
      "Que los efectos principales del Factor A y el Factor B son estadísticamente significativos por separado.",
      "Indica que al menos uno de los factores está contribuyendo variabilidad no explicada en el modelo.",
      "Significa que los dos factores deben eliminarse del análisis para simplicidad."
    ],
    "c": [
      0
    ],
    "exp": "La interacción significa que la relación entre la variable dependiente y un factor cambia según el nivel del otro factor. Esto es más importante que los efectos principales por sí solo."
  },
  {
    "q": "En el contexto de un ANOVA de un factor, si se asume que la varianza dentro de los grupos es significativamente diferente entre niveles, ¿qué supuesto fundamental ha sido violado?",
    "opts": [
      "Homocedasticidad (Homogeneidad de varianzas)",
      "Normalidad de residuos",
      "Independencia de las observaciones",
      "La relación lineal entre variables"
    ],
    "c": [
      0
    ],
    "exp": "El supuesto clave que se viola cuando las varianzas dentro de los grupos no son iguales es la homocedasticidad. Si este supuesto se incumple, el test F puede ser inválido."
  },
  {
    "q": "¿Cuál es la función principal del Test $\\chi^2$ de bondad de ajuste?",
    "opts": [
      "Comparar frecuencias observadas con frecuencias esperadas bajo una distribución nula.",
      "Determinar si dos variables categóricas están relacionadas.",
      "Estimar coeficientes de regresión lineal multivariante.",
      "Calcular la varianza muestral a partir de datos continuos."
    ],
    "c": [
      0
    ],
    "exp": "El test $\\chi^2$ de bondad de ajuste (Goodness-of-Fit) se utiliza para probar si una distribución de frecuencias observada coincide con una distribución teórica o esperada."
  },
  {
    "q": "¿Qué método estadístico debe utilizarse como alternativa no paramétrica a ANOVA cuando el supuesto de normalidad es gravemente violado?",
    "opts": [
      "Kruskal-Wallis H Test",
      "Test T de Student",
      "Análisis de Varianza de Medidas Repetidas (ANOVA RM)",
      "Regresión logística"
    ],
    "c": [
      0
    ],
    "exp": "El Kruskal-Wallis test es el equivalente no paramétrico a un ANOVA de un factor. Se utiliza cuando los datos no cumplen con la normalidad o se manejan datos ordinales."
  },
  {
    "q": "¿Qué tipo de análisis estadístico se realiza para contrastar si existe una relación de dependencia entre dos variables categóricas?",
    "opts": [
      "Test $\\chi^2$ de independencia",
      "ANOVA de dos factores",
      "Test $\\chi^2$ de bondad de ajuste",
      "Análisis de Componentes Principales (PCA)"
    ],
    "c": [
      0
    ],
    "exp": "El test $\\chi^2$ de independencia se aplica a tablas de contingencia y busca determinar si las frecuencias observadas son independientes entre las categorías definidas por las dos variables."
  },
  {
    "q": "¿Cuál es la principal ventaja de utilizar el método post-hoc Bonferroni después de un ANOVA significativo?",
    "opts": [
      "Controlar la Tasa de Error Tipo I (alpha) cuando se realizan múltiples comparaciones.",
      "Aumentar el poder estadístico del test.",
      "Transformar los datos para asegurar la normalidad.",
      "Reducir la necesidad de asumir independencia."
    ],
    "c": [
      0
    ],
    "exp": "Cuando ANOVA indica que hay *algunas* diferencias significativas, pero no dice cuáles, se necesitan tests post-hoc. Bonferroni es conocido por controlar la tasa general de error Tipo I ($\\alpha$) al ajustar el nivel de significancia para cada comparación (e.g., $\\alpha_{adj} = \\alpha/m$)."
  },
  {
    "q": "¿Cuál es el supuesto más crítico que debe verificarse antes de realizar un ANOVA de medidas repetidas?",
    "opts": [
      "Independencia entre grupos",
      "Normalidad de los residuos en cada nivel",
      "Homogeneidad de varianzas (homoscedasticidad)",
      "Esfericidad de las diferencias"
    ],
    "c": [
      0
    ],
    "exp": "El supuesto crítico para ANOVA de medidas repetidas es la Esfericidad. Si este supuesto se viola, debemos aplicar correcciones como Greenhouse-Geisser o Huynh-Feldt."
  },
  {
    "q": "¿Cuándo debe utilizarse el test $\\chi^2$ de bondad de ajuste?",
    "opts": [
      "Cuando se compara una variable categórica con frecuencias esperadas teóricas.",
      "Para determinar si dos variables categóricas están relacionadas entre sí.",
      "Cuando los datos son continuos y no paramétricos.",
      "Solo cuando el tamaño muestral es muy grande."
    ],
    "c": [
      0
    ],
    "exp": "El test $\\chi^2$ de bondad de ajuste evalúa si la distribución de frecuencias observadas difiere significativamente de una distribución teóricamente esperada (un solo factor)."
  },
  {
    "q": "¿Qué supuesto estadístico se debe verificar principalmente antes de ejecutar un ANOVA de un factor?",
    "opts": [
      "La distribución de los datos muestrales es normal",
      "Las variables deben ser categóricas",
      "Los grupos deben tener tamaños iguales (n)",
      "Solo se requiere la independencia de las observaciones"
    ],
    "c": [
      0
    ],
    "exp": "El supuesto fundamental del ANOVA paramétrico es la Normalidad de residuos en cada grupo. Aunque la homocedasticidad e independencia son vitales, la normalidad de los datos dentro de cada grupo es el requisito estadístico más crítico para su validez."
  },
  {
    "q": "En el contexto de un ANOVA de un factor con $k$ grupos y $N$ observaciones totales, la hipótesis nula ($H_0$) a contrastar es:",
    "opts": [
      "$\\mu_1 = \\mu_2 = ... = \\mu_k$",
      "$CM_{dentro} = 0$",
      "$\\frac{SCE}{k-1} = \\frac{SCR}{N-k}$",
      "$SCT = SCE + SCR$"
    ],
    "c": [
      0
    ],
    "exp": "La hipótesis nula en ANOVA de un factor siempre postula que todas las medias poblacionales ($\\mu_i$) de los grupos son iguales. La comparación entre $CM_{entre} / CM_{dentro}$ se realiza para probar esta igualdad."
  },
  {
    "q": "¿Cuál es el propósito fundamental de calcular la razón F en un ANOVA de un factor?",
    "opts": [
      "Determinar si los grupos son estadísticamente diferentes entre sí.",
      "Calcular la varianza estimada dentro de cada grupo para corregir sesgos.",
      "Medir la proporción de la variación total explicada por el factor y no explicada (error).",
      "Establecer la magnitud del efecto en términos de tamaños muestrales."
    ],
    "c": [
      0
    ],
    "exp": "La razón F es un cociente que compara la variabilidad entre los grupos (el numerador, $CM_{entre}$) con la variabilidad esperada dentro de cada grupo (el denominador, $CM_{dentro}$). Un valor grande sugiere que las diferencias entre medias son mayores que el error aleatorio."
  },
  {
    "q": "En el contexto de un Análisis de Varianza (ANOVA), ¿cuál es la condición más crítica que se debe verificar antes de interpretar significancia y cuál describe esta condición?",
    "opts": [
      "A. Homocedasticidad: Varianzas iguales en todos los grupos.",
      "B. Normalidad de residuos: La distribución de errores debe ser normal.",
      "C. Independencia de observaciones: Las mediciones deben ser independientes entre sí.",
      "D. Linealidad: La relación entre variables debe seguir una línea recta."
    ],
    "c": [
      0
    ],
    "exp": "Aunque la ANOVA requiere tres supuestos (Normalidad, Homocedasticidad e Independencia), el supuesto más comúnmente asociado a violaciones graves que afecta directamente al cálculo de las varianzas y por lo tanto, a la validez del test $F$, es la homocedasticidad. Sin embargo, conceptualmente, todos son críticos. Si se debe seleccionar un único concepto clave, es que los tres deben cumplirse. Aquí seleccionamos el supuesto más fundamental para la comparación de medias: Homocedasticidad."
  },
  {
    "q": "Si se está comparando la media de tres o más grupos independientes pero se sospecha que los datos no cumplen con la normalidad ni homocedasticidad, ¿cuál debe ser la alternativa estadística recomendada y cuál test se utiliza para ello?",
    "opts": [
      "B. Aplicar Kruskal-Wallis H: Este test no paramétrico compara las medianas (o rangos) de múltiples grupos.",
      "A. Usar el Test U de Mann-Whitney: Es el sustituto directo de ANOVA en muestras pequeñas.",
      "C. Realizar un ANOVA robusto: Requiere una transformación lineal de los datos para normalizar la distribución.",
      "D. Utilizar el Test de Friedman: Es específico para diseños de medidas repetidas, sin importar si son independientes."
    ],
    "c": [
      0
    ],
    "exp": "Dado que los grupos son *independientes* y hay más de dos grupos, Kruskal-Wallis es el reemplazo no paramétrico correcto. Mann-Whitney solo compara dos grupos, y Friedman requiere dependencia."
  },
  {
    "q": "¿Cuál es el supuesto estadístico que debemos verificar al aplicar ANOVA de un factor?",
    "opts": [
      "Homocedasticidad (varianzas iguales)",
      "Normalidad de residuos",
      "Independencia entre observaciones",
      "Linearidad de la relación"
    ],
    "c": [
      0,
      1
    ],
    "exp": "ANOVA requiere tres supuestos principales: 1) Normalidad de los residuos; 2) Homocedasticidad (las varianzas en cada grupo deben ser iguales); y 3) Independencia de las observaciones. Ambos son conceptuales."
  },
  {
    "q": "¿Cómo se descompone correctamente la Suma Total de Cuadrados (SCT) en ANOVA?",
    "opts": [
      "$SCT = SCE + SCR$",
      "$SCE = \\sum ni(\\bar{X}_{i.} - \\bar{X}_{..})^2$",
      "$SCR = \\sum(X_{ij} - \\bar{X}_{i.})^2$",
      "Ambas ecuaciones son correctas"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La descomposición fundamental es $SCT = SCE + SCR$. Además, la Suma de Cuadrados Entre Grupos ($SCE$) se calcula precisamente como $\\sum ni(\\bar{X}_{i.} - \\bar{X}_{..})^2$."
  },
  {
    "q": "¿Cuál es la condición crítica para que los resultados del test $\\chi^2$ sean estadísticamente válidos?",
    "opts": [
      "Ninguna frecuencia esperada (E) en ninguna celda debe ser menor a 5",
      "Las variables analizadas deben ser nominales o categóricas",
      "La muestra debe ser de tamaño muy grande ($N > 100$) y normal",
      "Los datos observados deben seguir una distribución binomial"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La condición más crucial es que la mayoría de las frecuencias esperadas ($E_{ij}$) sean $\\ge 5$. Si este supuesto se viola, el test puede ser menos preciso. Además, por definición, el test $\\chi^2$ opera con variables categóricas."
  },
  {
    "q": "¿Cuál es el propósito principal de realizar pruebas post-hoc después de un ANOVA significativo?",
    "opts": [
      "Comparar pares específicos de medias para identificar qué grupos difieren",
      "Determinar si se requiere una corrección por comparaciones múltiples",
      "Calcular la varianza total (SCT)",
      "Verificar el supuesto de normalidad en todos los residuos"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si ANOVA nos dice que *alguno* de los grupos es diferente (efecto global), las post-hoc pruebas (Tukey HSD, Bonferroni, etc.) son necesarias para saber *cuáles* pares específicos difieren significativamente, controlando el error Tipo I acumulado."
  },
  {
    "q": "¿Qué se debe considerar en el diseño de un estudio que utilice ANOVA de medidas repetidas?",
    "opts": [
      "Que todas las mediciones deben estar correlacionadas entre sí",
      "El número de condiciones o tiempos debe ser igual y no jerárquico",
      "Necesidad de un tiempo (o condición) basal para comparar cambios",
      "Los sujetos deben ser completamente independientes entre sí"
    ],
    "c": [
      0,
      1
    ],
    "exp": "En medidas repetidas, el sujeto actúa como su propio control. Esto implica que las mediciones están correlacionadas (lo cual es ideal). Los tiempos/condiciones suelen tener un diseño similar o igual número de puntos."
  },
  {
    "q": "¿Qué significa interpretar que un ANOVA es significativo ($p < \\alpha$)?",
    "opts": [
      "Que existe una diferencia significativa entre al menos dos grupos comparados",
      "Se debe realizar necesariamente una prueba post-hoc para detalles específicos",
      "La magnitud del efecto (ej. $\\eta^2$) es el indicador más importante de la relevancia práctica",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un $p < \\alpha$ solo indica que *existe* un efecto globalmente significativo. No nos dice qué pares son diferentes ni qué tan grandes son esas diferencias. Por lo tanto, se requiere post-hoc y evaluar el tamaño del efecto ($\\eta^2$) para la relevancia práctica."
  },
  {
    "q": "¿Cuál es la principal diferencia conceptual entre Kruskal-Wallis y ANOVA?",
    "opts": [
      "Kruskal-Wallis trabaja con rangos de datos en lugar de valores originales",
      "ANOVA requiere los supuestos de normalidad y homocedasticidad",
      "El test de rango no paramétrico se utiliza cuando las variables son ordinales",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Kruskal-Wallis es el análogo de ANOVA. La diferencia clave es que KH opera con rangos para evitar asumir distribuciones normales o varianzas iguales (supuestos violados en datos no paramétricos)."
  },
  {
    "q": "¿Qué se debe hacer si la variable dependiente sigue una distribución altamente sesgada?",
    "opts": [
      "Aplicar transformaciones a los datos (ej. logaritmo) antes de realizar ANOVA",
      "Considerar el uso de un test no paramétrico alternativo",
      "Verificar que la asimetría sea muy baja para proceder con ANOVA",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si hay fuerte sesgo o se viola severamente la normalidad, lo ideal es intentar una transformación (ej. logaritmo) para volver a cumplir los supuestos paramétricos; si no funciona, pasar al test no paramétrico alternativo."
  },
  {
    "q": "¿Cuál es la razón fundamental por la cual se utiliza la descomposición de Sumas de Cuadrados ($SCT = SCE + SCR$) en ANOVA?",
    "opts": [
      "Desagregar la variabilidad total en componentes atribuibles a las diferencias entre grupos y el error residual.",
      "Calcular directamente el valor $F$ sin calcular primero los grados de libertad.",
      "Confirmar si el tamaño muestral es suficiente para realizar la prueba $\\chi^2$.",
      "Verificar que el modelo lineal es apropiado antes de empezar con los datos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La descomposición permite aislar qué proporción de la varianza total ($SCT$) se explica por el factor ($SCE$) y cuál queda como error residual ($SCR$)."
  },
  {
    "q": "¿Qué implica un test significativo de Mauchly en medidas repetidas?",
    "opts": [
      "Que se debe usar una corrección estadística (ej. Greenhouse-Geisser) porque la esfericidad fue violada.",
      "Que los datos son heterogéneos y deben pasarse a un test no paramétrico como Friedman.",
      "Que el diseño experimental puede ser analizado directamente con ANOVA de medidas repetidas.",
      "Que las diferencias entre medias son demasiado grandes para realizar cualquier contraste."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si el test de Mauchly es significativo ($p < \\alpha$), se viola la condición de esfericidad. Esto exige aplicar correcciones (Greenhouse-Geisser o Huynh-Feldt) para obtener un valor F más conservador y correcto."
  },
  {
    "q": "¿Qué condiciones deben cumplirse en el diseño de una tabla de contingencia antes de realizar el Test $\\chi^2$ de independencia?",
    "opts": [
      "Que las variables sean nominales (categóricas).",
      "Que la frecuencia esperada ($E_{ij}$) sea mayor o igual a 5 en la mayoría de sus celdas.",
      "Que los datos estén distribuidos normalmente.",
      "Que haya una relación lineal detectable entre las variables."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test $\\chi^2$ solo usa variables categóricas. El supuesto clave es que las frecuencias esperadas sean suficientemente grandes ($\\ge 5$) para asegurar la normalidad de la aproximación $\\chi^2$."
  },
  {
    "q": "¿Cuál es el propósito principal de aplicar múltiples comparaciones post-hoc (ej. Tukey HSD) después de un ANOVA significativo?",
    "opts": [
      "Controlar la Tasa de Error Familiar (Family-Wise Error Rate, FWER) al realizar pruebas por pares.",
      "Determinar si las varianzas son significativamente diferentes entre grupos.",
      "Verificar que los datos cumplen con el supuesto de homocedasticidad.",
      "Sustituir completamente el resultado del ANOVA original."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Al hacer varias comparaciones (pruebas por pares), se aumenta la probabilidad de cometer un error Tipo I. Los tests post-hoc ajustan las p-valores para controlar esta tasa de error familiar."
  },
  {
    "q": "¿Cuáles son los objetivos principales al comparar ANOVA con sus equivalentes no paramétricos?",
    "opts": [
      "Evaluar si el supuesto de normalidad es crítico y está violado.",
      "Utilizar alternativas robustas cuando la distribución de los datos no sigue patrones normales o son ordinales.",
      "Realizar siempre un análisis más simple que sea menos sensible a errores.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si se viola la normalidad (o si los datos son ordinales), el ANOVA se vuelve inválido. En esos casos, Kruskal-Wallis y Friedman ofrecen alternativas válidas."
  },
  {
    "q": "¿Qué tipo de dato o diseño requiere obligatoriamente el uso del test Friedman?",
    "opts": [
      "Diseños que involucran medidas repetidas (el mismo sujeto medido en múltiples momentos).",
      "Analizar la asociación entre variables nominales y ordinales.",
      "Comparar más de dos medias poblacionales cuando las muestras son independientes.",
      "Estimar si hay una relación causal directa entre factores."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Friedman es el análogo no paramétrico del ANOVA de medidas repetidas. Requiere un diseño longitudinal (mismos sujetos) y datos que no son normales."
  },
  {
    "q": "Un diseño de ANOVA de dos factores (A x B) permite controlar simultáneamente:",
    "opts": [
      "La influencia del factor A sobre la variable dependiente.",
      "El efecto principal del factor B y el efecto de interacción ($A \\times B$).",
      "Solo los efectos principales; la interacción es imposible de medir en este diseño.",
      "Si las observaciones son completamente independientes entre sí."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un ANOVA factorial (dos factores) permite evaluar tres cosas: 1) El efecto principal del Factor A. 2) El efecto principal del Factor B. 3) La interacción ($A \\times B$), que mide si el efecto de un factor depende del nivel de otro. Es crucial identificar la interacción, ya que a veces es más importante que los efectos principales."
  },
  {
    "q": "Considerando los tests no paramétricos, ¿cuáles son las condiciones apropiadas para utilizar Friedman?",
    "opts": [
      "Cuando se tienen tres o más condiciones y mediciones repetidas en el mismo grupo.",
      "Si el supuesto de esfericidad falla gravemente en medidas repetidas.",
      "Cuándo la variable dependiente debe ser medida a nivel de intervalo o razón (continua).",
      "Solo si los datos son perfectamente normales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Friedman es el equivalente no paramétrico del ANOVA para medidas repetidas. Se usa cuando se violan supuestos de normalidad o se trabaja con datos ordinales, y especialmente cuando la corrección de esfericidad es necesaria/aplicada."
  },
  {
    "q": "Si los datos son ordinales (ej., escala Likert) y el diseño implica mediciones repetidas a lo largo del tiempo, ¿qué prueba alternativa no paramétrica debe emplearse?",
    "opts": [
      "Test Wilcoxon Signed-Rank.",
      "Test Friedman.",
      "ANOVA de un factor con corrección Greenhouse-Geisser.",
      "Prueba de Mann-Whitney U."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Dado que los datos son ordinales y hay mediciones repetidas (mismo sujeto), se debe usar el test de Friedman. Alternativamente, si solo comparamos dos momentos en el tiempo, se usa Wilcoxon Signed-Rank."
  },
  {
    "q": "¿Cuándo debe utilizarse la prueba Kruskal-Wallis?",
    "opts": [
      "Como alternativa no paramétrica al ANOVA de un factor, cuando se viola la normalidad o homocedasticidad en muestras pequeñas.",
      "Si se comparan tres o más grupos independientes con datos ordinales o no normativos.",
      "Cuando las variables medidas son continuas y normales.",
      "Siempre que el número de observaciones sea menor a 10."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Kruskal-Wallis es el análogo no paramétrico del ANOVA de un factor. Se utiliza cuando se cumplen los supuestos (normalidad/homocedasticidad) son cuestionables y las variables son comparativas entre múltiples grupos independientes."
  },
  {
    "q": "¿Cuál es el propósito de aplicar correcciones (como Greenhouse-Geisser o Huynh-Feldt) después de un ANOVA de medidas repetidas?",
    "opts": [
      "Ajustar la significancia cuando se realizan múltiples comparaciones post-hoc.",
      "Corregir por violaciones del supuesto de Esfericidad.",
      "Incrementar el poder estadístico general del test.",
      "Transformar datos ordinales a variables continuas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las correcciones (GG/HF) se aplican cuando el supuesto de esfericidad se viola en un diseño de medidas repetidas, estimando los grados de libertad apropiados para obtener p-valores más conservadores y correctos. La primera opción describe las correcciones post-hoc."
  },
  {
    "q": "¿Qué test estadístico debería sustituirse por Kruskal-Wallis cuando el ANOVA de un factor es inapropiado?",
    "opts": [
      "El Test U de Mann-Whitney.",
      "La prueba de Kolmogorov-Smirnov.",
      "La prueba Friedman (si hay medidas repetidas).",
      "ANOVA de dos factores."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Kruskal-Wallis sustituye al ANOVA cuando se trabaja con múltiples grupos independientes y los datos no son normales o son ordinales. El Test U de Mann-Whitney es para solo dos grupos; la prueba Friedman es el análogo de medidas repetidas."
  },
  {
    "q": "¿Cuándo usaría un test estadístico de tipo Friedman?",
    "opts": [
      "Cuando las mediciones provienen del mismo sujeto y están ordenadas (datos longitudinales).",
      "Como alternativa no paramétrica a ANOVA de medidas repetidas.",
      "Para comparar más de dos medias poblacionales diferentes.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Friedman se usa en diseños de medidas repetidas cuando el supuesto de normalidad o esfericidad falla. Se aplica a múltiples mediciones del mismo sujeto."
  },
  {
    "q": "¿Cuáles son las condiciones críticas para la aplicación válida del $F$-ratio en ANOVA?",
    "opts": [
      "Normalidad de residuos y homogeneidad de varianzas (homocedasticidad).",
      "Independencia de las observaciones dentro y entre grupos.",
      "Uso de una muestra aleatoria que represente a la población objetivo.",
      "La variables dependientes deben ser medidas en una escala intervalar o de razón."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para ANOVA se requieren normalidad (de los residuos), homocedasticidad y la independencia. La opción B es un requisito fundamental de cualquier test estadístico paramétrico."
  },
  {
    "q": "¿Qué pruebas estadísticas son alternativas no paramétricas adecuadas para reemplazar el ANOVA de un factor cuando se violan supuestos?",
    "opts": [
      "Kruskal-Wallis H Test (para comparar más de dos grupos).",
      "Mann-Whitney U Test (si solo se comparan dos muestras independientes).",
      "Wilcoxon Signed-Rank Test (para medidas repetidas en solo dos puntos).",
      "Test de Spearman Rho (solo para medir correlación monotónica)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Kruskal-Wallis es el análogo no paramétrico a ANOVA unidireccional. Si se comparan solo dos grupos independientes, se usa Mann-Whitney U."
  },
  {
    "q": "¿Qué características deben considerarse al seleccionar un test $\\chi^2$ para datos categóricos?",
    "opts": [
      "Las frecuencias esperadas ($E_i$) en cualquier celda no deben ser menores a 5.",
      "Los datos deben provenir de una muestra aleatoria y no estar correlacionados artificialmente.",
      "La tabla debe tener al menos dos filas y dos columnas (2x2 o mayor).",
      "Es mejor utilizar el test $Z$ si la muestra es muy grande."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El requisito de $E_i \\ge 5$ asegura que la aproximación $\\chi^2$ sea válida. La aleatoriedad y la estructura matricial son fundamentales para interpretar correctamente el contraste."
  },
  {
    "q": "¿Cuándo se debe considerar usar un test no paramétrico en lugar de ANOVA o Chi-cuadrado?",
    "opts": [
      "Cuando los datos violan gravemente las suposiciones (ej., asimetría, heterocedasticidad).",
      "Cuando se sospecha que las relaciones entre variables son puramente monotónicas o de rango.",
      "Cuando la variable dependiente es estrictamente ordinal y su distribución es desconocida.",
      "Si el tamaño muestral $N$ es extremadamente pequeño ($N < 10$)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La violación de supuestos paramétricos (como la normalidad) y la naturaleza ordinal de los datos obligan a pasar a alternativas no paramétricas o basadas en rangos."
  },
  {
    "q": "¿Qué indican las variables 'Suma de Cuadrados Entre Grupos' ($SCE$) y 'Suma de Cuadrados Dentro de Grupos' ($SCR$) en ANOVA?",
    "opts": [
      "$SCE$: La variabilidad total explicada por la diferencia entre medias de grupos. $SCR$: La variabilidad residual no explicada dentro de los grupos.",
      "Ambas suman los cuadrados de las diferencias individuales respecto a la media general ($\\text{SCT}$).",
      "Son métricas que solo se usan en ANOVA de dos factores, ignorando el factor principal.",
      "Indican directamente la magnitud del efecto o $F$, sin necesidad de calcular varianzas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La descomposición $\\text{SCT} = \\text{SCE} + \\text{SCR}$ permite separar la varianza explicada por los tratamientos (entre grupos) de la varianza residual (dentro de grupos)."
  },
  {
    "q": "¿Qué papel juegan las comparaciones múltiples post-hoc después de un ANOVA significativo?",
    "opts": [
      "Realizar pruebas específicas para identificar qué pares de medias son significativamente diferentes entre sí.",
      "Reducir el riesgo de Error Tipo I (Falsos positivos) al realizar múltiples contrastes $t$.",
      "Determinar si la interacción entre factores es significativa, independientemente de las diferencias marginales.",
      "Estimar el tamaño del efecto ($d$ o $\\eta^2$) para cada par significativo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si ANOVA globalmente indica que hay una diferencia (H₀ rechazada), los post-hoc se usan para 'descubrir' cuáles grupos específicos difieren. Bonferroni y Tukey son métodos populares para controlar el error tipo I."
  },
  {
    "q": "¿Cómo se maneja el supuesto de Esfericidad en un diseño de Medidas Repetidas?",
    "opts": [
      "Se verifica mediante la prueba de Mauchly.",
      "Si viola la suposición, requieren correcciones como Greenhouse-Geisser o Huynh-Feldt.",
      "Indica que todas las observaciones deben ser perfectamente correlacionadas entre sí.",
      "Requiere pasar inmediatamente a un análisis no paramétrico con Friedman."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La esfericidad es la suposición de igualdad de varianzas de las diferencias para todos los pares de condiciones. Mauchly la prueba; si falla, se aplican correcciones de rango libre."
  },
  {
    "q": "¿Cuáles son las ventajas conceptuales del uso de ANOVA en lugar de múltiples $t$-tests? (ANOVA Unfactorial)",
    "opts": [
      "Controla el Error Tipo I acumulado al realizar comparaciones simultáneas.",
      "Permite comparar hasta $k$ grupos con un único test global.",
      "Calcula y reporta la varianza entre los grupos, que es más informativa que solo el valor $p$.",
      "No requiere asumir normalidad de los datos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El principal beneficio de ANOVA es controlar el error tipo I (inflación del riesgo) cuando se realizan comparaciones múltiples. Los $t$-tests secuenciales aumentan drásticamente este riesgo."
  },
  {
    "q": "¿Qué contrastes son útiles para realizar análisis detallado después de un ANOVA significativo?",
    "opts": [
      "Tukey HSD: Ideal si el tamaño muestral es similar entre grupos y se busca comparar todos los pares.",
      "Bonferroni: Útil cuando la cantidad de comparaciones $m$ es pequeña, ajustando $\\alpha = \\alpha/m$.",
      "Scheffé: El más conservador, útil para contrastes complejos o combinar múltiples factores.",
      "Necesidad de un test post-hoc implica que el ANOVA global fue significativo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Tukey (bueno si $n$ es igual) y Bonferroni son los más comunes. Scheffé se usa cuando las comparaciones no son solo pares simples."
  },
  {
    "q": "¿Qué implica la 'descomposición' de la Suma Total de Cuadrados ($SCT$) en ANOVA?",
    "opts": [
      "Que la varianza total puede descomponerse linealmente en componentes atribuibles a distintos factores (e.g., $SCE$ y $SCR$).",
      "Que todos los errores estadísticos se cancelan si se suman correctamente.",
      "Es un proceso necesario para calcular directamente el cociente $F$.",
      "Implica que las variables son perfectamente ortogonales entre sí."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La descomposición ($\\text{SCT} = \\text{SCE} + \\text{SCR}$) es la base matemática de ANOVA, permitiendo aislar la varianza atribuible a tratamientos (entre) y la varianza residual (dentro)."
  },
  {
    "q": "¿En el contexto del test $\\chi^2$ de independencia, ¿qué debe ser siempre constante para que el contraste sea válido?",
    "opts": [
      "El número total de observaciones ($N$).",
      "Los grados de libertad internos de cada fila o columna.",
      "La distribución teórica esperada (H₀).",
      "Las frecuencias observadas deben ser mayores a 0."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para calcular cualquier prueba $\\chi^2$, se necesita un $N$ fijo. Además, mantener los grados de libertad constantes asegura la estructura matemática del test."
  },
  {
    "q": "¿Qué condiciones definen el uso de ANOVA bidireccional (dos factores)?",
    "opts": [
      "Se requieren dos variables factoriales independientes y una variable dependiente continua.",
      "Permite contrastar efectos principales ($\\mu_A$ vs $\\mu_B$) e interacción entre los niveles.",
      "El supuesto de que la interacción debe ser asumida linealmente en el modelo.",
      "Los datos deben seguir una estructura cruzada o factorial."
    ],
    "c": [
      0,
      1
    ],
    "exp": "ANOVA bidireccional evalúa si los factores tienen efectos independientes y, crucialmente, si interactúan (si el efecto de A depende del nivel de B)."
  },
  {
    "q": "¿Cuál es la razón por la cual debemos calcular el test de independencia $\\chi^2$ en lugar del test de bondad de ajuste?",
    "opts": [
      "Porque estamos comparando dos variables categóricas diferentes.",
      "Se utiliza cuando las filas y columnas representan frecuencias bajo el mismo diseño muestral.",
      "Para saber si la distribución observada se ajusta a una distribución esperada teórica (p. ej., uniforme).",
      "La independencia solo se puede testear con tablas de contingencia."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El $\\chi^2$ de independencia ($H_0$: variables son independientes) se usa en tablas de contingencia para ver si la distribución de una variable depende de otra. El $\\chi^2$ de bondad de ajuste compara las observaciones con una distribución teórica predefinida."
  },
  {
    "q": "¿Cuáles son los supuestos fundamentales que debe cumplir un ANOVA para ser válido?",
    "opts": [
      "Normalidad de los residuos: La distribución residual debe aproximarse a una normal.",
      "Homocedasticidad: Las varianzas poblacionales deben ser iguales entre todos los grupos.",
      "Independencia de las observaciones: Cada medición debe ser independiente de las demás.",
      "Que la variable dependiente sea categórica."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tres supuestos clave son Normalidad, Homocedasticidad (varianzas iguales) e Independencia. La última opción es incorrecta porque ANOVA requiere una variable continua."
  },
  {
    "q": "¿Qué contraste estadístico realiza el Test $\\chi^2$ de independencia?",
    "opts": [
      "Contrasta la hipótesis nula de que las variables son independientes.",
      "Permite determinar qué porcentaje de varianza es explicado por un factor categórico.",
      "Evalúa si existe alguna relación lineal entre dos variables continuas.",
      "Mide cuán diferente es el patrón observado respecto a lo esperado."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El $\\chi^2$ de independencia prueba si las frecuencias observadas son estadísticamente diferentes de las que se esperarían bajo la condición de independencia. Esto ocurre en una tabla de contingencia."
  },
  {
    "q": "¿Cuál de estos tests se utiliza en una situación de medidas repetidas (ej. antes, durante, después)?",
    "opts": [
      "ANOVA de Medidas Repetidas.",
      "Test de Friedman.",
      "Análisis de Regresión Lineal Múltiple (si hay correlación).",
      "T-test para muestras pareadas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El ANOVA de Medidas Repetidas y el Test de Friedman son los métodos apropiados. El T-test es útil solo si se comparan exactamente dos puntos temporales o condiciones."
  },
  {
    "q": "En un ANOVA de un factor con $k$ grupos y $N$ observaciones totales, ¿cuáles de las siguientes afirmaciones sobre los grados de libertad son correctas?",
    "opts": [
      "Los grados de libertad entre grupos (inter-grupos) son $k-1$.",
      "Los grados de libertad dentro de grupos (intra-grupos) son $N-k$.",
      "Los grados de libertad totales son $k-1$.",
      "El estadístico $F$ se calcula como $\\frac{SCE}{SCR}$ sin dividir por sus respectivos grados de libertad."
    ],
    "c": [
      0,
      1
    ],
    "exp": "En ANOVA un factorial: gl inter-grupos $=k-1$, gl intra-grupos $=N-k$ y gl total $=N-1$. El estadístico $F$ utiliza los cuadrados medios $\\frac{MCE}{MCR}$, no las sumas de cuadrados directamente."
  },
  {
    "q": "¿Qué implica que los grados de libertad (df) en ANOVA sean $N-k$?",
    "opts": [
      "Representa el número total de observaciones independientes utilizadas en el cálculo de la varianza dentro de grupos ($SCR$).",
      "Se calcula restando el número de parámetros estimados del tamaño muestral. Ejemplo: $N-1$.",
      "Indica cuántas categorías o grupos distintos se están comparando (Factor A).",
      "Solo aplica cuando estamos realizando un test de bondad de ajuste."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los df dentro de grupos ($SCR/df$) se basan en $N-k$, que es el total de grados de libertad restantes después de estimar las medias grupales. Los df totales son siempre $N-1$ (si no hay factor interacción), lo cual está relacionado con $SCT$."
  },
  {
    "q": "¿Cuáles de las siguientes pruebas estadísticas son apropiadas para comparar tres o más grupos cuando los datos violan el supuesto de normalidad?",
    "opts": [
      "Kruskal-Wallis",
      "Friedman",
      "ANOVA One-way",
      "Test de Mann-Whitney U"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Kruskal-Wallis es el análogo no paramétrico de ANOVA de un factor. Friedman se usa para datos de medidas repetidas (donde ANOVA fallaría por normalidad o esfericidad). Mann-Whitney U solo compara dos grupos."
  },
  {
    "q": "¿Qué tipos de análisis estadísticos pueden utilizar tablas de contingencia?",
    "opts": [
      "ANOVA",
      "Test $\\chi^2$ de independencia",
      "Análisis de Regresión Lineal",
      "Testeos no paramétricos"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las tablas de contingencia son la base para realizar el test $\\chi^2$ de independencia (comparando variables categóricas) y se usan en análisis de asociación."
  },
  {
    "q": "¿Cuál es la condición más importante que debe cumplirse al usar cualquier prueba basada en chi-cuadrado?",
    "opts": [
      "Las frecuencias esperadas deben ser mayores o iguales a 5, idealmente para el 80% de las celdas.",
      "Ambas variables deben ser nominales (categóricas).",
      "Los datos no deben seguir una distribución normal.",
      "El tamaño de la muestra debe ser grande."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La condición crucial es que $E_i \\geq 5$ para todas las frecuencias esperadas. Además, tanto el test $\\chi^2$ de bondad de ajuste como el de independencia requieren variables categóricas (nominales)."
  },
  {
    "q": "¿Cuáles son los resultados que se interpretan típicamente después de una ANOVA significativa?",
    "opts": [
      "Se debe realizar un análisis post-hoc para determinar qué pares o grupos difieren específicamente.",
      "Los residuos deben ser normales y homocedásticos.",
      "La diferencia media entre todas las unidades experimentales es nula.",
      "El valor $p$ de la prueba $\\chi^2$ debe ser mayor a 0.05."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una ANOVA significativa ($H_0$ rechazada) solo indica que *al menos* un grupo difiere; por eso se requiere post-hoc (Tukey, Bonferroni). La opción 3 es una condición de supuesto, no una interpretación directa del resultado significativo."
  },
  {
    "q": "¿Cuáles de los siguientes tests son apropiados como alternativas no paramétricas al ANOVA de un factor?",
    "opts": [
      "Kruskal-Wallis H",
      "Friedman Test",
      "Teste T de Student",
      "Test Chi-cuadrado"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Kruskal-Wallis es la alternativa directa a ANOVA cuando se comparan tres o más grupos independientes. El Test Friedman reemplaza al ANOVA en diseños de medidas repetidas (diseños intra-sujeto). El T de Student y el $\\chi^2$ no son alternativas directas para este contexto."
  },
  {
    "q": "¿Cuáles de las siguientes situaciones requieren la aplicación del test Chi-cuadrado ($\\chi^2$)?",
    "opts": [
      "Comparar frecuencias observadas con frecuencias esperadas",
      "Evaluar la asociación entre dos variables categóricas",
      "Determinar si existe diferencia de medias en un diseño intra-sujeto",
      "Verificar el supuesto de esfericidad"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El $\\chi^2$ se usa para evaluar la bondad de ajuste (comparar O vs E) y la independencia (asociación entre variables categóricas). No está diseñado para comparar medias como lo hacen los ANOVA."
  },
  {
    "q": "¿Cuál de las siguientes interpretaciones sobre el $F$ calculado en un ANOVA es correcta?",
    "opts": [
      "Un valor alto de F sugiere que la variabilidad entre grupos es mayor que la variabilidad dentro de grupos",
      "La significancia estadística depende únicamente del tamaño muestral, no de los promedios",
      "Un valor bajo de F indica que las diferencias entre medias son insignificantes",
      "El $F$ siempre debe ser comparado con una distribución t para su interpretación"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La razón ANOVA es $F = CM_{entre}/CM_{dentro}$. Si $CM_{entre}$ (variabilidad intergrupal) es mucho mayor que $CM_{dentro}$ (error residual), el valor F será alto y significativo. Un bajo valor de F sugiere falta de diferencia entre medias."
  },
  {
    "q": "¿Qué procedimiento estadístico es más apropiado cuando se evalúa la efectividad de un tratamiento a lo largo de múltiples mediciones en los mismos sujetos?",
    "opts": [
      "ANOVA de medidas repetidas (Diseño intra-sujeto)",
      "Test T pareado",
      "Análisis de regresión lineal simple",
      "Prueba U de Mann-Whitney"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El ANOVA de medidas repetidas está diseñado específicamente para manejar diseños donde los mismos sujetos son medidos en diferentes puntos o bajo diferentes tratamientos. El Test T pareado es un caso específico (k=2)."
  },
  {
    "q": "¿Qué condición debe cumplirse rigurosamente al usar el test $\\chi^2$ de independencia?",
    "opts": [
      "Que las frecuencias esperadas ($E_{ij}$) sean mayores a 5 en la mayoría de las celdas",
      "Que el número total de observaciones (N) sea grande",
      "Que no haya variables predictoras que se puedan controlar estadísticamente",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La condición más crítica para la validez del $\\chi^2$ es que las frecuencias esperadas ($E_{ij}$) sean suficientemente grandes (generalmente $\\geq 5$) en casi todas las celdas. Un $N$ grande ayuda, pero el requisito de frecuencia esperada es fundamental."
  },
  {
    "q": "¿Qué diferencia conceptual existe entre el Kruskal-Wallis y la U de Mann-Whitney?",
    "opts": [
      "Kruskal-Wallis compara más de dos grupos independientes",
      "El Kruskal-Wallis es la generalización del Test U de Mann-Whitney",
      "Mann-Whitney se utiliza únicamente para variables ordinales",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Mann-Whitney (U) es un test para comparar dos muestras independientes. Kruskal-Wallis extiende esa capacidad para comparar tres o más grupos ($k>2$). Ambos operan sobre rangos (datos ordinales)."
  },
  {
    "q": "¿Qué implica la violación del supuesto de Esfericidad en el contexto de ANOVA de medidas repetidas?",
    "opts": [
      "Que las varianzas no son iguales entre los niveles del factor",
      "Que la variación de la diferencia ($\\Delta$) disminuye a medida que aumenta la distancia entre los puntos de medición (o viceversa)",
      "Que la correlación entre pares de mediciones es significativamente diferente de 1",
      "Se debe aplicar una prueba post-hoc simple"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La esfericidad se refiere a que las varianzas de todas las diferencias posibles entre pares de mediciones son iguales. Su violación implica que la correlación no sigue un patrón uniforme (esférico), lo cual requiere aplicar correcciones como Greenhouse-Geisser."
  },
  {
    "q": "Respecto a la aplicación del Test Chi-cuadrado ($\\chi^2$), ¿qué condiciones deben cumplirse en una tabla de contingencia? ",
    "opts": [
      "Las frecuencias esperadas ($E$) deben ser mayores o iguales a 5, y las esperadas menores que 1 porción de las observaciones totales.",
      "Los datos deben seguir una distribución normal (aunque no es un requisito estricto para $\\chi^2$).",
      "La variable categórica debe tener al menos dos niveles.",
      "Solo se puede aplicar si el tamaño muestral $N$ es muy grande."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para que la aproximación normal del $\\chi^2$ sea válida (principalmente para bondad de ajuste e independencia), se requiere que las frecuencias esperadas ($E$) sean $\\geq 5$. Además, el supuesto más fundamental de $\\chi^2$ es la independencia y la distribución categórica. La opción [0] aborda la regla práctica del tamaño esperado."
  },
  {
    "q": "Al realizar un ANOVA de dos factores (A y B), se evalúan tres tipos principales de interacciones o efectos. ¿Cuáles son?",
    "opts": [
      "El efecto principal de A, el efecto principal de B, y la interacción A*B.",
      "Solo es necesario evaluar la interacción entre los factores.",
      "Los efectos deben ser estadísticamente significativos para considerarlos válidos.",
      "La interactividad siempre implica una relación causal directa."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un ANOVA factorial permite contrastar los efectos principales de cada factor (A y B) por separado. Adicionalmente, el análisis más rico es la interacción ($A*B$), que indica si el efecto de un factor depende del nivel del otro."
  },
  {
    "q": "En el contexto de las comparaciones post-hoc después de encontrar un ANOVA significativo, ¿qué ajustes son cruciales para mantener el nivel alfa ($\\alpha$) global?",
    "opts": [
      "Tukey HSD, Bonferroni, y Scheffé.",
      "La realización siempre debe seguir al test $t$ o U de Mann-Whitney.",
      "Es necesario verificar la esfericidad antes de proceder.",
      "El tamaño muestral grande compensa la falta de ajuste."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Tras un ANOVA significativo, se utilizan pruebas post-hoc (Tukey HSD, Bonferroni, etc.) para identificar pares específicos significativamente diferentes. Estos métodos ajustan el $\\alpha$ global ($\\alpha_{adj} = \\alpha/m$) porque multiplicar múltiples pruebas aumenta el error Tipo I."
  },
  {
    "q": "¿Cuáles estructuras estadísticas o diseños experimentales requieren el uso de ANOVA?",
    "opts": [
      "Comparar medias de tres grupos o más.",
      "Analizar la interacción entre múltiples factores (ANOVA de dos o más vías).",
      "Evaluar si una variable categórica se asocia con otra mediante frecuencias observadas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El ANOVA está diseñado para comparar medias poblacionales. Puede manejar desde un solo factor hasta interacciones complejas y también se utiliza el principio de análisis de varianza (comparando la variación entre grupos vs dentro). Comparar asociaciones de categorías va más allá del alcance directo del ANOVA."
  },
  {
    "q": "¿Cuál es el test estadístico más adecuado para contrastar si dos variables categóricas están relacionadas entre sí en una tabla de contingencia?",
    "opts": [
      "Test $\\chi^2$ de independencia.",
      "Prueba Z de dos proporciones (cuando los datos son binarios).",
      "Test ANOVA (si se tratan las frecuencias como continuas).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test $\\chi^2$ de independencia es el estándar para evaluar la asociación entre variables categóricas. La prueba Z puede ser una aproximación si se cumplen ciertas condiciones de proporciones y se limita a dos grupos."
  },
  {
    "q": "¿Cuáles son las principales suposiciones del Test $\\chi^2$ (Chi-cuadrado) aplicadas a datos de contingencia?",
    "opts": [
      "Las frecuencias esperadas ($E_i$) deben ser iguales o mayores a 5 en la mayoría de las celdas.",
      "Se debe garantizar que el número total de observaciones sea grande para usar la aproximación normal.",
      "La distribución es inherentemente paramétrica.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El $\\chi^2$ depende fuertemente del tamaño muestral. La regla general son las frecuencias esperadas ($\\ge 5$). Aunque se usa una aproximación de distribuciones normales, el test en sí no exige la normalidad poblacional."
  },
  {
    "q": "¿Cuáles son las implicaciones o métodos necesarios cuando se detecta una violación de la suposición de esfericidad en un diseño de medidas repetidas?",
    "opts": [
      "Se debe aplicar la corrección de Greenhouse-Geisser.",
      "Es más seguro usar la prueba estadística Friedman.",
      "Los grados de libertad deben ajustarse usando Huynh-Feldt.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La esfericidad se refiere a que las varianzas de las diferencias entre todos los pares de mediciones son iguales. Si falla (test de Mauchly), debemos usar correcciones como Greenhouse-Geisser o Huynh-Feldt para corregir los grados de libertad."
  },
  {
    "q": "¿Cuáles tipos de variables deben ser manejadas exclusivamente por test estadísticos no paramétricos?",
    "opts": [
      "Variables ordinales.",
      "Datos que se desvían fuertemente de la normalidad en muestras pequeñas.",
      "Cuando el tamaño muestral es muy reducido y el análisis de robustez es clave.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tests no paramétricos son ideales para datos ordinales (ej: Likert) o cuando se viola severamente la normalidad asumida por los tests paramétricos."
  },
  {
    "q": "¿Cuáles conceptos estadísticos están relacionados con el objetivo de contrastar si una variable muestra un patrón de frecuencias esperado o teórico?",
    "opts": [
      "Test $\\chi^2$ de bondad de ajuste.",
      "Comparación entre datos observados y datos esperados ($O_i$ vs $E_i$).",
      "La distribución de la variabilidad residual ($\\text{SCR}$/$\\text{N-k}$).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test de bondad de ajuste compara lo que se observa con lo que se espera bajo una hipótesis nula específica (e.g., uniformidad o normalidad). La variación residual es el denominador del $F$."
  },
  {
    "q": "¿Cuáles son los objetivos o interpretaciones correctas al realizar un ANOVA de dos factores ($A \\times B$)?",
    "opts": [
      "Contrastar si el Factor A afecta la media, manteniendo constante el Factor B (Efecto principal A).",
      "Evaluar si existe una interacción significativa entre ambos factores.",
      "Determinar únicamente qué factor es más influyente en general.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un ANOVA factorial nos permite evaluar los efectos principales de cada factor por separado y, crucialmente, la *interacción* (si el efecto de A depende del nivel de B)."
  },
  {
    "q": "¿Cuál de estos supuestos debe cumplirse para que los resultados de un ANOVA tradicional sean válidos?",
    "opts": [
      "Homogeneidad de varianzas (homoscedasticidad).",
      "Normalidad de residuos en cada grupo.",
      "Independencia entre observaciones o grupos.",
      "Que la variable dependiente sea categórica."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "ANOVA requiere Normalidad de residuos, Homogeneidad de varianzas y que las muestras sean independientes. Si se viola el supuesto de independencia (ej. medidas repetidas), se debe usar otro tipo de test."
  },
  {
    "q": "¿Cuál es la interpretación correcta de un valor F estadísticamente significativo en ANOVA?",
    "opts": [
      "Que existe una diferencia significativa entre al menos dos medias poblacionales.",
      "Que el factor estudiado tiene influencia sobre la variable dependiente.",
      "Que se debe continuar con pruebas post-hoc para identificar las diferencias específicas.",
      "Que los datos están perfectamente distribuidos normalmente."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un F significativo no dice *dónde* está la diferencia (solo que existe), por lo tanto, requiere interpretaciones de múltiples medias. Además, en un contexto práctico, esto implica influencia y necesidad de análisis post-hoc."
  },
  {
    "q": "¿Cuáles son las propiedades o usos del Test $\\chi^2$ de bondad de ajuste?",
    "opts": [
      "Compara la distribución observada con una distribución teórica esperada.",
      "Determina si la variabilidad es uniforme a través de diferentes categorías.",
      "Se aplica cuando solo hay un parámetro (variable) categórico y se cuenta cuántas veces ocurre cada categoría.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La prueba de bondad de ajuste compara las frecuencias observadas con las frecuencias esperadas bajo una distribución nula. Se usa para determinar si los datos caen en un patrón esperado o no (ej., ¿son dados aleatorios?)."
  },
  {
    "q": "¿Qué supuesto debe verificarse rigurosamente antes de ejecutar cualquier ANOVA?",
    "opts": [
      "Homogeneidad de varianzas (Homoscedasticidad).",
      "Independencia de las observaciones.",
      "Normalidad de los residuos en cada grupo.",
      "Que todas las variables medidas sean categóricas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres son fundamentales: Normalidad y Homogeneidad afectan la validez del p-valor F; Independencia es un requisito fundamental para cualquier diseño experimental. Si se viola cualquiera de estos, los resultados pueden ser inválidos."
  },
  {
    "q": "¿Qué implica la descomposición $SCT = SCE + SCR$ en el contexto del ANOVA?",
    "opts": [
      "Que la varianza total es la suma de las varianzas medias y dentro de grupo.",
      "Que los efectos entre grupos ($SCE$) son ortogonales a la variación dentro de los grupos ($SCR$).",
      "Que nos permite estimar la fuente de variación atribuible al diseño versus el error residual.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Esta descomposición es el fundamento del ANOVA. SCT (Total) se descompone en SCE (Explicada por el factor) y SCR (Error Residual). Esta relación matemática permite calcular los grados de libertad y las Sumas Cuadradas."
  },
  {
    "q": "¿Cuáles son los supuestos críticos que deben cumplirse idealmente para interpretar correctamente un ANOVA tradicional?",
    "opts": [
      "Normalidad de residuos",
      "Homogeneidad de varianzas (homocedasticidad)",
      "Independencia de las observaciones",
      "Relación lineal entre variables"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los supuestos fundamentales de ANOVA son: Normalidad (los residuos deben ser normales), Homocedasticidad (las varianzas deben ser iguales) e Independencia (cada observación debe ser independiente de las demás)."
  },
  {
    "q": "¿Qué conceptos o herramientas son útiles después de ejecutar un ANOVA con múltiples factores?",
    "opts": [
      "Visualizar la interacción entre los niveles de los diferentes factores.",
      "Realizar análisis post-hoc para comparaciones específicas (ej. Tukey HSD).",
      "Verificar si se cumplen supuestos como homocedasticidad y normalidad en residuos.",
      "Asegurar que el número total de observaciones $N$ sea igual al número de grupos $k$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La detección de interacciones (opción 0) es clave. Si la ANOVA general es significativa, se usan post-hoc para pares específicos (opción 1). Siempre hay que verificar los supuestos estadísticos como la homocedasticidad y normalidad (opción 2). La opción 3 es incorrecta."
  },
  {
    "q": "¿Cuáles son las principales diferencias entre el test Kruskal-Wallis y ANOVA de un factor?",
    "opts": [
      "Kruskal-Wallis opera sobre rangos de datos en lugar de las puntuaciones originales.",
      "Kruskal-Wallis no requiere asumir normalidad ni homocedasticidad.",
      "ANOVA asume la independencia de las observaciones; Kruskal-Wallis también lo hace.",
      "Ambos test prueban si existe un promedio general entre los grupos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La principal ventaja de KW es que funciona sobre rangos (opción 0) y no asume normalidad/homocedasticidad (opción 1). Ambos tests comparten el supuesto fundamental de independencia de las observaciones. La opción 3 es incorrecta porque KW opera sobre la hipótesis de medianas o distribuciones similares, no directamente sobre medias."
  },
  {
    "q": "¿Cuáles son los efectos o condiciones que justifican el uso de las correcciones estadísticas en un análisis de medidas repetidas?",
    "opts": [
      "Violación del supuesto de esfericidad",
      "Comparar más de dos grupos en un solo factor",
      "Cuando se utilizan diseños de medidas repetidas complejas",
      "Alta correlación entre variables dependientes"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La corrección (como Greenhouse-Geisser o Huynh-Feldt) es necesaria si el supuesto de Esfericidad se viola. Esto ocurre específicamente en diseños de medidas repetidas cuando la varianza no cambia uniformemente a través de los niveles del factor. Comparar más de dos grupos no requiere necesariamente una corrección específica, pero sí las pruebas post-hoc."
  },
  {
    "q": "¿Cuál es el propósito principal de realizar un test post-hoc después de que un ANOVA ha demostrado ser significativo?",
    "opts": [
      "Confirmar si la diferencia media existe entre al menos dos grupos",
      "Identificar qué pares específicos de medias son estadísticamente diferentes",
      "Ajustar el nivel de significancia general ($\\alpha$) para evitar errores Tipo I múltiples",
      "Rechazar la hipótesis nula globalmente"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un ANOVA solo dice que *al menos* hay una diferencia. Los tests post-hoc (Tukey HSD, Bonferroni) son necesarios para identificar exactamente qué combinaciones de grupos difieren entre sí, y al hacerlo, se debe ajustar $\\alpha$."
  },
  {
    "q": "¿Cuáles de los siguientes métodos pueden ser usados para reducir el riesgo de errores Tipo I en comparaciones múltiples después de un ANOVA significativo?",
    "opts": [
      "Corrección de Bonferroni",
      "Prueba de Tukey HSD (HSD)",
      "Método de Scheffé",
      "Aumentar el tamaño muestral"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Bonferroni, Tukey y Scheffé son métodos específicos diseñados para controlar la Tasa de Error por Tipo I en comparaciones múltiples. Aumentar el tamaño muestral reduce el error Tipo II (potencia), pero no es una *corrección* estadística formal de las comparaciones."
  },
  {
    "q": "¿En un contexto experimental, ¿qué significa que los residuos sean normales y la varianza sea homogénea?",
    "opts": [
      "Los datos siguen una distribución normal y las varianzas entre grupos son iguales",
      "La relación lineal entre variables es constante en toda su gama",
      "Las muestras se obtuvieron de distribuciones idénticas",
      "Los tamaños muestrales deben ser siempre iguales para que el test sea válido"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Normalidad y homogeneidad (homoscedasticidad) son los dos supuestos clave del ANOVA. Indican que la distribución de errores es normal y que el parámetro de varianza ($\\sigma^2$) es constante en todos los grupos."
  },
  {
    "q": "¿En un análisis comparativo, ¿cuándo se debe considerar utilizar la prueba $\\chi^2$ de independencia?",
    "opts": [
      "Cuando queremos saber si dos variables categóricas están asociadas",
      "Cuándo el muestreo involucra una variable ordinal pero no la media es relevante",
      "Para determinar la proporción de individuos en diferentes categorías de forma independiente",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El $\\chi^2$ de independencia se usa en tablas de contingencia para evaluar si hay dependencia entre dos variables categóricas. También puede usarse para comparar proporciones (bondad de ajuste). Las otras opciones no describen el uso primario del test."
  },
  {
    "q": "¿Cómo debe interpretarse la descomposición $SCT = SCE + SCR$ en el contexto del ANOVA?",
    "opts": [
      "La Suma de Cuadrados Total es la suma de variaciones explicadas y no explicadas",
      "SCE representa la variación debida a las diferencias entre los grupos (factor)",
      "SCR representa la variación residual o error intrínseco dentro de cada grupo",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La descomposición separa la variación total ($SCT$). $SCE$ es lo que se explica por el factor estudiado (entre grupos). $SCR$ es la varianza natural o residual no explicada por el modelo."
  },
  {
    "q": "¿Si un investigador desea determinar si hay una relación de asociación entre el sexo y la preferencia política, ¿qué tipo de análisis estadístico debe emplear?",
    "opts": [
      "Test $\\chi^2$ de independencia",
      "ANOVA (asumiendo variables categóricas)",
      "Análisis factorial (PCA) o Regresión Logística",
      "Prueba T pareada"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si ambas variables son categóricas (Sexo: Hombre/Mujer; Preferencia: A/B), se debe usar el $\\chi^2$ de independencia. Si hubiera una variable continua como resultado y dos categorías (ej. Sexo), podría usarse un T o ANOVA simple."
  },
  {
    "q": "El test de Kruskal-Wallis es un sustituto no paramétrico ideal cuando se desea contrastar la mediana de tres o más grupos, pero ¿cuáles son sus supuestos implícitos y condiciones de uso? ",
    "opts": [
      "Las variables deben ser de escala ordinal o intervalo, y los datos deben provenir de muestras independientes.",
      "Se asume que las distribuciones subyacentes tienen formas similares (homogeneidad de forma).",
      "Es el alternativo directo al ANOVA de un factor.",
      "Requiere la verificación previa del supuesto de homocedasticidad."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Kruskal-Wallis reemplaza a ANOVA cuando se violan los supuestos paramétricos (normalidad o homocedasticidad). Requiere datos independientes y es el alternativo directo. El supuesto de formas similares ayuda en la interpretación comparativa."
  },
  {
    "q": "En relación con las medidas repetidas (ANOVA de medidas repetidas), ¿qué condiciones son críticas para aplicar correctamente este diseño? ",
    "opts": [
      "Los sujetos deben estar bajo un control estricto, y debe haber dependencia entre mediciones.",
      "Se debe asumir que el test de Mauchly ha indicado la violación del supuesto de esfericidad.",
      "Si se viola la esfericidad, deben aplicarse correcciones como Greenhouse-Geisser o Huynh-Feldt para corregir los grados de libertad.",
      "Los datos siempre deben ser paramétricos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El diseño de medidas repetidas implica que las mediciones provienen del mismo sujeto (dependencia). Esfericidad es el supuesto crítico; si se viola, la significancia puede estar incorrecta y se requieren correcciones para ajustar los grados de libertad."
  },
  {
    "q": "Si un estudio compara tres grupos con datos paramétricos, pero se sospecha una distribución altamente sesgada o presencia de outliers severos, ¿cuál sería el enfoque estadístico más apropiado?",
    "opts": [
      "Reemplazar ANOVA por Kruskal-Wallis.",
      "Transformar la variable (ej. logaritmo) y luego aplicar ANOVA.",
      "Recolectar más datos para aumentar el $N$ y mitigar el efecto de outliers.",
      "Aplicar una corrección post-hoc al ANOVA."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La mejor práctica es la transformación (si es factible) o recurrir a un test no paramétrico como Kruskal-Wallis. Si los supuestos se violan severamente y el $N$ es pequeño, transformar es generalmente el primer paso estadístico más robusto."
  },
  {
    "q": "Considere la fórmula de Suma de Cuadrados (SCT = SCE + SCR). ¿Qué representa cada componente en términos conceptuales? ",
    "opts": [
      "SCT: Variación total observada. SCE: Variación explicada por los grupos (entre medias). SCR: Residuos o variación no explicada dentro de los grupos.",
      "SCE mide la varianza interna. SCR calcula el efecto principal del factor. SCT es siempre cero si hay igualdad entre grupos.",
      "La descomposición de la suma de cuadrados solo se aplica a ANOVA de dos factores.",
      "Los componentes son mutuamente excluyentes y suman cero."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "SCT captura toda la dispersión; $SCE$ explica qué parte de esa dispersión es atribuible al efecto del factor (entre grupos); y $SCR$ es lo que queda, el ruido o error residual dentro de cada grupo."
  },
  {
    "q": "Si se está comparando la efectividad de tres tratamientos (A, B, C) en un diseño completamente aleatorizado y los residuos no son normales, el test estadístico más robusto para evitar asumir normalidad es:",
    "opts": [
      "Kruskal-Wallis.",
      "ANOVA de medidas repetidas (si aplica).",
      "Un análisis bayesiano que incorpore distribuciones robustas.",
      "La prueba U de Mann-Whitney (solo para pares)"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Aunque Kruskal-Wallis es el alternativo estándar si se asume la independencia y no normalidad, un análisis bayesiano ofrece mayor flexibilidad. Sin embargo, dentro del contexto clásico, KW es la respuesta más común para tres o más grupos independientes no normales."
  },
  {
    "q": "En ANOVA de medidas repetidas, ¿por qué es fundamental considerar el supuesto de Esfericidad? ",
    "opts": [
      "Asegura que las desviaciones estándar entre mediciones sean similares. Si se viola, afecta la precisión de los grados de libertad.",
      "Implica que todas las mediciones deben tener medias igualadas a cero (un requisito artificial).",
      "Solo es relevante si el número de condiciones repetidas ($n$) es mayor a 3.",
      "Garantiza que la distribución residual sea normal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La esfericidad se refiere a la varianza de las diferencias entre pares de mediciones. Si este supuesto falla, el estadístico F está sesgado e incompleto; por ello, deben aplicarse correcciones como Greenhouse-Geisser."
  },
  {
    "q": "Al realizar un ANOVA y obtener un $p$-valor significativo ($p < \\alpha$), ¿qué conclusión se extrae sobre las medias poblacionales ($\\mu_i$)? ",
    "opts": [
      "Se concluye que al menos dos de las medias poblacionales son significativamente diferentes entre sí.",
      "Se puede afirmar con certeza cuál es el mejor tratamiento (el más alto o más bajo).",
      "El test indica la dirección del efecto (ej. A > B), no solo su existencia estadística.",
      "Los datos deben estar perfectamente distribuidos normalmente para esta conclusión."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un ANOVA significativo *solo* indica que existe una diferencia entre las medias ($\\mu_i$). No dice cuáles son esas diferencias ni si el tratamiento A es mejor; eso requiere la inspección post-hoc. Nunca se puede afirmar con certeza sin un nivel de significancia $\\alpha$ definido."
  },
  {
    "q": "¿Cuáles son condiciones o supuestos cruciales para aplicar un ANOVA paramétrico estándar?",
    "opts": [
      "Normalidad de los residuos en cada grupo.",
      "Homocedasticidad (varianzas iguales) a lo largo de todos los grupos.",
      "Independencia entre las observaciones realizadas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "ANOVA requiere que la población de datos sea normal y que las varianzas de los diferentes grupos sean aproximadamente iguales (homocedasticidad). Además, cada medición debe ser independiente."
  },
  {
    "q": "¿Cuáles son métodos o conceptos utilizados después de obtener un ANOVA significativo para identificar dónde residen las diferencias específicas entre pares de medias?",
    "opts": [
      "Pruebas post-hoc como Tukey HSD.",
      "La aplicación del principio de Bonferroni.",
      "El test de Scheffé, que es más conservador.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si el ANOVA global resulta significativo (rechazando $H_0: \\mu_1 = \\dots = \\mu_k$), se necesita una prueba post-hoc para realizar comparaciones por pares controlando la Tasa de Error Tipo I. Tukey HSD y Bonferroni son ejemplos comunes."
  },
  {
    "q": "¿Cuáles de las siguientes pruebas son apropiadas cuando los datos violan severamente los supuestos paramétricos, especialmente en muestras pequeñas?",
    "opts": [
      "Kruskal-Wallis (alternativa a ANOVA un factor).",
      "Friedman (alternativa a medidas repetidas).",
      "Mann-Whitney U test (para dos grupos independientes).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuando la normalidad es cuestionable o los datos son ordinales, se recurre a tests no paramétricos. Kruskal-Wallis reemplaza ANOVA de un factor; Friedman reemplaza medidas repetidas."
  },
  {
    "q": "¿Cuáles son los parámetros que representan correctamente las Sumas de Cuadrados (SC) en un análisis ANOVA?",
    "opts": [
      "SCT: Descomposición total de variación.",
      "SCE: Variación atribuible a los factores (Entre grupos).",
      "SCR: Residual o error no explicado por el modelo (Dentro de grupos).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La descomposición total $SCT = SCE + SCR$ es la base del ANOVA. SCT es la variación total; SCE es lo que esperamos debido a los tratamientos/factores; y SCR es el error aleatorio."
  },
  {
    "q": "¿Qué diferencia conceptual clave existe entre el test $\\chi^2$ de bondad de ajuste y el test $\\chi^2$ de independencia?",
    "opts": [
      "El test de bondad de ajuste se usa cuando se compara una distribución observada contra una esperada teórica.",
      "El test de independencia evalúa si dos variables categóricas son estadísticamente dependientes entre sí.",
      "Ambos tests requieren que las frecuencias esperadas sean mayores o iguales a 5 en la mayoría de las celdas para ser válidos.",
      "La prueba de bondad de ajuste solo puede aplicarse con datos ordinales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El $\\chi^2$ de Bondad de Ajuste compara O vs E (Observado vs Esperado). El $\\chi^2$ de Independencia usa una tabla de contingencia para ver si las variables están relacionadas. Ambos comparten la condición crítica de $E \\ge 5$."
  },
  {
    "q": "¿Qué métodos estadísticos son apropiados como alternativas no paramétricas cuando se viola el supuesto de normalidad en una comparación entre múltiples grupos independientes?",
    "opts": [
      "ANOVA de un factor.",
      "Test U de Mann-Whitney (si hay solo dos grupos).",
      "Prueba Kruskal-Wallis H.",
      "Análisis de Regresión Lineal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Kruskal-Wallis es el equivalente no paramétrico al ANOVA de un factor. Si solo comparamos dos muestras independientes, usamos Mann-Whitney U."
  },
  {
    "q": "¿Cuándo sería apropiado utilizar un modelo de ANOVA de dos factores?",
    "opts": [
      "Cuando se quiere evaluar si la media de un grupo depende del nivel de otra variable categórica.",
      "Para medir cómo interactúan dos variables independientes en el efecto sobre una dependiente.",
      "Si las variables independientes tienen efectos principales y un componente de interacción significativa.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "ANOVA de dos factores permite analizar los efectos individuales (principales) de cada factor y, crucialmente, la interacción entre ellos."
  },
  {
    "q": "¿Cómo se debe interpretar el resultado de un test $\\chi^2$ de independencia?",
    "opts": [
      "Si el p-valor es bajo ($\\le 0.05$), rechaza la hipótesis nula e indica que las variables no son independientes.",
      "Indica si existe una asociación estadísticamente significativa entre dos variables categóricas.",
      "El valor calculado $X^2$ debe ser comparado con los grados de libertad (GL) para determinar el nivel de significancia.",
      "Solo se puede usar esta prueba en datos ordinales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un p-valor bajo en $\\chi^2$ indica dependencia. El cálculo requiere saber cuántos grados de libertad hay ($=(r-1)(c-1)$)."
  },
  {
    "q": "¿Qué implica conceptualmente el supuesto de homocedasticidad en un ANOVA?",
    "opts": [
      "Que los residuos sean independientes entre sí.",
      "Que las varianzas poblacionales de todos los grupos comparados son iguales ($\\sigma_1^2 = \\sigma_2^2$).",
      "Que la distribución de los residuos sea normal.",
      "Que el tamaño muestral ($N$) debe ser igual en todos los grupos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La homocedasticidad es el supuesto de que las varianzas (la dispersión) de la variable dependiente son iguales en todas las condiciones o grupos. Junto con normalidad y linealidad, son cruciales para la validez del ANOVA."
  },
  {
    "q": "¿Qué tipo de test se debe aplicar si se compara la media de tres mediciones tomadas sobre los mismos sujetos a diferentes momentos (tiempo)?",
    "opts": [
      "ANOVA de dos factores.",
      "Test t de muestras independientes.",
      "ANOVA de medidas repetidas (o diseño intra-sujeto).",
      "Chi-cuadrado de bondad de ajuste."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Dado que se mide la misma unidad ('sujetos') en tres ocasiones distintas (tiempo), esto constituye un diseño de medidas repetidas. El ANOVA para este diseño modela variaciones dentro del sujeto."
  },
  {
    "q": "¿Cuál es el papel de las Sumas de Cuadrados ($SCT, SCE, SCR$) en la estructura matemática del análisis ANOVA?",
    "opts": [
      "Descomponer la variación total observada en componentes atribuibles a grupos y residuales.",
      "Calcular directamente los grados de libertad ($\\text{df}$).",
      "Estimar la varianza poblacional (error) dentro de los grupos.",
      "Reemplazar el cálculo de las medias por un método más robusto."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La descomposición $SCT = SCE + SCR$ es fundamental: $SCE$ explica la variación *entre* grupos, y $SCR$ representa la variación *dentro* de los grupos (error residual)."
  },
  {
    "q": "¿Cuál es el test no paramétrico adecuado para sustituir a un ANOVA de un factor cuando se sospecha que los datos violan severamente la normalidad o la homocedasticidad?",
    "opts": [
      "Teste de Mann-Whitney U.",
      "Test de Kruskal-Wallis H.",
      "Análisis Discriminante Lineal (LDA).",
      "ANOVA de medidas repetidas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Kruskal-Wallis es el equivalente no paramétrico del ANOVA de un factor. Opera comparando las medianas o rangos en lugar de las medias, eliminando la dependencia de la distribución normal."
  },
  {
    "q": "¿Qué indica una corrección de Greenhouse-Geisser (GG) en el contexto de medidas repetidas?",
    "opts": [
      "Que se debe realizar una prueba post-hoc para identificar pares significativos.",
      "Que el supuesto de esfericidad ha sido violado (test de Mauchly).",
      "Que la varianza residual es muy grande comparada con la entre sujetos.",
      "Que solo se puede utilizar un modelo lineal simple."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test de Mauchly evalúa la esfericidad. Si es violado (y el valor p es significativo), la corrección GG ajusta los grados de libertad para corregir por la dependencia intra-sujeto y evitar un sobreestimar de la significancia."
  },
  {
    "q": "¿Qué implica el concepto de 'comparaciones múltiples' en el contexto post-hoc?",
    "opts": [
      "Aumenta drásticamente el riesgo de Tipo I (falso positivo) al realizar múltiples pruebas.",
      "Requiere ajustar el nivel alfa ($\\alpha$) para mantener la tasa de error global controlada.",
      "Suele llevar a utilizar métodos más conservadores, como Bonferroni o Scheffé.",
      "Indica que se debe cambiar de ANOVA a un test no paramétrico."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuando se realizan múltiples comparaciones (post-hoc), la probabilidad acumulada de cometer errores Tipo I aumenta. Por ello, es crucial ajustar $\\alpha$ (ej., Bonferroni) para controlar esta tasa global."
  },
  {
    "q": "¿Qué es el valor $F$ en el contexto estadístico del ANOVA?",
    "opts": [
      "Una razón que compara la variación entre grupos con la variación dentro de los grupos.",
      "Un indicador directo de la fuerza de la relación lineal (como $R^2$).",
      "Una medida de dispersión basada únicamente en los valores atípicos (outliers).",
      "El coeficiente utilizado para medir la asociación categórica."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El estadístico $F$ es el ratio fundamental del ANOVA: $\\text{Var}_{\\text{entre}} / \\text{Var}_{\\text{dentro}}$. Un valor alto sugiere que las diferencias entre grupos son mucho mayores que la variación aleatoria dentro de los grupos."
  },
  {
    "q": "¿Cuál es la principal desventaja al utilizar un test $t$ o ANOVA cuando los datos están muy sesgados (no normales)?",
    "opts": [
      "La potencia del test disminuye drásticamente, aumentando el riesgo de Tipo II.",
      "Los resultados pueden ser altamente sensibles a valores atípicos (outliers).",
      "Es imposible determinar la causalidad entre las variables medidas.",
      "Requiere necesariamente que los datos sean discretos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Aunque ANOVA es relativamente robusto, su base teórica asume normalidad. La violación de este supuesto, especialmente con sesgos extremos o outliers, puede hacer que la prueba sea inválida y poco fiable."
  },
  {
    "q": "¿Cuál de los siguientes afirmaciones sobre el $\\chi^2$ de independencia es incorrecta?",
    "opts": [
      "Si hay asociación, el valor $\\chi^2$ calculado será grande.",
      "El test solo considera variables nominales (categóricas).",
      "Un valor $\\chi^2$ cercano a cero sugiere que no hay asociación entre las variables.",
      "La significancia depende únicamente del tamaño de la muestra ($N$), sin importar la estructura de los datos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test $\\chi^2$ de independencia es sensible tanto al nivel de asociación como a $N$. Si bien un valor alto indica diferencia (asociación), no es cierto que la significancia dependa *solo* del tamaño de la muestra; requiere también suficiente evidencia en las frecuencias observadas."
  },
  {
    "q": "¿En el ANOVA de dos factores ($A \\times B$), ¿qué tipo de efecto se evalúa si los efectos principales ($A$ y $B$) son diferentes de su valor esperado por separado?",
    "opts": [
      "Un efecto de interacción (Interaction Effect).",
      "Una correlación parcial.",
      "La linealidad de la relación entre variables.",
      "El sesgo poblacional del error."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuando el efecto de un factor ($A$) depende del nivel o estado de otro factor ($B$), se habla de una interacción (ej., $A \\times B$). Este es uno de los objetivos más importantes del ANOVA factorial."
  },
  {
    "q": "¿Cuál es la principal diferencia conceptual entre realizar un test post-hoc tipo Bonferroni versus Tukey HSD?",
    "opts": [
      "Tukey HSD compara grupos en pares, mientras que Bonferroni ajusta $\\alpha$ para cualquier comparación ad-hoc.",
      "Bonferroni es más potente pero menos preciso; Tukey es siempre el preferido.",
      "Tukey considera la varianza poblacional y Bonferroni no lo hace.",
      "Ambos son intercambiables si se ajustan correctamente los grados de libertad."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Aunque ambos controlan $\\alpha$ en comparaciones múltiples, Tukey HSD está diseñado específicamente para comparar múltiples medias que provienen del mismo ANOVA (utilizando la varianza estimada) y es generalmente más potente. Bonferroni simplemente divide el $\\alpha$ total por el número de comparaciones ($m$), siendo muy conservador."
  },
  {
    "q": "¿Qué escenarios justifican el uso del test Kruskal-Wallis?",
    "opts": [
      "Cuatro o más grupos con datos ordinales.",
      "Alternativa no paramétrica a ANOVA de un factor.",
      "Cuando se viola el supuesto de normalidad y homocedasticidad.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Kruskal-Wallis compara si las medianas (o distribuciones) de tres o más grupos son iguales. Se utiliza cuando los datos no cumplen la normalidad o tienen escala ordinal; es el análogo no paramétrico directo de ANOVA de un factor."
  },
  {
    "q": "¿En el contexto de ANOVA, qué representan correctamente los términos Suma de Cuadrados (SC)?",
    "opts": [
      "$SCT$: suma total de variabilidad observada.",
      "$SCE$: variación explicada por las diferencias entre grupos.",
      "$SCR$: variación residual no explicada dentro de los grupos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La descomposición $SCT = SCE + SCR$ es fundamental. $SCT$ mide la variabilidad total; $SCE$ atribuye esa varianza a los tratamientos o factores (entre); y $SCR$ captura el error residual (dentro de grupos)."
  },
  {
    "q": "¿Cuáles son los pasos correctos al aplicar un análisis ANOVA?",
    "opts": [
      "Formular hipótesis nula ($H_0$: $\\mu_1 = \\mu_2 = ...$) y alternativa.",
      "Verificar supuestos (Normalidad, Homocedasticidad, Independencia).",
      "Calcular el estadístico F comparando la varianza entre grupos con la de dentro.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El proceso estadístico sigue un orden lógico: primero se establecen las hipótesis y se revisan los supuestos. Finalmente, si son válidos, se calcula $F$ para contrastar la hipótesis nula."
  },
  {
    "q": "¿Qué procedimientos o consideraciones aplican después de obtener un ANOVA significativo?",
    "opts": [
      "Realizar comparaciones múltiples post-hoc.",
      "Aplicar correcciones como Bonferroni o Tukey HSD.",
      "Utilizar Scheffé para análisis más conservadores.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si el ANOVA es significativo, solo nos dice que *algunos* grupos son diferentes. Para saber *cuáles* pares difieren (ej: Grupo A vs B), se deben aplicar pruebas post-hoc y correcciones para controlar la Tasa de Error Familiar."
  },
  {
    "q": "¿Cuándo debemos considerar el test $\\chi^2$ de bondad de ajuste?",
    "opts": [
      "Cuando comparamos una única variable categórica con distribuciones teóricas esperadas.",
      "Para determinar si las frecuencias observadas coinciden significativamente con valores predichos (ej: dados o monedas).",
      "Si los datos se recolectaron en un experimento binario (Sí/No).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Este test es útil para evaluar qué tan bien se ajustan las frecuencias observadas de una variable categórica a una distribución teórica o esperada. Se usa con datos de conteo."
  },
  {
    "q": "¿Qué implicaciones tienen la falta de independencia en los datos?",
    "opts": [
      "Infla el valor p, llevando a falsos positivos.",
      "Viola los supuestos y invalida las conclusiones del test estadístico.",
      "Generalmente requiere la aplicación de transformaciones de datos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La independencia es un supuesto crítico. Si no se cumple (ej: mediciones correlacionadas en el tiempo), el cálculo de varianzas y estadísticas como $F$ está comprometido, lo que puede llevar a conclusiones erróneas."
  },
  {
    "q": "¿Qué ajustes son necesarios cuando la condición de esfericidad es violada?",
    "opts": [
      "Greenhouse-Geisser o Huynh-Feldt deben aplicarse.",
      "Se debe reconsiderar el uso del ANOVA y pasar a un test no paramétrico.",
      "Las correcciones ajustan los grados de libertad para mantener la potencia estadística.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La esfericidad es crucial en medidas repetidas. Si se viola (test de Mauchly), se deben aplicar las correcciones Greenhouse-Geisser o Huynh-Feldt para corregir los grados de libertad y mantener la validez del test."
  },
  {
    "q": "¿Qué caracteriza al diseño de ANOVA de dos factores?",
    "opts": [
      "Evalúa el efecto principal de cada factor por separado.",
      "Permite probar la interacción entre los niveles de los diferentes factores.",
      "Requiere un análisis de varianza factorial ($F$) que combine ambos efectos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un diseño $2 \\times 3$ permite ver: 1) Efecto principal del Factor A. 2) Efecto principal del Factor B. 3) El efecto de Interacción (si el impacto de A depende del nivel de B)."
  },
  {
    "q": "¿Cuándo es imprescindible usar un test no paramétrico como Friedman?",
    "opts": [
      "Cuando se tienen datos de medidas repetidas y los supuestos de normalidad son muy restrictivos.",
      "Es el análogo no paramétrico de ANOVA de medidas repetidas.",
      "Se utiliza cuando las escalas de medición son ordinales o los residuos están altamente sesgados.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Friedman es la alternativa a un diseño de medidas repetidas (ANOVA R). Se usa si se sospecha que el supuesto de normalidad de los datos de cambio temporal no se cumple."
  },
  {
    "q": "¿Qué diferencia fundamental existe entre ANOVA y Kruskal-Wallis?",
    "opts": [
      "ANOVA opera con variables continuas, mientras KW solo acepta ordinales.",
      "KW trabaja comparando rangos estadísticos en lugar de medias aritméticas.",
      "ANOVA asume normalidad; KW es robusto a la violación del supuesto de distribución.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Conceptualmente, ambos contrastan diferencias de grupos. La diferencia clave es que ANOVA opera directamente sobre las medias (asumiendo parámetros), mientras que Kruskal-Wallis trabaja transformando los datos a sus rangos para evitar el supuesto paramétrico."
  },
  {
    "q": "¿Qué condiciones deben cumplirse en un test $\\chi^2$?",
    "opts": [
      "Los datos deben estar contados y ser categóricos.",
      "Las frecuencias esperadas ($E_i$) en cada celda deben ser $\\geq 1$.",
      "Idealmente, todas las frecuencias esperadas deben ser $\\geq 5$ para garantizar la aproximación normal.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test de $\\chi^2$ se basa en la aproximación normal. Por ello, es crítico que los datos sean categóricos y que el tamaño muestral sea suficiente (frecuencias esperadas $\\ge 5$) para que la distribución $\\chi^2$ sea válida."
  },
  {
    "q": "¿En el contexto del diseño experimental, ¿cuáles son los elementos clave a considerar antes de seleccionar un test estadístico?",
    "opts": [
      "La naturaleza de los datos (continuos vs. categóricos) y si se cumplen sus supuestos asociados.",
      "El tipo de comparación que se quiere hacer (un factor, dos factores o medidas repetidas).",
      "Si las muestras son paramétricas (normalidad) o si debemos recurrir a alternativas no paramétricas.",
      "La capacidad del estadístico para realizar cálculos complejos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La selección es guiada por: 1) Tipo de datos/supuestos; 2) Diseño experimental; y 3) La hipótesis (comparación entre grupos o variables)."
  },
  {
    "q": "¿Cuáles de los siguientes supuestos deben cumplirse rigurosamente para que la realización de un ANOVA tradicional sea válida?",
    "opts": [
      "Normalidad de residuos",
      "Homocedasticidad (varianzas iguales)",
      "Independencia de las observaciones",
      "Estadística $F$ siempre será positiva"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres supuestos fundamentales son: 1) Normalidad de los residuos en cada grupo. 2) Homocedasticidad (las varianzas deben ser iguales o muy similares a través de todos los grupos). 3) Independencia entre las observaciones."
  },
  {
    "q": "¿Qué tipo de test estadístico se utiliza para contrastar la independencia entre dos variables categóricas, y cuáles son sus condiciones principales?",
    "opts": [
      "Test de Chi-cuadrado ($\\chi^2$) de independencia",
      "Frecuencias esperadas deben ser $\\geq 5$ en la mayoría de las celdas",
      "Los datos deben estar organizados en una tabla de contingencia",
      "La significancia depende únicamente del valor $p$"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test $\\chi^2$ de independencia es el método estándar. Requiere que los datos sean categóricos y que las frecuencias esperadas (E) en la tabla no sean menores a 5 para asegurar la aproximación multinomial."
  },
  {
    "q": "¿Cuál es la función principal del estadístico $F$ en un ANOVA unidireccional, y qué implica su valor?",
    "opts": [
      "Comparar la varianza entre grupos con la varianza dentro de los grupos",
      "$F = CM_{entre}/CM_{dentro}$",
      "Un valor alto sugiere que el factor está teniendo un efecto significativo",
      "Indica directamente la magnitud del tamaño del efecto"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El estadístico $F$ es una razón de varianzas. Compara si la variación observada *entre* los grupos (debido al factor) es significativamente mayor que la variación esperada *dentro* de cada grupo (variación residual). Un valor grande y significativo indica fuerte evidencia contra la hipótesis nula."
  },
  {
    "q": "Respecto a las alternativas no paramétricas para el ANOVA un factor, ¿cuáles son los elementos clave?",
    "opts": [
      "Se utiliza Kruskal-Wallis cuando se viola la normalidad de residuos",
      "Opera sobre rangos de datos en lugar de medias",
      "Es una prueba más robusta que el ANOVA bajo supuestos violados",
      "Requiere calcular la suma total de cuadrados ($SCT$)"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Kruskal-Wallis es el análogo no paramétrico del ANOVA. Funciona usando rangos (datos ordenados) en lugar de los valores originales y se utiliza precisamente cuando se sospecha que la distribución poblacional no es normal o que los supuestos de varianzas iguales fallan."
  },
  {
    "q": "¿Qué diferencia hay entre un ANOVA de medidas repetidas y una prueba parametrizada como el t-test?",
    "opts": [
      "Permite modelar la correlación intra-sujeto",
      "Requiere que las mediciones se realicen en el mismo sujeto o unidad experimental",
      "Es sensible al orden temporal o secuencial de las mediciones realizadas",
      "El test estadístico utilizado es generalmente $\\text{F}$"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El ANOVA de medidas repetidas está diseñado específicamente para datos longitudinales donde se mide la misma variable en el mismo sujeto en múltiples momentos. Esto elimina la varianza individual del diseño (error entre sujetos), aumentando el poder estadístico."
  },
  {
    "q": "¿Cuáles son los pasos a seguir si un test de Mauchly indica una violación significativa del supuesto de esfericidad?",
    "opts": [
      "Utilizar la corrección Greenhouse-Geisser o Huynh-Feldt en el cálculo del $F$",
      "Interpretaciones deben ser más cautelosas respecto a los grados de libertad",
      "Revisar si se deberían utilizar pruebas no paramétricas",
      "Aplicar inmediatamente la corrección de Bonferroni"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si la esfericidad falla (p < $\\alpha$), no se debe usar el valor $F$ estándar. Se deben aplicar las correcciones específicas (Greenhouse-Geisser o Huynh-Feldt) que ajustan los grados de libertad para compensar esta violación, siendo siempre más seguro interpretar con cautela."
  },
  {
    "q": "¿En la interpretación del ANOVA de dos factores ($A \\times B$), ¿qué se está contrastando específicamente al revisar el término de interacción?",
    "opts": [
      "Si el efecto de A varía significativamente dependiendo del nivel de B",
      "La magnitud relativa del impacto de la combinación de factores sobre la variable dependiente",
      "Es un contraste crucial, pues indica que los efectos no pueden sumarse aditivamente",
      "Si los efectos principales de A y B son estadísticamente significativos por separado"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El término de interacción ($A \\times B$) es el más importante. Indica si el efecto de una variable (A) depende del nivel en el que se evalúe la otra variable (B). Si hay interacción, no tiene sentido interpretar los efectos principales por separado."
  }
];
