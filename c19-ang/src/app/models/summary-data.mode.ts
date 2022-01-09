export class ISummaryDataModel {
  ID: '' | undefined;
  Message: '' | undefined;
  Global: {
    NewConfirmed: 0;
    TotalConfirmed: 0;
    NewDeaths: 0;
    TotalDeaths: 0;
    NewRecovered: 0;
    TotalRecovered: 0;
    Date: Date;
  } | undefined;
  Countries: [
    {
      ID: '';
      Country: '';
      CountryCode: '';
      Slug: '';
      NewConfirmed: 0;
      TotalConfirmed: 0;
      NewDeaths: 0;
      TotalDeaths: 0;
      NewRecovered: 0;
      TotalRecovered: 0;
      Date: Date;
    }
  ] | undefined;
}
