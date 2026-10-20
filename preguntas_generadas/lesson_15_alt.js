// Leccion 15 — 180 preguntas alternativas
// Generadas con gemma4 el 2026-07-04 13:46
// Distribucion: 60/60/60 (1c/2c/3c)
window.LESSON_QUESTIONS_ALT = window.LESSON_QUESTIONS_ALT || {};
window.LESSON_QUESTIONS_ALT[15] = [
  {
    "q": "¿Cuál es la principal ventaja del Teorema Central del Límite (TCL)?",
    "opts": [
      "Garantiza que la distribución muestral $\\bar{X}$ se acerque a una Normal, incluso si la población no lo es, siempre que $n$ sea suficientemente grande.",
      "Requiere que la población original sea Normal.",
      "Permite aproximar distribuciones con distribución $t$.",
      "Es válido solo para variables discretas."
    ],
    "c": [
      0
    ],
    "exp": "La gran utilidad del TCL radica en su robustez. No requiere que la población de origen siga una distribución normal; solo se requieren que los datos sean independientes y tengan varianza finita, lo que permite aproximar la distribución muestral $\\bar{X}$ a una Normal para muestras grandes ($n \\ge 30$ es una regla empírica común)."
  },
  {
    "q": "¿Qué representa el Error Estándar de la Media ($\\sigma_{\\bar{X}}$)?",
    "opts": [
      "La dispersión esperada de las medias muestrales (estadístico $\\bar{X}$) si se tomaran infinitas muestras.",
      "La desviación estándar de los datos poblacionales.",
      "La varianza muestral corregida por $n-1$.",
      "El error máximo permisible en un intervalo de confianza."
    ],
    "c": [
      0
    ],
    "exp": "El Error Estándar no es la variabilidad de los datos, sino la variabilidad del estimador. Matemáticamente, se calcula como $\\sigma_{\\bar{X}} = \\frac{\\sigma}{\\sqrt{n}}$. Representa la dispersión que esperaríamos si repitiéramos el proceso de muestreo muchas veces."
  },
  {
    "q": "¿Qué garantiza la Ley de los Grandes Números (LGN)?",
    "opts": [
      "Que la media muestral ($\\bar{X}$) converge a la media poblacional ($\\mu$) cuando $n$ tiende a infinito.",
      "Que la desviación estándar se estabiliza rápidamente en el tiempo.",
      "Que todas las muestras serán idénticas entre sí.",
      "Que cualquier estadístico es siempre perfectamente preciso con un tamaño de muestra grande."
    ],
    "c": [
      0
    ],
    "exp": "La LGN establece que, a medida que el tamaño de la muestra ($n$) aumenta, la media muestral ($\\bar{X}$) se acercará cada vez más al valor esperado poblacional ($\\mu$). Es un concepto de convergencia en probabilidad."
  },
  {
    "q": "¿Cómo debe calcularse una desviación estándar *insesgada* para estimar $\\sigma$ a partir de una muestra?",
    "opts": [
      "Utilizando el corrector de grados de libertad: dividir por $n-1$.",
      "Usando la fórmula $s = \\sqrt{\\frac{\\sum (x_i - \\bar{X})^2}{n}}$.",
      "Dividiendo por el tamaño muestral ($n$).",
      "Asumiendo que los datos siguen una distribución Normal."
    ],
    "c": [
      0
    ],
    "exp": "Para obtener un estimador insesgado ($\\sigma^2$) de la varianza poblacional, debemos usar el divisor $(n-1)$, lo que resulta en la fórmula de la desviación estándar muestral: $s = \\sqrt{\\frac{\\sum (x_i - \\bar{X})^2}{n-1}}$."
  },
  {
    "q": "¿Qué implica el concepto de 'Distribución Muestral'?",
    "opts": [
      "La distribución teórica de un estadístico (ej. $\\bar{X}$) obtenido de todos los posibles subconjuntos de una población.",
      "La distribución de los datos originales recolectados.",
      "Una gráfica que solo muestra la media y la desviación estándar.",
      "Solo se utiliza cuando el muestreo es estratificado."
    ],
    "c": [
      0
    ],
    "exp": "Mientras que la distribución poblacional muestra cómo varían los datos en sí, la distribución muestral muestra cómo varía *el estadístico* (como $\\bar{X}$) si tomáramos infinitas muestras de tamaño $n$ de esa población. Por ejemplo, su media será igual a $\\mu$."
  },
  {
    "q": "¿Qué requisito fundamental es el más relajado al usar el TCL?",
    "opts": [
      "La varianza finita en la población.",
      "La Normalidad de la distribución poblacional.",
      "La independencia entre las observaciones muestrales.",
      "Que el tamaño de muestra $n$ sea muy pequeño."
    ],
    "c": [
      0
    ],
    "exp": "Aunque es ideal que los datos sean normales, la gran fortaleza del TCL es que solo requiere la independencia y una varianza finita. La Normalidad poblacional se puede ignorar si la muestra es lo suficientemente grande."
  },
  {
    "q": "¿En el muestreo por conglomerados (Cluster Sampling), ¿qué se agrupa para minimizar costos?",
    "opts": [
      "Áreas geográficas completas que contienen grupos de individuos.",
      "Individuos con características similares.",
      "Variables medidas en diferentes épocas temporales.",
      "Datos recolectados por diferentes fuentes."
    ],
    "c": [
      0
    ],
    "exp": "Este método es eficiente cuando la unidad geográfica o natural (el conglomerado) ya está delimitada. En lugar de muestrear aleatoriamente a individuos, se seleccionan grupos completos (ej., escuelas, vecindarios) y se estudian todos los elementos dentro de esos grupos."
  },
  {
    "q": "¿Cuál es el objetivo principal del método Bootstrap?",
    "opts": [
      "Aproximar la distribución de un estadístico sin asumir una forma teórica específica para la población.",
      "Reducir completamente el error muestral a cero.",
      "Sustituir completamente las técnicas paramétricas por métodos no paramétricos.",
      "Calcular valores exactos solo con muestras muy pequeñas."
    ],
    "c": [
      0
    ],
    "exp": "El Bootstrap es un poderoso método de remuestreo. En lugar de depender de la distribución teórica (como Normal), crea múltiples 'poblaciones' simuladas tomando muestras con reemplazo de los datos disponibles para estimar la variabilidad y distribuciones de estadísticos (ej., la mediana, coeficientes de correlación)."
  },
  {
    "q": "¿Cuál es el propósito de usar muestreo estratificado?",
    "opts": [
      "Asegurar que subgrupos importantes de la población estén representados proporcionalmente en la muestra.",
      "Reducir significativamente los costos operativos del estudio.",
      "Eliminar completamente la posibilidad de sesgo de selección.",
      "Garantizar que todas las variables medidas sean Normales."
    ],
    "c": [
      0
    ],
    "exp": "El muestreo estratificado divide la población en subgrupos (estratos) basados en una característica conocida (ej., género, nivel educativo). Luego se toma una muestra aleatoria dentro de cada estrato. Esto aumenta la precisión y reduce el error estándar si los estratos son homogéneos internamente pero heterogéneos entre sí."
  },
  {
    "q": "¿Cómo afecta un aumento del tamaño muestral ($n$) al Error Estándar ($\\sigma_{\\bar{X}}$)?",
    "opts": [
      "Disminuye inversamente (por $\\sqrt{n}$), aumentando la precisión del estimador.",
      "Aumenta linealmente, haciendo la estimación menos precisa.",
      "No tiene efecto alguno en el error estándar.",
      "Solo afecta a la varianza poblacional, no al error estándar."
    ],
    "c": [
      0
    ],
    "exp": "Dado que $\\sigma_{\\bar{X}} = \\frac{\\sigma}{\\sqrt{n}}$, si $n$ aumenta, el denominador crece, y por lo tanto, el Error Estándar disminuye. Esto significa que nuestra estimación $\\bar{X}$ se vuelve más precisa o 'aprieta' mejor alrededor de $\\mu$."
  },
  {
    "q": "¿Cuál es la principal diferencia entre muestreo aleatorio simple (SAS) y estratificado?",
    "opts": [
      "En el SAS cada unidad tiene igual probabilidad, mientras que el Estratificado garantiza representación proporcional en grupos clave.",
      "El SAS requiere conocer previamente las características de los subgrupos, mientras que el Estratificado no.",
      "El muestreo estratificado es siempre más barato que el SAS.",
      "Solo se puede aplicar SAS si la población es muy grande."
    ],
    "c": [
      0
    ],
    "exp": "La diferencia esencial radica en el control de la varianza. El SAS asume que todas las unidades son igualmente variables. El Estratificado garantiza que los subgrupos cruciales (estratos) estén representados y permite calcular muestras más precisas si sabemos cómo se agrupan esos subgrupos."
  },
  {
    "q": "¿Por qué $\\bar{X}$ es un estimador insesgado para $\\mu$?",
    "opts": [
      "Debido a que el proceso de suma y división no introduce sesgo sistemático en promedio.",
      "Porque la media muestral siempre convergerá al valor poblacional.",
      "Si se utiliza una muestra suficientemente grande, por definición.",
      "Requiere el uso del método Bootstrap para su cálculo."
    ],
    "c": [
      0
    ],
    "exp": "Un estimador insesgado significa que el valor esperado del estadístico muestral es igual al parámetro poblacional. Para la media, $E[\\bar{X}] = \\mu$. Esto se debe a que los errores de sobreestimación y subestimación tienden a cancelarse en promedio."
  },
  {
    "q": "¿Qué condición estadística es *necesaria* para aplicar correctamente el TCL?",
    "opts": [
      "Que las observaciones sean estadísticamente independientes entre sí.",
      "Que la varianza de la población sea finita ($\\sigma^2 < \\infty$).",
      "Que se haya elegido un tamaño muestral $n$ suficientemente grande ($n \\ge 30$).",
      "Que todos los datos sigan una distribución Normal."
    ],
    "c": [
      0
    ],
    "exp": "Aunque el TCL menciona que la *Normalidad* poblacional es lo que puede relajarse, las condiciones fundamentales para su validez son siempre: 1) Independencia; y 2) Varianza finita ($\\sigma^2 < \\infty$). Si falta alguno de estos, el teorema no aplica."
  },
  {
    "q": "Si se utiliza un método Bootstrap con reemplazo, ¿qué variable se está estimando realmente?",
    "opts": [
      "Los parámetros poblacionales desconocidos (ej., $\\mu$, $\\sigma$) a través de la simulación",
      "La distribución de los datos originales ($X$)",
      "El tamaño exacto de la población total.",
      "El error estándar teórico asumido por el analista."
    ],
    "c": [
      0
    ],
    "exp": "La fuerza del Bootstrap es que permite estimar distribuciones y parámetros (como $\\mu$ o la mediana) utilizando los propios datos. Al remuestrear, estamos simulando cómo se comportaría un estadístico si hubiéramos tomado otra muestra similar a la observada, aproximándonos así a los parámetros poblacionales."
  },
  {
    "q": "¿Qué representa la distribución muestral de $\\bar{X}$?",
    "opts": [
      "La distribución de todos los posibles estadísticos (como medias) que podrían calcularse a partir de muestras del tamaño $n$.",
      "La probabilidad de obtener un valor específico en una sola medición.",
      "Una representación gráfica de los datos originales sin ningún tipo de cálculo estadístico.",
      "El rango teórico entre el valor mínimo y máximo posible en la población."
    ],
    "c": [
      0
    ],
    "exp": "La distribución muestral es fundamental: no se estudia la variable $X$ (la población), sino el estadístico ($\\bar{X}$ o $\\hat{\\sigma}^2$) que resulta de tomar múltiples muestras. Esto nos permite estimar la variabilidad del estimador, no la variación en los datos brutos."
  },
  {
    "q": "Si el desvío estándar poblacional es $\\sigma$ y se toma una muestra de tamaño $n$, ¿cuál es el cálculo correcto para calcular el error estándar ($\\sigma_{\\bar{X}}$)?",
    "opts": [
      "$\\frac{\\sigma}{\\sqrt{n}}$",
      "$n \\cdot \\sigma$",
      "$\\frac{\\sigma}{n}$",
      "$\\sqrt{\\frac{\\sigma^2}{n-1}}$"
    ],
    "c": [
      0
    ],
    "exp": "El error estándar es la desviación típica de la distribución muestral del promedio. Su cálculo estándar y correcto es $\\sigma_{\\bar{X}} = \\frac{\\sigma}{\\sqrt{n}}$. Esto indica que al aumentar $n$, el error estándar disminuye, haciéndonos mejores estimadores."
  },
  {
    "q": "¿Cuál es una condición esencial para aplicar correctamente el Teorema Central del Límite (TCL)?",
    "opts": [
      "Que las observaciones en la muestra deben ser independientes entre sí y que la varianza finita.",
      "Que la población debe seguir estrictamente una distribución Normal.",
      "Que el tamaño de muestra $n$ sea lo suficientemente grande (generalmente $n \\ge 30$).",
      "Que los datos muestrales deban ser perfectamente uniformes."
    ],
    "c": [
      0
    ],
    "exp": "El poder del TCL radica precisamente en que no requiere normalidad poblacional. Solo necesita dos condiciones: la independencia de las observaciones y que el tamaño de muestra sea suficiente ($n$ grande), lo cual garantiza que la distribución muestral se acerque a una Normal."
  },
  {
    "q": "¿Qué implica la Ley de los Grandes Números (LLN) cuando decimos que $\\bar{X} \\to \\mu$ en probabilidad, cuando $n \\to \\infty$?",
    "opts": [
      "Que la media muestral ($\\bar{X}$) convergerá al valor poblacional real ($\\mu$) a medida que el tamaño de muestra aumenta.",
      "Que el error estándar siempre será cero si se toman muestras infinitas.",
      "Que cualquier estimador basado en $\\bar{X}$ automáticamente será el más eficiente posible.",
      "Que la distribución muestral dejará de ser Normal cuando $n$ sea extremadamente grande."
    ],
    "c": [
      0
    ],
    "exp": "La LLN es un principio de convergencia. Nos dice que, a medida que aumentamos el tamaño de muestra ($n \\to \\infty$), el promedio muestral ($\\bar{X}$) se vuelve cada vez más fiable y converge en probabilidad al verdadero parámetro poblacional ($\\mu$)."
  },
  {
    "q": "¿Cuál es la principal ventaja conceptual del método bootstrap?",
    "opts": [
      "Permite estimar la distribución de un estadístico sin depender de su forma teórica (Normal, Chi-cuadrado).",
      "Es útil para calcular intervalos de confianza cuando no se conoce la desviación estándar poblacional ($\\sigma$).",
      "Ofrece una alternativa computacional robusta al muestreo aleatorio tradicional en problemas complejos.",
      "Requiere que la población sea necesariamente finita y pequeña."
    ],
    "c": [
      0
    ],
    "exp": "El bootstrap es un método de resampleo que simula la distribución del estadístico (como el coeficiente de variación) usando los datos observados. Su gran ventaja es su no-asunción, ya que no requiere asumir una forma específica para la distribución poblacional."
  },
  {
    "q": "¿En el contexto del muestreo, ¿cuál es el principal beneficio teórico o práctico de utilizar un Diseño de Muestreo Estratificado?",
    "opts": [
      "Asegura que cada subgrupo (estrato) dentro de la población esté representado proporcionalmente.",
      "Reduce significativamente la varianza total del estimador en comparación con el Simple Random Sampling.",
      "Es ideal cuando existe conocimiento previo sobre subgrupos heterogéneos o importantes.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "El muestreo estratificado divide la población en grupos homogéneos (estratos) y luego toma muestras de cada uno. Esto reduce el error de muestreo porque se aprovecha la variabilidad interna menor de cada estrato."
  },
  {
    "q": "¿Qué implica que $\\bar{X}$ sea un estimador insesgado para $\\mu$?",
    "opts": [
      "Que el valor esperado del estadístico es igual al parámetro poblacional ($\\mathbb{E}[\\bar{X}] = \\mu$).",
      "Que la varianza de $\\bar{X}$ será menor que cualquier otro estimador alternativo.",
      "Que su cálculo no depende de qué valores atípicos (outliers) se encuentren en la muestra.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "La insesgadez es una propiedad fundamental. Significa que, si tomáramos múltiples muestras, el promedio de los estadísticos $\\bar{X}$ sería exactamente igual al verdadero parámetro poblacional $\\mu$."
  },
  {
    "q": "¿Por qué es crucial considerar la independencia entre observaciones al aplicar cualquier teorema de muestreo?",
    "opts": [
      "Si las observaciones no son independientes, los cálculos de varianza y error estándar se vuelven incorrectos o inexactos.",
      "La dependencia hace que el TCL sea inaplicable sin correcciones complejas.",
      "Asumir independencia siempre conduce a una sobredimensión del intervalo de confianza requerido.",
      "Solo es un requisito teórico; en la práctica, solo necesitamos $n \\ge 30$."
    ],
    "c": [
      0
    ],
    "exp": "La independencia (o su aproximación) es el pilar matemático. Si las observaciones dependen unas de otras (series de tiempo sin modelos adecuados), los cálculos de varianza se sesgan y el TCL no garantiza la convergencia a una Normal."
  },
  {
    "q": "¿Cuál es la desviación estándar del promedio muestral ($\\bar{X}$) si la varianza poblacional ($\\sigma^2$) es 9?",
    "opts": [
      "3",
      "1",
      "0.03",
      "9"
    ],
    "c": [
      0
    ],
    "exp": "La desviación estándar de $\\bar{X}$ (el error estándar) se calcula como $\\frac{\\sigma}{\\sqrt{n}}$. Si no se especifica $n$, asumimos que la pregunta busca el componente poblacional o el valor del desv. estándar ($\\sigma$). De hecho, si la varianza es 9, $\\sigma = \\sqrt{9} = 3$. (Si el problema hubiera dado $n=100$, el error estándar sería $\\frac{3}{10}$). Aquí nos enfocamos en $\\sigma$."
  },
  {
    "q": "En relación con la Ley de los Grandes Números, ¿qué afirmación es correcta?",
    "opts": [
      "La proporción muestral converge a la verdadera probabilidad poblacional cuando $n \\to \\infty$",
      "El estadístico siempre será igual al parámetro poblacional",
      "Solo aplica si la población sigue una distribución normal",
      "Es más rápido que el cálculo analítico."
    ],
    "c": [
      0
    ],
    "exp": "La Ley de los Grandes Números (LLN) establece que, a medida que el tamaño muestral $n$ aumenta ($\\to \\infty$), la media muestral $\\bar{X}$ converge en probabilidad al valor esperado poblacional $\\mu$. Por lo tanto, la proporción muestra también converge."
  },
  {
    "q": "¿Qué método de remuestreo se utiliza para estimar la distribución de un estadístico sin asumir una distribución teórica?",
    "opts": [
      "Bootstrap",
      "Muestreo aleatorio estratificado",
      "Cálculo analítico directo",
      "Distribución Z"
    ],
    "c": [
      0
    ],
    "exp": "El método Bootstrap consiste en crear múltiples muestras artificiales (remuestrear con reemplazo) a partir del conjunto de datos original para estimar la distribución muestral de un estadístico, sin requerir supuestos paramétricos complejos."
  },
  {
    "q": "Si una población tiene media $\\mu=50$ y varianza $\\sigma^2=16$, ¿cuál es el error estándar esperado si se toman muestras de tamaño $n=25$?",
    "opts": [
      "$\\frac{4}{5}$",
      "$2$",
      "$3.2$",
      "$\\sqrt{25}$"
    ],
    "c": [
      0
    ],
    "exp": "El error estándar ($\\sigma_{\\bar{X}}$) se calcula como $\\frac{\\sigma}{\\sqrt{n}}$. Primero encontramos la desviación estándar poblacional: $\\sigma = \\sqrt{16} = 4$. Luego, dividimos por $\\sqrt{25}$: $\\text{Error Estándar} = \\frac{4}{5} = 0.8$. (Revisión del cálculo: Error estándar = $4/\\sqrt{25} = 4/5 = 0.8$. Revisando opciones: la opción [0] es $4/5$, que es 0.8)."
  },
  {
    "q": "¿Cuál es el principal requisito para aplicar el Teorema Central del Límite (TCL)?",
    "opts": [
      "Solo se requiere que las muestras sean independientes y tengan varianza finita.",
      "Que la población deba ser paramétricamente normal.",
      "Un tamaño muestral mínimo de $n \\ge 30$.",
      "La distribución poblacional debe estar medida en un intervalo finito."
    ],
    "c": [
      0
    ],
    "exp": "El TCL es poderoso precisamente porque solo requiere dos condiciones: que los datos sean independientes y que la varianza sea finita ($\\sigma^2 < \\infty$). No exige normalidad de la población, lo cual es su mayor ventaja."
  },
  {
    "q": "¿Qué tipo de muestreo se recomienda si el objetivo es garantizar que se representen proporciones conocidas o grupos clave de interés poblacional?",
    "opts": [
      "Muestreo estratificado",
      "Muestreo por conglomerados",
      "Muestreo aleatorio simple",
      "Bootstrap"
    ],
    "c": [
      0
    ],
    "exp": "El muestreo estratificado divide la población en subgrupos (estratos) homogéneos basados en características conocidas y luego toma muestras aleatorias de cada estrato. Esto asegura una mejor representación y reduce el error muestral si los estratos son relevantes."
  },
  {
    "q": "¿Por qué el Teorema Central del Límite no exige que la población tenga forma normal?",
    "opts": [
      "Porque solo necesita independencia y varianza finita: la media muestral se normaliza al crecer $n$",
      "Porque la normal es buena aproximación de cualquier forma de distribución",
      "Porque el TCL solo se aplica a poblaciones normales",
      "Porque la varianza de la media muestral es siempre cero"
    ],
    "c": [
      0
    ],
    "exp": "El TCL exige $X_i$ i.i.d. con $\\E{X} = \\mu$ y $\\V{X} = \\sigma^2 < \\infty$, sin condición sobre la forma. Para $n$ grande, $(\\bar{X}-\\mu)/(\\sigma/\\sqrt{n}) \\approx \\N{0}{1}$. La forma de la población solo influye en la velocidad de convergencia, no en la validez asintótica."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre la varianza muestral ($S^2$) es correcta?",
    "opts": [
      "Utilizar el divisor $n-1$ garantiza que sea un estimador insesgado para $\\sigma^2$.",
      "Su uso es apropiado solo si la población sigue una distribución normal.",
      "Es más sensible a los valores atípicos (outliers) que la media.",
      "Representa mejor la dispersión de la media poblacional."
    ],
    "c": [
      0
    ],
    "exp": "El uso del divisor $n-1$ (grados de libertad) en el cálculo de $S^2$ asegura que el estimador sea insesgado para la varianza poblacional $\\sigma^2$. Este es un principio fundamental en estadística."
  },
  {
    "q": "¿Qué tipo de error estadístico es inherente al proceso de muestreo y no se debe a errores en la medición?",
    "opts": [
      "Error aleatorio o Error de Muestreo",
      "Sesgo sistemático (Bias)",
      "Error por falta de potencia estadística",
      "Error de redondeo"
    ],
    "c": [
      0
    ],
    "exp": "El error muestral es la diferencia natural que existe entre un estadístico calculado en una muestra y el verdadero parámetro poblacional. Es inevitable e incluso lo cuantificamos con el Error Estándar."
  },
  {
    "q": "¿Cómo afecta el aumento del tamaño de la muestra ($n$) al error estándar?",
    "opts": [
      "Disminuye, ya que $\\sigma_{\\bar{X}} = \\frac{\\sigma}{\\sqrt{n}}$.",
      "Permanece constante si $\\mu$ y $\\sigma^2$ son fijos.",
      "Aumenta proporcionalmente, haciéndolo menos confiable.",
      "Solo afecta si el muestreo no es aleatorio."
    ],
    "c": [
      0
    ],
    "exp": "El error estándar ($\\sigma_{\\bar{X}}$) es inversamente proporcional a $\\sqrt{n}$. Cuanto mayor sea $n$, menor será la desviación del promedio muestral respecto al verdadero promedio poblacional. Esto garantiza una mejor precisión."
  },
  {
    "q": "¿Qué propiedad caracteriza a la media muestral ($\\bar{X}$) como estimador de $\\mu$?",
    "opts": [
      "Es asintóticamente normal.",
      "Es insesgado para $\\mu$.",
      "Su varianza es siempre conocida.",
      "Requiere que la población sea Normal."
    ],
    "c": [
      0
    ],
    "exp": "La media muestral ($\\bar{X}$) es un estimador insesgado de la media poblacional ($\\mu$), lo que significa que el valor esperado de $\\bar{X}$ es igual a $\\mu$, sin importar qué distribución poblacional siga."
  },
  {
    "q": "¿Cuál es el objetivo principal del Teorema Central del Límite (TCL)?",
    "opts": [
      "Estimar $\\sigma$ con un solo parámetro.",
      "Determinar la forma de la distribución muestral de $\\bar{X}$ para $n \\ge 30$.",
      "Calcular la probabilidad exacta sin necesidad de aproximación Z.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "El TCL establece que, independientemente de la forma de la distribución poblacional (si tiene varianza finita), la distribución muestral de $\\bar{X}$ se acercará a una distribución Normal a medida que el tamaño de la muestra ($n$) aumenta."
  },
  {
    "q": "¿Cómo se calcula la desviación estándar de la distribución muestral de $\\bar{X}$?",
    "opts": [
      "Calculando $s/\\sqrt{n}$.",
      "Igual al estándar poblacional $\\sigma$.",
      "Usando únicamente la mediana.",
      "Es imposible calcularla sin datos adicionales."
    ],
    "c": [
      0
    ],
    "exp": "La desviación estándar de la distribución muestral se llama Error Estándar (SE) y se calcula como $SE = \\sigma / \\sqrt{n}$. Si solo tenemos una muestra, usamos el estimador $s/\\sqrt{n}$."
  },
  {
    "q": "¿Qué garantiza la Ley de los Grandes Números (LLN)?",
    "opts": [
      "Que $\\bar{X}$ converge en probabilidad hacia $\\mu$ cuando $n \\to \\infty$.",
      "Que $\\bar{X}$ tiende a seguir una distribución Normal.",
      "Que el error estándar es constante para cualquier tamaño de muestra.",
      "Que la varianza poblacional ($\\sigma^2$) siempre es positiva."
    ],
    "c": [
      0
    ],
    "exp": "La LLN establece que, a medida que aumenta el tamaño de la muestra ($n$), el promedio muestral ($\\bar{X}$) converge en probabilidad al verdadero valor poblacional ($\\mu$). Esto garantiza la confiabilidad del promedio."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones describe correctamente la relación entre la Ley de los Grandes Números (LLN) y el muestreo?",
    "opts": [
      "A medida que aumenta el tamaño de la muestra ($n$), la media muestral ($\\bar{X}$) converge en probabilidad hacia la media poblacional ($\\mu$).",
      "El LLN establece que la desviación estándar de las muestras es constante, sin importar $n$.",
      "La Ley de los Grandes Números solo aplica a distribuciones Binomiales.",
      "Establece que el estadístico muestral siempre será una estimación perfecta del parámetro poblacional."
    ],
    "c": [
      0
    ],
    "exp": "El LLN garantiza que la media muestral ($\\bar{X}$) se vuelve un buen estimador de $\\mu$ a medida que $n$ crece indefinidamente. Esto es diferente al TCL, que habla de la *forma* de la distribución."
  },
  {
    "q": "¿Qué representa el concepto de Error Estándar en el análisis estadístico?",
    "opts": [
      "La desviación típica de los datos muestrales recolectados.",
      "La dispersión esperada del estimador ($\\bar{X}$) si se repitiera el proceso de muestreo muchas veces.",
      "El error que ocurre por la selección de un método estadístico incorrecto.",
      "La diferencia entre la media poblacional y una única observación aleatoria."
    ],
    "c": [
      0
    ],
    "exp": "El Error Estándar es $\\sigma_{\\bar{X}} = \\sigma / \\sqrt{n}$. Mide cuán dispersos están los valores promedio de las muestras, no la dispersión de los datos originales."
  },
  {
    "q": "Si la población de pesos (en kg) tiene una media $\\mu=75$ y desviación estándar $\\sigma=5$. Si extraemos muestras aleatorias independientes de tamaño $n$, ¿cuál es la media esperada de la distribución muestral $\\bar{X}$?",
    "opts": [
      "$\\mu$",
      "$s$",
      "$\\sigma/n$",
      "$ \\text{Var}(\\bar{X})$"
    ],
    "c": [
      0
    ],
    "exp": "La propiedad clave de la media del estadístico $\\bar{X}$ es que $E[\\bar{X}] = \\mu$. Por lo tanto, la media muestral sigue siendo insesgada para el parámetro poblacional $\\mu$, sin importar el tamaño de la muestra $n$."
  },
  {
    "q": "¿Cuál es la principal condición requerida por el Teorema Central del Límite (TCL) para que la distribución de $\\bar{X}$ se aproxime a Normal?",
    "opts": [
      "Las muestras deben ser independientes y la varianza debe ser finita.",
      "Las variables deben seguir una distribución normal.",
      "Los datos deben estar correlacionados positivamente.",
      "El tamaño de la población $N$ debe ser muy pequeño."
    ],
    "c": [
      0
    ],
    "exp": "El TCL es poderoso porque no requiere que la población sea Normal. Solo exige dos condiciones fundamentales: 1) La independencia de las observaciones y 2) Que la varianza poblacional ($\\sigma^2$) exista (sea finita). Es crucial señalar que si la población ya es normal, $\\bar{X}$ será normal independientemente del tamaño $n$."
  },
  {
    "q": "Cuando calculamos el error estándar de la media poblacional $(\\text{SE}_{\\bar{X}})$, ¿qué unidad mide esta cantidad?",
    "opts": [
      "La dispersión del estimador muestral.",
      "La desviación típica de los datos originales en la población.",
      "El tamaño efectivo de la muestra $n$.",
      "El valor mínimo esperado de la variable X."
    ],
    "c": [
      0
    ],
    "exp": "El error estándar es, conceptualmente, la desviación tipo de la distribución muestral. Mide la dispersión esperada del estimador $\\bar{X}$ si repitiéramos el proceso de muestreo muchas veces; por ende, mide la precisión o variabilidad del *estimador*, no de los datos originales."
  },
  {
    "q": "¿Qué tipos de muestreo se recomiendan cuando los elementos están agrupados naturalmente y es costoso acceder a cada elemento individual?",
    "opts": [
      "Muestreo por conglomerados (Cluster sampling).",
      "Muestreo aleatorio simple.",
      "Muestreo estratificado.",
      "Muestreo sistemático con periodo fijo."
    ],
    "c": [
      0
    ],
    "exp": "El muestreo por conglomerados es ideal cuando la población está naturalmente dividida en grupos (conglomerados), y el costo de medición hace inviable seleccionar individuos aleatoriamente de toda la población. Se seleccionan los conglomerados, y se miden todos o una muestra dentro de ellos."
  },
  {
    "q": "Según el Teorema Central del Límite (TCL), si la población no es normal, ¿qué condiciones son suficientes para que la distribución muestral de $\\bar{X}$ se aproxime a la Normal?",
    "opts": [
      "La muestra debe tener un tamaño pequeño ($n<30$)",
      "Se requiere que la desviación estándar poblacional ($\\sigma$) sea conocida",
      "Los datos deben ser perfectamente uniformemente distribuidos",
      "Solo es aplicable si la población sigue una distribución de Poisson"
    ],
    "c": [
      0
    ],
    "exp": "El TCL establece que, siempre y cuando los datos sean independientes y tengan varianza finita, la distribución muestral del promedio ($\\bar{X}$) tenderá a Normal, incluso si la forma poblacional original no lo es. El tamaño $n \\ge 30$ es una regla práctica común, pero el requisito fundamental son las condiciones de independencia y varianza finita."
  },
  {
    "q": "¿Cuál es el propósito principal del concepto de 'Error Estándar' ($\\sigma_{\\bar{X}}$)?",
    "opts": [
      "Calcular la desviación estándar de los datos originales.",
      "Medir la dispersión esperada del estadístico muestral (como $\\bar{X}$).",
      "Determinar el tamaño mínimo de muestra requerido para una prueba.",
      "Corregir sesgos en el cálculo de promedios aritméticos."
    ],
    "c": [
      0
    ],
    "exp": "El Error Estándar mide cómo se dispersan los valores del estadístico muestral (ej. $\\bar{X}$) si tomamos muchísimas muestras, es decir, la variabilidad del estimador, no la variabilidad de los datos originales."
  },
  {
    "q": "¿Qué característica define el concepto de 'Distribución Muestral'?",
    "opts": [
      "Es una gráfica que muestra la variación de un estadístico calculado en todas las posibles muestras.",
      "Su forma depende exclusivamente de la distribución poblacional original.",
      "Solo se puede determinar mediante simulaciones computacionales.",
      "Implica que el tamaño de muestra ($n$) debe ser muy pequeño para su análisis."
    ],
    "c": [
      0
    ],
    "exp": "La distribución muestral es, por definición, la distribución teórica o empírica del estadístico (como $\\bar{X}$) si se tomaran infinitas muestras aleatorias. Su forma y parámetros dependen de la población y el tamaño $n$."
  },
  {
    "q": "Según el Teorema Central del Límite (TCL), ¿cuál es la distribución de $\\bar{X}$ si el tamaño de muestra $n$ es suficientemente grande, independientemente de la forma poblacional?",
    "opts": [
      "Distribución t de Student",
      "Distribución Normal estándar ($\\mathcal{N}(0, 1)$)",
      "Distribución Uniforme",
      "La misma distribución que la población"
    ],
    "c": [
      0
    ],
    "exp": "El TCL establece que si $n$ es grande ($n \\ge 30$ es una regla común), la distribución muestral de $\\bar{X}$ tenderá a una distribución Normal, incluso si la distribución poblacional no lo era."
  },
  {
    "q": "¿Cuál es el propósito principal del método bootstrap en estadística?",
    "opts": [
      "Determinar la desviación estándar de los datos originales.",
      "Estimar distribuciones muestrales cuando se desconoce $\\sigma$ o la población es pequeña.",
      "Calcular estadísticos bajo supuestos paramétricos estrictos.",
      "Realizar ajustes para atenuar el sesgo muestral."
    ],
    "c": [
      0
    ],
    "exp": "El bootstrap utiliza remuestreos con reemplazo de los datos observados ($X^*$) para estimar la distribución muestral de un estadístico ($\\hat{\\theta}$), especialmente útil cuando la distribución real es desconocida o compleja."
  },
  {
    "q": "Si $\\bar{X}$ es el estimador de $\\mu$ y $S^2_{n-1}$ se usa como varianza estimada, ¿qué propiedad se mantiene en términos de sesgo?",
    "opts": [
      "$\\bar{X}$ es insesgado para $\\mu$.",
      "$\\bar{X}$ sigue a la distribución t.",
      "La varianza poblacional $\\sigma^2$ debe ser conocida.",
      "El error estándar solo depende del tamaño $n$, no de $\\sigma$."
    ],
    "c": [
      0
    ],
    "exp": "Una propiedad fundamental de la media ($\\bar{X}$) es que es un estimador insesgado (unbiased) de la media poblacional ($\\mu$). Esto significa que, en promedio, el valor muestral será igual al verdadero parámetro poblacional."
  },
  {
    "q": "Si se toma una muestra aleatoria de tamaño $n$, ¿cuál es la propiedad fundamental de la media muestral $\\bar{X}$?",
    "opts": [
      "Es siempre igual a la varianza poblacional $\\sigma^2$.",
      "Es insesgado para la media poblacional $\\mu$.",
      "Su distribución solo será Normal si la población es Normal.",
      "Representa el valor máximo de los datos observados."
    ],
    "c": [
      0
    ],
    "exp": "La propiedad clave de $\\bar{X}$ como estimador es que es un estimador insesgado (sin sesgo) para $\\mu$, lo que significa que $E(\\bar{X}) = \\mu$. El valor esperado del estadístico muestral es igual al parámetro poblacional."
  },
  {
    "q": "¿Cuál de los siguientes enunciados describe correctamente el Error Estándar ($\\sigma_{\\bar{X}}$)?",
    "opts": [
      "Es la desviación estándar individual de cada dato.",
      "Mide la dispersión esperada de un estimador (como $\\bar{X}$) al muestrear múltiples veces.",
      "Indica cuán lejos está un punto de datos de la media poblacional.\\mu$.",
      "Solo aplica cuando el tamaño de la muestra $n$ es pequeño."
    ],
    "c": [
      0
    ],
    "exp": "El Error Estándar no es una medida de dispersión de los datos (como $\\sigma$), sino una medida de la precisión del estimador. Representa la desviación estándar de la distribución muestral, indicando qué tan dispersos estarán los valores de $\\bar{X}$ si se repite el proceso de muestreo muchas veces."
  },
  {
    "q": "Si se extraen muestras aleatorias de tamaño $n=10$, y la desviación estándar poblacional es $\\sigma=8$ y el tamaño muestral aumenta a $n=100$, ¿cuál será la nueva desviación estándar de la distribución muestral de $\\bar{X}$?",
    "opts": [
      "8/\\sqrt{10}",
      "8/10",
      "$8$",
      "$8/100"
    ],
    "c": [
      0
    ],
    "exp": "La desviación estándar de la distribución muestral (Error Estándar) es dada por $\\sigma_{\\bar{X}} = \\sigma / \\sqrt{n}$. Si $\\sigma=8$ y $n=100$, entonces $\\sigma_{\\bar{X}} = 8 / \\sqrt{100} = 8/10$. Por lo tanto, la opción correcta es 8/10."
  },
  {
    "q": "Respecto a los requisitos para aplicar el Teorema Central del Límite (TCL), ¿cuáles son las afirmaciones correctas?",
    "opts": [
      "La población debe tener una varianza finita.",
      "Los datos de la muestra deben ser estadísticamente independientes entre sí.",
      "El tamaño muestral ($n$) debe ser suficientemente grande (generalmente $n \\ge 30$).",
      "Se requiere que la distribución poblacional sea normal."
    ],
    "c": [
      0
    ],
    "exp": "El TCL asegura que, siempre que el tamaño de la muestra sea lo suficientemente grande y los datos sean independientes con varianza finita, la distribución muestral de $\\bar{X}$ tenderá a una distribución normal. No requiere necesariamente que la población original fuera normal."
  },
  {
    "q": "¿Cuál es la principal condición para aplicar el Teorema Central del Límite (TCL)?",
    "opts": [
      "La población debe tener distribución normal.",
      "Las muestras deben ser independientes de tamaño finito.",
      "Se requiere que la varianza muestral sea conocida y pequeña.",
      "El estadístico $\\bar{X}$ debe converger a una distribución t de Student."
    ],
    "c": [
      0
    ],
    "exp": "El TCL establece que, independientemente de la forma de la población (siempre que tenga media finita), la distribución del promedio muestral ($\\bar{X}$) tenderá a ser normal si el tamaño de muestra ($n$) es lo suficientemente grande. La independencia y varianza finita son las condiciones clave."
  },
  {
    "q": "Si $\\mu=50$ y $\\sigma=10$, ¿cuál es la media teórica del promedio muestral ($\\bar{X}$)?",
    "opts": [
      "50",
      "10",
      "$10^2$",
      "N/A"
    ],
    "c": [
      0
    ],
    "exp": "La propiedad clave de la distribución muestral del promedio muestral es que su media es igual a la media poblacional, $E(\\bar{X}) = \\mu$. Por lo tanto, $\\mu=50$."
  },
  {
    "q": "¿Qué afirma correctamente respecto a la Ley de los Grandes Números (LLN)?",
    "opts": [
      "Garantiza que el promedio muestral ($\\bar{X}$) se aproximará al valor esperado ($\\mu$) a medida que $n$ crece.",
      "Es una condición necesaria para aplicar cualquier prueba de hipótesis paramétrica.",
      "Implica que las varianzas poblacionales son siempre finitas y conocidas.",
      "Solo es aplicable cuando la distribución subyacente es exponencial."
    ],
    "c": [
      0
    ],
    "exp": "La LLN simplemente afirma que, a medida que el tamaño de muestra $n$ tiende al infinito, la media muestral $\\bar{X}$ converge en probabilidad hacia la media poblacional $\\mu$. Es un concepto de convergencia de valores, no necesariamente de distribución."
  },
  {
    "q": "¿Cuál es el requisito principal para aplicar el Teorema Central del Límite (TCL)?",
    "opts": [
      "La población debe seguir una distribución Normal.",
      "Los datos deben ser independientes y tener varianza finita.",
      "El tamaño de la muestra $n$ debe ser muy pequeño ($n < 10$).",
      "Se requiere que la media poblacional ($\\mu$) sea conocida."
    ],
    "c": [
      0
    ],
    "exp": "El TCL es poderoso porque solo exige independencia y varianza finita, eliminando el requisito de Normalidad poblacional. La Normalidad solo es necesaria si $n$ es muy pequeño."
  },
  {
    "q": "¿Qué mide correctamente el error estándar ($\\sigma_{\\bar{X}}$)?",
    "opts": [
      "La dispersión del estadístico muestral $\\bar{X}$.",
      "La desviación típica de la población original ($\\sigma$).",
      "La varianza de la media muestral.",
      "El rango entre los valores mínimos y máximos posibles."
    ],
    "c": [
      0
    ],
    "exp": "El error estándar es una estimación de la dispersión (o variabilidad) que se espera encontrar en el estadístico (como $\\bar{X}$) si repitiéramos el proceso de muestreo muchas veces. Mide la precisión del estimador, no los datos originales."
  },
  {
    "q": "¿Qué se puede afirmar sobre la distribución muestral de $\\bar{X}$ si el tamaño de muestra ($n$) es suficientemente grande, independientemente de la forma poblacional?",
    "opts": [
      "Se aproximará a una distribución Normal.",
      "Su media será igual a la media poblacional ($\\mu$).",
      "Su desviación estándar será $\\sigma / \\sqrt{n}$.",
      "Solo se aplicará si la población original es Normal."
    ],
    "c": [
      0
    ],
    "exp": "Según el Teorema Central del Límite (TCL), cuando $n$ es grande, la distribución muestral de $\\bar{X}$ tenderá a ser normal. Además, por definición teórica, la media de esta distribución sigue siendo $\\mu$. La desviación estándar se calcula como el error estándar: $\\sigma_{\\bar{X}} = \\sigma / \\sqrt{n}$."
  },
  {
    "q": "Si sabemos que la varianza poblacional ($\\sigma^2$) es 100 y tomamos muestras de tamaño $n=4$, ¿cuál es el error estándar de la media muestral ($\\sigma_{\\bar{X}}$)?",
    "opts": [
      "$\\sqrt{100} / \\sqrt{4} = 5$",
      "$\\sqrt{100}/4 = 5/4$",
      "$100 / 4 = 25$",
      "$\\sqrt{100} - 4 = 6$"
    ],
    "c": [
      0
    ],
    "exp": "El error estándar de la media muestral se calcula como $\\sigma_{\\bar{X}} = \\sigma / \\sqrt{n}$. Dado que $\\sigma^2 = 100$, entonces $\\sigma=10$. Sustituyendo $n=4$: $\\sigma_{\\bar{X}} = 10 / \\sqrt{4} = 10 / 2 = 5$."
  },
  {
    "q": "Según el Teorema Central del Límite (TCL), ¿bajo qué condición la distribución muestral de $\\bar{X}$ se aproxima a una Normal?",
    "opts": [
      "El tamaño de muestra ($n$) debe ser lo suficientemente grande.",
      "La población original debe seguir una distribución normal.",
      "Los datos deben estar altamente correlacionados entre sí.",
      "Solo es válido si el método utilizado fue bootstrap."
    ],
    "c": [
      0
    ],
    "exp": "El TCL garantiza que, independientemente de la forma de la distribución poblacional (si esta tiene varianza finita), a medida que $n$ aumenta, la distribución muestral $\\bar{X}$ se normaliza. Esto es crucial porque no requiere normalidad poblacional."
  },
  {
    "q": "Si se cuadruplica el tamaño muestral (de $n$ a $4n$) manteniendo $\\sigma$ constante, ¿cuáles de las siguientes afirmaciones sobre la distribución muestral de $\\bar X$ son correctas?",
    "opts": [
      "El error estándar $\\sigma_{\\bar X} = \\sigma/\\sqrt{n}$ se reduce a la mitad.",
      "La media de la distribución muestral sigue siendo $\\mu$.",
      "El error estándar se duplica.",
      "La varianza de $\\bar X$ aumenta al aumentar $n$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Con $4n$, $\\sigma/\\sqrt{4n} = \\sigma/(2\\sqrt{n})$, la mitad del error estándar original; y $E[\\bar X]=\\mu$ para cualquier $n$. La varianza $\\sigma^2/n$ decrece, no aumenta."
  },
  {
    "q": "¿En el diseño de investigación, cuándo se recomienda utilizar Muestreo por Conglomerados (Cluster Sampling)?",
    "opts": [
      "Cuando la población está naturalmente agrupada en áreas geográficas o grupos naturales.",
      "Cuando obtener una lista completa y precisa de todos los individuos es imposible o extremadamente costoso.",
      "Cuando la variabilidad dentro de los grupos (clústeres) es muy alta.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Se usa el muestreo por conglomerados cuando la población está agrupada y no se puede obtener una lista individual. Se seleccionan grupos enteros para estudiar. Es más práctico que SRS o estratificado en entornos geográficos grandes."
  },
  {
    "q": "¿Cuál es la principal diferencia entre calcular la distribución muestral teóricamente y usar el método Bootstrap?",
    "opts": [
      "El cálculo teórico requiere conocer $\\sigma$, mientras que Bootstrap no.",
      "Bootstrap utiliza remuestreo con reemplazo para aproximar la distribución, sin asumir una forma teórica.",
      "Los métodos son intercambiables e iguales en resultado práctico.",
      "Bootstrap solo funciona si $n$ es muy pequeño."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El cálculo teórico requiere parámetros poblacionales (como $\\sigma$). El Bootstrap aborda esto creando múltiples muestras de reemplazo a partir de los datos observados, permitiendo estimar la distribución muestral y sus propiedades sin necesidad de asumir una forma teórica o conocer el parámetro real."
  },
  {
    "q": "En el método bootstrap, se usa la distribución empírica $F_n$ de la muestra como aproximación de la distribución poblacional $F$. ¿Cuáles de las siguientes afirmaciones son correctas?",
    "opts": [
      "Las remuestras bootstrap se obtienen muestreando con reemplazo de la muestra original, con el mismo tamaño $n$.",
      "Permite aproximar la distribución de muestreo de un estadístico $\\hat\\theta$ sin suponer un modelo paramétrico para $F$.",
      "Requiere conocer $\\sigma$ poblacional para poder aplicarse.",
      "Las remuestras se extraen sin reemplazo y con tamaño $n/2$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El bootstrap remuestrea con reemplazo al tamaño original $n$ y estima la distribución del estadístico replicando el mecanismo de muestreo; no requiere conocer $\\sigma$ ni supuestos paramétricos."
  },
  {
    "q": "¿Qué condición asegura que el Teorema Central del Límite sea aplicable?",
    "opts": [
      "Las variables muestrales deben ser independientes y tener varianza finita.",
      "Que los datos se recopilen de un proceso estocástico bien definido.",
      "El tamaño muestral $n$ debe ser lo suficientemente grande (generalmente $n \\ge 30$).",
      "Que la distribución poblacional sea perfectamente normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las condiciones clave son la independencia y varianza finita. Si bien el tamaño muestral ($n \\ge 30$) es una regla práctica útil para *aproximar* la normalidad (si la población no lo es), las condiciones fundamentales de validez del TCL son la independencia y la existencia de $\\sigma^2$."
  },
  {
    "q": "Al aplicar el método bootstrap, si se encuentra que los intervalos de confianza calculados son extremadamente estrechos, ¿qué podría significar esto sobre el conjunto de datos?",
    "opts": [
      "Que el estadístico es altamente estable y poco sensible a la variabilidad muestral.",
      "Que se debe aplicar un transformador logarítmico o diferente método de resampling.",
      "Que el tamaño muestral original era demasiado pequeño para capturar la verdadera variabilidad poblacional.",
      "Que los datos están sesgados hacia cero."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Intervalos muy estrechos sugieren que el estadístico es robusto y no varía mucho incluso con pequeñas fluctuaciones en la muestra (estabilidad). Sin embargo, si son *demasiado* estrechos, puede ser una señal de que hay problemas de distribución o que se necesita un método alternativo (como transformar los datos) para capturar mejor la variabilidad real."
  },
  {
    "q": "¿Cuál de los siguientes escenarios justifica el uso de un muestreo por conglomerados en lugar de un muestreo aleatorio simple?",
    "opts": [
      "Cuando el costo o la logística de acceder a unidades individuales es muy alto y geográficamente disperso.",
      "Cuando los grupos naturales tienen variaciones internas bajas, pero alta variación entre grupos.",
      "Cuando se conoce la distribución exacta de cada individuo (estratificación).",
      "Siempre que el tamaño poblacional sea menor a 100."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El muestreo por conglomerados es práctico y económico cuando la población está agrupada geográficamente o naturalmente (ej. escuelas dentro de un barrio). Se seleccionan los grupos (conglomerados) y se encuesta a todos sus miembros, lo cual ahorra costos logísticos."
  },
  {
    "q": "¿Cuál es la interpretación correcta del Error Estándar ($\\sigma / \\sqrt{n}$)?",
    "opts": [
      "Mide la dispersión natural de los datos individuales.",
      "Representa la desviación estándar de la distribución muestral del estadístico.",
      "Indica cuán lejos estará $\\bar{X}$ de $\\mu$ en un solo experimento.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Error Estándar NO es lo mismo que la desviación típica ($s$). Mide la variabilidad esperada del *estadístico* ($\\bar{X}$) si se repitiera el proceso de muestreo muchas veces. Si fuera 'cuán lejos estará $\\bar{X}$', sería una interpretación incorrecta."
  },
  {
    "q": "¿Qué representan los métodos de muestreo por conglomerados y estratificados?",
    "opts": [
      "Estrategias para aumentar la representatividad en poblaciones dispersas.",
      "Son alternativas viables cuando el MAS es logísticamente imposible.",
      "Requieren conocer las varianzas de cada subgrupo poblacional.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Estos métodos son aplicaciones prácticas. Son cruciales cuando la población está geográficamente distribuida o tiene grupos naturales (conglomerados/estratos), haciendo que el MAS sea inviable."
  },
  {
    "q": "En el contexto del Teorema Central del Límite (TCL), ¿qué condiciones deben cumplirse para garantizar que la distribución muestral de la media ($\\bar{X}$) se aproxime a una Normal?",
    "opts": [
      "La muestra debe ser extraída sin reemplazo y los datos deben tener varianza finita.",
      "El tamaño de la muestra ($n$) debe ser lo suficientemente grande, típicamente $n \\ge 30$.",
      "La población original debe seguir una distribución normal.",
      "Los valores muestrales deben estar correlacionados entre sí."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El TCL requiere principalmente que los datos sean independientes y tengan varianza finita, y si la población no es Normal, el tamaño de muestra ($n$) lo suficientemente grande (generalmente $n \\ge 30$) es crucial para que la distribución se normalice."
  },
  {
    "q": "¿Cuál es el valor esperado y la propiedad fundamental de la media muestral ($\\bar{X}$) como estimador?",
    "opts": [
      "Tiene un valor esperado $E[\\bar{X}] = \\mu$ (es insesgado).",
      "Su varianza es $\\text{Var}(\\bar{X}) = \\sigma^2 / n$.",
      "Utiliza todos los datos disponibles en la muestra para su cálculo.",
      "Es el mejor estimador lineal sin sesgo (BLUE) bajo ciertas condiciones."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La propiedad insesgase del $\\bar{X}$ significa que $E[\\bar{X}] = \\mu$. Su varianza es de hecho $\\sigma^2/n$, lo cual disminuye al aumentar el tamaño muestral."
  },
  {
    "q": "¿Cuál de los siguientes métodos de muestreo son apropiados para reducir la varianza del estimador?",
    "opts": [
      "El Muestreo Estratificado, si las estratificaciones están bien definidas.",
      "El Muestreo por Conglomerados, siempre que los conglomerados sean homogéneos.",
      "El Muestreo Aleatorio Simple (MAS) es el único método que garantiza baja varianza.",
      "Los métodos de muestreo en general reducen la varianza comparado con estimaciones no aleatorias."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Tanto el muestreo estratificado como el por conglomerados son técnicas diseñadas para mejorar la eficiencia y reducir la varianza del estadístico (si se implementan correctamente). El MAS es un buen punto de partida, pero los otros pueden ser superiores."
  },
  {
    "q": "¿Qué procedimientos estadísticos están asociados con la técnica 'Bootstrap'?",
    "opts": [
      "Remuestreo aleatorio con reemplazo utilizando solo los datos disponibles en el conjunto de entrenamiento.",
      "Se utiliza para estimar la distribución muestral de un estadístico cuando no se conoce la distribución poblacional teórica.",
      "Requiere asumir que la población subyacente es Normal.",
      "Es un método más rápido y siempre 100% preciso para calcular parámetros desconocidos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Bootstrap simula nuevas muestras (con reemplazo) a partir de los datos observados para estimar la distribución de un estadístico. Su gran ventaja es que no asume la forma poblacional y se usa precisamente cuando las distribuciones teóricas son desconocidas."
  },
  {
    "q": "¿Para aplicar el Teorema Central del Límite (TCL) en una situación práctica, debe considerarse lo siguiente:",
    "opts": [
      "El tamaño muestral ($n$) debe ser suficientemente grande para que la distribución se normalice.",
      "Los datos deben provenir de muestras independientes entre sí.",
      "La varianza poblacional ($\\sigma^2$) debe haber sido calculada previamente con certeza.",
      "El procedimiento de recolección de datos no debe estar influenciado por el investigador."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El TCL se basa en la independencia y la gran $n$. Aunque tener $\\sigma^2$ es útil para calcular el error estándar, su conocimiento exacto o previo no es un requisito del teorema. La independencia es clave."
  },
  {
    "q": "¿Cuáles son las características de los estadísticos muestrales que hacen que sean buenos estimadores?",
    "opts": [
      "Ser insesgados (valor esperado igual al parámetro poblacional).",
      "Tener una varianza baja, indicando alta precisión.",
      "Estar correlacionados negativamente con el ruido del sistema.",
      "Mantener la misma forma de distribución que la población."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un buen estimador debe ser insesgado (no sesgarse hacia un valor incorrecto) y tener baja varianza (ser preciso). La correlación no es una propiedad fundamental del estadístico en sí."
  },
  {
    "q": "¿Qué medidas son necesarias para evaluar la dispersión de los datos o el error estándar?",
    "opts": [
      "Varianza ($\\sigma^2$) o Desviación Estándar ($\\sigma$).",
      "Desviación Tipo (STDEV) y Rango Intercuartílico (IQR).",
      "La Media ($\\bar{X}$) y la Moda.",
      "El coeficiente de correlación."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La dispersión se mide con $\\sigma$ o $s$. Si hablamos del error estándar (dispersión del estimador), usamos la desviación estándar asociada a esa distribución."
  },
  {
    "q": "¿Cuál es el propósito principal de calcular múltiples muestras usando métodos avanzados como el Bootstrap?",
    "opts": [
      "Obtener una aproximación robusta y no paramétrica de la distribución muestral.",
      "Confirmar que la población original debe ser Normal para aplicar inferencia estadística.",
      "Reducir el sesgo en los parámetros calculados utilizando solo datos históricos.",
      "Calcular el tamaño muestral mínimo requerido bajo cualquier supuesto."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Bootstrap busca simular la distribución de un estadístico sin asumir que sigue una distribución conocida. Esto es clave para la inferencia no paramétrica."
  },
  {
    "q": "¿Cuáles son propiedades que se cumplen con el uso del método bootstrap?",
    "opts": [
      "Aproxima la distribución muestral sin asumir una forma específica (no paramétrico).",
      "Utiliza remuestreo con reemplazo a partir de los datos observados.",
      "Requiere que la población sea normal para su aplicación correcta.",
      "Es útil solo cuando $n$ es extremadamente grande."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El bootstrap es un método no paramétrico muy robusto. Su fuerza radica en usar el propio conjunto de datos ($D$) como si fuera la población y realizar remuestreos con reemplazo para estimar la distribución del estadístico deseado (por ejemplo, la desviación estándar o intervalos de confianza). No requiere asumir normalidad."
  },
  {
    "q": "¿Cuáles son las principales ventajas del muestreo estratificado sobre el simple aleatorio?",
    "opts": [
      "Asegura que subgrupos clave de interés estén representados proporcionalmente.",
      "Generalmente reduce la varianza del estimador si los estratos están bien definidos.",
      "Es más rápido y fácil de implementar en cualquier población.",
      "Solo se puede aplicar cuando existe un criterio de clasificación claro."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La principal ventaja es la reducción de la varianza (mayor precisión) al controlar que subgrupos conocidos importantes estén representados. Esto requiere dividir la población en estratos homogéneos internamente pero heterogéneos entre sí."
  },
  {
    "q": "¿Cuáles son las condiciones bajo las cuales el Teorema Central del Límite garantiza que $\\bar{X}$ será aproximadamente Normal?",
    "opts": [
      "Las observaciones deben ser independientes y tener varianza finita.",
      "El tamaño de la muestra $n$ debe ser suficientemente grande (típicamente $n \\ge 30$).",
      "La población original siempre debe seguir una distribución normal para garantizar el resultado.",
      "La relación entre las variables debe ser lineal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las dos condiciones clave del TCL son: 1) Independencia y varianza finita. 2) Un tamaño de muestra suficientemente grande ($n \\ge 30$ es la regla empírica más común). La normalidad poblacional es una condición *suficiente*, pero no *necesaria* para que el TCL aplique."
  },
  {
    "q": "¿Cuáles son los conceptos estadísticos que miden la dispersión (variabilidad) de un conjunto de datos?",
    "opts": [
      "Varianza ($\\sigma^2$)",
      "Desviación Estándar ($\\sigma$)",
      "Rango Intercuartílico (IQR)",
      "Mediana"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Varianza y la Desviación Estándar son las medidas de dispersión más comunes. El IQR es una medida robusta de variabilidad basada en cuantiles. La Media y la Mediana miden tendencia central."
  },
  {
    "q": "¿Cuál es el comportamiento esperado del estadístico $\\bar{X}$ a medida que aumenta el tamaño de la muestra $n$?",
    "opts": [
      "Su varianza se mantiene constante.",
      "Tiende a converger hacia la media poblacional ($\\mu$) en probabilidad (Ley de Grandes Números).",
      "Se vuelve más sensible a los valores atípicos (outliers).",
      "Debe recalcularse manualmente para cada aumento de $n$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Según la Ley de los Grandes Números, $\\bar{X}$ converge a $\\mu$. Además, el error estándar ($\\text{SE}_{\\bar{X}} = \\sigma/\\sqrt{n}$) disminuye al aumentar $n$, lo que significa que la varianza del estimador se reduce (las opciones 0 y 2 son correctas)."
  },
  {
    "q": "¿Qué implica conceptualmente decir que '$\\bar{X}$ es insesgado para $\\mu$'?",
    "opts": [
      "Que el valor esperado de $\\bar{X}$ es exactamente igual a la media poblacional ($\\mu$).",
      "Que, a largo plazo, $\\bar{X}$ se acercará al valor verdadero de $\\mu$.",
      "Que la varianza muestral $s^2$ siempre será igual a $\\sigma^2$.",
      "Que el estadístico solo puede calcularse si $n \\to \\infty$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Ser insesgado significa que el sesgo esperado es cero: $E[\\bar{X}] = \\mu$. El tercer punto reformula este concepto utilizando la Ley de Grandes Números. La opción sobre la varianza ($s^2=\\sigma^2$) es incorrecta, ya que son estimaciones y nunca serán iguales en práctica."
  },
  {
    "q": "¿Cuáles son las consideraciones metodológicas al aplicar el método bootstrap para obtener intervalos de confianza?",
    "opts": [
      "Se debe remuestrear con reemplazo a partir del conjunto de datos original.",
      "El número de simulaciones ($B$) debe ser suficientemente grande (ej. $B \\ge 10,000$).",
      "Es un procedimiento que requiere la suposición de normalidad en los datos originales.",
      "Siempre proporciona una estimación más precisa que el cálculo analítico."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El proceso clave es usar remuestreos con reemplazo ($B$ veces). Para que sea robusto, $B$ debe ser grande. Es un método no paramétrico y *no* requiere asumir normalidad (por lo tanto, la opción 2 es incorrecta)."
  },
  {
    "q": "¿Qué se puede concluir sobre el error estándar ($\\text{SE}_{\\bar{X}}$) al comparar dos muestras de tamaños diferentes ($n_1$ vs $n_2$), asumiendo $\\sigma$ constante?",
    "opts": [
      "Si $n_1 < n_2$, entonces $\\text{SE}_1 > \\text{SE}_2$.",
      "El error estándar es inversamente proporcional a la raíz cuadrada del tamaño de la muestra ($1/\\sqrt{n}$).",
      "La disminución del error estándar siempre garantiza que el estadístico original era Normal.",
      "Un menor error estándar implica un mayor sesgo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Dado que $\\text{SE}_{\\bar{X}} = \\sigma / \\sqrt{n}$, si $n_1 < n_2$, entonces $\\sqrt{n_1} < \\sqrt{n_2}$. Al dividir por un número menor ($\\sqrt{n_1}$), el resultado es más grande. Así, la relación de proporcionalidad inversa con $1/\\sqrt{n}$ (Opción 1) y la comparación directa de tamaños de muestra (Opción 0) son correctas."
  },
  {
    "q": "¿Cuáles son las características clave del cálculo del Error Estándar ($\\sigma_{\\bar{X}}$)?",
    "opts": [
      "Representa la dispersión esperada de $\\bar{X}$ alrededor de $\\mu$.",
      "Depende inversamente del tamaño de muestra $n$.",
      "Es siempre igual a la desviación estándar muestral $S$ si $n=1$.",
      "Mide la variabilidad real de los datos, no el estimador."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El error estándar ($\\sigma_{\\bar{X}}$) es la desviación estándar de la distribución muestral. Muestra cómo se dispersa el estadístico $\\bar{X}$. Aumentar $n$ reduce esta dispersión (depende inversamente), haciendo que los estimadores sean más precisos."
  },
  {
    "q": "¿Qué métodos de muestreo son apropiados cuando la población está naturalmente dividida en grupos homogéneos?",
    "opts": [
      "Muestreo estratificado",
      "Muestreo aleatorio simple (MAS)",
      "Muestreo por conglomerados",
      "Muestreo sistemático"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El muestreo estratificado implica dividir la población en subgrupos (estratos) conocidos y luego tomar muestras independientes de cada uno. El MAS es el más básico, pero cuando se conocen características relevantes para dividir a la población, la estratificación mejora la precisión."
  },
  {
    "q": "¿Cuáles son las implicaciones de usar un muestreo por conglomerados (Cluster Sampling)?",
    "opts": [
      "Reduce el costo operativo en poblaciones geográficamente dispersas.",
      "Es más eficiente estadísticamente que MAS si la varianza entre grupos es alta.",
      "Asume que los grupos (conglomerados) son homogéneos internamente.",
      "Requiere un marco muestral muy detallado de cada elemento individual."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El conglomerado se usa por conveniencia geográfica/logística (disminuye costos). Estadísticamente, solo es eficiente si los grupos son lo suficientemente heterogéneos entre sí. La afirmación sobre la homogeneidad interna no es una suposición necesaria y suele ser falsa en la práctica."
  },
  {
    "q": "¿Qué medidas describen apropiadamente el concepto de 'errores' en inferencia estadística?",
    "opts": [
      "La diferencia entre $\\bar{X}$ y $\\mu$.",
      "El intervalo de confianza (IC).",
      "La desviación estándar poblacional ($\\sigma$).",
      "El error tipo II."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los errores estadísticos se conceptualizan como la discrepancia. El IC nos proporciona un rango probable para $\\mu$ y su amplitud cuantifica el error esperado al muestrear."
  },
  {
    "q": "¿Qué implica el concepto de 'insesgado' en un estimador?",
    "opts": [
      "Que $E[\\hat{\\theta}] = \\theta$ (el valor esperado es igual al parámetro poblacional).",
      "Que el estimador converge a $\\theta$ en probabilidad.",
      "Que la varianza del estadístico es mínima.",
      "Que el error estándar es cero, lo que nunca ocurre."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Ser insesgado significa que el valor promedio de los estadísticos muestrales ($\\bar{X}$, $S^2_{n-1}$) es igual al verdadero parámetro poblacional ($E[\\hat{\\theta}] = \\theta$). La convergencia en probabilidad (LLN) asegura que, a medida que $n$ crece, $\\bar{X}$ se acerque a $\\mu$, lo cual refuerza su fiabilidad."
  },
  {
    "q": "¿Qué elementos son fundamentales para la correcta interpretación de un Intervalo de Confianza (IC)?",
    "opts": [
      "Indica el rango donde probablemente se encuentre el parámetro poblacional ($\\mu$).",
      "Su nivel de confianza debe ser reportado siempre (ej: 95%).",
      "Solo puede calcularse si los datos siguen una distribución Normal.",
      "Se interpreta como la probabilidad de que el parámetro esté dentro del intervalo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El IC nos da un rango para $\\mu$. Su nivel de confianza (95%, 99%) es crucial e indica la fiabilidad del método. ¡OJO! No se debe interpretar como la probabilidad de que el parámetro esté en ese rango; el parámetro es fijo."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para aplicar con confianza el Teorema Central del Límite (TCL)?",
    "opts": [
      "El tamaño de la muestra $n$ debe ser pequeño ($n < 30$).",
      "Los datos deben seguir una distribución Normal en la población.",
      "Se requiere que la población tenga varianza finita y los muestreos sean independientes.",
      "La desviación estándar conocida es $\\sigma$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El TCL garantiza que la distribución de $\\bar{X}$ se aproxima a Normal cuando $n$ es grande. Sus condiciones fundamentales son: independencia entre observaciones (o unidades muestrales) y varianza poblacional finita ($\\sigma^2 < \\infty$). El tamaño de muestra debe ser suficientemente grande, no pequeño."
  },
  {
    "q": "¿Cuáles son las interpretaciones correctas sobre el Error Estándar y la varianza?",
    "opts": [
      "El Error Estándar siempre es menor que la desviación estándar poblacional $\\sigma$.",
      "Es una medida de dispersión del estimador, no de los datos originales.",
      "Aumenta con el tamaño muestral $n$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El error estándar ($\\sigma_{\\bar{X}} = \\sigma / \\sqrt{n}$) siempre será menor que $\\sigma$. Es la dispersión del *estimador* (el promedio de los promedios), no la dispersión de los datos en sí. ¡Atención! Disminuye al aumentar $n$."
  },
  {
    "q": "¿Si se utiliza el muestreo por conglomerados, cuáles son las consideraciones críticas que deben tenerse en cuenta?",
    "opts": [
      "Existe un riesgo alto de falta de independencia entre observaciones dentro del mismo grupo (Intracluster Correlation).",
      "El Error Estándar calculado debe ajustarse por el Factor de Diseño (Design Effect).",
      "Se requiere que los conglomerados sean lo más homogéneos posible.",
      "Es siempre superior al MAS en cualquier caso."
    ],
    "c": [
      0,
      1
    ],
    "exp": "En muestreo por conglomerados, las observaciones dentro del mismo grupo suelen estar correlacionadas (no independientes), lo que infla la varianza y reduce la eficiencia. Esto debe corregirse usando un Factor de Diseño o ajustes apropiados para el cálculo del Error Estándar."
  },
  {
    "q": "¿Cuáles propiedades se mantienen en la distribución muestral de $\\bar{X}$ bajo condiciones ideales?",
    "opts": [
      "La media es igual a $\\mu$.",
      "Su varianza es $\\sigma^2/n$.",
      "La desviación estándar es $\\sigma/\\sqrt{n}$.",
      "Es exactamente Normal, incluso para $n=1$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Teorema de la Variancia establece que $E(\\bar{X}) = \\mu$, y el Error Estándar (varianza del promedio) es $\\sigma^2/n$. La Normalidad solo se garantiza por TCL para $n$ grande."
  },
  {
    "q": "¿Qué situaciones justifican el uso de la distribución $t$ en lugar de la distribución Z?",
    "opts": [
      "Cuando el tamaño muestral $n$ es pequeño ($n < 30$).",
      "Cuando la varianza poblacional $\\sigma^2$ debe ser estimada mediante la muestra ($s^2$).",
      "Siempre que se sospeche que los datos no son Normales.",
      "Cuando el proceso de muestreo ha fallado."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La distribución $t$ es utilizada cuando $n$ es pequeño Y $\\sigma$ es desconocido (y debemos usar $s$). Si $n$ es grande, la $t$-Student converge a la Normal Z. No se usa solo por sospecha de no-Normalidad; el requisito clave es la estimación de $\\sigma$."
  },
  {
    "q": "¿Cuáles son las propiedades clave del estadístico media muestral ($\\bar{X}$) en relación con el parámetro poblacional ($\\mu$)?",
    "opts": [
      "Es un estimador insesgado de $\\mu$.",
      "Sigue la distribución $N(\\mu, \\sigma^2/n)$ si los datos son normales.",
      "Su varianza es igual a $\\sigma^2 / n$.",
      "Está sesgado para $\\mu$ cuando $n < 30$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La media muestral ($\\bar{X}$) es conocida por ser un estimador insesgado de la media poblacional ($\\mu$), lo que significa que su valor esperado es igual a $\\mu$. Además, si se asume normalidad poblacional, sigue una distribución Normal con media $\\mu$ y varianza $\\sigma^2/n$."
  },
  {
    "q": "¿Bajo qué condiciones podemos aplicar o interpretar correctamente el Teorema Central del Límite (TCL)?",
    "opts": [
      "Los datos deben tener observaciones independientes.",
      "El tamaño muestral debe ser grande, independientemente de la forma poblacional.",
      "La varianza poblacional ($\\sigma^2$) debe existir y ser finita.",
      "Solo aplica si la población sigue una distribución normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El poder del TCL radica en que solo requiere dos condiciones: 1) Independencia de las observaciones. 2) Varianza poblacional finita ($\\sigma^2 < \\infty$). El tamaño muestral grande es la condición práctica para asegurar la aproximación normal, pero no la aplicación teórica."
  },
  {
    "q": "¿Qué mide correctamente el Error Estándar (SE)?",
    "opts": [
      "La dispersión de los datos individuales dentro de una muestra.",
      "La desviación típica poblacional ($\\sigma$).",
      "La variabilidad esperada del estimador ($\\bar{X}$) en múltiples muestras.",
      "El rango total de la variable en la población."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Error Estándar (SE) no mide la dispersión de los datos individuales; eso es tarea de $\\sigma$ o $s$. El SE ($\\sigma / \\sqrt{n}$) mide qué tan variables esperamos que sean los estimadores $\\bar{X}$ si repitiéramos el proceso de muestreo muchas veces. Por lo tanto, representa la variabilidad del estimador."
  },
  {
    "q": "¿Cuáles son las ventajas o condiciones óptimas del Muestreo Estratificado?",
    "opts": [
      "Permite asegurar que grupos subpoblacionales importantes sean representados proporcionalmente.",
      "Es más eficiente en términos de costo que el muestreo aleatorio simple si hay estratos naturales.",
      "Requiere conocimiento previo sobre la estructura poblacional (varianza por estrato).",
      "Elimina completamente el riesgo de sesgo del estudio."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El muestreo estratificado es ideal cuando se conoce información previa que permite dividir la población en grupos homogéneos (estratos). Esto asegura la representación proporcional y generalmente reduce el error estándar si las varianzas dentro de los estratos son menores que la variación total."
  },
  {
    "q": "¿Qué aspectos describen correctamente la Ley de los Grandes Números (LGN)?",
    "opts": [
      "El promedio muestral ($\\bar{X}$) converge al valor esperado teórico ($\\mu$) a medida que $n$ aumenta.",
      "La convergencia ocurre en términos de probabilidad, no con certeza determinística para un número finito de muestras.",
      "Solo es aplicable si la distribución poblacional es Normal.",
      "Indica cómo se calcula el error estándar."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La LGN establece que, cuanto más grande es $n$, la media muestral $\\bar{X}$ estará cada vez más cerca de la media poblacional $\\mu$. Esta convergencia es una propiedad probabilística (Ley de los Grandes Números) y no requiere normalidad ni un cálculo específico del error estándar."
  },
  {
    "q": "¿Cuáles son afirmaciones verdaderas sobre la distribución muestral de $\\bar{X}$?",
    "opts": [
      "La media de $\\bar{X}$ es igual a la media poblacional ($\\mu$).",
      "Su varianza es $\\sigma^2/n$.",
      "Siempre sigue una distribución normal, independientemente del tamaño $n$.",
      "Requiere que el estadístico sea un promedio para su aplicación."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La media de la distribución muestral es siempre igual a $\\mu$, y su varianza se reduce por un factor de $1/n$, resultando en $\\sigma_{\\bar{X}}^2 = \\sigma^2/n$. No sigue normalidad necesariamente (solo tiende a ello), y debe ser un promedio."
  },
  {
    "q": "¿Cuáles son los principales propósitos del método Bootstrap?",
    "opts": [
      "Estimar la distribución de estadísticos cuando se desconocen las condiciones teóricas.",
      "Aproximar la desviación estándar o intervalos de confianza sin asumir una distribución paramétrica.",
      "Sustituir el uso de muestras aleatorias si no son posibles.",
      "Calcular directamente los parámetros poblacionales a partir de datos limitados."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Bootstrap es una técnica de remuestreo con reemplazo que permite estimar la distribución muestral o las propiedades de un estadístico (como la varianza o intervalos) utilizando solo los datos observados. Es útil precisamente cuando no se conocen las condiciones teóricas exactas."
  },
  {
    "q": "¿Cuáles son criterios para determinar cuándo el TCL es aplicable?",
    "opts": [
      "El tamaño de muestra $n$ debe ser suficientemente grande.",
      "Se deben asegurar la independencia entre observaciones y una varianza finita.",
      "La población debe estar perfectamente normal.",
      "Los datos deben provenir de un proceso de muestreo estratificado."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Tanto el tamaño grande ($n$) como la independencia/varianza finita son las condiciones fundamentales del TCL. No se requiere que la población sea necesariamente normal."
  },
  {
    "q": "¿Cuáles estadísticos poblacionales son considerados insesgados (unbiased) por sus estimadores muestrales?",
    "opts": [
      "La media ($\\mu$) estimada por $\\bar{X}$.",
      "La varianza poblacional ($\\sigma^2$) estimada por $s^2$ usando $n-1$.",
      "El coeficiente de correlación ($r$).",
      "La moda (Mode) utilizando la frecuencia máxima."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Tanto $\\bar{X}$ es un estimador insesgado para $\\mu$, y el uso de $n-1$ en la varianza muestral ($s^2$) asegura que sea un estimador insesgado para $\\sigma^2$. La moda no tiene propiedades de insesgadez tan robustas."
  },
  {
    "q": "¿Cuáles son ventajas de utilizar el muestreo estratificado sobre el muestreo aleatorio simple (SRS)?",
    "opts": [
      "Asegura que los subgrupos importantes estén representados proporcionalmente.",
      "Reduce la varianza del estimador, mejorando la precisión.",
      "Es más rápido y requiere menos esfuerzo logístico.",
      "Requiere conocer las proporciones de todos los estratos antes de muestrear."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El muestreo estratificado divide la población en grupos homogéneos (estratos). Esto garantiza que subgrupos clave estén representados y, si el estratificación es efectiva, reduce significativamente la varianza del estimador."
  },
  {
    "q": "¿Qué características definen un proceso de muestreo por conglomerados?",
    "opts": [
      "Dividir la población en grupos geográficos o naturales.",
      "Seleccionar aleatoriamente los grupos (conglomerados) y medir a todos sus miembros.",
      "Es el método más económico para grandes áreas dispersas.",
      "Requiere que cada conglomerado sea completamente homogéneo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "En este método, la población se divide en conglomerados. Luego, se seleccionan aleatoriamente los conglomerados y se mide *a todos* sus miembros (todo el grupo). Es eficiente geográficamente."
  },
  {
    "q": "¿Cuáles son los elementos requeridos para la correcta aplicación de la inferencia estadística?",
    "opts": [
      "Estadístico que sea insesgado.",
      "Muestras independientes entre sí.",
      "La distribución subyacente debe ser normal (opcionalmente).",
      "El tamaño de muestra $n$ debe ser grande, siguiendo el TCL."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para la validez inferencial, $\\bar{X}$ debe ser un estimador insesgado y las observaciones deben ser independientes. Si no se puede asumir normalidad, necesitamos $n$ lo suficientemente grande (por CLT). La normalidad de la población es deseable pero el TCL mitiga este requisito."
  },
  {
    "q": "¿Cuál es la función principal del coeficiente $1/\\sqrt{n}$ en el error estándar?",
    "opts": [
      "Indica que aumentar el tamaño de muestra reduce la incertidumbre.",
      "Asegura que la varianza disminuya a medida que $n$ crece.",
      "Es un factor de corrección para datos sesgados.",
      "Permite extrapolar estimaciones a poblaciones muy grandes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La dependencia con $1/\\sqrt{n}$ significa que el error estándar (y por ende la precisión del intervalo) mejora al aumentar $n$. Esta relación de raíz cuadrada es fundamental para la estadística inferencial."
  },
  {
    "q": "¿Cuáles son las principales características de la distribución muestral de $\\bar{X}$?",
    "opts": [
      "Su media es igual a la media poblacional ($\\mu$).",
      "Su varianza es igual a $\\sigma^2 / n$.",
      "Su forma tiende a ser Normal, independientemente de la población.",
      "Requiere que los datos sean discretos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Por definición, el promedio muestral ($\\bar{X}$) es un estimador insesgado (su media muestral es $\\mu$), y su varianza es $\\sigma^2/n$. Además, gracias al TCL, tiende a ser Normal si $n$ es grande."
  },
  {
    "q": "¿Qué afirmaciones son correctas sobre el proceso de Inferencia Estadística?",
    "opts": [
      "Permite hacer juicios sobre la población usando muestras.",
      "Asume que los datos se extrajeron aleatoriamente.",
      "Requiere conocer previamente la distribución exacta de la población.",
      "El valor muestral siempre es idéntico al parámetro poblacional."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La inferencia estadística es el proceso de estimar parámetros poblacionales a partir de muestras. Esto solo es posible si se asume un muestreo aleatorio y no requiere conocer la distribución exacta (a menos que sea un caso muy específico)."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para aplicar correctamente el Teorema Central del Límite (TCL)?",
    "opts": [
      "Los datos deben ser medidos en una escala de intervalo o razón.",
      "Las observaciones muestrales deben ser independientes entre sí.",
      "El tamaño de la muestra $n$ debe ser suficientemente grande.",
      "La población tiene que tener un número finito de valores."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para aplicar el TCL (o cualquier teoría límite), necesitamos independencia y varianza finita. El requisito de $n$ grande es una condición práctica, no estrictamente matemática, pero esencial para la convergencia."
  },
  {
    "q": "¿Qué propiedades son ciertas respecto a los estimadores poblacionales?",
    "opts": [
      "Son insesgados: el valor esperado del estadístico muestral es igual al parámetro poblacional ($\\mathbb{E}[\\hat{\\theta}] = \\theta$).",
      "La consistencia significa que, a medida que $n \\to \\infty$, $\\hat{\\theta} \\to \\theta$ en probabilidad.",
      "Minimizan la varianza y el sesgo simultáneamente.",
      "Solo son estimadores si la población es Normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los estadísticos muestrales ideales deben ser insesgados (no sistemáticamente altos ni bajos) y consistentes (convergen al verdadero valor a medida que aumenta $n$). La minimización de varianza y sesgo suele buscarse mediante estimadores más complejos."
  },
  {
    "q": "¿Cuáles son las fuentes principales de variación en los datos muestrales?",
    "opts": [
      "La aleatoriedad del proceso de selección de la muestra.",
      "Las diferencias naturales entre individuos o unidades estudiadas (variabilidad intrínseca).",
      "El error humano durante la recolección de datos.",
      "Sesgos sistemáticos introducidos por el diseño del estudio."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La variación total se debe a dos componentes: la aleatoriedad muestral (si el muestreo es correcto) y la variabilidad inherente en la población. El error humano o sesgo no son fuentes de *variación* estadística pura, sino fuentes de error."
  },
  {
    "q": "¿Cuál es la diferencia clave entre aplicar el Teorema Central del Límite (TCL) y la Ley de los Grandes Números (LLN)?",
    "opts": [
      "El TCL se refiere a la distribución de $\\bar{X}$, mientras que la LLN describe el comportamiento límite de $\\bar{X}$ en sí mismo.",
      "El TLC asegura la normalidad de la muestra cuando $n$ es grande, independientemente de la distribución original.",
      "La LLN aplica solo a variables discretas, mientras que TCL es universal.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Diferencia conceptual: La Ley de los Grandes Números (LLN) establece que $\\bar{X}$ converge a $\\mu$ en probabilidad a medida que $n \\to \\infty$. El TCL no garantiza esto, sino que describe la *forma* que adoptará la distribución muestral de $\\bar{X}$ (la normalidad), asumiendo solo varianza finita e independencia."
  },
  {
    "q": "¿Cuáles son las limitaciones o condiciones necesarias al usar el Teorema Central del Límite?",
    "opts": [
      "Los datos deben provenir de una muestra aleatoria.",
      "Se debe garantizar que la población tenga una varianza finita ($\\sigma^2 < \\infty$).",
      "La distribución poblacional debe ser paramétrica y Normal.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El TCL es robusto, pero requiere dos condiciones cruciales: 1) Muestreo aleatorio e independiente de los datos. 2) Que la varianza ($\\sigma^2$) sea finita. No requiere que la población sea Normal."
  },
  {
    "q": "¿Qué representa el 'Error estándar' en el contexto estadístico?",
    "opts": [
      "La dispersión esperada del estimador $\\bar{X}$ si se repitiera el proceso de muestreo infinitas veces.",
      "Una medida de cuán lejos está un punto de datos individual de la media poblacional ($\\mu$).",
      "El ajuste necesario para corregir sesgos en los parámetros.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Error Estándar no es una desviación estándar de los datos; es la desviación estándar *de la distribución muestral* del estadístico. Indica la precisión esperada con la que el estimador $\\bar{X}$ se acercará al parámetro poblacional $\\mu$."
  },
  {
    "q": "¿Cuáles son las técnicas adecuadas para estimar la distribución de un estadístico cuando no se conocen los parámetros poblacionales o si la suposición de normalidad es cuestionable?",
    "opts": [
      "Método de bootstrap (remuestreo con reemplazo).",
      "Aplicación del Teorema Central del Límite.",
      "Asunción de muestreos que provienen de distribuciones paramétricas conocidas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El bootstrap es una técnica no paramétrica poderosa para estimar la distribución y la variabilidad (como el error estándar). El TCL se puede usar como un buen chequeo si $n$ es grande, incluso sin conocer los parámetros exactos de la población."
  },
  {
    "q": "¿Cuáles son las principales desventajas o consideraciones al utilizar métodos complejos de muestreo?",
    "opts": [
      "Requieren conocimiento previo sobre la estructura poblacional.",
      "Son más costosos y requieren mayor planificación logística.",
      "Pueden introducir sesgos si el diseño no es implementado correctamente.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Métodos avanzados como estratificación o conglomerados son poderosos, pero requieren información previa (tamaño de la población, división en grupos) y su implementación aumenta la complejidad y el costo operativo."
  },
  {
    "q": "¿Qué condiciones deben cumplirse para que se pueda aplicar correctamente el muestreo por conglomerados?",
    "opts": [
      "Se debe asegurar que los conglomerados estén geográficamente agrupados o fáciles de acceder.",
      "La selección de conglomerados debe hacerse aleatoriamente para evitar sesgos.",
      "Los elementos dentro del mismo grupo (conglomerado) deben ser lo más homogéneos posible.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "A diferencia del muestreo estratificado (donde el estrato es homogéneo), en el conglomerado se asume que los grupos son accesibles. Por lo tanto, la clave es la agrupabilidad geográfica/logística y la selección aleatoria de estos grupos."
  },
  {
    "q": "¿Qué características deben cumplirse para aplicar correctamente el TCL?",
    "opts": [
      "La población debe tener varianza finita.",
      "Los datos de la muestra deben ser independientes entre sí.",
      "El tamaño muestral ($n$) debe ser lo suficientemente grande.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El TCL requiere principalmente que los datos sean independientes y que exista una varianza poblacional finita. El requisito de $n$ grande es la condición práctica utilizada para aplicar su aproximación Normal."
  },
  {
    "q": "¿Qué métodos pueden utilizarse cuando se requiere estimar parámetros en poblaciones grandes o complejas?",
    "opts": [
      "Muestreo aleatorio simple (MAS).",
      "Muestreo estratificado por grupos conocidos.",
      "Método Bootstrap mediante remuestreo con reemplazo.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuando el MAS es complicado, se pueden usar métodos más sofisticados. El muestreo estratificado usa conocimiento previo de la población (ej: edad) para mejorar la precisión, y el Bootstrap permite estimar distribuciones sin asumir una distribución teórica."
  },
  {
    "q": "¿Qué son las ventajas conceptuales del Muestreo Estratificado?",
    "opts": [
      "Asegura que se cubran subgrupos importantes de interés.",
      "Reduce significativamente la varianza total del estimador.",
      "Permite asignar diferentes pesos a los grupos según su importancia.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El muestreo estratificado divide la población en subgrupos (estratos) y luego muestrea dentro de ellos. Esto garantiza que se capten variaciones específicas y generalmente resulta en una estimación más precisa que el MAS."
  },
  {
    "q": "¿Qué aspectos debe considerar un estadístico al aplicar el Bootstrap?",
    "opts": [
      "La necesidad de datos reales para generar muestras simuladas.",
      "El muestreo se realiza con reemplazo sobre la muestra observada.",
      "Permite estimar distribuciones sin depender de supuestos teóricos de distribución.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El Bootstrap es una técnica poderosa que trata los datos observados como si fueran la población completa. Remuestrea *con reemplazo* y su principal ventaja es que no asume ninguna distribución particular (como Normal)."
  },
  {
    "q": "¿Cómo afecta el tamaño de la muestra ($n$) a la precisión del estimador $\\bar{X}$?",
    "opts": [
      "Aumentar $n$ disminuye el Error Estándar, aumentando la precisión.",
      "Disminuir $n$ aumenta la variabilidad y reduce la confianza en el estimado.",
      "El tamaño de la muestra no tiene impacto estadístico detectable.",
      "Solo es relevante cuando se usa muestreo estratificado."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Estadísticamente, cuanto mayor sea $n$, menor será $\\text{SE}_{\\bar{X}} = \\sigma/\\sqrt{n}$, lo que implica mayor precisión. Por lo tanto, el aumento de $n$ (opción 0) aumenta la precisión. Por el contrario, disminuir $n$ (opción 1) hace que $\\text{SE}_{\\bar{X}}$ sea más grande, aumentando la variabilidad e incertidumbre. La opción 2 es incorrecta porque sí tiene un impacto estadístico crucial."
  },
  {
    "q": "¿Cuáles son las implicaciones prácticas del cumplimiento de los requisitos de independencia en el muestreo?",
    "opts": [
      "Se asegura que la varianza poblacional ($\\sigma^2$) pueda ser estimada con fiabilidad.",
      "Permite aplicar teoremas como el TCL, ya que cada observación no afecta a las demás.",
      "Es necesario asumir independencia para usar el método bootstrap.",
      "El error estándar puede calcularse utilizando solo el tamaño $n$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La independencia es la base de casi toda estadística inferencial. Permite calcular varianzas (Opción 1), es un requisito fundamental del TCL (Opción 2) y también es una suposición clave al realizar remuestreos en el bootstrap (aunque esto último se relaciona más con la idea de que las observaciones son independientes entre sí)."
  },
  {
    "q": "¿Qué afirmaciones son correctas respecto a las condiciones necesarias para aplicar la inferencia estadística?",
    "opts": [
      "Los estadísticos deben ser insesgados.",
      "Se debe asumir la independencia de las observaciones.",
      "La varianza poblacional $\\sigma^2$ debe ser finita.",
      "El tamaño muestral $n$ debe ser pequeño (t<30)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para realizar inferencia confiable, se requiere que el estimador sea insesgado (propiedad de $\\bar{X}$), que las observaciones sean independientes entre sí, y crucialmente, que la varianza poblacional exista y sea finita."
  },
  {
    "q": "¿Cuáles son los efectos del aumentar el tamaño de muestra ($n$) en la distribución muestral?",
    "opts": [
      "La forma se vuelve más normal (por TCL).",
      "El error estándar ($\\sigma_{\\bar{X}}$) disminuye.",
      "Aumenta la precisión de la estimación.",
      "El sesgo del estimador aumenta."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Al aumentar $n$, por el TLC, la distribución se vuelve más normal. Además, $\\sigma_{\\bar{X}} = \\sigma / \\sqrt{n}$ disminuye, lo que significa mayor precisión y menor error estándar."
  },
  {
    "q": "¿Qué condiciones deben cumplirse para que la Ley de los Grandes Números (LLN) sea aplicable?",
    "opts": [
      "Se requiere una varianza finita en la población.",
      "El proceso debe ser independiente o suficientemente débilmente dependiente.",
      "La variable aleatoria $X$ debe tener esperanza $\\mu$ definida.",
      "Los datos deben seguir una distribución Normal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para que el LLN funcione ($\\bar{X} \\to \\mu$), es indispensable que la varianza exista (varianza finita), que los procesos sean independientes o casi independientes, y fundamentalmente que la media poblacional $\\mu$ esté definida."
  },
  {
    "q": "¿Cuáles son las ventajas conceptuales de utilizar el método bootstrap?",
    "opts": [
      "No requiere suposiciones paramétricas fuertes sobre la población.",
      "Es útil para estimar distribuciones de cuantiles complejos (ej: percentiles).",
      "Permite obtener intervalos de confianza sin fórmulas analíticas conocidas.",
      "Siempre es más preciso que un muestreo aleatorio simple."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El bootstrap es robusto porque no asume una forma particular para la población. Su gran utilidad es estimar distribuciones complejas o cuantiles (percentiles) y generar ICs sin depender de las suposiciones normales teóricas."
  },
  {
    "q": "¿Cuáles son las principales diferencias entre muestreo estratificado y MAS?",
    "opts": [
      "El estratificado requiere conocer subgrupos relevantes.",
      "En el MAS, todos los elementos tienen la misma probabilidad de selección.",
      "El estratificado generalmente resulta en menores errores estándar si la variable es correlacionada con el estrato.",
      "Ambos métodos siempre garantizan una representación proporcional."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La diferencia clave es que el estratificado divide por características conocidas (mejor precisión). El MAS garantiza equidad de selección. El beneficio estadístico del estratificado viene precisamente de la correlación entre la variable de interés y las capas definidas."
  },
  {
    "q": "Sea $X_1, \\dots, X_n$ una muestra aleatoria simple de una población con media $\\mu$ y varianza $\\sigma^2 < \\infty$. ¿Cuáles de las siguientes afirmaciones son correctas?",
    "opts": [
      "$E[\\bar X] = \\mu$ para todo $n$.",
      "$\\mathrm{Var}(\\bar X) = \\sigma^2/n$.",
      "Por el TCL, $\\bar X \\xrightarrow{d} N(\\mu, \\sigma^2/n)$ cuando $n \\to \\infty$, sin requerir Normalidad poblacional.",
      "$\\bar X$ tiene exactamente distribución Normal cualquiera sea la distribución original de $X_i$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$\\bar X$ es insesgado ($E[\\bar X]=\\mu$), su varianza es $\\sigma^2/n$, y por el TCL su distribución límite es Normal al crecer $n$. La Normalidad exacta sólo se da si la población lo es."
  },
  {
    "q": "¿Qué conceptos están relacionados directamente con la estimación del parámetro $\\mu$ mediante $\\bar{X}$?",
    "opts": [
      "El valor esperado $E(\\bar{X})$",
      "La varianza muestral $s^2$ usando $n-1$",
      "Las propiedades de insesgamiento y consistencia.",
      "La distribución de los datos originales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuando usamos $\\bar{X}$ para estimar $\\mu$, sabemos que su valor esperado es $\\mu$ (insesgado). Además, el estadístico $s^2$ usando $n-1$ es insesgado para $\\sigma^2$. Los conceptos de insesgamiento y consistencia son propiedades estadísticas clave del estimador."
  },
  {
    "q": "¿Cuáles métodos o principios se utilizan para obtener una distribución muestral cuando no se conoce la estructura poblacional o el modelo teórico?",
    "opts": [
      "El método bootstrap",
      "La Ley de los Grandes Números (LLN)",
      "El Muestreo Aleatorio Simple (MAS)",
      "Calcular la mediana de todas las muestras posibles."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuando no podemos simular un proceso exhaustivo o necesitamos estimar distribuciones sin suposiciones fuertes, usamos el bootstrap (remuestreo con reemplazo) y confiamos en la LLN para justificar la convergencia. MAS es una técnica de muestreo que garantiza ciertas condiciones de independencia, pero los otros tres son *métodos* estadísticos o teoremas aplicados a la distribución."
  },
  {
    "q": "¿Cuáles limitaciones o características describen el uso del Muestreo Estratificado y por Conglomerados?",
    "opts": [
      "Pueden reducir el Error Estándar si se definen estratos homogéneos.",
      "Requieren conocimiento previo de grupos naturales en la población.",
      "Son más eficientes que el MAS cuando los heterogeneidades son conocidas.",
      "Siempre garantizan una distribución Normal para $\\bar{X}$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La principal ventaja del muestreo estratificado es su capacidad de reducir la varianza (y por ende el Error Estándar) si se logra dividir la población en grupos homogéneos. Esto requiere que conozcamos previamente esas estructuras poblacionales. No garantizan Normalidad, solo mejores estimadores."
  },
  {
    "q": "¿Cuáles son las implicaciones del Teorema Central del Límite (TCL)?",
    "opts": [
      "Permite aproximar distribuciones con $n$ grande sin importar la forma original de la población.",
      "Indica que $\\bar{X}$ converge en probabilidad a $\\mu$ cuando $n \\to \\infty$.",
      "Justifica el uso del estadístico $Z = (\\bar{X} - \\mu) / (s/\\sqrt{n})$ para pruebas hipóteticas.",
      "Implica necesariamente que la población debe ser Normal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El TCL es poderoso porque permite normalizar $\\bar{X}$ incluso si la distribución poblacional es desconocida o no Normal (si $n$ es grande). El segundo punto describe el resultado de convergencia que implica. El tercero es una aplicación práctica directa del teorema para estandarizar la prueba."
  },
  {
    "q": "¿Qué principios son fundamentales al analizar la estabilidad de un estimador muestral?",
    "opts": [
      "Insesgamiento (Bias) y consistencia.",
      "La Ley de los Grandes Números (LLN).",
      "El cálculo del Error Estándar.",
      "Asumir que las variables se distribuyen exponencialmente."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La estabilidad de un estimador examina si el valor estimado tiende al verdadero parámetro. Esto se mide por el insesgamiento (valor esperado) y la consistencia (si el error disminuye cuando $n$ aumenta). LLN describe cómo $\\bar{X}$ converge a $\\mu$. El Error Estándar cuantifica la variabilidad, pero no define su estabilidad fundamental."
  },
  {
    "q": "¿Para calcular un intervalo de confianza en términos de varianza muestral ($s^2$), cuáles son los pasos estadísticos correctos?",
    "opts": [
      "Usar $t$-Student si $\\sigma$ es desconocido y $n-1 < 30$.",
      "Asegurarse de que la muestra sea aleatoria y representativa.",
      "Calcular primero el Error Estándar estimado: $s/\\sqrt{n}$.",
      "Asumir que los datos siguen una distribución Normal en cualquier caso."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Al estimar $\\mu$ con $s^2$, si $\\sigma$ es desconocido, usamos la distribución $t$. Es crucial asegurar el método de muestreo (aleatorio) y luego calcular el Error Estándar usando el estimado $s$. Asumir Normalidad solo es necesario para ciertos casos o si aplicamos límites teóricos."
  },
  {
    "q": "¿Cuáles son las ventajas metodológicas del método Bootstrap?",
    "opts": [
      "No asume ninguna distribución subyacente (non-parametric).",
      "Permite estimar la distribución de estadísticos complejos sin fórmulas analíticas.",
      "Es más robusto que el muestreo estratificado en poblaciones desconocidas.",
      "Requiere un cálculo matemático exacto para su implementación."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El principal poder del bootstrap es que no requiere asumir una distribución específica (es 'non-parametric'). Permite simular la distribución de cualquier estadístico complejo ($\\text{ej: coeficiente de correlación}$) simplemente mediante remuestreo con reemplazo. Es robusto cuando las suposiciones de los métodos clásicos fallan."
  },
  {
    "q": "¿En qué escenarios resulta útil o apropiado utilizar el método Bootstrap?",
    "opts": [
      "Cuando se requiere estimar la distribución de un estadístico complejo sin conocer su forma teórica.",
      "Cuando se tienen datos muestrales y no acceso a la distribución poblacional completa (población real).",
      "Sirve para calcular intervalos de confianza robustos cuando las asunciones paramétricas fallan.",
      "Reemplaza completamente el cálculo analítico del error estándar."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El Bootstrap es una técnica no paramétrica de remuestreo con reemplazo. Su principal utilidad es estimar la distribución muestral (o la varianza/desviación estándar) de estadísticos en situaciones donde las fórmulas analíticas o los supuestos teóricos son difíciles de aplicar, proporcionando robustez a los resultados."
  },
  {
    "q": "¿Cuáles son afirmaciones verdaderas sobre la Distribución Muestral de $\\bar{X}$?",
    "opts": [
      "Su media siempre será igual a $\\mu$, independientemente del tamaño $n$.",
      "Si $n$ es grande, su forma se aproxima a una Normal.",
      "Permite realizar inferencias sobre parámetros poblacionales ($\\mu$).",
      "La forma de esta distribución depende de la forma poblacional (solo si $n$ es pequeño)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La distribución muestral de $\\bar{X}$ *no* depende de la forma poblacional si $n$ es grande (TCL). Su media siempre es $\\mu$. Si $n$ es grande, se vuelve normal. Y esta distribución es la base para realizar inferencias estadísticas sobre los parámetros desconocidos."
  },
  {
    "q": "¿Qué condiciones deben cumplirse o qué características son cruciales al momento de aplicar el Teorema Central del Límite (TCL)?",
    "opts": [
      "Los datos deben ser independientes entre sí.",
      "Debe tenerse un tamaño muestral suficientemente grande ($n\\ge 30$ es una regla práctica).",
      "La varianza poblacional ($\\sigma^2$) debe existir y no ser cero.",
      "Solo se puede aplicar si la población sigue una distribución t de Student."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El TCL requiere principalmente la independencia de las observaciones (Condición 0). Necesita que el tamaño muestral sea grande (Condición 1) para asumir normalidad. Lo más importante es que exista y sea finita la varianza poblacional ($\\sigma^2$) (Condición 2)."
  },
  {
    "q": "¿Qué implica o describe correctamente la relación entre Muestreo Aleatorio Simple, Estratificado y por Conglomerados?",
    "opts": [
      "El muestreo aleatorio simple garantiza que cada elemento tenga igual probabilidad de selección.",
      "El muestreo estratificado reduce el error estándar si los estratos son homogéneos internamente.",
      "El muestreo por conglomerados es más económico cuando la población está geográficamente dispersa y agrupada.",
      "En todos los casos, se debe usar un marco muestral completo."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Comparando métodos: el MAS garantiza equidad de selección. El Estratificado optimiza la precisión si se conocen diferencias entre grupos (estratos). El por Conglomerados es práctico y económico cuando los elementos están agrupados físicamente."
  },
  {
    "q": "¿Cuáles son las propiedades fundamentales que definen a un estimador estadístico $\\hat{\\theta}$?",
    "opts": [
      "Si es insesgado, su valor esperado $E(\\hat{\\theta})$ debe ser igual al parámetro poblacional $\\theta$.",
      "Su eficiencia se relaciona con la mínima varianza posible para un determinado nivel de sesgo.",
      "Un estimador puede ser consistente (convergencia en probabilidad) sin ser lineal o tener forma simple.",
      "Debe transformarse siempre usando logaritmos naturales para evitar el sesgo."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La propiedad central es la insesgadez ($E(\\hat{\\theta}) = \\theta$). La eficiencia se refiere a qué tan cerca está su varianza del límite inferior de Cramér-Rao. Además, muchos estimadores (como los basados en muestreo) son consistentes si $n$ crece."
  },
  {
    "q": "¿Qué conceptos se relacionan directamente con el concepto de 'Error Estándar'?",
    "opts": [
      "Mide la dispersión del estadístico (ej. $\\bar{X}$), no la dispersión de los datos originales.",
      "Es crucial para calcular intervalos de confianza poblacionales.",
      "Se calcula dividiendo la desviación estándar poblacional ($\\sigma$) por la raíz cuadrada del tamaño de muestra ($n$).",
      "Representa el error potencial al pasar de una muestra a una población."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El Error Estándar mide cómo se dispersará un estadístico (como $\\bar{X}$) si tomáramos muchas muestras. Es fundamental para la inferencia (IC), y su cálculo es precisamente $\\sigma/\\sqrt{n}$."
  },
  {
    "q": "¿Cuáles condiciones son necesarias para aplicar correctamente los principios de inferencia estadística mediante muestras?",
    "opts": [
      "La aleatoriedad de las muestras debe ser absoluta.",
      "Los subgrupos deben tener tamaños conocidos y proporcionales.",
      "El estadístico muestral ($\\bar{X}$) debe converger a una distribución normal (TCL).",
      "Se debe asegurar que la población sea paramétrica."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La aleatoriedad es la base de todo el muestreo. Para hacer inferencia, además se necesita la convergencia a Normalidad (por CLT) y, idealmente, tener una idea de las proporciones o tamaños para comparaciones válidas."
  },
  {
    "q": "¿Qué principios rigen un buen diseño de muestreo?",
    "opts": [
      "Minimizar la varianza del estimador para aumentar la precisión.",
      "Asegurar que las unidades seleccionadas sean representativas de la población total.",
      "Reducir el sesgo (bias) en los resultados mediante métodos estadísticos.",
      "Garantizar que todas las variables de interés sean medibles con el mismo instrumento."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un buen diseño busca eficiencia. Minimizar varianza aumenta precisión; ser representativo reduce sesgo; y corregir sesgos es objetivo principal del muestreo."
  },
  {
    "q": "¿Cuáles son métodos estadísticos validados para estimar distribuciones o parámetros?",
    "opts": [
      "Muestreo aleatorio simple.",
      "Bootstrap (remuestreo).",
      "Estimación por Máxima Verosimilitud (MLE).",
      "Asumir una distribución de Poisson, sin verificar los datos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los métodos válidos incluyen el muestreo simple (la base), Bootstrap para aproximación no paramétrica y MLE para obtener estimadores eficientes. Asumir distribuciones arbitrariamente es metodológicamente incorrecto."
  },
  {
    "q": "¿Qué afirmaciones describen correctamente las propiedades del Teorema Central del Límite (TCL)?",
    "opts": [
      "La distribución muestral tiende a ser Normal.",
      "No depende de la forma de la distribución poblacional original.",
      "La convergencia se establece cuando $n \\to \\infty$.",
      "Implica que cualquier conjunto de datos será perfectamente normal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El TCL garantiza que $\\bar{X}$ tenderá a la Normalidad independientemente de lo que sea la población (asumiendo varianza finita). Esta convergencia ocurre cuando $n$ es grande. Es un enunciado probabilístico y no implica una Normalidad perfecta en cualquier tamaño de muestra."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para aplicar el Método Bootstrap?",
    "opts": [
      "Los datos deben ser independientes entre sí.",
      "Se asume que la distribución muestral puede aproximarse por remuestreo con reemplazo.",
      "No requiere conocer la distribución teórica subyacente.",
      "Requiere un número muy grande de observaciones iniciales ($N$)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El Bootstrap es una herramienta no paramétrica que utiliza los datos disponibles para estimar la distribución del estadístico. Solo requiere la independencia y asume que el remuestreo con reemplazo aproxima bien la verdadera distribución muestral."
  },
  {
    "q": "¿Qué características definen a un buen método de muestreo?",
    "opts": [
      "Minimizar la varianza del estimador.",
      "Asegurar representatividad en todos los subgrupos clave (estratos).",
      "Reducir el sesgo asociado al muestreador o al diseño.",
      "Garantiza que la muestra sea más barata que un censo."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un buen método debe ser eficiente (baja varianza), reducir sesgos y, en el caso de estratificación, garantizar que se capturen las variaciones importantes del subgrupo."
  },
  {
    "q": "¿Cuáles son los requisitos fundamentales para la Ley de los Grandes Números (LLN)?",
    "opts": [
      "La media poblacional ($\\mu$) debe existir.",
      "Los valores muestrales deben ser independientes e idénticamente distribuidos (i.i.d.).",
      "El tamaño de la muestra $n$ debe aumentar indefinidamente ($n \\to \\infty$).",
      "Implica que cualquier valor observado será el promedio a largo plazo."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La LLN solo requiere i.i.d. y varianza finita (la existencia de la media). Su conclusión es que $\\bar{X}$ convergirá al valor esperado ($\\mu$) en probabilidad cuando $n$ tiende a infinito."
  },
  {
    "q": "¿Cuáles son ventajas del muestreo estratificado?",
    "opts": [
      "Reduce significativamente el error estándar comparado con Muestreo Aleatorio Simple (MAS).",
      "Permite hacer estimaciones más precisas para subgrupos específicos.",
      "Es ideal cuando la población está naturalmente dividida en grupos homogéneos (estratos).",
      "Garantiza que cada unidad poblacional tenga una probabilidad de selección proporcional a su tamaño."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La estratificación mejora la eficiencia al reducir varianzas. Es mejor que MAS cuando se conocen las subpoblaciones importantes y el muestreo puede hacerse dentro de ellas."
  },
  {
    "q": "¿Cuáles son limitaciones del Muestreo por Conglomerados (Cluster Sampling)?",
    "opts": [
      "Puede aumentar el error estándar si los conglomerados no son homogéneos internamente.",
      "Es más fácil y económico cuando la lista completa de unidades es inaccesible.",
      "No requiere un marco muestral completo para toda la población, solo para las listas de conglomerados.",
      "Siempre proporciona estimaciones menos precisas que MAS."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El principal inconveniente del cluster sampling (si los clusters son muy diferentes entre sí) es que aumenta el error estándar. Sin embargo, su gran ventaja es la practicidad en entornos geográficos difíciles."
  },
  {
    "q": "¿Qué conceptos son cruciales para entender la variabilidad muestral?",
    "opts": [
      "Error Estándar: se aplica al estadístico ($\\bar{X}$).",
      "Varianza Muestral ($s^2$): estima $\\sigma^2$.",
      "Principio de Insesgamiento: el estimador promedio es el mejor.",
      "Teorema Central del Límite: explica la forma convergente."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Es vital distinguir que el Error Estándar se calcula sobre el estadístico (la media muestral), mientras que la varianza muestral $s^2$ está relacionada con estimar $\\sigma^2$. El TCL y el sesgo son conceptos de convergencia de la distribución."
  },
  {
    "q": "¿Qué principios rigen la aplicación de métodos estadísticos en muestras?",
    "opts": [
      "La independencia entre las observaciones es un supuesto clave.",
      "El tamaño de muestra debe ser lo suficientemente grande ($n \\ge 30$) para asumir Normalidad (por TCL).",
      "Los datos deben estar libres de autocorrelación o dependencia temporal.",
      "Se requiere que la población sea homogénea."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La independencia es fundamental. Si $n$ es grande, el TCL nos ayuda a asumir Normalidad. Sin embargo, en cualquier caso (especialmente series de tiempo), debemos asegurar la independencia entre observaciones."
  },
  {
    "q": "¿Cuáles son propiedades fundamentales de la media muestral ($\\bar{X}$) como estimador?",
    "opts": [
      "Es un estadístico insesgado para $\\mu$.",
      "Toda la información del conjunto de datos es utilizada en su cálculo.",
      "Mide el valor central promedio, pero no necesariamente representa la moda poblacional.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La media ($\\bar{X}$) es un estimador insesgado para $\\mu$ (media poblacional). Utiliza todos los datos disponibles. Aunque es una medida de tendencia central, su valor no garantiza que sea la moda poblacional."
  },
  {
    "q": "¿Cuáles son las principales razones para emplear el muestreo estratificado en lugar del muestreo aleatorio simple?",
    "opts": [
      "Permite asegurar que grupos importantes (estratos) estén representados proporcionalmente.",
      "Reduce significativamente la varianza del estimador, mejorando la precisión.",
      "Es útil cuando se conocen características de subgrupos poblacionales.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El muestreo estratificado se utiliza para dividir la población en grupos homogéneos (estratos). Al tomar muestras aleatorias dentro de estos estratos y combinar los resultados, se puede reducir el error estándar general comparado con un SRS, especialmente si la variabilidad entre estratos es alta."
  },
  {
    "q": "¿Cuáles son las implicaciones estadísticas al realizar un análisis utilizando el método bootstrap?",
    "opts": [
      "Se utiliza para construir intervalos de confianza no paramétricos.",
      "Permite estimar la distribución muestral sin suposiciones de normalidad o parámetros poblacionales desconocidos.",
      "Es computacionalmente intensivo, pero muy flexible.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El bootstrap es una herramienta extremadamente versátil. Permite construir ICs y aproximar distribuciones (varianza, desviación estándar) sin asumir la forma de la distribución subyacente, solo basándose en el remuestreo con reemplazo."
  },
  {
    "q": "¿Cuáles son los supuestos críticos para aplicar correctamente cualquier análisis basado en el Teorema Central del Límite?",
    "opts": [
      "Los datos deben ser recolectados mediante muestreo aleatorio.",
      "Las observaciones de la muestra deben ser independientes entre sí.",
      "La varianza poblacional debe existir y ser finita ($\\sigma^2 < \\infty$).",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para que el TCL funcione (o cualquier cálculo inferencial), se necesitan tres condiciones fundamentales: muestreo aleatorio (representatividad), independencia de las observaciones, y varianza poblacional finita."
  },
  {
    "q": "¿Cuáles son los objetivos principales al aplicar un muestreo estratificado?",
    "opts": [
      "Asegurar la representación adecuada de subgrupos clave que varían significativamente.",
      "Reducir el error estándar general del estimador en comparación con SRS.",
      "Mejorar la precisión al manejar poblaciones heterogéneas.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La estratificación es una herramienta de diseño muestral cuyo objetivo es dividir la población en subgrupos homogéneos (estratos) para obtener estimaciones más precisas y reducir el error estándar general."
  },
  {
    "q": "¿Cuáles son condiciones necesarias para aplicar correctamente el Teorema Central del Límite?",
    "opts": [
      "La población debe tener varianza finita.",
      "Los datos deben ser recolectados mediante muestras independientes.",
      "El tamaño de muestra $n$ debe ser grande ($n\\ge 30$).",
      "Las variables observadas no pueden estar correlacionadas entre sí."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para aplicar el TCL o la distribución muestral, necesitamos que exista una varianza finita ($\\sigma^2 < \\infty$), que las muestras sean independientes unas de otras, y generalmente se requiere un tamaño de muestra lo suficientemente grande ($n\\ge 30$) para asegurar la aproximación normal."
  },
  {
    "q": "¿Cuáles son ventajas conceptuales de utilizar el Muestreo Estratificado?",
    "opts": [
      "Asegura una mejor representación de subgrupos clave de interés.",
      "Reduce la varianza del estimador comparado con el muestreo aleatorio simple (SRS).",
      "Requiere que se conozca la proporción exacta de cada subgrupo en la población.",
      "Elimina por completo el riesgo de error de muestreo."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El estratificado es poderoso porque divide la población en grupos homogéneos (estratos) y luego muestrea proporcionalmente. Esto mejora la eficiencia estadística al reducir la varianza total del estimador ($\\text{Var}(\\bar{X})_{\\text{strata}} < \\text{Var}(\\bar{X})_{\\text{SRS}}$), aunque requiere conocer las proporciones de los estratos."
  },
  {
    "q": "¿Cuáles son limitaciones o supuestos clave al usar la aproximación Normal por TCL?",
    "opts": [
      "Requiere que el tamaño $n$ sea grande, generalmente $n\\ge 30$.",
      "El proceso de muestreo debe basarse en individuos independientes.",
      "No se puede aplicar si la varianza poblacional ($\\sigma^2$) es infinita o desconocida.",
      "Solo funciona para variables continuas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los requisitos clave del TCL son: independencia de las observaciones, tamaño grande ($n\\ge 30$), y que la varianza sea finita. La limitación es que si $n$ es pequeño *y* la población es muy sesgada, la aproximación normal puede fallar."
  },
  {
    "q": "¿Cuáles son los requisitos o condiciones necesarias para aplicar exitosamente el Teorema Central del Límite (TCL)?",
    "opts": [
      "Los datos deben provenir de una población con varianza finita.",
      "El muestreo debe ser realizado mediante muestras independientes.",
      "El tamaño de la muestra ($n$) debe ser suficientemente grande.",
      "La distribución poblacional original DEBE ser normal."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El TCL requiere que la población tenga varianza finita ($\\sigma^2 < \\infty$) y que el muestreo sea independiente. Si $n$ es lo suficientemente grande (típicamente $n \\ge 30$), no importa si la población original era normal o no, ya que $\\bar{X}$ se aproximará a una distribución normal."
  },
  {
    "q": "¿Cuáles son las características cruciales del Muestreo Aleatorio Simple (SRS)?",
    "opts": [
      "Cada elemento tiene la misma probabilidad de ser seleccionado.",
      "Los elementos deben seleccionarse independientemente unos de otros.",
      "Requiere una lista completa y exhaustiva de todos los miembros de la población.",
      "Es el método más eficiente siempre, sin importar la estructura poblacional."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un SRS requiere un marco muestral completo (Opción 2). Además, cada unidad debe tener igual probabilidad de ser seleccionada (Opción 1) y las selecciones deben ser independientes."
  },
  {
    "q": "¿Qué afirmaciones describen correctamente la función y propósito de utilizar el método Bootstrap?",
    "opts": [
      "Permite estimar distribuciones muestrales cuando no se conocen los parámetros poblacionales ($\\sigma$, $\\mu$).",
      "Se basa en el principio de remuestreo con reemplazo utilizando el conjunto de datos observado.",
      "Es un sustituto del cálculo teórico y es especialmente útil para estadísticos complejos (ej. coeficientes de correlación).",
      "Requiere que la población siga una distribución normal conocida."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El Bootstrap es una técnica no paramétrica poderosa. Su propósito es simular la distribución muestral a partir de los datos disponibles (remuestreo con reemplazo) para estimar parámetros o distribuciones sin hacer suposiciones fuertes sobre la población."
  },
  {
    "q": "¿Cuáles son las propiedades matemáticas que hacen que $\\bar{X}$ sea considerado un buen estimador para la media poblacional ($\\mu$)?",
    "opts": [
      "Es eficiente, ya que su varianza es óptima bajo ciertos supuestos de muestreo.",
      "Su valor esperado es igual a $\\mu$, lo cual garantiza insesgadez.",
      "Converge en probabilidad hacia $\\mu$ conforme aumenta $n$.",
      "El Teorema Central del Límite garantiza automáticamente que la desviación estándar sea mínima."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "$\\bar{X}$ es un estimador de bajo sesgo ($E[\\bar{X}] = \\mu$), converge a $\\mu$ (LLN), y en condiciones adecuadas, puede ser eficiente. La propiedad del TCL no garantiza la mínima varianza, sino la forma normal."
  },
  {
    "q": "¿Qué interpretaciones son correctas al examinar la distribución muestral de $\\bar{X}$?",
    "opts": [
      "La media de la distribución muestral será el valor poblacional $\\mu$.",
      "Su desviación estándar es siempre menor que la desviación típica de la población ($\\sigma$).",
      "Si $n$ es grande, podemos aproximar su forma a la normalidad (TCL).",
      "Los datos individuales ($x_i$) son más dispersos que el promedio muestral ($\\bar{X}$) en términos absolutos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La media de la distribución muestral es $\\mu$ (Opción 1). Su varianza y desviación estándar son menores porque se está promediando, reduciendo el ruido. El TCL aplica para muestras grandes."
  },
  {
    "q": "¿En un contexto de análisis estadístico avanzado, qué conceptos deben manejarse con precaución?",
    "opts": [
      "Confundir la Desviación Estándar Poblacional ($\\sigma$) con el Error Estándar ($\\text{SE}_{\\bar{X}}$).",
      "Recordar siempre que el Bootstrap es una aproximación y no una verdad determinista.",
      "Ignorar la necesidad de evaluar un marco muestral apropiado antes de calcular cualquier $\\text{SE}$.",
      "Asumir que el TCL implica que $N$ debe ser pequeño para ser aplicado."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Es crucial diferenciar las variabilidades: $\\sigma$ (poblacional) vs. $\\text{SE}_{\\bar{X}}$ (estimador). Además, el Bootstrap es una aproximación y la planificación del muestreo (el marco) es fundamental."
  },
  {
    "q": "¿Qué pasos o consideraciones son esenciales al diseñar un plan de muestreo robusto?",
    "opts": [
      "Determinar primero el tamaño de muestra ($n$) necesario basándose en el error tolerable.",
      "Seleccionar la técnica de muestreo (SRS, Estratificado, etc.) adecuada a la estructura poblacional.",
      "Realizar una prueba piloto para estimar inicialmente la varianza ($\\sigma^2$).",
      "Asumir que cualquier método de muestreo funcionará igualmente bien sin importar la heterogeneidad de la población."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un plan robusto requiere planificación: determinar $n$ (estadística), elegir el mejor método según los datos disponibles (diseño) y estimar $\\sigma^2$ (pre-análisis). Asumir lo mismo para todos es un error metodológico."
  },
  {
    "q": "¿Bajo qué condiciones se aplica el Teorema Central del Límite (TCL) para asegurar que la distribución muestral de $\\bar{X}$ sea aproximadamente Normal?",
    "opts": [
      "Los datos deben seguir una distribución Normal en la población.",
      "Las muestras deben ser independientes y tener varianza finita.",
      "El tamaño de la muestra $n$ debe ser suficientemente grande, generalmente $n \\ge 30$.",
      "El muestreo debe realizarse únicamente mediante el método bootstrap."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El TCL es poderoso porque su aplicación no requiere necesariamente Normalidad poblacional (Opción 1 incorrecta). Solo exige independencia y varianza finita. Si $n$ es suficientemente grande ($n \\ge 30$), la aproximación a la normalidad se cumple, independientemente de la forma real de la población."
  },
  {
    "q": "Si el tamaño muestral $n$ se incrementa, ¿qué efecto directo tiene en la distribución muestral del promedio $\\bar{X}$?",
    "opts": [
      "La media de la distribución muestral ($\\mu_{\\bar{x}}$) aumenta.",
      "La varianza de la distribución muestral ($\\sigma^2_{\\bar{x}}$) disminuye, haciéndola más estrecha.",
      "El error estándar se vuelve igual a la desviación típica poblacional $\\sigma$.",
      "La forma de la distribución pasa necesariamente de sesgada a simétrica."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Al aumentar $n$, el estimador $\\bar{X}$ se vuelve más preciso. Esto implica que su varianza disminuye (se estrecha), lo que significa un error estándar menor (Opción 2). Además, estadísticamente hablando, la aproximación a Normalidad mejora, haciendo la distribución más simétrica y menos dependiente de sesgos poblacionales (Opción 3)."
  },
  {
    "q": "¿Cuál es el propósito principal de aplicar la Ley de los Grandes Números (LLN) en estadística inferencial?",
    "opts": [
      "Garantizar que la muestra sea representativa del universo total.",
      "Establecer que, a medida que $n \\to \\infty$, $\\bar{X}$ convergirá al valor poblacional $\\mu$ en probabilidad.",
      "Permitir el cálculo exacto de intervalos de confianza sin asumir Normalidad.",
      "Sustituir la necesidad de realizar muestreos aleatorios complejos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La LLN es un concepto límite que asegura que la media muestral $\\bar{X}$ se acercará al valor poblacional $\\mu$ a medida que $n$ crece (Opción 2). Esto proporciona la base teórica de que el estadístico muestral es un buen estimador. La opción 1 es un objetivo del muestreo, pero no lo garantiza por sí mismo; y la Opción 3 es falsa."
  },
  {
    "q": "En comparación con el Muestreo Aleatorio Simple (MAS), ¿cuáles son ventajas o características correctas de utilizar el Muestreo Estratificado?",
    "opts": [
      "Asegura que subgrupos clave estén representados proporcionalmente a su peso poblacional.",
      "Reduce la varianza del estimador en comparación con MAS, si los estratos están bien definidos.",
      "Es más eficiente cuando hay grupos conocidos dentro de la población (heterogeneidad).",
      "No requiere conocer previamente las proporciones o tamaños de los subgrupos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El muestreo estratificado es superior cuando la población tiene subgrupos con variaciones distintas. Al asegurar representación proporcional (Opción 1) y reducir la varianza general del estimador (Opción 2), permite conclusiones más precisas que el MAS."
  },
  {
    "q": "¿Qué función cumple principalmente el método Bootstrap en el análisis estadístico?",
    "opts": [
      "Estimar la distribución muestral de un estadístico sin hacer suposiciones sobre la forma poblacional.",
      "Permitir calcular intervalos de confianza y errores estándar utilizando remuestreo con reemplazo a partir de los datos observados.",
      "Reemplazar completamente la necesidad de asumir Normalidad poblacional en cualquier análisis.",
      "Determinar si la población completa ha sido muestreada, comparando $n$ con $N$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El Bootstrap es una técnica no paramétrica que usa los propios datos (remuestreos con reemplazo) para *simular* la distribución de un estadístico. Esto permite estimar su variabilidad y construir intervalos sin asumir ninguna forma poblacional específica."
  },
  {
    "q": "¿Cuáles son las principales limitaciones o consideraciones críticas al aplicar el Teorema Central del Límite?",
    "opts": [
      "La independencia entre observaciones debe ser asumida.",
      "El tamaño de la muestra $n$ debe superar un umbral crítico (e.g., $n \\ge 30$).",
      "No garantiza que los datos *observados* sean normales, solo la distribución muestral del promedio.",
      "Si la población es extremadamente pequeña y no Normal, el resultado es inválido."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El TCL depende fundamentalmente de la independencia (Opción 1) y requiere que $n$ sea grande ($n \\ge 30$) para la aproximación normal. Es crucial entender que solo se aproxima a Normalidad la *distribución muestral*, no necesariamente los datos individuales observados."
  },
  {
    "q": "¿Qué implica estadísticamente el concepto de 'Error Estándar' en contraste con la desviación típica poblacional $\\sigma$?",
    "opts": [
      "Es una medida de dispersión que caracteriza al estimador (la variabilidad del promedio muestral), no a los datos individuales.",
      "Siempre es menor o igual a la desviación estándar, ya que divide por $n$.",
      "Se utiliza para calcular el rango más probable de valores poblacionales bajo un nivel de confianza dado.",
      "Indica la precisión con la que se estima $\\mu$ usando $\\bar{X}$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El Error Estándar ($\\sigma_{\\bar{x}} = \\sigma / \\sqrt{n}$) mide la dispersión del *promedio* de las muestras (el estimador), no la dispersión de los datos originales. Por ello, es una medida de precisión inferencial."
  },
  {
    "q": "¿Cuáles son afirmaciones correctas sobre el muestreo por conglomerados (Cluster Sampling)?",
    "opts": [
      "Es especialmente útil cuando la población está geográficamente dispersa o difícil de acceder.",
      "Implica dividir la población en grupos naturalmente agrupados sin medir su varianza.",
      "Generalmente requiere una menor cantidad de información previa sobre subgrupos que el muestreo estratificado.",
      "Tiene una eficiencia estadística comparable a un MAS bien diseñado."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El conglomerado es ideal para poblaciones grandes y dispersas geográficamente (Opción 1). La clave es que se trabaja con grupos existentes. Es más sencillo logísticamente que el estratificado, pero su eficiencia estadística a veces es menor."
  },
  {
    "q": "¿Cómo se relaciona la estimación de varianza $s^2$ usando $n-1$ grados de libertad?",
    "opts": [
      "Asegura que el estimador muestral $\\bar{X}$ sea insesgado para $\\mu$.",
      "Hace que la varianza muestral $s^2$ sea un estimador insesgado de la verdadera varianza poblacional $\\sigma^2$.",
      "Es una convención matemática necesaria para aplicar el Teorema Central del Límite.",
      "Minimiza el error cuadrático medio (MSE) en comparación con usar $n$ grados de libertad."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Usar $n-1$ grados de libertad es la corrección estándar para asegurar que la varianza muestral ($s^2$) sea un estimador insesgado de la verdadera varianza poblacional ($\\sigma^2$), lo cual es fundamental para construir intervalos y pruebas."
  }
];;
