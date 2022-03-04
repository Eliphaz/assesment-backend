const body = document.querySelector('body')
const foodForm = document.getElementById('foodForm')
const deleteFoodButton = document.getElementById('deleteFoodButton')
let foodList = []

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
      .then(res =>{
          const data = res.data
          alert(data)
      }
      )};
      
      document.getElementById("colorButton").onclick = function () {
        axios.get("http://localhost:4000/api/color/")
          .then(res =>{
              const data = res.data
              alert(data)
          }
          )};

foodForm.addEventListener('submit',(event) => {
    event.preventDefault()
    foodInputValue = document.getElementById('foodInput').value
    foodInputValueObj = {foodInputValue}
    if(foodList.length < 1){
    axios.post("http://localhost:4000/api/foodlist", foodInputValueObj)
        .then(res =>{
            const data = res.data
            foodList = data
            alert(`current foodlist is ${foodList}`)
        }
        )}else{
            axios.put("http://localhost:4000/api/foodlist", foodInputValueObj)
            .then(res =>{
                const data = res.data
                foodList = data
                alert(`current foodlist is ${foodList}`)
        }
        )

        }
    })

deleteFoodButton.addEventListener('click', (event)=>{
    event.preventDefault()
    if(foodList.length === 0){
        alert('nothing to delete')
    }else{
        axios.delete("http://localhost:4000/api/foodlist")
            .then(res =>{
                const data = res.data
                foodList = data
                alert(`current foodlist is ${foodList}`)
        }
        )
    }
})