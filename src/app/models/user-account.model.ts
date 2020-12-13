import {UserDtoModel} from './user-dto.model';
import {UserRegisterDtoModel} from './user-register-dto.model';

export class UserAccountModel extends UserRegisterDtoModel{
  public id: string;
}
