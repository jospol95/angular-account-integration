import {AuthenticationMethod} from './authentication-method.enum';


export class UserDtoModel {
  public email: string;
  public password: string;
  public authenticationMethod: AuthenticationMethod;
}
