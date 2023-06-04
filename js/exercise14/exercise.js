function uncompletedNotes(vettore) {
  vettore.forEach((el) => {
    test = el.description;
    test2 = el.id;
    test3= el.done;
    test4= el.todos;
    if (test == ""|| test == undefined ) {
      console.log("è obbligatorio inserire la descrizione");
     }if (test2 == ""|| test2 == undefined ) {
      console.log("è obbligatorio inserire l'ID");
     }if (test3 == ""||test3 == undefined) {
      console.log("è obbligatorio inserire DONE");
     }if (test4 == ""||test4 == undefined) {
      console.log("è obbligatorio inserire TODOS");     
     }
     
    
  })
    
    
  }

const notes = [
  {
    id: 1,
    description: "Body-builder",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];
/* l'esrcizio so che non è corretto ma non sono riuscito a risolverlo */
uncompletedNotes(notes);
