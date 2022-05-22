import React from "react";

import {
  DetailCreditsContainer,
  DirectorContainer,
  CrewDepartment,
  ActorsContainer,
  ActorsProfilesContainer,
} from "./DetailCredits.styles";

import DetailCreditPerson from "./DetailCreditPerson";

type Props = {
  director: Director;
  actors: Actor[];
};

type Director = {
  id: number;
  name: string;
  profile_path: string;
};

type Actor = {
  id: number;
  name: string;
  profile_path: string;
  character: string;
};

const DetailCredits = ({ director, actors }: Props) => {
  return (
    <DetailCreditsContainer>
      {director && (
        <DirectorContainer>
          <CrewDepartment>Director</CrewDepartment>
          <DetailCreditPerson
            profile_path={director.profile_path}
            name={director.name}
          />
        </DirectorContainer>
      )}
      {actors.length > 0 && (
        <ActorsContainer>
          <CrewDepartment>Leading Actors</CrewDepartment>
          <ActorsProfilesContainer>
            {actors.map((actor) => (
              <DetailCreditPerson
                key={actor.id}
                profile_path={actor.profile_path}
                name={actor.name}
                character={actor.character}
              />
            ))}
          </ActorsProfilesContainer>
        </ActorsContainer>
      )}
    </DetailCreditsContainer>
  );
};

export default DetailCredits;
