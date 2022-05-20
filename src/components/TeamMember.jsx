import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";
import * as SocialIcons from "components/SocialIcons";

import "./TeamMember.scss";

const TeamMember = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  story,
  social: { twitter, facebook, linkedin, github, medium },
}) => {
  const twitterPart = twitter ? <SocialIcons.Twitter userName={twitter} /> : null;
  const facebookPart = facebook ? <SocialIcons.Facebook userName={facebook} /> : null;
  const linkedinPart = linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null;
  const githubPart = github ? <SocialIcons.Github userName={github} /> : null;
  const mediumPart = medium ? <SocialIcons.Medium userName={medium} /> : null;

  return (
    <div className="team-member">
      <Image
        className="mx-auto circle rounded-circle"
        fileName={imageFileName}
        alt={imageAlt || header || subheader}
      />
      <h4>{header}</h4>
      <p className="text-dark">{subheader}</p>
      <div>
        <span>“</span>
        <span className="font-italic">{story}</span>
        <span>”</span>
      </div>
      <div>
        {twitterPart}
        {facebookPart}
        {linkedinPart}
        {githubPart}
        {mediumPart}
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  social: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    medium: PropTypes.string,
  }),
  story: PropTypes.string,
};

TeamMember.defaultProps = {
  imageAlt: null,
  header: "",
  subheader: "",
  social: {
    twitter: null,
    facebook: null,
    linkedin: null,
    github: null,
    medium: null,
  },
  story: ""
};

export default TeamMember;
