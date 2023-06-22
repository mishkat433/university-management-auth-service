import express from 'express';
import { UserRoutes } from '../modules/users/users.route';
import { useSemesterRoutes } from '../modules/academicSemister/academicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: useSemesterRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
