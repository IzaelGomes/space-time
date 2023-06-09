import { FastifyInstance } from 'fastify'
import { prisma } from '../db/prismaClient'
import { request } from 'http'
export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories
  })

  app.get('/memories/:id', async () => {
    const memories = await prisma.memory.findMany()

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat('...'),
      }
    })
  })

  app.put('/memories/:id', async (request) => {
    const { id } = request.params
    const memories = await prisma.memory.findMany()

    return memories
  })

  app.delete('/memories/:id', async () => {
    const memories = await prisma.memory.findMany()

    return memories
  })
}
