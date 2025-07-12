# Employee Directory Web Interface

## Overview
A responsive web application to manage an employee directory using HTML, CSS, JavaScript, and simulated Freemarker templates. This project demonstrates a complete CRUD (Create, Read, Update, Delete) interface with advanced features including search, filter, sort, and pagination functionalities.

## Project Structure
```
employee-directory/
├── src/
│   ├── main/
│   │   ├── resources/
│   │   │   ├── static/
│   │   │   │   ├── css/
│   │   │   │   │   └── style.css
│   │   │   │   ├── js/
│   │   │   │   │   ├── data.js
│   │   │   │   │   └── app.js
│   │   │   ├── templates/
│   │   │   │   ├── dashboard.html
│   │   │   │   └── add-edit-form.html
├── README.md
```

## Setup and Run Instructions

### Prerequisites
- Visual Studio Code (or any modern code editor)
- Live Server Extension for VS Code
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation Steps
1. **Clone or download this repository**
2. **Open the project in VS Code**
   - Go to File > Open Folder
   - Select the `employee-directory` folder
3. **Install Live Server Extension**
   - Open Extensions view (Ctrl+Shift+X)
   - Search for "Live Server" by Ritwick Dey
   - Click Install
4. **Run the application**
   - Right-click on `src/main/resources/templates/dashboard.html`
   - Select "Open with Live Server"
   - The application will open in your default browser at `http://127.0.0.1:5500`

## Features

### 🏠 Dashboard
- **Employee Grid Display**: Responsive card-based layout showing employee information
- **Real-time Search**: Search by first name, last name, or email
- **Advanced Filtering**: Filter by department and role with popup interface
- **Sorting**: Sort by first name, last name, department, or role
- **Pagination**: Display 10, 25, 50, or 100 employees per page
- **CRUD Operations**: Edit and delete employees directly from the dashboard

### 📝 Add/Edit Form
- **Form Validation**: Client-side validation with real-time error messages
- **Pre-filled Editing**: Automatically populates form when editing existing employees
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Success Messages**: User feedback for successful operations

### 🎨 User Interface
- **Modern Design**: Clean, professional interface with gradient backgrounds
- **Responsive Layout**: Adapts to different screen sizes (desktop, tablet, mobile)
- **Interactive Elements**: Hover effects, smooth transitions, and animations
- **Accessibility**: Semantic HTML with proper labels and ARIA attributes

### 🔍 Search & Filter
- **Instant Search**: Real-time filtering as you type
- **Multi-field Search**: Search across name and email fields
- **Department Filter**: Filter by specific departments (HR, IT, Finance, Marketing, Sales)
- **Role Filter**: Filter by job role with partial matching
- **Combined Filters**: Use search, filter, and sort together

### 📊 Data Management
- **Mock Data**: 12 sample employees across different departments
- **Persistent State**: Data persists during the session (resets on page refresh)
- **Unique IDs**: Automatic ID generation for new employees
- **Data Validation**: Comprehensive form validation with user feedback

## Technical Implementation

### Frontend Technologies
- **HTML5**: Semantic markup with proper structure
- **CSS3**: Modern styling with Flexbox, Grid, and responsive design
- **Vanilla JavaScript**: No frameworks, pure ES6+ JavaScript
- **Local Storage Simulation**: Mock data management

### Key JavaScript Features
- **Event Delegation**: Efficient event handling for dynamic content
- **State Management**: Global variables for pagination and filtering state
- **Form Validation**: Comprehensive client-side validation
- **URL Parameters**: Edit functionality using query parameters
- **Error Handling**: Graceful error handling and user feedback

### CSS Features
- **CSS Grid**: Responsive employee card layout
- **Flexbox**: Flexible control layouts and pagination
- **CSS Variables**: Consistent color scheme and spacing
- **Media Queries**: Mobile-first responsive design
- **Animations**: Smooth transitions and hover effects

## Usage Guide

### Adding a New Employee
1. Click the "Add Employee" button on the dashboard
2. Fill out the form with employee details
3. Click "Save" to add the employee
4. You'll be redirected to the dashboard with a success message

### Editing an Employee
1. Click the "Edit" button on any employee card
2. The form will be pre-filled with current employee data
3. Make your changes
4. Click "Save" to update the employee

### Deleting an Employee
1. Click the "Delete" button on any employee card
2. Confirm the deletion in the popup dialog
3. The employee will be removed with a success message

### Searching and Filtering
1. **Search**: Type in the search box to filter by name or email
2. **Filter**: Click "Filter" to open the filter popup
3. **Sort**: Use the dropdown to sort by different fields
4. **Pagination**: Use the pagination controls to navigate through pages

## Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Performance Features
- **Efficient Rendering**: Only renders visible employees based on pagination
- **Debounced Search**: Optimized search performance
- **Event Delegation**: Minimal event listeners for dynamic content
- **CSS Optimizations**: Hardware-accelerated animations

## Future Enhancements
- **Backend Integration**: Connect to a real database
- **User Authentication**: Login and role-based access
- **Advanced Filtering**: Date ranges, salary filters
- **Export Functionality**: CSV/PDF export
- **Bulk Operations**: Select multiple employees for bulk actions
- **Image Upload**: Employee photo upload functionality

## Troubleshooting

### Common Issues
1. **Live Server not working**: Ensure the extension is installed and try restarting VS Code
2. **Styles not loading**: Check that the CSS file path is correct
3. **JavaScript errors**: Open browser console (F12) to check for errors
4. **Responsive issues**: Test on different screen sizes using browser dev tools

### Debug Mode
- Open browser developer tools (F12)
- Check the Console tab for any JavaScript errors
- Use the Network tab to verify file loading
- Test responsive design using the Device toolbar

## Contributing
This is a demonstration project, but suggestions and improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
This project is for educational purposes and demonstration.

## Contact
For questions or support, please refer to the project documentation or create an issue in the repository.

---

**Note**: This application uses mock data that resets when the page is refreshed. In a production environment, this would be connected to a backend database for persistent data storage. 