import { Schema, model } from 'mongoose';
import httpStatus from 'http-status';

import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemisterInterface';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemesterConstant';
import ApiError from '../../../Errors/ApiErrors';

const academicSemisterSchema = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true, enum: academicSemesterTitles },
    year: { type: String, required: true },
    code: { type: String, required: true, enum: academicSemesterCodes },
    startMonth: { type: String, required: true, enum: academicSemesterMonths },
    endMonth: { type: String, required: true, enum: academicSemesterMonths },
  },
  { timestamps: true }
);

academicSemisterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic semester is already exist !'
    );
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemisterSchema
);
