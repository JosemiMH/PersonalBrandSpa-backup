# 🚀 Inicio Rápido - Personal Brand Spa

## ⚠️ Problema Resuelto: Compatibilidad Windows

**Problema encontrado:** El proyecto estaba configurado para Linux/Mac y no funcionaba en Windows.

**Solución:** Se agregó soporte para Windows con scripts compatibles.

---

## 📋 Métodos para Iniciar el Servidor

### Opción 1: Usando Script PowerShell (Recomendado) ⭐

```powershell
.\iniciar-servidor.ps1
```

Este script:
- ✅ Verifica que Node.js esté instalado
- ✅ Instala dependencias si es necesario
- ✅ Inicia el servidor automáticamente
- ✅ Muestra la URL del servidor

### Opción 2: Usando npm directamente

```bash
npm run dev:win
```

### Opción 3: Usando el script original con cross-env

```bash
npm run dev
```

---

## 🌐 Acceder a la Aplicación

Una vez iniciado el servidor, abre tu navegador en:

### **http://localhost:5000**

O desde otro dispositivo en tu red:

### **http://192.168.1.158:5000**

---

## ⚙️ Configuración Opcional

### Variables de Entorno (No Requerido para la UI)

Si quieres que los formularios funcionen completamente, crea un archivo `.env`:

```env
DATABASE_URL=tu_connection_string_de_postgresql
OPENAI_API_KEY=tu_api_key_de_openai
```

**Nota:** Sin estas variables, la UI funcionará pero:
- ⚠️ Los formularios mostrarán errores al enviar
- ⚠️ El chatbot no funcionará
- ✅ Todo lo demás (navegación, contenido, diseño) funcionará perfectamente

---

## 🔧 Solución de Problemas

### El servidor no inicia

1. Verifica que Node.js esté instalado:
   ```bash
   node --version
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Intenta usar el script PowerShell:
   ```powershell
   .\iniciar-servidor.ps1
   ```

### Error "Puerto 5000 en uso"

Si el puerto 5000 está ocupado:

1. Encuentra el proceso:
   ```bash
   netstat -ano | findstr :5000
   ```

2. Termina el proceso (reemplaza PID):
   ```bash
   taskkill /F /PID <PID>
   ```

### Página no carga

1. Verifica que el servidor esté corriendo
2. Verifica que estés usando la URL correcta: `http://localhost:5000`
3. Verifica la consola del navegador (F12) para errores
4. Verifica que no haya un firewall bloqueando el puerto

---

## 📝 Comandos Útiles

```bash
# Iniciar servidor (Windows)
npm run dev:win

# Iniciar servidor (multiplataforma)
npm run dev

# Verificar TypeScript
npm run check

# Instalar dependencias
npm install

# Limpiar y reinstalar
rm -rf node_modules
npm install
```

---

## ✅ Verificación de Instalación

### Checklist:

- [ ] Node.js instalado (versión 18+)
- [ ] npm instalado
- [ ] Dependencias instaladas (`node_modules` existe)
- [ ] Script `iniciar-servidor.ps1` disponible
- [ ] Puertos 5000 libre

---

## 🎯 Próximos Pasos

1. ✅ Ejecuta `.\iniciar-servidor.ps1`
2. ✅ Abre `http://localhost:5000` en tu navegador
3. ✅ Prueba la navegación
4. ⚠️ (Opcional) Configura variables de entorno para funcionalidades completas

---

## 📞 Información del Servidor

- **Host:** DESKTOP-UIJHPQL
- **IP Local:** 192.168.1.158
- **Puerto:** 5000
- **URL Local:** http://localhost:5000
- **URL Red:** http://192.168.1.158:5000

---

## ✨ Estado Actual

✅ **Compatibilidad Windows:** Implementada  
✅ **Scripts:** Configurados  
✅ **Dependencias:** Instaladas  
✅ **Servidor:** Listo para iniciar  

**¡Todo listo para ejecutar!** 🎉

---

*Última actualización: 24 de enero de 2025*





