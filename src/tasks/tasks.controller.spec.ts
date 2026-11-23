import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { tasksServiceMock } from '../../test/helpers/tasks-service.mock';

const VALID_USER_ID = '507f191e810c19729de860ea';

describe('TasksController', () => {
  let controller: TasksController;
  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [{ provide: TasksService, useValue: tasksServiceMock }],
    }).compile();
    controller = module.get<TasksController>(TasksController);
  });
  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });
  describe('create', () => {
    it('debe delegar la creación a TasksService', async () => {
      const dto = { title: 'Tarea simulada', userId: VALID_USER_ID };
      const result = await controller.create(dto);
      expect(tasksServiceMock.create).toHaveBeenCalledWith(dto);
      expect(tasksServiceMock.create).toHaveBeenCalledTimes(1);
      expect(result).toMatchObject({ _id: 'task789', title: 'Tarea simulada' });
    });
  });
});
