using System;
using System.Collections.Generic;
using Xunit;
using Implementation;
using FluentAssertions;

namespace tests
{
    

    public class DiffArrayTests
    {    
        public static IEnumerable<Object[]> GetTestData() {
            yield return new Object[] { new Object[]{}, new Object[]{}, new Object[]{} };
            yield return new Object[] { new Object[]{1,2,3}, new Object[]{1,2,3}, new Object[]{} };
            yield return new Object[] { new Object[]{1,2,3,4}, new Object[]{1,2,3}, new Object[]{4} };
        }
    
        [Theory]
        [MemberData(nameof(GetTestData))]
        public void Should_return_empty_array(Object[] a1, Object[] a2, Object[] expected)
        {
            var result = Program.diffArray(a1, a2);
            result.Should().BeEquivalentTo(expected);
        }
    }
}
