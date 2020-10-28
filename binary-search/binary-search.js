'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	// 1. if one element in the array, return element
	if (array.length === 1) {
		if (array[0] === target) {
			return true
		} else {
			return false
		}
	} else {
		// 2. search the array

		// declare a constant pointer: half of the length so that it's the middle of the array
		let searchIndex = Math.floor(array.length/2) // round up
		console.log('INITIAL SEARCHINDEX = ', array[searchIndex])


		while (array[searchIndex] !== array[0]|| array[searchIndex] !== array[array.length]) {
			// check if the search index
			if (array[searchIndex] === target) {
				return true
			} else if (array[searchIndex] > target){
				//going to the left
				searchIndex--
				console.log('TO LEFT SEARCHINDEX = ', array[searchIndex])
			} else {
				//searchIndex is less than the target, going to the right
				let half = Math.floor(searchIndex/2)
				searchIndex++
				console.log('TO RIGHT SEARCHINDEX = ', array[searchIndex])
			}
		}
	}
	// 3. else: if no target in the array, return false
	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch

// const binarySearch = (array, target) => {

// 	// 1. if one element in the array, return element
// 	if (array.length === 1) {
// 		if (array[0] === target) {
// 			return true
// 		} else {
// 			return false
// 		}
// 	} else {
// 		// 2. search the array

// 		// declare a constant pointer: half of the length so that it's the middle of the array
// 		let searchIndex = Math.floor(array.length/2) // round up
// 		console.log('INITIAL SEARCHINDEX = ', array[searchIndex])
// 		let subArrLength = array.length
// 		console.log('INITIAL SUBARRLENGTH = ', subArrLength, '\n')


// 		while (subArrLength >= 1) {
// 			subArrLength = Math.floor(subArrLength)
// 			console.log('\nNEW SUBARRLENGTH = ', subArrLength)
// 			// check if the search index
// 			if (array[searchIndex] === target) {
// 				return true
// 			} else if (array[searchIndex] > target){
// 				//going to the left
// 				searchIndex = Math.floor(searchIndex/2)
// 				console.log('TO LEFT SEARCHINDEX = ', array[searchIndex])
// 			} else {
// 				//searchIndex is less than the target, going to the right
// 				let half = Math.floor(searchIndex/2)
// 				searchIndex = searchIndex + half
// 				console.log('TO RIGHT SEARCHINDEX = ', array[searchIndex])
// 			}
// 			subArrLength = subArrLength/2

// 		}
// 	}
// 	// 3. else: if no target in the array, return false
// 	return false
// };
