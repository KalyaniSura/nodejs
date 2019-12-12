const tasks ={
    tasks : [ 
        {
            text: "breakfast",
            completed : true
        } ,
        {
            text: "Lunch",
            completed : false
        } ,
        {
            text: "dinner",
            completed : false
        } 

    ],

    getTaksTodo() {
        /*this.tasks.forEach((task) => {
            if(task.completed !== true) {
                console.log(task.text+" "+task.completed);
            }
        }); */

        /*const taskToDo = this.tasks.filter((task)=>{
            return task.completed === false;
        });*/

        return this.tasks.filter( (task)=>{ return task.completed === false})

    }
}

console.log(tasks.getTaksTodo());