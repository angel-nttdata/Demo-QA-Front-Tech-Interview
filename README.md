# Demo-QA-Front-Tech-Interview

Este repositorio contiene un framework de automatización de pruebas End-to-End (E2E) construido para demostrar la aplicación de prácticas y patrones de QA modernos. El proyecto utiliza un stack tecnológico basado en **_Playwright_**, **_TypeScript_** y **_Cucumber.js_** para crear pruebas robustas y mantenibles.

El propósito del framework es validar el flujo completo de compra de productos en el sitio de demostración "Swag Labs" (saucedemo.com). Sirve como un ejemplo práctico de cómo implementar una estrategia de pruebas efectiva que es legible, escalable y eficiente.

## Estructura del Proyecto

Este proyecto adopta un enfoque de **_Desarrollo Guiado por el Comportamiento (BDD)_** para fomentar la colaboración entre equipos técnicos y no técnicos. La organización de los archivos sigue el patrón de diseño **_Page Object Model (POM)_**, que desacopla la lógica de las pruebas de la estructura de las páginas web, mejorando drásticamente la mantenibilidad y reutilización del código. Adicionalmente, se aplican técnicas de **_Pruebas Guiadas por Datos (DDT)_** para maximizar la cobertura de los escenarios.

```
Demo-QA-Front-Tech-Interview/
├── config/
│   └── cucumber.js         # Archivo de configuración principal para Cucumber.js
│
├── src/
│   ├── features/           # Contiene los archivos de especificaciones en Gherkin
│   ├── step-definitions/   # Traduce los pasos de Gherkin a código de Playwright ejecutable
│   ├── pages/              # Clases del Page Object Model (POM) para cada página
│   ├── hooks/              # Contiene hooks (Before, After) que se ejecutan durante el ciclo de vida de la prueba
│   └── helper/             # Módulos de ayuda reutilizables (gestión del browser, variables de entorno, etc.)
│
├── test-results/           # Carpeta donde se guardan los reportes generados tras la ejecución
│
├── package.json            # Dependencias del proyecto y scripts
├── tsconfig.json           # Archivo de configuración de TypeScript
├── .gitignore
└── README.md
```

## Tecnologías utilizadas:

* **Framework de Pruebas:** Playwright
* **Framework BDD:** Cucumber.js (usando sintaxis Gherkin)
* **Lenguaje:** TypeScript
* **Entorno de Ejecución:** Node.js

## Prerrequisitos

Para clonar y ejecutar este proyecto localmente, es necesario tener instalado el siguiente software:

* _Git_: Sistema de control de versiones
* _Node.js_: Se recomienda la versión 22 o superior
* Un editor de código o IDE de su preferencia (ej. https://code.visualstudio.com)

## Instalación y Configuración

Siga los siguientes pasos para poner en marcha el entorno de pruebas.

### 1. Clonar el repositorio

Abra una terminal y ejecute el siguiente comando para clonar el proyecto en su máquina local:
```bash
git clone https://github.com/angel-nttdata/Demo-QA-Front-Tech-Interview.git
```

### 2. Navegar al directorio del proyecto

```bash
cd Demo-QA-Front-Tech-Interview
```
### 3. Instalar Dependencias

Ejecute el siguiente comando para instalar todas las dependencias del proyecto definidas en el archivo package.json.

```Bash
npm install
```

### 4. Ejecutar las pruebas

El proyecto está configurado con varios scripts de `npm` para facilitar la ejecución de las pruebas en diferentes entornos y navegadores.

Para interactuar con el framework, utiliza los siguientes scripts desde la terminal.

#### ▶️ **Ejecución Principal**

| Comando | Descripción |
| :--- | :--- |
| `npm run test-dev` | Lanza las pruebas contra el entorno **DEV** en **Chrome**. |
| `npm run test-uat` | Lanza las pruebas contra el entorno **UAT** en **Chrome**. |
| `npm run test-firefox` | Lanza las pruebas contra el entorno **DEV** en **Firefox**. |
| `npm run test-webkit` | Lanza las pruebas contra el entorno **DEV** en **WebKit** (Safari). |

#### 📊 **Reportes de Pruebas**

Un reporte HTML detallado se genera **automáticamente** al finalizar las pruebas con `npm run test-dev` y `npm run test-uat`.

* El script `posttest-*` en `package.json` es el responsable de esta acción.
* Encontrarás los reportes en la carpeta `test-results/reports/`, listos para ser analizados.

#### 🧹 **Limpieza**

Para eliminar la carpeta de resultados (`test-results/`) y hacer una limpieza completa del espacio de trabajo, ejecuta:

```bash
npm run clean
```
