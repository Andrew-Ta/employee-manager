// productionUrl = 'https://employee-manager-dashboard.herokuapp.com'
// developmentUrl = 'http://localhost:5000/

const api = {
    // getAllDepartments: 'http://localhost:5000/api/departments/',
    getAllDepartments: 'https://employee-manager-dmit.herokuapp.com/api/departments/',
    // Snippet #5
    // updateEmployee: `http://localhost:5000/api/departments/employee/update`,
    updateEmployee: `https://employee-manager-dmit.herokuapp.com/api/departments/employee/update`,
    getDepartment: (name)=>{
        // return `http://localhost:5000/api/departments/name/${name}`
        return `https://employee-manager-dmit.herokuapp.com/api/departments/name/${name}`
    },
    deleteEmployee: (id)=>{
        // return `http://localhost:5000/api/departments/employee/id/${id}` 
        return `https://employee-manager-dmit.herokuapp.com/api/departments/employee/id/${id}` 
    }
}
//https://employee-manager-dmit.herokuapp.com/
export default api