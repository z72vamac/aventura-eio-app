// Leccion 25 — ANOVA
// Generados para cubrir el gap G2 del informe de revision
window.LESSON_QUESTIONS_ALT[25] = [
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
    "q": "¿Qué significa rechazar H0 en ANOVA?",
    "opts": [
      "Al menos una media difiere",
      "Cuáles medias difieren exactamente",
      "No se puede concluir nada",
      "Todas las medias son diferentes"
    ],
    "c": [
      0,
      1
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
      0,
      1
    ],
    "exp": "MCE es la media de cuadrados entre grupos; MCD es la dentro de grupos."
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
    "q": "¿Qué indica una interaccion significativa en ANOVA de dos factores?",
    "opts": [
      "El efecto de un factor depende del nivel del otro",
      "Las lineas de medios se cruzan",
      "Los efectos son aditivos",
      "No hay efecto de ninguno de los factores"
    ],
    "c": [
      0,
      1
    ],
    "exp": "Interaccion significa que el efecto de A cambia segun el nivel de B."
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
  }
];
