const App = {
    data() {
        return{
            placeholderString: 'Введите название заметки',
            title: 'Список задач',
            inputValue: '',
            notes: []
        }
    },
    created() {
        const noteData = localStorage.getItem("list-notes");
        if (noteData){
            this.notes = JSON.parse(noteData); 
        }
        
    },
    methods: {
        inputChangeHandler (event){
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue){
                this.notes.push(this.inputValue);
                this.inputValue = '';
                localStorage.setItem('list-notes', JSON.stringify(this.notes));
            }
        },
        removeNote(noteIndex, event) {
            this.notes.splice(noteIndex, 1);
            localStorage.setItem('list-notes', JSON.stringify(this.notes));
            
        },
        removeAllNote(){
            this.notes = [];
            localStorage.clear();
        }
    }
}

Vue.createApp(App).mount('#app')