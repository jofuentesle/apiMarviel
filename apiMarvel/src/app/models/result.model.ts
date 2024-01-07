export class Result {

    code: Number;
    status: string;
    data:any;	
    etag:string;	
    copyright:string;	
    attributionText:string;	
    attributionHTML:any

    constructor(
        code:Number,
        status: string,
        data:any,	
        etag:string,	
        copyright:string,	
        attributionText:string,	
        attributionHTML:any
    ) {
        this.code   = code;
        this.status = status;
        this.data   = data;
        this.etag   = etag;
        this.copyright = copyright;
        this.attributionText = attributionText;
        this.attributionHTML = attributionHTML;


    }

}