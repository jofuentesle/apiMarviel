export class Characters {
    constructor(

        public id: number,
        public title: string,
        public description: string,
        public modified: Date,
        public resourceURI: string,
        public urls: any,
        public thumbnail: {
             path: string,
             extension: string
        },
        public comics: any,
        public stories: { 
            available:number,
            collectionURI:string,
            items: [],
            returned: number,
        },        
        public events: any,
        public series: any,
        public data?:any,
        public result?:any,

    ){

    }
}