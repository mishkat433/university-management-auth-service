import ApiError from '../../../Errors/ApiErrors';
import { academicSemesterTitlesCodeMapper } from './academicSemesterConstant';
import { IAcademicSemester } from './academicSemisterInterface';
import { AcademicSemester } from './academicSemisterModel';
import httpStatus from 'http-status';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitlesCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
