//coordinates da aggiungere

//classe animale contiene tutte le info (non c'è bisogno di getters and setters js è un po come python)
class Animal {
    constructor(tracker, name, type, bday, sex, lmilk, children, hrtbt, hrtbtH, cordinate,address,note) {
        this.type = type;
        this.tracker= tracker;
        this.name= name;
        this.bday= bday;
        this.sex= sex;
        this.lmilk= lmilk;
        this.children= children;
        this.hrtbt= hrtbt;
        this.hrtbtH= hrtbtH;
        this.cordinate=cordinate;
        this.address= address;
        this.note= note;
        this.marker = undefined;
    }
}

//class register contiene 15 animali e alcuni metodi di supporto...
class Register {
    constructor () {
        this.list =  [
            new Animal("q001w","Nuvola","Bovino",new Date(2018,9,9).toDateString(),"Femmina",12,3,70,[70,71,71,81,69,70], {lat: 40.690140, lng: 14.714848},"Via Antonio Orilia","Nuvola ha subito una operazione da poco. Potrebbe avere battiti alti"),
            new Animal("q002w","Pistacchio","Bovino",new Date(2017,9,6).toDateString(),"Maschio",0,0,69,[70,71,71,81,69,70],{lat: 40.693781, lng: 14.757769},"Via del Risorgimento","Nessuna nota"),
            new Animal("q003w","Mandorla","Bovino",new Date(2019,9,6).toDateString(),"Femmina",9,1,71,[70,71,71,81,69,70],{lat: 40.695697, lng: 14.744302},"Strada provinciale Croce","Nessuna nota"),
            new Animal("q004w","Nocciola","Caprino",new Date(2018,2,6).toDateString(),"Femmina",8,1,71,[70,71,72,71,69,70],{lat: 40.695730, lng: 14.744270},"Strada provinciale Croce","Nessuna nota"),
            new Animal("q005w","Noce","Caprino",new Date(2017,9,2).toDateString(),"Femmina",14,3,70,[70,71,71,81,69,70],{lat: 40.695728, lng: 14.744249},"Strada provinciale Croce","Nessuna nota"),
            new Animal("q006w","Neve","Caprino",new Date(2020,4,6).toDateString(),"Femmina",0,0,69,[70,71,71,81,69,70],{lat: 40.695759, lng: 14.744236},"Strada provinciale Croce","Nessuna nota"),
            new Animal("q007w","Biancaneve","Caprino",new Date(2020,9,1).toDateString(),"Femmina",0,0,70,[70,71,71,81,69,70],{lat: 40.695787, lng: 14.744223},"Strada provinciale Croce","Nessuna nota"),
            new Animal("q008w","Brontolo","Caprino",new Date(2020,9,6).toDateString(),"Maschio",0,0,70,[70,71,71,81,69,70],{lat: 40.695788, lng: 14.744195},"Strada provinciale Croce","Nessuna nota"),
            new Animal("q009w","Mammolo","Caprino",new Date(2017,9,6).toDateString(),"Maschio",0,0,72,[70,71,71,81,69,70], {lat: 40.695803, lng: 14.744192},"Strada provinciale Croce","Nessuna nota"),
            new Animal("q010w","Cenerentola","Ovino",new Date(2017,9,7).toDateString(),"Femmina",13,3,70,[70,71,71,81,69,70],{lat: 40.695766, lng: 14.744184},"Strada provinciale Croce","Nessuna nota"),
            new Animal("q011w","Alice","Ovino",new Date(2016,9,6).toDateString(),"Femmina",19,4,73,[70,71,71,81,69,70],{lat: 40.696517, lng: 14.744356},"Strada provinciale Croce","Nessuna nota"),
            new Animal("q012w","Dolly","Ovino",new Date(2017,10,8).toDateString(),"Femmina",23,3,68,[70,71,71,81,69,70],{lat: 40.696459, lng: 14.744342},"Strada provinciale Croce","Nessuna nota"),
            new Animal("q013w","Aladino","Ovino",new Date(2016,5,1).toDateString(),"Maschio",0,0,0,[70,71,71,81,59,41],{lat: 40.696491, lng: 14.744370},"Strada provinciale Croce","Nessuna nota"),
            new Animal("q014w","Jasmine","Ovino",new Date(2020,9,6).toDateString(),"Femmina",0,0,70,[70,71,71,81,69,70],{lat: 40.696808, lng: 14.744145},"Strada provinciale Croce","Nessuna nota"),
            new Animal("q015w","Bianchina","Ovino",new Date(2020,1,6).toDateString(),"Femmina",0,0,70,[70,71,71,81,69,70],{lat: 40.696774, lng: 14.744154},"Strada provinciale Croce","Nessuna nota")
        ];   
    }
//, 
    //crea una lista con tutti i dati da caricare nel registro animali ({gps, name, type})
    
    
    //crea una lista con tutti i dati da caricare nel registro animali ({gps, name, type, batttiti})
    

    //ottieni l'animale, dato il gps, per outputtare i dati nei modal
    getAnimal(gps) {
        for (var i = 0; i < this.list.length; i++) {
            if(this.list[i].tracker == gps)
                return this.list[i];
        }
        
        return undefined;
    }

    //dato il gps, modifica i dati passati
    update(gps, milkLitres, newChildren) {
        for (var i = 0; i < this.list.length; i++) {
            if(this.list[i].tracker == gps)
            {
                this.list[i].lmilk=milkLitres
                this.list[i].children=newChildren;
            }
        }
    }

    //dato il gps, ricerca l'animale, risale all'indice e lo nasconde dal registro
    deleteAnimal(gps) {
        var animal = this.getAnimal(gps)
        var index = this.list.indexOf(animal);
    
        document.getElementById("register").children[1].children[index].style.display="none"
       

        return this.list;
    }

    addAnimal(animal) {
        this.list.push(animal)
        //console.log("Dati:"+animal.type+animal.sex+animal.lmilk+animal.children)
        loadAnimal(animal, this.list)
    }

}

