using Wanderly.API.Models;

namespace Wanderly.API.DTOs
{
    public class UserPreferenceDto
    {
        public int Id { get; set; }
        public string UserId { get; set; } = null!;
        public double Radius { get; set; }

        public List<UserPreferenceCategoryDto> Categories { get; set; } = [];
    }
}
