// Leccion 9 — 180 preguntas alternativas
// Generadas con gemma4 el 2026-07-04 12:47
// Distribucion: 60/60/60 (1c/2c/3c)
window.LESSON_QUESTIONS_ALT = window.LESSON_QUESTIONS_ALT || {};
window.LESSON_QUESTIONS_ALT[9] = [
  {
    "q": "¿Cuál es la interpretación correcta del Covariable $\\text{Cov}(X, Y) = 5$?",
    "opts": [
      "A. Cuando $X$ y $Y$ aumentan juntos, esta medida es positiva.",
      "B. Indica que existe una relación lineal fuerte entre las variables.",
      "C. El signo positivo solo significa que ambas variables son positivas.",
      "D. La unidad de $\\text{Cov}(X, Y)$ depende exclusivamente de la variable $Y$."
    ],
    "c": [
      0
    ],
    "exp": "La covarianza mide la dirección conjunta del cambio (asociación lineal). Un valor positivo ($\\text{Cov}(X, Y) > 0$) indica que las variables tienden a moverse en la misma dirección. Sin embargo, su magnitud depende de las unidades de medida de $X$ y $Y$, por lo que no indica necesariamente la fuerza de la relación."
  },
  {
    "q": "Si el coeficiente de correlación de Pearson $\\rho = -0.95$, ¿qué se puede afirmar sobre la relación entre X e Y?",
    "opts": [
      "A. Existe una fuerte asociación lineal negativa.",
      "B. Las variables tienen una relación causal directa y fuerte.",
      "C. La dispersión de los datos es insignificante, ya que $\\rho$ está cerca de $-1$.",
      "D. El valor negativo implica necesariamente que el modelo de regresión debe ser descendente."
    ],
    "c": [
      0
    ],
    "exp": "El signo y la magnitud de $\\rho$ indican la *dirección* y la *fuerza* de la asociación lineal, pero no la causalidad. Un valor cercano a $-1$ (como $-0.95$) significa que existe una fuerte tendencia: cuando $X$ aumenta, $Y$ tiende a disminuir fuertemente."
  },
  {
    "q": "¿Cuál es el objetivo primario del método de Mínimos Cuadrados Ordinarios (MCO)?",
    "opts": [
      "A. Minimizar la suma de los cuadrados de los residuos $\\sum(Y_i - \\hat{Y}_i)^2$.",
      "B. Garantizar que la pendiente ($\\beta_1$) sea igual a 1.",
      "C. Asegurar que el intercepto ($\\alpha$) siempre pase por el origen (0, 0).",
      "D. Estimar solo la varianza de $Y$, ignorando la de $X$."
    ],
    "c": [
      0
    ],
    "exp": "El objetivo fundamental del MCO es encontrar la línea recta que mejor ajuste los datos observados minimizando la suma total de los cuadrados verticales entre los puntos reales ($Y_i$) y los valores predichos ($\\hat{Y}_i$). Estos son precisamente los residuos."
  },
  {
    "q": "¿Cómo se calcula el coeficiente de determinación $R^2$?",
    "opts": [
      "A. Es la proporción de la varianza total de $Y$ que es explicada por el modelo.",
      "B. Siempre debe ser igual al cuadrado del coeficiente de correlación ($\\rho^2$).",
      "C. Indica cuán lejos está la dispersión de los datos originales respecto a la media de Y.",
      "D. Es una medida de dispersión que solo aplica cuando $n=1$."
    ],
    "c": [
      0
    ],
    "exp": "$R^2$ se interpreta como el porcentaje de varianza en la variable dependiente ($Y$) que es explicado por las variables independientes ($X$) a través del modelo. Matemáticamente, $\\text{R}^2 = \\frac{\\text{TSS} - \\text{RSS}}{\\text{TSS}}$, donde TSS es la suma total de cuadrados y RSS es la suma de cuadrados residuales."
  },
  {
    "q": "¿Qué implica un análisis de residuos adecuado en el contexto del MCO?",
    "opts": [
      "A. Los residuos deben estar distribuidos normalmente, lo cual valida supuestos estadísticos.",
      "B. La varianza de los residuos debe ser constante a lo largo de todos los valores predichos (Homocedasticidad).",
      "C. Ningún residuo debería caer fuera del rango [-3, 3], independientemente del modelo.",
      "D. El promedio de los residuos siempre debe ser igual a cero."
    ],
    "c": [
      0
    ],
    "exp": "El análisis de residuos es crucial para validar los supuestos del MCO. Los tres principales son: (1) Linealidad, (2) Normalidad de los residuos y (3) Homocedasticidad (varianza constante). El hecho de que $\\text{E}(\\epsilon)=0$ garantiza que el promedio sea cero."
  },
  {
    "q": "Respecto a la Covarianza, ¿cuál de las siguientes afirmaciones es correcta?",
    "opts": [
      "Sus unidades son el producto de las unidades de X y Y (e.g., cm*kg).",
      "Mide la fuerza y dirección de la relación lineal entre dos variables.",
      "Su valor está estandarizado y siempre oscila entre -1 y 1.",
      "Es una medida que asume causalidad entre las variables."
    ],
    "c": [
      0
    ],
    "exp": "La covarianza mide la asociación, pero su valor depende directamente de las unidades de medición utilizadas para X e Y, lo cual es su principal desventaja conceptual frente a la correlación."
  },
  {
    "q": "¿Qué supuestos básicos debe cumplir un modelo de Regresión Lineal para ser considerado estadísticamente válido?",
    "opts": [
      "Los errores (residuos) deben ser independientes entre sí.",
      "La relación entre X e Y debe ser lineal en la escala natural.",
      "El tamaño muestral debe ser suficientemente grande ($n \\gg 30$).",
      "La varianza de los errores ($\\sigma^2$) debe ser constante (homocedasticidad)."
    ],
    "c": [
      0
    ],
    "exp": "Aunque se pueden verificar muchos supuestos, el más crítico para la inferencia es que los residuos deben tener medias cero y ser homocedásticos (varianza constante) e independientes."
  },
  {
    "q": "¿Qué nos indica un coeficiente de correlación $\\rho$ cuyo valor es -0.9?",
    "opts": [
      "Existe una fuerte asociación lineal inversa entre X y Y.",
      "La relación es causal, pero en sentido opuesto.",
      "Indica que al aumentar X, Y tiende a disminuir significativamente.",
      "El modelo predictivo debe ser reemplazado por una transformación logarítmica."
    ],
    "c": [
      0
    ],
    "exp": "Un valor cercano a -1 indica una fuerte asociación negativa o inversa: cuando una variable aumenta, la otra disminuye consistentemente."
  },
  {
    "q": "¿Qué representa un residuo $(\\hat{e}_i)$ en el análisis de regresión?",
    "opts": [
      "La diferencia entre el valor observado ($y_i$) y el valor predicho ($\\hat{y}_i$).",
      "El error estándar del modelo, indicando la dispersión típica de los datos.",
      "Un indicador directo de que se ha violado el supuesto de normalidad en los errores.",
      "Es un coeficiente que corrige la pendiente debido a *outliers*."
    ],
    "c": [
      0
    ],
    "exp": "Por definición, el residuo es la distancia vertical entre el punto de dato observado y la recta de regresión ajustada. $(\\hat{e}_i = y_i - \\hat{y}_i)$."
  },
  {
    "q": "¿Cuál es la principal limitación conceptual al interpretar un alto valor de correlación ($\\rho$)?",
    "opts": [
      "No implica causalidad, solo asociación lineal.",
      "Puede ser influenciado por variables omitidas (confundimiento).",
      "Solo aplica a datos distribuidos normalmente.",
      "Requiere el uso obligatorio de transformaciones logarítmicas."
    ],
    "c": [
      0
    ],
    "exp": "El error estadístico más común es asumir que la correlación implica causalidad. Un alto $\\rho$ solo nos dice que hay un patrón, no quién causa qué."
  },
  {
    "q": "¿Cuál es la principal utilidad de calcular la covarianza $Cov(X, Y)$?",
    "opts": [
      "Determinar si existe una relación lineal entre dos variables.",
      "Calcular directamente el grado de asociación estandarizado.",
      "Estimar la pendiente $\\beta_1$ del modelo de regresión.",
      "Indicar necesariamente que ambas variables son normales."
    ],
    "c": [
      0
    ],
    "exp": "La covarianza es una medida de asociación lineal. Su signo indica la dirección (si aumenta $Y$ con $X$, o viceversa), pero su magnitud depende de las unidades originales, por lo que no es estandarizada."
  },
  {
    "q": "¿En el contexto del coeficiente de correlación $\\rho$, qué significa un valor cercano a -1?",
    "opts": [
      "Existe una fuerte relación inversa (negativa) entre X y Y.",
      "Las variables son independientes estadísticamente.",
      "El modelo debe ser lineal por definición.",
      "La varianza de las variables es cero."
    ],
    "c": [
      0
    ],
    "exp": "Un $\\rho$ cercano a -1 indica que cuando $X$ aumenta, $Y$ tiende a disminuir de manera fuerte y lineal. Es la medida más estandarizada de la asociación lineal."
  },
  {
    "q": "¿Qué principio fundamental utiliza el Método de Mínimos Cuadrados (MCO) para determinar la recta de mejor ajuste?",
    "opts": [
      "Minimizar la suma de los errores cuadráticos verticales ($\\sum (y_i - \\hat{y}_i)^2$).",
      "Maximizar la distancia promedio entre los puntos y la recta.",
      "Garantizar que el coeficiente $\\beta_1$ sea un número entero.",
      "Asegurar que $r^2 = 1$ siempre."
    ],
    "c": [
      0
    ],
    "exp": "El objetivo principal del MCO es encontrar la línea que minimiza la suma de los cuadrados de los residuos (errores verticales). Esto se logra encontrando el mejor ajuste estadístico."
  },
  {
    "q": "¿Qué mide específicamente el coeficiente de determinación $R^2$?",
    "opts": [
      "La proporción de varianza en la variable dependiente ($Y$) que es explicada por las variables predictoras incluidas en el modelo.",
      "Si el modelo de regresión debe ser rechazado (prueba F).",
      "El grado absoluto de asociación lineal, independientemente del signo.",
      "La desviación estándar residual."
    ],
    "c": [
      0
    ],
    "exp": "$R^2$ indica qué porcentaje de la variación total en $Y$ puede ser explicado por las variables predictoras ($X$) que están incluidas en el modelo. Es una medida de ajuste."
  },
  {
    "q": "¿Cuál es la implicación de calcular la covarianza con unidades de diferentes escalas (ej: horas y pesos)?",
    "opts": [
      "El valor calculado no tiene interpretación física o práctica sin normalizarlo.",
      "La magnitud numérica afecta directamente al tipo de relación observada.",
      "Se debe transformar una de las variables para que la covarianza sea unitaria.",
      "Indica necesariamente un problema con el modelo lineal."
    ],
    "c": [
      0
    ],
    "exp": "Debido a que la covarianza multiplica unidades diferentes (unidades_X * unidades_Y), su valor es sensible y no estandarizado. Por eso, se prefiere usar el coeficiente de correlación $\\rho$, que sí está normalizado entre -1 y 1."
  },
  {
    "q": "¿Qué tipo de relación lineal describe mejor la pendiente estimada $\\hat{\\beta}_1$ en un modelo simple?",
    "opts": [
      "La tasa promedio de cambio de $Y$ asociado a una unidad de aumento en $X$.",
      "El valor esperado de $Y$ cuando $X=0$.",
      "La desviación estándar total de $Y$.",
      "La diferencia entre la media y la mediana."
    ],
    "c": [
      0
    ],
    "exp": "La pendiente $\\hat{\\beta}_1 = \\frac{Cov(X, Y)}{Var(X)}$ representa el cambio esperado en $Y$ por cada unidad de aumento en $X$. Esencialmente, es una tasa marginal o promedio."
  },
  {
    "q": "Como profesor de estadística, cuando calculamos la covarianza $\\text{Cov}(X, Y)$, ¿qué propiedad fundamental se debe recordar?",
    "opts": [
      "Es una medida adimensional que va de -1 a 1.",
      "Indica la fuerza y dirección de la relación lineal entre X y Y.",
      "Sus unidades son el producto de las unidades de X y Y ($\\text{unidad}_X \\cdot \\text{unidad}_Y$).",
      "Su valor siempre debe ser negativo si existe correlación negativa."
    ],
    "c": [
      0
    ],
    "exp": "La covarianza es una medida de asociación lineal, pero su principal característica a recordar es que no está estandarizada; por lo tanto, sus unidades son dependientes de las variables originales ($\\text{unidad}_X \\cdot \\text{unidad}_Y$)."
  },
  {
    "q": "¿Cuál es el objetivo primario del Método de Mínimos Cuadrados Ordinarios (MCO) al ajustar una línea de regresión?",
    "opts": [
      "Maximizar la distancia entre los puntos y la recta ajustada.",
      "Minimizar la suma de los cuadrados de los residuos ($\\sum e_i^2$).",
      "Garantizar que todos los datos caigan exactamente sobre la recta.",
      "Encontrar el punto medio entre todas las observaciones."
    ],
    "c": [
      0
    ],
    "exp": "El corazón del MCO es encontrar la línea $\\hat{Y} = \\beta_0 + \\beta_1 X$ que minimiza la suma de cuadrados de los errores (residuos), donde $e_i = Y_i - \\hat{Y}_i$."
  },
  {
    "q": "¿Qué representa el Coeficiente de Determinación, $R^2$?",
    "opts": [
      "La pendiente promedio de la relación entre X e Y.",
      "El porcentaje de la varianza total de la variable dependiente (Y) que es explicado por el modelo de regresión.",
      "Una medida directa de la fuerza de correlación sin importar las unidades.",
      "La desviación estándar residual del conjunto de datos."
    ],
    "c": [
      0
    ],
    "exp": "$R^2$ es una métrica de bondad de ajuste. Indica qué proporción (porcentaje) de la variación total en $Y$ puede ser explicada por los valores de $X$ a través del modelo lineal."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre el Coeficiente de Correlación de Pearson ($\\rho$) es correcta?",
    "opts": [
      "$\\rho = 0$ implica necesariamente que no hay relación entre X e Y.",
      "Su rango siempre está acotado en $[-1, 1]$.",
      "Es sensible a la presencia de valores atípicos (outliers).",
      "Solo funciona si la relación es perfectamente lineal."
    ],
    "c": [
      0
    ],
    "exp": "Aunque $\\rho = 0$ sugiere que no hay correlación lineal *lineal*, es crucial recordar que podría haber una relación curvilínea fuerte. Además, dado que usa medias y desviaciones estándar, es susceptible a outliers."
  },
  {
    "q": "¿Qué significa conceptualmente un residuo $e_i$ en el análisis de regresión?",
    "opts": [
      "Es la diferencia entre el valor observado ($Y_i$) y el valor predicho por el modelo ($\\hat{Y}_i$).",
      "Representa la desviación estándar total de Y.",
      "Indica que el coeficiente de pendiente es cero.",
      "Solo se calcula si el predictor $X$ es nulo."
    ],
    "c": [
      0
    ],
    "exp": "El residuo ($e_i = Y_i - \\hat{Y}_i$) mide cuán lejos está un punto de datos individual del valor predicho por la línea de regresión. Es el error no explicado por el modelo."
  },
  {
    "q": "¿Cuál es la principal limitación o precaución al interpretar una alta correlación ($\\rho$ cercano a 1)?",
    "opts": [
      "Asumir que existe causalidad (X causa Y).",
      "Ignorar la importancia del tamaño de la muestra ($N$).",
      "Confundirla con la varianza total.",
      "Utilizarla en contextos donde los datos no son normales."
    ],
    "c": [
      0
    ],
    "exp": "El error más común es asumir causalidad. La correlación solo indica asociación lineal, pero por sí misma nunca establece que una variable cause el cambio en otra."
  },
  {
    "q": "¿Cuál de estos conceptos NO implica necesariamente una relación lineal o unidireccional?",
    "opts": [
      "La Causalidad.",
      "El Coeficiente de Correlación ($\\rho$).",
      "El Ajuste del Modelo de Regresión.",
      "El Valor Esperado (E[Y])."
    ],
    "c": [
      0
    ],
    "exp": "Solo la correlación y el ajuste lineal implican una relación direccional/lineal. La causalidad es un concepto filosófico que requiere un diseño experimental riguroso, no solo estadístico."
  },
  {
    "q": "Respecto a la Covarianza $\\text{Cov}(X,Y)$, ¿cuál de las siguientes afirmaciones es correcta?",
    "opts": [
      "Es una medida de asociación lineal que depende de las unidades de $X$ y $Y$.",
      "Su valor siempre está estandarizado entre -1 y 1.",
      "Indica directamente la fuerza relativa de la relación sin depender de las unidades.",
      "Solo se puede calcular si ambas variables son normales."
    ],
    "c": [
      0
    ],
    "exp": "La covarianza es una medida de asociación que indica la dirección de la relación (positiva o negativa), pero su magnitud depende de las unidades de medición originales, lo cual dificulta su interpretación directa de fuerza."
  },
  {
    "q": "¿Cuál es el propósito principal del ajuste de un modelo de regresión lineal simple $Y = \\beta_0 + \\beta_1 X$?",
    "opts": [
      "Predecir el valor esperado de una variable (Y) a partir de otra (X).",
      "Estimar la relación lineal promedio entre dos variables.",
      "Determinar si existe alguna correlación mínima entre las variables.",
      "Verificar que $X$ y $Y$ son necesariamente normales."
    ],
    "c": [
      0
    ],
    "exp": "El objetivo principal es modelar la relación lineal y usarla para hacer predicciones (estimar el valor esperado de Y dado X)."
  },
  {
    "q": "¿Cuál de los siguientes métodos se utiliza para encontrar la recta de regresión que mejor ajuste a un conjunto de datos?",
    "opts": [
      "Método de Mínimos Cuadrados Ordinarios (MCO).",
      "Regresión Logística.",
      "Análisis de Componentes Principales (PCA).",
      "Análisis de Varianza (ANOVA) de una vía."
    ],
    "c": [
      0
    ],
    "exp": "El método MCO minimiza la suma de los cuadrados de los residuos $(\\sum (Y_i - \\hat{Y}_i)^2)$, garantizando el mejor ajuste lineal."
  },
  {
    "q": "¿Qué representa un residuo $(\\epsilon_i)$ en el análisis de regresión?",
    "opts": [
      "El error aleatorio inherente al modelo que no es explicado por $X$.",
      "La diferencia entre el valor predicho y el valor real.",
      "Una medida del sesgo sistemático del modelo.$",
      "La variación esperada de la variable independiente."
    ],
    "c": [
      0
    ],
    "exp": "Un residuo es simplemente la diferencia entre el punto de datos observado ($Y_i$) y el valor predicho por la línea ($\\hat{Y}_i$), representando lo que el modelo no pudo explicar."
  },
  {
    "q": "¿Cuál es una característica fundamental del Coeficiente de Correlación de Pearson $\\rho$?",
    "opts": [
      "Su rango siempre está acotado entre -1 y 1.",
      "Mide la fuerza lineal (no solo la asociación).",
      "Requiere que ambas variables sean cuantitativas.",
      "Representa únicamente el grado de relación, no su dirección."
    ],
    "c": [
      0
    ],
    "exp": "El coeficiente $\\rho$ es una medida estandarizada de la correlación lineal, por lo tanto, está acotado entre -1 y 1, y mide qué tan fuerte es esa *relación* (no solo asociación)."
  },
  {
    "q": "¿Cuál debe ser el supuesto ideal del término de error $(\\epsilon)$ para que los estimadores MCO sean Eficientes e Insesgados?",
    "opts": [
      "Tener una media igual a cero ($\\mathbb{E}(\\epsilon_i) = 0$).",
      "Ser linealmente dependiente de $X$.",
      "Poseer varianza constante (Homoscedasticidad).",
      "Distribuirse normalmente."
    ],
    "c": [
      0
    ],
    "exp": "Para la estimación de parámetros, el supuesto más crítico es que los errores tengan media cero y varanza constante."
  },
  {
    "q": "¿Cuál es el significado estadístico del Coeficiente de Determinación $R^2$?",
    "opts": [
      "Mide la porción de la variabilidad total en $Y$ explicada por $X$.",
      "Indica cuán cerca están los puntos de datos de la línea recta.",
      "Es un indicador directo de causalidad entre las variables.",
      "Su valor siempre debe ser positivo."
    ],
    "c": [
      0
    ],
    "exp": "$R^2$ nos da el porcentaje ($\\text{varianza explicada} / \\text{varianza total}$) que nuestro modelo puede explicar, sin implicar necesariamente causa."
  },
  {
    "q": "¿Qué implica encontrar un coeficiente de correlación $\\rho = 0.05$?",
    "opts": [
      "Que la relación lineal es extremadamente débil o casi inexistente.",
      "Que las variables $X$ y $Y$ no tienen ninguna asociación en absoluto.",
      "Que los datos están perfectamente dispersos alrededor del origen.$",
      "Que el modelo predictivo es completamente inapropiado."
    ],
    "c": [
      0
    ],
    "exp": "Un valor cercano a cero (como 0.05) indica una relación lineal muy débil, pero no prueba la ausencia total de asociación."
  },
  {
    "q": "¿Cuál es la principal ventaja conceptual de utilizar $\\rho$ sobre la Covarianza?",
    "opts": [
      "Elimina la dependencia de las unidades de medición en el resultado final.",
      "Estandariza la medida, haciéndola comparable entre diferentes pares de variables.",
      "Permite determinar la causalidad directamente.",
      "Es más fácil de calcular manualmente."
    ],
    "c": [
      0
    ],
    "exp": "Al estandarizar la covarianza, $\\rho$ elimina la influencia de las unidades y escalas, permitiendo comparar la fuerza relativa de diferentes asociaciones."
  },
  {
    "q": "¿Qué debe hacer un analista después de obtener los residuos $(\\epsilon_i)$?",
    "opts": [
      "Verificar si cumplen con el supuesto de normalidad (Gráfico Q-Q).",
      "Comprobar si varían sistemáticamente con $\\hat{Y}$ (Homoscedasticidad).",
      "Asegurarse de que no haya valores atípicos extremos (Outliers) sin explicación.",
      "Evaluar la linealidad mediante gráficos de dispersión."
    ],
    "c": [
      0
    ],
    "exp": "El análisis de residuos es crucial para validar los supuestos del modelo: normalidad, homocedasticidad e independencia."
  },
  {
    "q": "¿Qué condición debe cumplirse para que un coeficiente de regresión $\\hat{\\beta}_1$ sea significativamente diferente de cero?",
    "opts": [
      "Que el intervalo de confianza (IC) a 95% no contenga el cero.",
      "Que el estadístico $t$ asociado al coeficiente sea mayor que un valor crítico.",
      "Que haya una correlación de Pearson $|\\rho| > 0$.",
      "Que la variable independiente $X$ tenga varianza alta."
    ],
    "c": [
      0
    ],
    "exp": "Si el IC del coeficiente no contiene el cero, rechazamos la hipótesis nula y concluimos que existe una relación lineal significativa."
  },
  {
    "q": "Según la teoría de regresión lineal, ¿cuál es el significado estadístico principal de un residuo ($\\epsilon_i$)?",
    "opts": [
      "Representa la variación en $Y$ no explicada por $X$.",
      "Indica que el modelo está sesgado hacia arriba.",
      "Mide la distancia vertical entre el punto predicho y el valor real.",
      "Es una medida de la variabilidad total de $Y$."
    ],
    "c": [
      0
    ],
    "exp": "El residuo, $\\epsilon_i = Y_i - \\hat{Y}_i$, mide precisamente la diferencia entre el valor observado ($Y_i$) y el valor predicho por el modelo ($\\hat{Y}_i$), cuantificando así la variación de $Y$ no capturada o explicada por la variable predictora $X$."
  },
  {
    "q": "¿Cuál es el rango posible para el coeficiente de correlación de Pearson, $\\rho$? (A)",
    "opts": [
      "Entre -1 y 1",
      "Menor que 0 y mayor que -1",
      "Solo positivo (mayor a 0)",
      "De -$\\infty$ a $+\\infty$"
    ],
    "c": [
      0
    ],
    "exp": "El coeficiente de correlación, $\\rho$, siempre está acotado entre -1 y 1. Un valor de 1 indica correlación positiva perfecta; -1 indica negativa perfecta; y 0 sugiere ausencia de asociación lineal."
  },
  {
    "q": "¿Cuál es la interpretación correcta si el coeficiente de determinación $R^2$ resulta ser 0.81?",
    "opts": [
      "El 81% de la varianza total de Y es explicado por X.",
      "El 81% de los datos varían en una escala estándar.",
      "Las variables son perfectamente lineales.",
      "La relación entre X y Y es nula."
    ],
    "c": [
      0
    ],
    "exp": "$R^2$ indica el porcentaje de varianza de la variable dependiente (Y) que puede ser explicada por las variables independientes ($X$). Un $R^2 = 0.81$ significa que el 81% de la variación de Y es atribuible a X."
  },
  {
    "q": "¿Cuál es la principal desventaja metodológica al usar directamente la covarianza $\\text{Cov}(X,Y)$ para comparar asociaciones entre diferentes pares de variables?",
    "opts": [
      "Sus valores dependen intrínsecamente de las unidades de medida utilizadas.",
      "Es más susceptible a outliers que $\\rho$.",
      "No puede medir relaciones no lineales.",
      "Asume linealidad en la relación."
    ],
    "c": [
      0
    ],
    "exp": "La covarianza es una medida de asociación, pero su valor depende tanto de las unidades de medida como de la escala utilizada. Por ello, se prefiere el coeficiente de correlación $\\rho$, que es adimensionado (estandarizado) y comparable entre diferentes variables."
  },
  {
    "q": "En el contexto de la covarianza $Cov(X,Y)$, ¿cuál es una propiedad fundamental que debe considerar siempre un analista estadístico?",
    "opts": [
      "Depende de las unidades de medida de las variables X e Y.",
      "Su signo indica la fuerza de la relación lineal.",
      "Sus unidades son adimensionales y universales.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "La covarianza es una medida de asociación que está intrínsecamente ligada a las unidades de medida. Si $X$ se mide en metros y $Y$ en segundos, la covarianza tendrá unidades de $\\text{metros} \\cdot \\text{segundos}$. Por ello, no puede interpretarse directamente como fuerza o dirección sin estandarizarla (lo cual lleva al coeficiente de correlación)."
  },
  {
    "q": "¿Qué indica el signo del Coeficiente de Correlación de Pearson ($\\rho$)?",
    "opts": [
      "La dirección de la relación lineal entre X y Y.",
      "Si los datos siguen una distribución normal perfecta.",
      "Cuán cerca están los puntos de formar un círculo perfecto.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "El signo de $\\rho$ nos dice la dirección: si es positivo, ambas variables tienden a aumentar juntas; si es negativo, cuando una aumenta, la otra tiende a disminuir. Sin embargo, el valor absoluto indica la fuerza."
  },
  {
    "q": "En el cálculo del coeficiente de pendiente ($\\hat{\\beta}_1$) en regresión lineal simple ($Y = \\hat{\\beta}_0 + \\hat{\\beta}_1 X$), ¿qué fórmula debe utilizarse?",
    "opts": [
      "$\\hat{\\beta}_1 = \\frac{Cov(X,Y)}{Var(X)}$",
      "$r^2 = (\\text{Corr}(X,Y))^2$",
      "$\\hat{\\beta}_1 = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}$",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "El coeficiente de pendiente ($\\hat{\\beta}_1$) es el ratio entre la covarianza de X y Y, dividido por la varianza de la variable predictora $X$: $\\hat{\\beta}_1 = \\frac{Cov(X,Y)}{Var(X)}$. La tercera opción es simplemente una forma expandida de esta fórmula."
  },
  {
    "q": "¿Cuál es el papel conceptual del análisis de residuos ($e_i$)?",
    "opts": [
      "Representan la diferencia vertical entre el valor observado $y_i$ y el valor predicho $\\hat{y}_i$.",
      "Son cruciales para verificar si se cumplen los supuestos estadísticos (ej. homocedasticidad).",
      "Si los residuos siguen una distribución normal, es un requisito vital de la regresión.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Los residuos ($e_i = y_i - \\hat{y}_i$) miden el error residual: cuánto se desvía realmente un punto de datos del modelo ajustado. Analizarlos permite validar si el modelo es adecuado (ej. que la varianza de los errores sea constante)."
  },
  {
    "q": "Según la teoría estadística, ¿qué caracteriza mejor a la Covarianza $\\text{Cov}(X, Y)$?",
    "opts": [
      "A) Es una medida de fuerza que varía entre -1 y 1.",
      "B) Su valor es independiente de las unidades de medida de X e Y.",
      "C) Indica la dirección de la asociación lineal entre dos variables.",
      "D) Solo se puede calcular si ambas variables son normales."
    ],
    "c": [
      0
    ],
    "exp": "La covarianza mide la *dirección* (si suben juntas o en direcciones opuestas) de una relación, pero su magnitud depende de las unidades. Por lo tanto, solo es una medida de asociación y no está estandarizada como el coeficiente $\\rho$."
  },
  {
    "q": "¿Cuál es la interpretación correcta del Coeficiente de correlación de Pearson ($\\rho$)?",
    "opts": [
      "A) Describe únicamente relaciones lineales entre variables.",
      "B) Su valor siempre debe ser positivo para indicar una fuerte asociación.",
      "C) Indica la fuerza y dirección de la relación lineal estandarizada.",
      "D) Si $\\rho = 0$, significa que no existe ninguna relación en absoluto."
    ],
    "c": [
      0
    ],
    "exp": "El coeficiente $\\rho$ es el indicador estándar, adimensional, de la fuerza *y* dirección de una asociación lineal. Un valor cercano a -1 o +1 implica una fuerte relación, mientras que cero sugiere ausencia de relación lineal."
  },
  {
    "q": "Al ajustar un modelo de regresión simple $Y = \\beta_0 + \\beta_1 X$, ¿qué representa el coeficiente $\\beta_1$ (pendiente)?",
    "opts": [
      "A) El cambio promedio esperado en Y por cada unidad de aumento en X.",
      "B) El valor predicho de Y cuando X es cero (intercepto).",
      "C) La varianza total explicada por la variable X.",
      "D) La desviación estándar residual del modelo."
    ],
    "c": [
      0
    ],
    "exp": "El coeficiente $\\beta_1$ mide el cambio promedio esperado en la variable dependiente (Y) asociado a un aumento unitario en la variable independiente (X). Este es el significado fundamental de la pendiente."
  },
  {
    "q": "¿Cuál es la principal limitación conceptual de la covarianza $Cov(X, Y)$?",
    "opts": [
      "Indica la dirección de la relación lineal entre dos variables.",
      "Su magnitud depende de las unidades de medida utilizadas para X e Y.",
      "Es una medida de asociación normalizada sin dependencia de las unidades.",
      "Solo puede ser calculada si ambas variables son normales."
    ],
    "c": [
      0
    ],
    "exp": "La covarianza indica la *dirección* (positiva o negativa) y la fuerza relativa de la relación lineal. Sin embargo, su valor absoluto está intrínsecamente ligado a las unidades de medida ($Unidad_X \\cdot Unidad_Y$), haciendo que esta no sea una medida de asociación universalmente comparable."
  },
  {
    "q": "¿Qué tipo de variable debe ser el foco principal al calcular el coeficiente de correlación de Pearson $\\rho$?",
    "opts": [
      "Variables continuas y numéricas.",
      "Variables que siguen una distribución normal o aproximadamente normal.",
      "Variables ordinales (rangos).",
      "Variables categóricas nominales."
    ],
    "c": [
      0
    ],
    "exp": "El coeficiente de correlación de Pearson ($\\rho$) está diseñado específicamente para medir la fuerza y dirección de una relación lineal entre dos variables que son continuas y numéricas. Aunque idealmente deberían ser normales, el requisito principal es que sean cuantificables en escala intervalar o razón."
  },
  {
    "q": "¿Qué función cumple el método de Mínimos Cuadrados Ordinarios (MCO) en la regresión lineal?",
    "opts": [
      "Minimizar la suma de los errores al cuadrado verticales (residuos).",
      "Asegurar que la recta pase necesariamente por el punto de origen (0, 0).",
      "Garantizar que $R^2 = 1$ siempre, indicando una relación perfecta.",
      "Estimar solo la pendiente ($\\beta_1$) ignorando el intercepto."
    ],
    "c": [
      0
    ],
    "exp": "El objetivo fundamental del MCO es encontrar la línea recta $\\hat{Y} = \\beta_0 + \\beta_1 X$ que minimice la suma de los cuadrados de las diferencias verticales entre los valores observados $y_i$ y los valores predichos $\\hat{y}_i$. Esta suma se define como la Suma Total de Cuadrados (SCT)."
  },
  {
    "q": "En la estadística, ¿qué mide primariamente el coeficiente de correlación de Pearson ($\\rho$)?",
    "opts": [
      "La asociación lineal entre dos variables aleatorias.",
      "La fuerza predictiva directa entre dos variables.",
      "La media de las variables involucradas.",
      "Cuán grande es la dispersión total de los datos."
    ],
    "c": [
      0
    ],
    "exp": "El coeficiente de correlación de Pearson ($\\rho$) mide la *fuerza* y la *dirección* de una relación lineal, indicando el grado de asociación. No mide dispersión ni predictibilidad absoluta, solo la linealidad."
  },
  {
    "q": "Al calcular el coeficiente de determinación ($R^2$), ¿qué indica su valor en 0.81?",
    "opts": [
      "Que aproximadamente el 81% de la variación de Y es explicada por X.",
      "Que la varianza restante por los residuos explica el 81% del total.",
      "Que existe una correlación lineal positiva muy fuerte.",
      "Que el modelo es perfecto y no hay variabilidad residual."
    ],
    "c": [
      0
    ],
    "exp": "$R^2$ representa la proporción de la varianza de la variable dependiente ($Y$) que es predecible a partir de las variables independientes ($X$). Un valor de 0.81 significa que el 81% de la variación de $Y$ está modelado por $X$. El error (residuos) explica el restante 19%."
  },
  {
    "q": "¿Cuál es el objetivo principal del Método de Mínimos Cuadrados Ordinarios (MCO)?",
    "opts": [
      "Encontrar la línea que minimice la suma de los cuadrados de los residuos ($\\sum \\epsilon_i^2$).",
      "Minimizar la suma de las diferencias entre Y y X.",
      "Estimar el valor promedio de Y para cualquier dado valor de X.",
      "Asegurar que todos los puntos caigan exactamente sobre la recta."
    ],
    "c": [
      0
    ],
    "exp": "El MCO busca estimar $\\hat{\\beta}_0$ y $\\hat{\\beta}_1$ encontrando la recta que, en promedio, minimice el error cuadrático (la suma de los cuadrados de las diferencias verticales entre los puntos reales y la línea estimada)."
  },
  {
    "q": "¿Cómo influye la elección de las unidades de medida al calcular el coeficiente de covarianza?",
    "opts": [
      "Al cambiar las unidades, solo se multiplica por un factor constante, manteniendo la forma del modelo.",
      "El resultado final será una magnitud más grande, pero su interpretación sigue siendo válida.",
      "La unidad de medida es irrelevante para determinar la dirección de la asociación.",
      "Si cambio $X$ a $10X$, el $\\text{Cov}(X, Y)$ también aumentará en 10."
    ],
    "c": [
      0
    ],
    "exp": "Debido a que $\\text{Cov}(X, Y) = E[(X-\\mu_x)(Y-\\mu_y)]$. Si multiplicamos $X$ por $k$, la covarianza se multiplica por $k$. Este cambio hace que el valor absoluto varíe, pero no cambia el *signo* ni la dirección de la asociación. Por eso $\\rho$ es preferido."
  },
  {
    "q": "¿Cuál es la principal diferencia conceptual entre la covarianza $\\text{Cov}(X, Y)$ y el coeficiente de correlación de Pearson $\\rho$?",
    "opts": [
      "La covarianza indica la magnitud y dirección conjunta del cambio, mientras que $\\rho$ lo normaliza.",
      "La covarianza siempre está estandarizada en un rango fijo.",
      "El coeficiente de correlación es adimensional y mide solo la fuerza lineal.",
      "Ambas medidas son indistinguibles si los datos están distribuidos normalmente."
    ],
    "c": [
      0
    ],
    "exp": "Correcto. La covarianza ($\\text{Cov}(X, Y)$) mide cuánto varían $X$ y $Y$ juntas (dirección y magnitud), pero su valor depende de las unidades de medida. El coeficiente de correlación ($\\rho$) estandariza esta relación dividiendo por la desviación estándar multiplicada por sí misma ($s_x s_y$), haciendo que $\\rho$ sea adimensional (rango $[-1, 1]$)."
  },
  {
    "q": "Desde una perspectiva conceptual, ¿qué representa la covarianza $Cov(X,Y)$?",
    "opts": [
      "Una medida de asociación que es independiente de las unidades de medida.",
      "El cambio esperado en $Y$ dado un cambio en $X$.",
      "La magnitud total del riesgo asociado a ambas variables.",
      "Solo mide la relación lineal cuando existe una transformación logarítmica."
    ],
    "c": [
      0
    ],
    "exp": "La covarianza, $Cov(X,Y)$, es la medida de asociación lineal. Su signo indica la dirección (positiva/negativa) y su valor absoluto depende completamente de las unidades de medida utilizadas para $X$ e $Y$. Por ello, el coeficiente de correlación ($\\rho$) se prefiere para interpretar la fuerza de la relación."
  },
  {
    "q": "¿Cuál es el cálculo del Coeficiente de Correlación de Pearson ($\\rho$)?",
    "opts": [
      "$\\rho = 0$, indica que no hay asociación lineal.",
      "$|\\rho| = 1$, implica una correlación perfecta (lineal).",
      "El valor siempre está entre -1 y 1, independientemente de la distribución.",
      "Su cálculo requiere normalizar la covarianza por las desviaciones estándar."
    ],
    "c": [
      0
    ],
    "exp": "El coeficiente de correlación de Pearson ($\\rho$) se calcula como $\\rho = \\frac{Cov(X,Y)}{s_x s_y}$. Sus propiedades clave son que siempre está acotado entre -1 y 1, y representa la fuerza y dirección estandarizada de la relación lineal."
  },
  {
    "q": "En el contexto de la covarianza $Cov(X,Y)$, ¿qué indica un valor positivo y significativo?",
    "opts": [
      "0",
      "Los valores se mueven en direcciones opuestas.",
      "1",
      "No hay asociación lineal."
    ],
    "c": [
      0
    ],
    "exp": "Una covarianza positiva significa que cuando X aumenta, Y también tiende a aumentar. Es una medida de asociación lineal."
  },
  {
    "q": "¿Qué representa el coeficiente angular $\\beta_1$ (pendiente) en un modelo de regresión simple $Y = \\beta_0 + \\beta_1 X$?",
    "opts": [
      "El cambio esperado en Y por cada unidad de aumento en X.",
      "La media esperada de Y cuando X es cero.",
      "La desviación estándar de Y sobre la desviación estándar de X.",
      "Una medida de dispersión total para Y."
    ],
    "c": [
      0
    ],
    "exp": "La pendiente $\\beta_1$ cuantifica el cambio promedio (cambio esperado) en la variable dependiente (Y) asociado a un cambio unitario en la variable independiente (X)."
  },
  {
    "q": "¿Cuál es la relación matemática clave entre la covarianza $Cov(X, Y)$ y el coeficiente de correlación $\\rho$?",
    "opts": [
      "$\\rho = \\frac{Cov(X,Y)}{\\sigma_X \\sigma_Y}$",
      "$Cov(X,Y) = \\rho^2 \\cdot Var(X)$",
      "Se debe usar la desviación estándar en lugar de la varianza.",
      "Solo se deben usar los datos de la muestra."
    ],
    "c": [
      0
    ],
    "exp": "El coeficiente de correlación $\\rho$ es la covarianza estandarizada. Se calcula dividiendo la covarianza por el producto de las desviaciones estándar ($\\sigma_X \\sigma_Y$), haciendo que su valor esté acotado entre -1 y 1."
  },
  {
    "q": "¿Qué se recomienda hacer cuando se detecta heteroscedasticidad (varianza no constante) en los residuos?",
    "opts": [
      "Usar modelos más avanzados como GLMs o transformaciones logarítmicas de las variables.",
      "Recalcular el $R^2$ manualmente para corregir la varianza.",
      "Asumir que es un error aleatorio y continuar con MCO estándar.",
      "Reducir el número de observaciones hasta alcanzar homoscedasticidad."
    ],
    "c": [
      0
    ],
    "exp": "La heteroscedasticidad viola los supuestos de MCO, haciendo que los errores estándar sean incorrectos. La solución más común es transformar las variables o utilizar métodos robustos (como WLS)."
  },
  {
    "q": "Cuando se calcula la covarianza $\\text{Cov}(X, Y)$, ¿cuál es su característica más importante?",
    "opts": [
      "Su signo indica la dirección de la relación lineal entre X e Y.",
      "Es una medida de asociación normalizada.",
      "Sus unidades son adimensionales y siempre iguales a 1 si hay correlación perfecta.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "La covarianza $\\text{Cov}(X, Y)$ mide la fuerza y la dirección de la asociación. Su signo (positivo o negativo) nos dice si las variables se mueven en direcciones similares o opuestas, respectivamente. Sin embargo, no es una medida estandarizada porque sus unidades dependen de las unidades de X e Y."
  },
  {
    "q": "¿Cuáles de estas afirmaciones describen correctamente el significado del valor $\\hat{\\alpha}$ (intercepto) en un modelo de regresión simple ($Y = \\alpha + \\beta X$)?",
    "opts": [
      "A. Representa el valor promedio esperado de $Y$ cuando la variable predictora $X$ es cero.",
      "C. Su interpretación solo es válida si $X=0$ está dentro del rango muestral observado (dominios).",
      "B. Es fundamental que, para cualquier análisis de datos, $\\hat{\\alpha}$ siempre sea positivo.",
      "D. Si el modelo es perfecto ($R^2=1$), entonces $\\hat{\\alpha}=0$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El intercepto ($\\hat{\\alpha}$) predice el valor esperado de $Y$ cuando $X=0$. Sin embargo, esta interpretación solo es válida si la condición $X=0$ tiene significado en el contexto físico o teórico del problema (ej. tiempo $= 0$). No hay ninguna regla que obligue a $\\hat{\\alpha}$ a ser positivo, y un modelo perfecto ($R^2=1$) no implica necesariamente que el intercepto sea cero."
  },
  {
    "q": "¿Cuáles son las propiedades fundamentales del Coeficiente de Correlación de Pearson ($\\rho$)?",
    "opts": [
      "Su valor siempre está acotado entre -1 y 1.",
      "Es simétrico (el correlacionar X con Y es igual a cor X con Y).",
      "Se puede calcular usando solo el número mínimo de datos en la serie.",
      "Mide la dispersión relativa sin importar las unidades de medida."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El rango [-1, 1] y la simetría son propiedades matemáticas clave. Su valor estandarizado lo hace independiente de las unidades (a diferencia de Cov)."
  },
  {
    "q": "¿Qué elementos se deben considerar al interpretar el modelo de regresión $Y = \\beta_0 + \\beta_1 X$?",
    "opts": [
      "El intercepto ($\\beta_0$) representa el valor esperado de Y cuando X es cero.",
      "La pendiente ($\\beta_1$) indica cuánto cambia en promedio Y por cada unidad incrementada de X.",
      "Asumir que $\\rho = 1$ significa que la relación lineal es perfecta y determinística.",
      "Solo se debe confiar en la variable predictora ($X$) con mayor variación."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El intercepto (valor de Y cuando X=0) y la pendiente (cambio esperado en Y por unidad de cambio en X) son las interpretaciones primarias. Asumir $\\rho=1$ es arriesgado porque ignora el error aleatorio."
  },
  {
    "q": "¿Qué supuestos deben validarse obligatoriamente al analizar residuos para garantizar que los p-valores y intervalos de confianza sean válidos?",
    "opts": [
      "Normalidad de los residuos (errores).",
      "Homoscedasticidad (varianza constante del error).",
      "Independencia de los residuos (no autocorrelación/autocorrelación cero).",
      "La linealidad es suficiente, el resto no es necesario."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tres supuestos clave son: Normalidad, Homoscedasticidad e Independencia. Si fallan, la inferencia estadística (test de hipótesis) puede ser inválida."
  },
  {
    "q": "¿Cómo se relacionan los conceptos de Covarianza y Correlación?",
    "opts": [
      "La correlación es simplemente una estandarización de la covarianza.",
      "Ambas miden asociación lineal, pero la correlación elimina el efecto de las unidades de medida.",
      "Si la covarianza es cero, necesariamente $\\rho$ debe ser cero.",
      "Son términos intercambiables en contextos estadísticos avanzados."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La relación matemática que define $\\rho$ es precisamente la estandarización de la Cov. Por eso, Cor mantiene su interpretación sin depender de las unidades."
  },
  {
    "q": "¿Cuáles son los principales supuestos que debe cumplir un modelo de regresión lineal para que sus estimaciones sean válidas (ELM)?",
    "opts": [
      "La relación entre X e Y debe ser lineal.",
      "Los residuos deben tener media cero ($E(\\epsilon)=0$).",
      "Los errores deben ser homocedásticos (varianza constante).",
      "Las variables predictoras $X$ deben estar perfectamente correlacionadas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para que los estimadores MCO sean eficientes y válidos: 1) Debe haber linealidad. 2) Los errores deben tener media cero (esencial para la identificación del modelo). El supuesto de homocedasticidad es crucial pero no siempre se incluye en las opciones correctas."
  },
  {
    "q": "¿En el contexto estadístico, ¿qué implica que exista una alta correlación $\\rho$ sin establecer causalidad?",
    "opts": [
      "Simplemente indica que dos variables tienden a moverse juntas.",
      "No establece un vínculo de causa y efecto entre ellas.",
      "El modelo de regresión siempre confirmará la relación de causa.",
      "Solo es relevante si las unidades son horas o dólares."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La correlación solo mide asociación. El hecho de que dos variables se muevan juntas (alta $\\rho$) no significa que una cause a la otra; puede haber una tercera variable subyacente (variable latente) que afecte ambas."
  },
  {
    "q": "¿Qué implica el coeficiente $\\beta_0$ (intercepto) en la ecuación $\\hat{Y} = \\beta_0 + \\beta_1 X$?",
    "opts": [
      "El valor predicho de Y cuando $X$ es cero.",
      "Su interpretación solo tiene sentido si $X=0$ es un caso posible en el contexto del problema.",
      "Un indicador de que la relación entre X e Y no existe.",
      "Es siempre igual a 1."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El intercepto ($\\beta_0$) predice $\\hat{Y}$ cuando $X=0$. Sin embargo, su interpretación solo es válida si tener $X=0$ tiene sentido físico o conceptual en el mundo real (ej. años de experiencia cero)."
  },
  {
    "q": "¿Qué representa la pendiente $\\beta_1$ en un modelo de regresión?",
    "opts": [
      "El cambio promedio esperado en Y por cada unidad de aumento en X.",
      "La tasa de crecimiento constante entre las variables.",
      "Una medida del riesgo asociado al nivel de X.",
      "El punto inicial predicho para la variable dependiente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "$\\beta_1$ es el cambio esperado (o cuota) de $Y$. Si aumenta $X$ en una unidad, se espera que $Y$ cambie en $\\beta_1$ unidades. Es la tasa marginal de cambio."
  },
  {
    "q": "¿Qué es estadísticamente más robusto al detectar asociaciones lineales fuertes pero con distribuciones muy sesgadas (skewed)?",
    "opts": [
      "El Coeficiente de Correlación de Pearson ($\\rho$).",
      "La Regresión Lineal Simple.",
      "Un análisis basado en percentiles o rangos.",
      "La Varianza total del conjunto de datos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Pearson asume normalidad y linealidad. Cuando la distribución es muy sesgada (no normal), métricas basadas en rangos o cuantiles son más robustas que Pearson, pero entre las opciones dadas, cuando se habla de detectar *asociaciones* lineales sólidas, el coeficiente de rango (Spearman) o métodos no paramétricos son mejores. Sin embargo, si comparamos $\\rho$ con la regresión lineal en sí misma, ambas fallan por la asimetría; pero dado que los rangos es un concepto más avanzado, seleccionamos las dos técnicas lineales que tienden a ser interpretadas como asociaciones: Pearson y Regresión (que ajusta una tendencia)."
  },
  {
    "q": "¿Si los residuos muestran patrones sistemáticos (ej., forma de U) en lugar de ruido aleatorio, ¿cuál es la implicación más probable?",
    "opts": [
      "Se deben considerar términos cuadráticos o logarítmicos para modelar mejor la relación.",
      "Los datos violan el supuesto de homocedasticidad (varianza constante).",
      "El modelo está ajustado correctamente y la variación restante es azarosa.",
      "La variable independiente $X$ no ha sido medida con suficiente precisión."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un patrón sistemático (curvatura) indica que el supuesto de linealidad es incorrecto. Debemos transformar la relación. Si solo hay un patrón y sigue la curva, es mejor añadir términos polinómicos o logarítmicos."
  },
  {
    "q": "¿Cuál es la diferencia fundamental entre 'Covarianza' y 'Correlación'?",
    "opts": [
      "La correlación está estandarizada (rango [-1, 1]), mientras que la covarianza no lo está.",
      "La covarianza requiere unidades de medida específicas para su cálculo.",
      "La correlación mide únicamente relaciones lineales; la covarianza puede medir otras asociaciones.",
      "El valor absoluto del coeficiente de correlación tiene una interpretación más intuitiva."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Este es un punto conceptual clave. La corrección estandariza la métrica (rango $[-1, 1]$) y elimina la dependencia de las unidades, lo que hace a la correlación interpretable sin conocer las escalas. La covarianza no tiene esta propiedad."
  },
  {
    "q": "¿Para calcular el coeficiente de correlación $\\rho$, se recomienda previamente transformar las variables utilizando...? ",
    "opts": [
      "Los estadísticos $Z$ (Estandarización).",
      "La transformación logarítmica si los datos son sesgados.",
      "El cálculo del promedio móvil para suavizar la tendencia.",
      "Solo es necesario calcular el estadístico de Pearson manualmente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para que $\\rho$ sea más robusto y se interprete correctamente en diferentes escalas o distribuciones (como cuando hay outliers), estandarizar los datos a puntuaciones $Z$ mitiga su impacto. Si además sabemos que la relación es curvilínea, usar transformaciones logarítmicas ayuda mucho."
  },
  {
    "q": "¿Qué propiedades son ciertas para las medidas de asociación lineal?",
    "opts": [
      "Son invariantes ante transformaciones lineales de variables.",
      "Su objetivo es cuantificar la tendencia conjunta entre dos variables cuantitativas.",
      "Se pueden calcular utilizando cualquier tipo de dato (nominal, ordinal).",
      "Requieren necesariamente que exista una relación causal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las medidas de asociación son robustas a transformaciones lineales. Están diseñadas para medir la *tendencia conjunta* (lineal), no pueden usar datos nominales."
  },
  {
    "q": "¿Cuáles son propiedades fundamentales del coeficiente de correlación de Pearson ($\\rho$)? (B)",
    "opts": [
      "Es simétrico: $\\text{Corr}(X, Y) = \\text{Corr}(Y, X)$",
      "Su valor está acotado entre -1 y 1.",
      "Solo puede calcularse si la relación es perfectamente lineal.",
      "Mide tanto la asociación como el grado de causalidad."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El coeficiente $\\rho$ es simétrico (el orden no importa) y siempre está acotado entre -1 y 1. Sin embargo, ninguna correlación implica necesariamente causalidad."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para que el método de Mínimos Cuadrados Ordinarios (MCO) sea un estimador eficiente?",
    "opts": [
      "Los residuos deben ser independientes e idénticamente distribuidos (i.i.d).",
      "La varianza del error debe ser constante (homoscedasticidad).",
      "El modelo debe asumir una relación perfectamente lineal.",
      "Se requiere que las variables X y Y sigan una distribución normal estricta."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para que MCO sea el mejor estimador lineal insesgado (BLUE), se requieren varias condiciones clásicas, incluyendo la homocedasticidad (varianza constante) e independencia de los errores."
  },
  {
    "q": "¿Cuáles son las principales interpretaciones del signo de la covarianza $\\text{Cov}(X,Y)$?",
    "opts": [
      "$\\text{Cov}(X,Y) > 0$: Asociación lineal positiva.",
      "$\\text{Cov}(X,Y) < 0$: Asociación lineal negativa.",
      "$\\text{Cov}(X,Y) = 0$: Ausencia de relación lineal (no necesariamente ninguna relación).",
      "Indica una causalidad directa entre las variables."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El signo de la covarianza indica la dirección de la asociación: positiva si ambas variables suben juntas; negativa si una sube mientras la otra baja. Un valor nulo solo sugiere ausencia de *asociación lineal*, no necesariamente que las variables sean independientes."
  },
  {
    "q": "¿Cuál es la relación conceptual entre los coeficientes $\\rho$, $\\beta_1$ y las desviaciones estándar ($\\sigma_X, \\sigma_Y$)?",
    "opts": [
      "$\\rho = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y}$",
      "El signo de $\\rho$ es idéntico al signo de $\\beta_1$.",
      "La magnitud de $|\\rho|$ puede ser utilizada para estimar la pendiente mínima del modelo.",
      "Los tres coeficientes son adimensionados e independientes en su cálculo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El coeficiente de correlación se define por la covarianza dividida por el producto de las desviaciones estándar. Ambos ( $\\rho$ y $\\beta_1$) tienen el mismo signo, ya que ambos miden la dirección de la asociación lineal."
  },
  {
    "q": "¿Cuáles son afirmaciones verdaderas respecto a la relación entre Covarianza y Correlación?",
    "opts": [
      "A) Si $\\text{Cov}(X, Y)$ es grande, significa que hay una fuerte asociación.",
      "B) El valor de correlación ($\\rho$) está siempre acotado entre -1 y 1.",
      "C) Una alta covarianza implica automáticamente un alto coeficiente de correlación.",
      "D) La correlación estandariza la asociación para eliminar el impacto de las unidades."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La afirmación A es incorrecta porque la covarianza depende de unidades. B es correcto porque $\\rho$ está acotado entre [-1, 1]. C es falso; una alta covarianza puede deberse simplemente a variables con unidades grandes, sin implicar necesariamente un patrón proporcional estandarizado (el cual es $\\rho$). D es la función principal de $\\rho$."
  },
  {
    "q": "¿Qué supuestos son cruciales para aplicar correctamente un Modelo de Regresión Lineal Simple?",
    "opts": [
      "A) La relación entre X e Y debe ser lineal.",
      "B) Los errores residuales deben tener una varianza constante (Homocedasticidad).",
      "C) Las variables X y Y deben seguir distribuciones normales.",
      "D) Los residuos no deben estar correlacionados entre sí (Independencia)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los supuestos clave son: la linealidad de la relación (A), la homogeneidad de la varianza residual o homocedasticidad (B), y la independencia de los errores (D). Aunque se desea normalidad para inferencias estadísticas más complejas, el supuesto fundamental para que MCO funcione bien es la LINEALIDAD."
  },
  {
    "q": "¿Qué información proporciona un análisis exhaustivo de residuos ($\\epsilon$)?",
    "opts": [
      "A) Permite identificar las observaciones donde el modelo falló en predecir valores (Outliers).",
      "B) Ayuda a verificar si los supuestos estadísticos del modelo (como la normalidad o homocedasticidad) se cumplen.",
      "C) Indica qué porcentaje de la varianza total es explicada por el modelo.",
      "D) Confirma que la relación entre X e Y es puramente causa-efecto."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los residuos son las diferencias entre los valores observados y los predichos. Su análisis es vital para detectar *outliers* (A), verificar el cumplimiento de supuestos como homocedasticidad (B) e independencia. No miden la proporción explicada ($\\%R^2$), ni prueban causalidad."
  },
  {
    "q": "¿Qué significa interpretar que $R^2 = 0.75$ en un modelo de regresión?",
    "opts": [
      "A) El 75% de la variabilidad de Y es explicada por el modelo de regresión.",
      "C) El error estándar del modelo es relativamente bajo.",
      "B) Existe una correlación perfecta y positiva entre X e Y.",
      "D) La pendiente $\\beta_1$ está muy cerca de un valor unitario."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La interpretación correcta de $R^2$ es que el porcentaje de varianza total en Y explicada por los predictores incluidos en el modelo (A). No implica una correlación perfecta ($\\rho=1$, B), ni cuantifica el error estándar directamente (C) o la pendiente (D)."
  },
  {
    "q": "¿Cuáles son características correctas del coeficiente de correlación de Pearson ($\\rho$)?",
    "opts": [
      "Es una medida de asociación sin unidades.",
      "Su valor siempre se encuentra en el rango $[-1, 1]$.",
      "Asume que la relación lineal es la mejor descripción de la asociación.",
      "Si $\\rho = 0$, implica necesariamente independencia estadística."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La correlación es adimensional (sin unidades), y por definición matemática, su valor está acotado entre -1 (asociación negativa perfecta) y +1 (asociación positiva perfecta). Sin embargo, $\\rho = 0$ solo implica ausencia de *relación lineal*, no necesariamente independencia total (solo si la distribución conjunta es normal se cumple que $\\rho=0 \\implies$ independencia)."
  },
  {
    "q": "¿Qué afirmaciones son correctas respecto a la interpretación del coeficiente de determinación $R^2$?",
    "opts": [
      "$R^2$ representa el porcentaje de varianza total en Y explicado por X.",
      "Cuanto más cerca esté $R^2$ de 1, mejor será el poder predictivo del modelo.",
      "$R^2$ es siempre positivo y menor o igual a 1 ($0 \\le R^2 \\le 1$).",
      "Implica que la relación causal entre X e Y ha sido probada estadísticamente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "$R^2$ (coeficiente de determinación) explica qué proporción de la variabilidad de la variable dependiente ($Y$) es explicada por el modelo lineal que incluye $X$. Un valor más cercano a 1 indica un ajuste mejor. Es crucial recordar que $R^2$ nunca implica causalidad, solo asociación."
  },
  {
    "q": "¿Cuáles de los siguientes conceptos definen correctamente el coeficiente angular (pendiente) $\\beta_1$ en un modelo de regresión?",
    "opts": [
      "La estimación del cambio promedio esperado en Y por cada unidad de aumento en X.",
      "Representa la tasa de variación marginal de $Y$ respecto a $X$.",
      "El valor de $Y$ cuando $X$ es cero (el punto de corte).",
      "Una medida que solo se aplica si los datos son perfectamente lineales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La pendiente $\\beta_1$ mide el cambio esperado en la variable dependiente ($Y$) por cada unidad de cambio en la variable predictora ($X$). Es una tasa de variación marginal. El valor que representa $Y$ cuando $X=0$ es la interpretación del intercepto ($\\beta_0$), no la pendiente."
  },
  {
    "q": "¿Qué implica conceptualmente una alta correlación positiva ($\\rho \\approx 1$) entre X e Y?",
    "opts": [
      "Que los puntos de datos tienden a formar una línea recta con pendiente positiva.",
      "Que el conocimiento de X permite predecir con mucha precisión el valor de Y.",
      "Que las variables son estadísticamente independientes, ya que solo la relación lineal es medida.",
      "Que existe un vínculo causal directo y comprobado entre ambas variables."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una correlación alta positiva significa que cuando X aumenta, Y también tiende a aumentar. Esto implica gran predictibilidad. Sin embargo, la estadística solo mide asociación (lineal) y nunca puede probar causalidad; para eso se requieren experimentos controlados."
  },
  {
    "q": "¿Qué condiciones deben cumplirse al calcular el coeficiente de correlación $\\rho$?",
    "opts": [
      "Ambas variables deben estar medidas en la misma escala o unidades.",
      "La relación debe ser lineal para que Pearson sea aplicable.",
      "Se requiere que las desviaciones estándar de ambas variables sean diferentes.",
      "Que los datos no contengan *outliers* extremos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para calcular $\\rho$, es ideal que $X$ y $Y$ estén en escalas comparables (mismas unidades) para que la medida sea coherente. Además, se basa en el supuesto de linealidad; si la relación es curva, Pearson subestimará fuertemente la fuerza real del vínculo."
  },
  {
    "q": "¿Qué interpretación correcta podemos dar al término 'asociación' estadística?",
    "opts": [
      "Indica que dos eventos ocurren juntos con más frecuencia de lo esperado por azar.",
      "Significa que los valores de las variables están vinculados en la práctica, sin implicar causa.",
      "Solo se puede medir mediante el coeficiente de correlación $\\rho$.",
      "Requiere necesariamente un diseño experimental controlado para ser válido."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La asociación simplemente indica que existe una tendencia o co-ocurrencia entre dos variables (ej. A y B suben juntas). Es vital entender que la estadística solo detecta patrones de *asociación* (co-variación), no causa, por lo cual los diseños experimentales son necesarios para establecer causalidad."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para que un modelo de regresión lineal simple ($Y = \\beta_0 + \\beta_1 X + \\epsilon$) sea válido y fiable?",
    "opts": [
      "Los residuos deben tener media cero.",
      "Los errores ($\\epsilon$) deben seguir una distribución normal independiente.",
      "La relación entre X e Y debe ser estrictamente lineal.",
      "Las variables X e Y deben estar perfectamente correlacionadas ($\\rho = 1$)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para que el modelo sea fiable, se requieren varios supuestos. Los dos más críticos son: 1) Linealidad de la relación; y 2) Normalidad e independencia de los residuos ($\\epsilon \\sim N(0, \\sigma^2)$). La opción [0] (media cero) es un requisito fundamental de homocedasticidad/exogeneidad."
  },
  {
    "q": "¿Qué implicaciones tiene la interpretación del coeficiente de covarianza ($\\text{Cov}(X, Y)$)?",
    "opts": [
      "Si $\\text{Cov}(X, Y) = 0$, implica que no hay asociación lineal (perpendicularidad).",
      "Es sensible a la unidad de medida de las variables ($X$ y $Y$).",
      "Su signo indica si X e Y varían conjuntamente.",
      "Cuanto mayor sea el valor absoluto, más fuerte es la relación."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El signo sí indica la dirección: positivo si varían juntos, negativo si se mueven en direcciones opuestas. Sin embargo, su magnitud depende de las unidades de $X$ e $Y$, lo cual es su principal limitación conceptual, a diferencia de $\\rho$."
  },
  {
    "q": "¿Qué función cumplen los puntos atípicos (outliers) en la estimación mediante MCO?",
    "opts": [
      "Pueden sesgar significativamente la línea de regresión ajustada.",
      "Deben ser analizados con técnicas robustas para evitar su influencia excesiva.",
      "No afectan a la estructura general del modelo si son pocos.",
      "Su presencia invalida automáticamente el uso de la correlación de Pearson."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los outliers tienen un gran poder sobre los mínimos cuadrados porque elevan cuadráticamente sus residuos. Por lo tanto, pueden sesgar severamente la estimación de $\\hat{\\beta}$. Es vital identificarlos y considerar métodos robustos."
  },
  {
    "q": "¿Cuál es el significado estadístico de una pendiente ($\\hat{\\beta}_1$) positiva en un modelo lineal?",
    "opts": [
      "A medida que X aumenta, se espera que Y aumente (en promedio).",
      "Indica que existe una relación funcional y no solo una coincidencia.",
      "Cuanto mayor sea $\\hat{\\beta}_1$, más fuerte es la dependencia de Y respecto a X.",
      "La variable $Y$ está directamente influenciada por $X$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un coeficiente positivo implica que existe una dirección positiva en la asociación. La interpretación formal es: por cada unidad de aumento en X, se espera un incremento de $\\hat{\\beta}_1$ unidades en Y. Esto establece una relación funcional estimada."
  },
  {
    "q": "¿Qué información clave proporciona el análisis de residuos al realizar regresión?",
    "opts": [
      "Permite verificar la validez de los supuestos del modelo (normalidad, homocedasticidad).",
      "Ayuda a identificar posibles relaciones no lineales o variables omitidas.",
      "Sirve para determinar si existe causalidad entre X y Y.",
      "Evalúa qué tan bien se ajustan los puntos reales a la línea teórica."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El análisis de residuos es vital: 1) Permite validar supuestos (p.ej., gráfica vs $X$ para ver homocedasticidad); y 2) Ayuda a diagnosticar problemas como variables omitidas o relaciones curvilíneas que el modelo lineal no capta."
  },
  {
    "q": "¿Qué tipo de relación sugiere un coeficiente de correlación de Pearson cercano a cero ($\\rho \\approx 0$)?",
    "opts": [
      "Que existe una asociación significativa, pero no es lineal (curvilínea).",
      "Que la variable $X$ no tiene poder predictivo sobre $Y$.",
      "Que las variables están relacionadas linealmente por una fuerza muy débil.",
      "Que el modelo de regresión debe ser reemplazado por un análisis cualitativo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un $\\rho \\approx 0$ solo implica que *no* hay una relación lineal detectable. No significa que no haya relación en absoluto (podría haber una relación cuadrática). Por lo tanto, la conclusión de falta de poder predictivo o la necesidad de cambiar el modelo es más apropiada."
  },
  {
    "q": "¿Qué elementos caracterizan correctamente al Coeficiente de Determinación ($R^2$)?",
    "opts": [
      "Es un valor adimensional que oscila entre 0 y 1.",
      "Representa el porcentaje de varianza de $Y$ explicado por el modelo.",
      "Un valor cercano a cero indica una relación lineal fuerte.",
      "Solo debe calcularse en modelos con variables categóricas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "$R^2$ es un coeficiente adimensional que varía entre 0 y 1. Su interpretación principal es la proporción de varianza total de la variable dependiente ($Y$) que puede ser explicada por las variables independientes incluidas en el modelo (el porcentaje de ajuste). Un valor cercano a 1 indica un buen ajuste."
  },
  {
    "q": "¿Cuáles son características correctas del Método de Mínimos Cuadrados Ordinarios (MCO)?",
    "opts": [
      "Estima la relación lineal $E(Y|X)$ minimizando los residuos cuadrados.",
      "Asume que los residuos ($\\epsilon$) tienen una media cero y varianza constante.",
      "Garantiza que el error residual sea necesariamente normal en todos los casos.",
      "Es un método adecuado solo si la relación es perfectamente lineal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El MCO busca minimizar la suma de los cuadrados de los residuos $\\sum (y_i - \\hat{y}_i)^2$. Un supuesto fundamental para su validez son los supuestos de Gauss-Markov, entre ellos que los residuos ($\\epsilon$) tienen media cero y varianza constante (homocedasticidad)."
  },
  {
    "q": "¿Qué interpretaciones sobre el modelo $Y = \\beta_0 + \\beta_1 X$ son correctas?",
    "opts": [
      "La pendiente $\\hat{\\beta}_1$ estima el cambio promedio en $Y$ por unidad de aumento en $X$.",
      "El intercepto $\\hat{\\beta}_0$ es el valor predicho de $Y$ cuando $X=0$.",
      "Si $\\hat{\\beta}_1 = 0$, implica que $X$ no afecta a $Y$ en absoluto.",
      "La significancia estadística (p-valor) solo se enfoca en la magnitud del coeficiente."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Interpretaciones correctas: La pendiente ($\\hat{\\beta}_1$) es el cambio predicho de Y por cada unidad de X. El intercepto ($\\hat{\\beta}_0$) es el valor predicho de Y cuando $X$ toma el valor cero. Si $\\hat{\\beta}_1 = 0$, la relación lineal predicha es nula."
  },
  {
    "q": "¿Cuáles son los requisitos fundamentales para que un análisis de regresión sea robusto?",
    "opts": [
      "Existe una correlación lineal significativa entre las variables.",
      "Los residuos deben ser homocedásticos (varianza constante).",
      "La distribución de los residuos debe aproximarse a la normalidad.",
      "Las observaciones no pueden contener valores atípicos (outliers) en absoluto."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para que un modelo sea robusto y sus inferencias válidas, se requiere: 1. Linealidad (la relación es lineal). 2. Homocedasticidad (varianza constante de los residuos). 3. Normalidad de los residuos (para hacer pruebas de hipótesis sobre parámetros)."
  },
  {
    "q": "¿Qué indica el análisis de residuos ($\\epsilon_i$)?",
    "opts": [
      "La distancia vertical entre cada punto y la línea de regresión ajustada.",
      "Si los residuos siguen un patrón sistemático, podría indicar que se omitió una variable importante.",
      "Indica cuán bien se ajustan los datos a un modelo cuadrático en lugar del lineal.",
      "Se usan únicamente para calcular el $R^2$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los residuos son la diferencia entre el valor observado ($y_i$) y el valor predicho ($\\hat{y}_i$), es decir, $\\epsilon_i = y_i - \\hat{y}_i$. Su análisis visual (gráfico de residuos) permite verificar los supuestos: si hay patrones o tendencias, se violan los supuestos del modelo."
  },
  {
    "q": "¿Cómo afecta la naturaleza de las variables al cálculo de correlación?",
    "opts": [
      "El coeficiente $\\rho$ es invariante ante cambios lineales en $X$ y $Y$.",
      "La covarianza cambia si se transforman las unidades de medida.",
      "Si una variable es categórica, el Coeficiente de Pearson no puede calcularse directamente.",
      "Solo se debe usar correlación cuando la relación es perfectamente lineal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El coeficiente $\\rho$ (y por lo tanto $Cov$) es invariante ante transformaciones lineales ($X' = aX+b$). La covarianza sí depende de las unidades. Además, Pearson requiere variables cuantitativas continuas."
  },
  {
    "q": "¿Qué propiedades se deben esperar de los coeficientes estimados en MCO?",
    "opts": [
      "Son estimadores insesgados (unbiased) bajo ciertas condiciones.",
      "Sus errores estándar son críticos para realizar pruebas de hipótesis válidas.",
      "Si el modelo es perfecto ($R^2=1$), todos los residuos serán cero.",
      "Estiman la relación lineal causal, independientemente de si realmente existe una causalidad."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Bajo supuestos estándar (Gauss-Markov), los estimadores MCO son insesgados y eficientes. El uso de errores estándar es crucial para determinar la significancia estadística. Es vital recordar que $R^2$ solo indica asociación, no causalidad."
  },
  {
    "q": "¿Qué implica un resultado de correlación muy débil ($|\\rho| \\approx 0$)?",
    "opts": [
      "No existe relación lineal discernible entre las variables.",
      "Podría existir una relación fuerte pero no lineal (ej. parabólica).",
      "El modelo de regresión lineal simple no es apropiado para los datos.",
      "Implica que la varianza conjunta de $X$ y $Y$ es cero."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un $\\rho \\approx 0$ significa que, en promedio, las variables no se mueven juntas linealmente. Sin embargo, esto NO descarta completamente otras relaciones (como parábolas o curvas) que deben ser detectadas con análisis más avanzados."
  },
  {
    "q": "¿Qué supuesto de MCO debe verificarse mediante el gráfico de residuos?",
    "opts": [
      "La línea de mejor ajuste pasa por el centro estadístico de los datos.",
      "Los errores no deben mostrar patrones sistemáticos (ej. en forma de U).",
      "Los residuos deben tener una varianza constante a lo largo del rango de $X$ (Homocedasticidad).",
      "Que las variables sean independientes entre sí."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El gráfico de residuos es la herramienta principal para validar los supuestos: 1. Linealidad (no se debe ver un patrón curvo). 2. Homocedasticidad (la dispersión debe ser constante en todo $X$). 3. Independencia (los residuos no deben depender del orden)."
  },
  {
    "q": "¿Cómo se interpreta el intercepto $\\hat{\\beta}_0$ y la pendiente $\\hat{\\beta}_1$?",
    "opts": [
      "Ambos coeficientes son estimaciones de los parámetros poblacionales ($\\beta_0, \\beta_1$).",
      "La pendiente indica cuánto cambia $Y$ por una unidad cambio en $X$.",
      "El intercepto es el valor predicho teórico cuando $X=0$.",
      "Si se extrapola fuera del rango de datos observados (Out-of-sample), la interpretación pierde validez."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los coeficientes $\\hat{\\beta}$ son estimaciones puntuales poblacionales. La pendiente es el cambio promedio predicho por $X$. El intercepto es la predicción teórica en cero. Sin embargo, extrapolar (usar valores de X fuera del rango muestral) siempre conlleva un riesgo alto y puede ser engañoso."
  },
  {
    "q": "¿Qué se entiende correctamente como 'asociación lineal'?",
    "opts": [
      "Una relación que solo puede medirse con el coeficiente $\\rho$.",
      "La tendencia donde el cambio en $X$ está proporcionalmente relacionado al cambio en $Y$.",
      "Indica causalidad directa entre las variables. (¡Incorrecto!)",
      "Requiere estrictamente que los datos sigan una distribución normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Asociación lineal significa que existe una tendencia de movimiento conjunta (creciente o decreciente) siguiendo una línea recta, medida por $\\rho$. Es crucial recordar estadísticamente que la correlación/asociación nunca implica causalidad."
  },
  {
    "q": "¿Qué papel cumplen los supuestos en la validez del modelo MCO?",
    "opts": [
      "Permiten que el modelo pueda capturar relaciones no lineales complejas.",
      "Aseguran que las inferencias sobre $\\beta$ y $p$-valores sean válidas (Estándar de eficiencia).",
      "Exigen que todos los puntos caigan perfectamente sobre la recta ajustada ($R^2=1$).",
      "Son necesarios para confirmar una relación causal, más allá del mero ajuste estadístico."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los supuestos (linealidad, homocedasticidad, normalidad de residuos) no son *necesarios* para calcular $\\hat{\\beta}$ (que sigue siendo el MCO), sino que son necesarios para garantizar que las propiedades estadísticas inferenciales (p-valores, intervalos de confianza) sean válidas. Además, ningún modelo real puede esperar $R^2=1$."
  },
  {
    "q": "¿Qué se puede concluir sobre la interpretación del coeficiente $\\hat{\\beta}_1$?",
    "opts": [
      "Es el cambio promedio esperado en $Y$ por un aumento unitario en $X$.",
      "Su signo indica la dirección de la asociación (positiva o negativa).",
      "Su magnitud ayuda a cuantificar la fuerza relativa de la relación. ",
      "Solo es significativo si su valor p-valor es menor que 0.05."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La interpretación primaria es el cambio promedio esperado en Y. El signo indica dirección (si $\\hat{\\beta}_1 > 0$, positivo; si $< 0$, negativo). La significancia estadística ($p$-valor) solo confirma que este cambio *no* es probablemente cero, pero la magnitud sigue siendo su utilidad principal."
  },
  {
    "q": "¿Qué se puede inferir de un coeficiente de correlación $\\rho$ cercano a -1?",
    "opts": [
      "Existe una fuerte asociación lineal negativa.",
      "Los datos son perfectamente lineales, con Y decreciendo al aumentar X.",
      "El modelo de regresión es inviable.",
      "La relación debe modelarse usando una función cuadrática."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un $\\rho$ cerca de -1 indica que existe una fuerte asociación negativa. Los puntos tienden a formar una línea descendente (aunque no necesariamente perfecta), indicando que Y disminuye significativamente cuando X aumenta."
  },
  {
    "q": "¿Cuál es el significado estadístico del término $R^2$ (Coeficiente de Determinación)?",
    "opts": [
      "Representa la proporción de la varianza total de Y que es explicada por las variables predictoras en el modelo.",
      "Es un valor acotado entre 0 y 1, donde más alto es mejor.",
      "Mide cuán cerca están los puntos observados de una línea recta perfecta.",
      "Indica la causalidad directa entre X e Y."
    ],
    "c": [
      0,
      1
    ],
    "exp": "$R^2$ mide el ajuste del modelo. Un $R^2 = 0.80$ significa que el 80% de la variación observada en Y se debe a las variables incluidas en el modelo (X)."
  },
  {
    "q": "¿Qué tipo de relación lineal es asumida por el método de Mínimos Cuadrados Ordinarios (MCO)?",
    "opts": [
      "Lineal y con una varianza constante.",
      "Normal, independiente y no correlacionada.",
      "La pendiente debe ser siempre positiva.",
      "El intercepto $\\beta_0$ debe pasar necesariamente por el origen $(0, 0)$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los supuestos fundamentales de MCO incluyen: linealidad (relación recta), homocedasticidad (varianza constante) y normalidad de los residuos. El intercepto no necesita pasar por el origen."
  },
  {
    "q": "¿Cuál es la diferencia conceptual entre correlación ($\\rho$) y causalidad?",
    "opts": [
      "La correlación indica asociación, mientras que la causalidad requiere un mecanismo físico probado.",
      "No hay relación directa: se necesita el conocimiento del fenómeno subyacente (teoría).",
      "Correlación alta garantiza causa; bajo $R^2$ lo niega.",
      "Son sinónimos en estadística aplicada."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La correlación solo mide asociación. El hecho de que X y Y varíen juntas no implica que X cause Y; podría haber una variable oculta (confundidora)."
  },
  {
    "q": "¿Qué representan los residuos $\\epsilon$ en el contexto del modelo $Y = \\beta_0 + \\beta_1 X + \\epsilon$?",
    "opts": [
      "La variación en Y no explicada por el modelo y atribuible a variables omitidas o errores aleatorios.",
      "El error estándar muestral, que mide la dispersión de los coeficientes estimados.",
      "La parte teórica del fenómeno, independiente de las mediciones realizadas.",
      "Una violación directa del supuesto de linealidad."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los residuos son la diferencia entre el valor observado y el valor predicho ($\\hat{\\epsilon} = Y - \\hat{Y}$). Representan la porción de variabilidad de Y que nuestro modelo no logra explicar."
  },
  {
    "q": "¿Qué implica un coeficiente $R^2$ cercano a cero?",
    "opts": [
      "El modelo lineal es inútil para predecir el valor de Y.",
      "La variable predictora X tiene muy poca capacidad explicativa sobre la variación total de Y.",
      "Los datos son perfectamente aleatorios y no siguen ningún patrón discernible.",
      "Indica que $Cov(X,Y)$ debe ser cero."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un $R^2$ cercano a cero indica que el modelo lineal ajustado es muy pobre. La variación en Y es predominantemente explicada por factores no incluidos en X."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones describe correctamente la relación entre $Cov(X, Y)$ y $\\rho$?",
    "opts": [
      "Si $Cov(X,Y) = 0$, necesariamente $\\rho = 0$.",
      "El signo de la covarianza es el mismo que el signo del coeficiente de correlación.",
      "Si $\\rho = 1$, entonces $Cov(X,Y)$ debe ser cero.",
      "Ambas son medidas completamente independientes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Debido a que $\\rho$ estandariza la covarianza dividiendo por las desviaciones estándar (que siempre son positivas), mantienen el mismo signo. Por lo tanto, si $Cov(X,Y)=0$, implica linealmente que $\\rho=0$."
  },
  {
    "q": "¿Qué se debe tener en cuenta al interpretar los coeficientes de regresión ($\\beta_0, \\beta_1$)?",
    "opts": [
      "El intercepto $\\beta_0$ solo tiene sentido si $X=0$ es un valor posible y significativo en el contexto real.",
      "Los cambios predichos deben interpretarse manteniendo las unidades originales del problema (ej: dólares, horas).",
      "La pendiente $\\beta_1$ siempre debe ser diferente de cero para que el modelo sea útil.",
      "Siempre se deben usar los datos de la población, nunca solo una muestra."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El intercepto es crucial verificar su sentido. La pendiente debe mantenerse en el contexto de las unidades. Nunca podemos asumir que lo observado en una muestra representa perfectamente a toda la población sin pruebas de hipótesis."
  },
  {
    "q": "¿Cuál es el objetivo fundamental al construir un modelo de regresión lineal?",
    "opts": [
      "Describir la relación promedio entre dos variables continuas y permitir predicciones basadas en esa relación.",
      "Crear una función que minimice la suma de los cuadrados de las diferencias verticales (residuos).",
      "Determinar si existe una causalidad directa e irreversible entre X e Y.",
      "Calcular el valor exacto de Y para cada punto de datos sin necesidad de modelos estadísticos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El objetivo es doble: describir la tendencia lineal y proveer un mecanismo predictivo usando el principio de mínimos cuadrados."
  },
  {
    "q": "¿Cuáles son propiedades clave del Coeficiente de Correlación de Pearson $\\rho$?",
    "opts": [
      "Es un valor que siempre se encuentra entre -1 y 1.",
      "Su interpretación indica la fuerza lineal de la relación, independientemente de las unidades de medición.",
      "Si $\\rho = 0$, esto implica necesariamente que no existe relación alguna entre X e Y.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El coeficiente de correlación de Pearson ($\\rho$) es adimensional y su rango [-1, 1] mide la fuerza lineal. Si bien $\\rho=0$ sugiere ausencia de *correlación lineal*, no prueba que no haya relación (podría ser una relación cuadrática o exponencial)."
  },
  {
    "q": "¿Cuál de las siguientes interpretaciones del coeficiente $b_1$ (pendiente de regresión) es correcta?",
    "opts": [
      "Representa la variación promedio en Y cuando X aumenta en una unidad.",
      "Mide la mejor estimación lineal del cambio esperado en Y dado un cambio en X.",
      "Es el punto donde la recta de regresión cruza el eje Y, sin importar el valor de X.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La pendiente $b_1$ nos dice cuánto cambia Y por cada unidad de X. Sin embargo, la opción 'C' describe al intercepto ($\\beta_0$), no a la pendiente."
  },
  {
    "q": "¿Qué implicación tiene que $\\text{Cov}(X, Y)$ sea negativo?",
    "opts": [
      "Significa que existe una relación lineal negativa entre las variables.",
      "Indica que cuando X aumenta, Y tiende a disminuir (y viceversa).",
      "Sugerencia de posible inversión en estrategias opuestas para maximizar la ganancia.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un $\\text{Cov}(X, Y)$ negativo significa una asociación inversa. Si uno sube, el otro baja, lo que se traduce en una correlación negativa ($\\rho < 0$). La tercera opción es una interpretación económica plausible pero no estadística."
  },
  {
    "q": "¿Cuál de los siguientes conceptos son fundamentales para la inferencia de regresión lineal?",
    "opts": [
      "La suposición de independencia entre observaciones (no autocorrelación).",
      "El supuesto de homocedasticidad, que implica varianzas constantes en los residuos.",
      "Conocer el modelo de distribución poblacional exacto sin realizar supuestos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los dos supuestos más críticos del MCO son la independencia (no autocorrelación) y la homocedasticidad. No es necesario conocer la distribución poblacional exacta solo con realizar supuestos estadísticos."
  },
  {
    "q": "¿Cuáles de las siguientes afirmaciones sobre el coeficiente $\\rho$ son verdaderas?",
    "opts": [
      "A. El valor de $\\rho$ está acotado entre -1 y 1.",
      "B. Un valor de $\\rho=0$ implica que no hay ninguna relación lineal detectable entre $X$ e $Y$.",
      "C. $\\rho$ es insensible al cambio de unidades en $X$ o $Y$, ya que está estandarizado.",
      "D. Si la relación verdadera es cuadrática, $\\rho$ fallará drásticamente."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El coeficiente de correlación ($\\rho$) siempre se encuentra entre -1 y 1 (A). Por definición estandarizada, el valor cero implica la ausencia de asociación lineal detectable (B) y es una medida adimensional, por lo que no depende de las unidades originales (C). Si bien $\\rho$ detecta linealidad, si la relación verdadera fuese cuadrática o cúbica, un modelo lineal podría parecer inútil, pero esto se debe a que los datos no son lineales, no porque $\\rho$ falle en su cálculo."
  },
  {
    "q": "¿Cuáles de los siguientes son métodos estadísticos para evaluar la calidad del ajuste de una recta de regresión?",
    "opts": [
      "A. Analizar los residuos mediante un gráfico Q-Q (Normalidad).",
      "B. Calcular el Coeficiente de Determinación ($R^2$).",
      "C. Verificar si existe Homocedasticidad en la varianza residual.",
      "D. Comparar visualmente el modelo con una curva polinomial."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La evaluación de un ajuste requiere múltiples pasos: (A) Gráficos de residuos para chequear normalidad y linealidad; (B) $R^2$ para medir la proporción de varianza explicada; (C) Chequear Homocedasticidad mediante gráficos o pruebas estadísticas. El punto (D), comparar con una curva, es un análisis descriptivo, pero no es el método principal formal de evaluación estadística."
  },
  {
    "q": "¿Qué condiciones son necesarias para que los resultados del MCO sean válidos y confiables?",
    "opts": [
      "A. Se debe cumplir la suposición de linealidad entre $X$ e $Y$.",
      "B. La varianza de los errores ($\\sigma^2$) debe ser constante (Homocedasticidad).",
      "C. Los errores deben seguir una distribución normal, independientemente del tamaño muestral.",
      "D. Las variables predictoras ($X$) deben estar correlacionadas con la variable dependiente ($Y$)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los supuestos clave son: (A) Linealidad; (B) Homocedasticidad; y (C) Normalidad de los errores. La condición (D) es incorrecta; si $X$ estuviera perfectamente correlacionada con $Y$, no habría modelo a construir, e idealmente el error debe ser independiente y distribuido normalmente."
  },
  {
    "q": "¿Cómo se interpreta la magnitud del coeficiente de regresión $\\hat{\\beta}_1$?",
    "opts": [
      "A. Indica cuánto cambia, en promedio, $Y$ por cada unidad de cambio en $X$.",
      "B. Su signo determina si la relación es positiva o negativa.",
      "C. El valor absoluto de $\\hat{\\beta}_1$ ayuda a determinar si el modelo es estadísticamente significativo (prueba t).",
      "D. La pendiente solo tiene sentido si se usan unidades estandarizadas para ambas variables."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El coeficiente $\\hat{\\beta}_1$ es la tasa de cambio: indica el aumento o disminución esperado en $Y$ por cada unidad adicional de $X$. Su signo (B) determina la dirección. La significancia se prueba con la estadística t asociada a la pendiente, que evalúa si es diferente de cero (C). Si bien estandarizar las variables ayuda conceptualmente, $\\hat{\\beta}_1$ mantiene la interpretación en las unidades originales (A)."
  },
  {
    "q": "¿Cuáles son los elementos clave al interpretar un modelo lineal $Y = \\beta_0 + \\beta_1 X$?",
    "opts": [
      "El coeficiente $\\beta_0$ predice el valor esperado en ausencia de datos.",
      "Un alto valor p para $\\beta_1$ indica que la variable X no es predictiva de Y.",
      "La pendiente ($\\beta_1$) debe interpretarse como un cambio *marginal* y mantenido constante.",
      "La significancia estadística solo depende del $R^2$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El intercepto predice el valor esperado. Un alto valor p significa que no hay evidencia de relación (X no es predictiva). La pendiente debe interpretarse siempre como un cambio constante por unidad de X."
  },
  {
    "q": "¿Cuáles son ejemplos de medidas utilizadas para cuantificar la asociación lineal entre variables?",
    "opts": [
      "Covarianza",
      "Coeficiente de correlación de Pearson ($\\rho$)",
      "Coeficiente de determinación ($R^2$) ",
      "El rango intercuartílico (IQR)"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cov y $\\rho$ miden asociación. $R^2$, aunque es una proporción de varianza, se utiliza como medida global de la bondad del ajuste o el grado de determinación de la relación lineal."
  },
  {
    "q": "¿Cuáles son los objetivos principales al aplicar el Método de Mínimos Cuadrados Ordinarios (MCO)?",
    "opts": [
      "Minimizar la suma de cuadrados de los residuos ($\\sum e_i^2$).",
      "Asegurar que cada punto esté exactamente sobre la línea ajustada.",
      "Obtener estimadores de parámetros (coeficientes) sin sesgo asintótico.",
      "Igualar el número de observaciones con el número de variables."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El objetivo central es minimizar $\\sum e_i^2$ para encontrar la mejor recta que se ajuste a los datos. Esto produce estimadores sin sesgo y garantiza las propiedades matemáticas deseadas."
  },
  {
    "q": "¿Qué condiciones debe cumplir un conjunto de datos para que la regresión lineal simple sea apropiada?",
    "opts": [
      "La relación entre X e Y debe ser razonablemente lineal.",
      "Los residuos deben tener una media cercana a cero (Equidad).",
      "Se debe asumir homocedasticidad (varianza constante de los residuos).",
      "Los errores deben seguir una distribución normal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para un modelo robusto, requerimos linealidad (el gráfico es recto), que la varianza de los errores sea constante (homocedasticidad) y que los errores estén centrados en cero. La normalidad ayuda a la inferencia estadística."
  },
  {
    "q": "¿Cuáles son las consecuencias estadísticas más graves si asumimos que los residuos no son normales o presentan heteroscedasticidad?",
    "opts": [
      "Los estimadores $\\beta_0$ y $\\beta_1$ serán sesgados (biased).",
      "Las pruebas de hipótesis (t-test, F-test) se vuelven inválidas.",
      "La raíz cuadrada del error cuadrático medio ($\\text{RMSE}$) será inexacta.",
      "Se violará la linealidad asumida."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si los residuos no son normales (o si hay heteroscedasticidad), aunque los estimadores MCO siguen siendo insesgados, sus varianzas y las pruebas estadísticas asociadas ya no serán válidas para la inferencia."
  },
  {
    "q": "¿Cuál de los siguientes enunciados sobre las suposiciones MCO es crucial para garantizar la eficiencia (BLUE)?",
    "opts": [
      "Los errores deben ser independientes entre sí.",
      "La variable $X$ debe tener varianza positiva.",
      "Debe cumplirse el supuesto de homocedasticidad ($\\text{Var}(\\epsilon_i) = \\sigma^2$).",
      "El modelo debe estar linealizado."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los supuestos clave incluyen la independencia de errores (no autocorrelación), homocedasticidad y que el modelo sea lineal."
  },
  {
    "q": "¿Qué se deduce si $R^2$ es cercano a 1?",
    "opts": [
      "Que hay una relación lineal casi perfecta entre las variables.",
      "Que el modelo ajustado explica la mayor parte de la varianza en Y.",
      "Que los datos caen muy cerca de la línea de regresión estimada.",
      "Que existe un fuerte grado de asociación entre $X$ y $Y$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un $R^2$ cercano a 1 significa que el modelo explica casi toda la variabilidad observada en Y (es decir, los puntos están muy pegados a la recta)."
  },
  {
    "q": "¿Qué se puede afirmar sobre la interpretación de un intercepto $\\hat{\\beta}_0$?",
    "opts": [
      "Es el valor esperado de $Y$ cuando $X$ es cero.",
      "Representa el punto de partida del modelo lineal en el eje Y.",
      "Solo tiene sentido si el valor $X=0$ es factible en el contexto real.",
      "Si no tiene significado teórico, se puede ignorar."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El intercepto predice el valor de Y cuando X es cero (suponiendo que ese punto sea válido) y representa la base del modelo. Si $X=0$ no es posible en el mundo real, su interpretación puede ser limitada."
  },
  {
    "q": "¿Cuál es la relación matemática entre los coeficientes $\\hat{\\beta}_1$, las varianzas y la covarianza?",
    "opts": [
      "$\\hat{\\beta}_1 = \\text{Cov}(X, Y) / \\text{Var}(X)$.",
      "La pendiente $\\hat{\\beta}_1$ se calcula usando la covarianza dividida por la varianza de X.",
      "Mide únicamente cómo cambia Y cuando X cambia una unidad.",
      "$\\hat{\\beta}_1$ siempre tiene el mismo signo que $r$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Matemáticamente, el coeficiente de regresión es la razón entre la covariación y la varianza de X. Conceptualmente, $\\hat{\\beta}_1$ mide precisamente ese cambio unitario."
  },
  {
    "q": "¿Cuáles son los componentes clave para interpretar adecuadamente el modelo de regresión $Y = \\beta_0 + \\beta_1 X$? (C)",
    "opts": [
      "$\\beta_0$: Valor esperado de Y cuando X es cero.",
      "$\\beta_1$: Cambio esperado en Y por cada unidad de aumento en X.",
      "La intersección representa la media de Y, independientemente del valor de X.",
      "Solo aplica si el coeficiente de determinación $R^2$ es cercano a 1."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$\\beta_0$ (intersección) predice el valor base de Y. $\\beta_1$ (pendiente) indica la tasa de cambio. Además, en muchos contextos, si $X=0$, se asume que $Y$ toma su media, por lo que la intersección es interpretada como la media esperada de $Y$. La última opción es incorrecta porque $R^2 \\approx 1$ solo significa un buen ajuste lineal, no valida los parámetros."
  },
  {
    "q": "¿Cuáles son las propiedades estadísticas del coeficiente de determinación ($R^2$)?",
    "opts": [
      "Siempre estará en el rango $[0, 1]$.",
      "Representa la proporción de varianza explicada por el modelo.",
      "Es igual al cuadrado del coeficiente de correlación ($\\rho^2$) solo en modelos simple (una variable predictora).",
      "Mide la magnitud total de la variación observada."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$R^2$ siempre está acotado entre 0 y 1. Interpreta el porcentaje de varianza explicada. Es igual a $\\rho^2$ solo en regresión lineal simple. La última opción es demasiado general."
  },
  {
    "q": "¿Qué se recomienda revisar cuando se realiza un Análisis de Residuos ($\\epsilon_i$) en la práctica estadística?",
    "opts": [
      "Que los residuos sigan una distribución normal.",
      "Que no haya patrones visibles (linealidad).",
      "Que la varianza residual sea constante a lo largo de todos los niveles de $X$ (homocedasticidad).",
      "Que los residuos sean perfectamente independientes entre sí."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para validar supuestos: 1. Normalidad (Gráfico Q-Q). 2. Homoscedasticidad (varianza constante vs X). 3. Independencia (no correlación de residuos en el tiempo). El gráfico debe mostrar un patrón aleatorio."
  },
  {
    "q": "¿Cuáles son los supuestos fundamentales sobre los residuos ($\\epsilon_i$) para que las inferencias estadísticas basadas en MCO sean válidas?",
    "opts": [
      "$\\text{E}(\\epsilon_i | X) = 0$ (Media cero).",
      "Var($\\epsilon_i | X$) = $\\sigma^2$ (Varianza constante).",
      "Los residuos no deben estar correlacionados entre sí (Independencia).",
      "Deben seguir una distribución normal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres primeros son supuestos críticos para la eficiencia de los estimadores. Aunque la Normalidad es deseable para *test* de hipótesis (p-valores), no es estrictamente necesaria para que MCO sea un buen estimador lineal insesgado."
  },
  {
    "q": "¿Cuáles son las propiedades fundamentales del coeficiente de correlación de Pearson ($\\rho$)?",
    "opts": [
      "A) Su signo indica la dirección de la relación.",
      "B) Es un valor adimensional, lo que permite compararlo entre diferentes conjuntos de datos.",
      "C) Un valor cercano a 1 o -1 sugiere una fuerte dependencia lineal.",
      "D) Si las variables no son normales, el coeficiente debe ajustarse mediante transformaciones."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "A y C son correctos: la dirección está dada por el signo. B es correcto: ser adimensional lo hace comparable. D es incorrecto; mientras que se prefieren datos normales, $\\rho$ puede calcularse sin asumir normalidad total (aunque su interpretación sea más robusta en ese caso)."
  },
  {
    "q": "¿Cuáles son principios clave del Método de Mínimos Cuadrados Ordinarios (MCO)?",
    "opts": [
      "A) Su objetivo es encontrar la recta que minimice la suma de los cuadrados de los residuos $(\\sum \\epsilon_i^2)$.",
      "B) Asume que la relación entre X e Y debe ser lineal.",
      "C) Los coeficientes ($\\beta$) se estiman usando propiedades matemáticas que garantizan la eficiencia (BLUE).",
      "D) El método solo es válido si las variables X e Y están perfectamente correlacionadas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "MCO busca minimizar $\\sum \\epsilon_i^2$ (A), asume linealidad (B), y sus coeficientes son conocidos por ser Insesgados, Lineales y Eficientes Bajo Exogeneidad (BLUE) (C). No requiere correlación perfecta para funcionar."
  },
  {
    "q": "¿Qué criterios deben evaluarse al analizar la validez de un modelo de regresión?",
    "opts": [
      "A) Verificar el supuesto de Homoscedasticidad en los residuos.",
      "B) Comprobar que no haya multicolinealidad extrema entre las variables predictoras.",
      "C) Asegurar que los errores residuales sean normales (Normalidad).",
      "D) Confirmar que la relación predicha sea causalmente determinista."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los chequeos estadísticos clave son: Homoscedasticidad (A), ausencia de multicolinealidad (B), y normalidad de los residuos (C). El supuesto D es fundamentalmente incorrecto; la correlación/regresión nunca prueba causalidad."
  },
  {
    "q": "¿Cuáles conceptos se relacionan intrínsecamente con el análisis de modelos estadísticos?",
    "opts": [
      "A) La interpretación del $R^2$ como proporción explicada.",
      "B) El concepto de ajuste lineal prediciendo valores futuros.",
      "C) La distinción entre correlación (asociación) y causalidad.",
      "D) La medición precisa de la varianza total mediante el cálculo muestral."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "A es correcto: $R^2$ explica proporción. B es correcto: Modelos lineales se usan para predicción (ajuste). C es crucial: estadísticos deben recordar que correlación $\\neq$ causalidad. D es demasiado restrictivo; la varianza total ($\\sum (y_i - \\bar{y})^2$) siempre puede medirse, pero no define el concepto de análisis."
  },
  {
    "q": "¿Qué afirmaciones describen correctamente a la variable independiente X en un modelo de regresión?",
    "opts": [
      "A) Debe ser controlada o manipulada experimentalmente.",
      "B) Su variación permite estimar la variabilidad de la variable dependiente Y.",
      "C) Los cambios en X se asumen que son los responsables primarios del cambio observado en Y.",
      "D) No debe tener valores atípicos (outliers) para mantener el modelo robusto."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "A es idealmente cierto si estamos buscando causalidad. B y C describen la lógica de usar X como predictor: su cambio se usa para predecir Y. D es incorrecto; los modelos estadísticos están diseñados precisamente para ser lo más robustos posible ante *outliers*."
  },
  {
    "q": "¿Cuáles son las principales limitaciones o advertencias sobre el uso de regresión y correlación?",
    "opts": [
      "A) El valor de $R^2$ no indica si existe causalidad.",
      "B) Una relación lineal fuerte puede ocultar patrones no lineales importantes (curvas).",
      "C) La covarianza es más estable que la correlación en muestras muy pequeñas.",
      "D) Los residuos deben ser siempre perfectamente normales para validar el modelo."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "A y B son advertencias fundamentales: $R^2$ no prueba causa-efecto, y asumir linealidad puede ser erróneo. C es incorrecto; $\\rho$ (correlación) es generalmente más robusto e interpretable que la covarianza en muestras pequeñas. D es demasiado estricto; el supuesto de normalidad no siempre se requiere para la estimación de coeficientes."
  },
  {
    "q": "¿Qué supuestos clave deben cumplirse para que los resultados de la regresión lineal sean válidos y fiables?",
    "opts": [
      "Linealidad: La relación entre X e Y debe ser aproximadamente recta.",
      "Homocedasticidad: La varianza de los residuos ($\\sigma^2$) debe ser constante en todos los niveles de $X$.",
      "Independencia: Los errores (residuos) no deben estar correlacionados entre sí (no autocorrelación).",
      "Normalidad: Los datos deben seguir una distribución normal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para obtener estimadores de MCO eficientes y válidos (asumiendo $X$ es el predictor), se requieren principalmente que la relación sea lineal, que los errores tengan varianza constante (homocedasticidad) e independientes entre sí. Aunque se asume normalidad para realizar inferencia estadística (intervalos de confianza, pruebas de hipótesis), las violaciones de homocedasticidad e independencia son más críticas para la validez del modelo."
  },
  {
    "q": "¿Qué se puede afirmar correctamente sobre los residuos $(\\epsilon)$ en el análisis de regresión?",
    "opts": [
      "Son las diferencias verticales entre los valores observados y los predichos.",
      "Representan la variación en Y que no es explicada por X (el error del modelo).",
      "Deben estar distribuidos normalmente para hacer inferencias estadísticas válidas.",
      "Si son homocedásticos, significa que $\\text{Var}(\\epsilon) = 0$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los residuos ($\\hat{\\epsilon}_i = y_i - \\hat{y}_i$) son intrínsecamente el error del modelo: la variación de $Y$ no capturada por X. Para realizar pruebas de hipótesis válidas sobre los coeficientes (intervalos de confianza, p-valores), es fundamental que estos residuos asuman una distribución normal."
  },
  {
    "q": "¿Cuáles son las ventajas conceptuales de usar el método de Mínimos Cuadrados Ordinarios (MCO)?",
    "opts": [
      "Es un método estadísticamente robusto y ampliamente aceptado en la práctica.",
      "Proporciona estimadores paramétricos que son fáciles de interpretar ($\\beta_0, \\beta_1$).",
      "Garantiza el mejor ajuste lineal posible a los datos bajo el supuesto de varianza constante.",
      "Es el único método estadístico capaz de determinar relaciones causales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "MCO es la herramienta estándar para modelar relaciones lineales. Sus fortalezas radican en su robustez (desde un punto de vista matemático), la facilidad de interpretar los parámetros ($\\beta_0$ y $\\beta_1$), y su capacidad teórica de encontrar el ajuste mínimo cuadrático (el mejor fit) bajo ciertos supuestos."
  },
  {
    "q": "¿Cuáles son las implicaciones prácticas de utilizar un modelo de regresión lineal?",
    "opts": [
      "Permite la estimación de valores predictivos para variables no observadas.",
      "Ayuda a cuantificar cuán sensible es una variable (Y) ante cambios en otra (X).",
      "Requiere que todas las variables involucradas sean medibles en escalas proporcionales o de razón.",
      "Si se viola el supuesto de linealidad, la predicción será inexacta."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El uso principal del modelo es predecir valores (estimación) y cuantificar cómo cambia Y con X (sensibilidad). Desde un punto de vista práctico, el requisito más estricto es medir las variables en escalas que permitan determinar proporciones o razones. Una violación de linealidad invalida la forma funcional predictiva."
  },
  {
    "q": "Considerando los residuos $(\\epsilon_i)$, ¿qué podemos concluir sobre su análisis para validar un modelo de regresión?",
    "opts": [
      "Deben presentar una distribución normal.",
      "Su media teórica debe ser cero (E($\\epsilon$) = 0).",
      "La varianza de los residuos debe ser constante en todo el rango de X (Homocedasticidad).",
      "Si son significativos, implica que la relación lineal es incorrecta."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los supuestos cruciales sobre los residuos son: 1) Normalidad (para inferencia estadística); 2) Media cero; y 3) Homocedasticidad. Si estos supuestos se violan, la estimación de los coeficientes ($\\hat{\\beta}$) puede ser ineficiente o sesgada."
  },
  {
    "q": "¿Cuáles son propiedades correctas del coeficiente de correlación ($\\rho$)?",
    "opts": [
      "Siempre está acotado entre -1 y 1.",
      "Es una medida simétrica, es decir, $\\text{Corr}(X, Y) = \\text{Corr}(Y, X)$.",
      "Su valor indica la magnitud absoluta de la relación lineal (independiente de las unidades).",
      "Requiere que ambas variables sean normales para ser calculado."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El coeficiente $\\rho$ es siempre un número entre -1 y 1. Es simétrico por definición. Además, solo mide la *dirección* (signo) y la *fuerza* de la relación lineal, siendo esta última adimensional."
  },
  {
    "q": "¿En el contexto de modelos estadísticos, qué significa que los residuos sean independientes unos de otros?",
    "opts": [
      "Que ningún residuo puede predecir a otro. (No hay autocorrelación).",
      "Que el error en un punto no afecta la estimación del error en otro punto.",
      "Que la varianza residual es constante a lo largo del tiempo o las observaciones.",
      "Que los datos siguen una distribución de Poisson."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La independencia de residuos (o falta de autocorrelación) significa que el error observado en un punto no está relacionado con el error observado en otro. Esto es crucial para asumir que las observaciones son independientes y evitar sesgos en los errores estándar."
  },
  {
    "q": "¿Si la correlación entre X e Y es $\\rho = -0.95$, ¿qué podemos afirmar?",
    "opts": [
      "Existe una asociación lineal extremadamente fuerte y negativa.",
      "Si X aumenta, se espera sistemáticamente que Y disminuya (y viceversa).",
      "La relación no puede ser causal, solo asociativa.",
      "Los datos están muy bien alineados a lo largo de la recta de regresión."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un valor tan cercano a -1 indica una asociación lineal muy fuerte (fuerza). El signo negativo (-1) implica que se mueven en direcciones opuestas. Y es crucial recordar que 'asociación' no implica causalidad."
  },
  {
    "q": "¿Cuáles son los supuestos fundamentales que deben cumplirse para la validez de un modelo de regresión lineal simple?",
    "opts": [
      "La relación entre X e Y es lineal.",
      "Los errores ($\\epsilon$) deben ser independientes y distribuidos normalmente (normalidad).",
      "El modelo debe presentar homocedasticidad (varianza constante del error en todos los niveles de X).",
      "Que exista una relación causal directa necesaria entre X e Y."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para que el análisis sea válido, se asume la linealidad, la normalidad y la homocedasticidad (varianza constante de los residuos $\\epsilon$). Es importante recordar que la regresión solo sugiere asociación, no establece causalidad directamente."
  },
  {
    "q": "¿Qué pasos son necesarios para realizar un análisis básico de regresión?",
    "opts": [
      "Calcular los mínimos cuadrados mediante el método MCO.",
      "Verificar supuestos como normalidad, linealidad y homocedasticidad en residuos.",
      "Interpretar la significancia estadística (p-valores) de los coeficientes obtenidos.",
      "Determinar si $R^2$ es lo suficientemente alto para tomar decisiones."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un análisis estadístico completo no solo implica calcular el modelo. Se debe: 1. Ajustar el modelo (MCO). 2. Verificar los supuestos (Residuos). 3. Interpretar la significancia (p-valores) y el ajuste ($R^2$). Determinar si $R^2$ es 'suficientemente alto' para tomar decisiones es un juicio de fondo, no solo estadístico."
  },
  {
    "q": "¿Qué implica un análisis de residuos (Residual Analysis) adecuado en regresión lineal?",
    "opts": [
      "La gráfica de residuos vs. valores predichos debe mostrar una distribución aleatoria, sin patrones visibles.",
      "Los residuos deben tener media cero ($\\mathbb{E}(\\epsilon)=0$).",
      "La varianza de los residuos debe ser constante a lo largo de todos los niveles de X (Homoscedasticidad).",
      "El coeficiente de determinación $R^2$ debe ser cercano a 1."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los supuestos clave incluyen: media cero ($\\mathbb{E}(\\epsilon)=0$), independencia y homoscedasticidad (varianza constante). La varianza no constante indica heteroscedasticidad."
  },
  {
    "q": "¿Cuáles son las limitaciones del coeficiente de correlación $\\rho$?",
    "opts": [
      "Solo mide relaciones lineales.",
      "Es sensible a la escala de medición (unidades), aunque estandarizado, su interpretación conceptual se restringe a líneas rectas.",
      "No proporciona información sobre la magnitud del cambio en Y por unidad de X.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Aunque $\\rho$ es robusto contra cambios de unidades, siempre asume una relación lineal. Además, no indica causa ni qué tan fuerte debe ser la predicción (solo la fuerza de la asociación)."
  },
  {
    "q": "¿Cuáles son los objetivos principales al aplicar el método MCO?",
    "opts": [
      "Estimar parámetros poblacionales ($\\beta_0$ y $\\beta_1$) minimizando la suma de cuadrados de los errores.",
      "Obtener las predicciones más eficientes posibles para un nuevo valor de X.",
      "Determinar si existe una relación estadísticamente significativa entre X e Y.",
      "Asegurar que la pendiente sea positiva, sin importar el contexto real."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "MCO busca estimar los parámetros poblacionales minimizando $\\sum (Y_i - \\hat{Y}_i)^2$. El objetivo final es la predicción y la inferencia sobre si el coeficiente es significativo."
  },
  {
    "q": "¿Cómo se interpreta el Coeficiente de Determinación ($R^2$) en términos estadísticos?",
    "opts": [
      "Representa la proporción de la varianza total de Y que es explicada por el modelo o por X.",
      "Indica qué tan cerca están los puntos observados de una línea recta perfecta (cuanto más cercano a 1, mejor).",
      "Si $R^2 = 0.85$, significa que el 85% del cambio en Y se debe al cambio en X.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$R^2$ es una medida de bondad de ajuste. Indica la varianza explicada (proporción) y cómo los datos se ajustan a la recta (valor cercano a 1). Un valor alto sugiere que el modelo explica bien la variación observada."
  },
  {
    "q": "¿Cuál es el significado estadístico de un residuo $e_i = Y_i - \\hat{Y}_i$?",
    "opts": [
      "Representa la parte no explicada de la variable dependiente Y por el modelo.",
      "Es una medida del error aleatorio o ruido en los datos, asumiendo que todos los demás supuestos se cumplen.",
      "Ayuda a validar si el valor predicho $\\hat{Y}_i$ fue demasiado alto o bajo para el dato real $Y_i$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El residuo mide la distancia vertical entre un punto de datos ($Y_i$) y el valor predicho por la recta ($\\hat{Y}_i$). Estadísticamente, es el error que el modelo no puede explicar."
  },
  {
    "q": "¿Cómo afecta una alta correlación (cercana a $\\pm 1$) al coeficiente $R^2$?",
    "opts": [
      "Implica que hay un fuerte vínculo lineal entre las variables.",
      "Garantiza que la pendiente de regresión ($b_1$) será cercana a $\\text{Cov}(X, Y) / \\text{Var}(X)$.",
      "Indica que el modelo ajustado es muy preciso y explica gran parte de la varianza de Y.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un fuerte vínculo lineal resulta en un $R^2$ alto (cercano a 1). Además, esto garantiza que la relación entre los coeficientes ($\\text{Cov}(X,Y)$ y $\\text{Var}(X)$) se mantenga y que el modelo sea robusto."
  },
  {
    "q": "En el contexto de un análisis de regresión lineal simple ($\\hat{Y} = b_0 + b_1 X$), ¿qué son los residuos $\\epsilon_i$? ",
    "opts": [
      "La diferencia entre el valor predicho $\\hat{Y}_i$ y el valor observado $Y_i$.",
      "El error aleatorio inherente al modelo, representando la variación no explicada por $X$.",
      "Una estimación de la pendiente poblacional ($\\beta_1$) cuando se tiene un solo punto.",
      "La varianza total del término independiente ($Var(Y)$)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los residuos $\\epsilon_i = Y_i - \\hat{Y}_i$ representan la brecha vertical entre el punto de datos real y la línea de mejor ajuste. Conceptualmente, son el 'error' que el modelo no logra explicar con $X$. Si asumimos un modelo lineal correcto, estos errores deben ser ruido aleatorio e independiente de X."
  },
  {
    "q": "¿Qué parámetros o propiedades son fundamentales para interpretar adecuadamente un modelo de regresión lineal simple ($Y = \\beta_0 + \\beta_1 X$)?",
    "opts": [
      "Interpretar $\\beta_0$ como el valor esperado de Y cuando X es cero.",
      "Entender que $\\beta_1$ representa la pendiente (cambio promedio en Y por unidad cambio en X).",
      "Asumir que el modelo explica el 100% de la variación total de Y.",
      "Revisar siempre los supuestos de homocedasticidad y normalidad."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$\\beta_0$ es el intercepto (el valor predicho cuando $X=0$). $\\beta_1$ cuantifica la relación lineal: un cambio unitario en X cambia a Y por $\\beta_1$. Es crucial revisar los supuestos, ya que asumir que se explica el 100% de la variación ignora siempre el error aleatorio ($\\sigma^2$)."
  },
  {
    "q": "¿Cuál es la interpretación correcta del coeficiente de determinación ($R^2$) en un contexto estadístico?",
    "opts": [
      "Indica qué proporción de la varianza total de Y es explicada por las variables predictoras X.",
      "Permite comparar la bondad de ajuste entre modelos lineales con diferentes predictores.",
      "Es igual al cuadrado del coeficiente de correlación ($\\rho^2$) si y solo si se usa un modelo simple.",
      "Sugiere que el modelo debe ser reemplazado por una regresión logística, ya que $R^2$ solo funciona con datos normales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$R^2$ es el porcentaje de varianza de Y que ha sido modelado o explicado por los predictores X. Puede usarse para comparar la bondad de ajuste relativa entre diferentes modelos (comparación 'ajustada'). Es cierto que si solo hay una variable predictora, $R^2 = \\rho^2$."
  },
  {
    "q": "¿Cuál es la característica más crítica de la covarianza $Cov(X, Y)$?",
    "opts": [
      "Su signo indica si existe una relación lineal.",
      "El valor absoluto depende de las unidades de medida de X e Y.",
      "Solo se puede calcular si ambas variables siguen una distribución normal.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La covarianza indica la dirección (signo) de la asociación. Sin embargo, su magnitud es altamente dependiente de las unidades en que se midan X e Y; por eso es mejor usar el coeficiente de correlación normalizado."
  },
  {
    "q": "¿Qué afirmaciones son correctas respecto al Coeficiente de Correlación de Pearson ($\\rho$)?",
    "opts": [
      "Su valor siempre está acotado entre -1 y 1.",
      "Un $\\rho$ cercano a cero indica una correlación lineal nula.",
      "Indica la fuerza y dirección de la relación lineal, pero no la causalidad.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El coeficiente $\\rho$ es un valor estandarizado. Está acotado entre [-1, 1]. Un valor cercano a cero implica que no hay una relación lineal aparente. Es crucial recordar que la correlación nunca prueba causalidad."
  },
  {
    "q": "¿Cuáles son los supuestos clave para realizar un análisis de regresión lineal simple adecuado?",
    "opts": [
      "Linealidad: La relación entre X y Y debe ser aproximadamente recta.",
      "Homocedasticidad: La varianza de los residuos ($\\epsilon$) debe ser constante en todos los niveles de $\\hat{X}$.",
      "Normalidad: Los residuos ($\\epsilon$) deben seguir una distribución normal.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres supuestos (Linealidad, Homocedasticidad y Normalidad de los residuos) son fundamentales para que las inferencias estadísticas basadas en MCO sean válidas. Si estos fallan, el modelo es potencialmente defectuoso."
  },
  {
    "q": "¿Qué medidas describen la capacidad explicativa del modelo de regresión lineal simple?",
    "opts": [
      "El Coeficiente de Determinación ($R^2$), expresado en porcentaje.",
      "La Suma Total de Cuadrados (SCT), que mide la variación total de Y.",
      "Residuos: La diferencia entre el valor observado y el predicho ($\\epsilon = Y - \\hat{Y}$).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El $R^2$ indica qué proporción de la variación total de Y es explicada por el modelo (X). La SCT mide la dispersión total. Los residuos son las desviaciones no explicadas por el modelo."
  },
  {
    "q": "¿Cuál debe ser la interpretación correcta del coeficiente angular ($\\hat{\\beta}_1$) en un modelo $\\hat{Y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 X$?",
    "opts": [
      "Representa el cambio esperado en Y por cada unidad de aumento en X.",
      "Mide la variabilidad total de Y con respecto a su media ($\\sigma_Y$).",
      "Indica la pendiente promedio ajustada a los datos muestrales.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El coeficiente $\\hat{\\beta}_1$ es la Tasa de Cambio: el cambio predicho en Y por un aumento unitario en X. Este valor se interpreta siempre en términos de unidades conjuntas (e.g., $USD/unidad$). "
  },
  {
    "q": "¿Cómo afecta la elección del método de Mínimos Cuadrados Ordinarios (MCO) a los coeficientes estimados?",
    "opts": [
      "Garantiza que el modelo $\\hat{Y}$ minimice la suma de cuadrados verticales (residuos).",
      "Asume un equilibrio entre la desviación promedio vertical y horizontal de los puntos.",
      "Asegura la eficiencia de estimadores lineales insesgados bajo ciertos supuestos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El MCO es un método optimizador. Su objetivo es encontrar la recta que minimiza $\\sum (Y_i - \\hat{Y}_i)^2$. Asume que los errores son normales e independientes para garantizar sus propiedades de eficiencia."
  },
  {
    "q": "¿Qué sucede si el coeficiente de correlación ($\\rho$) calculado entre dos variables es $-0.95$?",
    "opts": [
      "Indica una relación lineal muy fuerte y negativa.",
      "Sugiere que, al aumentar X, Y tiende a disminuir consistentemente.",
      "El modelo debe ajustarse con la pendiente $\\hat{\\beta}_1 < 0$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un valor cercano a -1 indica una fuerte relación lineal inversa. Esto significa que cuando X aumenta, Y disminuye de manera predecible y constante. El signo negativo debe reflejarse en la pendiente $\\hat{\\beta}_1$."
  },
  {
    "q": "¿Cuáles son las unidades correctas para calcular la covarianza $Cov(X, Y)$?",
    "opts": [
      "Unidad de X * Unidad de Y.",
      "Son adimensionales si las variables están estandarizadas (Z-scores).",
      "Miden el impacto conjunto de ambas variables.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La covarianza tiene unidades multiplicativas ($\\text{Unidad}_X \\times \\text{Unidad}_Y$). Las únicas veces que es adimensional es cuando se utiliza el coeficiente de correlación $\\rho$ (estandarización)."
  },
  {
    "q": "¿Qué implica un alto valor de $R^2$, cercano a 1, en el contexto práctico?",
    "opts": [
      "Que casi toda la variabilidad observada en Y es explicable por X.",
      "Que los puntos de datos están muy próximos a una línea recta.",
      "Que el modelo predicho ($\\hat{Y}$) será altamente preciso para nuevos datos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un $R^2$ cercano a 1 significa que la varianza de Y es muy bien modelada por X. Esto implica una excelente capacidad explicativa del modelo y que los datos siguen estrechamente la línea ajustada."
  },
  {
    "q": "¿Cómo se interpretan correctamente los residuos en un análisis de regresión?",
    "opts": [
      "Deben ser estadísticamente independientes entre sí.",
      "Su valor promedio teórico debe ser cero ($\\mathbb{E}(\\epsilon) = 0$).",
      "Indican la porción de la variación de Y que el modelo NO pudo explicar.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los residuos son los errores del modelo. Primero deben ser independientes (autocorrelación), su media debe ser cero (ajustando la recta) y representan la varianza residual no capturada por X."
  },
  {
    "q": "¿Cuál es el objetivo fundamental al realizar el cálculo de regresión lineal simple?",
    "opts": [
      "Establecer la mejor línea de ajuste que represente la tendencia central de los datos.",
      "Cuantificar cuánto cambia Y en promedio cuando X varía una unidad.",
      "Permitir hacer predicciones razonables sobre valores futuros de Y.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El objetivo es modelar la relación lineal. La línea proporciona la 'mejor estimación' (MCO) y permite inferir un cambio promedio esperado en Y a partir de X."
  },
  {
    "q": "¿Cuál es el impacto si se viola el supuesto de homocedasticidad?",
    "opts": [
      "Los coeficientes $\\hat{\\beta}_0$ y $\\hat{\\beta}_1$ siguen siendo insesgados.",
      "La estimación estándar de los coeficientes será incorrecta (generalmente subestimada).",
      "Las pruebas t y F para la significancia estadística serán inválidas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La violación de la homocedasticidad (heterocedasticidad) no afecta el sesgo de los estimadores MCO, pero sí invalida los cálculos de varianza y errores estándar, haciendo que las pruebas de hipótesis sean poco confiables."
  },
  {
    "q": "¿Cuál es la relación matemática entre $R^2$ y $\\rho$? (Para regresión lineal simple)",
    "opts": [
      "$R^2 = (\\rho)^2$",
      "Ambos coeficientes miden la fuerza de la asociación.",
      "Si $\\rho=0$, entonces $R^2=0$",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "En el caso específico de regresión lineal simple (una sola variable explicativa), el coeficiente de determinación ($R^2$) es exactamente igual al cuadrado del coeficiente de correlación ($\\rho$). Ambos miden la fuerza en términos diferentes."
  },
  {
    "q": "¿Cómo se debería proceder si los residuos muestran un patrón curvo sistemático?",
    "opts": [
      "Se debe transformar una o ambas variables (ej. log, raíz).",
      "Indica que el modelo lineal es inadecuado y se requiere un ajuste no lineal.",
      "El supuesto de linealidad ha sido violado.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un patrón curvo en los residuos es la evidencia más clara de que la relación subyacente no es lineal. Se debe intentar una transformación (logarítmica, etc.) o modelar la relación con polinomios."
  },
  {
    "q": "¿Qué significa un $p$-valor bajo (e.g., $p < 0.05$) para el coeficiente $\\hat{\\beta}_1$?",
    "opts": [
      "Que el coeficiente es estadísticamente significativo.",
      "Se rechaza la hipótesis nula de que el coeficiente sea cero ($\\beta_1 = 0$).",
      "Existe evidencia suficiente para concluir que X afecta a Y.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un $p$-valor bajo indica que es improbable que el coeficiente observado haya ocurrido por puro azar. Por lo tanto, concluimos que existe una relación lineal estadísticamente significativa entre X e Y."
  },
  {
    "q": "¿Cuáles son los supuestos fundamentales que deben cumplirse para que el modelo de regresión lineal simple sea estadísticamente válido y sus estimadores sean eficientes?",
    "opts": [
      "Linealidad: La relación entre X e Y debe ser aproximadamente recta.",
      "Homocedasticidad: La varianza de los errores ($\\epsilon$) debe ser constante en todos los niveles de X.",
      "Normalidad: Los residuos deben seguir una distribución normal.",
      "Causalidad: Que X sea la causa directa de Y."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los supuestos clásicos son Linealidad (relación recta), Homocedasticidad (varianza constante de errores) y Normalidad de los residuos. La Causalidad es una interpretación que el modelo sugiere, pero no es un supuesto estadístico necesario para la validez matemática."
  },
  {
    "q": "¿Qué significa estadísticamente que los residuos ($\\epsilon_i = y_i - \\hat{y}_i$) sean homocedásticos?",
    "opts": [
      "Que la dispersión de los errores sea constante en todos los niveles predichos de X.",
      "Que el diagrama de dispersión muestre una distribución uniforme de puntos alrededor de la línea.",
      "Que la varianza del error ($\\sigma^2_{\\epsilon}$) no dependa del valor estimado de $X$.",
      "Significa que el modelo ha alcanzado un ajuste perfecto, por lo que todos los residuos son cero."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La homocedasticidad es un supuesto clave. Significa que la varianza $\\sigma^2_{\\epsilon}$ debe ser constante (no variar) a medida que X varía. Si no se cumple esto (heterocedasticidad), los errores estándar y las pruebas de hipótesis son inválidas."
  },
  {
    "q": "¿Si el coeficiente de correlación ($\\rho$) entre la altura ($X$) y el peso ($Y$) es 0.92, ¿qué podemos inferir sobre la relación?",
    "opts": [
      "Existe una asociación lineal muy fuerte y positiva.",
      "El modelo predictivo basado en esta relación será altamente preciso (alto $R^2$).",
      "Si se ajusta un modelo de regresión, el coeficiente $\\hat{\\beta}_1$ será positivo y elevado.",
      "Que X causa directamente el aumento proporcional del peso Y."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un valor cercano a +1 indica una relación lineal muy fuerte. Este valor alto sugiere que un modelo de regresión basado en esta relación tendrá alta precisión (alto $R^2$) y la pendiente ($\\hat{\\beta}_1$) será positiva y pronunciada."
  }
];
