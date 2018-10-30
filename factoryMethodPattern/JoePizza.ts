import PizzaStore from "./PizzaStore";
import Pizza from "./Pizza";
import PepperoniPizza from "./PepperoniPizza";
import CheesePizza from "./CheesePizza";

// Joe makes regular pizzas
export default class JoePizza extends PizzaStore {

  createPizza(type: string): Pizza {


    type = type.toLowerCase();
    let pizza: Pizza = undefined;

    switch (type) {
      case "cheese":
        pizza = new CheesePizza();
        break;
      case "pepperoni":
        pizza = new PepperoniPizza();
        break;
      default:
        throw "Please define valid pizza type!";
        break;
    }

    return pizza;
  }

}