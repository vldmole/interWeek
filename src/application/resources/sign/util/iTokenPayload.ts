import { User } from "../../user/entity/user"

export interface ITokenPayload
{
   user: Partial<User>
}