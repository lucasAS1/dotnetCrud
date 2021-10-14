using System;

namespace Crud.Models
{
    public class Note
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
    }
}