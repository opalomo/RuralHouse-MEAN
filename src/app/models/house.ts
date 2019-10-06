export class House {

  private id: number;
  private houseName: string;
  private owner: string;
  private baths: number;
  private beds: number;
  private rooms: number;

  constructor(id = 0 , houseName = '', owner = '', rooms = 0, beds = 0, baths = 0) {
    this.id = id;
    this.houseName = houseName;
    this.owner = owner;
    this.rooms = rooms;
    this.beds = beds;
    this.baths = baths;
  }

  public getId() {
    return this.id;
  }

  public setId( id: number) {
    this.id = id;
  }

  public getHouseName() {
    return this.houseName;
  }

  public setHouseName( name: string) {
    this.houseName = name;
  }

  public getEmail() {
    return this.owner;
  }

  public setEmail( email: string) {
    this.owner = email;
  }

  public getRooms() {
    return this.rooms;
  }

  public setRooms( rooms: number) {
    this.rooms = rooms;
  }

  public getBeds() {
    return this.beds;
  }

  public setBeds( beds: number) {
    this.beds = beds;
  }

  public getBathrooms() {
    return this.baths;
  }

  public setBathrooms( baths: number) {
    this.baths = baths;
  }
}
