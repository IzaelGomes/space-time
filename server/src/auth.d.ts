import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJwt {
    user: {
      sub: string
      name: string
      avatarUrl: string
    }
  }
}
