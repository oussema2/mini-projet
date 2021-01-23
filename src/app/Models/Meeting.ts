export default class Meeting {
    public id: number;
    public titre: string;
    public lieu: string
    public date_debut: Date;
    public date_fin: Date;
    static numMeeting = 0;



    constructor(titre: string, lieu: string, date_debut: Date, date_fin: Date) {
        Meeting.numMeeting = Meeting.numMeeting + 1;
        this.id = Meeting.numMeeting;
        this.titre = titre;
        this.lieu = lieu;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
    }


}