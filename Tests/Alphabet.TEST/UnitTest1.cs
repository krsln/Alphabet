using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Alphabet.TEST.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Alphabet.TEST
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            string sentence = "Merhaba Dünya Türkiye ahmet Türk Törk Tanrı Türkü yaşatsın".ToLower();
            //test = "Seni^ lanet! olası. pislik,".ToLower();

            var cipher = Orkhon.Cipher(sentence);
            var back = Orkhon.Decipher(cipher.Final);

            //To see the result https://htmledit.squarefree.com/
            //TODO: harflerin svg karşılıkları
            // amaç: kullanılan alfabenin harflerinin birden fazla svg karşılıklarıyla şifrelenmiş metinler elde etmek
            // harflerden ziyade bazı hecelerin de karşılıkları olabilir.
            // bu oluşturulan alfabe ile geriye dönük asıl metine ulaşma
            // her harf/hecenin birden fazla karşılıklarıyla çözümü zorlaştırmak
            // 
        }
    }

    public static class HelperExtension
    {
        public static IEnumerable<T> GetRandomItems<T>(this IEnumerable<T> source, Int32 count)
        {
            return source.OrderBy(s => Guid.NewGuid()).Take(count);
        }

        public static Letter ToLetter(this string value, List<Letter> abc)
        {
            Letter result = null;

            var startIndex = value.IndexOf("path d='", StringComparison.Ordinal);
            var length = value.IndexOf("'style", StringComparison.Ordinal) - startIndex;
            if (startIndex > 0)
            {
                var d = value.Substring(startIndex, length).Replace("path d='", "");

                foreach (var letter in abc)
                {
                    if (letter.Vectors != null && letter.Vectors.Any(x => x.SvgPath.Design == d))
                    {
                        //result = letter.Vectors.Find(x => x.SvgPath.Design == d);
                        result = letter;
                    }
                }
            }

            return result;
        }
    }

    public static class StringHelpers
    {
        /// <summary>
        /// Split by empty space :P
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static List<String> Tokenizer(this String text)
        {
            return Regex.Replace(text, "\\p{P}+", "")
                .Split(' ').ToList();
        }

        public static string ToReverse(this string value)
        {
            var lst = value.ToList();
            lst.Reverse();
            return string.Join("", lst);
        }
    }

    public static class Orkhon
    {
        public static List<Letter> Alphabet() //Elifba
        {
            #region Designs

            var sep =
                "M 258.56815,410.24628 C 253.83548,410.24628 250.00565,414.07611 250.00565,418.80878 C 250.00565,423.54145 253.83548,427.40253 258.56815,427.40253 C 263.30082,427.40253 267.1619,423.54144 267.1619,418.80878 C 267.1619,414.07611 263.30082,410.24628 258.56815,410.24628 z M 258.4744,442.96503 C 253.74173,442.96503 249.9119,446.79486 249.9119,451.52753 C 249.9119,456.2602 253.74174,460.09003 258.4744,460.09003 C 263.20707,460.09003 267.06815,456.26019 267.06815,451.52753 C 267.06815,446.79486 263.20707,442.96503 258.4744,442.96503 z";

            var a_e = /*Okunuşu: a/e */
                "M 299.5369,418.48065 L 323.1619,411.98065 L 268.7869,357.23065 L 243.0369,360.35565 L 243.0369,482.35565 L 216.6619,457.23065 L 193.9119,464.60565 L 244.4119,513.10565 L 270.1619,510.23065 L 270.1619,389.10565 L 299.5369,418.48065 z";
            var i_I = /*Okunuşu: ı/i */
                "M 218.2869,515.04315 L 245.0369,515.04315 L 245.0369,387.04315 L 274.7869,417.04315 L 298.7869,410.04315 L 244.0369,355.29315 L 218.2869,358.54315 L 218.2869,515.04315 z";
            var o_u = /*Okunuşu: o/u */
                "M 210.5369,365.79315 L 233.2869,358.79315 L 306.5369,433.29315 L 306.5369,442.29315 L 235.0369,511.54315 L 212.5369,504.04315 L 280.5369,437.54315 L 210.5369,365.79315 z";
            var uu = /*Okunuşu: ö/ü */
                "M 210.4744,517.16815 L 210.4744,358.29315 L 236.2244,354.91815 L 279.5994,399.54315 L 279.5994,353.04315 L 306.5994,353.04315 L 306.5994,456.04315 L 237.7244,388.04315 L 237.7244,517.29315 L 210.4744,517.16815 z";

            var bKalin = /*Okunuşu: ab */
                "M 257.81685,360.10464 C 257.81685,360.10464 246.50314,378.64196 246.50314,398.64196 C 246.50314,436.1471 281.50492,454.89573 281.50492,470.4133 C 281.50492,480.1647 270.64628,488.79808 260.64527,488.79808 C 246.23553,488.79808 240.16062,467.00277 240.16062,467.00277 L 215.03689,473.94884 C 215.03689,473.94884 225.54992,515.66814 260.99883,515.66814 C 289.78708,515.66814 308.72854,487.41399 308.72854,470.4133 C 308.72854,444.99293 273.3732,424.6409 273.3732,396.52064 C 273.3732,385.73147 281.15137,373.18612 281.15137,373.18612 L 257.81685,360.10464 z";
            var bInce = /*Okunuşu: eb */
                "M 258.89628,359.15253 L 209.74003,406.87128 L 244.74003,452.12128 L 200.36503,511.18378 L 228.11503,511.18378 L 258.89628,471.21503 L 288.58378,511.18378 L 316.70878,511.18378 L 272.49003,452.30878 L 307.33378,406.52753 L 258.89628,359.15253 z M 258.52128,387.96503 L 278.52128,407.05878 L 258.36503,433.55878 L 238.74003,407.74628 L 258.52128,387.96503 z";

            var ch = /*Okunuşu: ach */
                "M 247.6619,359.48065 L 273.5369,359.48065 L 273.5369,437.10565 L 323.6619,507.23065 L 297.7869,510.60565 L 260.0369,457.48065 L 218.1619,510.85565 L 193.4119,506.98065 L 247.7869,437.23065 L 247.6619,359.48065 z";

            var dKalin = /*Okunuşu: ad */
                "M 199.5369,362.16815 L 232.7869,396.54315 L 198.6619,434.16815 L 234.7869,471.54315 L 199.5369,508.16815 L 228.6619,508.16815 L 262.9119,472.04315 L 227.4119,434.16815 L 261.7869,396.54315 L 228.5369,362.16815 L 199.5369,362.16815 z M 255.0369,362.16815 L 288.2869,396.54315 L 254.1619,434.16815 L 290.2869,471.54315 L 255.0369,508.16815 L 284.1619,508.16815 L 318.4119,472.04315 L 282.9119,434.16815 L 317.2869,396.54315 L 284.0369,362.16815 L 255.0369,362.16815 z";
            var dInce = /*Okunuşu: ed */
                "M 201.60503,362.33512 L 183.35503,381.83512 L 239.10503,435.83512 L 185.75668,492.00186 L 204.31823,510.74019 L 258.58868,454.34842 L 315.15722,508.44209 L 333.71877,488.99665 L 277.15023,434.37266 L 331.06712,378.51122 L 311.97524,359.59611 L 258.05835,416.87176 L 201.60503,362.33512 z";

            var gKalin = /*Okunuşu: ag */
                "M 204.55253,360.12128 L 186.89628,367.71503 C 186.89628,367.71503 213.39628,378.85634 213.39628,401.84003 C 213.39628,425.53075 185.99003,438.77753 185.99003,438.77753 L 206.33378,446.02753 C 206.33378,446.02753 240.08378,429.58828 240.08378,401.65253 C 240.08378,372.83684 204.55253,360.12128 204.55253,360.12128 z M 312.55253,360.12128 C 312.55253,360.12128 276.99003,372.83684 276.99003,401.65253 C 276.99003,429.58829 310.77128,446.02753 310.77128,446.02753 L 331.08378,438.77753 C 331.08378,438.77753 303.70878,425.53075 303.70878,401.84003 C 303.70878,378.85634 330.20878,367.71503 330.20878,367.71503 L 312.55253,360.12128 z M 245.24003,432.24628 L 245.05253,510.21503 L 271.92753,510.21503 L 271.92753,432.24628 L 245.24003,432.24628 z";
            var gInce = /*Okunuşu: eg */
                "M 294.0369,409.46549 L 307.9119,395.84049 L 262.26545,357.99582 C 262.26545,357.99582 209.1619,388.44486 209.1619,446.59049 C 209.1619,488.16347 231.44223,512.34049 231.44223,512.34049 L 256.1619,508.34049 C 256.1619,508.34049 234.7869,482.77083 234.7869,447.59049 C 234.7869,437.33744 236.2869,430.96549 236.2869,430.96549 L 261.9119,452.34049 L 275.0369,437.71549 L 242.7869,410.59049 C 245.9119,402.46549 255.5369,388.59049 262.4119,382.96549 L 294.0369,409.46549 z";

            var kKalin = /*Okunuşu: ak */ //Q
                "M 279.7501,361.9826 L 305.73627,361.9826 L 305.73627,508.17693 L 279.57332,508.17693 L 279.57332,451.25483 L 244.92509,440.29468 L 237.85402,508.00015 L 211.33752,508.35371 L 219.64602,416.78338 L 279.57332,434.46105 L 279.7501,361.9826 z";
            var kInce = /*Okunuşu: ek */
                "M 259.68595,511.3589 L 286.73278,511.3589 L 286.73278,441.88566 L 313.24929,404.23222 L 238.76196,358.35239 L 228.9268,372.23564 L 283.90435,406.35355 L 268.70156,428.62741 L 213.37045,394.33273 L 203.82451,408.12131 L 259.68595,444.00698 L 259.68595,511.3589 z";

            var lKalin =
                "M 272.2244,354.66815 L 298.3494,354.66815 L 298.3494,511.66815 L 273.5994,515.66815 L 218.7244,460.54315 L 241.5994,453.79315 L 272.0994,484.04315 L 272.2244,354.66815 z";
            var lInce =
                "M 246.8494,511.54315 L 274.0994,511.54315 L 274.0994,414.66815 L 323.0994,363.91815 L 298.0994,359.54315 L 259.9744,399.66815 L 217.7244,358.79315 L 193.9744,364.04315 L 246.8494,414.79315 L 246.8494,511.54315 z";

            var m = /*Okunuşu: am */
                "M 200.63065,360.74628 L 185.25565,379.68378 L 232.9744,434.12128 L 187.56815,490.68378 L 203.63065,508.71503 L 249.44315,452.68378 L 266.75565,472.12128 L 250.13065,491.02753 L 266.2244,509.59003 L 331.81815,434.99628 L 263.56815,362.87128 L 249.06815,380.90253 L 263.56815,396.80878 L 248.7244,415.02753 L 200.63065,360.74628 z M 279.8494,415.21503 L 298.75565,435.18378 L 283.00565,453.37128 L 265.50565,433.59003 L 279.8494,415.21503 z";

            var nKalin = /*Okunuşu: an */
                "M 215.84533,360.33636 L 219.73442,386.49931 C 239.73442,380.99931 275.06552,397.74645 275.06552,434.75935 C 275.06552,471.0264 244.19152,487.46394 220.44152,484.96394 L 217.08277,510.41978 C 246.33277,517.16978 301.22848,492.9171 301.22848,435.11291 C 301.22848,377.50763 245.59533,352.08636 215.84533,360.33636 L 215.84533,360.33636 z";
            var nInce = /*Okunuşu: en */
                "M 184.90941,507.82337 L 208.95104,507.82337 L 215.315,447.89607 L 245.89737,458.85622 L 245.89737,508.70725 L 271.17644,508.70725 L 271.17644,419.78857 L 324.20945,436.93591 L 332.1644,362.51292 L 308.12277,362.51292 L 301.93558,412.89428 L 271.17644,402.81801 L 271.17644,361.62904 L 245.89737,361.62904 L 245.89737,441.88566 L 191.98048,424.9151 L 184.90941,507.82337 z";

            var rKalin = /*Okunuşu: ar */
                "M 277.05426,362.11518 L 301.09589,362.11518 L 301.09589,508.22112 L 276.96587,508.22112 L 276.96587,435.91945 L 224.28642,453.24357 L 215.97791,363.17584 L 240.10793,362.11518 L 246.20673,430.2626 L 277.14265,420.18632 L 277.05426,362.11518 z";
            var rInce = /*Okunuşu: er */
                "M 333.13667,403.56931 L 294.51096,358.66803 L 258.18334,400.82927 L 219.55764,359.72869 L 183.93713,403.74609 L 205.06194,408.78423 L 221.14862,389.42718 L 247.04641,417.09273 L 247.04641,511.66826 L 271.17643,511.66826 L 271.17643,415.94368 L 294.9529,388.5433 L 313.42606,408.961 L 333.13667,403.56931 z";

            var sKalin = /*Okunuşu: as */
                "M 246.4744,409.05387 L 289.5994,360.80387 L 309.5994,378.55387 L 265.3494,428.05387 C 265.3494,428.05387 289.5994,450.37024 289.5994,471.05387 C 289.5994,502.1746 243.8494,514.17887 243.8494,514.17887 L 234.4744,489.30387 C 234.4744,489.30387 262.7244,481.50909 262.7244,469.92887 C 262.7244,453.48769 207.4744,424.20688 207.4744,386.30387 C 207.4744,367.56471 227.12973,356.15742 227.12973,356.15742 L 243.5994,376.67887 C 243.5994,376.67887 235.4744,381.67887 235.4744,389.05387 C 235.4744,399.30387 246.4744,409.05387 246.4744,409.05387 L 246.4744,409.05387 z";
            var sInce = /*Okunuşu: es */
                "M 244.92509,361.9826 L 244.92509,508.3537 L 272.1487,508.3537 L 272.1487,362.33615 L 244.92509,361.9826 z";

            var tKalin = /*Okunuşu: at */
                "M 258.4119,356.29315 L 212.4119,401.04315 L 244.9119,401.04315 L 244.9119,418.79315 L 204.1619,459.79315 L 258.1619,514.04315 L 312.9119,459.54315 L 271.9119,418.54315 L 271.9119,400.79315 L 301.6619,400.79315 L 258.4119,356.29315 z M 257.9119,435.29315 L 282.6619,460.04315 L 257.9119,484.04315 L 232.9119,459.54315 L 257.9119,435.29315 z";
            var tInce = /*Okunuşu: et */
                "M 237.58886,362.11518 L 211.5143,362.11518 L 211.5143,508.22112 L 237.67725,508.22112 L 237.67725,451.29902 L 272.50226,440.16209 L 279.57332,508.22112 L 305.5595,507.16046 L 297.33938,416.20885 L 237.58886,434.32846 L 237.58886,362.11518 z";

            var yKalin = /*Okunuşu: ay */
                "M 207.45878,359.52753 L 207.61503,510.80878 L 240.49003,510.80878 C 254.28471,510.80878 309.61503,495.61209 309.61503,435.15253 C 309.61503,374.17349 252.25104,359.52753 240.58378,359.52753 L 207.45878,359.52753 z M 233.58378,385.77753 C 267.59516,385.77753 283.33378,411.27576 283.33378,435.02753 C 283.33378,461.30058 265.58378,484.52753 233.58378,484.52753 L 233.58378,385.77753 z";
            var yInce = /*Okunuşu: ey */
                "M 255.1619,357.91815 C 239.90371,357.91815 218.9119,369.91567 218.9119,393.91815 C 218.9119,420.91815 245.4119,439.91815 245.4119,439.91815 C 245.4119,439.91815 235.9119,458.41815 235.9119,475.16815 C 235.9119,494.66975 247.9119,512.41815 247.9119,512.41815 L 271.4119,499.41815 C 271.4119,499.41815 262.6619,487.41815 262.6619,473.41815 C 262.6619,450.16673 298.1619,422.66815 298.1619,401.16815 C 298.1619,391.90465 289.16417,357.91815 255.1619,357.91815 L 255.1619,357.91815 z M 255.9119,384.16815 C 265.5369,384.16815 271.4119,394.78982 271.4119,399.91815 C 271.4119,405.79448 261.1619,418.16815 261.1619,418.16815 C 261.1619,418.16815 245.0369,407.42366 245.0369,394.66815 C 245.0369,389.78588 249.5369,384.16815 255.9119,384.16815 z";

            var p = /*Okunuşu: ap */
                "M 273.29775,355.1767 L 298.04649,358.53546 L 298.04649,515.15961 L 272.06031,515.15961 L 272.06031,387.17328 L 242.36183,416.69499 L 219.02731,410.15425 L 273.29775,355.1767 z";
            var sh = /*Okunuşu: ash */ //ş
                "M 247.31158,415.36916 L 209.03942,415.36916 L 209.03942,435.43331 L 247.04641,435.43331 L 247.04641,511.35891 L 274.09325,511.3589 L 274.09325,435.43331 L 307.0621,435.43331 L 307.0621,415.28077 L 273.91647,415.28077 L 323.06039,363.83875 L 298.13488,359.41933 L 259.95112,399.72442 L 217.96665,358.97739 L 194.01341,363.92714 L 247.31158,415.36916 z";

            var z = /*Okunuşu: az */
                "M 213.1619,510.16815 L 213.1619,442.16815 L 242.9119,442.16815 L 242.9119,510.16815 L 267.4119,510.16815 L 267.4119,441.91815 L 328.9119,441.91815 L 328.1619,360.16815 L 303.9119,360.16815 L 303.9119,431.10565 L 267.0369,431.10565 L 267.0369,360.16815 L 243.0994,360.16815 L 243.0994,431.16815 L 188.9119,431.16815 L 188.9119,510.16815 L 213.1619,510.16815 z";

            //Syllables - çift sesliler
            var ik = /*Okunuşu: ık */ //ık k kı
                "M 324.7869,360.79315 L 192.2869,431.79315 L 324.7869,509.54315 L 324.7869,360.79315 z M 298.7869,404.54315 L 298.7869,463.79315 L 245.7869,432.79315 L 298.7869,404.54315 z";

            var ich = /*Okunuşu: iç */ //iç çi
                "M 247.1348,511.3589 L 274.35841,511.3589 L 274.35841,414.48527 L 323.32556,363.75036 L 298.40004,359.33094 L 274.35841,384.61001 L 274.35841,359.15416 L 247.1348,359.15416 L 247.1348,387.43844 L 217.78987,358.97739 L 193.74824,364.10391 L 247.1348,415.54593 L 247.1348,511.3589 z";

            var ok = /*Okunuşu: ok */ //ok uk
                "M 248.37224,361.45227 L 274.71197,361.45227 L 274.71197,464.51308 L 302.99624,464.51308 L 261.27694,508.88403 L 214.07756,464.51308 L 248.37224,464.51308 L 248.37224,361.45227 z";

            var uk = /*Okunuşu: ök */ //ök ük
                "M 211.9744,357.73065 L 211.9744,512.73065 L 238.0994,512.73065 L 238.0994,473.73065 L 278.9744,464.85565 L 278.9744,511.73065 L 305.0994,511.73065 L 305.0994,444.60565 L 238.27505,458.68522 L 237.9744,391.85565 L 279.0994,382.60565 L 279.0994,429.73065 L 305.0994,429.73065 L 305.0994,362.60565 L 238.0994,375.85565 L 238.0994,357.60565 L 211.9744,357.73065 z";

            var lt = /*Okunuşu: alt */ //ld lt
                "M 215.1619,511.10565 L 191.0369,511.10565 L 191.0369,361.23065 L 213.6619,359.23065 L 259.0369,405.35565 L 303.5369,359.35565 L 326.0369,361.23065 L 326.0369,511.10565 L 302.1619,511.10565 L 302.1619,388.85565 L 258.6619,433.10565 L 215.1619,387.98065 L 215.1619,511.10565 z";

            var nt = /*Okunuşu: ant */ //nd nt
                "M 298.39628,366.93377 L 284.61503,386.90252 C 284.61503,386.90252 300.70878,400.17834 300.70878,427.40252 C 300.70878,458.70447 279.30836,476.37127 258.27128,476.37127 C 237.82121,476.37127 216.55253,457.28189 216.55253,426.68377 C 216.55253,402.22379 231.39628,389.93377 231.39628,389.93377 L 214.95878,370.30877 C 214.95878,370.30877 192.52128,391.46152 192.52128,427.21502 C 192.52128,464.6823 219.91386,503.40252 258.27128,503.40252 C 300.70284,503.40253 324.55253,462.40345 324.55253,427.40252 C 324.55253,385.39582 298.39628,366.93377 298.39628,366.93377 z M 278.89628,412.18377 C 273.72128,412.18377 269.52128,416.38377 269.52128,421.55877 C 269.52128,426.73377 273.72128,430.93377 278.89628,430.93377 C 284.07128,430.93377 288.27128,426.73377 288.27128,421.55877 C 288.27128,416.38377 284.07128,412.18377 278.89628,412.18377 z M 238.77128,412.55877 C 233.59628,412.55877 229.39628,416.75877 229.39628,421.93377 C 229.39628,427.10877 233.59628,431.30877 238.77128,431.30877 C 243.94628,431.30877 248.14628,427.10877 248.14628,421.93377 C 248.14628,416.75877 243.94628,412.55877 238.77128,412.55877 z M 258.64628,442.93377 C 253.47128,442.93377 249.27128,447.13377 249.27128,452.30877 C 249.27128,457.48377 253.47128,461.68377 258.64628,461.68377 C 263.82128,461.68377 268.02128,457.48377 268.02128,452.30877 C 268.02128,447.13377 263.82128,442.93377 258.64628,442.93377 z";

            var nch = /*Okunuşu: anch */ //nç
                "M 228.4119,362.66815 L 257.2869,362.66815 L 289.2869,396.04315 L 254.4119,434.16815 L 290.7869,471.66815 L 256.2869,507.66815 L 227.2869,507.66815 L 261.9119,471.79315 L 226.2869,433.54315 L 260.7869,396.54315 L 228.4119,362.66815 z";

            var ng = /*Okunuşu: eng */
                "M 267.4744,362.60565 L 294.5994,362.60565 L 294.5994,507.73065 L 267.4744,507.73065 L 267.4744,432.85565 L 222.4744,409.48065 L 222.4744,386.48065 L 267.4744,409.85565 L 267.4744,362.60565 z";

            var ny = /*Okunuşu: any */
                "M 223.00565,356.81555 C 219.52735,356.85476 215.96386,357.0343 212.2869,357.3468 L 218.5369,369.3468 C 267.7869,366.5968 278.0369,398.59414 278.0369,410.3468 C 278.0369,412.8555 277.67417,415.70546 276.88065,418.7218 C 261.27995,409.4986 239.47607,404.03603 212.2869,406.3468 L 218.5369,418.3468 C 244.67171,416.8875 259.82044,425.20418 268.2869,435.0968 C 259.59117,445.38282 244.32853,453.70481 219.5369,452.5968 L 213.0369,464.0968 C 239.17686,466.10757 261.10841,460.95767 276.9744,451.8468 C 277.71154,454.75226 278.0369,457.34458 278.0369,459.3468 C 278.0369,474.8468 264.2869,503.5968 219.5369,501.5968 L 213.0369,513.0968 C 268.2869,517.3468 304.7869,489.60251 304.7869,460.0968 C 304.7869,451.89205 301.76551,443.37137 296.00565,435.56555 C 301.70074,428.04844 304.7869,419.64464 304.7869,411.0968 C 304.7869,385.29661 275.18018,356.22747 223.00565,356.81555 L 223.00565,356.81555 z";

            #endregion

            var sp = LetterType.Separator;
            var l = LetterType.Letter;
            var s = LetterType.Syllable;
            var alphabet = new List<Letter>
            {
                new Letter() {Origin = " ", Type = sp, Vectors = new List<Svg>() {ToSvg(sep, "25 40 100 100")}},
                new Letter() {Origin = ".", Type = sp, Vectors = new List<Svg>() {ToSvg(sep, "25 40 100 100")}},
                new Letter() {Origin = "a", Type = l, Vectors = new List<Svg>() {ToSvg(a_e)}},
                new Letter() {Origin = "e", Type = l, Vectors = new List<Svg>() {ToSvg(a_e)}},
                new Letter() {Origin = "ı", Type = l, Vectors = new List<Svg>() {ToSvg(i_I)}},
                new Letter() {Origin = "i", Type = l, Vectors = new List<Svg>() {ToSvg(i_I)}},
                new Letter() {Origin = "o", Type = l, Vectors = new List<Svg>() {ToSvg(o_u)}},
                new Letter() {Origin = "u", Type = l, Vectors = new List<Svg>() {ToSvg(o_u)}},
                new Letter() {Origin = "ö", Type = l, Vectors = new List<Svg>() {ToSvg(uu)}},
                new Letter() {Origin = "ü", Type = l, Vectors = new List<Svg>() {ToSvg(uu)}},
                //Consonant
                new Letter() {Origin = "b", Type = l, Vectors = new List<Svg>() {ToSvg(bKalin), ToSvg(bInce)}},
                new Letter() {Origin = "ç", Type = l, Vectors = new List<Svg>() {ToSvg(ch)}},
                new Letter() {Origin = "d", Type = l, Vectors = new List<Svg>() {ToSvg(dKalin), ToSvg(dInce)}},
                new Letter() {Origin = "g", Type = l, Vectors = new List<Svg>() {ToSvg(gKalin), ToSvg(gInce)}},
                new Letter() {Origin = "k", Type = l, Vectors = new List<Svg>() {ToSvg(kKalin), ToSvg(kInce)}},
                new Letter() {Origin = "l", Type = l, Vectors = new List<Svg>() {ToSvg(lKalin), ToSvg(lInce)}},
                new Letter() {Origin = "m", Type = l, Vectors = new List<Svg>() {ToSvg(m)}},
                new Letter() {Origin = "n", Type = l, Vectors = new List<Svg>() {ToSvg(nKalin), ToSvg(nInce)}},
                new Letter() {Origin = "p", Type = l, Vectors = new List<Svg>() {ToSvg(p)}},
                new Letter() {Origin = "r", Type = l, Vectors = new List<Svg>() {ToSvg(rKalin), ToSvg(rInce)}},
                new Letter() {Origin = "s", Type = l, Vectors = new List<Svg>() {ToSvg(sKalin), ToSvg(sInce)}},
                new Letter() {Origin = "ş", Type = l, Vectors = new List<Svg>() {ToSvg(sh)}},
                new Letter() {Origin = "t", Type = l, Vectors = new List<Svg>() {ToSvg(tKalin), ToSvg(tInce)}},
                new Letter() {Origin = "y", Type = l, Vectors = new List<Svg>() {ToSvg(yKalin), ToSvg(yInce)}},
                new Letter() {Origin = "z", Type = l, Vectors = new List<Svg>() {ToSvg(z)}},

                //TODO:not have letters
                //C F H Ğ J V eskiden yoktu sonradan diğer dillerden girdi
                new Letter() {Origin = "c", Type = l, Vectors = new List<Svg>() {ToSvg(ich)}}, //TODO: ?
                new Letter() {Origin = "f", Type = l, Vectors = new List<Svg>() {ToSvg(dInce)}}, //TODO: ?
                new Letter() {Origin = "ğ", Type = l, Vectors = new List<Svg>() {ToSvg(gKalin)}}, //TODO: ?
                new Letter() {Origin = "h", Type = l, Vectors = new List<Svg>() {ToSvg(ik)}}, //TODO: ?
                new Letter() {Origin = "j", Type = l, Vectors = new List<Svg>() { }}, //TODO: ?
                new Letter() {Origin = "q", Type = l, Vectors = new List<Svg>() {ToSvg(kKalin)}}, //TODO: ?
                new Letter() {Origin = "x", Type = l, Vectors = new List<Svg>() { }}, //TODO: ?
                new Letter() {Origin = "v", Type = l, Vectors = new List<Svg>() { }}, //TODO: ?
                new Letter() {Origin = "w", Type = l, Vectors = new List<Svg>() { }}, //TODO: ?

                //Syllable
                new Letter() {Origin = "ık", Type = s, Vectors = new List<Svg>() {ToSvg(ik)}},
                new Letter() {Origin = "ki", Type = s, Vectors = new List<Svg>() {ToSvg(ik)}},
                new Letter() {Origin = "iç", Type = s, Vectors = new List<Svg>() {ToSvg(ich)}},
                new Letter() {Origin = "çi", Type = s, Vectors = new List<Svg>() {ToSvg(ich)}},
                new Letter() {Origin = "ok", Type = s, Vectors = new List<Svg>() {ToSvg(ok)}},
                new Letter() {Origin = "uk", Type = s, Vectors = new List<Svg>() {ToSvg(ok)}},
                new Letter() {Origin = "ök", Type = s, Vectors = new List<Svg>() {ToSvg(uk)}},
                new Letter() {Origin = "ük", Type = s, Vectors = new List<Svg>() {ToSvg(uk)}},
                new Letter() {Origin = "ld", Type = s, Vectors = new List<Svg>() {ToSvg(lt)}},
                new Letter() {Origin = "lt", Type = s, Vectors = new List<Svg>() {ToSvg(lt)}},
                new Letter() {Origin = "nç", Type = s, Vectors = new List<Svg>() {ToSvg(nch)}},
                new Letter() {Origin = "nt", Type = s, Vectors = new List<Svg>() {ToSvg(nt)}},
                new Letter() {Origin = "nd", Type = s, Vectors = new List<Svg>() {ToSvg(nt)}},
                new Letter() {Origin = "ng", Type = s, Vectors = new List<Svg>() {ToSvg(ng)}},
                new Letter() {Origin = "ny", Type = s, Vectors = new List<Svg>() {ToSvg(ny)}}
            };

            return alphabet;
        }

        public static Svg ToSvg(string design, string viewBox = "0 0 150 150")
        {
            return new Svg()
            {
                ViewBox = viewBox,
                Width = "30",
                Height = "40",
                Transform = "translate(-183.0369,-334.66815)",
                SvgPath = new SvgPath()
                {
                    Style = "fill:#000000;stroke:#000000",
                    Design = design
                }
            };
        }

        public static (List<(string Word, List<Letter> Letters, List<Svg> Vectors)> Details, string Final) Cipher(
            string sentence)
        {
            var tokenizer = sentence.Tokenizer();
            var results = new List<(string Word, List<Letter> Letters, List<Svg> Vectors)>();
            foreach (var word in tokenizer)
            {
                var newList = new List<(string Value, int Start, int Length, Letter Letter)>();
                //Letters and Syllables
                for (var i = 0; i < word.Length; i++)
                {
                    var value = word[i].ToString();
                    if (Orkhon.Alphabet().Any(x => x.Origin.Equals(value)))
                    {
                        var letter = Orkhon.Alphabet().Find(x => x.Origin.Equals(value));
                        newList.Add((value, i, 1, letter));
                    }

                    if (i + 2 <= word.Length)
                    {
                        //if (!word.Substring(i, 2).Contains(" "))
                        //{
                        var value2 = word.Substring(i, 2);
                        if (Orkhon.Alphabet().Any(x => x.Origin.Equals(value2)))
                        {
                            var letter = Orkhon.Alphabet().Find(x => x.Origin.Equals(value2));
                            newList.Add((value2, i, 2, letter));
                        }
                        //}
                    }

                    if (i + 3 <= word.Length)
                    {
                        //if (!word.Substring(i, 3).Contains(" "))
                        //{
                        var value2 = word.Substring(i, 3);
                        if (Orkhon.Alphabet().Any(x => x.Origin.Equals(value2)))
                        {
                            var letter = Orkhon.Alphabet().Find(x => x.Origin.Equals(value2));
                            newList.Add((value2, i, 3, letter));
                        }
                        //}
                    }
                }

                var newList2 = newList.Where(x => x.Length == 1).ToList();
                foreach (var item in newList.Where(x => x.Length > 1))
                {
                    for (int i = item.Start; i < (item.Start + item.Length); i++)
                    {
                        var find = newList2.Find(x => x.Start == i);
                        newList2.Remove(find);
                    }

                    newList2.Add(item);
                }

                newList2 = newList2.OrderBy(x => x.Start).ToList();
                var letters = newList2.Select(x => x.Letter).ToList();
                var vectors = letters.Select(x => x.Vectors.GetRandomItems(x.Vectors.Count).First()).ToList();
                //var wordSvgs = string.Join("", vectors.Select(x => x.ToString()));

                results.Add((word, letters, vectors));
            }

            var sep = Orkhon.Alphabet().Find(x => x.Origin.Equals(".")).Vectors.First();
            var sentenceSvg = new List<Svg>();
            results.ForEach(x =>
            {
                sentenceSvg.AddRange(x.Vectors);
                sentenceSvg.Add(sep);
            });

            sentenceSvg.Reverse(); //if true

            var final = string.Join("", sentenceSvg.Select(x => x.ToString()));

            return (results, final);
        }

        public static (string Original, string Reverse) Decipher(string value)
        {
            List<Letter> abc = Orkhon.Alphabet();

            var pattern = new Regex(
                @"(<svg xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' version='1.0' viewBox='0 0 150 150' width='30' height='40'>[\s\S]+?<\/svg>)");
            var parts = pattern.Split(value).Where(l => l != string.Empty).ToArray();

            var result = new List<string>();
            foreach (var part in parts)
            {
                var letter = part.ToLetter(abc);
                result.Add(letter != null ? letter.Origin : part);
            }

            var orig = string.Join("", result); //enyüd
            result.Reverse();
            var reverse = string.Join("", result); //dünye

            return (orig, reverse);
        }
    }
}
