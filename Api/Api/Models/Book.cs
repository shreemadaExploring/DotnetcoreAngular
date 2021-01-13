using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "NVARCHAR(300)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "NVARCHAR(200)")]
        public string Author { get; set; }

        [Required]
        [Column(TypeName = "NVARCHAR(10)")]
        public BookAvailability BookAvailability { get; set; }
    }

    public enum BookAvailability
    {
        Available, Rented
    }
}
