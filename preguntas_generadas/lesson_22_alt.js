// Leccion 22 — 180 preguntas alternativas
// Generadas con gemma4 el 2026-07-04 14:51
// Distribucion: 60/60/60 (1c/2c/3c)
window.LESSON_QUESTIONS_ALT = window.LESSON_QUESTIONS_ALT || {};
window.LESSON_QUESTIONS_ALT[22] = [
  {
    "q": "¿Cuál es la definición de Potencia Estadística en el contexto hipotético?",
    "opts": [
      "La capacidad del test para detectar un efecto si realmente existe ($1-\\beta$).",
      "La probabilidad de aceptar $H_0$ cuando es falsa.",
      "El riesgo de rechazar $H_0$ incorrectamente ($\\alpha$).",
      "Una medida de dispersión muestral."
    ],
    "c": [
      0
    ],
    "exp": "La Potencia (Power) se define como la probabilidad de rechazar la hipótesis nula ($H_0$) cuando la hipótesis alternativa ($H_1$) es verdadera. Es decir, es $P(\\text{Rechazar } H_0 | H_1 \\text{ verdadera}) = 1 - \\beta$. Un valor alto indica una mayor capacidad de detección del efecto."
  },
  {
    "q": "¿Qué representa el Error Tipo II ($\\beta$)?",
    "opts": [
      "La probabilidad de aceptar $H_0$ cuando es falsa (falso negativo).",
      "El nivel de significancia deseado ($\\alpha$).",
      "La variación natural entre observaciones.",
      "Un error cometido solo por la muestra."
    ],
    "c": [
      0
    ],
    "exp": "El Error Tipo II ($\\beta$) ocurre cuando el test no logra detectar un efecto significativo, a pesar de que este existe en la población. Es la probabilidad de fallar en rechazar $H_0$ cuando debería haberse rechazado."
  },
  {
    "q": "¿Cuándo es estadísticamente más eficiente usar una prueba unilateral (cola) en lugar de bilateral?",
    "opts": [
      "Cuando se tiene un fuerte conocimiento teórico sobre la dirección del efecto esperado.",
      "Si las dos colas son igualmente posibles y el tamaño muestral es pequeño.",
      "Siempre que $\\alpha$ sea muy bajo.",
      "Solo si la media poblacional es cero."
    ],
    "c": [
      0
    ],
    "exp": "Una prueba unilateral (por ejemplo, solo testear si $\\mu > 0$) tiene mayor potencia para un mismo tamaño muestral y nivel de significancia que una prueba bilateral, siempre y cuando tengamos una razón teórica muy fuerte para predecir la dirección del efecto."
  },
  {
    "q": "¿Cuál es la relación matemática entre el Tamaño del Efecto ($\\delta$) y el Tamaño Muestral ($n$) requerido?",
    "opts": [
      "$n \\propto 1/\\delta^2$, de manera que si se duplica $\\delta$, $n$ se reduce a una cuarta parte.",
      "$n \\propto 1/\\sigma^2$",
      "El tamaño muestral $n$ debe aumentar linealmente con $\\delta$.",
      "$n$ es independiente del tamaño del efecto."
    ],
    "c": [
      0
    ],
    "exp": "La fórmula del tamaño muestral muestra que $n$ es inversamente proporcional al cuadrado del tamaño del efecto ($\\delta^2$). Esto significa que si logramos detectar un efecto el doble de grande, necesitaremos 4 veces menos muestras."
  },
  {
    "q": "¿Cuál es la potencia estadística considerada como estándar aceptable en la mayoría de las ciencias biomédicas y sociales?",
    "opts": [
      "0.80 (o 80%)",
      "1.00 (o 100%)",
      "0.95 (o 95%)",
      "Depende del $\\alpha$ elegido."
    ],
    "c": [
      0
    ],
    "exp": "Aunque la potencia óptima es siempre mayor, el estándar de referencia comúnmente aceptado en investigación es una Potencia de $0.80$, lo que implica un riesgo de Error Tipo II ($\\beta$) de 0.20."
  },
  {
    "q": "¿Cuál es el objetivo principal de realizar un Análisis de Potencia *a priori*?",
    "opts": [
      "Calcular el tamaño muestral mínimo necesario antes de iniciar la recolección de datos, garantizando una potencia objetivo.",
      "Determinar si los resultados observados son estadísticamente significativos.",
      "Estimar la varianza poblacional a partir de muestras ya recolectadas.",
      "Comparar la fuerza del efecto con diferentes niveles de $\\alpha$."
    ],
    "c": [
      0
    ],
    "exp": "El análisis *a priori* es fundamental porque nos permite planificar el estudio correctamente. Al determinar $n$ antes de recolectar datos (conociendo $\\alpha$, $\\beta$ y $\\delta$), aseguramos que la muestra sea lo suficientemente grande para detectar un efecto mínimo relevante."
  },
  {
    "q": "En el contexto del análisis de potencia estadística, ¿cuál es la definición más precisa de Potencia ($\\text{Power}$)?",
    "opts": [
      "La probabilidad de aceptar $H_0$ cuando es falsa.",
      "El riesgo de cometer un Error Tipo I (Alpha).",
      "La probabilidad de rechazar $H_0$ cuando en realidad es verdadera.",
      "La magnitud del efecto detectado."
    ],
    "c": [
      0
    ],
    "exp": "Potencia se define como la capacidad del test para detectar un efecto real. Matemáticamente, $\\text{Power} = 1 - \\beta$, que es la probabilidad de rechazar $H_0$ cuando $H_1$ (el efecto) es verdadero."
  },
  {
    "q": "¿Qué implica conceptualmente el Error Tipo II ($\\beta$) en una prueba de hipótesis?",
    "opts": [
      "Aceptar $H_0$ cuando realmente es falsa.",
      "Reducir la varianza observada para aumentar el poder.",
      "No rechazar $H_0$ cuando debería haber sido rechazada.",
      "Tener un tamaño muestral infinito."
    ],
    "c": [
      0
    ],
    "exp": "El Error Tipo II ($\\beta$) ocurre cuando fallamos en detectar un efecto que realmente existe. Esto significa que no rechazamos la hipótesis nula ($H_0$) a pesar de que la alternativa ($H_1$) es verdadera."
  },
  {
    "q": "Si el tamaño muestral necesario ($n$) debe ser recalculado y se determina que $n \\propto 1/\\delta^2$, ¿qué acción estadísticamente correcta debería tomar un investigador para aumentar significativamente su poder detectando efectos pequeños?",
    "opts": [
      "Incrementar el tamaño muestral ($n$) proporcionalmente a $1/\\delta^2$.",
      "Duplicar $\\alpha$ (nivel de significancia).",
      "Reducir el tamaño del efecto ($\\delta$) esperado.",
      "Aumentar la varianza poblacional ($\\sigma^2$)."
    ],
    "c": [
      0
    ],
    "exp": "La relación es $n \\propto 1/\\delta^2$. Para detectar efectos más pequeños (reducir $\\delta$), necesitamos aumentar drásticamente el tamaño muestral ($n$). Por lo tanto, la acción correcta es incrementar $n$."
  },
  {
    "q": "Respecto a la interpretación del 'Análisis de Potencia A Priori', ¿cuál afirmación es estadísticamente defendible?",
    "opts": [
      "Es un proceso que calcula el tamaño muestral necesario antes de recolectar datos.",
      "Permite establecer si los resultados serán significativos sin realizar experimentos.",
      "Requiere definir previamente $\\alpha$, potencia deseada y MDE ($\\delta$).",
      "Puede reemplazar la necesidad de revisar la literatura científica."
    ],
    "c": [
      0
    ],
    "exp": "El análisis a priori es el estándar de oro, ya que nos permite pre-dimensionar el estudio definiendo los parámetros clave (significancia, poder y el efecto mínimo detectable) antes de la recolección de datos."
  },
  {
    "q": "¿Cuál es la principal utilidad de calcular el MDE (Minimum Detectable Effect)?",
    "opts": [
      "Determinar el menor tamaño del efecto ($\\delta$) que un estudio con $n$ y potencia fijados podrá identificar.",
      "Indicar la varianza máxima que puede manejar un test.",
      "Calcular automáticamente la significancia $\\alpha$.",
      "Sustituir la necesidad de realizar análisis post-hoc."
    ],
    "c": [
      0
    ],
    "exp": "El MDE es crucial porque nos dice, dada nuestra muestra ($n$) y nuestro poder (ej. 0.80), qué tan grande debe ser el efecto ($\\delta$) para que sea estadísticamente detectable. Si el $\\delta$ real es menor al MDE, no lo detectaremos."
  },
  {
    "q": "Cuando se utiliza la Curva de Potencia en un gráfico $\\pi(\\delta)$ vs $\\delta$, ¿qué indica la pendiente y la dirección general de crecimiento? (Asumiendo $n$ fijo)",
    "opts": [
      "Que el poder aumenta al aumentar el tamaño del efecto ($\\delta$).",
      "Que el poder es máximo cuando $\\delta=0$.",
      "Que la potencia depende linealmente del nivel $\\alpha$.",
      "Que siempre se debe usar un test unilateral."
    ],
    "c": [
      0
    ],
    "exp": "La curva de potencia muestra que, para un $n$ fijo, a medida que nos alejamos de cero (aumentando el tamaño del efecto $\\delta$), la capacidad de rechazar $H_0$ aumenta, haciendo que la curva sea creciente en relación con $\\delta$."
  },
  {
    "q": "En el contexto de la potencia estadística, ¿qué representan correctamente los siguientes términos?",
    "opts": [
      "Potencia es $P(\\text{rechazar } H_0 | H_1 \\text{ verdadera})$",
      "Un poder bajo indica un alto riesgo de Error Tipo I ($\\alpha$)",
      "El análisis post-hoc para el cálculo del tamaño muestral es metodológicamente robusto",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "La potencia (1-$\\beta$) es la probabilidad correcta de rechazar $H_0$ si $H_1$ es verdadera. Un poder bajo significa que hay un alto riesgo de cometer Error Tipo II ($\\beta$), no de Tipo I ($\\alpha$). Los análisis a priori son los recomendados para determinar el tamaño muestral."
  },
  {
    "q": "¿Cuál es la principal implicación del aumento en el tamaño muestral ($n$) sobre la potencia estadística, manteniendo constantes $\\alpha$, $\\delta$ y $\\sigma^2$?",
    "opts": [
      "La potencia aumenta linealmente con $n$",
      "Aumentar $n$ siempre reduce la varianza estimada",
      "Permite detectar tamaños de efecto ($\\delta$) más pequeños",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Al aumentar el tamaño muestral ($n$), se reduce el error estándar, lo que aumenta la capacidad estadística del estudio y, por ende, su potencia. Esto permite detectar un MDE (Minimum Detectable Effect) más pequeño."
  },
  {
    "q": "¿Qué condición debe cumplirse para que un análisis de potencia sea estadísticamente válido y ético?",
    "opts": [
      "Determinar el tamaño muestral antes de la recolección de datos (a priori)",
      "Asumir valores conservadores para $\\sigma^2$ y $\\delta$",
      "Utilizar siempre un nivel de significancia $\\alpha = 0.05$",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Es fundamental determinar el tamaño muestral *antes* del estudio (a priori). Además, es crucial ser lo más conservador posible con los parámetros estimados ($\\sigma^2$ y $\\delta$) para evitar sobredimensionar o subdimensionar la muestra."
  },
  {
    "q": "¿Cómo afecta un incremento en la varianza poblacional ($\\sigma^2$) al tamaño muestral ($n$) requerido, asumiendo que todos los demás parámetros se mantienen constantes?",
    "opts": [
      "El requerimiento de $n$ aumenta proporcionalmente a $\\sigma^2$",
      "La potencia disminuye si el investigador ignora este aumento",
      "Se debe aumentar significativamente el poder estadístico",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Dado que la fórmula para $n$ contiene $\\sigma^2$ en el numerador ($n \\propto \\sigma^2$), si la varianza aumenta, el tamaño muestral requerido también debe aumentar proporcionalmente. Si no se ajusta esto, la potencia caerá."
  },
  {
    "q": "¿Qué significa interpretar una curva de potencia con respecto al tamaño del efecto ($\\delta$)?",
    "opts": [
      "Muestra la probabilidad de error Tipo I vs $\\delta$",
      "Indica que a medida que $\\delta$ aumenta, la potencia también debe aumentar",
      "Ayuda a visualizar el MDE máximo detectable para $n$ fijo",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "La curva de potencia grafica $\\pi(\\delta)$ en función de $\\delta$. Si la curva es ascendente respecto a $\\delta$, significa que cuanto más grande sea el efecto real ($\\delta$), mayor será nuestra capacidad (potencia) para detectarlo. El MDE se encuentra donde la potencia objetivo (ej: 0.80) cruza con la curva."
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre Cohen's $d$ es correcta en términos prácticos?",
    "opts": [
      "Es el cociente entre la diferencia de medias ($\\bar{X}_1 - \\bar{X}_2$) y la desviación estándar poblacional ($\\sigma$) o estimada",
      "Un valor pequeño (e.g., 0.2) sugiere un efecto clínicamente irrelevante",
      "Su uso permite estandarizar el tamaño del efecto, haciéndolo comparable entre diferentes unidades de medida",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Cohen's $d$ está diseñado para la estandarización: $(\\bar{X}_1 - \\bar{X}_2) / \\sigma$. Esto lo convierte en una métrica universal que no depende de las unidades originales, permitiendo comparar estudios muy diferentes."
  },
  {
    "q": "¿Cómo afecta el cambio del test bilateral al unilateral sobre el cálculo del tamaño muestral ($n$) requerido?",
    "opts": [
      "El test unilateral siempre requiere un $n$ menor para la misma potencia y $\\delta$",
      "Esto se debe a que el valor crítico de $z$ o $t$ es menor en la cola",
      "No hay influencia significativa, ya que solo varía el nivel de significancia $\\alpha$",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Un test unilateral (una sola dirección) utiliza un valor crítico más pequeño (ej., $z(\\alpha/2)$ vs $z(\\alpha)$), lo que reduce la suma $(z(\\alpha/2) + z(\\beta))^2$ en el numerador de la fórmula para $n$, resultando en un tamaño muestral menor necesario."
  },
  {
    "q": "¿Si se duplica el nivel de significancia $(\\alpha)$, ¿qué efecto teórico tendrá esto sobre la potencia y el tamaño muestral requerido?",
    "opts": [
      "El requerimiento de $n$ disminuye, haciéndolo más fácil detectar efectos",
      "La potencia esperada para cualquier $\\delta$ también disminuirá",
      "Esto incrementa el riesgo de cometer Error Tipo II ($\\beta$)",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Aumentar $\\alpha$ (ej., de 0.05 a 0.10) significa que se acepta un mayor riesgo de rechazar $H_0$ cuando es verdadera (más fácil hacerlo). Esto reduce el valor crítico $z(\\alpha/2)$, lo cual, si bien podría reducir ligeramente $n$, también aumenta la probabilidad de error Tipo I y afecta negativamente a la interpretación estándar del estudio."
  },
  {
    "q": "¿Qué implicación metodológica tiene que los cálculos de potencia deben considerar la tasa de pérdida o deserción ($1 - \\text{tasa}$)?",
    "opts": [
      "El tamaño muestral calculado inicialmente debe ajustarse linealmente por el factor $(1 / (1-\\text{tasa}))$ para obtener $n'$",
      "Si se ignora esta pérdida, el estudio tendrá un poder real menor al estimado",
      "Solo es necesario este ajuste si la pérdida de datos está directamente relacionada con las variables medidas",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Es crucial usar el ajuste $n' = n/(1-\\text{tasa})$. Si no se ajusta, se subestima la muestra necesaria, y por lo tanto, la potencia real del estudio será menor que la calculada."
  },
  {
    "q": "¿Cuál es la relación matemática crítica entre el tamaño muestral ($n$) y el tamaño del efecto ($\\delta$)?",
    "opts": [
      "El requerimiento de $n$ es inversamente proporcional al cuadrado del tamaño del efecto ($\\text{n} \\propto 1/\\delta^2$)",
      "Si se duplica $\\delta$, el tamaño muestral necesario disminuye drásticamente",
      "Aumentar $\\delta$ siempre permite reducir significativamente $n$",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Esta es la relación más importante: $n$ es inversamente proporcional al cuadrado de $\\delta$. Esto significa que si logramos detectar un efecto el doble de grande, podemos reducir el tamaño muestral requerido a una cuarta parte ($1/2^2 = 1/4$)."
  },
  {
    "q": "¿Cuál es la definición correcta de Potencia estadística ($1-\\beta$) en el contexto de una prueba de hipótesis?",
    "opts": [
      "La probabilidad de cometer un Error Tipo I ($\\alpha$)",
      "La probabilidad de rechazar correctamente $H_0$ cuando $H_1$ es verdadera.",
      "El tamaño mínimo del efecto detectable (MDE).",
      "La varianza muestral esperada"
    ],
    "c": [
      0
    ],
    "exp": "La Potencia ($1-\\beta$) representa el verdadero poder estadístico: la probabilidad de rechazar la hipótesis nula ($H_0$) cuando, en realidad, es falsa y la hipótesis alternativa ($H_1$) es cierta. Es la capacidad del test para detectar un efecto si realmente existe."
  },
  {
    "q": "¿Cuál es la implicación de realizar un análisis de potencia post-hoc después de recoger los datos?",
    "opts": [
      "Permite calcular con precisión qué efecto se detectó.",
      "Sugiere que el estudio estaba bien diseñado desde el principio.",
      "Puede llevar a conclusiones sesgadas y no debe guiar futuras investigaciones.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Calcular la potencia post-hoc es un error metodológico conocido como 'razonamiento circular'. Se busca saber si los resultados *serían* significativos, en lugar de determinar cuántos datos se necesitan para demostrarlo. Siempre debe hacerse a priori."
  },
  {
    "q": "¿Qué tipo de análisis estadístico y procedimiento es el más recomendado antes de iniciar un estudio experimental?",
    "opts": [
      "Análisis post-hoc (revisión de resultados ya obtenidos).",
      "Cálculo del tamaño muestral necesario ($n$) mediante análisis a priori.",
      "Uso exclusivo de métodos no paramétricos para evitar supuestos normales.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "El cálculo de $n$ *a priori* es crucial. Establece el poder deseado (e.g., 0.80) y la magnitud mínima del efecto ($MDE$) que se está dispuesto a detectar, garantizando así que el estudio tenga suficiente capacidad estadística."
  },
  {
    "q": "¿Si en un estudio de comparación de medias necesitamos ajustar $n$ por una tasa de pérdida o deserción (ej. 20% de abandono), ¿cómo debe modificarse el cálculo?",
    "opts": [
      "Se calcula ajustando $n' = n / (1 - \\text{tasa})$ para asegurar que el número final sea mayor al calculado.",
      "Simplemente se ignora la tasa, asumiendo una retención del 100%.",
      "Se divide el tamaño muestral original por la tasa de pérdida.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "Si esperas perder un porcentaje (tasa $p$), debes aumentar tu reclutamiento inicial ($n'$) para compensar. La fórmula correcta es dividir el $n$ ideal entre $(1-p)$. Por ejemplo, si se espera perder el 20% (0.2), necesitas calcular $n / 0.8$. "
  },
  {
    "q": "¿Qué representa la Potencia estadística, en términos de hipótesis?",
    "opts": [
      "La probabilidad de rechazar correctamente $H_0$ cuando $H_1$ es verdadera.",
      "La probabilidad de que $H_0$ sea verdadera.",
      "La probabilidad de cometer un Error Tipo II ($\\beta$).",
      "El riesgo alpha ($\\alpha$) asociado al test."
    ],
    "c": [
      0
    ],
    "exp": "Potencia ($1-\\beta$) es la capacidad del test para detectar un efecto si realmente existe. Se calcula como $P(\\text{rechazar } H_0 | H_1 \\text{ verdadera})$. Por lo tanto, una alta potencia significa baja probabilidad de Error Tipo II."
  },
  {
    "q": "¿Cuál es el valor estándar de Potencia que se considera aceptable en la mayoría de las investigaciones?",
    "opts": [
      "0.80",
      "0.95",
      "0.70",
      "1.0"
    ],
    "c": [
      0
    ],
    "exp": "Aunque 0.90 puede ser usado, el estándar universalmente aceptado y requerido en muchas disciplinas es una Potencia de 0.80 (o 80%)."
  },
  {
    "q": "¿Qué tipo de análisis estadístico debe realizarse para determinar correctamente el tamaño muestral $n$?",
    "opts": [
      "Análisis a priori",
      "Análisis post-hoc",
      "Estudio descriptivo inicial",
      "Prueba de normalidad"
    ],
    "c": [
      0
    ],
    "exp": "El Análisis a priori es fundamental porque determina el tamaño muestral necesario ($n$) *antes* de recolectar datos, basándose en la potencia deseada y el MDE esperado. El post-hoc no es recomendado por sesgo."
  },
  {
    "q": "¿Cómo se define correctamente el Tamaño del Efecto utilizando $d$ de Cohen?",
    "opts": [
      "Es una medida estandarizada que relaciona la diferencia entre medias con la desviación estándar poblacional.",
      "Solo puede calcularse si las distribuciones son normales.",
      "Representa la magnitud mínima de la diferencia detectable en términos de desviaciones estándar.",
      "Su valor depende exclusivamente del tamaño muestral ($n$)."
    ],
    "c": [
      0
    ],
    "exp": "El $d$ de Cohen estandariza la diferencia $(\\bar{X}_1 - \\bar{X}_2)$ dividiéndola por la desviación típica poblacional ($\\sigma$) o estimada, haciendo que el efecto sea interpretable independientemente de las unidades de medición."
  },
  {
    "q": "¿Cuál es la relación matemática entre el tamaño muestral ($n$), el MDE deseado ($\\delta$) y la Potencia (1-$\\beta$)?",
    "opts": [
      "$n \\propto 1/\\delta^2$",
      "A mayor $n$, menor $\\delta$.",
      "Si se duplica $\\delta$, $n$ debe cuadruplicarse.",
      "El tamaño muestral no depende del MDE."
    ],
    "c": [
      0
    ],
    "exp": "Existe una relación inversa cuadrática: $n \\propto 1/\\delta^2$. Si el efecto que queremos detectar ($\\delta$) es dos veces más grande, necesitamos solo un cuarto ($1/4$) del tamaño muestral. Además, al aumentar $\\delta$, se puede reducir $n$ manteniendo la potencia."
  },
  {
    "q": "¿Cuál es la definición conceptual de Potencia estadística ($1-\\beta$)?",
    "opts": [
      "La capacidad del test para detectar un efecto real si existe.",
      "La probabilidad de aceptar $H_0$ cuando es falsa.",
      "El riesgo de cometer el Error Tipo I ($\\alpha$).",
      "El valor p obtenido al calcular la prueba."
    ],
    "c": [
      0
    ],
    "exp": "La potencia estadística, definida como $1-\\beta$, representa la probabilidad de rechazar correctamente la hipótesis nula ($H_0$) cuando en realidad es falsa (es decir, cuando $H_1$ es verdadera). Es la capacidad del test para detectar un efecto real."
  },
  {
    "q": "¿Qué sucede con el tamaño muestral requerido ($n$) si se duplica el Tamaño del Efecto ($\\delta$)?",
    "opts": [
      "Se reduce a una cuarta parte.",
      "Se cuadruplica.",
      "Permanece igual.",
      "Se reduce a la mitad."
    ],
    "c": [
      0
    ],
    "exp": "La fórmula para $n$ incluye $\\delta^2$ en el denominador: $n \\propto 1/\\delta^2$. Si se duplica $\\delta$, el término $(\\delta/2)^2 = \\delta^2/4$. Por lo tanto, el tamaño muestral necesario se reduce a una cuarta parte."
  },
  {
    "q": "¿Cuándo es estadísticamente más apropiado realizar un Análisis de Potencia A Priori?",
    "opts": [
      "Antes de iniciar la recolección de datos, para determinar $n$.",
      "Cuando los resultados ya son conocidos y hay que justificarlos.",
      "Después de analizar los datos preliminares (Análisis post-hoc).",
      "Solo si se trabaja con un nivel de significancia muy bajo ($p < 0.01$)."
    ],
    "c": [
      0
    ],
    "exp": "El análisis a priori es crucial porque determina el tamaño muestral necesario ($n$) *antes* de la recolección de datos, garantizando que el estudio tenga suficiente poder estadístico para detectar un efecto esperado."
  },
  {
    "q": "¿Cuál es la interpretación estándar recomendada para un Tamaño del Efecto (d) considerado 'grande'?",
    "opts": [
      "$d \\geq 0.8$",
      "$d < 0.2$",
      "$0.2 \\leq d < 0.5$",
      "Solo si $d=1$."
    ],
    "c": [
      0
    ],
    "exp": "Cohen propuso guías de magnitud: 0.2 (pequeño), 0.5 (mediano) y 0.8 (grande). Por lo tanto, un valor mayor o igual a 0.8 se considera un efecto grande."
  },
  {
    "q": "¿Qué implicación tiene realizar una prueba unilateral (unidireccional) comparado con una bilateral (bidireccional)?",
    "opts": [
      "Requiere un tamaño muestral ($n$) menor para la misma potencia.",
      "Reduce el nivel de significancia ($\\alpha$) requerido.",
      "Aumenta inherentemente el riesgo de Error Tipo II ($\\beta$).",
      "No afecta la magnitud del efecto detectado."
    ],
    "c": [
      0
    ],
    "exp": "En términos de poder, una prueba unilateral es menos restrictiva que una bilateral. Por lo tanto, para alcanzar la misma potencia $1-\\beta$, se requiere un tamaño muestral menor ($n$) cuando el test se realiza en una sola dirección (unilateral)."
  },
  {
    "q": "¿Qué significa graficar la Curva de Potencia ($\\pi(\\delta)$)?",
    "opts": [
      "Grafica la potencia del test para diferentes tamaños de efecto ($\\delta$).",
      "Muestra cómo cambia la probabilidad de error Tipo I según el $\\alpha$.",
      "Determina la relación entre $n$ y $\\sigma^2$.",
      "Representa directamente el valor p."
    ],
    "c": [
      0
    ],
    "exp": "La Curva de Potencia grafica el potencial estadístico (Potencia) en función del Tamaño del Efecto ($\\delta$), manteniendo constantes los demás parámetros ($n$, $\\alpha$). Una curva más alta indica mayor potencia para un dado efecto."
  },
  {
    "q": "¿Qué indica el análisis post-hoc de potencia?",
    "opts": [
      "Sugiere que se debería haber usado más muestras al inicio.",
      "Es una técnica válida para justificar diseños experimentales.",
      "Ayuda a identificar si los resultados obtenidos son consistentes con un efecto grande.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0
    ],
    "exp": "El análisis post-hoc no es recomendado metodológicamente porque implica circularidad (se usa el resultado para justificar la muestra). Solo debe usarse como una estimación de lo que *podría* haber pasado."
  },
  {
    "q": "¿Qué significa interpretar que $n \\propto 1/\\delta^2$ en el contexto del diseño experimental?",
    "opts": [
      "El tamaño muestral es inversamente proporcional al cuadrado del efecto.",
      "Si se reduce $\\delta$, la potencia aumenta automáticamente sin cambiar $n$.",
      "Para detectar efectos pequeños, se necesita un aumento exponencial de muestras.",
      "La varianza ($\\sigma^2$) y el efecto ($\\delta$) son parámetros independientes entre sí."
    ],
    "c": [
      0
    ],
    "exp": "Esta relación es clave: si queremos detectar un efecto muy pequeño ($\\delta \\rightarrow 0$), debemos aumentar $n$ proporcionalmente a $1/\\delta^2$. Esto explica por qué los estudios con efectos pequeños requieren enormes muestras."
  },
  {
    "q": "¿Qué representa la potencia estadística de una prueba?",
    "opts": [
      "La capacidad del estudio para rechazar $H_0$ cuando es realmente falsa ($P(\\text{rechazar } H_0 | H_1)$).",
      "La probabilidad de que $H_0$ sea verdadera.",
      "El nivel de significancia ($\\alpha$) establecido en el estudio.",
      "La variabilidad natural de los datos."
    ],
    "c": [
      0
    ],
    "exp": "La potencia estadística (Power) es la probabilidad de detectar un efecto si realmente existe. Se calcula como $P(\\text{rechazar } H_0 | H_1 \\text{ verdadera})$, y un valor estándar aceptable suele ser 0.80 o mayor."
  },
  {
    "q": "¿Qué significa el Error Tipo II ($\\beta$) en el contexto de la hipótesis estadística?",
    "opts": [
      "No rechazar $H_0$ cuando en realidad es falsa (Fallo al detectar un efecto).",
      "Rechazar $H_0$ cuando es verdadera.",
      "Asumir que las muestras no son independientes.",
      "Utilizar una prueba paramétrica incorrecta."
    ],
    "c": [
      0
    ],
    "exp": "El Error Tipo II ($\\beta$) ocurre cuando fallamos en rechazar la hipótesis nula ($H_0$), aunque esta sea falsa y de hecho exista un efecto (es decir, $H_1$ es verdadera). La potencia es $1 - \\beta$."
  },
  {
    "q": "¿Cuál de los siguientes escenarios justifica el uso de un análisis de potencia a priori?",
    "opts": [
      "Cuando se necesita determinar el tamaño muestral mínimo requerido antes de comenzar la recolección de datos (diseño del estudio).",
      "Cuando se realiza una encuesta exploratoria inicial.",
      "Después de obtener resultados sorprendentes y deseando justificarlos estadísticamente.",
      "Si el investigador no tiene conocimiento previo sobre la variabilidad ($\\sigma$) de la población."
    ],
    "c": [
      0
    ],
    "exp": "El análisis a priori es fundamental en la fase de diseño, ya que permite calcular el tamaño muestral ($n$) necesario para alcanzar una potencia deseada (ej. 0.80) al nivel $\\alpha$ predefinido. Hacerlo post-hoc no es recomendable."
  },
  {
    "q": "¿Qué relación existe entre el Mínimo Efecto Detectable (MDE, o $\\delta$) y el tamaño muestral ($n$) requerido?",
    "opts": [
      "El cálculo de $n$ es inversamente proporcional al cuadrado del efecto detectable ($n \\propto 1/\\delta^2$).",
      "Si se duplica el MDE a detectar ($\\delta$), el tamaño muestral necesario debe duplicarse.",
      "Si se reduce el MDE, esto aumenta la potencia sin necesidad de aumentar $n$.",
      "El MDE solo afecta a análisis cualitativos, no cuantitativos."
    ],
    "c": [
      0
    ],
    "exp": "Esta relación es crítica: si un investigador desea detectar un efecto más pequeño (reducir $\\delta$), debe aumentar drásticamente el tamaño muestral ($n$) para mantener la misma potencia. La fórmula clave muestra $n \\propto 1/\\delta^2$."
  },
  {
    "q": "¿Cuál es la interpretación correcta de la Potencia Estadística $\\text{1} - \\beta$?",
    "opts": [
      "Es el riesgo de rechazar $H_0$ cuando es verdad (Error Tipo I).",
      "Mide la probabilidad de aceptar $H_0$ cuando es falsa.",
      "Representa la probabilidad de detectar un efecto realmente existente en la población bajo ciertas condiciones muestrales.",
      "Indica la fuerza del estadístico de prueba utilizado."
    ],
    "c": [
      0
    ],
    "exp": "La potencia (1-$\\beta$) es la capacidad del test para rechazar correctamente la hipótesis nula ($H_0$) cuando en realidad la hipótesis alternativa ($H_1$) es verdadera. Es decir, es la probabilidad de detectar el efecto si existe."
  },
  {
    "q": "En el contexto del análisis de potencia, ¿qué representa un nivel de significancia $\\alpha$?",
    "opts": [
      "La probabilidad de cometer un error tipo I (falso positivo).",
      "La probabilidad de cometer un Error Tipo II ($\\beta$) en la prueba.",
      "El umbral máximo para rechazar la hipótesis nula ($H_0$).",
      "La capacidad real del estudio para detectar un efecto pequeño."
    ],
    "c": [
      0
    ],
    "exp": "El nivel $\\alpha$ es la probabilidad máxima que estamos dispuestos a aceptar de rechazar $H_0$ cuando en realidad es cierta. Esto corresponde al Error Tipo I ($\\alpha$). El Error Tipo II ($\\beta$) y la Potencia ($1-\\beta$) son conceptos distintos."
  },
  {
    "q": "¿Cuál es el significado estadístico del valor $d$ de Cohen?",
    "opts": [
      "Es una métrica estandarizada que permite comparar tamaños de efectos en diferentes unidades de medida.",
      "Mide la diferencia entre las medias normalizadas por la desviación estándar combinada.",
      "Indica qué tan grande debe ser el efecto para que sea significativo.",
      "Solo es aplicable cuando se compara un grupo con un valor conocido."
    ],
    "c": [
      0
    ],
    "exp": "El $d$ de Cohen es la razón (ratio) entre el tamaño del efecto y la desviación estándar. Su gran utilidad reside en estandarizarlo, permitiendo que un 'efecto mediano' ($d=0.5$) se interprete independientemente si estamos midiendo ingresos o notas."
  },
  {
    "q": "¿Cuál de los siguientes enunciados sobre la Potencia estadística es correcto?",
    "opts": [
      "Representa $P(rechazar H_0 | H_1 \\text{ verdadera})$.",
      "Es el complemento del Error Tipo II ($1-\\beta$).",
      "Aumenta al aumentar el tamaño muestral ($n$) o el tamaño del efecto ($\\delta$).",
      "Depende únicamente de la distribución poblacional, sin importar $n$."
    ],
    "c": [
      0
    ],
    "exp": "La potencia es la probabilidad correcta de rechazar $H_0$ cuando $H_1$ es verdadera. Su aumento está directamente relacionado con mayor $n$ o mayor $\\delta$, haciendo que el estudio sea más sensible al efecto real."
  },
  {
    "q": "¿Cuál debe ser el principal objetivo al determinar el tamaño muestral (análisis a priori)?",
    "opts": [
      "Asegurar que haya suficiente poder para detectar un efecto mínimo deseado (MDE).",
      "Estimar la varianza ($\\sigma^2$) de la población.",
      "Determinar si los datos recolectados son estadísticamente significativos.",
      "Calcular el $p$-valor más bajo posible."
    ],
    "c": [
      0
    ],
    "exp": "El análisis a priori es fundamental porque nos obliga, *antes* de recolectar datos, a establecer cuántos participantes necesitamos ($n$) para tener una potencia adecuada al detectar un efecto que consideramos clínicamente o teóricamente relevante (MDE)."
  },
  {
    "q": "¿Qué representa la Potencia estadística en el contexto de una prueba de hipótesis?",
    "opts": [
      "La probabilidad de aceptar $H_0$ cuando es verdadera.",
      "La probabilidad de rechazar $H_0$ cuando en realidad $H_1$ es cierta.",
      "El nivel máximo de significancia ($\\alpha$) utilizado en la prueba.",
      "La magnitud del efecto observado entre grupos."
    ],
    "c": [
      0
    ],
    "exp": "La Potencia estadística ($1-\\beta$) es la probabilidad de detectar un efecto (rechazar $H_0$) si realmente existe un efecto (si $H_1$ es verdadera). Una potencia alta significa que el estudio tiene una buena capacidad para encontrar lo que está ahí."
  },
  {
    "q": "¿Cuál es el estándar aceptado generalmente para la Potencia estadística en investigación?",
    "opts": [
      "0.80",
      "0.95",
      "0.70",
      "0.60"
    ],
    "c": [
      0
    ],
    "exp": "Aunque depende del campo, un nivel de potencia de 0.80 (o 80%) es el estándar mínimo generalmente aceptado en la mayoría de las disciplinas científicas."
  },
  {
    "q": "¿Cuál es la implicación más seria al realizar un análisis de Potencia *post-hoc*?",
    "opts": [
      "Que puede llevar a conclusiones engañosas y sesgadas (razonamiento circular).",
      "Que resulta en un valor $p$ menor a 0.05.",
      "Que siempre requiere aumentar el tamaño muestral.",
      "Que anula la posibilidad de calcular el MDE."
    ],
    "c": [
      0
    ],
    "exp": "El análisis post-hoc es pobre porque se utiliza el resultado estadístico para justificar la potencia, creando un razonamiento circular y sobreestimando la verdadera capacidad del estudio."
  },
  {
    "q": "¿Qué tipo de error ocurre cuando rechazamos la hipótesis nula ($H_0$) cuando en realidad es cierta?",
    "opts": [
      "Error Alfa (Tipo I) ($\\alpha$)",
      "Error Tipo II ($\\beta$)",
      "Error de efecto no detectado",
      "Error de muestreo"
    ],
    "c": [
      0
    ],
    "exp": "Rechazar $H_0$ cuando es verdadera se define como cometer un Error Tipo I, asociado al nivel $\\alpha$. El Error Tipo II ocurre si fallamos en rechazar $H_0$ cuando es falsa."
  },
  {
    "q": "¿Cuál de los siguientes factores NO afecta directamente el cálculo del tamaño muestral necesario?",
    "opts": [
      "Los datos históricos no relacionados con la variable medida.",
      "El Nivel de significancia ($\\alpha$).",
      "La potencia deseada ($1-\\beta$).",
      "El Tamaño del efecto esperado (MDE, $\\delta$)."
    ],
    "c": [
      0
    ],
    "exp": "El tamaño muestral $n$ depende directamente de $\\alpha$, $1-\\beta$, y $\\delta$. Los datos históricos irrelevantes no tienen impacto en el cálculo estadístico."
  },
  {
    "q": "¿Qué significa que un efecto sea considerado 'grande' según la escala estandarizada de Cohen?",
    "opts": [
      "Cohen's d ≥ 0.8",
      "Cohen's d ≈ 0.5",
      "Cohen's d < 0.2",
      "Los tres anteriores son posibles dependiendo del campo."
    ],
    "c": [
      0
    ],
    "exp": "La clasificación estándar (aunque puede variar) es: pequeño (d=0.2), mediano (d=0.5) y grande (d=0.8). Por lo tanto, d ≥ 0.8 indica un efecto grande."
  },
  {
    "q": "¿Qué pasa con el tamaño muestral ($n$) si se duplica la varianza poblacional ($\\sigma^2$)?",
    "opts": [
      "Aumenta cuádruplicando su valor (proporcional a $\\sigma^2$).",
      "Se reduce a la mitad.",
      "No cambia nada.",
      "Disminuye proporcionalmente al cuadrado del doble."
    ],
    "c": [
      0
    ],
    "exp": "Dado que $n \\propto \\sigma^2$, si se duplica la varianza, el tamaño muestral necesario aumenta en un factor de 4 ($2^2$)."
  },
  {
    "q": "¿Cuál es la relación entre el MDE (Minimum Detectable Effect) y el tamaño muestral ($n$), manteniendo $\\alpha$ y Potencia fijos?",
    "opts": [
      "$n \\propto 1/\\delta^2$, o sea, $n$ es inversamente proporcional al cuadrado de $\\delta$.",
      "$n \\propto 1/\\delta$",
      "$n$ no depende del efecto esperado.",
      "$n \\propto \\sqrt{\\delta}$."
    ],
    "c": [
      0
    ],
    "exp": "El tamaño muestral requerido es inversamente proporcional al cuadrado del tamaño del efecto ($\\delta$). Si el efecto esperado se duplica, la potencia detectará ese efecto con 4 veces menos sujetos."
  },
  {
    "q": "¿Qué método es estadísticamente responsable cuando se planea un estudio, requiriendo calcular $n$ antes de la recolección de datos?",
    "opts": [
      "Análisis a priori (calculando tamaño muestral)",
      "Análisis Post-hoc",
      "Revisión de Literatura",
      "Prueba t de Student"
    ],
    "c": [
      0
    ],
    "exp": "El análisis *a priori* es el proceso recomendado para determinar el $n$ necesario antes de empezar, asegurando que el estudio tenga la potencia suficiente."
  },
  {
    "q": "¿Cuáles son los dos criterios principales que definen cuándo un estudio carece de potencia estadística adecuada?",
    "opts": [
      "Si $n$ es insuficiente para detectar el efecto esperado, o si $1-\\beta < 0.8$.",
      "Si $\\alpha$ es muy pequeño y $\\delta$ es muy grande.",
      "Solo si se realiza un análisis post-hoc sin justificación.",
      "Cuando la muestra no cumple con una distribución normal."
    ],
    "c": [
      0
    ],
    "exp": "La falta de potencia ocurre cuando los parámetros (n, $\\delta$) son insuficientes para alcanzar el objetivo deseado de $1-\\beta \\geq 0.8$."
  },
  {
    "q": "¿Qué es un MDE y en qué sentido su cálculo debe realizarse?",
    "opts": [
      "Representa el menor tamaño de efecto que podemos detectar con una potencia dada y $n$ fijo.",
      "Es la medida del tamaño del efecto máximo detectable.",
      "Siempre se calcula después de ver los resultados (post-hoc).",
      "Depende únicamente de la varianza, no del tamaño muestral."
    ],
    "c": [
      0
    ],
    "exp": "El MDE es un cálculo *a priori* que responde a: 'Con este N y esta Potencia, ¿cuál es el efecto más pequeño que puedo detectar?'."
  },
  {
    "q": "¿Cuál es la principal razón para realizar un análisis de potencia a priori?",
    "opts": [
      "Permite determinar el tamaño muestral mínimo necesario antes de recolectar datos.",
      "Establece si los resultados obtenidos son estadísticamente significativos (p < 0.05).",
      "Calcula automáticamente la magnitud del efecto detectado en el campo de estudio.",
      "Se realiza después de haber analizado los datos, ajustando el tamaño muestral."
    ],
    "c": [
      0
    ],
    "exp": "El análisis a priori es fundamental porque obliga al investigador a especificar un tamaño muestral (n) *antes* de ejecutar el estudio. Esto asegura que se tenga la potencia estadística suficiente para detectar un efecto mínimo relevante ($\\delta$), evitando estudios sobredimensionados o insuficientes."
  },
  {
    "q": "¿Qué condiciones deben cumplirse para utilizar correctamente el estadístico $d$ de Cohen?",
    "opts": [
      "Que las variables sean continuas o métricas.",
      "Que se realice una comparación entre dos grupos independientes.",
      "Que la varianza poblacional sea conocida a priori y no haya necesidad de estimarla con muestras pequeñas.",
      "Que los datos sigan estrictamente una distribución normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Cohen's $d$ es útil para estandarizar el tamaño del efecto. Requiere que las variables sean continuas (opción 1) y se aplican típicamente cuando comparamos dos medias independientes (opción 2). La suposición de normalidad es un supuesto general, pero no estrictamente necesaria si los tamaños muestrales son grandes."
  },
  {
    "q": "¿Cuál es la principal diferencia conceptual entre un Error Tipo I ($\\alpha$) y un Error Tipo II ($\\beta$)?",
    "opts": [
      "Error I: Rechazar $H_0$ cuando es verdadera (Falso Positivo).",
      "Error II: Aceptar $H_0$ cuando es falsa (Falso Negativo).",
      "El error $\\alpha$ se controla con el p-value. El error $\\beta$ se controla mediante la potencia.",
      "Los errores son mutuamente excluyentes y se evalúan en momentos distintos del estudio."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Error Tipo I ($\\alpha$) es declarar un efecto cuando no lo hay (la alarma falsa). Error Tipo II ($\\beta$) es no detectar un efecto que realmente sí existe. Controlar $\\alpha$ define la significancia, mientras que controlar $1-\\beta$ define el poder de detección."
  },
  {
    "q": "¿Qué factores tienen una relación directa y positiva con el tamaño muestral ($n$) requerido?",
    "opts": [
      "Aumentar la varianza poblacional ($\\sigma^2$).",
      "Reducir el tamaño del efecto a detectar ($\\delta$).",
      "Incrementar el nivel de significancia ($\\alpha$).",
      "Disminuir la potencia estadística deseada ($1-\\beta$)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Cuanto más grande sea la dispersión ($\\sigma^2$), más datos necesitamos para 'aplanarla'. Cuanto más pequeño es el $\\delta$ que queremos detectar, más difícil es verlo, por lo que se necesita un $n$ mucho mayor. Por lo tanto, $n \\propto \\sigma^2$ y $n \\propto 1/\\delta^2$. No se debe aumentar $\\alpha$ ni disminuir la potencia."
  },
  {
    "q": "¿Qué implicaciones tiene el uso de un análisis de potencia *post-hoc* (después de recolectar datos)?",
    "opts": [
      "Puede mostrar si los resultados son consistentes con una baja potencia esperada.",
      "No se recomienda porque puede llevar a un razonamiento circular (la evidencia se usa para justificar el tamaño muestral).",
      "Se considera estadísticamente válido y es útil para reportar limitaciones del estudio.",
      "Sugiere que se debería haber usado una prueba unilateral."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El análisis *post-hoc* es problemático. No debe usarse para determinar la potencia óptima porque implica usar los resultados obtenidos (evidencia) para justificar el diseño inicial (tamaño de muestra), lo cual es un razonamiento circular y estadísticamente débil."
  },
  {
    "q": "¿Qué dos condiciones son necesarias para realizar un cálculo robusto y ético del tamaño muestral?",
    "opts": [
      "Establecer el nivel de significancia ($\\alpha$) y la potencia deseada (ej. 0.80).",
      "Asumir una distribución normal poblacional sin justificación.",
      "Utilizar exclusivamente datos históricos disponibles en la literatura.",
      "Calcular siempre el MDE basado en $n$ dado."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para un cálculo robusto se necesitan tres elementos: $\\alpha$, potencia ($1-\\beta$), y el tamaño del efecto ($\\delta$). Si bien la opción (0) contiene los dos más críticos, la opción (2) enfatiza que debe asumirse una distribución normal cuando se usan las fórmulas Z/T. Ambas son requeridas para definir el problema correctamente, pero en términos de *parámetros* definitorios: $\\alpha$ y Potencia.\n(Nota: Se seleccionan [0] y [2] ya que la combinación completa de parámetros es fundamental.)"
  },
  {
    "q": "¿Cuáles de los siguientes criterios influyen directamente en la determinación del tamaño muestral ($n$)?",
    "opts": [
      "El nivel alfa ($\\alpha$), potencia deseada, y el tamaño del efecto ($\\delta$).",
      "La relación entre varianza poblacional ($\\sigma^2$) y el cuadrado del efecto ($\\delta^2$).",
      "Si se está realizando un test de mediana en lugar de medias.",
      "Determinar la dirección del test (unilateral vs bilateral)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los elementos clave que entran en las fórmulas son $\\alpha$, Potencia y $\\delta$. Además, el tamaño muestral es directamente proporcional a la varianza ($\\sigma^2$) e inversamente proporcional al cuadrado del efecto ($\\delta^2$), como se ve en $n \\propto \\sigma^2 / \\delta^2$."
  },
  {
    "q": "¿Qué cálculos son matemáticamente correctos para determinar el tamaño muestral ($n$) de dos grupos comparados (medias)?",
    "opts": [
      "Utilizar la fórmula que incorpora $\\alpha$, $\\beta$, $\\sigma^2$ y $\\delta$.",
      "Asegurar que $n$ sea ajustado por tasas de pérdida o no respuesta.",
      "Solo considerar el test unilateral para minimizar muestras.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La fórmula general incluye todos los parámetros. Además, en la práctica, siempre se debe hacer un ajuste por bajas tasas de recuperación ($n' = n / (1 - \\text{tasa})$), lo cual es un paso metodológico esencial."
  },
  {
    "q": "¿Qué conceptos estadísticos están intrínsecamente relacionados con el concepto de Potencia estadística?",
    "opts": [
      "El Error Tipo II ($\\beta$), la prueba de hipótesis y la distribución muestral.",
      "Solo los tamaños muestrales grandes (Ley de los Grandes Números).",
      "La mediana, la moda y la desviación estándar poblacional.",
      "Los intervalos de confianza de $\\alpha$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Potencia está intrínsecamente ligada al error Tipo II ($\\beta$), ya que $\\text{Power} = 1 - \\beta$. También depende críticamente de la distribución muestral y del tamaño $n$. Por otro lado, el análisis post-hoc es incorrecto (opción [2] contiene errores conceptuales comunes en el contexto estadístico avanzado)."
  },
  {
    "q": "¿Cuáles son las implicaciones prácticas o matemáticas correctas al modificar los parámetros de un estudio?",
    "opts": [
      "Duplicar $\\sigma^2$ requiere cuadruplicar $n$.",
      "Aumentar la potencia (manteniendo $\\alpha$) aumenta el tamaño muestral ($n$).",
      "Reducir $\\delta$ reduce el tamaño muestral requerido.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las proporciones son: $n \\propto \\sigma^2$, por lo que duplicar $\\sigma^2$ cuadruplica $n$. Además, aumentar la potencia (ej. de 0.80 a 0.90) requiere un $n$ mayor para mantener el mismo poder en detección de $\\delta$. Disminuir $\\delta$ SIEMPRE aumenta $n$, no lo reduce."
  },
  {
    "q": "¿Qué parámetros deben ser considerados al analizar las curvas estadísticas y la planificación muestral?",
    "opts": [
      "Nivel alfa ($\\alpha$), Potencia ($1-\\beta$) y el MDE deseado.",
      "La distribución subyacente de los datos (normal, binomial, etc.).",
      "El tamaño de la población total (efecto finito) o si es infinito.",
      "Si usar un test t en lugar de Z."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tres parámetros fundamentales para cualquier análisis de potencia son $\\alpha$, Potencia y MDE ($\\delta$). Además, la elección del test depende de la distribución de los datos (normalidad o no normalidad), lo cual afecta qué fórmula usar."
  },
  {
    "q": "¿Qué afirmaciones representan procedimientos estadísticos válidos respecto a la comparación de grupos?",
    "opts": [
      "La proporción $n$ para un test unilateral será menor que en uno bilateral, manteniendo $\\alpha$.",
      "El uso de G*Power o R (pwr) es el método recomendado para los cálculos.",
      "Solo se deben usar tests paramétricos si la muestra tiene más de 30 individuos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Matemáticamente, un test unilateral exige menos potencia y por ende menor $n$ que uno bilateral. Usar software específico es lo correcto. La regla N>30 es solo una guía heurística y no un criterio estricto de validez paramétrica."
  },
  {
    "q": "¿Qué cálculos son necesarios para determinar si los resultados obtenidos en un estudio aleatorio son confiables?",
    "opts": [
      "Calcular el Intervalo de Confianza (IC) alrededor de las estimaciones.",
      "Determinar el $p$-valor asociado al estadístico calculado.",
      "Evaluar la potencia con análisis post-hoc para ver qué efectos se detectaron.",
      "Realizar una prueba de significancia en la varianza."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La confiabilidad se evalúa mediante ICs (que dan un rango plausible) y calculando el $p$-valor. El análisis post-hoc para potencia es incorrecto por ser circular; solo se recomienda a priori."
  },
  {
    "q": "¿Cuál debe ser la principal consideración al elegir la técnica para determinar el tamaño muestral?",
    "opts": [
      "Debe definirse de antemano: $\\alpha$, potencia objetivo (ej. 0.80) y MDE ($\\delta$) deseado",
      "La decisión sobre el tamaño muestral depende más de la disponibilidad de recursos que de la estadística",
      "Siempre se debe calcular $n$ utilizando un análisis post-hoc si los resultados son interesantes",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El cálculo de $n$ debe ser *a priori* (opción 1 correcta). Se deben fijar los tres parámetros clave: $\\alpha$, potencia deseada y el MDE esperado ($\\delta$). La opción 2 es la definición perfecta del objetivo del análisis."
  },
  {
    "q": "¿Qué variables influyen en la necesidad de un gran tamaño muestral?",
    "opts": [
      "Mayor variabilidad poblacional ($\\sigma^2$) requiere más sujetos",
      "Un efecto muy pequeño ( $\\delta$ bajo) hace que el cálculo sea mucho más difícil y requiera $n$ grande",
      "Aumentar el nivel de significancia $(\\alpha)$ facilita la detección de efectos",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Mayor $\\sigma^2$ o menor $\\delta$ hacen que la distribución muestral sea más dispersa, haciendo que diferenciar los grupos sea difícil y requiriendo $n$ mayor. Aumentar $\\alpha$ (hacerlo menos estricto) facilita el rechazo de $H_0$, pero esto es un compromiso ético/estadístico."
  },
  {
    "q": "¿Cuáles son las principales implicaciones de realizar un análisis post-hoc en lugar de uno a priori?",
    "opts": [
      "Sesgo y razonamiento circular",
      "Subestimación del poder real",
      "Mayor precisión estadística requerida",
      "No requiere estimación de $\\alpha$"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El análisis post-hoc es propenso a sesgos (razonamiento circular), ya que se calcula $n$ basado en resultados *observados*, no en la hipótesis. Esto tiende a subestimar el poder real necesario o sobrestimar el efecto."
  },
  {
    "q": "¿Qué fenómeno describe la curva característica operativa (OC) en relación con la hipótesis nula?",
    "opts": [
      "La probabilidad de rechazar $H_0$ bajo las condiciones reales del efecto ($H_1$).",
      "El sesgo esperado si el tamaño muestral es pequeño.",
      "Muestra cómo la prueba se comporta a medida que cambia el verdadero valor del parámetro ($\\delta$).",
      "Solo aplica para pruebas parametrizadas."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La curva OC muestra el rendimiento de un test (probabilidad de rechazar $H_0$) en función del verdadero valor del parámetro. Si la curva se eleva por encima de $\\alpha$, indica que el efecto es estadísticamente significativo."
  },
  {
    "q": "¿Qué significa un exponente de Potencia bajo, como 0.60?",
    "opts": [
      "Hay un riesgo muy alto de cometer Error Tipo II ($\\beta = 0.4$).",
      "El estudio tiene una capacidad limitada para detectar efectos reales.",
      "Se requiere aumentar el tamaño muestral ($n$) o aumentar el MDE esperado.",
      "Indica que la hipótesis nula es probablemente falsa."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Una potencia baja (ej. 60%) implica un $\\beta$ alto (40%). Esto significa que existe una alta probabilidad de fallar en rechazar $H_0$, incluso si el efecto ($H_1$) está presente. La solución es aumentar $n$ o $\\delta$."
  },
  {
    "q": "¿Cuáles son los efectos del diseño de la prueba en el cálculo del tamaño muestral?",
    "opts": [
      "El aumento de varianza ($\\sigma^2$) exige un incremento proporcional de $n$.",
      "Un test bilateral requiere siempre mayor $n$ que uno unilateral para $\\alpha$ fijo.",
      "Los tests unilaterales requieren menor potencia y n que los bilaterales.",
      "La elección del test (t vs Z) afecta la fórmula, pero no el principio a priori."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tests unilaterales son menos exigentes estadísticamente y requieren menor $n$. Además, si la varianza aumenta ($\\sigma^2$), el error estándar también aumenta, lo que exige un mayor tamaño muestral para mantener la misma potencia."
  },
  {
    "q": "¿Qué conceptos se deben considerar al interpretar la curva de Potencia?",
    "opts": [
      "Un valor alto en el eje X indica que es más fácil rechazar $H_0$.",
      "La pendiente de la curva muestra cómo cambia la potencia con $\\delta$ para un $n$ fijo.",
      "El eje Y representa la probabilidad de error Tipo II ($\\beta$).",
      "Necesita una comparación con un umbral crítico dado por $\\alpha$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El eje Y DEBE representar la Potencia ($1-\\beta$), no el error Tipo II ($\\beta$). La pendiente muestra cómo aumenta la potencia a medida que nos alejamos de $H_0$."
  },
  {
    "q": "¿Qué pasos deben seguirse si se realiza un análisis post-hoc y los resultados son nulos?",
    "opts": [
      "Reportar las limitaciones del diseño estadístico (falta de poder).",
      "Realizar múltiples comparaciones hasta encontrar significancia.",
      "Reajustar $\\alpha$ para intentar detectar el efecto.",
      "Aumentar artificialmente la potencia reportada."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si se encuentra un resultado nulo después de haber calculado el tamaño muestral incorrectamente, no se debe manipular $\\alpha$ ni la potencia. Se deben reportar las limitaciones (falta de poder) y reconocer que el estudio careció del diseño adecuado."
  },
  {
    "q": "¿Cuál debe ser el objetivo al plantear un estudio estadístico robusto en términos de potencia?",
    "opts": [
      "Asegurar que $n$ sea lo suficientemente grande para justificar la inversión.",
      "Mantener los errores Tipo I y Tipo II por debajo de niveles aceptables.",
      "Lograr una potencia de 0.95 o superior.",
      "Obtener resultados estadísticamente insignificantes."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El objetivo principal es garantizar suficiente potencia (idealmente $\\geq 0.80$) para reducir el riesgo de Error Tipo II ($\\beta$). Esto se logra manteniendo controlados tanto el error tipo I como el error tipo II."
  },
  {
    "q": "¿Cómo afecta una mayor variabilidad poblacional ($\\sigma^2$) al tamaño muestral requerido ($n$)?",
    "opts": [
      "Aumenta linealmente $n$.",
      "Requiere un aumento proporcional en $n$, ya que $n \\propto 1/\\sigma^2$.",
      "Disminuye la potencia del test.",
      "Indica que el efecto es inherentemente más pequeño."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Dado que $\\sigma^2$ está en el numerador de la fórmula (o su inverso), un aumento en la variabilidad ($\\sigma$) implica que la señal del efecto se diluye. Por lo tanto, para mantener la potencia y el tamaño del efecto constantes, $n$ debe aumentar significativamente (proporcionalmente)."
  },
  {
    "q": "¿Qué tipo de análisis es estadísticamente más defensible cuando se busca determinar si un estudio tiene suficiente poder?",
    "opts": [
      "Analizar la potencia antes de recoger datos (A priori).",
      "Calcular el MDE con los recursos disponibles.",
      "Ejecutar pruebas post-hoc para justificar el tamaño.",
      "Depender únicamente de la experiencia previa del investigador."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El análisis a priori es el más defendible porque establece las condiciones necesarias *antes* del estudio. Calcular un MDE (lo que se puede detectar) también es una práctica metodológica sólida en esta fase."
  },
  {
    "q": "¿Qué representan las curvas características operativas (OC) en el análisis de potencia?",
    "opts": [
      "La probabilidad de cometer Error Tipo I.",
      "El rendimiento relativo de la prueba estadística a medida que varía el tamaño del efecto ($\\delta$).",
      "La relación directa entre $\\alpha$ y $1-\\beta$.",
      "Una representación gráfica de la distribución normal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Las curvas OC grafican la probabilidad de rechazar $H_0$ (la potencia) en función del tamaño del efecto ($\\delta$). Mostrarán que la potencia aumenta a medida que $\\delta$ se aleja de cero y con el aumento de $n$. La opción [2] es incorrecta porque no hay una relación directa, sino que ambas son parámetros de diseño."
  },
  {
    "q": "¿Cuándo es estadísticamente correcto utilizar un test unilateral (una cola) en lugar de uno bilateral?",
    "opts": [
      "Cuando la teoría o el conocimiento previo indican claramente la dirección esperada del efecto.",
      "Si se sabe con certeza que los grupos no varían significativamente entre sí ($\\sigma_1 = \\sigma_2$).",
      "Siempre es mejor usar un test unilateral para aumentar artificialmente la potencia.",
      "Cuando solo se compara una muestra contra su media histórica."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Es apropiado usar un test unilateral cuando la hipótesis tiene una dirección esperada (ej. esperamos que el medicamento *aumente* los valores). Esto reduce $\\alpha$ (y por lo tanto $n$), pero solo si esta direccionalidad es respaldada teóricamente. No se debe hacer para aumentar artificialmente la potencia."
  },
  {
    "q": "¿Cuál es el propósito principal de calcular $d$ de Cohen en el diseño de estudios:",
    "opts": [
      "Estimar la varianza poblacional ($\\sigma^2$).",
      "Cuantificar y estandarizar la magnitud del tamaño del efecto esperado, independientemente de las unidades originales.",
      "Determinar si los datos siguen una distribución normal.",
      "Reemplazar completamente el cálculo estadístico por un valor simple."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Cohen's $d$ es esencial porque estandariza la diferencia entre medias. Nos permite comparar si la magnitud de un efecto (por ejemplo, 5 puntos) es comparable a otro en una escala común (número de desviaciones estándar). Su cálculo es $(\\bar{X}_1 - \\bar{X}_2)/\\sigma_{p}$."
  },
  {
    "q": "¿Cuál es el impacto del aumento de la varianza ($\\sigma^2$) en un estudio de comparación de medias?",
    "opts": [
      "El tamaño muestral ($n$) requerido aumenta drásticamente para mantener la potencia.",
      "La magnitud del efecto estandarizado ($d$) disminuye, haciéndolo más difícil de detectar.",
      "Aumenta el Error Tipo I ($\\alpha$), haciendo la detección menos precisa.",
      "Solo afecta a cálculos descriptivos, no inferenciales."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si aumenta $\\sigma^2$, los datos están más dispersos. Esto 'diluye' la diferencia entre grupos, lo que se refleja en una disminución de $d$ y, crucialmente, requiere un aumento significativo del tamaño muestral ($n$) para poder mantener el mismo nivel de potencia."
  },
  {
    "q": "¿Cuál es la relación matemática correcta entre los parámetros en el cálculo del tamaño muestral (para dos medias)?",
    "opts": [
      "$n = 2(z_{\\alpha/2} + z_{\\beta})^2 \\cdot \\sigma^2 / \\delta^2$.",
      "$d = (\\bar{X}_1 - \\bar{X}_2) / \\sigma_p$.",
      "$MDE = n / (1-tasa)$.",
      "$\\text{Potencia} = 1 - \\frac{\\alpha}{\\beta}$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Se incluyen las dos fórmulas fundamentales: $n$ para el cálculo de tamaño muestral y $d$ para estandarizar el efecto. Las otras opciones mezclan conceptos o son incorrectas."
  },
  {
    "q": "¿Qué papel juega la distribución del poder en los diferentes niveles de significancia ($\\alpha$)?",
    "opts": [
      "Un $\\alpha$ más pequeño (ej. 0.01) requerirá un tamaño muestral mayor para mantener la potencia deseada.",
      "La elección de $\\alpha$ y $1-\\beta$ son parámetros independientes que se ajustan mutuamente.",
      "Reducir el nivel de significancia siempre aumenta automáticamente el poder estadístico.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si reducimos $\\alpha$ (ej. pasar de 0.05 a 0.01), hacemos la prueba más estricta, lo cual reduce el área de rechazo y, por ende, aumenta la dificultad para detectar un efecto, requiriendo un mayor $n$. Son parámetros interdependientes."
  },
  {
    "q": "¿Qué se debe entender cuando se utiliza G*Power o R (pwr) en análisis estadístico?",
    "opts": [
      "Estos programas realizan cálculos de potencia y tamaño muestral basados en fórmulas analíticas.",
      "Permiten visualizar la curva de potencia y evaluar trade-offs entre $n$, $\\alpha$, $\\beta$ y $\\delta$.",
      "Son herramientas que solo funcionan con datos normales, ignorando otras distribuciones.",
      "Son sustitutos directos del conocimiento teórico estadístico."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Estos softwares son herramientas prácticas que aplican las fórmulas teóricas. Son muy útiles porque permiten visualizar cómo interactúan los parámetros (curva de potencia) en lugar de solo calcular un número."
  },
  {
    "q": "¿Cuál es el principal riesgo metodológico al realizar análisis post-hoc de potencia?",
    "opts": [
      "Que el investigador confunda la falta de detección con la prueba de una hipótesis nula verdadera (razonamiento circular).",
      "Que se pierda poder estadístico.",
      "Que los cálculos sean más complejos que un análisis a priori.",
      "Que los resultados obtenidos sean automáticamente considerados erróneos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El riesgo principal es el razonamiento circular: usar el resultado no detectado para 'justificar' retroactivamente por qué el estudio debió haber sido más grande. El software solo informa sobre la potencia *requerida*, no justifica el fracaso."
  },
  {
    "q": "¿Cuál es el principio estadístico que rige la relación entre el tamaño muestral ($n$) y el tamaño del efecto ($\\delta$)?",
    "opts": [
      "Si se duplica $\\delta$, se debe cuadruplicar el tamaño muestral ($n$).",
      "Para mantener la potencia, si el efecto detectable ($\\delta$) se reduce a la mitad, el tamaño muestral requerido aumenta cuatro veces ($n \\propto 1/\\delta^2$).",
      "El $n$ es directamente proporcional al cuadrado de $\\sigma^2$.",
      "La relación entre $n$ y $\\delta$ es lineal."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El tamaño muestral necesario es inversamente proporcional al cuadrado del tamaño del efecto ($n \\propto 1/\\delta^2$). Por lo tanto, si el investigador necesita detectar un efecto que es cuatro veces más pequeño (reducción de $\\delta$ a la mitad), deberá aumentar $n$ por un factor de $2^2 = 4$. Esta relación es crucial para la planificación del estudio."
  },
  {
    "q": "¿Cuál es la implicación práctica si se realiza un análisis de potencia 'post-hoc'?",
    "opts": [
      "Puede dar información sobre el riesgo de errores tipo II pasados.",
      "Generalmente es poco recomendado porque puede llevar a conclusiones circulares o exageradas, ya que $n$ y $\\delta$ se determinan por resultados obtenidos.",
      "Es una forma estadísticamente robusta de evaluar el poder.",
      "Solo debe utilizarse si los datos provienen de un diseño experimental complejo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El análisis post-hoc (calcular potencia después de obtener n) es controvertido. Aunque puede mostrar el poder observado, no es recomendado para la toma de decisiones sobre el tamaño muestral futuro porque se corre el riesgo de sesgo y asumir que los datos son perfectamente representativos."
  },
  {
    "q": "¿Cómo afecta cambiar de un test bilateral a uno unilateral (unidireccional) al cálculo del tamaño muestral ($n$)?",
    "opts": [
      "Permite reducir significativamente $n$, ya que se requiere menos evidencia para rechazar $H_0$.",
      "Solo es apropiado si hay una teoría muy fuerte que predice la dirección del efecto.",
      "Disminuye la necesidad de $\\sigma^2$ en el cálculo.",
      "No afecta el valor de $n$, solo la interpretación del p-valor."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un test unilateral (ej. $\\mu > \\mu_0$) utiliza solo un extremo de la distribución crítica, lo que resulta en un valor Z más pequeño para el mismo $\\alpha$ y, por ende, requiere menos potencia o $n$. No obstante, su uso debe estar justificado teóricamente."
  },
  {
    "q": "¿Qué significa el concepto MDE (Minimum Detectable Effect) en la práctica estadística?",
    "opts": [
      "El efecto más pequeño que puede ser detectado con alta potencia y tamaño muestral dado.",
      "Representa el umbral clínico o teórico de interés mínimo para la investigación:",
      "Es un valor arbitrario utilizado solo por los revisores de artículos.",
      "Indica el error estándar máximo permitido en la estimación."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El MDE es el tamaño del efecto más pequeño que esperamos ser capaces de detectar con un nivel de potencia deseado (ej. 80%) y el tamaño muestral asignado. Su definición debe estar basada en criterios clínicos o teóricos, no estadísticos."
  },
  {
    "q": "¿Cuál es el objetivo principal al analizar la Curva de Potencia?",
    "opts": [
      "Graficar la relación entre la potencia y el tamaño del efecto ($\\delta$), manteniendo $n$ fijo.",
      "Permite visualizar cómo varía el poder estadístico si se cambia el MDE. Debe ser creciente en $\\delta$.",
      "Sirve para determinar el nivel de significancia óptimo ($\\alpha$).",
      "Solo es relevante para análisis multivariados complejos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La curva de potencia grafica la Potencia (eje Y) contra el tamaño del efecto ($\\delta$) en el eje X. Su objetivo principal es mostrar que la potencia aumenta a medida que se incrementa el MDE detectado, lo cual ayuda al diseño experimental."
  },
  {
    "q": "¿Qué pasos son necesarios para una correcta interpretación de las Curvas Característica Operativa (OC)?",
    "opts": [
      "El punto medio entre los valores $H_0$ y $H_1$ es la región crítica.",
      "La curva muestra el comportamiento esperado del estadístico bajo ambas hipótesis, permitiendo estimar $\\alpha$.",
      "Permite calcular *a posteriori* la potencia de un diseño ya establecido sin sesgos.",
      "Ayuda a determinar si los datos se desvían significativamente de $H_0$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La curva OC es esencial para entender el proceso de toma de decisiones. Muestra cómo se comportaría la distribución del estadístico bajo ambas hipótesis ($H_0$ y $H_1$). La distancia entre estas curvas nos ayuda a estimar $\\alpha$. Su interpretación no debe ser solo diagnóstica, sino también predictiva."
  },
  {
    "q": "¿Qué condiciones se deben cumplir para realizar correctamente un cálculo de Potencia?",
    "opts": [
      "Tener fijado el nivel de significancia ($\\alpha$).",
      "Estimar preliminarmente el tamaño del efecto deseado (MDE, $\\delta$).",
      "Conocer la variabilidad poblacional ($\\sigma^2$) o al menos una estimación fiable.",
      "Realizar siempre un análisis post-hoc para justificar $n$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para calcular potencia se necesitan tres pilares: el nivel de riesgo $\\alpha$, el tamaño del efecto deseado ($\\delta$), y la variabilidad ($\\sigma^2$). Además, es crucial realizarlo *a priori*, no post-hoc. Sin embargo, el último punto (post-hoc) es una condición que NO debe cumplirse."
  },
  {
    "q": "¿Cuál es la relación correcta entre las variables al calcular $n$?",
    "opts": [
      "Aumentar $\\delta$ disminuye el tamaño muestral requerido ($n$).",
      "Disminuir $\\sigma^2$ (varianza) aumenta el tamaño muestral requerido ($n$).",
      "La potencia está directamente relacionada con $\\alpha$.",
      "Si se duplica $n$, la sensibilidad del test también se duplicará."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La fórmula muestra que $n \\propto 1/\\delta^2$ (si el efecto aumenta, necesitamos menos muestras) y $n \\propto \\sigma^2$ (a mayor dispersión, más datos necesitamos para 'ver' la señal. Los test son independientes de $\\alpha$, salvo en su definición de error I)."
  },
  {
    "q": "¿Qué implica utilizar una Curva Característica Operativa (OC)?",
    "opts": [
      "Visualizar el riesgo de cometer un Error Tipo II ($\\beta$) a medida que aumenta el tamaño del efecto detectado.",
      "Mostrar la probabilidad de rechazar $H_0$ bajo las condiciones reales de los datos (es decir, si $H_1$ es cierta).",
      "Confirmar visualmente la relación entre potencia y tamaño muestral ($n$).",
      "Sustituir por completo el cálculo estadístico formal de la potencia."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Curva OC grafica $\\beta$ en función de $\\delta$. Un valor bajo de $\\beta$ (y por lo tanto alta potencia) significa que la curva se aleja rápidamente de $H_0$, confirmando que el test es muy sensible a detectar el efecto."
  },
  {
    "q": "¿Cuál es la interpretación correcta del análisis post-hoc en términos de diseño experimental?",
    "opts": [
      "Implica razonar sobre el tamaño necesario *después* de haber encontrado un resultado significativo.",
      "No debe usarse para determinar $n$, ya que es un argumento circular (la significancia justifica la muestra, y viceversa).",
      "Permite calcular un tamaño muestral más preciso al usar datos reales.",
      "Solo puede hacerse si se ha utilizado algún tipo de corrección por múltiples comparaciones."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El análisis post-hoc no tiene valor predictivo para el diseño. Si usted encuentra $p < 0.05$, es tentador 'justificar' la muestra con ese dato; sin embargo, esto crea un razonamiento circular y sesgado (se recomienda $\\alpha$ a priori)."
  },
  {
    "q": "¿Qué sucede al modificar los parámetros de una prueba de hipótesis?",
    "opts": [
      "Aumentar el tamaño muestral ($n$) aumenta la potencia.",
      "Incrementar el MDE ($\\delta$) requiere un menor tamaño muestral para mantener la misma potencia.",
      "Reducir el nivel $\\alpha$ disminuye la potencia, manteniendo $n$ y $\\delta$ constantes.",
      "El uso de software como G*Power o R es obligatorio para todos los cálculos."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La relación fundamental es: más $n$, más Potencia. Si aumenta el MDE ($\\delta$), significa que estamos buscando un efecto *mayor*; por lo tanto, requerimos menos muestras ($n$) para detectarlo con la misma potencia deseada."
  },
  {
    "q": "¿Cuáles son las implicaciones al comparar pruebas estadísticas?",
    "opts": [
      "Un test unilateral siempre requiere un $n$ menor que un test bilateral.",
      "El software (R o G*Power) simplifica la aplicación de fórmulas complejas.",
      "La potencia está intrínsecamente ligada a la hipótesis nula ($H_0$).",
      "Cuanto más grande sea el $\\alpha$, mayor será el poder estadístico."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Comparativamente, los test unilaterales son menos exigentes en $n$ que los bilaterales. La potencia no está ligada a la $H_0$, sino al rechazo de esta; y sí, software es clave para evitar errores manuales."
  },
  {
    "q": "¿Qué conceptos se relacionan directamente con el riesgo de error estadístico?",
    "opts": [
      "Error Tipo I ($\\alpha$): Rechazar $H_0$ cuando es verdadera.",
      "Error Tipo II ($\\beta$): No rechazar $H_0$ cuando es falsa.",
      "Potencia ($1-\\beta$): La probabilidad de no cometer Error Tipo II.",
      "El valor $p$: Probabilidad de los datos bajo $H_0$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los errores I y II son complementarios: $\\alpha$ mide el riesgo de falsa alarma, mientras que $\\beta$ es el riesgo de ignorar un efecto real. La Potencia simplemente cuantifica la probabilidad de evitar ese segundo error ($\\beta$). El valor $p$ es una métrica descriptiva basada en los datos observados."
  },
  {
    "q": "¿Qué características definen correctamente un análisis robusto y ético?",
    "opts": [
      "Establecer el tamaño muestral ($n$) antes de la recolección de datos.",
      "Asumir que la variabilidad poblacional ($\\sigma^2$) es constante en las muestras.<br>",
      "Considerar posibles pérdidas o no respuestas (ajuste $n'$).",
      "Depender únicamente del criterio clínico para determinar el MDE."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Un diseño robusto exige saber de antemano cuántos sujetos son necesarios ($n$ a priori) y tener estimaciones fiables de $\\sigma^2$. El ajuste por pérdidas (pérdida de datos) es una práctica metodológica esencial."
  },
  {
    "q": "¿Cuáles son los dos parámetros fundamentales que deben fijarse *a priori* para calcular un tamaño muestral recomendado?",
    "opts": [
      "El nivel $\\alpha$ y la Potencia deseada ($1-\\beta$).",
      "La varianza poblacional ($\\sigma^2$) y el MDE esperado ($\\delta$).",
      "Los resultados esperados del estudio y la población total.",
      "Solo la potencia, ya que esto lo determina todo."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Aunque se necesita $\\alpha$ y $1-\\beta$, los parámetros estadísticos clave para calcular $n$ son el nivel de significancia ($\\alpha$), la potencia ($1-\\beta$) y el tamaño del efecto esperado (MDE o $\\delta$)."
  },
  {
    "q": "¿Qué implica que una Curva de Potencia sea creciente respecto a $\\delta$? ¿Y respecto a $n$?",
    "opts": [
      "Implica que a mayor $\\delta$, mayor es la probabilidad de rechazar $H_0$.",
      "Ambos parámetros ($\\delta$ y $n$) deben aumentar para mejorar la potencia.",
      "Implica que a menor $n$, se puede detectar cualquier efecto.",
      "Solo aumenta si el test es unilateral."
    ],
    "c": [
      0,
      1
    ],
    "exp": "La Curva de Potencia debe ser creciente: Aumentar el tamaño del efecto ($\\delta$) hace que sea más fácil detectarlo (mayor potencia), y aumentar el tamaño muestral ($n$) también incrementa la potencia."
  },
  {
    "q": "¿Qué implicación tiene tener que realizar múltiples comparaciones en un mismo estudio (e.g., 10 grupos)?",
    "opts": [
      "Requerir correcciones estadísticas (como Bonferroni) y reducir la potencia efectiva.",
      "No afecta significativamente al cálculo del tamaño muestral.",
      "Aumentar la potencia de los resultados.",
      "Disminuir el error Tipo I real (inflar $\\alpha$)."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Múltiples comparaciones aumentan el riesgo de Error Tipo I (inflar $\\alpha$). Esto obliga a realizar correcciones estadísticas que, en sí mismas, disminuyen o ajustan la potencia efectiva."
  },
  {
    "q": "¿Cómo afecta la forma del test estadístico (unilateral vs bilateral) al cálculo del tamaño muestral?",
    "opts": [
      "Un test unilateral siempre requiere un $n$ menor que un test bilateral para detectar el mismo $\\delta$.",
      "En un test bilateral, los grados de libertad se distribuyen en ambas colas, requiriendo más datos.",
      "La diferencia es marginal y generalmente no impacta la magnitud del cálculo de $n$ si ambos son grandes.",
      "El tipo de cola solo afecta al valor crítico ($z_{\\alpha/2}$), pero el impacto sobre $n$ es considerable."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los tests unilaterales (ej. $\\text{Hipótesis: } \\mu > 0$) usan la mitad del poder estadístico en una sola cola. Esto resulta en un valor crítico menor y por lo tanto, requieren un tamaño muestral $n$ significativamente más bajo que los tests bilaterales que distribuyen el riesgo en dos colas."
  },
  {
    "q": "¿Cuáles son las implicaciones prácticas si al planificar un estudio, la varianza ($\\sigma^2$) es difícil de estimar?",
    "opts": [
      "Es mejor asumir una $\\sigma^2$ conservadora (mayor) para sobreestimar $n$.",
      "Se debe utilizar el tamaño muestral calculado basándose en datos piloto, aunque sean pocos.",
      "El aumento en la precisión de las mediciones reducirá automáticamente la varianza y requerirá menos n.",
      "No es posible diseñar un estudio sin conocer o estimar $\\sigma^2$."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si se sobreestima $\\sigma^2$, se sobredimensiona $n$ (es más seguro). El uso de datos piloto es la mejor práctica para estimarlo. La reducción de varianza siempre disminuye el $n$ requerido, lo cual es deseable."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para interpretar correctamente una curva de potencia?",
    "opts": [
      "Definir el nivel de significancia ($\\alpha$) y la potencia deseada (1-$\\beta$)",
      "Estimar previamente el tamaño del efecto ($\\delta$) esperado",
      "Asumir que la relación $n \\propto 1/\\sigma^2$ es lineal",
      "Usar únicamente muestras paramétricas"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para interpretar una curva de potencia (Potencia vs. $\\delta$), se deben fijar el nivel alfa ($\\alpha$) y la potencia deseada. Además, debe haber una estimación previa del tamaño del efecto esperado ($\\delta$). La relación $n \\propto 1/\\sigma^2$ es inversa (si $\\sigma^2$ duplica, $n$ reduce a la mitad), no lineal en términos de proporcionalidad."
  },
  {
    "q": "¿Cuáles son los efectos que se pueden medir con el coeficiente $d$ de Cohen?",
    "opts": [
      "Tamaño del efecto entre medias",
      "Diferencia de proporciones binarias",
      "Correlación simple (Pearson)",
      "Dispersión relativa"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El estadístico $d$ de Cohen se utiliza para estandarizar el tamaño del efecto cuando se comparan dos medias. Aunque existen otras medidas como $\\phi^2$ o z para proporciones, la opción 1 es la aplicación principal y más directa."
  },
  {
    "q": "¿Cuáles son las consecuencias estadísticas si aumentamos el nivel de significancia ($\\alpha$)?",
    "opts": [
      "Aumenta la probabilidad de cometer un error Tipo I",
      "Disminuye la potencia estadística (1-$\\beta$)",
      "Reduce el tamaño muestral necesario para mantener $1-\\beta$",
      "Hace que los valores p sean más pequeños"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Si aumentamos $\\alpha$ (por ejemplo, de 0.05 a 0.10), hacemos más fácil rechazar la hipótesis nula ($H_0$). Esto aumenta el error Tipo I ($\\beta$), lo que automáticamente disminuye la potencia estadística (1-$\\beta$) sin cambiar $n$. También reduce $n$, pero este es un efecto indirecto y no conceptualmente correcto."
  },
  {
    "q": "¿Cuáles son los parámetros fundamentales para calcular el tamaño muestral ($n$)?",
    "opts": [
      "Nivel de significancia ($\\alpha$)",
      "Potencia deseada (1-$\\beta$)",
      "Tamaño del efecto esperado ($\\delta$) o $\\sigma$/$\\delta$",
      "Variabilidad dentro del grupo"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para calcular $n$, siempre necesitamos fijar los tres parámetros clave: el nivel de significancia ($\\alpha$), la potencia deseada (1-$\\beta$), y el tamaño del efecto esperado ($\\delta$) junto con la varianza $\\sigma^2$. La opción 3 es conceptualmente correcta al referirse a la relación $\\sigma/\\delta$."
  },
  {
    "q": "¿Cuáles son las condiciones que permiten reducir el tamaño muestral ($n$)?",
    "opts": [
      "Aumentar significativamente el tamaño del efecto ($\\delta$)",
      "Disminuir la varianza poblacional ($\\sigma^2$) o aumentar $N$",
      "Reducir la potencia estadística requerida",
      "Cambiar de un test bilateral a uno unilateral"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Según las fórmulas, si $\\delta$ aumenta (o si $\\sigma^2$ disminuye), el tamaño muestral ($n$) requerido se reduce drásticamente. Reducir la potencia requerida es incorrecto porque esto implica sacrificar la calidad del estudio y no es una condición metodológica deseable."
  },
  {
    "q": "¿Cuál debe ser la relación entre los parámetros poblacionales para que un análisis de potencia sea válido?",
    "opts": [
      "La varianza ($\\sigma^2$) debe ser conocida y constante",
      "Se deben asumir valores racionales para $\\alpha$, 1-$\\beta$ y $\\delta$",
      "Los datos deben seguir una distribución normal",
      "El tamaño del efecto ($\\delta$) no afecta el cálculo $n$"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para que los cálculos de potencia sean válidos, es crucial establecer o asumir valores iniciales (el 'plan' estadístico) para $\\alpha$, la potencia y $\\delta$. Aunque se prefiere saber $\\sigma^2$, si no se sabe, se debe estimar. La suposición de normalidad es un requisito de muchos tests paramétricos, pero el impacto más directo en $n$ viene de $\\sigma^2$ y $\\delta$. El tamaño del efecto siempre afecta $n$."
  },
  {
    "q": "¿Qué representan los términos 'Análisis a priori' y 'MDE' respectivamente?",
    "opts": [
      "Determinar n antes del estudio; Mínimo Efecto Detectable",
      "Calcular la potencia esperada; Máxima desviación estándar",
      "Estimación de $\\alpha$; Valor crítico Z",
      "Ejecutar el test; Recurso estadístico"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El análisis a priori es determinar $n$ antes del estudio (recomendado). El MDE (Minimum Detectable Effect) es la menor diferencia ($\\delta$) que podemos detectar con un tamaño muestral fijo y una potencia dada. La opción 2 define ambos conceptos correctamente."
  },
  {
    "q": "¿Cuáles son las principales implicaciones de interpretar el tamaño muestral requerido ($n$)?",
    "opts": [
      "Asegurar el poder estadístico adecuado del estudio",
      "Evitar conclusiones falsos positivos (Error Tipo I)",
      "Garantizar que la variabilidad $\\sigma^2$ sea baja",
      "Minimizar los costos operativos"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El objetivo principal de calcular $n$ es garantizar que el poder estadístico sea suficiente. Evitar errores Tipo I (falsos positivos) depende más del control de $\\alpha$. Si bien una menor varianza ayuda a reducir $n$, esto no es una *implicación* directa; la implicación clave es la capacidad de detectar el efecto ($\\delta$) deseado."
  },
  {
    "q": "¿Cuáles son las principales características y recomendaciones al realizar el cálculo del tamaño muestral ($n$)?",
    "opts": [
      "El análisis a priori es el método recomendado, ya que determina $n$ antes de recolectar datos.",
      "Aumentar la potencia requerida (ej. de 0.80 a 0.90) resulta en un aumento proporcional del tamaño muestral ($n$).",
      "Un mayor nivel de significancia $\\alpha$ (ej. p=0.10 vs p=0.05) siempre reduce el tamaño muestral necesario.",
      "El cálculo post-hoc es estadísticamente robusto y proporciona una estimación fiable del $n$ original."
    ],
    "c": [
      0,
      1
    ],
    "exp": "Es crucial realizar análisis a priori. Aumentar la potencia o disminuir el efecto detectado ($\\delta$) aumenta $n$. Sin embargo, aumentar $\\alpha$ (hacerlo menos estricto) *aumentaría* $n$, por lo que la opción 2 es incorrecta."
  },
  {
    "q": "¿Cuáles métricas estadísticas representan el riesgo de error en las pruebas de hipótesis?",
    "opts": [
      "Error Tipo I ($\\alpha$): Rechazar $H_0$ cuando es verdadera.",
      "Error Tipo II ($\\beta$): Aceptar $H_0$ cuando es falsa.",
      "Potencia: El riesgo residual de no detectar un efecto real en la población.",
      "MDE (Minimum Detectable Effect): La máxima diferencia que el test puede identificar."
    ],
    "c": [
      0,
      1
    ],
    "exp": "El Error Tipo I ($\\alpha$) y el Error Tipo II ($\\beta$) son los errores primarios. La potencia es $1-\\beta$, y MDE no es un error de tipo."
  },
  {
    "q": "¿Qué tipo de información debe conocerse o estimarse idealmente al planificar un análisis de potencia?",
    "opts": [
      "El nivel alfa ($\\alpha$) deseado.",
      "La potencia estadística objetivo ($1-\\beta$).",
      "Una estimación del tamaño del efecto ($\\delta$ o $d$).",
      "La tasa de deserción esperada."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para un análisis *a priori* completo, necesitamos definir el umbral de rechazo ($\\alpha$), la potencia mínima deseada ($1-\\beta$) y el efecto que esperamos detectar ($\\delta$). La inclusión de la tasa de deserción es una práctica recomendada, pero los tres factores anteriores son matemáticamente esenciales."
  },
  {
    "q": "Respecto a los factores que determinan el tamaño muestral necesario ($n$), ¿qué afirmaciones son correctas?",
    "opts": [
      "Si se desea aumentar la potencia o disminuir $\\beta$, el tamaño muestral $n$ debe aumentar.",
      "Si se duplica la varianza ($\\sigma^2$) o el desvío estándar, el tamaño muestral $n$ debe cuadruplicarse (proporcionalidad directa).",
      "Si se aumenta el tamaño del efecto deseado ($\\delta$), el tamaño muestral requerido $n$ disminuye.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La fórmula muestra que $n \\propto \\sigma^2 / \\delta^2$. Si $\\sigma^2$ aumenta (aumentando la variabilidad), $n$ debe aumentar. Si $\\delta$ aumenta (mayor efecto detectable), $n$ disminuye porque el contraste es más fuerte. Cuanto mayor sea la potencia, mayor será $n$."
  },
  {
    "q": "¿Cuál es la principal diferencia conceptual entre Curva de Potencia y Curva Característica Operativa (OC)?",
    "opts": [
      "La curva OC muestra la probabilidad de error Tipo I ($\\alpha$) vs $\\delta$, mientras que la Curva de Potencia lo hace para $1-\\beta$.",
      "La curva de potencia es siempre creciente con el aumento del tamaño muestral ($n$), mientras que la OC puede mostrar efectos no lineales.",
      "La Curva de Potencia grafica la potencia en función del tamaño del efecto ($\\pi(\\delta)$), siendo generalmente una función ascendente.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La curva de potencia $\\pi(\\delta)$ muestra cómo aumenta el poder a medida que se hace más grande el efecto detectable $\\delta$. La curva OC es la gráfica general del test (p. ej., la probabilidad de rechazar $H_0$ vs. $\\delta$) y puede mostrar diferentes tipos de errores dependiendo de los parámetros."
  },
  {
    "q": "¿Qué significan correctamente los siguientes términos estadísticos?",
    "opts": [
      "Cohen's d: Mide el tamaño del efecto estandarizando la diferencia por la desviación estándar poblacional.",
      "Error Tipo II ($\\beta$): Es la probabilidad de no rechazar $H_0$ cuando es falsa, fallando en detectar un efecto.",
      "MDE (Minimum Detectable Effect): Es el menor cambio o diferencia que nuestro diseño estadístico puede identificar con potencia deseada.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cohen's d estandariza la magnitud del contraste. $\\beta$ es fallar en detectar algo cuando está ahí. El MDE marca el límite de detección; si el efecto real es menor que el MDE, no podremos detectarlo con nuestra potencia fijada."
  },
  {
    "q": "¿Qué condiciones deben cumplirse para utilizar adecuadamente la fórmula del tamaño muestral para dos medias poblacionales diferentes?",
    "opts": [
      "Se debe estimar previamente la varianza o asumir igualdad de varianzas ($\\sigma_1^2 = \\sigma_2^2$) y se trabaja con un contraste $H_0: \\mu_1 - \\mu_2 = 0$.",
      "El diseño debe ser aleatorio, y las variables deben seguir una distribución aproximadamente normal.",
      "Se requiere que la magnitud del efecto sea lo suficientemente grande para generar suficiente potencia.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La fórmula de dos medias se aplica cuando comparamos grupos. El supuesto de varianzas iguales es clave si usamos el test t de Student. Adicionalmente, la normalidad y aleatorización son supuestos fundamentales del diseño estadístico."
  },
  {
    "q": "¿Qué ajustes tienen que considerar los analistas al interpretar un estudio con baja potencia (e.g., 0.40) y un tamaño muestral pequeño?",
    "opts": [
      "Deben estar extremadamente cautelosos, pues el resultado nulo no implica ausencia de efecto.",
      "Su conclusión debe centrarse en la falta de evidencia suficiente más que en aceptar $H_0$.",
      "Es fundamental recomendar estudios futuros con mayor potencia o aumentando $\\delta$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Baja potencia significa que el estudio era insuficiente para detectar efectos. Un resultado nulo ($p > \\alpha$) no es prueba de inocencia estadística; solo indica que no se detectó nada. Por lo tanto, hay que recalcar la limitación metodológica y proponer mejoras."
  },
  {
    "q": "¿Cuál es la relación crítica entre el tamaño muestral ($n$), el nivel alfa ($\\alpha$) y el MDE?",
    "opts": [
      "Manteniendo $\\alpha$ constante, si $n$ aumenta, el MDE detectable disminuye.",
      "Si se exige detectar un efecto más pequeño (disminuye MDE), el tamaño muestral requerido $n$ debe aumentar drásticamente.",
      "Existe una relación de proporcionalidad inversa entre $n$ y $\\delta$: $n \\propto 1/\\delta^2$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El núcleo del diseño estadístico es este balance: queremos detectar un efecto mínimo ($\\text{MDE}$) con potencia alta ($1-\\beta$), lo que requiere más muestras ($n$). Cuanto menor sea el $\\text{MDE}$ deseado (más sensible), mayor debe ser $n$."
  },
  {
    "q": "¿Qué pasos deben seguir rigurosamente para ejecutar un análisis de potencia apropiado?",
    "opts": [
      "Determinar a priori la hipótesis nula, la alternativa y los niveles de error ($\\alpha$ y $\\beta$).",
      "Estimar el MDE basándose en el conocimiento teórico o estudios piloto previos.",
      "Calcular $n$ utilizando las fórmulas adecuadas (ej. para dos medias) antes de recolectar datos.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El proceso es cíclico: 1. Definir objetivos y errores ($\\alpha$, $\\beta$). 2. Estimar el efecto ($d$ o $\\delta$) y la varianza $(\\sigma^2)$. 3. Usar estas tres piezas para calcular $n$. Es un ciclo conceptual que debe cerrarse antes de la ejecución."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para calcular correctamente la Potencia utilizando software como G*Power?",
    "opts": [
      "Determinar primero un MDE (efecto mínimo detectable).",
      "Establecer el nivel de significancia ($\\alpha$) y potencia deseada ($1-\\beta$).",
      "Conocer o estimar la varianza poblacional ($\\sigma^2$)",
      "Asumir que los datos siguen una distribución uniforme."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para calcular la potencia (o $n$), se necesitan tres elementos clave: el nivel de significancia ($\\alpha$) y la potencia deseada ($1-\\beta$). Además, es vital especificar o estimar tanto el MDE ($\\delta$) como la varianza poblacional ($\\sigma^2$)."
  },
  {
    "q": "¿Cuáles son los principales componentes considerados al calcular el MDE?",
    "opts": [
      "El nivel de significancia $\\alpha$ (Error Tipo I).",
      "La Potencia deseada ($1-\\beta$).",
      "El tamaño muestral $n$.",
      "Un coeficiente de correlación asociado."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para calcular el MDE ($\\delta$) manteniendo fijo $n$, $\\alpha$ y Potencia, estos tres valores son imprescindibles. El coeficiente de correlación no es un componente directo en la fórmula básica para medias."
  },
  {
    "q": "¿Qué implicaciones tiene aumentar el tamaño muestral ($n$) al diseñar un estudio?",
    "opts": [
      "Disminuye la variabilidad del error estándar.",
      "Aumenta automáticamente la Potencia, manteniendo $\\alpha$ y $\\delta$ fijos.",
      "Permite detectar efectos más pequeños (MDE menor).",
      "Hace que el análisis sea menos sensible a los outliers."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Aumentar $n$ reduce el error estándar ($\\text{SE} = \\sigma/\\sqrt{n}$), lo cual estabiliza la distribución. Matemáticamente, aumenta la potencia para un $\\delta$ fijo y permite detectar efectos más pequeños (MDE menor)."
  },
  {
    "q": "¿Qué factores influyen en el cálculo de $n$ usando paquetes como R o G*Power?",
    "opts": [
      "Nivel alfa deseado",
      "Potencia estadística deseada",
      "Estimación de la varianza poblacional ($\\sigma^2$) y el efecto ($\\delta$).",
      "El tipo de escala de medición (nominal, ordinal)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Aunque es crucial conocer la escala (que define si se usa $t$ o $Z$), los inputs directos para la fórmula son $\\alpha$, Potencia ($1-\\beta$) y las estimaciones de varianza ($\\sigma^2$) y efecto ($\\delta$)."
  },
  {
    "q": "¿Cuáles son los parámetros clave que influyen directamente en el cálculo del tamaño muestral necesario ($n$)?",
    "opts": [
      "Nivel de significancia ($\\alpha$).",
      "Potencia deseada ($1-\\beta$).",
      "Variabilidad estimada ($\\sigma^2$).",
      "Número de observaciones históricas."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El tamaño muestral depende fundamentalmente del riesgo tolerable ($\\alpha$), la potencia requerida ($1-\\beta$) y la variabilidad esperada $\\sigma^2$. El número histórico no es un parámetro directo en las fórmulas estándar."
  },
  {
    "q": "¿Cuáles son las condiciones que deben cumplirse al calcular el Mínimo Detectable Efecto (MDE, $\\delta$)?",
    "opts": [
      "Tener fijo previamente el tamaño muestral ($n$).",
      "Tener fija la Potencia deseada ($1-\\beta$).",
      "Tener fijado el nivel de significancia ($\\alpha$).",
      "Conocer perfectamente la distribución poblacional."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para calcular MDE ($\\delta$), debemos asumir valores fijos para $n$, $1-\\beta$ y $\\alpha$. Si no se conocen estos tres parámetros, el cálculo de MDE es imposible. Además, asume que la distribución poblacional sigue las condiciones de los tests paramétricos utilizados (ej. normalidad)."
  },
  {
    "q": "¿Cuál es la relación matemática entre los parámetros $\\alpha$, $\\beta$ y Potencia?",
    "opts": [
      "Potencia = $1 - \\beta$.",
      "$\\alpha$ es el riesgo de Error Tipo I.",
      "Si se aumenta $n$, disminuye $\\beta$ (aumenta potencia).",
      "Potencia siempre debe ser igual a $1-\\alpha$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Por definición, Potencia = $1 - \\beta$. El nivel de significancia ($\\alpha$) es el riesgo de rechazar $H_0$ cuando es verdadera (Error Tipo I). Aumentar el tamaño muestral ($n$) reduce la variabilidad y aumenta el poder estadístico, disminuyendo $\\beta$."
  },
  {
    "q": "¿Cuáles son las ventajas de utilizar software especializado como G*Power o el paquete pwr en R para estos cálculos?",
    "opts": [
      "Permiten la visualización gráfica de la curva de potencia.",
      "Automatizan la aplicación de las fórmulas complejas ($n$, MDE, Potencia).",
      "Ofrecen alternativas para diferentes modelos estadísticos (ej. ANOVA, correlación).",
      "Son redundantes, ya que cualquier calculadora puede realizar estos cálculos."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Estos programas están diseñados específicamente para manejar las complejas interdependencias entre $n$, $\\alpha$, $\\beta$ y $\\delta$. Ofrecen visualizaciones cruciales y cubren una amplia gama de tests estadísticos. No son redundantes."
  },
  {
    "q": "¿Cuáles de los siguientes elementos deben considerarse al calcular el tamaño muestral?",
    "opts": [
      "Nivel de significancia ($\\alpha$).",
      "Potencia deseada ($1-\\beta$).",
      "Varianza poblacional estimada ($\\sigma^2$).",
      "La relación entre la media y la mediana."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para calcular $n$, se requieren el nivel $\\alpha$ (que define la cola de significancia), la potencia deseada ($1-\\beta$), y una estimación de la varianza ($\\sigma^2$) o del efecto esperado. La relación entre media y mediana no es un parámetro estadístico necesario para este cálculo."
  },
  {
    "q": "¿Qué implicación tiene duplicar el tamaño poblacional de las muestras ($n$) en un estudio, manteniendo constantes $\\alpha$, $\\beta$ y $\\delta$?",
    "opts": [
      "Aumenta la potencia del test.",
      "Reduce el Error Tipo II ($\\beta$).",
      "Permite detectar un efecto más pequeño (disminuye MDE).",
      "No tiene ningún impacto significativo sobre los valores de $p$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si aumentamos $n$ manteniendo fijos $\\alpha$, $\\beta$ y $\\delta$, estamos mejorando la precisión del estudio. Esto significa que podemos detectar un efecto más pequeño (disminuir MDE), lo cual es el objetivo primario de aumentar el tamaño muestral."
  },
  {
    "q": "¿En un análisis de potencia 'a priori', qué información debe proporcionarse?",
    "opts": [
      "El nivel de significancia ($\\alpha$)",
      "La potencia deseada (generalmente 0.80)",
      "El tamaño del efecto esperado ($\\delta$ o $d$) y la varianza $\\sigma^2$",
      "Un informe de resultados previos para calibrar el estudio."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para calcular el tamaño muestral (n) antes de recolectar datos (a priori), se necesitan fijar tres parámetros clave: alfa ($\\alpha$), la potencia deseada y una estimación del efecto o varianza. Esto permite determinar el $n$ mínimo requerido."
  },
  {
    "q": "¿Qué parámetros afectan directamente la necesidad de un mayor tamaño muestral ($n$)?",
    "opts": [
      "Aumentar $\\alpha$ (mayor tolerancia al Error Tipo I)",
      "Disminuir el tamaño del efecto detectable ($\\delta$)",
      "Aumentar la varianza poblacional ($\\sigma^2$)",
      "Usar un test unidireccional en lugar de bilateral."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un $\\alpha$ mayor o una potencia deseada más alta (estándar 0.80) aumenta el $n$. Un $\\delta$ menor requiere un $n$ mucho mayor ($n \\propto 1/\\delta^2$). Una varianza ($\\sigma^2$) mayor también incrementa el $n$ (ya que la señal está 'diluida' en más ruido)."
  },
  {
    "q": "¿Cuáles son las condiciones ideales o requisitos clave para interpretar correctamente la Potencia Estadística?",
    "opts": [
      "Debe ser planificada antes de la recolección de datos (a priori).",
      "Debe estar guiada por un tamaño del efecto mínimo clínicamente relevante (MDE).",
      "Requiere que se conozca y se estime razonablemente la varianza $\\sigma^2$.",
      "Solo aplica a diseños experimentales con asignación aleatoria."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La potencia solo es útil si el estudio está bien planificado. Necesitamos saber *antes* de empezar (a priori) qué tamaño del efecto ($\\delta$) consideramos importante y utilizar la mejor estimación posible para $\\sigma^2$."
  },
  {
    "q": "¿Qué herramientas o métodos estadísticos son fundamentales para calcular o interpretar la potencia?",
    "opts": [
      "Softwares especializados como G*Power o el paquete 'pwr' en R.",
      "La comprensión de los errores Tipo I ($\\alpha$) y Tipo II ($\\beta$).",
      "Conocer las fórmulas que relacionan $n$, $\\delta$ y $\\sigma^2$.",
      "Realizar análisis exploratorio preliminar para estimar la varianza."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El cálculo riguroso de la potencia requiere tanto conocimiento teórico (conceptos de $\\alpha, \\beta$) como herramientas computacionales especializadas como G*Power o R. Estos programas permiten manipular las fórmulas complejas para obtener $n$, Potencia o MDE."
  },
  {
    "q": "¿Qué implicaciones tiene la varianza ($\\sigma^2$) sobre los cálculos de Potencia?",
    "opts": [
      "A mayor $\\sigma^2$, menor es el poder para detectar un efecto fijo.",
      "Es crucial reportar la estimación de $\\sigma^2$ utilizada en el análisis a priori.",
      "Si se utiliza una varianza subestimada, el $n$ calculado será insuficiente y la potencia real será baja.",
      "La varianza no influye si solo se usa $d$ (Cohen's d)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuanto mayor sea el ruido ($\\sigma^2$), más datos necesitamos para ver una señal. Por ello, un $\\sigma^2$ grande disminuye la potencia y requiere aumentar $n$. Es vital que esta estimación sea lo más precisa posible."
  },
  {
    "q": "¿Cómo se calcula Cohen's d (tamaño del efecto estandarizado) en el contexto de dos medias?",
    "opts": [
      "d = $\\frac{|\\bar{X}_1 - \\bar{X}_2|}{S_p}$",
      "Estimar $S_p$ como la desviación estándar combinada o pooled.",
      "El numerador es la diferencia entre las medias observadas, y el denominador debe ser una estimación de la varianza poblacional común.",
      "Solo se puede calcular si los datos provienen de muestras iguales."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cohen's d estandariza la diferencia ($\\bar{X}_1 - \\bar{X}_2$) dividiéndola por una desviación estándar combinada ($S_p$). Este índice nos permite comparar tamaños del efecto a través de diferentes unidades de medida."
  },
  {
    "q": "¿Cuáles son los factores que hacen que un análisis de potencia sea más conservador o riguroso?",
    "opts": [
      "Fijar la potencia en 0.90 en lugar del estándar 0.80.",
      "Usar una estimación de $\\sigma^2$ conservadora (más grande) para el cálculo.",
      "Asegurarse de que todos los datos sean independientes y se cumplan las premisas del test estadístico elegido.",
      "Realizar múltiples análisis post-hoc para confirmar resultados."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Ser más conservador significa exigir más evidencia. Aumentar la potencia deseada (ej. 0.90) o usar una varianza mayor ($\\sigma^2$ grande) hacen el cálculo de $n$ mucho más exigente y robusto."
  },
  {
    "q": "¿Qué variables son esenciales al planificar un estudio estadístico?",
    "opts": [
      "El nivel de significancia $\\alpha$.",
      "La variabilidad ($\\sigma^2$).",
      "El tamaño del efecto mínimo detectable (MDE, $\\delta$).",
      "El tipo de análisis a realizar (ej. ANOVA vs. T-test)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para calcular el tamaño muestral ($n$), siempre necesitamos fijar tres elementos: la probabilidad de error I ($\\alpha$), la variabilidad ($\\sigma^2$) y el efecto mínimo que queremos detectar ($\\delta$). El tipo de análisis es crucial para *saber* cuál fórmula usar, pero no son variables de cálculo per se."
  },
  {
    "q": "¿En términos de distribución y cálculos estadísticos, ¿cuáles son las condiciones ideales para aplicar fórmulas paramétricas como $t$ de Student?",
    "opts": [
      "La muestra debe ser grande ($n \\geq 30$).",
      "Los datos deben seguir una distribución normal.",
      "Se requiere la medición continua de la variable.",
      "Se debe realizar un análisis post-hoc."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las pruebas paramétricas (como t o ANOVA) funcionan mejor si los datos son normales y continuos. Aunque $n \\geq 30$ ayuda a normalizar por CLT, no es la condición ideal primaria."
  },
  {
    "q": "¿Cuáles son las condiciones necesarias para calcular con precisión el tamaño muestral ($n$) en una prueba de hipótesis?",
    "opts": [
      "Determinar el nivel de significancia ($\\alpha$).",
      "Establecer la potencia deseada (1 - $\\beta$ ).",
      "Especificar un tamaño del efecto mínimo detectable (MDE o $\\delta$).",
      "Conocer previamente las desviaciones estándar poblacionales ($\\sigma^2$) y su variabilidad."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para cualquier cálculo de potencia o tamaño muestral ($n$), el investigador debe fijar tres parámetros clave: 1) El nivel alfa (riesgo Tipo I), 2) La potencia deseada (riesgo Tipo II $\\beta$), y 3) El MDE ($\\delta$). Si se conocen las desviaciones estándar, estas son un cuarto parámetro esencial."
  },
  {
    "q": "¿Qué afirmaciones sobre la relación entre el tamaño del efecto ($\\delta$) y el tamaño muestral ($n$) son correctas?",
    "opts": [
      "Aumentar $\\delta$ (el efecto esperado) reduce significativamente el $n$ necesario.",
      "Disminuir $\\delta$ implica que se necesita aumentar el tamaño muestral proporcionalmente.",
      "La relación es de proporcionalidad inversa: $n \\propto 1/\\delta^2$.",
      "El cambio en el MDE afecta a la potencia, pero no al cálculo del tamaño muestral."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Dado que $\\text{Potencia} \\approx f(\\frac{\\delta}{\\sigma/\\sqrt{n}})$, si se hace más pequeño el efecto detectable ($\\delta$), o más precisa la medición ($\\sigma$ baja), se requiere un $n$ mucho mayor. La fórmula muestra esta relación cuadrática: $n \\propto 1/\\delta^2$. Por lo tanto, aumentar $\\delta$ reduce $n$, y disminuirlo aumenta $n$."
  },
  {
    "q": "¿Cuáles son los roles o usos correctos de las curvas estadísticas en el análisis de potencia?",
    "opts": [
      "La curva de Potencia ($\\pi(\\delta)$) grafica la probabilidad de rechazar correctamente $H_0$ en función del tamaño del efecto $\\delta$.",
      "La Curva Característica Operativa (OC) representa la distribución muestral bajo la hipótesis nula ($H_0$) y describe el rendimiento del test.",
      "Ambas curvas son utilizadas conjuntamente para evaluar la sensibilidad del estudio antes de su ejecución, siendo un diagnóstico vital.",
      "El área bajo estas curvas determina directamente la desviación estándar poblacional ($\\sigma$)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La curva de potencia muestra si el test es capaz de detectar $\\delta$. La OC describe lo que sucede bajo $H_0$ (donde se espera 'éxito' nulo). Juntas, permiten al estadístico visualizar cuándo y dónde la distribución muestral difiere lo suficiente para concluir rechazo. No determinan $\\sigma$ directamente."
  },
  {
    "q": "¿Qué afirmaciones son correctas respecto a las variables de riesgo en el análisis de hipótesis?",
    "opts": [
      "El nivel de significancia ($\\alpha$) se relaciona con el error Tipo I (rechazar $H_0$ cuando es verdadera).",
      "La Potencia ($1-\\beta$) está directamente ligada al poder real del test y debe fijarse idealmente en 0.80.",
      "El riesgo $\\beta$ representa la probabilidad de cometer un Error Tipo II (fallar en rechazar $H_0$ cuando es falsa).",
      "El error Tipo I y el Tipo II son estadísticamente independientes entre sí, lo cual simplifica su cálculo."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Conceptualmente: $\\alpha = P(\\text{Rechajar } H_0 | H_0 \\text{ verdadera})$. Potencia $= P(\\text{Rechazar } H_0 | H_1 \\text{ verdadera}) = 1-\\beta$. El error Tipo II ($\\beta$) es el riesgo de no detectar un efecto existente. Son conceptos ligados, pero la fórmula del cálculo los relaciona a través del tamaño muestral y $\\delta$."
  },
  {
    "q": "¿Para determinar el MDE (Minimum Detectable Effect) se utiliza principalmente qué información?",
    "opts": [
      "El nivel alfa ($\\alpha$) deseado para el estudio.",
      "La potencia estadística objetivo ($1-\\beta$).",
      "El tamaño muestral ($n$) que se está considerando utilizar en la investigación.",
      "Los intervalos de confianza basados en datos exploratorios (datos piloto)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El MDE ($\\delta$) es el efecto más pequeño que podemos detectar con una potencia dada y un $n$ fijo. Por lo tanto, si fijamos $\\alpha$, Potencia y $n$, el estadístico nos permite calcular cuánto valor de $\\delta$ podremos alcanzar. Los datos piloto ayudan a estimar $\\sigma$, pero no determinan directamente el MDE."
  },
  {
    "q": "¿Cuáles son los principios más importantes al interpretar los resultados de un cálculo de potencia?",
    "opts": [
      "La potencia calculada ($1-\\beta$) debe ser interpretada siempre como una probabilidad de éxito experimental.",
      "Un valor bajo de $n$ (pequeño) puede llevar a la conclusión errónea de que no hay efecto, cuando en realidad el estudio carecía de poder.",
      "El resultado nos indica si el diseño actual tiene suficiente capacidad para detectar un efecto $\\delta$ específico.",
      "La potencia es una medida intrínseca del fenómeno estudiado y no depende del tamaño muestral."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Recordar que la potencia ($1-\\beta$) mide la *capacidad* de detección. Si $n$ es muy pequeño (bajo poder), se puede fallar en rechazar $H_0$ aun cuando un efecto existe; esto no significa que el efecto sea nulo, sino que el estudio fue incapaz de detectarlo."
  },
  {
    "q": "¿Cuáles son los pasos correctos y recomendados al planificar un estudio de comparación de medias?",
    "opts": [
      "Determinar primero la hipótesis nula ($H_0$) y la alternativa ($H_1$).",
      "Estimar el MDE ($\\delta$), fijar $\\alpha$ y calcular $n$ a priori.",
      "Realizar una prueba exploratoria preliminar para obtener datos piloto de $\\sigma$.",
      "Calcular el tamaño muestral utilizando los parámetros estimados, como el $\\sigma^2$ y $\\delta$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El orden ideal es: 1) Definir $H_0$ y $H_1$. 2) Estimar $\\sigma^2$ (con datos piloto). 3) Fijar el MDE ($\\delta$) y la potencia. 4) Calcular $n$ a priori. El uso de los datos piloto es una herramienta para estimar parámetros, no un paso que sustituya al cálculo n."
  },
  {
    "q": "¿Cuáles son los elementos que definen un análisis estadístico de potencia?",
    "opts": [
      "Nivel de significancia $\\alpha$ (Error Tipo I)",
      "Potencia estadística $1-\\beta$ (Error Tipo II)",
      "El tamaño del efecto $\\delta$ o la ratio $\\sigma/\\delta$",
      "La elección precisa del test estadístico a usar"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres parámetros esenciales que definen el análisis de potencia son: el umbral de rechazo ($\\alpha$), la probabilidad de éxito ($1-\\beta$) y el tamaño del efecto esperado ($\\delta$). El tipo de test afecta las fórmulas exactas (e.g., t vs Z), pero conceptualmente los tres primeros elementos son determinantes."
  },
  {
    "q": "¿Cuál es la relación entre $\\sigma^2$, $n$ y la precisión del estudio?",
    "opts": [
      "Mayor varianza ($\\sigma^2$) requiere un tamaño muestral ($n$) mayor",
      "La desviación estándar es directamente proporcional a $1/\\sqrt{n}$",
      "Si se duplica el tamaño muestral, la precisión mejora $\\sqrt{2}$ veces",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Mayor varianza ($\\sigma^2$) significa más ruido y necesitamos más datos ($n$ mayor) para 'superarlo'. La precisión de nuestra estimación está relacionada con el error estándar, que es inversamente proporcional a $\\sqrt{n}$. Si duplicamos $n$, la mejora en la precisión no es $\\sqrt{2}$ veces, sino un factor superior más pequeño."
  },
  {
    "q": "¿Qué se debe considerar al realizar comparaciones estadísticas de grupos?",
    "opts": [
      "Estimar si el efecto observado merece ser detectado (MDE)",
      "Asegurar que los datos sean independientes entre grupos",
      "Usar la metodología adecuada para modelar las diferencias entre medias",
      "Corregir por las pérdidas o tasas de no respuesta"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cuando comparamos grupos, debemos definir primero si el efecto es lo suficientemente grande para que valga la pena detectarlo (MDE). Es crucial asumir independencia y usar tests paramétricos apropiados (como t-test o ANOVA) para modelar las diferencias de medias. La corrección por pérdidas ($n' = n/(1-\\text{tasa})$) es un ajuste práctico."
  },
  {
    "q": "¿Cómo afecta el tipo de test estadístico al cálculo del tamaño muestral?",
    "opts": [
      "Un test unilateral siempre requiere menor $n$ que uno bilateral",
      "Los tests basados en proporciones usan fórmulas diferentes a los de medias",
      "La potencia calculada debe ser interpretada siempre con cautela metodológica",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Este es un conocimiento clave: usar una prueba unilateral (una cola) reduce la cantidad de datos necesarios ($n$) en comparación con una bilateral, lo que se refleja matemáticamente. Los tests paramétricos para medias y proporciones utilizan fórmulas distintas e igualmente válidas."
  },
  {
    "q": "¿Qué implica la interpretación del valor $d$ de Cohen?",
    "opts": [
      "Representa la magnitud estandarizada de la diferencia entre grupos",
      "Indica qué tan separadas están las distribuciones muestrales en términos de $\\sigma$",
      "Sirve como métrica para evaluar si un efecto es clínicamente o prácticamente significativo",
      "Solo puede calcularse cuando se asume una distribución normal"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El $d$ estandariza la diferencia $(\\bar{X}_1 - \\bar{X}_2)$ por la desviación estándar poblacional. Indica qué tan grandes son las diferencias en términos de desviaciones estándar (cuantificando si el efecto es pequeño, mediano o grande). Aunque su cálculo asume normalidad, su interpretación va más allá: nos ayuda a determinar la magnitud práctica."
  },
  {
    "q": "¿Cómo se debe abordar conceptualmente la relación entre Potencia y $n$?",
    "opts": [
      "Aumentar $n$ aumenta directamente la potencia (manteniendo $\\alpha$ y $\\delta$ fijos)",
      "Reducir el tamaño del efecto esperado ($\\delta$) disminuye la potencia",
      "Si $n \\to \\infty$, la potencialidad también tiende a aumentar",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La relación es directa: más datos ($n$) aumentan nuestra capacidad de detección (potencia). Sin embargo, si el efecto real ($\\delta$) se hace infinitamente pequeño, incluso con $n$ infinito no podemos detectarlo. La potencia está limitada por $\\alpha$, $\\beta$ y $\\delta$. El segundo punto es incorrecto; reducir $\\delta$ requiere *más* $n$ para mantener la potencia."
  },
  {
    "q": "¿Cuáles de las siguientes afirmaciones respecto a los parámetros del diseño estadístico son correctas?",
    "opts": [
      "El tamaño muestral ($n$) es inversamente proporcional al cuadrado del tamaño del efecto ($\\delta$): $n \\propto 1/\\delta^2$.",
      "Si la varianza poblacional ($\\sigma^2$) se duplica, el tamaño muestral requerido ($n$) debe cuadruplicarse.",
      "Los tests unilaterales requieren siempre un $n$ menor que los tests bilaterales, manteniendo el mismo poder.",
      "La Curva Característica Operativa (OC) muestra la probabilidad de rechazar $H_0$ para un valor específico de $\\delta$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La relación $n \\propto 1/\\delta^2$ es clave. Si $\\sigma^2$ se duplica, $n$ también lo hace (ya que $n \\propto \\sigma^2$). La curva OC mide la probabilidad de rechazo ($\\pi(\\delta)$) vs $\\delta$. Los tests unilaterales son más potentes y requieren menor $n$ que los bilaterales."
  },
  {
    "q": "¿Cuáles son las implicaciones correctas sobre cómo afectan los parámetros al cálculo del tamaño muestral?",
    "opts": [
      "Si se duplica el tamaño del efecto ($\\delta$), el tamaño muestral ($n$) requerido disminuye a la cuarta parte (1/4).",
      "El aumento de la varianza poblacional ($\\sigma^2$) siempre resulta en un incremento proporcional del tamaño muestral.",
      "Un test unilateral requiere un tamaño muestral menor que un test bilateral con los mismos $\\alpha$ y $1-\\beta$.",
      "Si se acepta una potencia más baja (ej. 0.60), el tamaño muestral requerido disminuye."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La relación es $n \\propto 1/\\delta^2$: si $\\delta$ se duplica, $n$ se reduce a 1/4. Además, $n \\propto \\sigma^2$, por lo que aumentar la varianza aumenta drásticamente el tamaño muestral necesario. Los tests unilaterales requieren menos potencia (y así un $n$ menor) que los bilaterales para alcanzar la misma $\\beta$."
  },
  {
    "q": "Respecto a las Curvas de Potencia y Características Operativas (OC), ¿qué afirmaciones son ciertas?",
    "opts": [
      "La curva OC grafica la probabilidad de rechazar $H_0$ vs. el valor real del parámetro ($\\pi(\\delta)$).",
      "La curva de potencia generalmente muestra que, para un tamaño muestral fijo, al aumentar $\\delta$, la potencia aumenta.",
      "El punto donde intersectan las curvas de potencia y error tipo I define el nivel de significancia $\\alpha$.",
      "Una alta potencia indica una baja probabilidad de cometer Error Tipo II."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La OC describe cómo varía nuestra estadística test bajo la hipótesis alternativa. La curva de potencia muestra que si realmente hay un gran efecto ($\\delta$ grande), es más fácil detectarlo (mayor potencia). El punto clave es que el Error Tipo I se define gráficamente por $\\alpha$, y una alta potencia significa $1-\\beta$ alto."
  },
  {
    "q": "¿Cuál es la interpretación correcta del coeficiente de Cohen ($d$) en estudios comparativos?",
    "opts": [
      "Un valor de $|d|=0.2$ se considera un tamaño de efecto pequeño.",
      "Un valor de $d=0$ implica que no hay diferencia entre las medias poblacionales ($\\mu_1 = \\mu_2$).",
      "Cuanto mayor sea el valor absoluto de $|d|$, más grande y fácil de detectar es la separación entre grupos.",
      "El coeficiente $d$ solo debe calcularse cuando se usa un test T."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Cohen estableció guías generales: 0.2 (pequeño), 0.5 (mediano) y 0.8 (grande). Un $d=0$ significa que las medias son idénticas. Cuanto más alejado de cero esté el valor absoluto de $d$, más fácil es detectar la diferencia."
  },
  {
    "q": "¿Cuáles son los pasos recomendados al planificar un ensayo clínico o investigación comparativa?",
    "opts": [
      "Establecer previamente el nivel de significancia ($\\alpha$).",
      "Definir una potencia mínima aceptable (generalmente $\\geq 0.80$).",
      "Calcular el tamaño muestral ($n$) basado en la variabilidad y el MDE deseado.",
      "Ejecutar un análisis post-hoc para justificar el $n$ encontrado."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los pasos fundamentales son: definir $\\alpha$, fijar potencia (y por lo tanto $\\beta$), y calcular $n$. El error es intentar hacer esto *post-hoc*, ya que eso introduce un sesgo de evidencia."
  },
  {
    "q": "¿Qué significa el concepto de MDE (Minimum Detectable Effect) en la planificación estadística?",
    "opts": [
      "Es la diferencia mínima entre grupos que podemos detectar estadísticamente con el $n$ disponible y la potencia deseada.",
      "Representa el efecto más pequeño posible que un estudio puede medir correctamente.",
      "Si fijamos $\\alpha$ y $n$, el MDE determina la magnitud del efecto que el estudio es capaz de encontrar en la práctica.",
      "Un MDE muy grande siempre implica una alta potencia."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El MDE es nuestro objetivo práctico. Es el cambio o diferencia más pequeño que nos interesa detectar. Si fijamos $n$ y queremos mantener la potencia (ej. 0.80), el MDE será inversamente proporcional a $\\sqrt{n}$."
  },
  {
    "q": "¿Cuáles son las razones por las cuales la planificación del tamaño muestral es tan crítica en investigación?",
    "opts": [
      "Un tamaño insuficiente puede llevar a conclusiones erróneas y no detectar efectos reales (Errores Tipo II).",
      "Garantiza que los recursos (tiempo/dinero) se utilicen de manera eficiente, evitando estudios sobredimensionados.",
      "Define la fuerza estadística del estudio, lo cual es esencial para publicar resultados con impacto.",
      "Los grupos de control siempre deben tener un tamaño muestral mayor que el grupo experimental."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La principal razón es evitar errores Tipo II. Si $n$ es muy pequeño, incluso si existe un efecto real (grande), quizás no tengamos la potencia para detectarlo. Además, los estudios sobredimensionados son éticamente cuestionables."
  },
  {
    "q": "¿Cómo se relaciona el concepto de Potencia ($1-\\beta$) con la magnitud del tamaño muestral y el MDE?",
    "opts": [
      "Aumentar $n$ siempre incrementa la potencia para un $\\delta$ fijo.",
      "Para mantener una potencia alta, si reducimos el tamaño del efecto ($\\delta$), debemos compensando aumentando $n$.",
      "La relación entre Potencia y $n$ es directamente proporcional.",
      "Si mantenemos $n$ constante, reducir el MDE requiere aumentar drásticamente la potencia (lo cual es imposible)."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Si aumentamos $n$, la precisión aumenta, mejorando la capacidad de detección (Potencia). Si reducimos el MDE (hacemos más difícil lo que queremos detectar), debemos aumentar tanto $n$ como la potencia deseada. Esta relación es crítica: P $\\propto n \\cdot \\delta$."
  },
  {
    "q": "¿Cuáles son los elementos que determinan el cálculo del tamaño muestral requerido?",
    "opts": [
      "Nivel de significancia ($\\alpha$)",
      "Potencia deseada $(1-\\beta)$",
      "Tamaño del efecto esperado $(\\delta)$",
      "Número máximo de variables a medir"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El cálculo del tamaño muestral ($n$) depende fundamentalmente de tres parámetros: el nivel de significancia ($\\alpha$), la potencia deseada $(1-\\beta)$, y la magnitud mínima detectable del efecto $(\\delta)$. El cuarto parámetro es irrelevante para este cálculo básico."
  },
  {
    "q": "¿Qué características definen un análisis de potencia a priori?",
    "opts": [
      "Establece el tamaño muestral necesario antes de recolectar datos.",
      "Requiere conocer los parámetros estadísticos previamente.",
      "Sirve como base para la planificación del estudio y el poderío metodológico.",
      "Implica modificar el diseño experimental después de ver resultados preliminares."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Un análisis a priori es fundamental en la fase de diseño. Su propósito es calcular $n$ (tamaño muestral) basándose en potencias deseadas y efectos esperados antes de que se realice cualquier recolección de datos, asegurando el poder estadístico necesario."
  },
  {
    "q": "¿Qué condiciones deben cumplirse para que sea válida la aproximación Z (Normal) en los cálculos?",
    "opts": [
      "El tamaño muestral ($n$) debe ser suficientemente grande.",
      "Las variables medidas deben seguir una distribución aproximadamente normal.",
      "La relación entre las variables debe ser lineal o cercana a él.",
      "La prueba estadística utilizada debe ser de tipo $t$."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Aunque muchas pruebas son robustas, los cálculos basados en la aproximación Z requieren que $n$ sea grande y que se cumplan supuestos paramétricos (normalidad). Si las variables son lineales y $n$ es grande, podemos usar esta aproximación."
  },
  {
    "q": "¿Qué variables son necesarias para calcular el tamaño muestral cuando se comparan dos medias independientes?",
    "opts": [
      "Desviación estándar poblacional ($\\sigma$) para cada grupo.",
      "Tamaño del efecto esperado $(\\delta)$ entre los grupos.",
      "Nivel de significancia ($\\alpha$) y potencia deseada $(1-\\beta)$.",
      "La relación correlacional previa entre las mediciones."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La fórmula requiere $\\sigma$ (para estimar la variabilidad total), el tamaño del efecto $\\delta$, y los parámetros de riesgo $\\alpha$ y $1-\\beta$. La correlación no es necesaria si se asume independencia."
  },
  {
    "q": "¿Qué elementos son fundamentales para calcular el Tamaño Muestral (n) en un test t de dos medias?",
    "opts": [
      "Nivel de significancia ($\\alpha$), Potencia deseada ($1-\\beta$) y Desviación estándar ($\\sigma$).",
      "El tamaño del efecto esperado (d de Cohen), la varianza estimada ($\\sigma^2$) y el número de grupos.",
      "La relación entre n, $\\sigma$, $\\delta$ y las Z-scores debe incluir el factor de corrección por pérdidas.",
      "Solo es necesario conocer los grupos y el $\\alpha$ para hacer una estimación aproximada."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El cálculo requiere parámetros como $\\alpha$, la potencia ($1-\\beta$), la varianza ($\\sigma^2$) y el tamaño del efecto ($\\delta$). La fórmula incluye todas estas variables y es crucial aplicar ajustes (como n' = n/(1-tasa)) si hay pérdidas de datos."
  },
  {
    "q": "En el contexto del diseño de un estudio, ¿cuáles elementos deben especificarse para realizar un cálculo de potencia (análisis a priori)?",
    "opts": [
      "Nivel de significancia ($\\alpha$).",
      "Potencia deseada ($1-\\beta$).",
      "El tamaño del efecto mínimo detectable (MDE o $\\delta$).",
      "La desviación estándar muestral real tras la recolección."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Para un análisis a priori (planificación), debemos fijar el umbral de rechazo ($\\alpha$), la potencia que deseamos alcanzar y qué tan pequeño debe ser el efecto ($\\delta$) para considerarlo científicamente relevante. La desviación estándar real solo se conoce *después* del estudio."
  },
  {
    "q": "Respecto a los errores estadísticos en pruebas de hipótesis, ¿cuáles afirmaciones son correctas?",
    "opts": [
      "El Error Tipo I (alfa) es la probabilidad de rechazar $H_0$ cuando es verdadera.",
      "El Error Tipo II (beta) es la probabilidad de fallar en detectar un efecto que realmente existe.",
      "La Potencia es igual a $1 - \\text{Error Tipo II}$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Conceptualmente, $\\alpha$ es el riesgo de falso positivo y $\\beta$ es el riesgo de falso negativo. La potencia $1-\\beta$ mide la capacidad de evitar ese error tipo II."
  },
  {
    "q": "¿Qué se puede afirmar sobre las curvas estadísticas relacionadas con la Potencia?",
    "opts": [
      "La Curva de Potencia grafica el poder estadístico esperado en función del tamaño del efecto ($\\delta$).",
      "Una curva de potencia siempre es una función creciente respecto al tamaño muestral ($n$) y el tamaño del efecto ($\\delta$).",
      "El punto donde la curva cruza un valor fijo (ej: 0.80) determina el MDE para ese $n$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La gráfica de potencia es crucial porque muestra cómo aumenta nuestra capacidad ($P$) a medida que aumentamos los recursos ($n$) o la magnitud del efecto ($\\delta$). El MDE es la lectura práctica de esta curva."
  },
  {
    "q": "¿Qué implicaciones tienen las fórmulas para el cálculo del tamaño muestral?",
    "opts": [
      "Para dos medias poblacionales, el cálculo debe incluir un factor multiplicativo $2$ en comparación con una sola media.",
      "El tamaño muestral requerido ($n$) aumenta si la varianza ($\\sigma^2$) es grande y disminuye si $\\delta$ es grande.",
      "Si se requiere que el test sea unilateral (cola simple), el denominador del cálculo de $z$ es menor, reduciendo $n$.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La fórmula para dos medias tiene ese factor multiplicativo. En cuanto a la varianza y $\\delta$, son inversamente proporcionales: más dispersión o más fácil detectar el efecto implica menos sujetos necesarios. Un test unilateral exige menor $n$ que uno bilateral."
  },
  {
    "q": "¿Qué pasos debe seguir un investigador para garantizar el diseño óptimo de un estudio comparativo?",
    "opts": [
      "Calcular la potencia necesaria (ej: 0.80) y determinar el tamaño muestral ($n$) antes de empezar.",
      "Estimar con rigor estadístico tanto la varianza poblacional ($\\sigma^2$) como el MDE esperado ($\\delta$).",
      "Utilizar herramientas especializadas como G*Power o R (pwr) para modelar las interdependencias entre $n$, $\\alpha$ y Potencia.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La planificación estadísticamente rigurosa requiere conocer estos tres componentes clave: la potencia deseada, los parámetros de variabilidad y el efecto mínimo relevante. El uso de software es indispensable."
  },
  {
    "q": "Respecto a los parámetros utilizados en el cálculo del tamaño muestral, ¿cuáles son las relaciones de proporcionalidad correctas?",
    "opts": [
      "El tamaño muestral ($n$) es inversamente proporcional al cuadrado del efecto detectable ($\\delta^2$).",
      "El tamaño muestral ($n$) es directamente proporcional a la varianza poblacional ($\\sigma^2$).",
      "Un test bilateral requiere un tamaño muestral significativamente mayor que uno unilateral.",
      "Ninguna de las anteriores"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Estas son propiedades clave: $n \\propto 1/\\delta^2$ (si se duplica $\\delta$, $n$ se reduce a un cuarto); $n \\propto \\sigma^2$; y los ajustes para pruebas bilaterales siempre aumentan el tamaño muestral respecto a las unilaterales."
  },
  {
    "q": "¿Qué conceptos son fundamentales al interpretar las curvas de Potencia y Característica Operativa (OC)?",
    "opts": [
      "La potencia aumenta al aumentar el tamaño muestral ($n$) y/o el tamaño del efecto ($\\delta$).",
      "La curva de potencia es típicamente creciente respecto a $\\delta$, mientras que la OC mide $P(\\bar{X} | H_0)$ vs. $\\mu$.",
      "Para un test bilateral, se requiere una potencia significativamente mayor que para un test unilateral.",
      "El MDE (Minimum Detectable Effect) está determinado por el punto de inflexión donde la curva cruza 0.80."
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La potencia aumenta con $n$ y $\\delta$. La curva de Potencia ($\\pi(\\delta)$ vs. $\\delta$) muestra cómo cambia nuestro poder al cambiar el tamaño del efecto verdadero. La OC es la distribución muestral bajo $H_0$, mientras que MDE es el menor efecto detectable, generalmente usando el nivel de potencia deseado."
  }
];
