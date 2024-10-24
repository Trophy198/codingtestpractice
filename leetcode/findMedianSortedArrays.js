var findMedianSortedArrays = function(nums1, nums2) {
    let array = [...nums1, ...nums2].sort((a, b) => a - b);

    if (array.length % 2 === 0) {
        let ceil = array[Math.ceil(array.length / 2) - 1];
        let floor = array[array.length / 2];

        return Number(((ceil + floor) / 2).toFixed(5));
    }

    return Number(array[Math.round(array.length / 2) - 1].toFixed(5));

};


console.log(findMedianSortedArrays([1,2,3,4,5],[6,7,8,9,10,11,12,13,14,15,16,17]));


/**
 * median of two sorted arrays
 * given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays
 * the overall run time complexity should be 0(log (m+n))
 * ex)
 * input: nums1 = [1,3], nums2 = [2]
 * output 2.00000
 * explanation: merged array = [1,2,3] and median is 2
 * 
 * 
 * ex2)
 * input nums1 = [1,2], nums2 = [3,4]
 * output 2.50000
 * explanation merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5
 * 
 * 
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 */