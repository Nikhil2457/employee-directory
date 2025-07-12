// Global variables for state management
let filteredEmployees = [...mockEmployees];
let currentPage = 1;
let itemsPerPage = 10;

// Utility function to show messages
function showMessage(message, type = 'success') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    const app = document.getElementById('app');
    app.insertBefore(messageDiv, app.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Function to render employees with pagination
function renderEmployees(employees) {
    const container = document.getElementById("employee-list-container");
    if (container) {
        container.innerHTML = "";
        
        if (employees.length === 0) {
            container.innerHTML = '<div class="no-employees">No employees found.</div>';
            updatePagination(employees);
            return;
        }
        
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedEmployees = employees.slice(start, end);
        
        paginatedEmployees.forEach(employee => {
            container.innerHTML += `
                <div class="employee-card" data-employee-id="${employee.id}">
                    <h3>${employee.firstName} ${employee.lastName}</h3>
                    <p><strong>ID:</strong> ${employee.id}</p>
                    <p><strong>Email:</strong> ${employee.email}</p>
                    <p><strong>Department:</strong> ${employee.department}</p>
                    <p><strong>Role:</strong> ${employee.role}</p>
                    <div class="card-actions">
                        <button class="edit-btn" data-id="${employee.id}">Edit</button>
                        <button class="delete-btn" data-id="${employee.id}">Delete</button>
                    </div>
                </div>
            `;
        });
        
        updatePagination(employees);
    }
}

// Function to update pagination controls
function updatePagination(employees) {
    const totalPages = Math.ceil(employees.length / itemsPerPage);
    const pageInfo = document.getElementById("page-info");
    const prevBtn = document.getElementById("prev-page");
    const nextBtn = document.getElementById("next-page");
    
    if (pageInfo) {
        pageInfo.textContent = `Page ${currentPage} of ${totalPages || 1}`;
    }
    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    }
}

// Function to apply search, filter, and sort
function applyFiltersAndSearch() {
    let employees = [...mockEmployees];
    const searchQuery = document.getElementById("search-input")?.value.toLowerCase() || "";
    const departmentFilter = document.getElementById("filter-department")?.value || "";
    const roleFilter = document.getElementById("filter-role")?.value.toLowerCase() || "";
    const sortBy = document.getElementById("sort-by")?.value || "";

    // Search functionality
    if (searchQuery) {
        employees = employees.filter(emp =>
            emp.firstName.toLowerCase().includes(searchQuery) ||
            emp.lastName.toLowerCase().includes(searchQuery) ||
            emp.email.toLowerCase().includes(searchQuery)
        );
    }

    // Filter functionality
    if (departmentFilter) {
        employees = employees.filter(emp => emp.department === departmentFilter);
    }
    if (roleFilter) {
        employees = employees.filter(emp => emp.role.toLowerCase().includes(roleFilter));
    }

    // Sort functionality
    if (sortBy) {
        employees.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    filteredEmployees = employees;
    currentPage = 1; // Reset to first page when filtering
    renderEmployees(filteredEmployees);
}

// Function to handle filter popup
function handleFilterPopup() {
    const filterBtn = document.getElementById("filter-btn");
    const filterPopup = document.getElementById("filter-popup");
    const applyFilterBtn = document.getElementById("apply-filter");
    const closeFilterBtn = document.getElementById("close-filter");

    if (filterBtn) {
        filterBtn.addEventListener("click", () => {
            filterPopup.style.display = "block";
        });
    }
    
    if (closeFilterBtn) {
        closeFilterBtn.addEventListener("click", () => {
            filterPopup.style.display = "none";
        });
    }
    
    if (applyFilterBtn) {
        applyFilterBtn.addEventListener("click", () => {
            applyFiltersAndSearch();
            filterPopup.style.display = "none";
        });
    }
    
    // Close popup when clicking outside
    if (filterPopup) {
        filterPopup.addEventListener("click", (e) => {
            if (e.target === filterPopup) {
                filterPopup.style.display = "none";
            }
        });
    }
}

// Function to handle search and sort
function handleSearchAndSort() {
    const searchInput = document.getElementById("search-input");
    const sortBy = document.getElementById("sort-by");
    
    if (searchInput) {
        searchInput.addEventListener("input", applyFiltersAndSearch);
    }
    if (sortBy) {
        sortBy.addEventListener("change", applyFiltersAndSearch);
    }
}

// Function to handle pagination
function handlePagination() {
    const prevPage = document.getElementById("prev-page");
    const nextPage = document.getElementById("next-page");
    const itemsPerPageSelect = document.getElementById("items-per-page");

    if (prevPage) {
        prevPage.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                renderEmployees(filteredEmployees);
            }
        });
    }
    
    if (nextPage) {
        nextPage.addEventListener("click", () => {
            const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderEmployees(filteredEmployees);
            }
        });
    }
    
    if (itemsPerPageSelect) {
        itemsPerPageSelect.addEventListener("change", (e) => {
            itemsPerPage = parseInt(e.target.value);
            currentPage = 1;
            renderEmployees(filteredEmployees);
        });
    }
}

// Function to handle edit button clicks
function handleEdit() {
    const container = document.getElementById("employee-list-container");
    if (container) {
        container.addEventListener("click", (e) => {
            if (e.target.classList.contains("edit-btn")) {
                const id = parseInt(e.target.dataset.id);
                window.location.href = `add-edit-form.html?editId=${id}`;
            }
        });
    }
}

// Function to handle delete button clicks
function handleDelete() {
    const container = document.getElementById("employee-list-container");
    if (container) {
        container.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) {
                const id = parseInt(e.target.dataset.id);
                const employee = mockEmployees.find(emp => emp.id === id);
                
                if (confirm(`Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`)) {
                    const index = mockEmployees.findIndex(emp => emp.id === id);
                    mockEmployees.splice(index, 1);
                    saveEmployees(); // Save to localStorage
                    showMessage(`Employee ${employee.firstName} ${employee.lastName} deleted successfully.`);
                    applyFiltersAndSearch();
                }
            }
        });
    }
}

// Form validation function
function validateForm(firstName, lastName, email, department, role) {
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll(".error").forEach(error => {
        error.style.display = "none";
        error.textContent = "";
    });

    // First Name validation
    if (!firstName.trim()) {
        document.getElementById("firstName-error").textContent = "First Name is required";
        document.getElementById("firstName-error").style.display = "block";
        isValid = false;
    } else if (firstName.trim().length < 2) {
        document.getElementById("firstName-error").textContent = "First Name must be at least 2 characters";
        document.getElementById("firstName-error").style.display = "block";
        isValid = false;
    }

    // Last Name validation
    if (!lastName.trim()) {
        document.getElementById("lastName-error").textContent = "Last Name is required";
        document.getElementById("lastName-error").style.display = "block";
        isValid = false;
    } else if (lastName.trim().length < 2) {
        document.getElementById("lastName-error").textContent = "Last Name must be at least 2 characters";
        document.getElementById("lastName-error").style.display = "block";
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
        document.getElementById("email-error").textContent = "Email is required";
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent = "Please enter a valid email address";
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    }

    // Department validation
    if (!department) {
        document.getElementById("department-error").textContent = "Department is required";
        document.getElementById("department-error").style.display = "block";
        isValid = false;
    }

    // Role validation
    if (!role.trim()) {
        document.getElementById("role-error").textContent = "Role is required";
        document.getElementById("role-error").style.display = "block";
        isValid = false;
    } else if (role.trim().length < 2) {
        document.getElementById("role-error").textContent = "Role must be at least 2 characters";
        document.getElementById("role-error").style.display = "block";
        isValid = false;
    }

    return isValid;
}

// Function to handle form submission
function handleFormSubmission() {
    const form = document.getElementById("employee-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const employeeId = document.getElementById("employeeId").value;
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const department = document.getElementById("department").value;
            const role = document.getElementById("role").value.trim();

            if (validateForm(firstName, lastName, email, department, role)) {
                if (employeeId) {
                    // Edit existing employee
                    const employee = mockEmployees.find(emp => emp.id === parseInt(employeeId));
                    if (employee) {
                        employee.firstName = firstName;
                        employee.lastName = lastName;
                        employee.email = email;
                        employee.department = department;
                        employee.role = role;
                        saveEmployees(); // Save to localStorage
                        showMessage(`Employee ${firstName} ${lastName} updated successfully.`);
                    }
                } else {
                    // Add new employee
                    const newId = mockEmployees.length > 0 ? Math.max(...mockEmployees.map(emp => emp.id)) + 1 : 1;
                    const newEmployee = {
                        id: newId,
                        firstName,
                        lastName,
                        email,
                        department,
                        role
                    };
                    mockEmployees.push(newEmployee);
                    saveEmployees(); // Save to localStorage
                    showMessage(`Employee ${firstName} ${lastName} added successfully.`);
                }
                
                // Redirect to dashboard after a short delay
                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 1000);
            }
        });
    }
}

// Function to pre-fill form for editing
function prefillForm() {
    const urlParams = new URLSearchParams(window.location.search);
    const editId = urlParams.get("editId");
    
    if (editId) {
        const employee = mockEmployees.find(emp => emp.id === parseInt(editId));
        if (employee) {
            document.getElementById("employeeId").value = employee.id;
            document.getElementById("firstName").value = employee.firstName;
            document.getElementById("lastName").value = employee.lastName;
            document.getElementById("email").value = employee.email;
            document.getElementById("department").value = employee.department;
            document.getElementById("role").value = employee.role;
        }
    }
}

// Function to handle cancel button
function handleCancel() {
    const cancelBtn = document.getElementById("cancel-btn");
    if (cancelBtn) {
        cancelBtn.addEventListener("click", () => {
            window.location.href = "dashboard.html";
        });
    }
}

// Function to reset data to initial state
function resetToInitialData() {
    if (confirm("Are you sure you want to reset all data to the initial state? This will remove all added/edited employees.")) {
        mockEmployees = resetEmployees();
        showMessage("Data reset to initial state successfully.");
        applyFiltersAndSearch();
    }
}

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    // Initialize dashboard functionality
    if (document.getElementById("employee-list-container")) {
        renderEmployees(mockEmployees);
        handleEdit();
        handleDelete();
        handleFilterPopup();
        handleSearchAndSort();
        handlePagination();
        applyFiltersAndSearch();
    }
    
    // Initialize form functionality
    if (document.getElementById("employee-form")) {
        handleFormSubmission();
        prefillForm();
        handleCancel();
    }
}); 