import Beverage from './Beverage';
import CondimentDecorator from "./CondimentDecorator";

export default class Sugar extends CondimentDecorator {

  beverage: Beverage;
  price: number;
  description: string;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
    this.price = 0.25;
    this.description = 'sugar';
  }

  getDesc(): string {
    return this.beverage.getDesc() + ', ' + this.description;
  }

  cost(): number {
    return this.price + this.beverage.cost();
  }

}