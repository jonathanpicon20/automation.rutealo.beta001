# 🚀 automation.rutealo.beta001

Automatización de pruebas para la WebApp **Rutealo**, desarrollada utilizando **Playwright**.

---

## 📌 Descripción

Este proyecto contiene pruebas automatizadas end-to-end (E2E) para validar el correcto funcionamiento de la aplicación web **Rutealo**.

El objetivo es asegurar la calidad del producto mediante pruebas confiables, rápidas y mantenibles.

---

## 🧪 Tecnologías utilizadas

* Playwright
* JavaScript / TypeScript
* Node.js
* pnpm

---

## 📂 Estructura del proyecto

```
automation.rutealo.beta001/
│
├── tests/              # Casos de prueba
├── pages/              # Page Object Model (POM)
├── utils/              # Funciones reutilizables
├── test-data/          # Datos de prueba
├── playwright.config.js
└── package.json
```

---

## ⚙️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/jonathanpicon20/automation.rutealo.beta001.git
cd automation.rutealo.beta001
```

Instala dependencias:

```bash
pnpm install
```

Instala Playwright:

```bash
npx playwright install
```

---

## ▶️ Ejecución de pruebas

Ejecutar todas las pruebas:

```bash
npx playwright test
```

Ejecutar en modo UI:

```bash
npx playwright test --ui
```

Ejecutar en modo debug:

```bash
npx playwright test --debug
```

---

## 📊 Reportes

Ver reporte de ejecución:

```bash
npx playwright show-report
```

---

## 🧠 Buenas prácticas implementadas

* Uso de Page Object Model (POM)
* Separación de datos de prueba
* Tests independientes y reutilizables
* Configuración centralizada
* Reportes automáticos

---

## 🚧 Próximas mejoras

* Integración con CI/CD (GitHub Actions)
* Pruebas cross-browser
* Integración con APIs
* Reportes avanzados (Allure)

---

## 👨‍💻 Autor

**Jonathan Paul**
QA Automation Engineer en proceso 🚀

---

## 📄 Licencia

Este proyecto es de uso educativo y demostrativo.
