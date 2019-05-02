function w3_open() {
      
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("mySidebar").style.display = "block";

  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }


const inputs = document.querySelectorAll("input");
const page = document.getElementById('page');

function create_Ele(){
    let element = document.createElement(inputs[0].value);
    for(let i =0;i< inputs.length;i++){
      let attribute = inputs[i].getAttribute('placeholder');
      let value = inputs[i].value;
      if(value){
        element[attribute] = value
      }
      page.appendChild(element);
    }
    
    console.log(element);
}
