let tx = `{
  "Nima" : {
      "fullName" : "Nima Sayadi",
      "image" : "https://avatars.githubusercontent.com/u/67962834?v=4",
      "id" : 1,
      "age" : 22,
      "from" : "Iran",
      "job" : "Software Engineer"
  },
  "Jacob" : {
      "fullName" : "Jacob Allen",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMihDVsW4ZtPNVa-Ru5LHIPwUFLlDqpqPtgVwT4uXuZyTIH-ub",
      "id" : 2,
      "age" : 28,
      "from" : "FRANCE",
      "job" : "Math Engineer"
  },
  "maria" : {
      "fullName" : "Maria Quenn",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMihDVsW4ZtPNVa-Ru5LHIPwUFLlDqpqPtgVwT4uXuZyTIH-ub",
      "id" : 3,
      "age" : 32,
      "from" : "ITALY",
      "job" : "Computer Engineer"
  },
  "jack" : {
      "fullName" : "Jack Jones",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMihDVsW4ZtPNVa-Ru5LHIPwUFLlDqpqPtgVwT4uXuZyTIH-ub",
      "id" : 4,
      "age" : 26,
      "from" : "CANADA",
      "job" : "industrial engineer"
  },
  "harry" : {
      "fullName" : "Harry Williams",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMihDVsW4ZtPNVa-Ru5LHIPwUFLlDqpqPtgVwT4uXuZyTIH-ub",
      "id" : 5,
      "age" : 34,
      "from" : "USA",
      "job" : "architect"
  },
  "charlie" : {
      "fullName" : "Charlie Brown",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMihDVsW4ZtPNVa-Ru5LHIPwUFLlDqpqPtgVwT4uXuZyTIH-ub",
      "id" : 6,
      "age" : 23,
      "from" : "GERMANY",
      "job" : "designer"
  },
  "emily" : {
      "fullName" : "Emily Taylor",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMihDVsW4ZtPNVa-Ru5LHIPwUFLlDqpqPtgVwT4uXuZyTIH-ub",
      "id" : 7,
      "age" : 36,
      "from" : "CHINA",
      "job" : "electrical engineer"
  },
  "ava" : {
      "fullName" : "Ava Davies",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMihDVsW4ZtPNVa-Ru5LHIPwUFLlDqpqPtgVwT4uXuZyTIH-ub",
      "id" : 8,
      "age" : 25,
      "from" : "TURKEY",
      "job" : "construction engineer"
  },
  "jessica" : {
      "fullName" : "Jessica Wilson",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMihDVsW4ZtPNVa-Ru5LHIPwUFLlDqpqPtgVwT4uXuZyTIH-ub",
      "id" : 9,
      "age" : 27,
      "from" : "FRANCE",
      "job" : "Cyber security expert"
  },
  "isabella" : {
      "fullName" : "Isabella Evans",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMihDVsW4ZtPNVa-Ru5LHIPwUFLlDqpqPtgVwT4uXuZyTIH-ub",
      "id" : 10,
      "age" : 29,
      "from" : "RUSSIA",
      "job" : "designer"
  }
}`;
const info = JSON.parse(tx);
let backWall = $("#backWall");
let modal = $("#modalBox");

$(".more").click(function(){
    backWall.show(0);
    modal.show(500);
  });

$(".close").click(function(){
  backWall.hide(0);
  modal.hide(0);
})
window.onclick = function(event) {
  if (event.target == document.getElementById("backWall")) {
    backWall.hide(0);
    modal.hide(0);
  }
};

  let more = document.querySelectorAll(".more");
  more.forEach( (x)=> x.addEventListener("click", function(){
    let a = x.getAttribute("id");
    $("#fullName").text(info[a]["fullName"]);
    $("#id").text(info[a]["id"]);
    $("#age").text(info[a]["age"]);
    $("#from").text(info[a]["from"]);
    $("#job").text(info[a]["job"]);
    var imageSource = info[a]["image"];
    let profile_image = document.getElementById("img");
    profile_image.setAttribute("src",imageSource);
  }))
