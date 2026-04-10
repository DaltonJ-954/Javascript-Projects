using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Wanderly.API.Services;

namespace Wanderly.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlacesController : ControllerBase
    {
        private readonly YelpService yelpService;

        public PlacesController(YelpService yelpService)
        {
            this.yelpService = yelpService;
        }

        [HttpGet("nearby")]
        public async Task<IActionResult> GetNearby(double latitude, double longitude)
        {
            try
            {
                var result = await yelpService.GetNearbyAsynce(latitude, longitude);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
