import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "../directory/directory.style.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProsp = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProsp)(Directory);
