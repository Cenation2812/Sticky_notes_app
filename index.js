let note = "";
let notes = [];
let count = 0;


function Create()
{
                let stickynote = document.createElement("div");
                stickynote.classList.add("sticky_note");
            
                let titlediv = document.createElement("div");
                titlediv.classList.add("note_title");
            
                let titleinp = document.createElement("input");
                titleinp.classList.add("title_inp");
                titleinp.type = "text";
                titleinp.placeholder = "Give a title";
                titleinp.id = "titleinp";
                
                titlediv.appendChild(titleinp);
            
                let notedescdiv = document.createElement("div");
                notedescdiv.classList.add("note_desc");
                let descinp = document.createElement("textarea");
                descinp.classList.add("textarea");
                descinp.placeholder = "Enter description";
                descinp.id = "descinp";
               
                notedescdiv.appendChild(descinp);
            
                stickynote.appendChild(titlediv);
                stickynote.appendChild(notedescdiv);
            
            
                let stickyNoteContainer = document.getElementById("sticky_note_container");
                stickyNoteContainer.appendChild(stickynote);
            
            
                let deleteicon = document.createElement("i");
                deleteicon.classList.add("fa-solid");
                deleteicon.classList.add("fa-trash-can");
                deleteicon.classList.add("delete_icon");
                deleteicon.addEventListener("click",()=>{
                    deleteNote();
                })
                
                stickynote.appendChild(deleteicon);
            
                let confirmicon = document.createElement("i");
                confirmicon.classList.add("fa-solid");
                confirmicon.classList.add("fa-circle-check");
                confirmicon.classList.add("confirmIcon");
                confirmicon.addEventListener("click",()=>{
                    readData();
                })
                stickynote.appendChild(confirmicon);
     
    }   
    
    
function readData()
{   
    let data = JSON.parse(localStorage.getItem("stickyNotes"));
    if(data.length === 0)
    {
        let obj = {};
        obj["id"] = ++count;
        let inputs = document.getElementsByTagName("input");
        obj["title"] = inputs[inputs.length - 1].value;
        let descs = document.getElementsByTagName("textarea");
        obj["description"] = descs[descs.length - 1].value;
        console.log(obj);
        notes.push(obj);
        localStorage.setItem("stickyNotes",JSON.stringify(notes));
        document.getElementById("msg_container").style.display = "flex";
        document.getElementById("msg_container").style.left = "1200px";
    }
    else
    {
        notes = data;
        let note = notes[notes.length - 1];
        let obj = {};
        obj["id"] = note.id + 1;
        let inputs = document.getElementsByTagName("input");
        obj["title"] = inputs[inputs.length - 1].value;
        let descs = document.getElementsByTagName("textarea");
        obj["description"] = descs[descs.length - 1].value;
        notes.push(obj);
        console.log(obj);
        console.log(notes);
        localStorage.setItem("stickyNotes",JSON.stringify(notes));
        document.getElementById("msg_container").style.display = "flex";
        document.getElementById("msg_container").style.left = "1200px";
    }
   
    
}

function displayData()
{
    document.getElementById("sticky_note_container").innerHTML = "";
    let data = JSON.parse(localStorage.getItem("stickyNotes"));
    console.log(notes);
    if(data!== null)
    {
        data.forEach((element,index)=>{
            let stickynote = document.createElement("div");
            stickynote.classList.add("sticky_note");
        
            let titlediv = document.createElement("div");
            titlediv.classList.add("note_title");
        
            let titleinp = document.createElement("input");
            titleinp.classList.add("title_inp");
            titleinp.type = "text";
            titleinp.placeholder = "Give a title";
            titleinp.value = element.title;
            titleinp.id = "titleinp";
            
            titlediv.appendChild(titleinp);
        
            let notedescdiv = document.createElement("div");
            notedescdiv.classList.add("note_desc");
            let descinp = document.createElement("textarea");
            descinp.classList.add("textarea");
            descinp.placeholder = "Enter description";
            descinp.value = element.description;
            descinp.id = "descinp";
           
            notedescdiv.appendChild(descinp);
        
            stickynote.appendChild(titlediv);
            stickynote.appendChild(notedescdiv);
        
        
            let stickyNoteContainer = document.getElementById("sticky_note_container");
            stickyNoteContainer.appendChild(stickynote);
        
        
            let deleteicon = document.createElement("i");
            deleteicon.classList.add("fa-solid");
            deleteicon.classList.add("fa-trash-can");
            deleteicon.classList.add("delete_icon");
            deleteicon.addEventListener("click",()=>{
                deleteNote(element.id);
            })
            
            stickynote.appendChild(deleteicon);
        
            let confirmicon = document.createElement("i");
            confirmicon.classList.add("fa-solid");
            confirmicon.classList.add("fa-circle-check");
            confirmicon.classList.add("confirmIcon");
            confirmicon.addEventListener("click",()=>{
                saveStickyNote();
            })
            stickynote.appendChild(confirmicon);
        })
    }
    
}

function deleteNote(noteid)
{
    notes = JSON.parse(localStorage.getItem("stickyNotes"));
    console.log(noteid);
    let deleteIndex = notes.findIndex((element,index)=>{
        return element.id === noteid;
    })
    console.log(deleteIndex)
    notes.splice(deleteIndex,1);
    localStorage.setItem("stickyNotes",JSON.stringify(notes));
    displayData();
}

displayData();





