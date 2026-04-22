const tramites = [
  {
    id: "clave-unica",
    titulo: "Clave Única",
    resumen: "Código personal para acceder a servicios digitales del Estado de Chile.",
    descripcion: "La Clave Única permite identificarte en plataformas públicas y realizar trámites en línea sin ir a una oficina. Es gratuita y se puede obtener por internet o presencialmente.",
    institucion: "Registro Civil",
    tiempo: "10 a 20 minutos",
    dificultad: "Baja",
    modalidad: "Online o presencial",
    requisitos: ["Cédula de identidad vigente.", "Correo electrónico personal.", "Teléfono o dispositivo para completar la verificación."],
    pasos: ["Ingresa al sitio oficial del Registro Civil o ChileAtiende.", "Solicita el código de activación y valida tu identidad.", "Crea tu contraseña y guarda tus datos de acceso en un lugar seguro."],
    errores_comunes: ["Usar un correo al que no tienes acceso.", "Confundir el código de activación con la contraseña final.", "No revisar la vigencia de la cédula antes de comenzar."],
    documentos: ["Cédula de identidad"],
    relacionadas: ["certificado-antecedentes", "registro-social-hogares", "fonasa"],
    url: "https://www.chileatiende.gob.cl/fichas/11331-claveunica",
    categoria: "Identidad y certificados"
  },
  {
    id: "inicio-actividades",
    titulo: "Inicio de actividades",
    resumen: "Aviso al SII para comenzar una actividad económica como persona o empresa.",
    descripcion: "El inicio de actividades informa al Servicio de Impuestos Internos que empezarás a emitir boletas, facturas o desarrollar una actividad comercial. Es un paso clave para emprender formalmente.",
    institucion: "Servicio de Impuestos Internos",
    tiempo: "15 a 30 minutos",
    dificultad: "Media",
    modalidad: "Online",
    requisitos: ["RUT o Clave Tributaria.", "Definir la actividad económica que realizarás.", "Domicilio tributario actualizado."],
    pasos: ["Entra al sitio del SII con tus credenciales.", "Busca la opción de inicio de actividades.", "Completa el giro, dirección y datos solicitados.", "Revisa el resumen y confirma el envío."],
    errores_comunes: ["Elegir un giro que no representa tu actividad real.", "Ingresar un domicilio tributario incompleto.", "No revisar si necesitas documentos adicionales por tu tipo de actividad."],
    documentos: ["RUT", "Clave Tributaria", "Antecedentes del domicilio"],
    relacionadas: ["operacion-renta", "permiso-circulacion", "clave-unica"],
    url: "https://www.sii.cl",
    categoria: "Trabajo e impuestos"
  },
  {
    id: "fonasa",
    titulo: "Afiliación a Fonasa",
    resumen: "Inscripción al sistema público de salud para acceder a cobertura médica.",
    descripcion: "La afiliación a Fonasa permite recibir cobertura en la red pública y comprar bonos de atención. Pueden inscribirse trabajadores, pensionados, personas sin ingresos y cargas familiares.",
    institucion: "Fonasa",
    tiempo: "10 a 25 minutos",
    dificultad: "Baja",
    modalidad: "Online o presencial",
    requisitos: ["Cédula de identidad.", "Clave Única para el trámite online.", "Antecedentes laborales o previsionales si corresponde."],
    pasos: ["Ingresa al sitio de Fonasa o ChileAtiende.", "Selecciona la solicitud de afiliación.", "Completa tus datos y adjunta antecedentes si se piden.", "Descarga o guarda el comprobante."],
    errores_comunes: ["No declarar correctamente las cargas familiares.", "No actualizar datos después de cambiar de trabajo.", "Intentar afiliarse sin tener documentos básicos a mano."],
    documentos: ["Cédula de identidad", "Contrato o liquidación si aplica", "Certificado de cargas si aplica"],
    relacionadas: ["clave-unica", "registro-social-hogares", "bono-invierno"],
    url: "https://www.fonasa.cl",
    categoria: "Salud y previsión"
  },
  {
    id: "subsidio-ds1",
    titulo: "Subsidio DS1",
    resumen: "Apoyo estatal para comprar o construir una vivienda para familias de sectores medios.",
    descripcion: "El Subsidio DS1 ayuda a familias que tienen capacidad de ahorro y buscan comprar o construir una vivienda. La postulación depende del tramo, ahorro mínimo y Registro Social de Hogares.",
    institucion: "Ministerio de Vivienda y Urbanismo",
    tiempo: "Según calendario de postulación",
    dificultad: "Media",
    modalidad: "Online",
    requisitos: ["Cuenta de ahorro para la vivienda.", "Ahorro mínimo depositado antes de la fecha exigida.", "Registro Social de Hogares actualizado.", "No ser propietario de una vivienda, salvo excepciones."],
    pasos: ["Revisa el llamado vigente del Minvu.", "Comprueba tu tramo y ahorro mínimo.", "Ingresa con Clave Única al portal de postulación.", "Completa la solicitud y guarda el comprobante."],
    errores_comunes: ["Depositar el ahorro después de la fecha límite.", "No actualizar el Registro Social de Hogares.", "Postular a un tramo que no corresponde a tu situación."],
    documentos: ["Clave Única", "Cuenta de ahorro", "Registro Social de Hogares"],
    relacionadas: ["registro-social-hogares", "clave-unica", "bono-invierno"],
    url: "https://www.minvu.gob.cl",
    categoria: "Vivienda y subsidios"
  },
  {
    id: "permiso-circulacion",
    titulo: "Permiso de circulación",
    resumen: "Pago anual que autoriza a un vehículo a circular legalmente.",
    descripcion: "El permiso de circulación se paga cada año en una municipalidad. Para obtenerlo debes tener al día la revisión técnica, SOAP, multas y otros antecedentes del vehículo.",
    institucion: "Municipalidades",
    tiempo: "10 a 30 minutos",
    dificultad: "Baja",
    modalidad: "Online o presencial",
    requisitos: ["Permiso anterior.", "SOAP vigente.", "Revisión técnica y gases al día.", "No registrar multas impagas asociadas al vehículo."],
    pasos: ["Entra al portal de la municipalidad donde pagarás.", "Ingresa la patente del vehículo.", "Revisa antecedentes y multas.", "Paga y descarga el comprobante."],
    errores_comunes: ["Comprar el SOAP con datos incorrectos.", "Olvidar revisar multas pendientes.", "Pagar fuera del plazo y generar intereses o multas."],
    documentos: ["Permiso anterior", "SOAP", "Revisión técnica"],
    relacionadas: ["licencia-conducir", "certificado-antecedentes", "inicio-actividades"],
    url: "https://www.chileatiende.gob.cl",
    categoria: "Transporte"
  },
  {
    id: "certificado-antecedentes",
    titulo: "Certificado de antecedentes",
    resumen: "Documento que informa si una persona registra antecedentes penales.",
    descripcion: "Este certificado se solicita para fines particulares, laborales u otros trámites. Puede obtenerse en línea con Clave Única o presencialmente en oficinas habilitadas.",
    institucion: "Registro Civil",
    tiempo: "5 a 10 minutos",
    dificultad: "Baja",
    modalidad: "Online o presencial",
    requisitos: ["Cédula de identidad.", "Clave Única para solicitarlo por internet.", "Seleccionar el tipo de certificado requerido."],
    pasos: ["Ingresa al portal del Registro Civil.", "Selecciona certificado de antecedentes.", "Autentícate con Clave Única.", "Descarga el certificado en PDF."],
    errores_comunes: ["Elegir un certificado distinto al solicitado.", "No revisar el objetivo del documento antes de descargarlo.", "Usar una Clave Única bloqueada o desactualizada."],
    documentos: ["Clave Única", "Cédula de identidad"],
    relacionadas: ["clave-unica", "licencia-conducir", "registro-social-hogares"],
    url: "https://www.registrocivil.cl",
    categoria: "Identidad y certificados"
  },
  {
    id: "operacion-renta",
    titulo: "Operación Renta",
    resumen: "Proceso anual para declarar ingresos y revisar devolución o pago de impuestos.",
    descripcion: "La Operación Renta permite declarar ingresos del año anterior. El SII suele proponer una declaración, pero es importante revisar los datos antes de enviarla.",
    institucion: "Servicio de Impuestos Internos",
    tiempo: "20 a 45 minutos",
    dificultad: "Media",
    modalidad: "Online",
    requisitos: ["Clave Tributaria o Clave Única.", "Información de ingresos, boletas, sueldos o inversiones.", "Datos bancarios si corresponde devolución."],
    pasos: ["Ingresa al portal de renta del SII.", "Revisa la propuesta de declaración.", "Corrige o agrega información si falta.", "Envía la declaración y guarda el comprobante."],
    errores_comunes: ["Enviar sin revisar boletas o retenciones.", "Ingresar una cuenta bancaria incorrecta.", "No declarar ingresos adicionales cuando corresponde."],
    documentos: ["Clave Tributaria", "Comprobantes de ingresos", "Datos bancarios"],
    relacionadas: ["inicio-actividades", "clave-unica", "registro-social-hogares"],
    url: "https://www.sii.cl",
    categoria: "Trabajo e impuestos"
  },
  {
    id: "registro-social-hogares",
    titulo: "Registro Social de Hogares",
    resumen: "Sistema que clasifica hogares para acceder a beneficios sociales.",
    descripcion: "El Registro Social de Hogares reúne información del grupo familiar, ingresos y domicilio. Mantenerlo actualizado ayuda a postular correctamente a beneficios del Estado.",
    institucion: "Ministerio de Desarrollo Social y Familia",
    tiempo: "20 a 40 minutos",
    dificultad: "Media",
    modalidad: "Online o municipal",
    requisitos: ["Clave Única.", "Datos de quienes viven en el hogar.", "Documentos que acrediten domicilio o composición familiar si se solicitan."],
    pasos: ["Ingresa al portal del Registro Social de Hogares.", "Revisa tu cartola actual.", "Solicita actualización si hay cambios.", "Adjunta documentos y espera la revisión."],
    errores_comunes: ["No incluir a todos los integrantes del hogar.", "Mantener un domicilio antiguo.", "No adjuntar documentos cuando el sistema los solicita."],
    documentos: ["Clave Única", "Comprobante de domicilio", "Documentos familiares si aplica"],
    relacionadas: ["subsidio-ds1", "bono-invierno", "fonasa"],
    url: "https://registrosocial.gob.cl",
    categoria: "Beneficios sociales"
  },
  {
    id: "licencia-conducir",
    titulo: "Licencia de conducir",
    resumen: "Documento municipal que habilita a conducir vehículos según la clase autorizada.",
    descripcion: "La licencia de conducir se solicita en la municipalidad correspondiente. Normalmente incluye examen médico, teórico y práctico, además de documentos personales.",
    institucion: "Municipalidades",
    tiempo: "Variable según agenda municipal",
    dificultad: "Media",
    modalidad: "Presencial",
    requisitos: ["Cédula de identidad vigente.", "Certificado de estudios, según clase solicitada.", "Rendir exámenes exigidos por la municipalidad."],
    pasos: ["Agenda hora en tu municipalidad.", "Reúne documentos personales y certificado de estudios.", "Rinde examen médico, teórico y práctico.", "Paga los derechos municipales si apruebas."],
    errores_comunes: ["Llegar sin certificado de estudios.", "No estudiar el material oficial para el examen teórico.", "Agendar en una municipalidad que no corresponde a tu domicilio."],
    documentos: ["Cédula de identidad", "Certificado de estudios", "Comprobante de domicilio si lo piden"],
    relacionadas: ["permiso-circulacion", "certificado-antecedentes", "clave-unica"],
    url: "https://www.chileatiende.gob.cl",
    categoria: "Transporte"
  },
  {
    id: "bono-invierno",
    titulo: "Bono Invierno",
    resumen: "Beneficio estatal para apoyar a personas pensionadas durante los meses fríos.",
    descripcion: "El Bono Invierno es un aporte que se paga a personas que cumplen requisitos de edad, pensión y situación previsional. Generalmente se entrega de forma automática si corresponde.",
    institucion: "Instituto de Previsión Social",
    tiempo: "Pago según calendario anual",
    dificultad: "Baja",
    modalidad: "Automático o consulta online",
    requisitos: ["Cumplir edad mínima definida para el beneficio.", "Recibir una pensión que califique.", "No superar límites o condiciones establecidos para el año."],
    pasos: ["Revisa si cumples las condiciones generales.", "Consulta con tu RUT en canales oficiales.", "Verifica fecha y forma de pago.", "Solicita orientación si no aparece el beneficio y crees cumplir requisitos."],
    errores_comunes: ["Asumir que requiere postulación cuando suele ser automático.", "No revisar la institución pagadora.", "Confundirlo con otros bonos estacionales."],
    documentos: ["Cédula de identidad", "Datos de pensión"],
    relacionadas: ["fonasa", "registro-social-hogares", "subsidio-ds1"],
    url: "https://www.chileatiende.gob.cl",
    categoria: "Beneficios sociales"
  }
];

let establecimientosDiferenciales = [];
let schoolsDataLoadError = false;
let schoolsDataLoadPromise = null;
let activeSchoolFilter = "all";
let plantasPrt = [];
let prtDataLoadError = false;
let prtDataLoadPromise = null;
let activePrtFilter = "all";

const loadSchoolsData = async () => {
  if (schoolsDataLoadPromise) return schoolsDataLoadPromise;

  schoolsDataLoadPromise = fetch("./data/colegios.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar colegios.json (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      establecimientosDiferenciales = Array.isArray(data) ? data : [];
      schoolsDataLoadError = false;
      return establecimientosDiferenciales;
    })
    .catch((error) => {
      console.error("Error al cargar establecimientos diferenciales:", error);
      establecimientosDiferenciales = [];
      schoolsDataLoadError = true;
      return establecimientosDiferenciales;
    });

  return schoolsDataLoadPromise;
};

const loadPrtData = async () => {
  if (prtDataLoadPromise) return prtDataLoadPromise;

  prtDataLoadPromise = fetch("./data/plantas-prt.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar plantas-prt.json (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      plantasPrt = Array.isArray(data) ? data : [];
      prtDataLoadError = false;
      return plantasPrt;
    })
    .catch((error) => {
      console.error("Error al cargar plantas de revisión técnica:", error);
      plantasPrt = [];
      prtDataLoadError = true;
      return plantasPrt;
    });

  return prtDataLoadPromise;
};

const placeholderExamples = [
  "¿Cómo saco mi Clave Única?",
  "Pasos para iniciar actividades",
  "Cómo postular al subsidio DS1",
  "Certificado de antecedentes",
  "Cómo afiliarme a Fonasa"
];

const bureaucracyDictionary = {
  rsh: {
    title: "Registro Social de Hogares",
    simple: "Es una base de información sobre tu hogar que muchas instituciones usan para evaluar beneficios.",
    related: ["Registro Social de Hogares", "Subsidio DS1", "beneficios sociales"]
  },
  pie: {
    title: "Programa de Integración Escolar",
    simple: "Es un apoyo dentro de algunos establecimientos para estudiantes que requieren ayudas educativas específicas.",
    related: ["educación especial", "escuela especial", "apoyo escolar"]
  },
  ds1: {
    title: "Subsidio DS1",
    simple: "Es un apoyo habitacional para familias de sectores medios que quieren comprar o construir vivienda y cumplen requisitos.",
    related: ["ahorro mínimo", "vivienda", "Minvu"]
  },
  "clave unica": {
    title: "Clave Única",
    simple: "Es una contraseña personal para entrar a servicios digitales del Estado y hacer trámites en línea.",
    related: ["Registro Civil", "ChileAtiende"]
  },
  "inicio de actividades": {
    title: "Inicio de actividades",
    simple: "Es avisarle al SII que empezarás una actividad económica para emitir boletas, facturas o trabajar formalmente.",
    related: ["SII", "giro", "boletas"]
  },
  giro: {
    title: "Giro",
    simple: "Es la actividad económica que declaras ante el SII. Debe parecerse a lo que realmente vendes o haces.",
    related: ["inicio de actividades", "SII"]
  },
  tramo: {
    title: "Tramo",
    simple: "Es una clasificación que puede usarse para ordenar hogares, ingresos o cobertura, según el sistema del trámite.",
    related: ["RSH", "Fonasa"]
  },
  dependencia: {
    title: "Dependencia",
    simple: "En educación, indica quién administra o financia principalmente un establecimiento: municipal, particular subvencionado, particular, entre otros.",
    related: ["educación especial", "colegios"]
  },
  "subsidio habitacional": {
    title: "Subsidio habitacional",
    simple: "Es un apoyo del Estado para comprar, construir, arrendar o mejorar una vivienda, según el programa y requisitos.",
    related: ["Subsidio DS1", "Minvu", "ahorro vivienda"]
  },
  "ahorro minimo": {
    title: "Ahorro mínimo",
    simple: "Es el monto que debes tener guardado antes de una fecha definida para postular a ciertos subsidios.",
    related: ["Subsidio DS1", "cuenta de ahorro"]
  },
  "carga familiar": {
    title: "Carga familiar",
    simple: "Es una persona que depende económicamente de otra y puede influir en beneficios, salud o asignaciones.",
    related: ["beneficios", "RSH", "Fonasa"]
  }
};

const casesData = {
  "tengo-personas-a-cargo": {
    title: "Tengo hijos o personas a cargo",
    summary: "Podrías partir por ordenar datos del hogar, salud, apoyos familiares y educación.",
    steps: ["Revisa o actualiza tu Registro Social de Hogares.", "Ten a mano datos de hijos o personas a cargo.", "Revisa Fonasa y beneficios familiares.", "Explora apoyos de educación si corresponde.", "Usa el perfilador de beneficios para priorizar."],
    recommendations: ["Registro Social de Hogares", "Fonasa", "Beneficios familiares", "Educación y cuidados"],
    links: [
      { label: "Revisar beneficios", href: "./beneficios.html" },
      { label: "Ver RSH", href: "./resultados.html?q=Registro%20Social%20de%20Hogares" }
    ]
  },
  "quiero-emprender": {
    title: "Quiero emprender",
    summary: "La ruta inicial suele ser ordenar acceso, formalización básica y documentos tributarios.",
    steps: ["Valida Clave Única o clave tributaria.", "Define giro y si operarás como persona natural o empresa.", "Revisa inicio de actividades.", "Define boletas o facturas.", "Evalúa permisos si vendes alimentos u otros productos regulados."],
    recommendations: ["Inicio de actividades", "Giro", "Boletas o facturas"],
    links: [
      { label: "Ir a emprender", href: "./emprender.html" },
      { label: "Ver inicio de actividades", href: "./resultados.html?q=Inicio%20de%20actividades" }
    ]
  },
  "apoyo-escolar": {
    title: "Busco orientación para apoyo escolar",
    summary: "Primero conviene entender el tipo de apoyo y luego revisar opciones por comuna.",
    steps: ["Reúne antecedentes del estudiante.", "Distingue escuela especial, escuela de lenguaje y PIE.", "Busca opciones por comuna.", "Contacta establecimientos y confirma cupos.", "Consulta canales oficiales de Mineduc."],
    recommendations: ["Educación especial", "PIE", "Escuela de lenguaje"],
    links: [
      { label: "Buscar educación especial", href: "./educacion-especial.html" },
      { label: "Traducir PIE", href: "./traductor.html" }
    ]
  },
  "acompano-adulto-mayor": {
    title: "Acompaño a una persona mayor",
    summary: "Podrías revisar salud, Registro Social de Hogares y beneficios para pensionados o personas mayores.",
    steps: ["Confirma datos del hogar en RSH.", "Revisa Fonasa o cobertura de salud.", "Consulta posibles bonos o apoyos.", "Ten documentos de pensión a mano.", "Usa beneficios para priorizar opciones."],
    recommendations: ["Bono Invierno", "Fonasa", "Registro Social de Hogares"],
    links: [
      { label: "Ver Bono Invierno", href: "./resultados.html?q=Bono%20Invierno" },
      { label: "Revisar beneficios", href: "./beneficios.html" }
    ]
  },
  "sin-ingresos": {
    title: "Estoy sin ingresos y no sé por dónde partir",
    summary: "La prioridad suele ser ordenar RSH, salud y apoyos de ingresos antes de trámites más específicos.",
    steps: ["Revisa si tienes Registro Social de Hogares.", "Actualiza integrantes y domicilio.", "Revisa Fonasa.", "Explora beneficios o bonos vigentes.", "Define si necesitas ruta laboral, vivienda o apoyo familiar."],
    recommendations: ["RSH", "Fonasa", "Beneficios", "Diagnóstico inicial"],
    links: [
      { label: "Hacer diagnóstico", href: "./diagnostico.html" },
      { label: "Revisar beneficios", href: "./beneficios.html" }
    ]
  }
};

const caseAliases = {
  "mama-soltera": "tengo-personas-a-cargo",
  "emprender-internet": "quiero-emprender",
  "adulto-mayor": "acompano-adulto-mayor"
};

const normalizeText = (text) =>
  String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?.,]/g, "")
    .trim();

const USER_PROFILE_KEY = "chilefacil_userProfile";

const saveUserProfile = (data) => {
  const current = getUserProfile();
  const profile = {
    ...current,
    ...data,
    ultimaInteraccion: Date.now()
  };

  localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  return profile;
};

const getUserProfile = () => {
  try {
    return JSON.parse(localStorage.getItem(USER_PROFILE_KEY)) || null;
  } catch (error) {
    console.warn("No se pudo leer el perfil guardado:", error);
    return null;
  }
};

const hasUserProfile = () => Boolean(getUserProfile());

const generateDynamicAlerts = (profile = getUserProfile()) => {
  const alerts = [];

  if (!profile) {
    return [
      { icon: "🗳️", title: "¿Tienes que votar pronto?", text: "Revisa tu local de votación en segundos desde el sitio oficial.", href: "./votacion.html" },
      { icon: "🚗", title: "Revisión técnica y permiso", text: "Podrías buscar una planta por comuna antes de renovar documentos del vehículo.", href: "./revision-tecnica.html" },
      { icon: "🧭", title: "No sabes por dónde partir", text: "Haz un diagnóstico rápido y recibe una ruta inicial.", href: "./diagnostico.html" },
      { icon: "🧾", title: "Revisar beneficios sin promesas", text: "Explora apoyos posibles según tu situación.", href: "./beneficios.html" }
    ];
  }

  if (profile.situacion === "sin-ingresos" || profile.etapa === "sin-ingresos") {
    alerts.push({ icon: "🧾", title: "Podrías priorizar ingresos y RSH", text: "Revisa apoyos de ingresos y datos del Registro Social de Hogares.", href: "./beneficios.html?modo=perfil" });
    alerts.push({ icon: "🏠", title: "Clasificación social actualizada", text: "Explora beneficios que suelen usar información del hogar.", href: "./resultados.html?q=Registro%20Social%20de%20Hogares" });
  }

  if (profile.necesidad === "vivienda" || profile.interes === "vivienda" || profile.ayuda === "vivienda") {
    alerts.push({ icon: "🏠", title: "Ordena ahorro + RSH", text: "Antes de postular, revisa RSH, ahorro y llamado vigente.", href: "./casa.html" });
    alerts.push({ icon: "🧾", title: "Subsidio DS1 podría ser relevante", text: "Revísalo si ya tienes ahorro y estás mirando vivienda.", href: "./resultados.html?q=Subsidio%20DS1" });
  }

  if (profile.cargas === "si" || profile.situacion === "cargas") {
    alerts.push({ icon: "👨‍👩‍👧", title: "Apoyos familiares", text: "Podrías revisar beneficios asociados a cargas y composición del hogar.", href: "./beneficios.html?modo=perfil" });
    alerts.push({ icon: "🎓", title: "Educación y cuidados", text: "Si buscas apoyo escolar, revisa educación especial por comuna.", href: "./educacion-especial.html" });
  }

  if (profile.necesidad === "educacion") {
    alerts.push({ icon: "🎓", title: "Esto podría servir para apoyo escolar", text: "Compara escuela especial, escuela de lenguaje y PIE.", href: "./educacion-especial.html" });
  }

  if (profile.necesidad === "emprender" || profile.situacion === "cuenta-propia") {
    alerts.push({ icon: "💼", title: "Formalización inicial", text: "Revisa inicio de actividades, giro y documentos tributarios.", href: "./emprender.html" });
  }

  if (profile.situacion === "pensionado" || profile.etapa === "pensionado") {
    alerts.push({ icon: "☂️", title: "Persona pensionada", text: "Podrías revisar Bono Invierno y cobertura de salud.", href: "./resultados.html?q=Bono%20Invierno" });
  }

  if (profile.necesidad === "transporte" || profile.interes === "vehiculo" || profile.vehiculo === "si") {
    alerts.push({ icon: "🚗", title: "Permiso y revisión técnica", text: "Si estás resolviendo documentos del vehículo, revisa también plantas de revisión técnica por comuna.", href: "./revision-tecnica.html" });
  }

  return alerts.slice(0, 4);
};

const generateNextSteps = (profile = getUserProfile()) => {
  const steps = [];

  const addStep = (text, href) => {
    const exists = steps.some((step) => step.text === text || step.href === href);
    if (!exists) {
      steps.push({ text, href });
    }
  };

  if (!profile) {
    return [
      { text: "Haz el diagnóstico inicial", href: "./diagnostico.html" },
      { text: "Explora una ruta por objetivo", href: "./index.html#soluciones" },
      { text: "Revisa trámites básicos como Clave Única", href: "./resultados.html?q=Clave%20Unica" }
    ];
  }

  if (profile.situacion === "sin-ingresos" || profile.etapa === "sin-ingresos") {
    addStep("Verifica si tienes Registro Social de Hogares", "./resultados.html?q=Registro%20Social%20de%20Hogares");
    addStep("Revisa tu situación en Fonasa", "./resultados.html?q=Fonasa");
    addStep("Explora apoyos de ingresos disponibles", "./beneficios.html?modo=perfil");
  }

  if (profile.necesidad === "vivienda" || profile.interes === "vivienda" || profile.ayuda === "vivienda") {
    addStep("Confirma si tienes ahorro para vivienda", "./casa.html");
    addStep("Revisa tu tramo en el Registro Social de Hogares", "./resultados.html?q=Registro%20Social%20de%20Hogares");
    addStep("Explora Subsidio DS1", "./resultados.html?q=Subsidio%20DS1");
  }

  if (profile.situacion === "cargas" || profile.cargas === "si") {
    addStep("Actualiza datos de tu hogar en el RSH", "./resultados.html?q=Registro%20Social%20de%20Hogares");
    addStep("Revisa apoyos familiares disponibles", "./beneficios.html?modo=perfil");
    addStep("Evalúa educación o cuidado si aplica", "./educacion-especial.html");
  }

  if (profile.necesidad === "educacion") {
    addStep("Compara escuela especial, lenguaje y PIE", "./educacion-especial.html");
    addStep("Revisa apoyos familiares disponibles", "./beneficios.html?modo=perfil");
    addStep("Traduce términos como PIE o dependencia", "./traductor.html");
  }

  if (profile.necesidad === "emprender" || profile.situacion === "cuenta-propia") {
    addStep("Confirma si tienes Clave Única o clave tributaria", "./resultados.html?q=Clave%20Unica");
    addStep("Revisa Inicio de Actividades", "./resultados.html?q=Inicio%20de%20actividades");
    addStep("Define si operarás como persona natural o empresa", "./emprender.html");
  }

  if (profile.situacion === "pensionado" || profile.etapa === "pensionado") {
    addStep("Podrías revisar Bono Invierno", "./resultados.html?q=Bono%20Invierno");
    addStep("Revisa tu situación en Fonasa", "./resultados.html?q=Fonasa");
    addStep("Explora beneficios relacionados", "./beneficios.html?modo=perfil");
  }

  if (profile.necesidad === "transporte" || profile.interes === "vehiculo" || profile.vehiculo === "si") {
    addStep("Busca una planta de revisión técnica por comuna", "./revision-tecnica.html");
    addStep("Revisa permiso de circulación", "./resultados.html?q=Permiso%20de%20circulaci%C3%B3n");
  }

  if (profile.rsh === "no" || profile.rsh === "nose") {
    addStep("Te recomendamos empezar por revisar tu RSH", "./resultados.html?q=Registro%20Social%20de%20Hogares");
  }

  if (!steps.length) {
    addStep("Actualiza tu diagnóstico inicial", "./diagnostico.html");
    addStep("Revisa beneficios sugeridos para tu situación", "./beneficios.html?modo=perfil");
    addStep("Traduce términos difíciles antes de postular", "./traductor.html");
  }

  return steps.slice(0, 5);
};

const vehicleNextSteps = [
  { text: "Busca una planta por comuna", href: "./revision-tecnica.html" },
  { text: "Revisa documentos del vehículo", href: "./revision-tecnica.html#antes-de-ir" },
  { text: "Revisa permiso de circulación", href: "./resultados.html?q=Permiso%20de%20circulaci%C3%B3n" }
];

const hasVehicleContext = () => {
  const page = document.body?.dataset.page;
  const query = normalizeText(getSearchText());

  if (page === "revision-tecnica") return true;

  return [
    "permiso de circulacion",
    "revision tecnica",
    "prt",
    "vehiculo",
    "licencia de conducir",
    "transporte"
  ].some((term) => query.includes(term));
};

const mergePrioritySteps = (prioritySteps, baseSteps) => {
  const merged = [];
  [...prioritySteps, ...baseSteps].forEach((step) => {
    const exists = merged.some((item) => item.href === step.href || item.text === step.text);
    if (!exists) merged.push(step);
  });

  return merged.slice(0, 3);
};

const renderAlertCards = (alerts) =>
  alerts.map((alert) => `
    <a class="insight-card reveal" href="${alert.href}">
      <span>${alert.icon}</span>
      <strong>${alert.title}</strong>
      <p>${alert.text}</p>
    </a>
  `).join("");

const renderDynamicAlerts = () => {
  document.querySelectorAll("[data-dynamic-alerts]").forEach((container) => {
    container.innerHTML = renderAlertCards(generateDynamicAlerts());
    setupRevealAnimations();
  });
};

const renderPersonalizedHub = () => {
  const profile = getUserProfile();
  document.querySelectorAll("[data-personalized-hub]").forEach((hub) => {
    const isHome = document.body?.dataset.page === "home";

    if (isHome && !profile) {
      hub.hidden = true;
      return;
    }

    const steps = hasVehicleContext()
      ? mergePrioritySteps(vehicleNextSteps, generateNextSteps(profile))
      : generateNextSteps(profile).slice(0, 3);
    const intro = profile
      ? "Te dejamos acciones simples para avanzar sin perderte entre trámites."
      : "Te recomendamos estas acciones simples para partir con claridad.";
    const title = profile ? "Recomendado para ti" : "Primeros pasos sugeridos";

    hub.hidden = false;
    hub.innerHTML = `
      <div class="next-step-panel">
        <div class="next-step-copy">
          <p class="section-kicker">${profile ? "Basado en tu situación" : "Para empezar"}</p>
          <h2>${title}</h2>
          <p>${intro}</p>
        </div>
        <ol class="next-step-list" aria-label="Pasos sugeridos">
          ${steps.map((step, index) => `
            <li>
              <a href="${step.href}">
                <span aria-hidden="true">${index + 1}</span>
                <strong>${step.text}</strong>
              </a>
            </li>
          `).join("")}
        </ol>
        <div class="personalized-actions">
          <a class="button button-small button-secondary" href="./diagnostico.html">${profile ? "Actualizar diagnóstico" : "Hacer diagnóstico"}</a>
          <a class="button button-small" href="./beneficios.html?modo=perfil">Ver beneficios</a>
        </div>
      </div>
    `;
  });
};

const getTramiteById = (id) => tramites.find((item) => item.id === id);

const getSearchText = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("q") || "";
};

const getPageMode = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("modo") || "";
};

const specialModules = [
  {
    id: "emprender",
    url: "./emprender.html",
    keywords: [
      "emprender",
      "emprendimiento",
      "iniciar negocio",
      "crear empresa",
      "vender",
      "prestar servicios",
      "trabajar independiente",
      "formalizarme"
    ]
  },
  {
    id: "casa",
    url: "./casa.html",
    keywords: [
      "casa",
      "vivienda",
      "comprar casa",
      "comprar vivienda",
      "subsidio habitacional",
      "subsidio vivienda",
      "postular casa",
      "postular vivienda",
      "credito hipotecario",
      "ahorro vivienda"
    ]
  },
  {
    id: "educacion-especial",
    url: "./educacion-especial.html",
    keywords: [
      "educacion especial",
      "educación especial",
      "educacion diferencial",
      "educación diferencial",
      "colegio especial",
      "colegios especiales",
      "escuela especial",
      "escuelas especiales",
      "escuela de lenguaje",
      "pie",
      "programa de integracion escolar",
      "programa de integración escolar"
    ]
  },
  {
    id: "beneficios",
    url: "./beneficios.html",
    keywords: [
      "beneficios",
      "bonos",
      "ayudas",
      "subsidios",
      "que beneficios tengo",
      "qué beneficios tengo",
      "beneficios sociales",
      "ayuda del estado",
      "apoyo estatal"
    ]
  },
  {
    id: "diagnostico",
    url: "./diagnostico.html",
    keywords: [
      "no se por donde empezar",
      "no sé por dónde empezar",
      "orientacion general",
      "orientación general",
      "que hago",
      "qué hago",
      "ayudame",
      "guia personal"
    ]
  },
  {
    id: "traductor",
    url: "./traductor.html",
    keywords: [
      "traducir",
      "no entiendo",
      "que significa",
      "qué significa",
      "termino dificil",
      "término difícil",
      "burocracia"
    ]
  },
  {
    id: "revision-tecnica",
    url: "./revision-tecnica.html",
    keywords: [
      "revision tecnica",
      "revisión técnica",
      "planta revision tecnica",
      "planta revisión técnica",
      "plantas revision tecnica",
      "plantas revisión técnica",
      "prt",
      "donde hacer revision tecnica",
      "dónde hacer revisión técnica",
      "revisar auto",
      "documentos del vehiculo",
      "documentos del vehículo"
    ]
  },
  {
    id: "documentos-formatos",
    url: "./documentos.html",
    keywords: [
      "documentos",
      "formatos",
      "plantillas",
      "poder simple",
      "declaracion jurada",
      "declaración jurada",
      "carta poder",
      "contrato simple",
      "contrato prestacion servicios",
      "contrato prestación servicios",
      "prestacion de servicios",
      "prestación de servicios"
    ]
  }
];

const specificTramiteAliases = [
  "clave unica",
  "inicio de actividades",
  "fonasa",
  "subsidio ds1",
  "permiso de circulacion",
  "certificado de antecedentes",
  "operacion renta",
  "registro social de hogares",
  "licencia de conducir",
  "bono invierno"
];

const goToResults = (query) => {
  window.location.href = `./resultados.html?q=${encodeURIComponent(query)}`;
};

const keywordMatches = (normalizedQuery, normalizedKeyword) => {
  if (!normalizedKeyword) return false;

  if (normalizedKeyword.length <= 3) {
    return normalizedQuery.split(/\s+/).includes(normalizedKeyword);
  }

  return normalizedQuery.includes(normalizedKeyword);
};

const hasSpecificTramiteIntent = (query) => {
  const normalizedQuery = normalizeText(query);

  return specificTramiteAliases.some((alias) => {
    const normalizedAlias = normalizeText(alias);
    return keywordMatches(normalizedQuery, normalizedAlias);
  });
};

const getSpecialModuleMatch = (query) => {
  if (hasSpecificTramiteIntent(query)) return null;

  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return null;

  return specialModules.find((module) =>
    module.keywords.some((keyword) => keywordMatches(normalizedQuery, normalizeText(keyword)))
  ) || null;
};

const navigateSearch = (query) => {
  const moduleMatch = getSpecialModuleMatch(query);

  if (moduleMatch) {
    window.location.href = moduleMatch.url;
    return;
  }

  goToResults(query);
};

const showMessage = (form, message) => {
  const messageEl = form.querySelector("[data-form-message]");
  if (messageEl) messageEl.textContent = message;
};

const escapeHtml = (text) =>
  String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const setupSearchForms = () => {
  document.querySelectorAll("[data-search-form]").forEach((form) => {
    const input = form.querySelector("[data-search-input]");
    if (!input) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = input.value.trim();

      if (!query) {
        showMessage(form, "Escribe el nombre de un trámite para comenzar.");
        input.focus();
        return;
      }

      showMessage(form, "");
      navigateSearch(query);
    });

    input.addEventListener("input", () => showMessage(form, ""));
  });
};

const setupHomeInteractions = () => {
  const homeInput = document.querySelector("#home-search");
  if (!homeInput) return;

  let index = 0;
  homeInput.placeholder = placeholderExamples[index];

  setInterval(() => {
    if (document.activeElement === homeInput || homeInput.value.trim()) return;
    index = (index + 1) % placeholderExamples.length;
    homeInput.placeholder = placeholderExamples[index];
  }, 3000);

  document.querySelectorAll("[data-query]").forEach((button) => {
    button.addEventListener("click", () => {
      const query = button.dataset.query;
      homeInput.value = query;
      navigateSearch(query);
    });
  });
};

const findBestMatch = (query) => {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return null;

  const exact = tramites.find((item) => normalizeText(item.titulo) === normalizedQuery);
  if (exact) return exact;

  const partial = tramites.find((item) => {
    const title = normalizeText(item.titulo);
    const category = normalizeText(item.categoria);
    return title.includes(normalizedQuery) || normalizedQuery.includes(title) || category.includes(normalizedQuery);
  });

  if (partial) return partial;

  const words = normalizedQuery.split(/\s+/).filter((word) => word.length > 2);
  return tramites.find((item) => {
    const haystack = normalizeText(`${item.titulo} ${item.resumen} ${item.categoria}`);
    return words.some((word) => haystack.includes(word));
  }) || null;
};

const getSuggestions = (query, limit = 3) => {
  const normalizedQuery = normalizeText(query);
  const words = normalizedQuery.split(/\s+/).filter((word) => word.length > 2);

  const scored = tramites.map((item) => {
    const haystack = normalizeText(`${item.titulo} ${item.resumen} ${item.categoria}`);
    const score = words.reduce((total, word) => total + (haystack.includes(word) ? 1 : 0), 0);
    return { item, score };
  });

  const best = scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);

  return (best.length ? best : tramites.slice(0, 5)).slice(0, limit);
};

const createList = (items, ordered = false) => {
  const tag = ordered ? "ol" : "ul";
  const className = ordered ? "step-list" : "clean-list";
  return `<${tag} class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</${tag}>`;
};

const renderRelatedCards = (ids) =>
  ids
    .map(getTramiteById)
    .filter(Boolean)
    .map((item) => `
      <a class="info-card reveal" href="./resultados.html?q=${encodeURIComponent(item.titulo)}">
        <span class="card-icon" aria-hidden="true">${getCategoryIcon(item.categoria)}</span>
        <h3>${item.titulo}</h3>
        <p>${item.resumen}</p>
      </a>
    `)
    .join("");

const getCategoryIcon = (category) => {
  const normalized = normalizeText(category);
  if (normalized.includes("identidad")) return "🪪";
  if (normalized.includes("salud")) return "🩺";
  if (normalized.includes("vivienda")) return "🏡";
  if (normalized.includes("trabajo")) return "💼";
  if (normalized.includes("transporte")) return "🚗";
  return "📌";
};

const renderVehicleContextAlert = (tramite) => {
  const text = normalizeText(`${tramite.titulo} ${tramite.categoria} ${tramite.resumen}`);
  const isVehicleRelated = ["permiso de circulacion", "licencia de conducir", "transporte", "vehiculo"].some((term) => text.includes(term));

  if (!isVehicleRelated) return "";

  return `
    <section class="notice-box notice-soft vehicle-context-box reveal">
      <strong>También podría servirte</strong>
      <p>Si estás resolviendo documentos del vehículo, te conviene revisar también una planta de revisión técnica por comuna antes de avanzar.</p>
      <a class="button button-small button-secondary" href="./revision-tecnica.html">Buscar planta de revisión técnica</a>
    </section>
  `;
};

const getSmartRecommendations = (query) => {
  const normalizedQuery = normalizeText(query);
  const recommendations = [];
  const addRecommendation = (title, text, href) => {
    const exists = recommendations.some((item) => item.title === title || item.href === href);
    if (!exists) recommendations.push({ title, text, href });
  };

  if (normalizedQuery.includes("emprender") || normalizedQuery.includes("empresa") || normalizedQuery.includes("negocio")) {
    addRecommendation("Partir por Inicio de Actividades", "Si quieres formalizarte, suele ser una de las primeras revisiones útiles.", "./resultados.html?q=Inicio%20de%20actividades");
    addRecommendation("Confirmar Clave Única", "Te conviene revisar si ya tienes acceso activo para hacer gestiones en línea.", "./resultados.html?q=Clave%20Unica");
  }

  if (normalizedQuery.includes("beneficio") || normalizedQuery.includes("bono") || normalizedQuery.includes("ayuda")) {
    addRecommendation("Revisar tu RSH", "Muchos beneficios usan esa información para orientar la revisión inicial.", "./resultados.html?q=Registro%20Social%20de%20Hogares");
    addRecommendation("Explorar beneficios guiados", "Puedes partir por una orientación simple antes de revisar requisitos oficiales.", "./beneficios.html?modo=perfil");
  }

  if (normalizedQuery.includes("casa") || normalizedQuery.includes("vivienda") || normalizedQuery.includes("subsidio")) {
    addRecommendation("Mirar Subsidio DS1", "Es una de las primeras rutas a revisar si estás pensando en compra o postulación habitacional.", "./resultados.html?q=Subsidio%20DS1");
    addRecommendation("Ordenar ahorro y RSH", "Antes de postular, te conviene aclarar ahorro disponible y situación del hogar.", "./casa.html");
  }

  if (normalizedQuery.includes("salud") || normalizedQuery.includes("fonasa")) {
    addRecommendation("Revisar Fonasa", "Puede ser un buen punto de partida para salud, cobertura y cargas familiares.", "./resultados.html?q=Fonasa");
  }

  if (normalizedQuery.includes("auto") || normalizedQuery.includes("vehiculo") || normalizedQuery.includes("vehículo") || normalizedQuery.includes("circulacion") || normalizedQuery.includes("circulación")) {
    addRecommendation("Revisar permiso de circulación", "Te conviene confirmar documentos y pasos antes de pagar o renovar.", "./resultados.html?q=Permiso%20de%20circulaci%C3%B3n");
    addRecommendation("Buscar revisión técnica", "Si estás resolviendo temas del vehículo, una planta por comuna puede ser el siguiente paso útil.", "./revision-tecnica.html");
  }

  if (!recommendations.length) {
    addRecommendation("Partir por el diagnóstico", "Si la búsqueda es amplia, una ruta guiada puede ayudarte a ordenar el primer paso.", "./diagnostico.html");
    addRecommendation("Traducir un término difícil", "Cuando una palabra traba la búsqueda, conviene aclararla antes de seguir.", "./traductor.html");
  }

  return recommendations.slice(0, 3);
};

const renderSmartRecommendation = (query) => {
  const container = document.querySelector("#smart-recommendation");
  if (!container) return;

  const recommendations = getSmartRecommendations(query);
  container.innerHTML = `
    <section class="smart-recommendation-box reveal" aria-labelledby="smart-recommendation-title">
      <div class="smart-recommendation-copy">
        <p class="section-kicker">Recomendación rápida</p>
        <h2 id="smart-recommendation-title">Esto es lo más relevante para ti ahora</h2>
        <p>Según lo que buscaste, te recomendamos partir por esto.</p>
      </div>
      <div class="smart-recommendation-list">
        ${recommendations.map((item) => `
          <article class="smart-recommendation-card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <a class="button button-small button-secondary" href="${item.href}">Ver pasos</a>
          </article>
        `).join("")}
      </div>
    </section>
  `;
};

const renderResult = (tramite) => {
  const root = document.querySelector("#results-root");
  if (!root) return;

  document.title = `${tramite.titulo} | ChileFácil IA`;
  renderSmartRecommendation(getSearchText() || tramite.titulo);

  root.innerHTML = `
    <article class="result-hero reveal">
      <p class="eyebrow">${tramite.categoria}</p>
      <h1>${tramite.titulo}</h1>
      <p class="result-summary">${tramite.resumen}</p>
      <div class="metadata-row" aria-label="Datos principales del trámite">
        <span class="meta-pill">Institución: <strong>${tramite.institucion}</strong></span>
        <span class="meta-pill">Tiempo: <strong>${tramite.tiempo}</strong></span>
        <span class="meta-pill difficulty-${normalizeText(tramite.dificultad)}">Dificultad: <strong>${tramite.dificultad}</strong></span>
      </div>
    </article>

    <div class="content-layout">
      <div>
        <article class="content-main reveal">
          <section class="content-section">
            <h2>Qué es este trámite</h2>
            <p>${tramite.descripcion}</p>
          </section>

          <section class="content-section">
            <h2>Requisitos</h2>
            ${createList(tramite.requisitos)}
          </section>

          <section class="content-section">
            <h2>Pasos para realizarlo</h2>
            ${createList(tramite.pasos, true)}
          </section>

          <section class="content-section">
            <h2>Errores comunes o recomendaciones</h2>
            ${createList(tramite.errores_comunes)}
          </section>

          ${renderVehicleContextAlert(tramite)}

          <a class="button official-button" href="${tramite.url}" target="_blank" rel="noopener noreferrer">Ir al sitio oficial</a>
        </article>

        <section class="ai-box reveal" aria-labelledby="ai-help-title">
          <h2 id="ai-help-title">Haz una pregunta sobre este trámite</h2>
          <p>Escribe tu duda y te mostraremos cómo funcionará el asistente dentro del producto.</p>
          <form class="ai-form" data-ai-form>
            <label class="sr-only" for="ai-question">Pregunta sobre ${tramite.titulo}</label>
            <input id="ai-question" type="text" placeholder="Ej: ¿Puedo hacerlo online?">
            <button class="button" type="submit">Preguntar</button>
          </form>
          <p class="ai-response" data-ai-response role="status" aria-live="polite">Próximamente podrás conversar con el asistente IA sobre este trámite.</p>
        </section>
      </div>

      <aside class="side-panel reveal" aria-label="Resumen del trámite">
        <section class="side-block">
          <h2>Resumen rápido</h2>
          <div class="side-data">
            <div class="data-item"><span>Institución</span><strong>${tramite.institucion}</strong></div>
            <div class="data-item"><span>Tiempo estimado</span><strong>${tramite.tiempo}</strong></div>
            <div class="data-item"><span>Modalidad</span><strong>${tramite.modalidad}</strong></div>
          </div>
        </section>

        <section class="side-block">
          <h3>Documentos clave</h3>
          <ul class="side-list">${tramite.documentos.map((doc) => `<li>${doc}</li>`).join("")}</ul>
        </section>

        <section class="side-block">
          <h3>Preguntas relacionadas</h3>
          ${tramite.relacionadas.map(getTramiteById).filter(Boolean).map((item) => `
            <a class="related-question" href="./resultados.html?q=${encodeURIComponent(item.titulo)}">${item.titulo}</a>
          `).join("")}
        </section>
      </aside>
    </div>

    <section class="related-section" aria-labelledby="related-title">
      <h2 id="related-title">Trámites relacionados</h2>
      <div class="related-grid">${renderRelatedCards(tramite.relacionadas)}</div>
    </section>
  `;

  setupAiBox();
  setupRevealAnimations();
};

const renderNoMatch = (query) => {
  const root = document.querySelector("#results-root");
  if (!root) return;

  const suggestions = getSuggestions(query, 3);
  document.title = "Sin coincidencia exacta | ChileFácil IA";
  renderSmartRecommendation(query);

  root.innerHTML = `
    <section class="empty-state reveal">
      <p class="eyebrow">Búsqueda: ${query || "sin texto"}</p>
      <h1>No encontramos una coincidencia exacta</h1>
      <p>Pero encontramos información relacionada que podría ayudarte.</p>

      <div class="suggestions">
        ${suggestions.map((item) => `
          <a class="info-card" href="./resultados.html?q=${encodeURIComponent(item.titulo)}">
            <span class="card-icon" aria-hidden="true">${getCategoryIcon(item.categoria)}</span>
            <h3>${item.titulo}</h3>
            <p>${item.resumen}</p>
          </a>
        `).join("")}
      </div>

      <a class="button button-secondary" href="./index.html">Volver al inicio</a>
    </section>
  `;

  setupRevealAnimations();
};

const getSchoolMapUrl = (school) => {
  const query = `${school.nombre} ${school.direccion} ${school.comuna}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

const getAvailableCommunes = () => {
  const communes = establecimientosDiferenciales.map((school) => school.comuna);
  return [...new Set(communes)].sort((a, b) => a.localeCompare(b, "es"));
};

const renderAvailableCommuneChips = () =>
  getAvailableCommunes()
    .map((commune) => `<button class="commune-chip" type="button" data-commune-chip="${commune}">${commune}</button>`)
    .join("");

const renderSchoolsLoadError = () => `
  <div class="school-empty" role="status">
    <h3>No pudimos cargar los establecimientos en este momento.</h3>
    <p>Intenta nuevamente más tarde o revisa el directorio oficial de Mineduc para buscar información actualizada.</p>
  </div>
`;

const setupCommuneChips = () => {
  const input = document.querySelector("[data-school-commune]");
  if (!input) return;

  document.querySelectorAll("[data-commune-chip]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const commune = chip.dataset.communeChip;
      input.value = commune;
      updateSchoolResults(commune);
      input.focus();
    });
  });
};

const renderSchoolCards = (schools, searchedCommune = "") => {
  if (schoolsDataLoadError) return renderSchoolsLoadError();

  if (!schools.length) {
    const hasActiveFilter = activeSchoolFilter !== "all";
    const title = hasActiveFilter ? "No hay resultados con ese filtro" : "Todavía no tenemos datos para esa comuna";
    const text = hasActiveFilter
      ? "Prueba con otro tipo de establecimiento, cambia el texto de búsqueda o revisa una comuna disponible."
      : "Este buscador está en versión beta y por ahora solo incluye algunas comunas con datos referenciales. Puedes probar con una de las comunas disponibles o revisar el directorio oficial de Mineduc.";

    return `
      <div class="school-empty" role="status">
        <h3>${title}</h3>
        <p>${text}</p>
        ${searchedCommune ? `<p class="school-empty-query">Búsqueda realizada: <strong>${searchedCommune}</strong></p>` : ""}
        <div class="available-communes" aria-label="Comunas disponibles actualmente">
          ${renderAvailableCommuneChips()}
        </div>
      </div>
    `;
  }

  return `
    <div class="school-results">
      ${schools.map((school) => `
        <article class="school-card reveal">
          <h3>${school.nombre}</h3>
          <dl class="school-meta">
            <div><dt>Tipo</dt><dd>${school.tipo}</dd></div>
            <div><dt>Comuna</dt><dd>${school.comuna}, ${school.region}</dd></div>
            <div><dt>Dirección</dt><dd>${school.direccion}</dd></div>
            <div><dt>Teléfono</dt><dd>${school.telefono}</dd></div>
            <div><dt>Dependencia</dt><dd>${school.dependencia}</dd></div>
          </dl>
          <div class="school-card-actions">
            <a href="${getSchoolMapUrl(school)}" target="_blank" rel="noopener noreferrer">Ver en mapa</a>
            <a href="tel:${school.telefono.replace(/[^+0-9]/g, "")}">Llamar</a>
          </div>
        </article>
      `).join("")}
    </div>
  `;
};

const filterSchoolsByCommune = (query) => {
  const normalizedQuery = normalizeText(query);
  const filteredByType = filterSchoolsByType(establecimientosDiferenciales);

  if (!normalizedQuery) {
    return activeSchoolFilter === "all" ? filteredByType.slice(0, 5) : filteredByType;
  }

  const words = normalizedQuery.split(/\s+/).filter((w) => w.length > 2);

  return filteredByType.filter((school) => {
    const text = normalizeText(`
      ${school.nombre}
      ${school.comuna}
      ${school.tipo}
      ${school.region}
      ${school.dependencia}
    `);

    return words.some((word) => text.includes(word));
  });
};

const filterSchoolsByType = (schools) => {
  if (activeSchoolFilter === "all") return schools;

  return schools.filter((school) => {
    const type = normalizeText(school.tipo);
    const filter = normalizeText(activeSchoolFilter);

    if (filter === "pie") return type.includes("pie");
    return type.includes(filter);
  });
};

const updateSchoolFilterButtons = () => {
  document.querySelectorAll("[data-school-filter]").forEach((button) => {
    const isActive = button.dataset.schoolFilter === activeSchoolFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const setActiveSchoolFilter = (filter) => {
  activeSchoolFilter = filter || "all";
  updateSchoolFilterButtons();

  const input = document.querySelector("[data-school-commune]");
  updateSchoolResults(input ? input.value.trim() : "");
};

const setupSchoolFilters = () => {
  document.querySelectorAll("[data-school-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveSchoolFilter(button.dataset.schoolFilter);
    });
  });

  updateSchoolFilterButtons();
};

const supportExplanations = {
  especial: {
    title: "Escuela especial",
    text: "Suele atender a estudiantes que requieren apoyos más especializados y una modalidad educativa adaptada."
  },
  lenguaje: {
    title: "Escuela de lenguaje",
    text: "Está orientada a niños y niñas con necesidades específicas en desarrollo del lenguaje, según evaluación profesional."
  },
  pie: {
    title: "PIE",
    text: "El Programa de Integración Escolar funciona dentro de establecimientos regulares que entregan apoyos a estudiantes con necesidades educativas."
  },
  nose: {
    title: "Si no estás seguro",
    text: "Parte por reunir antecedentes, consultar evaluación profesional y preguntar al establecimiento qué apoyos concretos ofrece."
  }
};

const setupSupportHelper = () => {
  const result = document.querySelector("[data-support-result]");
  if (!result) return;

  document.querySelectorAll("[data-support-type]").forEach((button) => {
    button.addEventListener("click", () => {
      const explanation = supportExplanations[button.dataset.supportType];
      if (!explanation) return;

      document.querySelectorAll("[data-support-type]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      result.innerHTML = `<strong>${explanation.title}</strong><p>${explanation.text}</p>`;
    });
  });
};

const updateSchoolResults = (commune) => {
  const results = document.querySelector("[data-school-results]");
  if (!results) return;

  if (schoolsDataLoadError) {
    results.innerHTML = renderSchoolsLoadError();
    return;
  }

  const schools = filterSchoolsByCommune(commune);
  results.innerHTML = renderSchoolCards(schools, commune);
  setupCommuneChips();
  setupRevealAnimations();
};

const setupSchoolFinder = async () => {
  const form = document.querySelector("[data-school-form]");
  const input = document.querySelector("[data-school-commune]");
  const message = document.querySelector("[data-school-message]");
  const availableHelp = document.querySelector("[data-available-communes-help]");
  const profile = getUserProfile();

  if (!form || !input) return;

  setupSupportHelper();

  if (profile?.necesidad === "educacion") {
    const helper = document.querySelector(".support-helper");
    if (helper && !helper.querySelector(".profile-context-note")) {
      helper.insertAdjacentHTML("beforeend", `
        <div class="profile-context-note">
          <strong>Esto podría ser útil para tu situación</strong>
          <p>Como indicaste interés en educación o apoyo escolar, revisa primero el tipo de apoyo y luego filtra establecimientos por comuna.</p>
          <a href="./casos.html?caso=apoyo-escolar">Ver ruta apoyo escolar</a>
        </div>
      `);
    }
  }

  if (availableHelp) {
    availableHelp.textContent = "Cargando comunas disponibles...";
  }

  await loadSchoolsData();
  setupSchoolFilters();

  if (schoolsDataLoadError) {
    if (availableHelp) availableHelp.textContent = "";
    updateSchoolResults("");
    setupRevealAnimations();
    return;
  }

  if (availableHelp) {
    availableHelp.innerHTML = `Comunas disponibles actualmente: ${renderAvailableCommuneChips()}`;
  }

  updateSchoolResults("");
  setupCommuneChips();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const commune = input.value.trim();

    if (!commune) {
      if (message) message.textContent = "Escribe una comuna para buscar establecimientos.";
      input.focus();
      return;
    }

    if (message) message.textContent = "";
    updateSchoolResults(commune);
  });

  input.addEventListener("input", () => {
    if (message) message.textContent = "";
  });
};

const getPrtMapUrl = (plant) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${plant.direccion} ${plant.comuna} ${plant.region}`)}`;

const renderPrtLoadError = () => `
  <div class="school-empty" role="status">
    <h3>No pudimos cargar las plantas en este momento.</h3>
    <p>Intenta nuevamente más tarde o revisa directamente el sitio oficial de PRT para confirmar información actualizada.</p>
  </div>
`;

const filterPrtPlantsByType = (plants) => {
  if (activePrtFilter === "all") return plants;

  const filter = normalizeText(activePrtFilter);
  return plants.filter((plant) => normalizeText(plant.tipo_planta).includes(filter));
};

const filterPrtPlants = (query = "") => {
  const normalizedQuery = normalizeText(query);
  const filteredByType = filterPrtPlantsByType(plantasPrt);

  if (!normalizedQuery) {
    return activePrtFilter === "all" ? filteredByType.slice(0, 6) : filteredByType;
  }

  const words = normalizedQuery.split(/\s+/).filter((word) => word.length > 2);

  return filteredByType.filter((plant) => {
    const text = normalizeText(`
      ${plant.nombre}
      ${plant.comuna}
      ${plant.region}
      ${plant.concesionario}
      ${plant.tipo_planta}
      ${plant.direccion}
    `);

    return words.some((word) => text.includes(word));
  });
};

const renderPrtResults = (plants, query = "") => {
  if (prtDataLoadError) return renderPrtLoadError();

  if (!plants.length) {
    return `
      <div class="school-empty" role="status">
        <h3>No encontramos plantas con esa búsqueda</h3>
        <p>Prueba con otra comuna, concesionario o tipo de planta. Esta base es referencial y se irá ampliando.</p>
        ${query ? `<p class="school-empty-query">Búsqueda realizada: <strong>${query}</strong></p>` : ""}
      </div>
    `;
  }

  return `
    <div class="prt-results">
      ${plants.map((plant) => `
        <article class="prt-card reveal">
          <div class="prt-card-header">
            <span>${plant.tipo_planta}</span>
            <small>${plant.fuente}</small>
          </div>
          <h3>${plant.nombre}</h3>
          <dl class="school-meta">
            <div><dt>Comuna</dt><dd>${plant.comuna}, ${plant.region}</dd></div>
            <div><dt>Dirección</dt><dd>${plant.direccion}</dd></div>
            <div><dt>Concesionario</dt><dd>${plant.concesionario}</dd></div>
            <div><dt>Teléfono</dt><dd>${plant.telefono}</dd></div>
          </dl>
          <p>${plant.observaciones}</p>
          <div class="school-card-actions">
            <a href="${getPrtMapUrl(plant)}" target="_blank" rel="noopener noreferrer">Cómo llegar</a>
            ${plant.telefono && plant.telefono !== "No informado" ? `<a href="tel:${plant.telefono.replace(/[^+0-9]/g, "")}">Llamar</a>` : ""}
          </div>
        </article>
      `).join("")}
    </div>
  `;
};

const updatePrtFilterButtons = () => {
  document.querySelectorAll("[data-prt-filter]").forEach((button) => {
    const isActive = button.dataset.prtFilter === activePrtFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const updatePrtResults = (query = "") => {
  const results = document.querySelector("[data-prt-results]");
  if (!results) return;

  const plants = filterPrtPlants(query);
  results.innerHTML = renderPrtResults(plants, query);
  setupRevealAnimations();
};

const setActivePrtFilter = (filter) => {
  activePrtFilter = filter || "all";
  updatePrtFilterButtons();

  const input = document.querySelector("[data-prt-search]");
  updatePrtResults(input ? input.value.trim() : "");
};

const setupPrtFilters = () => {
  document.querySelectorAll("[data-prt-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      setActivePrtFilter(button.dataset.prtFilter);
    });
  });

  updatePrtFilterButtons();
};

const setupPrtFinder = async () => {
  const form = document.querySelector("[data-prt-form]");
  const input = document.querySelector("[data-prt-search]");
  const message = document.querySelector("[data-prt-message]");
  const results = document.querySelector("[data-prt-results]");

  if (!form || !input || !results) return;

  results.innerHTML = `
    <div class="school-empty" role="status">
      <h3>Cargando plantas de revisión técnica...</h3>
      <p>Estamos preparando el listado referencial.</p>
    </div>
  `;

  await loadPrtData();
  setupPrtFilters();
  updatePrtResults("");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value.trim();

    if (!query && activePrtFilter === "all") {
      if (message) message.textContent = "Puedes escribir una comuna, nombre o concesionario para afinar la búsqueda.";
      updatePrtResults("");
      input.focus();
      return;
    }

    if (message) message.textContent = "";
    updatePrtResults(query);
  });

  input.addEventListener("input", () => {
    if (message) message.textContent = "";
    updatePrtResults(input.value.trim());
  });
};

const documentsData = {
  poderSimple: {
    title: "Poder simple",
    description: "Autoriza a otra persona a realizar una gestión específica en tu nombre.",
    uses: "Suele usarse para trámites simples donde no se exige poder notarial.",
    disclaimers: ["Confirma si el trámite requiere firma ante notario.", "Verifica requisitos en el organismo correspondiente."],
    fields: [
      { name: "ciudad", label: "Ciudad", placeholder: "Ej: Santiago" },
      { name: "fecha", label: "Fecha", placeholder: "Ej: 20 de abril de 2026" },
      { name: "otorgante", label: "Nombre de quien otorga el poder", placeholder: "Nombre completo" },
      { name: "rutOtorgante", label: "RUT de quien otorga", placeholder: "12.345.678-9" },
      { name: "autorizado", label: "Nombre de la persona autorizada", placeholder: "Nombre completo" },
      { name: "rutAutorizado", label: "RUT de la persona autorizada", placeholder: "12.345.678-9" },
      { name: "gestion", label: "Gestión autorizada", placeholder: "Ej: retirar un certificado, presentar documentos..." }
    ],
    template: (data) => `PODER SIMPLE

En ${data.ciudad}, con fecha ${data.fecha}, yo, ${data.otorgante}, RUT ${data.rutOtorgante}, autorizo a ${data.autorizado}, RUT ${data.rutAutorizado}, para realizar en mi nombre la siguiente gestión:

${data.gestion}

Este poder se entrega únicamente para la gestión indicada.

Firma de quien otorga: ______________________________
Nombre: ${data.otorgante}
RUT: ${data.rutOtorgante}`
  },
  declaracionJurada: {
    title: "Declaración jurada simple",
    description: "Deja por escrito una afirmación personal bajo responsabilidad de quien declara.",
    uses: "Suele usarse para informar domicilio, situación personal, ingresos u otros antecedentes simples.",
    disclaimers: ["Algunos organismos pueden exigir declaración jurada ante notario.", "Declara solo información verdadera y verificable."],
    fields: [
      { name: "ciudad", label: "Ciudad", placeholder: "Ej: Valparaíso" },
      { name: "fecha", label: "Fecha", placeholder: "Ej: 20 de abril de 2026" },
      { name: "declarante", label: "Nombre de quien declara", placeholder: "Nombre completo" },
      { name: "rutDeclarante", label: "RUT", placeholder: "12.345.678-9" },
      { name: "domicilio", label: "Domicilio", placeholder: "Dirección completa" },
      { name: "declaracion", label: "Declaración", placeholder: "Ej: declaro que vivo en..." },
      { name: "finalidad", label: "Para qué se usará", placeholder: "Ej: presentar ante municipalidad..." }
    ],
    template: (data) => `DECLARACIÓN JURADA SIMPLE

En ${data.ciudad}, con fecha ${data.fecha}, yo, ${data.declarante}, RUT ${data.rutDeclarante}, domiciliado/a en ${data.domicilio}, declaro bajo mi responsabilidad lo siguiente:

${data.declaracion}

La presente declaración se emite para: ${data.finalidad}

Firma: ______________________________
Nombre: ${data.declarante}
RUT: ${data.rutDeclarante}`
  },
  cartaPoder: {
    title: "Carta poder",
    description: "Comunica formalmente que una persona queda autorizada para actuar por otra en una gestión.",
    uses: "Suele usarse para retiros, entregas, representación simple o trámites administrativos.",
    disclaimers: ["Confirma si basta carta poder simple o si se exige documento notarial.", "Adjunta copias de cédula si el organismo lo solicita."],
    fields: [
      { name: "ciudad", label: "Ciudad", placeholder: "Ej: Concepción" },
      { name: "fecha", label: "Fecha", placeholder: "Ej: 20 de abril de 2026" },
      { name: "destinatario", label: "Dirigido a", placeholder: "Ej: Municipalidad, institución, empresa..." },
      { name: "otorgante", label: "Nombre de quien autoriza", placeholder: "Nombre completo" },
      { name: "rutOtorgante", label: "RUT de quien autoriza", placeholder: "12.345.678-9" },
      { name: "autorizado", label: "Nombre de quien actuará", placeholder: "Nombre completo" },
      { name: "rutAutorizado", label: "RUT de quien actuará", placeholder: "12.345.678-9" },
      { name: "motivo", label: "Motivo o trámite", placeholder: "Ej: retirar documentos, presentar solicitud..." }
    ],
    template: (data) => `CARTA PODER

${data.ciudad}, ${data.fecha}

Señores/as:
${data.destinatario}

Por medio de la presente, yo, ${data.otorgante}, RUT ${data.rutOtorgante}, autorizo a ${data.autorizado}, RUT ${data.rutAutorizado}, para actuar en mi nombre respecto de la siguiente gestión:

${data.motivo}

Solicito considerar esta autorización para los fines indicados.

Atentamente,

Firma: ______________________________
Nombre: ${data.otorgante}
RUT: ${data.rutOtorgante}`
  },
  contratoServicios: {
    title: "Contrato simple de prestación de servicios",
    description: "Ordena por escrito un acuerdo básico entre quien presta un servicio y quien lo contrata.",
    uses: "Suele servir para trabajos independientes, servicios puntuales o acuerdos de bajo riesgo.",
    disclaimers: ["Para servicios complejos, montos altos o obligaciones sensibles, te conviene pedir asesoría profesional.", "Revisa impuestos, boletas o facturas si corresponde."],
    fields: [
      { name: "ciudad", label: "Ciudad", placeholder: "Ej: Santiago" },
      { name: "fecha", label: "Fecha", placeholder: "Ej: 20 de abril de 2026" },
      { name: "cliente", label: "Nombre del cliente", placeholder: "Persona o empresa contratante" },
      { name: "rutCliente", label: "RUT del cliente", placeholder: "12.345.678-9" },
      { name: "prestador", label: "Nombre de quien presta el servicio", placeholder: "Persona o empresa prestadora" },
      { name: "rutPrestador", label: "RUT del prestador", placeholder: "12.345.678-9" },
      { name: "servicio", label: "Servicio acordado", placeholder: "Describe el servicio con claridad" },
      { name: "plazo", label: "Plazo o fecha de entrega", placeholder: "Ej: 30 días, hasta tal fecha..." },
      { name: "pago", label: "Precio y forma de pago", placeholder: "Ej: $100.000 contra entrega..." }
    ],
    template: (data) => `CONTRATO SIMPLE DE PRESTACIÓN DE SERVICIOS

En ${data.ciudad}, con fecha ${data.fecha}, comparecen por una parte ${data.cliente}, RUT ${data.rutCliente}, en adelante "el cliente"; y por otra parte ${data.prestador}, RUT ${data.rutPrestador}, en adelante "el prestador".

PRIMERO: Servicio
El prestador se obliga a realizar el siguiente servicio:
${data.servicio}

SEGUNDO: Plazo
El servicio se realizará en el siguiente plazo o fecha acordada:
${data.plazo}

TERCERO: Pago
El precio y forma de pago acordados son:
${data.pago}

CUARTO: Alcance
Este documento resume un acuerdo simple entre las partes. Cualquier cambio relevante debería quedar por escrito.

Firma cliente: ______________________________
Nombre: ${data.cliente}
RUT: ${data.rutCliente}

Firma prestador: ______________________________
Nombre: ${data.prestador}
RUT: ${data.rutPrestador}`
  }
};

let selectedDocumentId = "poderSimple";
let currentDocumentText = "";

const renderDocumentCards = () =>
  Object.entries(documentsData).map(([id, document]) => `
    <article class="document-card reveal">
      <h3>${document.title}</h3>
      <p>${document.description}</p>
      <div class="document-use">
        <strong>Cuándo suele usarse</strong>
        <span>${document.uses}</span>
      </div>
      <button class="button button-small" type="button" data-document-select="${id}">Generar</button>
    </article>
  `).join("");

const renderDocumentForm = (id) => {
  const document = documentsData[id];
  if (!document) return "";

  return `
    <p class="section-kicker">Generador guiado</p>
    <h2>${document.title}</h2>
    <p>${document.description}</p>
    <form class="document-form-grid" data-document-form>
      ${document.fields.map((field) => `
        <div class="field-group">
          <label for="doc-${field.name}">${field.label}</label>
          <input id="doc-${field.name}" name="${field.name}" type="text" placeholder="${field.placeholder}" required>
        </div>
      `).join("")}
      <p class="form-message" data-document-message role="status" aria-live="polite"></p>
      <button class="button" type="submit">Generar documento</button>
    </form>
    <div class="notice-box">
      <strong>Aviso importante</strong>
      <p>Este documento es una orientación inicial y puede no reemplazar asesoría profesional, notarial o legal según el caso.</p>
      <ul class="clean-list">${document.disclaimers.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
};

const updateDocumentPreview = (text = "") => {
  const preview = document.querySelector("[data-document-preview]");
  if (!preview) return;

  currentDocumentText = text;
  preview.innerHTML = text
    ? `<pre>${escapeHtml(text)}</pre>`
    : `<p>Completa el formulario y aquí aparecerá una vista previa lista para copiar o descargar.</p>`;
};

const setSelectedDocument = (id) => {
  selectedDocumentId = id;
  const builder = document.querySelector("[data-document-builder]");
  if (!builder) return;

  builder.innerHTML = renderDocumentForm(id);
  updateDocumentPreview("");
  document.querySelectorAll("[data-document-select]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.documentSelect === id);
  });

  const form = builder.querySelector("[data-document-form]");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      const message = form.querySelector("[data-document-message]");
      if (message) message.textContent = "Completa los campos mínimos para generar el documento.";
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    const text = documentsData[selectedDocumentId].template(data);
    const message = form.querySelector("[data-document-message]");
    if (message) message.textContent = "Documento generado. Revísalo antes de usarlo.";
    updateDocumentPreview(text);
  });

  builder.scrollIntoView({ behavior: "smooth", block: "start" });
};

const downloadDocument = (type = "txt") => {
  if (!currentDocumentText) return;

  const title = documentsData[selectedDocumentId]?.title || "documento";
  const safeName = normalizeText(title).replace(/\s+/g, "-") || "documento";
  const content = type === "html"
    ? `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>${title}</title><style>body{font-family:Arial,sans-serif;line-height:1.6;max-width:760px;margin:40px auto;padding:0 24px;white-space:pre-wrap;color:#1f2937;}</style></head><body>${escapeHtml(currentDocumentText)}</body></html>`
    : currentDocumentText;
  const blob = new Blob([content], { type: type === "html" ? "text/html;charset=utf-8" : "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${safeName}.${type}`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
};

const setupDocumentsPage = () => {
  const list = document.querySelector("[data-documents-list]");
  const builder = document.querySelector("[data-document-builder]");
  const actions = document.querySelector("[data-document-actions]");
  if (!list || !builder || !actions) return;

  list.innerHTML = renderDocumentCards();
  setupRevealAnimations();
  document.querySelectorAll("[data-document-select]").forEach((button) => {
    button.addEventListener("click", () => setSelectedDocument(button.dataset.documentSelect));
  });

  actions.querySelector("[data-copy-document]")?.addEventListener("click", async () => {
    const message = document.querySelector("[data-document-action-message]");
    if (!currentDocumentText) {
      if (message) message.textContent = "Primero genera un documento para poder copiarlo.";
      return;
    }

    try {
      await navigator.clipboard.writeText(currentDocumentText);
      if (message) message.textContent = "Texto copiado al portapapeles.";
    } catch (error) {
      if (message) message.textContent = "No se pudo copiar automáticamente. Puedes seleccionar el texto de la vista previa.";
    }
  });

  actions.querySelector("[data-download-txt]")?.addEventListener("click", () => downloadDocument("txt"));
  actions.querySelector("[data-download-html]")?.addEventListener("click", () => downloadDocument("html"));

  setSelectedDocument(selectedDocumentId);
};

const renderSchoolFinder = () => {
  const root = document.querySelector("#results-root");
  if (!root) return;

  document.title = "Educación diferencial | ChileFácil IA";

  root.innerHTML = `
    <section class="school-finder-hero reveal">
      <div>
        <span class="school-finder-badge">Orientación para familias</span>
        <h1>Educación diferencial</h1>
        <p>Busca por comuna escuelas especiales, escuelas de lenguaje y establecimientos con Programa de Integración Escolar. Esta primera versión muestra datos referenciales para probar la experiencia.</p>
      </div>
      <aside class="school-finder-note" aria-label="Información importante">
        <strong>Antes de decidir</strong>
        <span>Confirma cupos, requisitos y modalidad directamente con el establecimiento o en canales oficiales de Mineduc.</span>
      </aside>
    </section>

    <section class="school-search-panel reveal" aria-labelledby="school-search-title">
      <h2 id="school-search-title">Encontrar establecimientos por comuna</h2>
      <form class="school-search-form" data-school-form novalidate>
        <div class="field-group">
          <label for="school-commune">Comuna</label>
          <input id="school-commune" type="search" data-school-commune placeholder="Ej: La Florida, Maipú, Valparaíso">
        </div>
        <button class="button" type="submit">Buscar</button>
      </form>
      <p class="form-message" data-school-message role="status" aria-live="polite"></p>
      <div data-school-results></div>
      <p class="school-disclaimer">
        ChileFácil IA no asigna cupos ni reemplaza la orientación oficial. Para datos completos revisa el Directorio Educación Especial de Mineduc o llama a Ayuda Mineduc 600 600 2626.
      </p>
      <a class="button button-secondary official-button" href="https://especial.mineduc.cl/directorio-de-establecimientos/" target="_blank" rel="noopener noreferrer">Ver directorio oficial</a>
    </section>
  `;

  setupSchoolFinder();
  setupRevealAnimations();
};

const getFormValues = (form) => {
  const data = new FormData(form);
  return Object.fromEntries(data.entries());
};

const renderRouteSteps = (steps = []) => {
  if (!steps.length) return "";

  return `
    <div class="result-block">
      <h3>Tu ruta sugerida</h3>
      <ol class="route-timeline">
        ${steps.map((step) => `<li>${step}</li>`).join("")}
      </ol>
    </div>
  `;
};

const renderOptionalList = (title, items = []) => {
  if (!items.length) return "";

  return `
    <div class="result-block">
      <h3>${title}</h3>
      <ul class="clean-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
};

const renderGuideResult = ({ title, summary, checklist = [], recommendations = [], warnings = [], links = [], nextStep = "", routeSteps = [], reasons = [], documents = [], badge = "Orientación sugerida" }) => `
  <div class="result-panel is-ready">
    <p class="section-kicker">${badge}</p>
    <h2>${title}</h2>
    <p>${summary}</p>

    ${renderRouteSteps(routeSteps)}

    <div class="result-block">
      <h3>Checklist inicial</h3>
      <ul class="guide-checklist">${checklist.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>

    ${renderOptionalList("Por qué podría ser relevante para tu caso", reasons)}
    ${renderOptionalList("Documentos o datos a mano", documents)}

    <div class="result-block">
      <h3>Recomendaciones</h3>
      <ul class="clean-list">${recommendations.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>

    ${warnings.length ? `<div class="notice-box">
      <strong>Ten presente</strong>
      <p>${warnings.join(" ")}</p>
    </div>` : ""}

    <div class="result-links">
      ${links.map((link) => `<a class="button button-secondary" href="${link.href}">${link.label}</a>`).join("")}
    </div>

    <div class="next-step">
      <strong>Siguiente paso sugerido</strong>
      <span>${nextStep}</span>
    </div>

    <div class="ai-future-box">
      <strong>Próxima versión con IA</strong>
      <span>Más adelante podremos enviar tus respuestas a un asistente IA para generar una ruta más precisa y conversacional.</span>
    </div>
  </div>
`;

const buildBusinessGuide = (answers) => {
  const checklist = [];
  const recommendations = [];

  if (answers.clave !== "si") {
    checklist.push("Obtén o recupera tu Clave Única y clave tributaria antes de iniciar trámites.");
  }

  checklist.push("Define si operarás como persona natural o si necesitas crear una empresa.");
  checklist.push("Revisa el inicio de actividades en el SII antes de emitir documentos tributarios.");

  if (answers.documento === "facturas") {
    recommendations.push("Si emitirás facturas, revisa giro, actividad económica y obligaciones de IVA.");
  } else if (answers.documento === "boletas") {
    recommendations.push("Si emitirás boletas, podrías partir como persona natural con inicio de actividades.");
  } else {
    recommendations.push("Si no sabes si usar boletas o facturas, primero identifica si venderás a personas o empresas.");
  }

  if (answers.equipo === "socios") {
    recommendations.push("Si trabajarás con socios, evalúa crear una empresa y dejar acuerdos básicos por escrito.");
  } else {
    recommendations.push("Si partirás solo, mantén el proceso simple y valida tu actividad antes de formalizar estructuras más complejas.");
  }

  if (answers.objetivo === "productos") {
    recommendations.push("Para vender productos, revisa permisos municipales o sanitarios si corresponde al rubro.");
  }

  return {
    title: "Parte por formalizar lo mínimo necesario",
    summary: "Tu ruta inicial debería ordenar claves, tipo de actividad y documentos tributarios antes de tomar decisiones más grandes.",
    routeSteps: ["Recupera o valida Clave Única / clave tributaria.", "Define si operarás como persona natural o empresa.", "Revisa inicio de actividades.", "Define si usarás boletas o facturas.", "Evalúa permisos extra según tu rubro."],
    checklist,
    recommendations,
    warnings: ["Esta orientación no reemplaza asesoría contable.", "Los requisitos pueden cambiar según rubro, comuna y tipo de venta."],
    links: [
      { label: "Ver inicio de actividades", href: "./resultados.html?q=Inicio%20de%20actividades" },
      { label: "Ver Clave Única", href: "./resultados.html?q=Clave%20Unica" },
      { label: "Ir al SII", href: "https://www.sii.cl" }
    ],
    nextStep: "Revisa el trámite de inicio de actividades y anota tu giro antes de avanzar."
  };
};

const buildHousingGuide = (answers) => {
  const checklist = ["Revisa tu Registro Social de Hogares.", "Confirma si tienes ahorro disponible para vivienda.", "Compara subsidio, crédito hipotecario o una ruta mixta."];
  const recommendations = [];

  if (answers.rsh !== "si") {
    recommendations.push("Antes de postular a subsidios, actualiza o solicita tu Registro Social de Hogares.");
  }

  if (answers.ahorro === "no") {
    recommendations.push("Si no tienes ahorro, parte abriendo o revisando una cuenta de ahorro para la vivienda.");
  } else if (answers.ahorro === "si") {
    recommendations.push("Si ya tienes ahorro, confirma si cumple el mínimo y la fecha exigida del llamado vigente.");
  }

  if (answers.interes === "credito" || answers.interes === "ambos") {
    recommendations.push("Si quieres comprar con crédito, revisa preaprobación bancaria y capacidad de dividendo antes de comprometerte.");
  }

  if (answers.objetivo === "subsidio" || answers.interes === "subsidio") {
    recommendations.push("Para subsidio, revisa especialmente DS1, tramo, ahorro mínimo y fechas del Minvu.");
  }

  if (answers.subsidioPrevio === "si") {
    recommendations.push("Si ya recibiste subsidio antes, confirma si puedes volver a postular o si aplica alguna restricción.");
  }

  return {
    title: "Ordena primero RSH, ahorro y tipo de apoyo",
    summary: "Para vivienda conviene evitar saltarse pasos: muchas postulaciones dependen de datos actualizados y fechas específicas.",
    routeSteps: ["Revisa tu Registro Social de Hogares.", "Confirma ahorro disponible.", "Evalúa Subsidio DS1 u otro programa habitacional.", "Revisa llamado vigente y fechas oficiales.", "Compara con crédito hipotecario si aplica."],
    checklist,
    recommendations,
    warnings: ["No garantiza aprobación de subsidio ni crédito.", "Confirma requisitos en Minvu, banco o entidad patrocinante."],
    links: [
      { label: "Ver Subsidio DS1", href: "./resultados.html?q=Subsidio%20DS1" },
      { label: "Ver Registro Social de Hogares", href: "./resultados.html?q=Registro%20Social%20de%20Hogares" },
      { label: "Ir al Minvu", href: "https://www.minvu.gob.cl" }
    ],
    nextStep: answers.rsh === "si" ? "Revisa el llamado vigente y el ahorro mínimo exigido." : "Actualiza tu Registro Social de Hogares antes de simular postulaciones."
  };
};

const buildBenefitsGuide = (answers) => {
  const suggestions = new Set();
  const checklist = new Set([
    "Reúne tu cédula de identidad y antecedentes familiares básicos.",
    "Revisa fechas, requisitos y canales oficiales antes de postular."
  ]);
  const links = new Map();

  const addLink = (label, href) => links.set(label, { label, href });

  if (answers.rsh !== "si") {
    suggestions.add("Te conviene comenzar por revisar o actualizar tu Registro Social de Hogares, porque muchos beneficios usan esa información.");
    checklist.add("Confirma si tienes Registro Social de Hogares y si los integrantes del hogar están actualizados.");
    addLink("Ver Registro Social de Hogares", "./resultados.html?q=Registro%20Social%20de%20Hogares");
  } else {
    checklist.add("Descarga o revisa tu cartola del Registro Social de Hogares antes de postular.");
    addLink("Ver Registro Social de Hogares", "./resultados.html?q=Registro%20Social%20de%20Hogares");
  }

  if (answers.etapa === "pensionado") {
    suggestions.add("Podrías revisar Bono Invierno y otros aportes para personas pensionadas, según requisitos vigentes.");
    suggestions.add("Una buena siguiente revisión sería Fonasa, tramo de salud y canales de atención disponibles.");
    addLink("Ver Bono Invierno", "./resultados.html?q=Bono%20Invierno");
    addLink("Ver Fonasa", "./resultados.html?q=Fonasa");
  }

  if (answers.etapa === "estudiante") {
    suggestions.add("Podrías revisar becas, beneficios estudiantiles y apoyos asociados a educación.");
    suggestions.add("Si dependes económicamente de tu hogar, revisa que el Registro Social de Hogares refleje bien tu situación.");
  }

  if (answers.etapa === "sin-ingresos") {
    suggestions.add("Te conviene priorizar Registro Social de Hogares, salud pública y beneficios de apoyo a ingresos.");
    addLink("Ver Fonasa", "./resultados.html?q=Fonasa");
  }

  if (answers.etapa === "trabajando") {
    suggestions.add("Podrías revisar beneficios compatibles con tu situación laboral y mantener datos previsionales y de salud actualizados.");
    addLink("Ver Fonasa", "./resultados.html?q=Fonasa");
  }

  if (answers.etapa === "jefatura") {
    suggestions.add("Si eres jefe/a de hogar, revisa apoyos familiares y beneficios que usen la composición de tu hogar.");
  }

  if (answers.cargas === "si") {
    suggestions.add("Podrías revisar apoyos familiares o beneficios asociados a personas a cargo.");
    checklist.add("Ten a mano antecedentes de hijos, cargas o personas bajo tu cuidado.");
  }

  if (answers.ayuda === "vivienda") {
    suggestions.add("Para vivienda, una buena ruta es revisar Registro Social de Hogares y luego Subsidio DS1 u otros llamados habitacionales.");
    addLink("Ver Subsidio DS1", "./resultados.html?q=Subsidio%20DS1");
  }

  if (answers.ayuda === "salud") {
    suggestions.add("Para salud, podrías comenzar revisando Fonasa, tramo y cargas familiares si corresponde.");
    addLink("Ver Fonasa", "./resultados.html?q=Fonasa");
  }

  if (answers.ayuda === "educacion") {
    suggestions.add("Para educación, podrías revisar becas, beneficios estudiantiles y apoyos según nivel educativo.");
  }

  if (answers.ayuda === "ingresos") {
    suggestions.add("Para ingresos o bonos, podrías revisar aportes estatales asociados a tu etapa y situación del hogar.");
    addLink("Ver Bono Invierno", "./resultados.html?q=Bono%20Invierno");
  }

  if (answers.ayuda === "nose") {
    suggestions.add("Si no sabes qué ayuda necesitas, parte por Registro Social de Hogares y luego revisa vivienda, salud e ingresos según prioridad.");
    addLink("Ver Registro Social de Hogares", "./resultados.html?q=Registro%20Social%20de%20Hogares");
    addLink("Ver Fonasa", "./resultados.html?q=Fonasa");
  }

  const recommendations = Array.from(suggestions).slice(0, 6);
  const nextStep = answers.rsh !== "si"
    ? "Te conviene comenzar por revisar tu Registro Social de Hogares."
    : "Una buena siguiente revisión sería abrir los trámites sugeridos y confirmar requisitos oficiales.";

  return {
    title: "Podrías revisar estas opciones según tu situación",
    summary: "Con tus respuestas armamos una orientación inicial. No confirma beneficios garantizados, pero ayuda a priorizar qué revisar primero.",
    badge: "Orientación inicial, no resultado oficial",
    routeSteps: [
      answers.rsh !== "si" ? "Revisa o actualiza tu Registro Social de Hogares." : "Descarga o revisa tu cartola del Registro Social de Hogares.",
      "Identifica la ayuda prioritaria: vivienda, salud, educación o ingresos.",
      "Abre los trámites sugeridos y confirma requisitos oficiales.",
      "Ten documentos familiares y personales a mano.",
      "Guarda fechas y canales oficiales antes de postular."
    ],
    checklist: Array.from(checklist),
    reasons: recommendations.slice(0, 4),
    documents: ["Cédula de identidad.", "Cartola o datos del Registro Social de Hogares.", "Antecedentes de cargas familiares si corresponde.", "Datos de pensión, estudios o situación laboral si aplica."],
    recommendations,
    warnings: ["La elegibilidad depende de requisitos oficiales y evaluación institucional.", "Evita entregar datos sensibles en sitios no oficiales."],
    links: Array.from(links.values()).slice(0, 4),
    nextStep
  };
};

const setupGuideForms = () => {
  document.querySelectorAll("[data-guide-form]").forEach((form) => {
    const module = form.dataset.guideForm;
    const result = document.querySelector("[data-guide-result]");
    const message = form.querySelector("[data-guide-message]");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        if (message) message.textContent = "Responde todas las preguntas para generar una orientación.";
        return;
      }

      if (message) message.textContent = "";
      const answers = getFormValues(form);
      let guide;

      if (module === "emprender") guide = buildBusinessGuide(answers);
      if (module === "casa") guide = buildHousingGuide(answers);
      if (module === "beneficios") {
        saveUserProfile({
          etapa: answers.etapa,
          situacion: answers.etapa,
          cargas: answers.cargas,
          rsh: answers.rsh,
          interes: answers.ayuda,
          ayuda: answers.ayuda
        });
        guide = buildBenefitsGuide(answers);
        renderPersonalizedHub();
        renderDynamicAlerts();
      }

      if (result && guide) {
        result.innerHTML = renderGuideResult(guide);
        result.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Futuro IA: aquí se pueden enviar las respuestas del cuestionario a una API.
      // Futuro backend: aquí se puede guardar una sesión anónima para mejorar recomendaciones.
      // Futuro motor dinámico: reemplazar estas reglas por un servicio que combine datos oficiales y contexto del usuario.
    });

    if (module === "beneficios") {
      const params = new URLSearchParams(window.location.search);
      const profile = getUserProfile();
      if (params.get("modo") === "perfil" && profile && result) {
        const guide = buildBenefitsGuide({
          etapa: profile.etapa || profile.situacion || "sin-ingresos",
          cargas: profile.cargas || (profile.situacion === "cargas" ? "si" : "no"),
          rsh: profile.rsh || "nose",
          ayuda: profile.ayuda || profile.interes || profile.necesidad || "nose"
        });
        result.innerHTML = renderGuideResult(guide);
      }
    }
  });
};

const setupResultsPage = () => {
  const mode = getPageMode();
  if (mode === "educacion-diferencial") {
    window.location.href = "./educacion-especial.html";
    return;
  }

  const query = getSearchText();
  const headerInput = document.querySelector("#header-search-input");
  if (headerInput) headerInput.value = query;

  if (!query.trim()) {
    renderNoMatch("");
    return;
  }

  const match = findBestMatch(query);
  match ? renderResult(match) : renderNoMatch(query);
};

const buildDiagnosticGuide = (answers) => {
  const links = [];
  const routeSteps = [];
  const recommendations = [];

  if (answers.rsh !== "si") {
    routeSteps.push("Revisa si tienes Registro Social de Hogares y actualiza datos del hogar.");
    recommendations.push("Te conviene comenzar por RSH porque muchos beneficios dependen de esa información.");
    links.push({ label: "Ver RSH", href: "./resultados.html?q=Registro%20Social%20de%20Hogares" });
  }

  const need = answers.necesidad;
  const situation = answers.situacion;

  if (need === "emprender" || situation === "cuenta-propia") {
    routeSteps.push("Ordena tu ruta para trabajar independiente o formalizar un negocio.");
    recommendations.push("Usa el asistente de emprender para decidir entre persona natural, empresa, boletas o facturas.");
    links.push({ label: "Ir a emprender", href: "./emprender.html" });
  }

  if (need === "vivienda") {
    routeSteps.push("Confirma ahorro, RSH y programa habitacional posible.");
    recommendations.push("La ruta de vivienda puede ayudarte a ordenar Subsidio DS1, ahorro y crédito.");
    links.push({ label: "Ir a vivienda", href: "./casa.html" });
  }

  if (need === "educacion") {
    routeSteps.push("Identifica el tipo de apoyo educativo y busca opciones por comuna.");
    recommendations.push("Educación especial permite diferenciar escuela especial, lenguaje y PIE.");
    links.push({ label: "Buscar educación especial", href: "./educacion-especial.html" });
  }

  if (need === "salud") {
    routeSteps.push("Revisa Fonasa, tramo o cobertura de salud disponible.");
    recommendations.push("Fonasa puede ser una primera revisión útil para salud y cargas familiares.");
    links.push({ label: "Ver Fonasa", href: "./resultados.html?q=Fonasa" });
  }

  if (need === "beneficios" || situation === "sin-ingresos" || situation === "pensionado" || situation === "cargas" || need === "nose") {
    routeSteps.push("Haz una revisión inicial de beneficios sin asumir derecho garantizado.");
    recommendations.push("El perfilador de beneficios puede priorizar opciones según etapa, cargas y RSH.");
    links.push({ label: "Revisar beneficios", href: "./beneficios.html" });
  }

  if (answers.detalle === "detallada") {
    routeSteps.push("Lee los próximos pasos y guarda los enlaces relevantes antes de iniciar trámites.");
  }

  return {
    title: "Te conviene empezar por una ruta guiada",
    summary: "Según tus respuestas, armamos una ruta inicial para que no tengas que adivinar qué trámite buscar primero.",
    routeSteps: routeSteps.length ? routeSteps : ["Revisa beneficios.", "Consulta RSH.", "Usa el traductor si un término no se entiende.", "Elige una ruta por objetivo."],
    checklist: ["Confirma datos personales básicos.", "Ten a mano información del hogar.", "Revisa enlaces oficiales antes de tomar decisiones."],
    recommendations,
    warnings: ["Esta orientación no es una resolución oficial.", "Sirve para ordenar el primer paso y descubrir rutas útiles."],
    links: links.length ? links : [{ label: "Revisar beneficios", href: "./beneficios.html" }, { label: "Ver soluciones", href: "./index.html#soluciones" }],
    nextStep: links[0] ? `Abre primero: ${links[0].label}.` : "Parte por el perfilador de beneficios.",
    badge: "Ruta inicial personalizada"
  };
};

const setupDiagnostic = () => {
  const form = document.querySelector("[data-diagnostic-form]");
  const result = document.querySelector("[data-diagnostic-result]");
  const message = document.querySelector("[data-diagnostic-message]");
  if (!form || !result) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      if (message) message.textContent = "Responde todas las preguntas para crear tu ruta.";
      return;
    }

    if (message) message.textContent = "";
    const answers = getFormValues(form);
    saveUserProfile({
      necesidad: answers.necesidad,
      situacion: answers.situacion,
      rsh: answers.rsh,
      preferencia: answers.detalle
    });

    const guide = buildDiagnosticGuide(answers);
    result.innerHTML = renderGuideResult(guide);
    result.scrollIntoView({ behavior: "smooth", block: "start" });
    renderPersonalizedHub();
    renderDynamicAlerts();

    // Futuro IA: aquí se podrían enviar respuestas a un modelo para enriquecer la ruta.
  });
};

const translateBureaucracy = (query) => {
  const normalized = normalizeText(query);
  if (!normalized) return null;

  const exactKey = Object.keys(bureaucracyDictionary).find((key) => normalized === normalizeText(key));
  if (exactKey) return bureaucracyDictionary[exactKey];

  const partialKey = Object.keys(bureaucracyDictionary).find((key) => normalized.includes(normalizeText(key)) || normalizeText(key).includes(normalized));
  if (partialKey) return bureaucracyDictionary[partialKey];

  const related = Object.values(bureaucracyDictionary).find((item) =>
    item.related.some((term) => normalizeText(term).split(/\s+/).some((word) => word.length > 2 && normalized.includes(word)))
  );

  return related ? {
    title: "No encontramos una coincidencia exacta",
    simple: `Todavía no tenemos una explicación exacta para ese término, pero podría estar relacionado con: ${related.title}.`,
    related: related.related
  } : null;
};

const setupTranslator = () => {
  const input = document.querySelector("[data-translate-input]");
  const button = document.querySelector("[data-translate-button]");
  const result = document.querySelector("[data-translate-result]");
  if (!input || !button || !result) return;

  const run = () => {
    const translation = translateBureaucracy(input.value);
    if (!translation) {
      result.innerHTML = `<h2>En simple</h2><p>Todavía no tenemos una explicación exacta para ese término. Prueba con RSH, PIE, DS1, tramo o carga familiar.</p>`;
      return;
    }

    result.innerHTML = `
      <h2>${translation.title}</h2>
      <p><strong>En simple:</strong> ${translation.simple}</p>
      <p class="translator-context-title">Esto suele aparecer en estos contextos:</p>
      <div class="term-related">${translation.related.map((term) => `<span>${term}</span>`).join("")}</div>
      <div class="result-links translator-links">
        ${buildTranslatorLinks(translation).map((link) => `<a class="button button-secondary" href="${link.href}">${link.label}</a>`).join("")}
      </div>
    `;
  };

  button.addEventListener("click", run);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) run();
  });

  document.querySelectorAll("[data-term]").forEach((termButton) => {
    termButton.addEventListener("click", () => {
      input.value = termButton.dataset.term;
      run();
    });
  });
};

const buildTranslatorLinks = (translation) => {
  const terms = normalizeText(`${translation.title} ${translation.related.join(" ")}`);
  const links = [];

  if (terms.includes("pie") || terms.includes("educacion") || terms.includes("colegio")) {
    links.push({ label: "Ir a educación especial", href: "./educacion-especial.html" });
    links.push({ label: "Ver caso apoyo escolar", href: "./casos.html?caso=apoyo-escolar" });
  }

  if (terms.includes("rsh") || terms.includes("beneficio") || terms.includes("carga")) {
    links.push({ label: "Revisar beneficios", href: "./beneficios.html?modo=perfil" });
  }

  if (terms.includes("subsidio") || terms.includes("vivienda") || terms.includes("ahorro")) {
    links.push({ label: "Ir a ruta vivienda", href: "./casa.html" });
  }

  if (terms.includes("sii") || terms.includes("giro") || terms.includes("boleta")) {
    links.push({ label: "Ir a emprender", href: "./emprender.html" });
  }

  return links.slice(0, 3);
};

const renderCase = (caseId) => {
  const result = document.querySelector("[data-case-result]");
  const resolvedCaseId = caseAliases[caseId] || caseId;
  const data = casesData[resolvedCaseId] || casesData["tengo-personas-a-cargo"];
  const profile = getUserProfile();
  if (!result || !data) return;

  document.querySelectorAll("[data-case-button]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.caseButton === resolvedCaseId);
  });

  const contextualLinks = [...data.links];
  if (resolvedCaseId === "apoyo-escolar" && profile?.necesidad === "educacion") {
    contextualLinks.unshift({ label: "Buscar por comuna", href: "./educacion-especial.html" });
  }
  if (resolvedCaseId === "sin-ingresos") {
    contextualLinks.unshift({ label: "Beneficios con tu perfil", href: "./beneficios.html?modo=perfil" });
  }

  result.innerHTML = renderGuideResult({
    title: data.title,
    summary: data.summary,
    routeSteps: data.steps,
    checklist: ["Confirma datos personales y del hogar.", "Revisa requisitos oficiales antes de postular.", "Guarda enlaces y fechas importantes."],
    recommendations: data.recommendations,
    warnings: ["Esta ruta es referencial y no confirma acceso automático a beneficios."],
    links: contextualLinks,
    nextStep: contextualLinks[0] ? `Te conviene empezar por: ${contextualLinks[0].label}.` : "Te conviene partir por la ruta sugerida.",
    badge: "Caso prearmado"
  });
};

const setupCases = () => {
  const params = new URLSearchParams(window.location.search);
  const initialCase = caseAliases[params.get("caso")] || params.get("caso") || "tengo-personas-a-cargo";

  document.querySelectorAll("[data-case-button]").forEach((button) => {
    button.addEventListener("click", () => renderCase(button.dataset.caseButton));
  });

  renderCase(initialCase);
};

const setupAiBox = () => {
  const form = document.querySelector("[data-ai-form]");
  if (!form) return;

  const response = document.querySelector("[data-ai-response]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (response) response.classList.add("is-visible");
  });
};

const setupRevealAnimations = () => {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
};

document.addEventListener("DOMContentLoaded", () => {
  setupSearchForms();
  setupRevealAnimations();
  renderPersonalizedHub();
  renderDynamicAlerts();

  if (document.body.dataset.page === "home") setupHomeInteractions();
  if (document.body.dataset.page === "results") setupResultsPage();
  if (document.body.dataset.page === "assistant") setupGuideForms();
  if (document.body.dataset.page === "education-special") setupSchoolFinder();
  if (document.body.dataset.page === "revision-tecnica") setupPrtFinder();
  if (document.body.dataset.page === "documents") setupDocumentsPage();
  if (document.body.dataset.page === "diagnostico") setupDiagnostic();
  if (document.body.dataset.page === "translator") setupTranslator();
  if (document.body.dataset.page === "cases") setupCases();

  // Punto de extensión: aquí se puede cargar el dataset desde un backend o una base de datos real.
  // Punto de extensión: la caja "Preguntar a la IA" puede conectarse luego a una API de IA.
});

