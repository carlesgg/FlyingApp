# ✈️ Vueling Exam ✈️

Here we have a Domain-Driven Design (DDD) project built in C# .NET 8, using EntityFramework Core and SQLServer, containerized with Docker. 

The project demonstrates clean architecture, SOLID principles, domain modeling, and separation of concerns for scalable backend systems.

## The project complies with all the required features:

- Gather data from an External Service. ✅
- Store the data in a SQL Server. ✅
- Implement a Layered solution to return/modify the data on specific endpoints. ✅
- Implement Unit testing for XXXXXXXXXXXXXXXXXX
- Implement Integration testing for the API. ✅
- Include REDIS into the project for faster queries. ✅
- Implemented a Health-Check Controller to ease the use of Docker containers. ✅
- Handle Exceptions and Logging ✅
- Implemented API Validators ✅

### Possible future upgrades

Due to the limited timeframe given to design and develop this project, there are some functionalities not implemented that I think are relevant enought to be mentioned:

- miau

# Domain-Driven Design 

This project is structured according to Domain-Driven Design (DDD) principles.
The goal is to isolate business logic from infrastructure concerns, allowing the domain to evolve independently of frameworks and databases. 

// Add Component Architecture Diagram Image (save as jpg)

| Layer               | Responsibility                                                               |
| ------------------- | ---------------------------------------------------------------------------- |
| **API**          | REST endpoints that expose the application to clients. |
| **Application**     | Services and orchestration of domain operations. |
|  **Domain**| Core business logic and domain entities. |
| **Infrastructure**  | Database access, repositories, and proxies. |
| **Cross Cutting**  | A transversal layer with helper methods and utils. |

## 📁 Project Structure

| Path | Description |
|------|--------------|
| `VuelingExam.Api/` | 🌐 API controllers, Validators and startup configuration |
| **Application** | 📁 Solution Folder |
| `VuelingExam.Application.Services/` | ⚙️ Application services |
| `VuelingExam.Application.Dtos/` | ⚙️ Request/Response DTOs |
| `VuelingExam.Application.Mappers/` | ⚙️ Application Mappers |
| **Domain** | 📁 Solution Folder |
| `VuelingExam.Domain.Entities/` | 🧠 Domain Entities |
| `VuelingExam.Domain.Contracts/` | 🧠 Domain Interfaces |
| `VuelingExam.Domain.RepositoryContracts/` | 🧠 Infrastructure repository interfaces |
| `VuelingExam.Domain.Services/` | 🧠 Domain Services, core domain logic |
| **Infrastructure** | 📁 Solution Folder |
| `VuelingExam.Infrastructure.Context/` | 🗄️ EF Core context, repositories, configurations |
| `VuelingExam.Infrastructure.Datamodels/` | 🗄️ EF Core context, repositories, configurations |
| `VuelingExam.Infrastructure.Bases/` | 🗄️ EF Core context, repositories, configurations |
| `VuelingExam.Infrastructure.Repositories/` | 🗄️ EF Core context, repositories, configurations |
| `VuelingExam.Infrastructure.Proxies/` | 🗄️ EF Core context, repositories, configurations |
| **CrossCutting** | 📁 Solution Folder|
| `VuelingExam.CrossCutting/` | 🗄️ EF Core context, repositories, configurations |
| **Testing** | 📁 Solution Folder|
| `VuelingExam.Infrastrucutre.Repositories.Unit.Tests/` | 🗄️ EF Core context, repositories, configurations |
| `VuelingExam.Infrastrucutre.Repositories.Integration.Tests/` | 🗄️ EF Core context, repositories, configurations |
| `VuelingExam.Infrastrucutre.Repositories.Unit.Tests/` | 🗄️ EF Core context, repositories, configurations |
| `VuelingExam.Infrastrucutre.Repositories.Unit.Tests/` | 🗄️ EF Core context, repositories, configurations |
| **Other Files** |  |
| `VuelingExam.sln` | 🧩 Solution file |
| `docker-compose.yml` | 🐳 Docker configuration |
| `README.md` | 📝 Project documentation |
| `Postman Collection` | 📝 Postman Collection |


# Stack

| Layer                | Technology                    |
| -------------------- | ----------------------------- |
| **Language**         | C# (.NET 8)         |
| **Persistence**      | Entity Framework Core         |
| **Database**         | SQL Server (Docker container) |
| **InMemory Database**| Redis (Docker container) |
| **Containerization** | Docker & Docker Compose       |
| **Testing**          | MSTest and NSubstitute      |


# 🚀 Getting Started

To use the application we will need to install some required softwares and follow some easy steps. 

## 1️⃣ **Prerequisites**

We must have 
**[Docker Desktop](https://www.docker.com/)** installed and running to use the application easily. We will also need **[.NET SDK 8.0+](https://dotnet.microsoft.com/download)**.


## 2️⃣ Run with Docker
🧱 Build and Start
```
docker compose up --build
```

**This command will:**

- _Start the .NET API service_

- _Start a SQL Server container_

- _Apply EF Core migrations automatically_

**🔍 Check Running Containers**
```
docker ps
```
**🧭 API Base URL**

Once running:
```
http://localhost:5000
```

## 📚 References

- [Domain-Driven Design – Eric Evans](https://www.domainlanguage.com/ddd/)
- [Implementing DDD – Vaughn Vernon](https://dddcommunity.org/)
- [Microsoft Docs – EF Core](https://learn.microsoft.com/en-us/ef/core/)
- [Clean Architecture – Robert C. Martin](https://blog.cleancoder.com/)

## 🧩 Design & Architectural Patterns Used

This project implements several **software design** and **architectural patterns** to ensure clean separation of concerns, maintainability, and scalability.  
Although based on **Domain-Driven Design (DDD)** principles, it focuses mainly on practical implementation patterns within the .NET ecosystem.

---

### 🧱 Repository Pattern
Encapsulates all database access logic, isolating the domain and application layers from **Entity Framework Core**.  
Each repository represents a collection of domain entities and provides methods such as `Add`, `Update`, `Delete`, and `GetById`.

**Benefits:**
- Abstracts data access logic from the business logic.  
- Simplifies mocking and testing.  
- Improves maintainability and consistency.

---

### 🧩 Generic Repository Pattern
A **Generic Repository** provides a reusable and type-safe implementation for common CRUD operations across multiple entities.  
It eliminates boilerplate and reduces repetitive code by using generics (e.g., `IRepository<T>`).

**Benefits:**
- Reduces code duplication.  
- Ensures consistent data access conventions.  
- Simplifies future maintenance and scalability.

---

### 🔄 Unit of Work Pattern
The **Unit of Work** pattern coordinates the work of multiple repositories under a single transaction.  
It ensures that all database operations are committed or rolled back as one atomic operation.

**Benefits:**
- Maintains transactional consistency.  
- Reduces the likelihood of partial updates.  
- Improves resource management and performance.

---

### 🏭 Factory Pattern
Centralizes the creation logic for complex domain objects or entities.  
The **Factory** encapsulates validation and setup rules, ensuring consistent object initialization.

**Benefits:**
- Enforces valid object construction.  
- Simplifies complex initialization.  
- Increases readability and encapsulation.

---

### 🧰 Builder Pattern (for Services)
Used for constructing services that require multiple configuration steps or dependencies.  
The **Builder** separates the construction process from the final representation and provides a fluent interface for setup.

**Benefits:**
- Reduces constructor complexity.  
- Improves clarity when configuring services.  
- Makes the code more modular and testable.

---

### 🎭 Facade Pattern (for Dependency Injection)
Provides a single, simplified entry point for configuring **Dependency Injection** in the project.  
The **Facade** hides the complexity of registering multiple services, repositories, and configurations.

**Benefits:**
- Simplifies startup and configuration logic.  
- Improves readability of the composition root.  
- Decouples configuration details from implementations.

---

### ⚙️ Operation Pattern
Encapsulates individual use cases or business operations into standalone classes (e.g., `CreateBookingOperation`, `GetFlightsOperation`).  
Each operation defines a single, clear responsibility.

**Benefits:**
- Makes business logic reusable and testable.  
- Promotes a clean and modular application layer.  
- Aligns with the **Single Responsibility Principle**.

---

### 🧠 Dependency Injection Pattern
Implements **Inversion of Control (IoC)** to decouple classes from their dependencies.  
Dependencies are provided externally, typically through constructor injection.

**Benefits:**
- Reduces coupling and increases testability.  
- Simplifies swapping implementations (e.g., repository mocks).  
- Aligns with the **Dependency Inversion Principle** from SOLID.

---

### 🧾 Data Transfer Object (DTO) Pattern
Used to transfer data between layers, especially between the **API** and **Application** layers.  
DTOs prevent domain objects from being exposed directly over the network.

**Benefits:**
- Improves API security and stability.  
- Keeps domain models pure and framework-agnostic.  
- Simplifies data validation and serialization.

---

### ⚙️ Configuration Pattern
All environment-specific configurations (connection strings, ports, etc.) are centralized in configuration files and strongly-typed classes.  
This pattern improves maintainability and avoids hard-coded settings.

**Benefits:**
- Centralized and maintainable configuration.  
- Easier environment management (Docker, dev, prod).  
- Promotes consistency across services.

---

### 🧱 Controller / Service Layer Pattern
The **API Layer** follows the **Controller-Service** structure:
- **Controllers** handle HTTP requests, responses, and routing.
- **Services** contain the application logic and coordinate domain operations.

**Benefits:**
- Keeps controllers thin and focused.  
- Encourages testable, reusable service logic.  
- Aligns with **Clean Architecture** principles.

---

### 🚨 Exception Handling Pattern
Implements a unified error handling mechanism to capture and format exceptions into meaningful HTTP responses.  
Custom middleware or filters handle exceptions globally.

**Benefits:**
- Consistent error responses.  
- Cleaner and more maintainable controllers.  
- Simplifies debugging and logging.

---

### 🧾 Logging Pattern
Centralized logging ensures that every operation, exception, and database interaction is traceable.  
Commonly implemented using **Microsoft.Extensions.Logging** or **Serilog**.

**Benefits:**
- Simplifies debugging and auditing.  
- Helps track performance and identify bottlenecks.  
- Improves observability during development and production.

---

## 🧭 SOLID Principles

The project follows **SOLID** principles to maintain clean architecture and high code quality:

| Principle | Description |
|------------|--------------|
| **S – Single Responsibility Principle** | Each class has only one reason to change. |
| **O – Open/Closed Principle** | Classes are open for extension but closed for modification. |
| **L – Liskov Substitution Principle** | Subclasses can replace their base classes without altering correctness. |
| **I – Interface Segregation Principle** | Interfaces are small and specific, avoiding unnecessary dependencies. |
| **D – Dependency Inversion Principle** | High-level modules depend on abstractions, not concrete implementations. |

---


## 🔥API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

### ✅ Summary

By combining these patterns and principles, the project achieves:
- **High cohesion** and **low coupling**.  
- **Transactional consistency** with `UnitOfWork`.  
- **Reusable and testable** service and operation logic.  
- **Clean separation** between domain, application, and infrastructure layers.  
- **Maintainable and scalable** architecture aligned with industry best practices.
