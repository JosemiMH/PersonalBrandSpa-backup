# Instrucciones para Ejecutar la Aplicación

## 🚀 Inicio Rápido

### Opción 1: Usando npm (Recomendado)

```bash
npm run dev
```

Esto iniciará:
- ✅ Servidor backend en puerto 5000
- ✅ Vite dev server para frontend
- ✅ Hot reload automático

La aplicación estará disponible en: **http://localhost:5000**

---

## 📋 Requisitos Previos

### Variables de Entorno Necesarias

Crea un archivo `.env` en la raíz del proyecto con:

```env
DATABASE_URL=tu_connection_string_de_postgresql
OPENAI_API_KEY=tu_api_key_de_openai
NODE_ENV=development
```

### Base de Datos

La aplicación requiere una base de datos PostgreSQL (Neon Database).

**Configuración de la base de datos:**
```bash
# Después de configurar DATABASE_URL, ejecuta:
npm run db:push
```

---

## 🔧 Comandos Disponibles

### Desarrollo
```bash
npm run dev          # Iniciar servidor de desarrollo
```

### Producción
```bash
npm run build        # Construir para producción
npm run start        # Iniciar servidor de producción
```

### Otros
```bash
npm run check        # Verificar TypeScript
npm run db:push      # Sincronizar esquema de BD
```

---

## 🌐 Acceso a la Aplicación

Una vez iniciado el servidor:

- **URL Principal:** http://localhost:5000
- **Frontend:** Se sirve automáticamente por Vite
- **API Backend:** http://localhost:5000/api/*

---

## ✅ Verificación

### Verificar que el servidor está corriendo:

1. Abre tu navegador
2. Ve a: http://localhost:5000
3. Deberías ver la página principal de Eva Pérez

### Verificar endpoints API:

```bash
# Verificar salud del servidor
curl http://localhost:5000

# Verificar ruta de API (debería retornar HTML del SPA)
curl http://localhost:5000/api/appointments
```

---

## 🐛 Solución de Problemas

### El servidor no inicia

**Problema:** Error de puerto ocupado
```bash
# Verificar si el puerto 5000 está en uso
netstat -ano | findstr :5000

# Si está ocupado, termina el proceso o cambia el puerto en server/index.ts
```

### Error de base de datos

**Problema:** `DATABASE_URL must be set`

**Solución:**
1. Crea archivo `.env` con la variable DATABASE_URL
2. Verifica que la URL de conexión sea correcta
3. Verifica que la base de datos PostgreSQL esté disponible

### El frontend no carga

**Problema:** Página en blanco o errores en consola

**Solución:**
1. Verifica la consola del navegador (F12)
2. Verifica que todos los módulos se instalaron: `npm install`
3. Limpia el caché: `rm -rf node_modules/.vite`

### Chatbot no funciona

**Problema:** Chatbot muestra error de conexión

**Solución:**
1. Verifica que `OPENAI_API_KEY` esté configurada en `.env`
2. Verifica que la API key sea válida
3. Verifica los logs del servidor para ver errores específicos

---

## 📝 Notas Importantes

1. **Puerto 5000**: El servidor usa el puerto 5000 por defecto (único puerto no bloqueado en Replit)

2. **Hot Reload**: Los cambios en el código se reflejan automáticamente gracias a Vite

3. **Base de Datos**: La aplicación usa Neon Database (PostgreSQL serverless)

4. **Chatbot**: Requiere una API key válida de OpenAI para funcionar

---

## 🎯 Próximos Pasos

1. ✅ Instalar dependencias: `npm install`
2. ✅ Configurar `.env` con las variables necesarias
3. ✅ Configurar base de datos: `npm run db:push`
4. ✅ Iniciar servidor: `npm run dev`
5. ✅ Abrir navegador en: http://localhost:5000

---

¡Listo! La aplicación debería estar funcionando correctamente. 🎉

