using Wanderly.API.Models;

namespace Wanderly.API.DTOs
{
    public class UserPreferenceCreateDto
    {
        public string UserId { get; set; } = null!;
        public double Radius { get; set; }
        public List<UserPreferenceCategoryCreateDto> Categories { get; set; } = [];
    }
}
