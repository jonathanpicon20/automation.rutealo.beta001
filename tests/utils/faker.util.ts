import { fakerES as faker } from '@faker-js/faker';

// 🔒 Config opcional (español)

// =====================================================
// 👤 CLIENTE
// =====================================================
export const generarCliente = () => ({
  nombre: faker.person.fullName(),
  dni: faker.string.numeric(8),
  telefono: `9${faker.string.numeric(8)}`,
});

// =====================================================
// 🧑‍✈️ GUÍA
// =====================================================
export const generarGuia = () => ({
  nombres: faker.person.firstName(),
  apellidos: faker.person.lastName(),
  celular: generarTelefonoPeru(),
  dni: generarDniUnico(),
});

// =====================================================
// 🚌 BUS
// =====================================================
export const generarBus = () => ({
  placa: generarPlacaPeru(),
  asientos: faker.number.int({ min: 20, max: 60 }),
});

// =====================================================
// 🏝️ SERVICIO
// =====================================================
export const generarServicio = () => ({
  nombre: `Tour ${faker.location.city()} ${faker.number.int({ min: 1, max: 999 })}`,
  precio: faker.number.int({ min: 50, max: 300 }),
});

// =====================================================
// 🎟️ CANTIDAD PASAJEROS
// =====================================================
export const generarCantidadPasajeros = (max = 10) => {
  return faker.number.int({ min: 1, max });
};

// =====================================================
// 🔢 HELPERS (CLAVE)
// =====================================================

// DNI Perú (8 dígitos, evita repetición simple)
const generarDniUnico = () => {
  return faker.string.numeric(8);
};

// Teléfono Perú (9 dígitos empezando en 9)
const generarTelefonoPeru = () => {
  return `9${faker.string.numeric(8)}`;
};

// Placa Perú (formato ABC-123)
const generarPlacaPeru = () => {
  return `${faker.string.alpha(3).toUpperCase()}-${faker.number.int({ min: 100, max: 999 })}`;
};