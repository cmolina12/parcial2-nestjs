export const tasksServiceMock = {
  create: jest.fn().mockResolvedValue({
    _id: 'task789',
    title: 'Tarea simulada',
    completed: false,
    userId: '507f191e810c19729de860ea',
  }),
};
