using System.Collections.Generic;
using System.Linq;

namespace Alphabet.TEST.Models
{
    public enum LetterType
    {
        Letter,
        Syllable,
        Separator
    } 

    public class Letter
    {
        public LetterType Type { get; set; } //letter or syllable
        public string Origin { get; set; }
        public List<Svg> Vectors { get; set; }
    }
}