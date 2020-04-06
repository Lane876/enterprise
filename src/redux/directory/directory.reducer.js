const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "JACKETS",
      imageUrl:
        "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=9400",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "SNEAKERS",
      imageUrl:
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "WOMENS",
      imageUrl:
        "https://images.pexels.com/photos/3812413/pexels-photo-3812413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 4,
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://images.pexels.com/photos/3846456/pexels-photo-3846456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 5,
      size: "large",
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
