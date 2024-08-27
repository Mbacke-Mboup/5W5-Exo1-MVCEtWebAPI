using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Models;
using MVCEtWebAPI.Data;
using WebAPI.Dtos;

namespace WebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TestDataController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TestDataController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpPost]
        [Authorize]
        public async Task<ActionResult> CreateData(CreateTestDataDTO createData)
        {
            TestData t = new TestData();
            t.Name = createData.Name;
            await _context.TestDatas.AddAsync(t);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
