export class Comic {

    constructor (
            public id: string,//(int, optional): The unique ID of the comic resource.,
            public digitalId: number,// (int, optional): The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.,
            public title: string,//(string, optional): The canonical title of the comic.,
            public issueNumber: any, //(double, optional): The number of the issue in the series (will generally be 0 for collection formats).,
            public variantDescription: string,// (string, optional): If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant.,
            public description: string,//(string, optional): The preferred description of the comic.,
            public modifiedD: Date,//(Date, optional): The date the resource was most recently modified.,
            public isbn: string, //(string, optional): The ISBN for the comic (generally only populated for collection formats).,
            public upc: string, //(string, optional): The UPC barcode number for the comic (generally only populated for periodical formats).,
            public diamondCode: string, //(string, optional): The Diamond code for the comic.,
            public ean: string, // (string, optional): The EAN barcode for the comic.,
            public issn: string, // (string, optional): The ISSN barcode for the comic.,
            public format: string, // (string, optional): The publication format of the comic e.g. comic, hardcover, trade paperback.,
            public pageCount: string, // (int, optional): The number of story pages in the comic.,
            public textObjects: any[], // (Array[TextObject], optional): A set of descriptive text blurbs for the comic.,
            public resourceURI: string, // (string, optional): The canonical URL identifier for this resource.,
            public urls: any[], // (Array[Url], optional): A set of public web site URLs for the resource.,
            public series: any, // (SeriesSummary, optional): A summary representation of the series to which this comic belongs.,
            public variants: any[], // (Array[ComicSummary], optional): A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).,
            public collections: any[], // (Array[ComicSummary], optional): A list of collections which include this comic (will generally be empty if the comic's format is a collection).,
            public collectedIssues: any[], // (Array[ComicSummary], optional): A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").,
            public dates: any[], // (Array[ComicDate], optional): A list of key dates for this comic.,
            public prices: any[], // (Array[ComicPrice], optional): A list of prices for this comic.,
            public thumbnail: any, // (Image, optional): The representative image for this comic.,
            public images: any[], // (Array[Image], optional): A list of promotional images associated with this comic.,
            public creators: any, // (CreatorList, optional): A resource list containing the creators associated with this comic.,
            public characters: any, // (CharacterList, optional): A resource list containing the characters which appear in this comic.,
            public stories: any, // (StoryList, optional),// A resource list containing the stories which appear in this comic.,
            public events: any, // (EventList, optional),// A resource list containing the events in which this comic appears.
            ){

            }
        }