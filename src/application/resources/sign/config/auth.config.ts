export default {
   jwt: {
      secret: process.env.AUTH_INTERWEEK_SECRET || 'default',
      expiresIn: 600,
   }
}