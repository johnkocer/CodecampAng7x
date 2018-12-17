using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using SmartIT.Employee.MockDB;

namespace EmployeeWebApi.Controllers
{
    [EnableCors("AllowAllHeaders")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeRepository _employeeService;

        public EmployeeController()
        {
            _employeeService = new EmployeeRepository();
        }

        //[Route("~/api/Get")]
        //[Route("~/api/GetAllEmployees")]
        //[Route("~/api/GetEmployees")]
        [HttpGet]
        public async Task<ICollection<Employee>> Get()
        {
            return await _employeeService.GetAllAsync();
        }

        //[Route("~/api/Get/{id}")]
        //[Route("~/api/GetEmployee/{id}")]
        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            return  _employeeService.FindbyId(id);
        }

        //[Route("~/api/GetEmployeeByName/{name}")]
        [HttpGet("{name}")]

        public ICollection<Employee> GetEmployeeByName(string name)
        {
            return _employeeService.FindbyName(name);
        }

        //[Route("~/api/AddEmployee")]
        [HttpPost]
        public async Task<Employee> Post([FromBody]Employee item)
        {
            return await _employeeService.AddAsync(item);
        }

        //[Route("~/api/UpdateEmployee/{id}")]
        //[Route("~/api/UpdateEmployee")]
        [HttpPut("{id}")]
        public async Task<Employee> Put([FromBody]Employee item)
        {
            return await _employeeService.UpdateAsync(item);
        }

        //[Route("~/api/DeleteEmployee/{id}")]
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            var findEmployee = _employeeService.FindbyId(id);
            if (findEmployee != null)
                await _employeeService.DeleteAsync(findEmployee);
        }
    }
}