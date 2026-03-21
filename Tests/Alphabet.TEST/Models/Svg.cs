using System.Collections.Generic;

namespace Alphabet.TEST.Models
{
    public class Svg
    {
        public string ViewBox { get; set; }
        public string Width { get; set; }
        public string Height { get; set; }
        public string Transform { get; set; }
        public SvgPath SvgPath { get; set; }


        public override string ToString()
        {
            var ret =
                $@"<svg xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' version='1.0' viewBox='{ViewBox}' width='{Width}' height='{Height}'><g transform='{Transform}'><path d='{SvgPath.Design}'style='{SvgPath.Style}' /></g></svg>";
            /*
<svg
   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
   version="1.0" ViewBox = "0 0 150 150" width="20" height="30" > 
  <g transform="translate(-185,-335)" >
    <path d="M 299.5369,418.48065 L 323.1619,411.98065 L 268.7869,357.23065 L 243.0369,360.35565 L 243.0369,482.35565 L 216.6619,457.23065 L 193.9119,464.60565 L 244.4119,513.10565 L 270.1619,510.23065 L 270.1619,389.10565 L 299.5369,418.48065 z" />
  </g>
</svg> 
             */
            return ret;
        }
    } 
}