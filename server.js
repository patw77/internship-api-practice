const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Swagger configuration
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Practice API",
      version: "1.0.0",
      description: "Internship practice API documentation"
    },
    components: {
      schemas: {
        Employee: {
          type: "object",
          properties: {
            id: { type: "string", example: "1" },
            name: { type: "string", example: "Alice" },
            department: { type: "string", example: "HR" }
          },
          required: ["id", "name", "department"]
        }
      }
    }
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

// Routes
const employeesRoutes = require('./routes/employeesRoutes');
app.use('/api/employees', employeesRoutes);

// Swagger route
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Root route
app.get('/', (req, res) => res.send('API is running'));

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});