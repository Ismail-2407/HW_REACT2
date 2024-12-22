import React from "react";
import ShoppingItem from "./ShoppingItem";

interface ShoppingItemType {
  id: number;
  name: string;
}

interface ShoppingListState {
  items: ShoppingItemType[];
}

class ShoppingList extends React.Component<unknown, ShoppingListState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: "Milk" },
        { id: 2, name: "Eggs" },
        { id: 3, name: "Bread" },
      ],
    };
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleRemoveItem(id: number) {
    this.setState((prevState: ShoppingListState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  }

  render() {
    return (
      <div>
        <h2>list of products</h2>
        <ul>
          {this.state.items.map((item) => (
            <ShoppingItem
              key={item.id}
              id={item.id}
              name={item.name}
              removeItem={this.handleRemoveItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
