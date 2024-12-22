import React from "react";

interface ShoppingItemProps {
  id: number;
  name: string;
  removeItem: (id: number) => void;
}

class ShoppingItem extends React.Component<ShoppingItemProps> {
  constructor(props: ShoppingItemProps) {
    super(props);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }
  handleRemoveClick() {
    this.props.removeItem(this.props.id);
  }

  render() {
    return (
      <li>
        {this.props.name}
        <button onClick={this.handleRemoveClick}>Delete</button>
      </li>
    );
  }
}

export default ShoppingItem;
