using System.ComponentModel.DataAnnotations;

namespace WebAPI.Dtos
{
    public class LoginSuccessDTO
    {
        [Required]
        public string Token { get; set; } = "";
    }
}
