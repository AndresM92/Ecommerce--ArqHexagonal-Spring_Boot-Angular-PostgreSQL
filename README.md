# Ecommerce – Arq. Hexagonal (Spring Boot + Angular + JWT +PostgreSQL)  

Este repositorio contiene un **E-commerce Full Stack**, organizada bajo la arquitectura hexagonal, con backend en Spring Boot, frontend en Angular y base de datos en PostgreSQL.

---

##  Tecnologías principales

| Capa          | Tecnologías                   |
|---------------|------------------------------|
| Backend       | Java, Spring Boot, Hexagonal Architecture, JWT |
| Frontend      | Angular, TypeScript, HTML, CSS |
| Base de datos | PostgreSQL                   |

---

##  Estructura del proyecto  
  
├── backend/ # Servicio REST con Spring Boot (Java)  
├── front_Ecommerce/ # Aplicación en Angular (TypeScript, HTML, CSS)  
├── .gitignore  
├── .gitattributes  
└── README.md   

- **`backend/`**: contiene todos los paquetes y capas de la arquitectura hexagonal, desde el dominio hasta los adaptadores.  
- **`front_Ecommerce/`**: interfaz de usuario moderna, con componentes de Angular consumiendo APIs REST.
---

## Configura y ejecuta el backend
Navega a backend/  
Asegúrate de tener Spring Boot(Java) y PostgreSQL instalados.  
Ajusta los valores de conexión (host, usuario, contraseña, base de datos).  

## Ejecuta el frontend  
Navega a front_Ecommerce/  
Asegúrate de tener Node.js y npm  
Instala dependencias:  
 -npm install  
**Inicia el servidor de desarrollo:**  
 -ng serve  
