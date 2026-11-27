// Leccion 24 - preguntas verificadas
// 20 con 1 correcta, 20 con 2, 20 con 3
window.LESSON_QUESTIONS_ALT[24] = [
  {
    "q": "¿Por qué no se deben hacer varios t-tests pareados para comparar k medias?",
    "opts": [
      "Inflan el error tipo I global",
      "Siempre dan p-valor 0",
      "Requieren varianzas iguales",
      "Solo sirven para k=2"
    ],
    "c": [
      0
    ],
    "exp": "Cada test a alpha acumula error tipo I; con muchos comparaciones el riesgo global crece."
  },
  {
    "q": "¿Qué representa SCE en ANOVA de un factor?",
    "opts": [
      "Variabilidad entre medias de grupo",
      "Variabilidad dentro de cada grupo",
      "Variabilidad total",
      "Error de medición"
    ],
    "c": [
      0
    ],
    "exp": "SCE mide cuánto difieren las medias de grupo entre sí."
  },
  {
    "q": "¿Qué representa SCD en ANOVA?",
    "opts": [
      "Variabilidad dentro de los grupos (no explicada)",
      "Variabilidad entre grupos",
      "Variabilidad total",
      "Efecto del tratamiento"
    ],
    "c": [
      0
    ],
    "exp": "SCD es la suma de cuadrados dentro de cada grupo alrededor de su propia media."
  },
  {
    "q": "¿Qué distribución sigue F bajo H0 en ANOVA de un factor?",
    "opts": [
      "F con (k-1, N-k) grados de libertad",
      "Normal estándar",
      "Chi-cuadrado",
      "t de Student"
    ],
    "c": [
      0
    ],
    "exp": "F ~ F(k-1, N-k) bajo la hipótesis nula de medias iguales."
  },
  {
    "q": "¿Qué grados de libertad tiene SCE?",
    "opts": [
      "k - 1",
      "N - k",
      "N - 1",
      "k"
    ],
    "c": [
      0
    ],
    "exp": "Con k grupos hay k-1 grados de libertad entre grupos."
  },
  {
    "q": "¿Qué grados de libertad tiene SCD?",
    "opts": [
      "N - k",
      "k - 1",
      "N - 1",
      "k"
    ],
    "c": [
      0
    ],
    "exp": "Restando k medias de grupo a N observaciones quedan N-k grados de libertad."
  },
  {
    "q": "¿Qué interpreta un F cercano a 1?",
    "opts": [
      "La variabilidad entre grupos se explica por azar",
      "Al menos una media es muy diferente",
      "Las varianzas son cero",
      "Hay interacción fuerte"
    ],
    "c": [
      0
    ],
    "exp": "F ≈ 1 significa que MCE ≈ MCD: las diferencias entre grupos son del orden del ruido."
  },
  {
    "q": "¿Qué supone ANOVA sobre las varianzas de los grupos?",
    "opts": [
      "Son iguales (homocedasticidad)",
      "Son todas diferentes",
      "La primera es la mayor",
      "No importa"
    ],
    "c": [
      0
    ],
    "exp": "Homocedasticidad: sigma² igual en todos los grupos."
  },
  {
    "q": "¿Qué hace Tukey HSD tras rechazar H0 en ANOVA?",
    "opts": [
      "Identifica qué pares de medias difieren",
      "Reemplaza al estadístico F",
      "Calcula la varianza total",
      "Prueba Normalidad"
    ],
    "c": [
      0
    ],
    "exp": "Tukey HSD hace comparaciones múltiples post-hoc controlando el error tipo I global."
  },
  {
    "q": "¿Qué mide el tamaño del efecto d de Cohen?",
    "opts": [
      "Diferencia estandarizada entre medias",
      "P-valor del test",
      "Tamaño muestral necesario",
      "Nivel de significacion"
    ],
    "c": [
      0
    ],
    "exp": "d = diferencia de medias / desviación pooled; mide magnitud del efecto."
  },
  {
    "q": "¿Qué significa rechazar H0 en ANOVA?",
    "opts": [
      "Al menos una media difiere",
      "Cuáles medias difieren exactamente",
      "No se puede concluir nada",
      "Todas las medias son diferentes"
    ],
    "c": [
      0
    ],
    "exp": "Rechazar H0 indica que al menos una media es distinta, pero no dice cuáles (se necesita post-hoc)."
  },
  {
    "q": "¿Qué calcula MCE en la tabla ANOVA?",
    "opts": [
      "SCE / (k-1)",
      "SCD / (N-k)",
      "SCE / (N-k)",
      "SCD / (k-1)"
    ],
    "c": [
      0
    ],
    "exp": "MCE es la media de cuadrados entre grupos; MCD es la dentro de grupos."
  },
  {
    "q": "¿Qué indica una interaccion significativa en ANOVA de dos factores?",
    "opts": [
      "El efecto de un factor depende del nivel del otro",
      "Las lineas de medios se cruzan",
      "Los efectos son aditivos",
      "No hay efecto de ninguno de los factores"
    ],
    "c": [
      0
    ],
    "exp": "Interaccion significa que el efecto de A cambia segun el nivel de B."
  },
  {
    "q": "¿Qué mide la Suma de Cuadrados Entre Grupos ($SCE$)?",
    "opts": [
      "La variación de las medias de los grupos respecto a la media general",
      "La variación total de todos los datos",
      "La variación residual dentro de los grupos",
      "El error de medida de cada observación"
    ],
    "c": [
      0
    ],
    "exp": "$SCE=\\sum_j n_j(\\bar{x}_j-\\bar{x})^2$ mide cuánto se separan las medias grupales de la media global."
  },
  {
    "q": "¿Cuántos grados de libertad tiene el numerador del estadístico $F$ en un ANOVA de un factor?",
    "opts": [
      "$k-1$",
      "$N-k$",
      "$N-1$",
      "$k$"
    ],
    "c": [
      0
    ],
    "exp": "El numerador usa la variación entre grupos, con $k-1$ grados de libertad."
  },
  {
    "q": "¿Cuántos grados de libertad tiene el denominador del estadístico $F$ en un ANOVA de un factor?",
    "opts": [
      "$N-k$",
      "$k-1$",
      "$N-1$",
      "$k$"
    ],
    "c": [
      0
    ],
    "exp": "El denominador usa la variación residual, con $N-k$ grados de libertad."
  },
  {
    "q": "Si el estadístico $F$ es aproximadamente 1, ¿qué se concluye?",
    "opts": [
      "No hay evidencia de diferencias entre las medias",
      "Está demostrado que todas las medias son iguales",
      "El ANOVA se ha calculado mal",
      "Todas las medias son distintas"
    ],
    "c": [
      0
    ],
    "exp": "$F\\approx 1$ indica que la variación entre grupos es del orden de la residual: no hay evidencia de diferencias."
  },
  {
    "q": "Tras rechazar $H_0$ en un ANOVA, ¿qué análisis procede?",
    "opts": [
      "Comparaciones post-hoc para identificar qué pares difieren",
      "Nada más: el ANOVA ya identifica los pares",
      "Aceptar $H_0$",
      "Repetir el ANOVA con otros datos"
    ],
    "c": [
      0
    ],
    "exp": "El ANOVA global no dice qué pares difieren; para eso se usan Tukey, Bonferroni u otros post-hoc."
  },
  {
    "q": "¿Qué mide el coeficiente $\\eta^2$ en ANOVA?",
    "opts": [
      "La proporción de varianza total explicada por el factor",
      "La media de los grupos",
      "La varianza residual",
      "El p-valor del contraste"
    ],
    "c": [
      0
    ],
    "exp": "$\\eta^2=SCE/SCT$ cuantifica el tamaño del efecto como proporción de variabilidad explicada."
  },
  {
    "q": "¿Qué afirma el supuesto de homocedasticidad en ANOVA?",
    "opts": [
      "Que la varianza del error es constante en todos los grupos",
      "Que las medias de los grupos son iguales",
      "Que los residuos son normales",
      "Que las observaciones son dependientes"
    ],
    "c": [
      0
    ],
    "exp": "Homocedasticidad significa igual varianza residual en todos los niveles del factor."
  },
  {
    "q": "¿Qué distribución se usa para el estadístico F de ANOVA?",
    "opts": [
      "F de Fisher",
      "Con grados (k-1) y (N-k)",
      "Chi-cuadrado",
      "t de Student"
    ],
    "c": [
      0,
      1
    ],
    "exp": "F sigue una F de Fisher con esos grados de libertad."
  },
  {
    "q": "¿Qué compara el test de Bonferroni?",
    "opts": [
      "Pares de medias con alpha ajustado",
      "El error tipo I global",
      "Medias usando t sin correccion",
      "Varianzas entre grupos"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Bonferroni ajusta alpha por el número de comparaciones para controlar el error global."
  },
  {
    "q": "¿Qué problemas causa hacer multiples t-tests sin ajuste?",
    "opts": [
      "Infla el error tipo I global",
      "Aumenta la probabilidad de falsos positivos",
      "Reduce la potencia de cada test individual",
      "Controla mejor el error global"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Sin correccion, mas tests = mas oportunidades de rechazar H0 falsamente."
  },
  {
    "q": "¿Cuándo se prefiere Welch sobre pooled en dos muestras?",
    "opts": [
      "Varianzas desiguales o dudosas",
      "Tamaños de muestra muy distintos",
      "Varianzas iguales comprobadas",
      "Solo se conoce una varianza"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Welch no asume homocedasticidad y es robusto cuando las varianzas difieren."
  },
  {
    "q": "¿Qué supuestos son necesarios para un ANOVA de un factor?",
    "opts": [
      "Independencia de las observaciones",
      "Normalidad de los residuos",
      "Igualdad de las medias poblacionales",
      "Relación lineal entre factor y respuesta"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Se exigen independencia y normalidad de los residuos (además de homocedasticidad); la igualdad de medias es la hipótesis nula, no un supuesto."
  },
  {
    "q": "¿Qué afirma la descomposición $SCT=SCE+SCD$?",
    "opts": [
      "La variación total se reparte entre variación entre grupos y variación dentro de grupos",
      "$SCE$ mide la variación entre grupos",
      "$SCD$ mide la variación total",
      "$SCE$ mide la variación residual"
    ],
    "c": [
      0,
      1
    ],
    "exp": "$SCT$ se descompone en $SCE$ (entre) y $SCD$ (dentro o residual)."
  },
  {
    "q": "¿Qué hacen las pruebas post-hoc?",
    "opts": [
      "Identifican qué pares de medias difieren",
      "Controlan el error tipo I global",
      "Sustituyen al ANOVA",
      "Comprueban la normalidad"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los post-hoc comparan pares concretos y ajustan la significancia para no inflar el error tipo I."
  },
  {
    "q": "Si la interacción es significativa, ¿qué es correcto?",
    "opts": [
      "Interpretar el efecto de un factor en cada nivel del otro",
      "Los efectos principales pueden resultar engañosos",
      "Ignorar la interacción y reportar solo efectos principales",
      "Sumar los efectos principales sin más"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Con interacción, el efecto de un factor depende del nivel del otro; los efectos principales aislados pueden inducir a error."
  },
  {
    "q": "¿Qué controla la corrección de Bonferroni?",
    "opts": [
      "El error tipo I global",
      "Ajusta $\\alpha$ dividiéndolo entre el número de comparaciones",
      "Aumenta la potencia estadística",
      "Elimina el sesgo de selección"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Bonferroni compara cada contraste con $\\alpha/m$, controlando el error tipo I global a costa de potencia."
  },
  {
    "q": "¿Qué propiedades tiene el estadístico $F$?",
    "opts": [
      "Es el cociente $MCE/MCD$",
      "Bajo $H_0$ sigue una distribución $F(k-1,N-k)$",
      "Es una media aritmética",
      "Es siempre negativo"
    ],
    "c": [
      0,
      1
    ],
    "exp": "$F$ es un cociente de medias de cuadrados y bajo $H_0$ se distribuye como $F$ con $k-1$ y $N-k$ grados de libertad."
  },
  {
    "q": "¿Qué implica un p-valor menor que $\\alpha$ en ANOVA?",
    "opts": [
      "Se rechaza $H_0$",
      "Al menos dos medias difieren",
      "Todas las medias difieren entre sí",
      "Se demuestra que $H_0$ es cierta"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Se rechaza la igualdad global y se concluye que al menos dos medias difieren; no se identifican cuáles ni se demuestra $H_0$."
  },
  {
    "q": "¿Qué procedimientos son pruebas post-hoc?",
    "opts": [
      "Tukey HSD",
      "Bonferroni",
      "Shapiro-Wilk",
      "Levene"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Tukey y Bonferroni comparan pares de medias; Shapiro-Wilk es normalidad y Levene es homocedasticidad."
  },
  {
    "q": "¿Qué es el $MCD$?",
    "opts": [
      "La media de cuadrados dentro de grupos",
      "Un estimador de la varianza residual $\\sigma^2$",
      "La media de cuadrados entre grupos",
      "Un estadístico con $k-1$ grados de libertad"
    ],
    "c": [
      0,
      1
    ],
    "exp": "$MCD=SCD/(N-k)$ estima $\\sigma^2$ y es el denominador de $F$."
  },
  {
    "q": "¿Qué caracteriza un diseño de bloques?",
    "opts": [
      "Controla la variabilidad entre sujetos",
      "Usa medidas repetidas o bloques",
      "Exige independencia entre las condiciones del mismo sujeto",
      "Es siempre un ANOVA de dos factores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El bloqueo agrupa observaciones relacionadas para controlar variabilidad ajena al factor; no exige independencia dentro del bloque."
  },
  {
    "q": "¿Qué propiedades tiene $\\eta^2$?",
    "opts": [
      "Está entre 0 y 1",
      "Es la proporción de varianza explicada",
      "Es un p-valor",
      "Puede ser negativo"
    ],
    "c": [
      0,
      1
    ],
    "exp": "$\\eta^2$ es una proporción entre 0 y 1; no es un p-valor y no puede ser negativo."
  },
  {
    "q": "Si se viola la homocedasticidad, ¿qué es correcto?",
    "opts": [
      "El estadístico $F$ puede verse afectado",
      "Puede usarse una alternativa robusta como Welch",
      "No tiene ninguna consecuencia",
      "Mejora la normalidad de los residuos"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La heterocedasticidad altera la distribución de $F$; Welch o correcciones robustas son alternativas."
  },
  {
    "q": "¿Qué es un efecto principal en un ANOVA de dos factores?",
    "opts": [
      "El efecto promedio de un factor",
      "Se calcula promediando sobre los niveles del otro factor",
      "La interacción entre ambos factores",
      "El error residual del modelo"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El efecto principal es el efecto medio de un factor al promediar los niveles del otro."
  },
  {
    "q": "¿Qué información contiene la tabla ANOVA?",
    "opts": [
      "Grados de libertad",
      "Sumas de cuadrados y medias de cuadrados",
      "Medianas de los grupos",
      "Coeficientes de correlación"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La tabla ANOVA recoge fuentes, grados de libertad, sumas de cuadrados, medias de cuadrados y el estadístico $F$."
  },
  {
    "q": "¿Qué es cierto sobre el test de Tukey?",
    "opts": [
      "Compara todos los pares de medias",
      "Usa la distribución del rango estudentizado $q$",
      "Es un test para varianzas",
      "Es un test de bondad de ajuste"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Tukey HSD compara todos los pares con la distribución $q$ del rango estudentizado."
  },
  {
    "q": "¿Qué es cierto sobre el ANOVA de dos factores?",
    "opts": [
      "Estudia dos factores simultáneamente",
      "Permite modelar la interacción",
      "Exige un único factor",
      "Es un método no paramétrico"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El ANOVA de dos factores estudia dos factores y su interacción; es paramétrico."
  },
  {
    "q": "¿Cuáles son supuestos de ANOVA de un factor?",
    "opts": [
      "Independencia de observaciones",
      "Normalidad dentro de cada grupo",
      "Las medias son todas iguales bajo H1",
      "Homocedasticidad"
    ],
    "c": [
      0,
      1,
      3
    ],
    "exp": "Independencia, Normalidad intra-grupo y varianzas iguales."
  },
  {
    "q": "¿Qué incluye la descomposición SCT = SCE + SCD?",
    "opts": [
      "Variabilidad total",
      "Variabilidad entre grupos",
      "Variabilidad dentro de grupos",
      "Error de medicion individual"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La variabilidad total se particiona en entre-grupos y dentro-de-grupos."
  },
  {
    "q": "¿Qué se estudia en ANOVA de dos factores?",
    "opts": [
      "Efecto principal del factor A",
      "Efecto principal del factor B",
      "Interaccion entre A y B",
      "Solo la varianza residual"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Modelo de dos factores incluye efectos principales e interaccion."
  },
  {
    "q": "¿Qué supuestos requiere el ANOVA de un factor?",
    "opts": [
      "Independencia de las observaciones",
      "Normalidad de los residuos",
      "Homocedasticidad",
      "Igualdad de todas las medias"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres supuestos son independencia, normalidad de residuos y homocedasticidad; la igualdad de medias es $H_0$."
  },
  {
    "q": "¿Qué términos forman la descomposición de la variación total?",
    "opts": [
      "$SCT$: variación total",
      "$SCE$: variación entre grupos",
      "$SCD$: variación dentro de grupos",
      "$SCE$: variación residual"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$SCT=SCE+SCD$, con $SCE$ entre grupos y $SCD$ dentro de grupos (residual)."
  },
  {
    "q": "¿Qué ventajas tiene el ANOVA frente a múltiples tests $t$?",
    "opts": [
      "Controla el error tipo I global",
      "Permite comparar $k$ medias con un solo test",
      "Descompone la variación total",
      "No requiere ningún supuesto"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El ANOVA controla el error global, compara $k$ medias de una vez y descompone la varianza; sí requiere supuestos."
  },
  {
    "q": "¿Qué es correcto sobre las pruebas post-hoc?",
    "opts": [
      "Identifican qué pares difieren",
      "Controlan el error tipo I",
      "Se aplican tras un ANOVA significativo",
      "Sustituyen al ANOVA global"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las post-hoc detallan las diferencias y controlan el error global, pero se usan después del test global, no en su lugar."
  },
  {
    "q": "Si hay interacción significativa, ¿qué afirmaciones son correctas?",
    "opts": [
      "El efecto de un factor depende del nivel del otro",
      "Conviene analizar cada nivel por separado",
      "Los efectos principales pueden ser engañosos",
      "Debe ignorarse la interacción"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La interacción implica dependencia entre factores; se interpreta por niveles y los efectos principales aislados pueden confundir."
  },
  {
    "q": "¿Qué grados de libertad aparecen en un ANOVA de un factor?",
    "opts": [
      "$SCE$: $k-1$",
      "$SCD$: $N-k$",
      "$SCT$: $N-1$",
      "$SCD$: $k-1$"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Entre grupos $k-1$, dentro $N-k$ y total $N-1$."
  },
  {
    "q": "¿Qué es cierto sobre el estadístico $F$ en ANOVA?",
    "opts": [
      "Es $MCE/MCD$",
      "Bajo $H_0$ sigue $F(k-1,N-k)$",
      "Un valor grande favorece $H_1$",
      "Mide la correlación entre grupos"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$F$ compara la variación entre y dentro; valores grandes indican evidencia contra $H_0$. No es una correlación."
  },
  {
    "q": "¿Qué es cierto sobre el tamaño del efecto $\\eta^2$?",
    "opts": [
      "Es una proporción de varianza explicada",
      "Toma valores entre 0 y 1",
      "Es una medida del tamaño del efecto",
      "Es equivalente al p-valor"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$\\eta^2$ cuantifica el efecto en proporción de varianza; no es un p-valor."
  },
  {
    "q": "¿Qué es cierto sobre la corrección de Bonferroni?",
    "opts": [
      "Ajusta $\\alpha$ dividiéndolo entre el número de comparaciones",
      "Controla el error tipo I global",
      "Es conservadora",
      "Es más potente que Tukey en todos los casos"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Bonferroni divide $\\alpha$ entre las comparaciones, controla el error global y es conservadora; Tukey suele ser más potente con igualdad de tamaños."
  },
  {
    "q": "¿Qué es cierto sobre Tukey HSD?",
    "opts": [
      "Compara todos los pares de medias",
      "Usa la distribución del rango estudentizado $q$",
      "Asume igualdad de varianzas",
      "Es un test no paramétrico"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Tukey compara todos los pares con la distribución $q$ bajo el supuesto de varianzas iguales; es paramétrico."
  },
  {
    "q": "En el modelo $X_{ij}=\\mu+\\tau_j+\\varepsilon_{ij}$, ¿qué representa cada término?",
    "opts": [
      "$\\mu$: media general",
      "$\\tau_j$: efecto del grupo $j$",
      "$\\varepsilon_{ij}$: error aleatorio",
      "$\\tau_j$: varianza del grupo $j$"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$\\mu$ es la media global, $\\tau_j$ el efecto del nivel $j$ y $\\varepsilon_{ij}$ el error individual."
  },
  {
    "q": "¿Qué situaciones comprometen la validez del ANOVA?",
    "opts": [
      "Heterocedasticidad",
      "Falta de normalidad de los residuos",
      "Dependencia entre observaciones",
      "Presencia de empates"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las tres primeras violan supuestos; los empates no afectan al ANOVA."
  },
  {
    "q": "¿Qué columnas tiene una tabla ANOVA?",
    "opts": [
      "Grados de libertad",
      "Sumas de cuadrados",
      "Medias de cuadrados",
      "Medianas grupales"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La tabla recoge gl, sumas de cuadrados, medias de cuadrados y $F$; no incluye medianas."
  },
  {
    "q": "¿Qué es correcto sobre el ANOVA de dos factores?",
    "opts": [
      "Estudia dos factores a la vez",
      "Permite estimar la interacción",
      "Incluye efectos principales",
      "Exige que los factores sean continuos"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Estudia dos factores, sus efectos principales y su interacción; los factores son categóricos."
  },
  {
    "q": "¿Qué es cierto sobre el p-valor del ANOVA?",
    "opts": [
      "Es $\\Prob{\\text{datos o más extremos}\\mid H_0}$",
      "No es $\\Prob{H_0\\mid\\text{datos}}$",
      "Un valor pequeño favorece $H_1$",
      "Mide el tamaño del efecto"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El p-valor mide compatibilidad con $H_0$ y no cuantifica $\\Prob{H_0\\mid\\text{datos}}$ ni el tamaño del efecto."
  },
  {
    "q": "¿Qué ventajas aporta un diseño de bloques?",
    "opts": [
      "Controla variabilidad entre sujetos",
      "Usa medidas repetidas o bloques",
      "Aumenta la precisión del contraste",
      "Elimina la necesidad de supuestos"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El bloqueo controla variabilidad ajena y aumenta precisión; los supuestos siguen siendo necesarios."
  },
  {
    "q": "¿Qué limitaciones tiene el ANOVA?",
    "opts": [
      "No identifica qué pares difieren",
      "Requiere supuestos distribucionales",
      "No prueba causalidad por sí solo",
      "Solo admite dos grupos"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El ANOVA es global, exige supuestos y no demuestra causalidad; admite $k\\ge 2$ grupos."
  }
];
