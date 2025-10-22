# ✈️ Vueling Exam ✈️

Here we have a Domain-Driven Design (DDD) project built in C# .NET 8, using EntityFramework Core, SQLServer and Redis, containerized with Docker. 

The project demonstrates clean architecture, SOLID principles, domain modeling, and separation of concerns for scalable backend systems.

## The project complies with all the required features:

- Gather data from an External Service. ✅
- Store the data in a SQL Server. ✅
- Store the data temporaly in memory using Redis for better performance. ✅
- Implement a Layered solution to return/modify the data on specific endpoints. ✅
- Implement Unit testing for Infrastructure, Proxies, Domain and Application layers.✅
- Implement Integration testing for the API. ✅
- Implemented a Health-Check Controller to ease the use of Docker containers. ✅
- Implement a Exception Handle middleware. ✅
- Implemented API Validators with FluentValidation ✅

### Possible future upgrades

Due to the limited timeframe given to design and develop this project, there are some functionalities not implemented that I think are relevant enought to be mentioned:

- miau

# Domain-Driven Design 

This project is structured according to Domain-Driven Design (DDD) principles.
The goal is to isolate business logic from infrastructure concerns, allowing the domain to evolve independently of frameworks and databases. 

| Layer               | Responsibility                                                               |
| ------------------- | ---------------------------------------------------------------------------- |
| **API**          | REST endpoints that expose the application to clients. |
| **Application**     | Services and orchestration of domain operations. |
|  **Domain**| Core business logic and domain entities. |
| **Infrastructure**  | Database access, repositories, and proxies. |
| **Cross Cutting**  | A transversal layer with helper methods and utils. |


To follow this architecture I've divided the data handling as:
- **Datamodels** for the Infrastructure layer
- **Domain Entities** for the Domain and Application layers
- **Dtos** for the API layer





## 📁 Project Structure

![Image](https://github.com/user-attachments/assets/21757140-91b3-4b2d-ba40-24e1b0f132cf)

| Path | Description |
|------|--------------|
| `VExam.Api/` | 🌐 API controllers, Validators and startup configuration |
| **Application** | 📁 Solution Folder |
| `VExam.Application.Services/` | ⚙️ Application services |
| `VExam.Application.Dtos/` | ⚙️ Request/Response DTOs |
| `VExam.Application.Mappers/` | ⚙️ Mappers |
| **Domain** | 📁 Solution Folder |
| `VExam.Domain.Entities/` | 🧠 Domain Entities |
| `VExam.Domain.Contracts/` | 🧠 Domain Interfaces |
| `VExam.Domain.RepositoryContracts/` | 🧠 Infrastructure repository interfaces |
| `VExam.Domain.Services/` | 🧠 Domain Services, core domain logic |
| **Infrastructure** | 📁 Solution Folder |
| `VExam.Infrastructure.Context/` | 🗄️ EF Core context and CodeFirst Configurations |
| `VExam.Infrastructure.Datamodels/` | 🗄️ Datamodels |
| `VExam.Infrastructure.Bases/` | 🗄️ Base classes to use in Infrastructure |
| `VExam.Infrastructure.Repositories/` | 🗄️ Repositories and Dependency Injection |
| `VExam.Infrastructure.Proxies/` | 🗄️ External Services implementation |
| **CrossCutting** | 📁 Solution Folder|
| `VExam.CrossCutting/` | ⚔️ EF Core context, repositories, configurations |
| **Testing** | 📁 Solution Folder|
| `VExam.Infrastrucutre.Repositories.Unit.Tests/` | 🧪 Repositories Unit Testing |
| `VExam.Infrastrucutre.Repositories.Integration.Tests/` | 🧪 Repositories Integration Testing |
| `VExam.Infrastrucutre.Proxies.Integration.Tests/` | 🧪 Proxies Integration Testing |
| `VExam.DomainUnit.Tests/` | 🧪 Domain Unit Testing |
| `VExam.Application.Unit.Tests/` | 🧪 Application Unit Testing |
| `VExam.Infrastrucutre.Api.Integration.Tests/` | 🧪 Api Integration Testing |
| **Other Files** |  |
| `VExam.sln` | 🧩 Solution file |
| `docker-compose.yml` | 🐳 Docker configuration |
| `README.md` | 📝 Project documentation |
| `Postman Collection` | 🔍 Postman Collection |


# Stack

| Layer                | Technology                    |
| -------------------- | ----------------------------- |
| **Language**         | C# (.NET 8)         |
| **Persistence**      | Entity Framework Core         |
| **Database**         | SQL Server (Docker container) |
| **InMemory Database**| Redis (Docker container) |
| **Containerization** | Docker & Docker Compose       |
| **Logging**          | Serilog      |
| **Testing**          | MSTest and NSubstitute      |


# 🚀 Getting Started

To use the application we will need to install some required softwares and follow some easy steps. 

## 1️⃣ **Prerequisites**

We must have 
**[Docker Desktop](https://www.docker.com/)** installed and running to use the application easily. We will also need **[.NET SDK 8.0+](https://dotnet.microsoft.com/download)**.


## 2️⃣ Run services with Docker
🧱 Build and Start
```
docker compose up --build
```

**This command will:**

- _Start a SQL Server container_

- _Start a Redis container_

**🔍 Check Running Containers**
```
docker ps
```

You should see SQL and Redis running, you can check that the connection has been made after running the Application on the HealthCheck Controller UI endpoint.
___

**Run the application on Https** _(If you prefer to start the application inside Doker, you must change the ConnectionString!)_

## 🔥API Reference
**🧭 Application Health Check UI Endpoint**

Once running:
```
http://localhost:7115/health-ui
```


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
Using  **Serilog**.

**Benefits:**
- Simplifies debugging and auditing.  
- Helps track performance and identify bottlenecks.  
- Improves observability during development and production.

---

## 🧭 SOLID Principles

The project follows **SOLID** principles to maintain clean architecture and high code quality:

| Principle | Description |
|------------|--------------|
| **S – Single Responsibility Principle** | Each class has only one responsibility |
| **O – Open/Closed Principle** | Classes are open for extension but closed for modification. |
| **L – Liskov Substitution Principle** | Subclasses can replace their base classes without altering correctness. |
| **I – Interface Segregation Principle** | Interfaces are small and specific, avoiding unnecessary dependencies. |
| **D – Dependency Inversion Principle** | High-level modules depend on abstractions, not concrete implementations. |

---

## 📚 References

- [Domain-Driven Design – Eric Evans](https://www.domainlanguage.com/ddd/)
- [Implementing DDD – Vaughn Vernon](https://dddcommunity.org/)
- [Microsoft Docs – EF Core](https://learn.microsoft.com/en-us/ef/core/)
- [Clean Architecture – Robert C. Martin](https://blog.cleancoder.com/)
- [Clean Code Book - Robert C. Martin](https://www.amazon.es/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Redis Docs](https://redis.io/docs/latest/)





### ✅ Summary

By combining these patterns and principles, the project achieves:
- **High cohesion** and **low coupling**.  
- **Transactional consistency** with `UnitOfWork`.  
- **Reusable and testable** service and operation logic.  
- **Clean separation** between domain, application, and infrastructure layers.  
- **Maintainable and scalable** architecture aligned with industry best practices.
