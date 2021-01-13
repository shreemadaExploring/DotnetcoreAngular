using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options)
            : base(options)
        {
            // Database.SetInitializer<LibraryContext>(new CreateDatabaseIfNotExists<LibraryContext>());
        }

        public DbSet<Book> Books { get; set; }
    }
}
