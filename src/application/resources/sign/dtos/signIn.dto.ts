export interface SignInDto
{
   email: string,
   password: string
}

export interface SignInResultDto
{
   accessToken: string,
   expiresIn: number
}

