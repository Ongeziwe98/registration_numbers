
function addElement () { 
    var inputElem = document.querySelector(".inputText").value
    let li = document.createElement("li")
    li.innerHTML=inputElem;
    var newList = document.querySelector(".displayBox")
    console.log(newList)
    newList.appendChild(li);

    var newObj = {
      registration: inputElem,
    }

    let arr = []
    

    if(localStorage.getItem('regitrationNumbers')) {
      let data = JSON.parse(localStorage.getItem('regitrationNumbers'))
     
      arr = data;
      arr.push(newObj);
      localStorage.setItem('regitrationNumbers', JSON.stringify(arr));

      // var newregs = { data }
      // console.log(newregs);
      // for(let i = 0; i < data.length; i++) {
      //   let elem = data[i]
      //  document.querySelector('.displayBox li').innerHTML += elem.registration;
      //   console.log(elem.registration);
      // }

    } else {
      arr.push(newObj);
      localStorage.setItem('regitrationNumbers', JSON.stringify(arr));
    }
   
    
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");

    if (checkedRadioBtn) {
        var radioType = checkedRadioBtn.value;
    }
    // if (itemType.value) {
    //     display = greetings.greet(itemType.value, radioType);
    //     displayBoxElem.innerHTML = display;
    // }

  }
  //console.log(document.querySelector('.displayBox'));

  if(localStorage.getItem('regitrationNumbers')) {
    let data = JSON.parse(localStorage.getItem('regitrationNumbers'))
    //let registrations = {data}
    console.log(data.length)
    for(let i = 0; i < data.length; i++) {
      let elem = data[i]
      
      document.querySelector('.displayBox').innerHTML += "<li>" + elem.registration + "<li>";
    }
  } 


  addBtnElem = document.querySelector(".buttonClicked")
  addBtnElem.addEventListener('click', addElement);