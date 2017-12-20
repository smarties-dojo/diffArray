using System;
using System.Collections.Generic;
using Xunit;
using Implementation;
using FluentAssertions;

namespace tests
{
    public class GetExclusiveElementsOfFirstArrayTests
    {    
        public static IEnumerable<Object[]> GetTestData() {
            yield return new Object[] { new Object[]{}, new Object[]{}, new Object[]{} };
            yield return new Object[] { new Object[]{1,2,3}, new Object[]{1,2,3}, new Object[]{} };
            yield return new Object[] { new Object[]{1,2,3,4}, new Object[]{1,2,3}, new Object[]{4} };
            yield return new Object[] { new Object[]{1,2,3}, new Object[]{1,2,3,4}, new Object[]{} };
            yield return new Object[] { new Object[]{1,2,3,4}, new Object[]{1,2,3,5}, new Object[]{4} };
        }
    
        [Theory]
        [MemberData(nameof(GetTestData))]
        public void Should_return_array_with_exclusive_elements_of_first_array(Object[] a1, Object[] a2, Object[] expected)
        {
            var result = Program.GetExclusivElementsOfFirstArray(a1, a2);
            result.Should().BeEquivalentTo(expected);
        }
    }
}