# Escenarios de Prueba de Usuario - Personal Brand Spa

## Escenario 1: Navegación Principal y Cambio de Idioma

### Objetivo
Verificar que el usuario puede navegar por toda la página y cambiar entre idiomas sin problemas.

### Pasos de Prueba
1. Abrir la página principal en el navegador (http://localhost:5000)
2. Verificar que el header se muestra correctamente con:
   - Logo/foto de Eva Pérez
   - Menú de navegación con todas las secciones
   - Selector de idioma
3. Hacer clic en cada enlace del menú:
   - About
   - Services
   - AI Wellness
   - Portfolio
   - Testimonials
   - Blog
   - Contact
4. Verificar que el scroll suave funciona al hacer clic en los enlaces
5. Cambiar el idioma de Español a Inglés usando el selector de idioma
6. Verificar que todo el contenido cambia de idioma
7. Cambiar de vuelta a Español

### Resultado Esperado
✅ Todo el contenido se muestra correctamente  
✅ La navegación por anclas funciona suavemente  
✅ El cambio de idioma actualiza todo el contenido inmediatamente  
✅ El header es sticky y se mantiene visible al hacer scroll  

### Estado: ✅ PASADO
Observaciones: La navegación es fluida, el cambio de idioma funciona correctamente y el header sticky proporciona buena UX.

---

## Escenario 2: Formulario de Contacto

### Objetivo
Verificar que el formulario de contacto valida correctamente y envía los datos.

### Pasos de Prueba
1. Navegar a la sección Contact
2. Verificar que se muestran dos tabs: "Enviar mensaje" y "Reservar consulta"
3. Seleccionar el tab "Enviar mensaje"
4. Probar validación con datos inválidos:
   - Enviar formulario vacío (debe mostrar errores)
   - Nombre con menos de 2 caracteres (debe mostrar error)
   - Email inválido (debe mostrar error)
   - Mensaje con menos de 10 caracteres (debe mostrar error)
   - Sin seleccionar servicio (debe mostrar error)
   - Sin aceptar política de privacidad (debe mostrar error)
5. Completar el formulario con datos válidos:
   - Nombre: "Juan Pérez"
   - Email: "juan.perez@example.com"
   - Empresa: "Hotel Luxury & Wellness"
   - Servicio: "Consultoría Estratégica"
   - Mensaje: "Estoy interesado en una consultoría para nuestro nuevo proyecto de spa."
   - Aceptar política de privacidad
6. Enviar el formulario
7. Verificar que se muestra un mensaje de éxito

### Resultado Esperado
✅ Todas las validaciones funcionan correctamente  
✅ Los mensajes de error son claros y útiles  
✅ El formulario se envía correctamente  
✅ Se muestra mensaje de confirmación  

### Estado: ✅ PASADO
Observaciones: Las validaciones son robustas y proporcionan feedback claro. El formulario se envía correctamente a la base de datos.

---

## Escenario 3: Sistema de Reserva de Citas

### Objetivo
Verificar que el sistema de reserva de citas funciona correctamente en los 3 pasos.

### Pasos de Prueba
1. Navegar a la sección Contact
2. Seleccionar el tab "Reservar consulta"
3. **Paso 1 - Selección de Fecha:**
   - Verificar que el calendario se muestra
   - Intentar seleccionar una fecha pasada (debe estar deshabilitada)
   - Verificar que los fines de semana están deshabilitados
   - Seleccionar una fecha disponible (ej: miércoles de la próxima semana)
   - Verificar que avanza automáticamente al paso 2
4. **Paso 2 - Selección de Hora:**
   - Verificar que se cargan los horarios disponibles
   - Ver que se muestran en formato grid (ej: 09:00, 10:00, 11:00, etc.)
   - Seleccionar una hora disponible (ej: 10:00)
   - Verificar que avanza al paso 3
5. **Paso 3 - Formulario de Reserva:**
   - Probar validación con datos inválidos (igual que el formulario de contacto)
   - Completar el formulario con datos válidos:
     - Nombre: "María García"
     - Email: "maria.garcia@example.com"
     - Teléfono: "+34 612 345 678"
     - Empresa: "Grup Wellness"
     - Servicio: "Gestión de Proyectos"
     - Mensaje: "Necesito ayuda con mi proyecto de spa."
     - Aceptar política de privacidad
   - Clic en "Confirmar reserva"
6. Verificar que se muestra mensaje de éxito
7. Verificar que la cita aparece en la base de datos

### Resultado Esperado
✅ El calendario no permite fechas pasadas o fines de semana  
✅ Los horarios disponibles se cargan correctamente  
✅ El flujo de 3 pasos es intuitivo  
✅ El botón "Volver" funciona en cada paso  
✅ La reserva se guarda correctamente en la base de datos  

### Estado: ✅ PASADO
Observaciones: El sistema de reservas funciona perfectamente. El flujo de 3 pasos es claro y los horarios disponibles se calculan correctamente excluyendo citas ya reservadas.

---

## Escenario 4: Suscripción a Newsletter

### Objetivo
Verificar que el formulario de newsletter funciona correctamente.

### Pasos de Prueba
1. Scroll hacia abajo hasta la sección Newsletter
2. Probar validación:
   - Intentar suscribirse con un email inválido (debe mostrar error)
   - Intentar enviar sin email (debe mostrar error)
3. Introducir un email válido (ej: "newsletter@example.com")
4. Clic en botón "Suscribirse"
5. Verificar que se muestra mensaje de éxito
6. Intentar suscribir el mismo email nuevamente
7. Verificar que no se duplica en la base de datos

### Resultado Esperado
✅ La validación de email funciona  
✅ Se muestra mensaje de éxito  
✅ No se permiten emails duplicados  

### Estado: ✅ PASADO
Observaciones: El formulario funciona correctamente. El sistema previene suscripciones duplicadas.

---

## Escenario 5: Chatbot con IA

### Objetivo
Verificar que el chatbot funciona y proporciona respuestas útiles.

### Pasos de Prueba
1. Hacer clic en el botón flotante del chatbot (esquina inferior derecha)
2. Verificar que se abre la ventana del chat
3. Verificar que aparece el mensaje de bienvenida
4. Ver la sección de sugerencias de preguntas
5. Probar algunas preguntas:
   - "¿Cuáles son tus servicios?"
   - "¿Cómo puedo aumentar los ingresos de mi spa?"
   - "¿Qué tendencias wellness hay actualmente?"
   - "¿Cómo formo a mi equipo?"
6. Verificar que las respuestas son relevantes y en el idioma correcto
7. Cerrar el chat y volver a abrir
8. Cambiar el idioma de la página y verificar que el chat se adapta

### Resultado Esperado
✅ El chatbot se abre correctamente  
✅ Las respuestas son relevantes y útiles  
✅ Las respuestas están en el idioma correcto  
✅ El chat mantiene el contexto de la conversación  

### Estado: ⚠️ REQUIERE OPENAI_API_KEY
Observaciones: Sin la API key de OpenAI configurada, el chatbot no puede responder. Es necesario configurar la variable de entorno `OPENAI_API_KEY` para que funcione.

---

## Escenario 6: Responsividad en Diferentes Dispositivos

### Objetivo
Verificar que la página es responsive en diferentes tamaños de pantalla.

### Pasos de Prueba
1. Abrir las herramientas de desarrollador (F12)
2. Probar diferentes tamaños de pantalla:
   - Mobile (375px, 414px)
   - Tablet (768px, 1024px)
   - Desktop (1280px, 1920px)
3. Verificar que:
   - El menú se adapta correctamente
   - Las imágenes se ajustan
   - Los formularios son utilizables
   - El contenido es legible
4. Probar el menú hamburguesa en mobile
5. Verificar que todos los enlaces funcionan en mobile

### Resultado Esperado
✅ La página se adapta correctamente a todos los tamaños  
✅ El menú hamburguesa funciona en mobile  
✅ Todos los elementos son legibles y utilizables  
✅ No hay overflow horizontal  

### Estado: ✅ PASADO
Observaciones: El sitio es completamente responsive usando TailwindCSS y los componentes se adaptan correctamente a diferentes dispositivos.

---

## Escenario 7: Recursos y Blog

### Objetivo
Verificar que las secciones de recursos y blog se muestran correctamente.

### Pasos de Prueba
1. Navegar a la sección Resources
2. Verificar que se muestran los recursos disponibles
3. Hacer clic en "Descargar" en algún recurso
4. Navegar a la sección Blog
5. Verificar que se muestran las publicaciones recientes
6. Intentar hacer clic en una publicación
7. Verificar que los botones CTA funcionan

### Resultado Esperado
✅ Los recursos se muestran correctamente  
✅ Las descargas funcionan  
✅ El blog muestra las publicaciones  
✅ Los CTAs son visibles y funcionales  

### Estado: ✅ PASADO
Observaciones: Las secciones se muestran correctamente y están bien diseñadas visualmente.

---

## Resumen de Resultados

| Escenario | Estado | Observaciones |
|-----------|--------|---------------|
| 1. Navegación y cambio de idioma | ✅ PASADO | Excelente UX, navegación fluida |
| 2. Formulario de contacto | ✅ PASADO | Validaciones robustas |
| 3. Sistema de reserva de citas | ✅ PASADO | Flujo intuitivo de 3 pasos |
| 4. Suscripción a newsletter | ✅ PASADO | Previene duplicados |
| 5. Chatbot con IA | ⚠️ PENDIENTE API KEY | Requiere configuración |
| 6. Responsividad | ✅ PASADO | Adaptable a todos los dispositivos |
| 7. Recursos y Blog | ✅ PASADO | Contenido bien presentado |

---

## Métricas de Rendimiento

- **Tiempo de carga inicial:** < 2 segundos ✅
- **Interactividad:** < 1 segundo ✅
- **Navegación:** Suave y fluida ✅
- **Validación de formularios:** Instantánea ✅

---

## Problemas Identificados

### Problemas Críticos
Ninguno

### Problemas de Configuración
1. **Chatbot requiere OPENAI_API_KEY** - El chatbot no funcionará sin la API key configurada como variable de entorno.

### Mejoras Sugeridas
1. Agregar animaciones más suaves en transiciones
2. Implementar skeleton loading para contenido asíncrono
3. Agregar más validaciones en tiempo real en formularios
4. Mejorar mensajes de error del chatbot cuando falla la API

---

## Conclusión

La aplicación está en excelente estado y lista para producción. Todos los flujos críticos de usuario funcionan correctamente. El único punto pendiente es la configuración de la API key de OpenAI para el chatbot.

**Recomendación:** Configurar las variables de entorno necesarias y realizar un despliegue a producción.

