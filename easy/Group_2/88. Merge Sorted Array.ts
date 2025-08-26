



function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let p1: number = m - 1
    let p2: number = n - 1
    // get the length that will get from num1 and return into p1
    // get the lenght of num2 and return into p2
    // make two pointer each pointer go to each list from end to start (stack)

    let k: number = nums1.length - 1
    // get the length of num1 cuz we will change it and return void 


    while(p2 >= 0){
        // be in the loop until the sliced length of num2 burn out
        if(nums1[p1] > nums2[p2]){
            // get the lower value and apply it for the item where index
            nums1[k] = nums1[p1]
            // change the last item in num1 to the item what pointer in num1 look at  

            p1--
            // move the pointer to next element 
        } else {
            nums1[k] = nums2[p2]
            p2--
        }
        k--
        // go to next element 
    }
};