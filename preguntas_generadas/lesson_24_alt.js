// Leccion 24 — Metodos No Parametricos
// Generados para cubrir el gap G1 del informe de revision
window.LESSON_QUESTIONS_ALT[24] = [
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
  }
];
