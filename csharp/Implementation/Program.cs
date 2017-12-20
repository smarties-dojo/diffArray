using System;
using System.Collections.Generic;
using System.Linq;

namespace Implementation
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }

        public static Object[] diffArray(Object[] a1, Object[] a2)
        {
            return a1.Except(a2).Union(a2.Except(a1)).ToArray();  
            
            
            // var r1 = GetExclusivElementsOfFirstArray(a1, a2);
            // var r2 = GetExclusivElementsOfFirstArray(a2, a1);

            // return concat(r1, r2);
        }

        public static Array GetExclusivElementsOfFirstArray(Array a1, Array a2)
        {
            List<object> result = new List<object>();

            foreach (var x in a1)
            {
                if (!contains(a2, x))
                {
                    result.Add(x);
                }
            }

            return result.ToArray();
        }

        private static bool contains(Array a, object item)
        {
            foreach (var x in a)
            {
                if (x.Equals(item))
                {
                    return true;
                }
            }

            return false;
        }

        private static Array concat(Array a1, Array a2) {
            List<object> result = new List<object>();            
            foreach (var x in a1)
            {
                result.Add(x);
            }
            foreach (var x in a2)
            {
                result.Add(x);
            }
            return result.ToArray();
        }
    }
}
