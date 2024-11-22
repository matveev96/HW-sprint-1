import { UserType } from './HW2';

type CurrentUserPropsType = {
  curUser: UserType // пропиши типизацию
};

export const CurrentUser = ({curUser}: CurrentUserPropsType) => {
  return (
    <li key={curUser.id} id={`hw02-user-${curUser.id}`}>
      <strong>{curUser.name}</strong> (Age: {curUser.age})<strong> Address: </strong>
      {curUser.address.street}, {curUser.address.city}
    </li>
  );
};
