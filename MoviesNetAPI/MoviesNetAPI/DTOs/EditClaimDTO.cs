using System.ComponentModel.DataAnnotations;

namespace MoviesNetAPI.DTOs
{
    public class EditClaimDTO
    {
        [Required]
        [EmailAddress]
        public required string Email { get; set; }
    }
}
