using Microsoft.AspNetCore.Mvc;
using PenaltyCalculation.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PenaltyCalculation.Controllers
{
    static class Helper
    {
        //method for getting the business days between two dates.
        public static int GetWorkingDays(DateTime from, DateTime to)
        {
            var totalDays = 0;
            for (var date = from; date < to.AddDays(1); date = date.AddDays(1))
            {
                if (date.DayOfWeek != DayOfWeek.Saturday
                    && date.DayOfWeek != DayOfWeek.Sunday)
                    totalDays++;
            }

            return totalDays;
        }
    }
    //constant values
    static class Constants
    {
        public const int EXPIRE_DAY_COUNT = 10;
        public const int PENALTY_PER_DAY = 5;
    }
    [Route("api/[controller]")]
    [ApiController]
    public class PenaltyCalculationController : ControllerBase
    {
        private readonly DataContext _context;

        public PenaltyCalculationController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult> Get([FromQuery] int? id, [FromQuery] string checkOutDate, [FromQuery] string returnDate)
        {
            try
            {
                //if there is a problem with parameters return bad request
                if (id == null || checkOutDate == null || returnDate == null)
                {
                    return BadRequest();
                }

                //parse date strings and calculate difference between two dates.
                DateTime checkOutDateParsed = DateTime.Parse(checkOutDate);
                DateTime returnDateParsed = DateTime.Parse(returnDate);
                int daysDiff = Helper.GetWorkingDays(checkOutDateParsed, returnDateParsed);

                var country = await _context.Country.FindAsync(id);
                if (country != null)
                {
                    var penalty = 0;
                    if (daysDiff > Constants.EXPIRE_DAY_COUNT)
                    {
                        penalty = (daysDiff - Constants.EXPIRE_DAY_COUNT) * Constants.PENALTY_PER_DAY;
                    }
                    return Ok(new { penalty = penalty, countryName = country.CountryName, currency = country.Currency });
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }



    }

}
