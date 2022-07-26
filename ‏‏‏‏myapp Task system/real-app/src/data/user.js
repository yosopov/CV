import uniqid from 'uniqid'
import axios from 'axios';

 


const addImageToServer=(index,link,name) =>{ 
    if (index===0) {
        axios.get('//localhost:8000/folder')
    }
    fetch(link)
    .then(res => res.blob())
    .then(blob => {
    const image = new File([blob], name,{
        type :"image/jpeg",
    })
    const formData = new FormData()
        formData.append('file', image);  
        axios.post('//localhost:8000/apload', formData)
        .then((e)=>{
            debugger
            users[index].image=(e.data) 
        }).catch((erorr)=>{console.error('Error')})
    })
}


addImageToServer(0,"https://cdn3.iconfinder.com/data/icons/ahasoft-war/512/spy-512.png","bob.png");
addImageToServer(1,"https://st.depositphotos.com/47577860/53852/v/600/depositphotos_538529522-stock-illustration-book-boy-education-icon-in.jpg","shem.png");
addImageToServer(2,"https://cdn3.iconfinder.com/data/icons/pictofoundry-pro-vector-set/512/Alien-512.png","shimon.png");
addImageToServer(3,"https://ujszo.com/sites/default/files/styles/pl_article_full_lead/public/lead_image/spy_1_0.png","ron.png");
addImageToServer(4,"https://file-hosting.dashnexpages.net/timmy/.editor/1616693252-0907.png","olivia.png");
addImageToServer(5,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLKfLcoPrXGTRbYi6CQBcnDwYkWOfiicgUw&usqp=CAU","isla.png");
addImageToServer(6,"https://cdn.create.vista.com/api/media/small/238400686/stock-vector-business-woman-profile-icon-isolated","mia.png");
addImageToServer(7,"https://cdn4.iconfinder.com/data/icons/ibrandify-female-user-action/512/5-512.png","amelia.png");

export let users=[

    {
        id:uniqid(),
        name:"bob" ,
        password:"bob123",
        image: '',
        execution:
            [{id_task:uniqid(), task:"follow shimon",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"follow shem",fromTime:"19:30",toTime:"22:00"},
            {id_task:uniqid(), task:"follow ron",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"follow La Casa De Papel",fromTime:"08:30",toTime:"12:00"}]
        },
    {
        id:uniqid(),
        name:"shem" ,
        password:"shem123",
        image:"",
        execution:
            [{id_task:uniqid(), task:"teach programming",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"Pick up a package",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"Meeting a friend",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"Sit down to eat",fromTime:"09:30",toTime:"12:00"}]
        }, 
    {
        id:uniqid(),
        name:"shimon" ,
        password:"shimon123",
        image:"",
        execution:
            [{id_task:uniqid(), task:"intrude to earth",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"enslave the world",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"to buy milk",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"emptying",fromTime:"09:30",toTime:"12:00"}]
        },
  
    {

        id:uniqid(),
        name:"ron" ,
        password:"ron123",
        image:"",
        execution:
            [{id_task:uniqid(), task:"hacking to Nasa",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"rest",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"hacking to Bank",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"rest",fromTime:"09:30",toTime:"12:00"}]
        },
  
    {
        id:uniqid(),
        name:"olivia" ,
        password:"olivia123",
        image:"",
        execution:
            [{id_task:uniqid(), task:"brush teeth",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"do sport",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"eat omelette",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"go work",fromTime:"09:30",toTime:"12:00"}]
        },
  
    {
        id:uniqid(),
        name:"isla" ,
        password:"isla123",
        image:"",
        execution:
            [{id_task:uniqid(), task:"brush teeth",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"sport",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"shower",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"eat icecream",fromTime:"09:30",toTime:"12:00"}]
        },
  
    {
        id:uniqid(),
        name:"mia" ,
        password:"mia123",
        image:"",
        execution:
            [{id_task:uniqid(), task:"sleep",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"sleep",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"to wake up",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"sleep",fromTime:"09:30",toTime:"12:00"}]
        },
  
    {
        id:uniqid(),
        name:"amelia" ,
        password:"amelia123",
        image:"",
        execution:
            [{id_task:uniqid(), task:"stop Ron",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"rest",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"to stop Ron",fromTime:"09:30",toTime:"12:00"},
            {id_task:uniqid(), task:"rest",fromTime:"09:30",toTime:"12:00"}]
        }
]
