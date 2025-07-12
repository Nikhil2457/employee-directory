// Initial employee data - simulating Freemarker data injection
const initialEmployees = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", department: "HR", role: "Manager" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", department: "IT", role: "Developer" },
    { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice.johnson@example.com", department: "Finance", role: "Analyst" },
    { id: 4, firstName: "Bob", lastName: "Brown", email: "bob.brown@example.com", department: "IT", role: "Support" },
    { id: 5, firstName: "Carol", lastName: "Davis", email: "carol.davis@example.com", department: "Marketing", role: "Coordinator" },
    { id: 6, firstName: "David", lastName: "Wilson", email: "david.wilson@example.com", department: "Sales", role: "Representative" },
    { id: 7, firstName: "Eva", lastName: "Miller", email: "eva.miller@example.com", department: "HR", role: "Specialist" },
    { id: 8, firstName: "Frank", lastName: "Garcia", email: "frank.garcia@example.com", department: "IT", role: "Architect" },
    { id: 9, firstName: "Grace", lastName: "Martinez", email: "grace.martinez@example.com", department: "Finance", role: "Manager" },
    { id: 10, firstName: "Henry", lastName: "Anderson", email: "henry.anderson@example.com", department: "Marketing", role: "Manager" },
    { id: 11, firstName: "Ivy", lastName: "Taylor", email: "ivy.taylor@example.com", department: "Sales", role: "Manager" },
    { id: 12, firstName: "Jack", lastName: "Thomas", email: "jack.thomas@example.com", department: "IT", role: "QA Engineer" }
];

// Load employees from localStorage or use initial data
let mockEmployees = JSON.parse(localStorage.getItem('employees')) || initialEmployees;

// Function to save employees to localStorage
function saveEmployees() {
    localStorage.setItem('employees', JSON.stringify(mockEmployees));
}

// Function to reset employees to initial state
function resetEmployees() {
    mockEmployees = [...initialEmployees];
    saveEmployees();
    return mockEmployees;
} 