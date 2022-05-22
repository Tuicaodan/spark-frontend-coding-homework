import React from "react";

import {
  ProfileContainer,
  ProfileImage,
  ProfileName,
  ProfileCharacter,
  ProfileText,
} from "./DetailCreditPerson.styles";
import missingCreditImage from "../../../asset/image/missingPortfolio.png";

type Props = {
  profile_path: string;
  name: string;
  character?: string;
};

const DetailCreditPerson = (props: Props) => {
  let profileImage = missingCreditImage;
  if (props.profile_path !== null) {
    const profileEndponit = process.env.REACT_APP_POSTER_185_API_BASE_URL
      ? process.env.REACT_APP_POSTER_185_API_BASE_URL
      : "https://image.tmdb.org/t/p/w185";
    profileImage = profileEndponit + props.profile_path;
  }

  return (
    <>
      <ProfileContainer>
        <ProfileImage
          src={profileImage}
          alt={props.name}
        />
        <ProfileText>
          <ProfileName>{props.name}</ProfileName>
          <ProfileCharacter>{props.character}</ProfileCharacter>
        </ProfileText>
      </ProfileContainer>
    </>
  );
};

export default DetailCreditPerson;
