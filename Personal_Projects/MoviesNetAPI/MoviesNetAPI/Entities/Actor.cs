using Microsoft.EntityFrameworkCore;
using MoviesNetAPI.DTOs;
using System.ComponentModel.DataAnnotations;

namespace MoviesNetAPI.Entities
{
    public class Actor : IId
    {
        public int Id { get; set; }
        [Required]
        [StringLength(150)]
        public required string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        [Unicode(false)]
        public string? Picture { get; set; }
    }
}
