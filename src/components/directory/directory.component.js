import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "../directory/directory.style.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 1
        },
        {
          title: "JACKETS",
          imageUrl:
            "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=9400",
          id: 2
        },
        {
          title: "SNEAKERS",
          imageUrl:
            "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 3
        },
        {
          title: "WOMENS",
          imageUrl:
            "https://images.pexels.com/photos/3812413/pexels-photo-3812413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 4,
          size: "large"
        },
        {
          title: "mens",
          imageUrl:
            "https://images.pexels.com/photos/3846456/pexels-photo-3846456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 5,
          size: "large"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
