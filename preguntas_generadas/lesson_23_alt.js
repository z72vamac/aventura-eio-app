// Leccion 23 - preguntas verificadas
// 20 con 1 correcta, 20 con 2, 20 con 3
window.LESSON_QUESTIONS_ALT[23] = [
  {
    "q": "¿Qué idea central comparten los tests no paramétricos?",
    "opts": [
      "Usan rangos o signos en lugar de valores brutos",
      "Siempre exigen Normalidad",
      "Solo sirven para muestras grandes",
      "Estiman parámetros poblacionales exactos"
    ],
    "c": [
      0
    ],
    "exp": "Los tests no paramétricos reducen la información a rangos o signos, ganando robustez sin exigir Normalidad."
  },
  {
    "q": "¿Cuándo es preferible un test no paramétrico frente a uno paramétrico?",
    "opts": [
      "Cuando los supuestos de Normalidad no se cumplen o los datos son ordinales",
      "Siempre, porque son más potentes",
      "Solo cuando n es muy grande",
      "Nunca, los paramétricos son mejores"
    ],
    "c": [
      0
    ],
    "exp": "Se prefieren cuando fallan supuestos paramétricos (Normalidad, homocedasticidad) o con datos ordinales."
  },
  {
    "q": "¿Qué distribución sigue el número de signos positivos S bajo H0 en el test de signos?",
    "opts": [
      "Binomial(n', 0.5)",
      "Normal(0,1)",
      "Chi-cuadrado",
      "t de Student"
    ],
    "c": [
      0
    ],
    "exp": "Bajo H0, cada diferencia no nula tiene probabilidad 0.5 de ser positiva, por tanto S ~ Bi(n', 0.5)."
  },
  {
    "q": "En el test de signos para una mediana, ¿qué se hace con las diferencias iguales a cero?",
    "opts": [
      "Se descartan",
      "Se cuentan como positivas",
      "Se cuentan como negativas",
      "Se duplican"
    ],
    "c": [
      0
    ],
    "exp": "Las diferencias nulas no aportan información sobre el signo y se eliminan del conteo."
  },
  {
    "q": "¿Qué mide el test de Wilcoxon-Mann-Whitney?",
    "opts": [
      "Si dos muestras independientes provienen de la misma distribución",
      "La diferencia de medias poblacionales",
      "Si las varianzas son iguales",
      "La correlación entre dos variables"
    ],
    "c": [
      0
    ],
    "exp": "Compara rangos unidos de ambas muestras para decidir si sus distribuciones difieren."
  },
  {
    "q": "¿Qué es U en el test de Mann-Whitney?",
    "opts": [
      "El número de veces que un dato de la muestra 1 gana a uno de la muestra 2",
      "La diferencia de medias",
      "La suma de rangos de la muestra 1",
      "El p-valor del test"
    ],
    "c": [
      0
    ],
    "exp": "U cuenta victorias par a par entre observaciones de las dos muestras."
  },
  {
    "q": "¿Qué distribuye aproximadamente H de Kruskal-Wallis bajo H0?",
    "opts": [
      "Chi-cuadrado con k-1 grados de libertad",
      "Normal estándar",
      "t de Student",
      "F de Fisher"
    ],
    "c": [
      0
    ],
    "exp": "Bajo H0 y con tamaños de grupo suficientes, H ~ chi²(k-1)."
  },
  {
    "q": "¿Qué requiere el test de Friedman?",
    "opts": [
      "Diseño de bloques completos con varios tratamientos por bloque",
      "Muestras independientes sin relación",
      "Solo una muestra",
      "Datos nominales"
    ],
    "c": [
      0
    ],
    "exp": "Friedman extiende Wilcoxon a diseños de bloques: cada bloque recibe todos los tratamientos."
  },
  {
    "q": "¿Qué mide la correlación de Spearman?",
    "opts": [
      "Asociación monótona entre dos variables usando rangos",
      "Relación lineal exacta",
      "Diferencia de medias",
      "Independencia de variables"
    ],
    "c": [
      0
    ],
    "exp": "r_s es Pearson aplicado a rangos; detecta tendencias monótonas, no necesariamente lineales."
  },
  {
    "q": "¿Cuál es una desventaja de los tests no paramétricos?",
    "opts": [
      "Menos potencia que el test paramétrico equivalente cuando se cumplen sus supuestos",
      "Requieren Normalidad poblacional",
      "Solo sirven para n muy grandes",
      "No manejan valores atípicos"
    ],
    "c": [
      0
    ],
    "exp": "Cuando los supuestos paramétricos se cumplen, el test paramétrico es más potente."
  },
  {
    "q": "En el test de signos pareado, ¿qué se analiza?",
    "opts": [
      "Las diferencias entre pares de observaciones en las mismas unidades",
      "Las medias de dos muestras independientes",
      "La varianza de una sola muestra",
      "La proporción de éxitos"
    ],
    "c": [
      0
    ],
    "exp": "Se calculan diferencias dentro de cada par y se aplican signos a esas diferencias."
  },
  {
    "q": "¿Qué test es apropiado para comparar dos muestras independientes con datos ordinales?",
    "opts": [
      "Test de Wilcoxon-Mann-Whitney",
      "Test $t$ de Student",
      "ANOVA de un factor",
      "Test $\\chi^2$ de bondad de ajuste"
    ],
    "c": [
      0
    ],
    "exp": "Mann-Whitney compara dos muestras independientes usando rangos y solo exige una escala al menos ordinal."
  },
  {
    "q": "¿En qué se basa el estadístico $H$ de Kruskal-Wallis?",
    "opts": [
      "En los rangos de las observaciones combinadas de todos los grupos",
      "En las medias de cada grupo",
      "En las varianzas de cada grupo",
      "En las frecuencias observadas"
    ],
    "c": [
      0
    ],
    "exp": "Kruskal-Wallis ordena todas las observaciones juntas, asigna rangos y compara la suma de rangos por grupo mediante $H$."
  },
  {
    "q": "Si hay empates al asignar rangos, ¿qué convención se usa?",
    "opts": [
      "Asignar a los empates el rango promedio que les correspondería",
      "Eliminar todas las observaciones empatadas",
      "Asignar el rango mayor a todos los empates",
      "Ignorar los empates y seguir con el siguiente rango"
    ],
    "c": [
      0
    ],
    "exp": "Los empates reciben el promedio de los rangos que ocuparían; además se aplica una corrección en la varianza del estadístico."
  },
  {
    "q": "¿Qué mide el coeficiente de correlación de Spearman?",
    "opts": [
      "La fuerza y la dirección de la asociación monótona entre dos variables",
      "La relación lineal exacta entre dos variables",
      "La diferencia de medias entre dos grupos",
      "La varianza explicada por un modelo"
    ],
    "c": [
      0
    ],
    "exp": "Spearman trabaja con rangos y detecta relaciones crecientes o decrecientes, no necesariamente lineales."
  },
  {
    "q": "¿Cuál es la hipótesis nula del test de Wilcoxon-Mann-Whitney?",
    "opts": [
      "Que las dos poblaciones tienen la misma distribución",
      "Que las dos medias son iguales",
      "Que las dos varianzas son iguales",
      "Que las muestras son dependientes"
    ],
    "c": [
      0
    ],
    "exp": "Mann-Whitney contrasta igualdad de distribuciones (o igualdad de medianas si se añade el supuesto de forma común)."
  },
  {
    "q": "¿Qué test se usa para comparar $k>2$ muestras relacionadas?",
    "opts": [
      "Test de Friedman",
      "Test de Kruskal-Wallis",
      "Test de Wilcoxon-Mann-Whitney",
      "Test de signos para una mediana"
    ],
    "c": [
      0
    ],
    "exp": "Friedman es el test de rangos para diseños de bloques o medidas repetidas con $k>2$ condiciones."
  },
  {
    "q": "¿Qué supuesto adicional requiere el test de Wilcoxon de rangos con signos?",
    "opts": [
      "Que las diferencias sean simétricas respecto a cero",
      "Que los datos originales sean normales",
      "Que las varianzas de los grupos sean iguales",
      "Que las muestras sean independientes"
    ],
    "c": [
      0
    ],
    "exp": "Además del emparejamiento, el test de rangos con signos supone simetría de la distribución de las diferencias bajo $H_0$."
  },
  {
    "q": "En el test de signos, ¿qué se hace con las diferencias nulas?",
    "opts": [
      "Se eliminan y se reduce el tamaño muestral efectivo $n'$",
      "Se cuentan como positivas",
      "Se cuentan como negativas",
      "Se duplican para mantener $n$"
    ],
    "c": [
      0
    ],
    "exp": "Las diferencias nulas no aportan información sobre la dirección; se descartan y $n'$ es el número de diferencias no nulas."
  },
  {
    "q": "¿Por qué los métodos de rangos son robustos ante valores atípicos?",
    "opts": [
      "Porque solo usan la posición relativa de los datos, no su magnitud",
      "Porque eliminan automáticamente los outliers",
      "Porque transforman los datos a una normal",
      "Porque usan la media recortada"
    ],
    "c": [
      0
    ],
    "exp": "Un outlier extremo recibe el rango máximo, pero no arrastra la suma de rangos como arrastraría la media."
  },
  {
    "q": "¿Cuáles de las siguientes son ventajas de los tests no paramétricos?",
    "opts": [
      "Robustos a valores atípicos",
      "No exigen Normalidad",
      "Siempre más potentes que los paramétricos",
      "Estiman parámetros poblacionales exactos"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Son robustos y no exigen Normalidad, pero no son siempre más potentes ni estiman parámetros exactos."
  },
  {
    "q": "¿Cuáles tests son no paramétricos?",
    "opts": [
      "Test de signos",
      "Wilcoxon-Mann-Whitney",
      "t de Student para una media",
      "z-test para proporciones"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Signos y Mann-Whitney son no paramétricos; t y z son paramétricos."
  },
  {
    "q": "¿En qué se basa Kruskal-Wallis?",
    "opts": [
      "Rangos de todos los datos unidos",
      "Comparar k >= 2 grupos independientes",
      "Medias aritméticas de cada grupo",
      "Distribución F de Fisher"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Usa rangos unidos y compara más de dos grupos independientes."
  },
  {
    "q": "¿Qué distribución aproxima a W+ de Wilcoxon (rangos con signos) para n grande?",
    "opts": [
      "Normal con media n'(n'+1)/4",
      "Normal con varianza n'(n'+1)(2n'+1)/24",
      "Chi-cuadrado",
      "Binomial"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Para n' grande, W+ se aproxima a Normal con esa media y varianza."
  },
  {
    "q": "¿Qué mide r_s de Spearman?",
    "opts": [
      "Asociación monótona",
      "Relación basada en rangos",
      "Relación lineal perfecta siempre",
      "Diferencia de varianzas"
    ],
    "c": [
      0,
      1
    ],
    "exp": "mide asociación monótona mediante rangos, no linealidad perfecta obligatoria."
  },
  {
    "q": "¿Qué tests utilizan los rangos de los datos?",
    "opts": [
      "Test de Wilcoxon de rangos con signos",
      "Test de Wilcoxon-Mann-Whitney",
      "Test $\\chi^2$ de bondad de ajuste",
      "Test $z$ para una media"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los dos tests de Wilcoxon se basan en rangos; el $\\chi^2$ usa frecuencias y el $z$ usa medias y desviaciones."
  },
  {
    "q": "¿Qué tests se basan en las diferencias dentro de cada par?",
    "opts": [
      "Test de signos",
      "Test de Wilcoxon de rangos con signos",
      "Test de Wilcoxon-Mann-Whitney",
      "Test de Kruskal-Wallis"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Signos y rangos con signos trabajan con las diferencias dentro de cada par; los otros dos exigen muestras independientes."
  },
  {
    "q": "¿Qué tests permiten comparar $k>2$ grupos?",
    "opts": [
      "Test de Kruskal-Wallis",
      "ANOVA de un factor",
      "Test de Friedman",
      "Test de signos"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Kruskal-Wallis y ANOVA comparan $k$ grupos independientes; Friedman es para medidas repetidas y signos para dos medidas."
  },
  {
    "q": "¿Qué afirmaciones sobre Spearman son correctas?",
    "opts": [
      "Se calcula con los rangos de las observaciones",
      "Mide asociación monótona",
      "Exige normalidad bidimensional",
      "Solo admite variables nominales"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Spearman usa rangos, mide monotonía y no exige normalidad; las variables nominales no tienen orden y no admiten rangos."
  },
  {
    "q": "¿Qué afirmaciones sobre Mann-Whitney son correctas?",
    "opts": [
      "Compara dos muestras independientes",
      "No exige normalidad",
      "Requiere datos pareados",
      "Exige igualdad de varianzas"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Mann-Whitney es para muestras independientes, usa rangos y no requiere normalidad ni homocedasticidad."
  },
  {
    "q": "¿Qué afirmaciones sobre el test de signos son correctas?",
    "opts": [
      "Solo usa la dirección de las diferencias",
      "Descarta las diferencias nulas",
      "Usa la magnitud de las diferencias",
      "Exige normalidad de los datos"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test de signos ignora la magnitud: cuenta signos y elimina los ceros; no exige normalidad."
  },
  {
    "q": "¿Qué supuestos son innecesarios en muchos tests de rangos?",
    "opts": [
      "Normalidad de los datos",
      "Igualdad de varianzas entre grupos",
      "Independencia entre observaciones",
      "Que la variable sea al menos ordinal"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Los rangos evitan normalidad y homocedasticidad; la independencia (o el emparejamiento declarado) y el orden de la variable sí importan."
  },
  {
    "q": "¿Qué consecuencias tiene transformar los datos a rangos?",
    "opts": [
      "Reduce la influencia de los valores atípicos",
      "Puede perder algo de potencia si la normalidad se cumple",
      "Garantiza que los datos sean normales",
      "Aumenta siempre la potencia frente al test paramétrico"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El rango limita el peso de los extremos, pero si la normalidad es cierta el test paramétrico suele ser algo más potente."
  },
  {
    "q": "¿Qué procedimientos se basan en el signo de las diferencias?",
    "opts": [
      "Test de signos",
      "Test de Wilcoxon de rangos con signos",
      "Test de Wilcoxon-Mann-Whitney",
      "Test de Kruskal-Wallis"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El test de signos usa solo la dirección; el de rangos con signos usa dirección y magnitud, pero ambos parten del signo de las diferencias."
  },
  {
    "q": "¿Qué afirmaciones sobre el p-valor en un test no paramétrico son correctas?",
    "opts": [
      "Mide la compatibilidad de los datos con $H_0$",
      "No es la probabilidad de que $H_0$ sea cierta",
      "Sirve para comprobar la normalidad",
      "Mide directamente el tamaño del efecto"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El p-valor es $\\Prob{\\text{datos o más extremos}\\mid H_0}$; no cuantifica $\\Prob{H_0\\mid\\text{datos}}$ ni el tamaño del efecto."
  },
  {
    "q": "¿Qué tests pueden aplicarse a variables ordinales?",
    "opts": [
      "Coeficiente de Spearman",
      "Test de Wilcoxon-Mann-Whitney",
      "Test $t$ de Student",
      "Regresión lineal simple"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Spearman y Mann-Whitney solo requieren orden; el $t$ y la regresión lineal exigen una escala cuantitativa y supuestos distribucionales."
  },
  {
    "q": "¿Qué características tiene el test de Kruskal-Wallis?",
    "opts": [
      "Es una extensión de Mann-Whitney para $k$ grupos",
      "Combina los rangos de todas las muestras",
      "Exige normalidad",
      "Es un test para datos pareados"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Kruskal-Wallis generaliza Mann-Whitney a $k$ grupos independientes combinando rangos; no es pareado ni exige normalidad."
  },
  {
    "q": "¿Qué afirmaciones sobre la mediana son correctas?",
    "opts": [
      "Es resistente a valores atípicos extremos",
      "Es apropiada para describir datos sesgados",
      "Requiere simetría perfecta",
      "Coincide siempre con la media"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La mediana es robusta y adecuada con asimetría; solo coincide con la media en distribuciones simétricas."
  },
  {
    "q": "¿Qué pasos son correctos al aplicar Mann-Whitney?",
    "opts": [
      "Ordenar las observaciones conjuntamente y asignar rangos",
      "Sumar los rangos de cada grupo",
      "Calcular las medias de cada grupo",
      "Exigir normalidad antes del test"
    ],
    "c": [
      0,
      1
    ],
    "exp": "El estadístico se construye con los rangos combinados y las sumas por grupo; las medias no intervienen y la normalidad no es necesaria."
  },
  {
    "q": "¿Qué situaciones sugieren usar un test no paramétrico?",
    "opts": [
      "Muestra pequeña con distribución desconocida",
      "Datos medidos en escala ordinal",
      "Normalidad clara con $n$ grande",
      "Varianzas poblacionales conocidas"
    ],
    "c": [
      0,
      1
    ],
    "exp": "La falta de normalidad con $n$ pequeño y las escalas ordinales son los casos típicos; con normalidad y $n$ grande el test paramétrico es preferible."
  },
  {
    "q": "¿Cuáles son supuestos típicos de tests paramétricos que los no paramétricos relajan?",
    "opts": [
      "Normalidad de los datos",
      "Homocedasticidad",
      "Datos a escala de intervalo o razón",
      "Tamaño muestral grande"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Relajan Normalidad, homocedasticidad y la exigencia de escala intervalo/razón."
  },
  {
    "q": "¿Qué estadísticos se usan en Wilcoxon-Mann-Whitney?",
    "opts": [
      "Rangos de los datos unidos",
      "Suma de rangos de cada muestra",
      "Estadístico U",
      "Medias aritméticas brutas"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Todo se basa en rangos y en U derivado de las sumas de rangos."
  },
  {
    "q": "¿Cuándo usar Kruskal-Wallis en lugar de ANOVA?",
    "opts": [
      "Datos no normales",
      "k >= 2 grupos independientes",
      "Datos ordinales",
      "Varianzas muy desiguales sin transformación"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Es el equivalente no paramétrico de ANOVA para k grupos cuando fallan supuestos."
  },
  {
    "q": "¿Qué diseños usa Friedman?",
    "opts": [
      "Bloques completos",
      "Varios tratamientos por bloque",
      "Rangos dentro de cada bloque",
      "Muestras independientes sin emparejamiento"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Friedman requiere bloques con todos los tratamientos y usa rangos intra-bloque."
  },
  {
    "q": "¿Qué indica un valor grande de H en Kruskal-Wallis?",
    "opts": [
      "Al menos un grupo difiere de los otros",
      "Las distribuciones no son todas iguales",
      "El estadístico excede el valor crítico de chi²",
      "Todas las medias son iguales"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "H grande rechaza H0: al menos un grupo es diferente."
  },
  {
    "q": "¿Qué afirmaciones sobre los tests no paramétricos son correctas?",
    "opts": [
      "Usan rangos o signos",
      "No exigen normalidad",
      "Son robustos ante valores atípicos",
      "Son siempre más potentes que los paramétricos"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Sus tres rasgos definitorios son rangos o signos, ausencia de normalidad y robustez; la potencia no es siempre mayor."
  },
  {
    "q": "¿Qué tests pueden usarse para comparar dos muestras independientes?",
    "opts": [
      "Test de Wilcoxon-Mann-Whitney",
      "Test $t$ de Student si se cumplen sus supuestos",
      "Test de Kruskal-Wallis con dos grupos",
      "Test de Friedman"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Mann-Whitney es el no paramétrico; el $t$ es válido con supuestos; Kruskal-Wallis con dos grupos equivale a Mann-Whitney. Friedman es para medidas repetidas."
  },
  {
    "q": "¿Qué tests son apropiados para datos pareados?",
    "opts": [
      "Test de signos",
      "Test de Wilcoxon de rangos con signos",
      "Test $t$ pareado si las diferencias son normales",
      "Test de Wilcoxon-Mann-Whitney"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Signos, rangos con signos y $t$ pareado trabajan con diferencias; Mann-Whitney exige independencia."
  },
  {
    "q": "¿Qué afirmaciones sobre el coeficiente de Spearman son correctas?",
    "opts": [
      "Toma valores entre $-1$ y $1$",
      "Mide asociación monótona",
      "Se basa en los rangos",
      "Demuestra causalidad"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Spearman está acotado en $[-1,1]$, mide monotonía y usa rangos; como toda correlación, no prueba causalidad."
  },
  {
    "q": "¿Qué afirmaciones sobre Kruskal-Wallis son correctas?",
    "opts": [
      "Bajo $H_0$, $H$ se distribuye aproximadamente como $\\chi^2$ con $k-1$ grados de libertad",
      "Compara las distribuciones de $k$ grupos independientes",
      "No exige normalidad",
      "Requiere datos pareados"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La aproximación $\\chi^2_{k-1}$ es la habitual; el test compara distribuciones de grupos independientes y no exige normalidad."
  },
  {
    "q": "¿Qué afirmaciones sobre Friedman son correctas?",
    "opts": [
      "Se usa con bloques o medidas repetidas",
      "Asigna rangos dentro de cada bloque",
      "Su estadístico se aproxima por $\\chi^2$ con $k-1$ grados de libertad",
      "Compara dos grupos independientes"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Friedman ordena las condiciones dentro de cada bloque y aproxima su estadístico por $\\chi^2_{k-1}$."
  },
  {
    "q": "¿Qué ventajas aportan los métodos de rangos?",
    "opts": [
      "Robustez ante valores atípicos",
      "Aplicabilidad a datos ordinales",
      "No requieren especificar la forma de la distribución",
      "Mayor potencia en todos los casos"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Las tres primeras son ventajas reales; la cuarta es falsa: con supuestos paramétricos ciertos, el test paramétrico suele ser más potente."
  },
  {
    "q": "¿Qué condiciones son necesarias para aplicar Mann-Whitney?",
    "opts": [
      "Independencia entre las dos muestras",
      "Variable medida al menos en escala ordinal",
      "Muestras aleatorias de sus poblaciones",
      "Normalidad de ambas poblaciones"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Independencia, orden y aleatoriedad son necesarios; la normalidad no."
  },
  {
    "q": "¿Qué propiedades del test de signos son correctas?",
    "opts": [
      "Solo usa la dirección de las diferencias",
      "Bajo $H_0$, el número de signos positivos sigue $\\Bi{n'}{0{,}5}$",
      "Descarta las diferencias nulas",
      "Usa la magnitud de las diferencias"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El test de signos ignora la magnitud: cuenta signos, descarta ceros y compara con una binomial de parámetro $0{,}5$."
  },
  {
    "q": "¿Qué afirmaciones sobre Wilcoxon de rangos con signos son correctas?",
    "opts": [
      "Usa el signo y la magnitud de las diferencias",
      "Requiere simetría de las diferencias",
      "Es un test para datos pareados",
      "Exige normalidad de los datos originales"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Combina signos y rangos de las magnitudes, supone simetría y se aplica a pares; no exige normalidad."
  },
  {
    "q": "¿Qué afirmaciones sobre las hipótesis nulas son correctas?",
    "opts": [
      "Mann-Whitney: las dos distribuciones son iguales",
      "Kruskal-Wallis: las $k$ distribuciones son iguales",
      "Friedman: los efectos de los tratamientos son iguales en los bloques",
      "Todos contrastan igualdad de medias exactas"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tests de rangos contrastan igualdad de distribuciones o de efectos; no se limitan a medias exactas."
  },
  {
    "q": "¿Qué errores son frecuentes al usar tests no paramétricos?",
    "opts": [
      "Aplicar Mann-Whitney a datos pareados",
      "Ignorar los empates al calcular rangos",
      "Interpretarlos como contrastes de medias exactas",
      "Comprobar los supuestos antes de elegir el test"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Los tres primeros son errores; comprobar supuestos antes de elegir es una buena práctica."
  },
  {
    "q": "¿Qué información proporcionan los rangos?",
    "opts": [
      "La posición relativa de cada dato",
      "El orden de las observaciones",
      "Una medida robusta frente a extremos",
      "La magnitud absoluta de cada dato"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "El rango codifica posición y orden y reduce el peso de los extremos; por construcción pierde la magnitud absoluta."
  },
  {
    "q": "¿Qué afirmaciones sobre el tamaño muestral en tests de rangos son correctas?",
    "opts": [
      "Con $n$ grande se usa la aproximación normal",
      "Con $n$ pequeño se usan tablas exactas",
      "Los empates requieren corrección de la varianza",
      "Exigen siempre $n>100$"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "La aproximación normal es para $n$ grande, las tablas exactas para $n$ pequeño y los empates exigen corrección."
  },
  {
    "q": "¿Qué pasos corresponden a un análisis no paramétrico completo?",
    "opts": [
      "Plantear $H_0$ y $H_1$ antes de ver los datos",
      "Elegir el test según el diseño y la escala",
      "Reportar estadístico, p-valor y tamaño del efecto",
      "Cambiar de test si el primero no sale significativo"
    ],
    "c": [
      0,
      1,
      2
    ],
    "exp": "Planificar, elegir según el diseño y reportar completo son correctos; cambiar de test tras ver el p-valor es una mala práctica."
  }
];
