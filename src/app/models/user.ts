export class User {

  private id: number;
  private name: string;
  private surname: string;
  private email: string;
  private password: string;

  constructor(id = 0 , name = '', surname = '', email = '', password = '') {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
  }

  public getId() {
    return this.id;
  }

  public setId( id: number) {
    this.id = id;
  }

  public getName() {
    return this.name;
  }

  public setName( name: string) {
    this.name = name;
  }

  public getSurname() {
    return this.surname;
  }

  public setSurname( surname: string) {
    this.surname = surname;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail( email: string) {
    this.email = email;
  }

  public getPassword() {
    return this.password;
  }

  public setPassword( password: string) {
    this.password = password;
  }
}
