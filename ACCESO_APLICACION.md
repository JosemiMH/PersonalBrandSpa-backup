# 🌐 Información de Acceso a la Aplicación

## 📍 Direcciones para Acceder

### Acceso Local (mismo dispositivo)

```
http://localhost:5000
```

### Acceso desde otra computadora en tu red local

```
http://192.168.1.158:5000
```

---

## 💻 Información del Servidor

### Nombre del Host
```
DESKTOP-UIJHPQL
```

### Dirección IP Local
```
IPv4: 192.168.1.158
IPv6: fe80::7a88:d75a:d224:f67d%12
```

### Gateway (Router)
```
192.168.1.1
```

### Puerto de la Aplicación
```
5000
```

---

## 🔗 URLs Completas

### Desde este equipo:
- 🌐 **Principal:** http://localhost:5000
- 🌐 **Con hostname:** http://DESKTOP-UIJHPQL:5000
- 🌐 **Con IP:** http://192.168.1.158:5000

### Desde otro dispositivo en tu red:
- 🌐 **Por IP:** http://192.168.1.158:5000
- 🌐 **Por hostname:** http://DESKTOP-UIJHPQL:5000

---

## 📱 Acceso desde tu Teléfono (misma red WiFi)

Si estás conectado a la misma red WiFi:

1. Asegúrate de que tu firewall permite conexiones en el puerto 5000
2. Abre el navegador en tu teléfono
3. Ve a: `http://192.168.1.158:5000`

---

## 🔒 Configuración del Firewall

Si no puedes acceder desde otro dispositivo, necesitas permitir el puerto 5000 en el firewall:

### Windows Firewall
1. Ve a "Firewall de Windows Defender"
2. Clic en "Configuración avanzada"
3. Clic en "Reglas de entrada" → "Nueva regla"
4. Selecciona "Puerto" → Siguiente
5. TCP, Puerto específico: 5000
6. Permitir la conexión
7. Marca todos los perfiles
8. Nombre: "Personal Brand Spa - Puerto 5000"

### También puedes ejecutar este comando:

```powershell
New-NetFirewallRule -DisplayName "Personal Brand Spa" -Direction Inbound -LocalPort 5000 -Protocol TCP -Action Allow
```

---

## ✅ Verificación

### Para verificar que el servidor está corriendo:

```powershell
# Desde tu computadora
curl http://localhost:5000

# Desde otro dispositivo en la red
curl http://192.168.1.158:5000
```

### Para ver los puertos abiertos:

```powershell
netstat -ano | findstr :5000
```

Deberías ver algo como:
```
TCP    0.0.0.0:5000           0.0.0.0:0              LISTENING
```

---

## 🎯 Prueba Rápida

### Desde el mismo equipo:
1. Abre tu navegador
2. Ve a: **http://localhost:5000**
3. Deberías ver la página de Eva Pérez

### Desde otro dispositivo en tu red:
1. Conecta el dispositivo a la misma red WiFi
2. Abre el navegador
3. Ve a: **http://192.168.1.158:5000**
4. Deberías ver la página de Eva Pérez

---

## 📝 Notas Importantes

⚠️ **IP Dinámica:** Tu IP local (192.168.1.158) puede cambiar cuando se reinicia el router. Si cambia, simplemente ejecuta `ipconfig` nuevamente para obtener la nueva IP.

⚠️ **Firewall:** Si no puedes acceder desde otros dispositivos, es probablemente por el firewall. Sigue las instrucciones arriba para permitir el puerto 5000.

⚠️ **Misma Red:** Solo los dispositivos conectados a la misma red WiFi pueden acceder usando la IP local.

---

## 🌍 Acceso desde Internet (Avanzado)

Para acceder desde internet (no en la red local), necesitarías:
1. Configurar port forwarding en tu router
2. Usar tu IP pública
3. Configurar seguridad adicional

**No recomendado para desarrollo.** Mejor usa una herramienta como ngrok si necesitas acceso desde internet.

---

*Información generada el 24 de enero de 2025*

