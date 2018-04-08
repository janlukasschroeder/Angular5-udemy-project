export class Recipe {
  public name: string;
  public descirption: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.descirption = desc;
    this.imagePath = imagePath;
  }
}
