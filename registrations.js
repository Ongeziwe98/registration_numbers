function regNumbers() {
    var arr = [];
    var get;

    function addRegs(list) {
        get = list;
        arr.push(list)

    }
    function getReg(){
        return arr;
    }

    function getFilter() {
        var cities = [];

        for (let i = 0; i < arr.length; i++) {

            if (arr[i].startsWith("CA")) {
                cities.push(arr[i]);
            } 

            else if (arr[i].startsWith("CY")) {
                cities.push(arr[i]);
            } 

            else if (arr[i].startsWith("GP")) {
                cities.push(arr[i]);
            } 

        }
        return cities;
    }
   
    return {
        getFilter,
        addRegs,
        getReg

    }

}


// var regNumbersInstance = regNumbers();
// var arrTest = ['CA 111', 'CY 333', 'CA 888', '123 GP'];
// alert(regNumbersInstance.fromGauteng(arrTest));