# Script de Automatización para Crear Instancias Gratuitas de Oracle Cloud

## ¿Qué es este script?

Este script automatiza el proceso de crear una instancia gratuita de Oracle Cloud. El problema es que Oracle tiene disponibilidad limitada y muchas veces al intentar crear una instancia aparece el error "No hay capacidad disponible". Este script hace clic automáticamente en el botón "Create" cada 30 segundos, así no tienes que hacerlo manualmente y puedes conseguir una instancia cuando por fin haya disponibilidad.

## Requisitos previos

Antes de usar el script, necesitas:

- ✅ Una cuenta gratuita de [Oracle Cloud](https://www.oracle.com/cloud/free/)
- ✅ Navegador web (Chrome, Firefox, Edge o Safari)
- ✅ Haber iniciado sesión en Oracle Cloud

## Pasos para usar el script

### Paso 1: Abre el navegador

Abre tu navegador favorito y ve a la página de Oracle Cloud:

```
https://cloud.oracle.com/compute/instances/create?region=us-ashburn-1
```

### Paso 2: Inicia sesión

Si no has iniciado sesión, Oracle te pedirá tus credenciales. Ingresa tu usuario y contraseña.

### Paso 3: Lllena el formulario

Completa todos los campos del formulario de creación de instancia:

- Nombre de la instancia
- Imagen o sistema operativo
- Forma de la instancia
- Red virtual o crear nueva
- Clave SSH (si es requerida)

**Importante:** Deja todo listo menos hacer clic en "Create".

### Paso 4: Abre las herramientas de desarrollo

1. Presiona la tecla **F12** en tu teclado
   - Si no funciona, presiona **Ctrl + Shift + I** (Windows/Linux) o **Cmd + Option + I** (Mac)
2. Se abrirá una ventana con varias pestañas
3. Haz clic en la pestaña que dice **Console** o **Consola**

### Paso 5: Copia y pega el código

1. Abre el archivo `script.js` que descargaste
2. Selecciona todo el código con **Ctrl + A** (o **Cmd + A** en Mac)
3. Copia con **Ctrl + C** (o **Cmd + C**)
4. Ve a la consola del navegador
5. Pega con **Ctrl + V** (o **Cmd + V**)
6. Presiona **Enter** para ejecutar

### Paso 6: Verifica que funcione

Si todo salió bien, verás mensajes en la consola de color amarillo y verde que dicen:

```
*** Started Oracle compute instance creation script ***
*** DO NOT CLOSE THE POPUP WINDOW! ***
```

También aparecerá una barra azul en la parte superior de la página que dice "Clicking in X seconds".

### Paso 7: Deja el script corriendo

1. Cierra las herramientas de desarrollo (presiona F12 de nuevo)
2. **NO cierres la pequeña ventana emergente** que se abrió automáticamente
3. Deja el navegador abierto
4. Tu computadora puede quedarse en standby, pero no la apagues

El script hará clic automáticamente cada 30 segundos.

## Cosas importantes

### ⚠️ NO CIERRES LA VENTANA EMERGENTE

El script abre una pequeña ventana hacia cloud.oracle.com. Esta ventana es necesaria para mantener tu sesión activa. **Si la cierras, el script no funcionará correctamente**.

### Cómo cambiar el tiempo entre intentos

El tiempo por defecto es 30 segundos. Si quieres cambiarlo:

1. Abre las herramientas de desarrollo (F12)
2. Ve a la pestaña Console
3. Escribe esto y presiona Enter:

```javascript
INTERVAL_DURATION_script = 60;
```

Cambia el número 60 por los segundos que quieras esperar.

### Cómo saber si funcionó

Cuando el script haga clic exitosamente, la barra azul de arriba mostrará "Create clicked!" en verde y en la consola verás un mensaje verde con la hora.

Si Oracle tiene disponibilidad en ese momento, ¡la instancia se creará!

### Cómo detener el script

Para detener el script en cualquier momento:

1. Cierra la pestaña del navegador
2. O recarga la página presionando F5

## Solución de problemas

### "Failed to find 'Create' button"

- Verifica que el formulario de Oracle esté completamente cargado
- Asegúrate de estar en la página correcta
- Recarga la página y espera a que todo cargue

### El script funciona pero no crea la instancia

- Es normal, Oracle tiene poca disponibilidad
- El script seguirá intentando cada 30 segundos
- Ten paciencia, puede tomar horas

### La sesión de Oracle expira

- El script debería renovar la sesión automáticamente con la ventana emergente
- Si ves que te pide iniciar sesión de nuevo, haz el login en la ventana principal

### Error de sintaxis en la consola

- Verifica que copiaste TODO el código
- Asegúrate de que no falten caracteres al inicio o final

## Preguntas frecuentes

### ¿Cuánto tiempo puede tomar?

Depende de la disponibilidad de Oracle. Algunos usuarios lo logran en minutos, otros pueden tardar horas o días.

### ¿Puedo usar mi computadora mientras corre el script?

Sí, puedes usar tu computadora normalmente. Solo mantén el navegador abierto.

### ¿El script consume muchos recursos?

No, apenas usa recursos. Solo hace una acción cada 30 segundos.

### ¿Qué pasa cuando se crea la instancia?

El script seguirá intentando. Cuando veas que la instancia se creó, simplemente cierra el navegador o recarga la página para detener el script.

### ¿Es seguro usar este script?

Sí, es seguro para uso personal. Solo automatiza clics en un formulario que tú mismo llenaste. No roba información ni hace nada malicioso.

## Notas finales

Este script fue creado para ayudar a las personas a obtener una instancia gratuita de Oracle Cloud, que suelen agotarse rápidamente. Úsalo con paciencia y comprensión de que Oracle tiene disponibilidad limitada.

Este script tiene SOLO fines educativos y nunca debe usarse contra los T&C de Oracle.

¡Buena suerte!

---

## Créditos

Este script está basado en el trabajo original de [gardinbe](https://github.com/gardinbe/oracle-compute-instance-creation-script). 

La versión original utilizaba un iframe que Oracle ha eliminado de su interfaz actual, por lo que este script fue actualizado para funcionar con la nueva UI de Oracle Cloud.

Gracias a la comunidad por seguir mejorando y adaptando este tipo de herramientas.
