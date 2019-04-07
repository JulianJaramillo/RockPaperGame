namespace RockPaperApp.API.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using RockPaperApp.API.Data;
    using RockPaperApp.API.Models;

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        public ValuesController(DataContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values = await _context.Games.ToListAsync();
            return Ok(values);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Game game)
        {
            if(ModelState.IsValid){
               _context.Games.Add(game);
               _context.SaveChanges();
            }
        }

    }
}
