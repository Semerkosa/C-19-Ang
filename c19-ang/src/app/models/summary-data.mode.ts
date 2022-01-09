export interface ISummaryDataModel {
  ID: string;
  Message: string;
  Global: {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: Date;
  };
  Countries: [
    {
      ID: string;
      Country: string;
      CountryCode: string;
      Slug: string;
      NewConfirmed: number;
      TotalConfirmed: number;
      NewDeaths: number;
      TotalDeaths: number;
      NewRecovered: number;
      TotalRecovered: number;
      Date: Date;
      Premium: {};
    }
  ];
}
