
// bubble sort 


function bubbleSort(arr:any[]) {
  

    for (let i = arr.length -1; i >0; i--) {
           
       for (let j = 0; j < i; j++) {
            
       if (arr[j]>arr[j+1]) {

        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
       }
        
       }
        
    }


    return arr
}
// selection sort
function selectionSort(arr:any[]) {
        for (let i = 0; i < arr.length; i++) {
           let minIndex =i
           for (let j = 0; j < arr.length; j++) {
           if (arr[j]<arr[minIndex]) {
             minIndex = j
           }
            
           }
           if (i!== minIndex) {
            let temp = arr[i]
            arr[i]=arr[minIndex]
            arr[minIndex] = temp
            

           }
            
        }

    return arr
}
// Insertion Sort
function insertionSort(arr:any[]) {

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i -1 
        while (j>=0 && arr[j]>key) {
            arr[j+1] = arr[j]
            j--

            
        }
        arr[j + 1] = key 
    }



    return arr
    
}
// merge sort function
function merge(left:any[],right:any[]) {
    const result :any[] = []
    let i =0 , j=0 ;
    while (i < left.length && j <right.length) {
        if (left[i]<right[j]) {
            result.push(left[i])
            i++
            
        }else{
            result.push(right[j])
            j++
        }
         
    }
    result.push(...left.slice(i))
    result.push(...right.slice(j))
    return result 
}

function mergeSort(arr:any[]) {
    if (arr.length<=1) {
        return arr
        
    }
    const middle = Math.floor(arr.length /2) 
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
    
}



 
const myArr = [2,6,234,213,45,546,56,2342,342,3]

console.log(mergeSort(myArr));













